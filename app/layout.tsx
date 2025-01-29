import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { OrganizationJsonLd } from '@/app/components/json-ld/organization'
import { SoftwareAppJsonLd } from '@/app/components/json-ld/software-app'
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Instagrit - Group Discipline For The Unmotivated",
  description: "Take control and transform your life—together. Share tasks, track progress, and stay accountable with friends and teammates.",
  metadataBase: new URL('https://instagrit.com'),
  keywords: [
    'discipline app',
    'habit tracking',
    'accountability partner',
    'goal tracking',
    'productivity app',
    'self improvement app',
    'habit formation',
    'discipline building',
    'shared accountability',
    'iOS habit tracker'
  ],
  authors: [{ name: 'Ollie Efez' }],
  creator: 'Ollie Efez',
  publisher: 'Instagrit',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://instagrit.com',
    title: 'Instagrit - Group Discipline For The Unmotivated',
    description: 'Take control and transform your life—together. Share tasks, track progress, and stay accountable with friends and teammates.',
    siteName: 'Instagrit',
    images: [
      {
        url: '/app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Instagrit - Group Discipline For The Unmotivated',
        type: 'image/png',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Instagrit - Group Discipline For The Unmotivated',
    description: 'Take control and transform your life—together. Share tasks, track progress, and stay accountable with friends and teammates.',
    creator: '@efesopoulos',
    images: [
      {
        url: '/app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Instagrit - Group Discipline For The Unmotivated',
      }
    ],
  },
  icons: {
    icon: [
      { url: '/app/favicon.ico' },
      { url: '/app/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/app/apple-icon.png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/app/safari-pinned-tab.svg',
        color: '#4066E8'
      }
    ]
  },
  manifest: '/app/site.webmanifest',
  applicationName: 'Instagrit',
  appleWebApp: {
    capable: true,
    title: 'Instagrit',
    statusBarStyle: 'default',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: '#4066E8',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  alternates: {
    canonical: 'https://instagrit.com',
    languages: {
      'en-US': 'https://instagrit.com',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <OrganizationJsonLd />
        <SoftwareAppJsonLd />
        <GoogleAnalytics GA_MEASUREMENT_ID="G-ST41DN8P7N" />
      </body>
    </html>
  );
}
