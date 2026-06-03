import crypto from "node:crypto";

const CHECKSUM_KEY  = process.env.PAYOS_CHECKSUM_KEY;
const FIREBASE_KEY  = process.env.VITE_FIREBASE_API_KEY;
const PROJECT_ID    = process.env.VITE_FIREBASE_PROJECT_ID || 'exe-labantuyensinh';
const FS_BASE       = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents`;
const SIGN_IN_URL   = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_KEY}`;

function verifySig(data, sig) {
  const expected = crypto.createHmac('sha256', CHECKSUM_KEY).update(data).digest('hex');
  return expected === sig;
}

/** Get anonymous Firebase ID token (for Firestore REST auth) */
async function getAnonToken() {
  const r = await fetch(SIGN_IN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ returnSecureToken: true }),
  });
  const j = await r.json();
  return j.idToken;
}

/** Firestore REST GET */
async function fsGet(token, path) {
  const r = await fetch(`${FS_BASE}/${path}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return r.json();
}

/** Firestore REST PATCH (update specific fields) */
async function fsPatch(token, path, fields, updateMask) {
  const mask = updateMask.map(f => `updateMask.fieldPaths=${encodeURIComponent(f)}`).join('&');
  const r = await fetch(`${FS_BASE}/${path}?${mask}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ fields }),
  });
  return r.json();
}

function fInt(n)   { return { integerValue: String(n) }; }
function fStr(s)   { return { stringValue: s }; }
function fTime()   { return { timestampValue: new Date().toISOString() }; }

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  // PayOS sends GET to verify URL
  if (req.method === 'GET')  return res.status(200).json({ ok: true });
  if (req.method !== 'POST') return res.status(405).end();

  try {
    const { code, desc, data, signature } = req.body || {};
    if (!data) return res.status(200).json({ message: 'no data' });

    // 1. Verify PayOS signature
    const signStr = `code=${code}&desc=${desc}&orderCode=${data.orderCode}&status=${data.status}`;
    if (!verifySig(signStr, signature)) {
      console.warn('Bad signature, orderCode:', data.orderCode);
      return res.status(200).json({ message: 'signature mismatch' });
    }

    if (data.status !== 'PAID') {
      return res.status(200).json({ message: 'not PAID' });
    }

    const token    = await getAnonToken();
    const orderKey = String(data.orderCode);

    // 2. Read order
    const orderDoc = await fsGet(token, `payment_orders/${orderKey}`);
    if (!orderDoc.fields) {
      console.warn('Order not found:', orderKey);
      return res.status(200).json({ message: 'order not found' });
    }

    const { uid, credits, status } = {
      uid:     orderDoc.fields.uid?.stringValue,
      credits: parseInt(orderDoc.fields.credits?.integerValue || '0'),
      status:  orderDoc.fields.status?.stringValue,
    };

    if (status === 'PAID') return res.status(200).json({ message: 'already processed' });

    // 3. Mark order PAID
    await fsPatch(token, `payment_orders/${orderKey}`,
      { status: fStr('PAID'), paidAt: fTime() },
      ['status', 'paidAt']
    );

    // 4. Add credits to user
    const userDoc = await fsGet(token, `users/${uid}`);
    const cur      = parseInt(userDoc.fields?.credits?.integerValue || '0');
    const tot      = parseInt(userDoc.fields?.totalPurchased?.integerValue || '0');

    await fsPatch(token, `users/${uid}`,
      { credits: fInt(cur + credits), totalPurchased: fInt(tot + credits) },
      ['credits', 'totalPurchased']
    );

    // 5. Log transaction
    await fetch(`${FS_BASE}/users/${uid}/transactions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({
        fields: {
          credits:   fInt(credits),
          method:    fStr('payos'),
          priceVnd:  fInt(orderDoc.fields.amount?.integerValue || 0),
          orderCode: fStr(orderKey),
          createdAt: fTime(),
        },
      }),
    });

    console.log(`Payment OK: uid=${uid} credits=${credits} order=${orderKey}`);
    return res.status(200).json({ message: 'success' });

  } catch (err) {
    console.error('webhook error:', err.message);
    return res.status(200).json({ message: 'handled' });
  }
}
