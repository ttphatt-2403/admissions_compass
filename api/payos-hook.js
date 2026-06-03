import crypto from "node:crypto";

const CHECKSUM_KEY = process.env.PAYOS_CHECKSUM_KEY;
const PROJECT_ID   = process.env.VITE_FIREBASE_PROJECT_ID || 'exe-labantuyensinh';
const FS_BASE      = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents`;

function buildSigStr(dataObj) {
  return Object.entries(dataObj)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([k, v]) => `${k}=${v ?? ''}`)
    .join('&');
}

function verifySig(dataObj, sig) {
  const sigStr   = buildSigStr(dataObj);
  const expected = crypto.createHmac('sha256', CHECKSUM_KEY).update(sigStr).digest('hex');
  try {
    return crypto.timingSafeEqual(Buffer.from(expected, 'hex'), Buffer.from(sig, 'hex'));
  } catch { return false; }
}

async function fsGet(path) {
  const r = await fetch(`${FS_BASE}/${path}`);
  return r.json();
}

async function fsPatch(path, fields, maskFields) {
  const mask = maskFields.map(f => `updateMask.fieldPaths=${encodeURIComponent(f)}`).join('&');
  const r = await fetch(`${FS_BASE}/${path}?${mask}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fields }),
  });
  return r.json();
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method === 'GET')     return res.status(200).json({ ok: true, v: 'v4' });
  if (req.method !== 'POST')    return res.status(405).end();

  try {
    const { code, data, signature } = req.body || {};
    if (!data) return res.status(200).json({ message: 'no data' });

    if (code !== '00') return res.status(200).json({ message: `code=${code}` });

    const orderKey = String(data.orderCode);

    // 1. Đọc payment_orders để lấy uid và credits (cần rule allow read: if true)
    const orderDoc = await fsGet(`payment_orders/${orderKey}`);
    if (!orderDoc.fields) {
      console.warn('Order not found:', orderKey);
      return res.status(200).json({ message: 'order not found' });
    }

    if (orderDoc.fields.status?.stringValue === 'PAID') {
      return res.status(200).json({ message: 'already processed' });
    }

    const uid     = orderDoc.fields.uid?.stringValue;
    const credits = parseInt(orderDoc.fields.credits?.integerValue || orderDoc.fields.credits?.doubleValue || '3');

    // 2. Update payment_orders → PAID
    const orderPatch = await fsPatch(`payment_orders/${orderKey}`,
      {
        status:   { stringValue: 'PAID' },
        paidAt:   { timestampValue: new Date().toISOString() },
        payosRef: { stringValue: data.reference || '' },
        credited: { booleanValue: true },
      },
      ['status', 'paidAt', 'payosRef', 'credited']
    );
    if (orderPatch.error) {
      console.error('Order patch error:', orderPatch.error.message);
      return res.status(200).json({ message: 'order patch error', detail: orderPatch.error.message });
    }

    // 3. Update users/{uid} credits (cần rule allow write: if true)
    if (uid) {
      const userDoc = await fsGet(`users/${uid}`);
      const curCredits = parseInt(userDoc.fields?.credits?.integerValue || '0');
      const curTotal   = parseInt(userDoc.fields?.totalPurchased?.integerValue || '0');

      const userPatch = await fsPatch(`users/${uid}`,
        {
          credits:        { integerValue: String(curCredits + credits) },
          totalPurchased: { integerValue: String(curTotal + credits) },
        },
        ['credits', 'totalPurchased']
      );
      if (userPatch.error) {
        console.error('User patch error:', userPatch.error.message);
      } else {
        console.log(`Credits added: uid=${uid} +${credits} credits`);
      }

      // 4. Log transaction
      await fetch(`${FS_BASE}/users/${uid}/transactions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fields: {
            credits:   { integerValue: String(credits) },
            method:    { stringValue: 'payos' },
            priceVnd:  { integerValue: String(data.amount || 0) },
            orderCode: { stringValue: orderKey },
            createdAt: { timestampValue: new Date().toISOString() },
          },
        }),
      });
    }

    console.log(`Payment OK: orderCode=${orderKey}, uid=${uid}, credits=${credits}`);
    return res.status(200).json({ message: 'success' });

  } catch (err) {
    console.error('webhook error:', err.message);
    return res.status(200).json({ message: 'handled' });
  }
}
