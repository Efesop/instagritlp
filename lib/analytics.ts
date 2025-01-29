export const trackDownload = () => {
  if (typeof window === 'undefined' || typeof gtag === 'undefined') {
    console.log('GA not available');
    return;
  }

  // Using recommended event format from docs
  gtag('event', 'generate_lead', {  // Using a recommended event name
    currency: 'USD',
    value: 1,  // Value of the conversion
    source: 'app_store_click'  // Custom parameter
  });
}; 