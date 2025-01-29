export const trackDownload = () => {
  if (typeof window !== 'undefined' && typeof gtag !== 'undefined') {
    gtag('event', 'download', {
      event_category: 'app_store',
      event_label: 'app_download'
    });
  }
}; 