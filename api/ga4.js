/**
 * GET /api/ga4?range=7|30
 * Fetches GA4 analytics data using the Firebase service account.
 * The service account must be added as a Viewer on the GA4 property.
 */
import crypto from 'node:crypto';

const PROPERTY_ID = '526869233';
const GA4_BASE = `https://analyticsdata.googleapis.com/v1beta/properties/${PROPERTY_ID}`;

// Cache access token in-memory (Vercel warm instances)
let _token = null;
let _tokenExpiry = 0;

async function getAccessToken() {
  const now = Math.floor(Date.now() / 1000);
  if (_token && now < _tokenExpiry) return _token;

  const sa = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON);

  const header  = Buffer.from(JSON.stringify({ alg: 'RS256', typ: 'JWT' })).toString('base64url');
  const payload = Buffer.from(JSON.stringify({
    iss:   sa.client_email,
    scope: 'https://www.googleapis.com/auth/analytics.readonly',
    aud:   'https://oauth2.googleapis.com/token',
    iat:   now,
    exp:   now + 3600,
  })).toString('base64url');

  const signingInput = `${header}.${payload}`;
  const sign = crypto.createSign('RSA-SHA256');
  sign.update(signingInput);
  const signature = sign.sign(sa.private_key, 'base64url');
  const jwt = `${signingInput}.${signature}`;

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  });
  const json = await res.json();
  if (!json.access_token) throw new Error(`Auth failed: ${JSON.stringify(json)}`);

  _token = json.access_token;
  _tokenExpiry = now + 3500;
  return _token;
}

async function runReport(token, body) {
  const res = await fetch(`${GA4_BASE}:runReport`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return res.json();
}

function cell(row, index) {
  return row?.dimensionValues?.[index]?.value ?? row?.metricValues?.[index]?.value ?? '0';
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const range = req.query.range === '30' ? 30 : 7;
  const dateRange = { startDate: `${range}daysAgo`, endDate: 'today' };

  try {
    const token = await getAccessToken();

    // Run all reports in parallel
    const [overviewRes, dailyRes, pagesRes, deviceRes, hourRes, weekdayRes] = await Promise.all([
      // KPI overview
      runReport(token, {
        dateRanges: [dateRange],
        metrics: [
          { name: 'screenPageViews' },
          { name: 'sessions' },
          { name: 'activeUsers' },
          { name: 'averageSessionDuration' },
          { name: 'newUsers' },
          { name: 'bounceRate' },
        ],
      }),
      // Daily views
      runReport(token, {
        dateRanges: [dateRange],
        dimensions: [{ name: 'date' }],
        metrics: [{ name: 'screenPageViews' }, { name: 'sessions' }],
        orderBys: [{ dimension: { dimensionName: 'date' } }],
      }),
      // Top pages
      runReport(token, {
        dateRanges: [dateRange],
        dimensions: [{ name: 'pageTitle' }],
        metrics: [{ name: 'screenPageViews' }, { name: 'sessions' }, { name: 'averageSessionDuration' }],
        orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
        limit: 10,
      }),
      // Device category
      runReport(token, {
        dateRanges: [dateRange],
        dimensions: [{ name: 'deviceCategory' }],
        metrics: [{ name: 'sessions' }],
      }),
      // Hour of day
      runReport(token, {
        dateRanges: [dateRange],
        dimensions: [{ name: 'hour' }],
        metrics: [{ name: 'screenPageViews' }],
        orderBys: [{ dimension: { dimensionName: 'hour' } }],
      }),
      // Day of week
      runReport(token, {
        dateRanges: [dateRange],
        dimensions: [{ name: 'dayOfWeek' }],
        metrics: [{ name: 'screenPageViews' }],
        orderBys: [{ dimension: { dimensionName: 'dayOfWeek' } }],
      }),
    ]);

    // Parse overview
    const ov = overviewRes.rows?.[0];
    const overview = {
      pageViews:   parseInt(ov?.metricValues?.[0]?.value ?? '0'),
      sessions:    parseInt(ov?.metricValues?.[1]?.value ?? '0'),
      activeUsers: parseInt(ov?.metricValues?.[2]?.value ?? '0'),
      avgDuration: parseFloat(ov?.metricValues?.[3]?.value ?? '0'),
      newUsers:    parseInt(ov?.metricValues?.[4]?.value ?? '0'),
      bounceRate:  parseFloat(ov?.metricValues?.[5]?.value ?? '0'),
    };

    // Parse daily — convert yyyymmdd → mm/dd
    const daily = (dailyRes.rows ?? []).map(row => ({
      date:     `${cell(row,0).slice(4,6)}/${cell(row,0).slice(6,8)}`,
      views:    parseInt(row.metricValues[0].value),
      sessions: parseInt(row.metricValues[1].value),
    }));

    // Parse pages — clean up GA4 page titles
    const pages = (pagesRes.rows ?? []).map(row => ({
      page:     row.dimensionValues[0].value || '(unknown)',
      views:    parseInt(row.metricValues[0].value),
      sessions: parseInt(row.metricValues[1].value),
      avgTime:  Math.round(parseFloat(row.metricValues[2].value)),
    }));

    // Parse devices
    const devices = (deviceRes.rows ?? []).map(row => ({
      name:  row.dimensionValues[0].value,
      value: parseInt(row.metricValues[0].value),
    }));

    // Parse hours (0–23)
    const hourMap = {};
    (hourRes.rows ?? []).forEach(row => {
      hourMap[parseInt(row.dimensionValues[0].value)] = parseInt(row.metricValues[0].value);
    });
    const hours = Array.from({ length: 24 }, (_, h) => ({
      hour:  `${h}h`,
      views: hourMap[h] ?? 0,
    }));

    // Parse weekdays (0=Sun … 6=Sat)
    const dayNames = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
    const wdMap = {};
    (weekdayRes.rows ?? []).forEach(row => {
      wdMap[parseInt(row.dimensionValues[0].value)] = parseInt(row.metricValues[0].value);
    });
    const weekdays = dayNames.map((day, i) => ({ day, views: wdMap[i] ?? 0 }));

    return res.status(200).json({ ok: true, range, overview, daily, pages, devices, hours, weekdays });
  } catch (err) {
    console.error('GA4 API error', err);
    return res.status(500).json({ ok: false, error: String(err) });
  }
}
