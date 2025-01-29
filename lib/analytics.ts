export const trackDownload = () => {
  if (typeof window !== 'undefined' && typeof gtag !== 'undefined') {
    gtag('event', 'app_download_click', {
      click: 'download'
    });
  }
}; 