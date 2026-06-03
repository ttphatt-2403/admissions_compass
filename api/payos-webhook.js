import crypto from 'crypto';
import admin from 'firebase-admin';

// Init Firebase Admin once
if (!admin.apps.length) {
  try {
    const sa = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON || '{}');
    admin.initializeApp({ credential: admin.credential.cert(sa) });
  } catch (e) {
    console.error('Firebase Admin init error:', e.message);
  }
}

function verifySig(data, sig) {
  const expected = crypto
    .createHmac('sha256', process.env.PAYOS_CHECKSUM_KEY)
    .update(data)
    .digest('hex');
  return expected === sig;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  try {
    const body = req.body;
    const { code, desc, data, signature } = body;

    if (!data) return res.status(400).json({ error: 'No data' });

    // Verify PayOS signature
    const signData = `code=${code}&desc=${desc}&orderCode=${data.orderCode}&status=${data.status}`;
    if (!verifySig(signData, signature)) {
      console.warn('Invalid signature for orderCode:', data.orderCode);
      // Don't reject — PayOS expects 200 always; log and skip
      return res.status(200).json({ message: 'Signature mismatch, ignored' });
    }

    if (data.status !== 'PAID') {
      return res.status(200).json({ message: 'Not PAID, ignored' });
    }

    const db    = admin.firestore();
    const oRef  = db.collection('payment_orders').doc(String(data.orderCode));
    const oSnap = await oRef.get();

    if (!oSnap.exists) {
      console.warn('Order not found:', data.orderCode);
      return res.status(200).json({ message: 'Order not found, ignored' });
    }

    const order = oSnap.data();
    if (order.status === 'PAID') {
      return res.status(200).json({ message: 'Already processed' });
    }

    const { uid, credits } = order;

    // Update order → PAID
    await oRef.update({ status: 'PAID', paidAt: admin.firestore.FieldValue.serverTimestamp() });

    // Add credits to user (atomic increment)
    const uRef = db.collection('users').doc(uid);
    await uRef.update({
      credits:        admin.firestore.FieldValue.increment(credits),
      totalPurchased: admin.firestore.FieldValue.increment(credits),
    });

    // Log transaction
    await uRef.collection('transactions').add({
      credits,
      method:    'payos',
      priceVnd:  order.amount,
      orderCode: data.orderCode,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    console.log(`Processed payment: uid=${uid}, credits=${credits}, orderCode=${data.orderCode}`);
    return res.status(200).json({ message: 'Payment processed' });

  } catch (err) {
    console.error('payos-webhook error:', err);
    // Always return 200 so PayOS stops retrying
    return res.status(200).json({ message: 'Error handled' });
  }
}
