export const trackDownload = () => {
  if (typeof window === 'undefined' || typeof gtag === 'undefined') {
    console.log('GA not available');
    return;
  }

  // Using a recommended event name
  gtag('event', 'generate_lead', {
    currency: 'USD',
    value: 1,
    source: 'app_store'
  });
}; 