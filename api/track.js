/**
 * POST /api/track
 * Receives page-view analytics events from the client and atomically
 * increments aggregated Firestore counters.
 *
 * Body: { page, sessionId, visitorId, isNewSession, referrer, device, browser, utmSource, utmMedium, utmCampaign }
 */

const PROJECT_ID  = process.env.VITE_FIREBASE_PROJECT_ID || 'exe-labantuyensinh';
const FIREBASE_KEY = process.env.VITE_FIREBASE_API_KEY;
const FS_BASE     = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents`;
const SIGN_IN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_KEY}`;

// Simple in-memory cache for the anon token (cold-start only, doesn't persist)
let _cachedToken = null;
let _tokenExpiry = 0;

async function getAnonToken() {
  const now = Date.now();
  if (_cachedToken && now < _tokenExpiry) return _cachedToken;
  const r = await fetch(SIGN_IN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ returnSecureToken: true }),
  });
  const j = await r.json();
  _cachedToken = j.idToken;
  // expiresIn is in seconds (3600)
  _tokenExpiry = now + (parseInt(j.expiresIn || '3600') - 60) * 1000;
  return _cachedToken;
}

/** Firestore REST — batch write with field transforms (atomic increments) */
async function fsCommit(token, writes) {
  const r = await fetch(`${FS_BASE.replace('/documents', '')}:commit`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ writes }),
  });
  return r.json();
}

function docPath(collection, ...parts) {
  return `projects/${PROJECT_ID}/databases/(default)/documents/${collection}/${parts.join('/')}`;
}

/** Build a transform write that increments one or more integer fields */
function increment(docPathStr, fields) {
  return {
    transform: {
      document: docPathStr,
      fieldTransforms: Object.entries(fields).map(([fieldPath, amount]) => ({
        fieldPath,
        increment: { integerValue: amount },
      })),
    },
  };
}

function toVNDate(ts) {
  // UTC+7
  const d = new Date(ts + 7 * 3600 * 1000);
  return d.toISOString().slice(0, 10); // yyyy-mm-dd
}

function toVNHour(ts) {
  const d = new Date(ts + 7 * 3600 * 1000);
  return d.getUTCHours(); // 0-23 in VN local time
}

function toWeekday(ts) {
  const d = new Date(ts + 7 * 3600 * 1000);
  return d.getUTCDay(); // 0=Sun … 6=Sat
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const {
    page = 'unknown',
    isNewSession = false,
    device = 'unknown',
  } = req.body || {};

  const ts = Date.now();
  const dateStr   = toVNDate(ts);
  const hour      = toVNHour(ts);
  const weekday   = toWeekday(ts);

  // Sanitise page key (alphanumeric, hyphen, underscore only)
  const pageKey = String(page).replace(/[^a-zA-Z0-9_-]/g, '_').slice(0, 64) || 'unknown';
  const deviceKey = ['mobile', 'tablet', 'desktop'].includes(device) ? device : 'unknown';

  try {
    const token = await getAnonToken();

    const newSessionCount = isNewSession ? 1 : 0;

    const writes = [
      // overview totals — siteStats/overview (2 segments ✓)
      increment(docPath('siteStats', 'overview'), {
        totalViews: 1,
        totalSessions: newSessionCount,
      }),
      // daily — siteStatsDays/{date} (2 segments ✓)
      increment(docPath('siteStatsDays', dateStr), {
        views: 1,
        sessions: newSessionCount,
        [`hours.h${hour}`]: 1,
        [`weekdays.d${weekday}`]: 1,
        [`pages.${pageKey}`]: 1,
        [`devices.${deviceKey}`]: 1,
      }),
      // per-page totals — siteStatsPages/{pageKey} (2 segments ✓)
      increment(docPath('siteStatsPages', pageKey), {
        views: 1,
        sessions: newSessionCount,
      }),
    ];

    const result = await fsCommit(token, writes);
    if (result.error) {
      console.error('Firestore error', result.error);
      return res.status(500).json({ error: result.error.message });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('track error', err);
    return res.status(500).json({ error: String(err) });
  }
}
