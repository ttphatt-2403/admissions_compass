import crypto from "node:crypto";
import { admin, getAdminDb } from "./_lib/firebaseAdmin.js";

function buildSignatureData(data) {
  return Object.entries(data || {})
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([key, value]) => `${key}=${value ?? ""}`)
    .join("&");
}

function verifySignature(data, signature) {
  if (!process.env.PAYOS_CHECKSUM_KEY || !signature) return false;
  const expected = crypto
    .createHmac("sha256", process.env.PAYOS_CHECKSUM_KEY)
    .update(buildSignatureData(data))
    .digest("hex");
  try {
    return crypto.timingSafeEqual(
      Buffer.from(expected, "hex"),
      Buffer.from(signature, "hex"),
    );
  } catch {
    return false;
  }
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method === "GET") return res.status(200).json({ ok: true });
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { code, success, data, signature } = req.body || {};
  if (!data?.orderCode) {
    return res.status(400).json({ error: "Missing payment data" });
  }
  if (!verifySignature(data, signature)) {
    console.warn("[payos-webhook] invalid signature", data.orderCode);
    return res.status(400).json({ error: "Invalid signature" });
  }

  const orderCode = String(data.orderCode);
  const db = getAdminDb();
  const orderRef = db.collection("payment_orders").doc(orderCode);

  if (code !== "00" || data.code !== "00" || success === false) {
    await orderRef.set(
      {
        status: "CANCELLED",
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        rawWebhookLast: data,
      },
      { merge: true },
    );
    return res.status(200).json({ message: "payment not successful" });
  }

  try {
    let alreadyProcessed = false;
    await db.runTransaction(async (transaction) => {
      const orderSnapshot = await transaction.get(orderRef);
      if (!orderSnapshot.exists) {
        throw new Error(`ORDER_NOT_FOUND:${orderCode}`);
      }

      const order = orderSnapshot.data();
      if (order.credited === true || order.status === "PAID") {
        alreadyProcessed = true;
        return;
      }
      if (!order.uid || !Number.isFinite(Number(order.credits))) {
        throw new Error(`INVALID_ORDER:${orderCode}`);
      }
      if (Number(data.amount) !== Number(order.amount)) {
        throw new Error(
          `AMOUNT_MISMATCH:expected=${order.amount},actual=${data.amount}`,
        );
      }

      const userRef = db.collection("users").doc(order.uid);
      const transactionRef = userRef
        .collection("transactions")
        .doc(`payos_${orderCode}`);

      transaction.set(
        userRef,
        {
          credits: admin.firestore.FieldValue.increment(order.credits),
          totalPurchased: admin.firestore.FieldValue.increment(order.credits),
          updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        },
        { merge: true },
      );
      transaction.set(transactionRef, {
        type: "credit_purchase",
        method: "payos",
        orderCode,
        paymentLinkId: data.paymentLinkId || order.paymentLinkId || null,
        payosReference: data.reference || null,
        credits: order.credits,
        priceVnd: order.amount,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });
      transaction.set(
        orderRef,
        {
          status: "PAID",
          credited: true,
          paidAt: admin.firestore.FieldValue.serverTimestamp(),
          updatedAt: admin.firestore.FieldValue.serverTimestamp(),
          payosReference: data.reference || null,
          paymentLinkId: data.paymentLinkId || order.paymentLinkId || null,
          rawWebhookLast: data,
        },
        { merge: true },
      );
    });

    console.log(
      `[payos-webhook] ${alreadyProcessed ? "already processed" : "credited"} order=${orderCode}`,
    );
    return res.status(200).json({
      message: alreadyProcessed ? "already processed" : "success",
    });
  } catch (error) {
    console.error("[payos-webhook] processing failed", {
      orderCode,
      error: error.message,
    });
    return res.status(500).json({ error: error.message });
  }
}
