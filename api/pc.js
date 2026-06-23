import crypto from "node:crypto";
import { admin, getAdminDb } from "./_lib/firebaseAdmin.js";

const PACKAGES = {
  starter: { credits: 3,  price: 15000 },
  popular: { credits: 10, price: 49000 },
  premium: { credits: 30, price: 129000 },
};

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { uid, packageId } = req.body;
    const pkg = PACKAGES[packageId];
    if (!pkg || !uid) return res.status(400).json({ error: 'Invalid request' });

    const orderCode = Number(String(Date.now()).slice(-10));
    const amount    = pkg.price;
    const description = `TSHL ${orderCode}`.slice(0, 25);
    const baseUrl   = process.env.APP_URL || 'https://labantuyensinh.vercel.app';
    const returnUrl = `${baseUrl}/?tab=numerology`;
    const cancelUrl = `${baseUrl}/?tab=numerology`;

    // PayOS signature: sorted params joined with &
    const signData = `amount=${amount}&cancelUrl=${cancelUrl}&description=${description}&orderCode=${orderCode}&returnUrl=${returnUrl}`;
    const signature = crypto
      .createHmac('sha256', process.env.PAYOS_CHECKSUM_KEY)
      .update(signData)
      .digest('hex');

    const db = getAdminDb();
    const orderRef = db.collection('payment_orders').doc(String(orderCode));
    await orderRef.set({
      orderCode,
      uid,
      packageId,
      credits: pkg.credits,
      amount,
      description,
      status: 'PENDING',
      credited: false,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    const payosRes = await fetch('https://api-merchant.payos.vn/v2/payment-requests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-client-id': process.env.PAYOS_CLIENT_ID,
        'x-api-key':   process.env.PAYOS_API_KEY,
      },
      body: JSON.stringify({ orderCode, amount, description, returnUrl, cancelUrl, signature }),
    });

    const result = await payosRes.json();
    if (result.code !== '00') {
      console.error('PayOS error:', result);
      await orderRef.set({
        status: 'FAILED_CREATE',
        payosCreateError: result,
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      }, { merge: true });
      return res.status(500).json({ error: result.desc || 'PayOS error' });
    }

    await orderRef.set({
      checkoutUrl: result.data.checkoutUrl,
      qrCode: result.data.qrCode,
      paymentLinkId: result.data.paymentLinkId || null,
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    }, { merge: true });

    return res.status(200).json({
      orderCode,
      qrCode:      result.data.qrCode,
      checkoutUrl: result.data.checkoutUrl,
      amount,
      credits:     pkg.credits,
    });
  } catch (err) {
    console.error('payos-create:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
