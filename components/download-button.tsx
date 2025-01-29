'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function DownloadButton() {
  const handleDownloadClick = () => {
    // Send event to GA4
    gtag('event', 'click', {
      'event_category': 'engagement',
      'event_label': 'download',
      'click': 'download'  // This matches our GA4 event condition
    });
    
    // Continue with normal link behavior
  }

  return (
    <Link 
      href="https://apps.apple.com/gb/app/instagrit/id6737732671"
      onClick={handleDownloadClick}
      className="group relative inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-600 transition-all duration-300 hover:bg-blue-50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
    >
      Download Now
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Link>
  )
} 