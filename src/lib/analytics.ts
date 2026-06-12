/**
 * Client-side analytics tracker.
 * Sends page-view events to /api/track (serverless function).
 * Uses localStorage for visitorId and sessionStorage for sessionId.
 */

const API_URL = '/api/track';
const SESSION_TIMEOUT_MS = 30 * 60 * 1000; // 30 minutes

function getOrCreate(storage: Storage, key: string, factory: () => string): string {
  let v = storage.getItem(key);
  if (!v) {
    v = factory();
    storage.setItem(key, v);
  }
  return v;
}

function uuid(): string {
  return crypto.randomUUID
    ? crypto.randomUUID()
    : Math.random().toString(36).slice(2) + Date.now().toString(36);
}

function detectDevice(): 'mobile' | 'tablet' | 'desktop' {
  const w = window.innerWidth;
  if (w < 768) return 'mobile';
  if (w < 1024) return 'tablet';
  return 'desktop';
}

let _lastActivity = Date.now();

export function trackPageView(page: string): void {
  try {
    const visitorId = getOrCreate(localStorage, 'va_vid', uuid);

    // Session: reset if inactive > SESSION_TIMEOUT_MS
    const now = Date.now();
    const isNewSession = now - _lastActivity > SESSION_TIMEOUT_MS
      || !sessionStorage.getItem('va_sid');

    if (isNewSession) {
      sessionStorage.setItem('va_sid', uuid());
    }
    _lastActivity = now;

    const referrer = document.referrer || '';
    const params   = new URLSearchParams(window.location.search);

    const payload = {
      page,
      visitorId,
      sessionId: sessionStorage.getItem('va_sid'),
      isNewSession,
      referrer,
      device: detectDevice(),
      utmSource:   params.get('utm_source')   || '',
      utmMedium:   params.get('utm_medium')   || '',
      utmCampaign: params.get('utm_campaign') || '',
    };

    // Fire-and-forget — never block the UI
    fetch(API_URL, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(payload),
      keepalive: true,
    }).catch(() => {/* silent */});
  } catch {
    // Never throw in analytics code
  }
}
