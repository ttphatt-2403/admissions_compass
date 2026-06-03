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

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method === 'GET')     return res.status(200).json({ ok: true });
  if (req.method !== 'POST')    return res.status(405).end();

  try {
    const { code, desc, data, signature } = req.body || {};
    if (!data) return res.status(200).json({ message: 'no data' });

    // 1. Verify PayOS signature (skip in debug mode)
    const skipSig = process.env.SKIP_SIG === '1';
    if (!skipSig && !verifySig(data, signature)) {
      console.warn('Bad signature, orderCode:', data.orderCode);
      return res.status(200).json({ message: 'signature mismatch' });
    }

    if (data.status !== 'PAID') {
      return res.status(200).json({ message: `status=${data.status}` });
    }

    const orderKey = String(data.orderCode);

    // 2. Update payment_orders status → PAID (no auth needed, Firestore rules allow it)
    const patchUrl = `${FS_BASE}/payment_orders/${orderKey}` +
      `?updateMask.fieldPaths=status&updateMask.fieldPaths=paidAt&updateMask.fieldPaths=payosRef`;

    const patchRes = await fetch(patchUrl, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fields: {
          status:   { stringValue: 'PAID' },
          paidAt:   { timestampValue: new Date().toISOString() },
          payosRef: { stringValue: data.reference || '' },
        },
      }),
    });

    const patchData = await patchRes.json();

    if (patchData.error) {
      console.error('Firestore patch error:', JSON.stringify(patchData.error));
      return res.status(200).json({ message: 'firestore error', detail: patchData.error.message });
    }

    console.log(`Payment OK: orderCode=${orderKey}, amount=${data.amount}`);
    return res.status(200).json({ message: 'success' });

  } catch (err) {
    console.error('webhook error:', err.message);
    return res.status(200).json({ message: 'handled' });
  }
}
