export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const webhookUrl = `${process.env.APP_URL}/api/payos-webhook`;

  const r = await fetch('https://api-merchant.payos.vn/confirm-webhook', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-client-id': process.env.PAYOS_CLIENT_ID,
      'x-api-key':   process.env.PAYOS_API_KEY,
    },
    body: JSON.stringify({ webhookUrl }),
  });

  const json = await r.json();
  if (json.code !== '00') {
    return res.status(502).json({ error: json.desc, detail: json });
  }
  return res.status(200).json({ ok: true, webhookUrl, detail: json });
}
