export const trackDownload = () => {
  gtag('event', 'app_download_click', {
    'event_category': 'engagement',
    'event_label': 'download',
    'click': 'download'
  });
}; 