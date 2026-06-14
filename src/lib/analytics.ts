/**
 * GA4 page-view tracker.
 * gtag is loaded globally via index.html — declare it here for TypeScript.
 */
declare function gtag(...args: unknown[]): void;

export function trackPageView(page: string): void {
  try {
    if (typeof gtag === 'undefined') return;
    gtag('event', 'page_view', {
      page_title: page,
      page_location: `${window.location.origin}/?tab=${page}`,
      page_path: `/?tab=${page}`,
    });
  } catch {
    // Never throw in analytics code
  }
}
