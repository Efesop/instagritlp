import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Instagrit - Progress Through Shared Discipline",
  description: "Take control and transform your life—together. Share tasks, track progress, and stay accountable with friends and teammates.",
  metadataBase: new URL('https://instagrit.com'),
  keywords: ['habit tracker', 'discipline', 'productivity', 'task management', 'accountability', 'shared tasks'],
  authors: [{ name: 'Ollie Efez' }],
  creator: 'Ollie Efez',
  publisher: 'Instagrit',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://instagrit.com',
    title: 'Instagrit - Progress Through Shared Discipline',
    description: 'Take control and transform your life—together. Share tasks, track progress, and stay accountable with friends and teammates.',
    siteName: 'Instagrit',
    images: [
      {
        url: '/app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Instagrit - Progress Through Shared Discipline',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Instagrit - Progress Through Shared Discipline',
    description: 'Take control and transform your life—together. Share tasks, track progress, and stay accountable with friends and teammates.',
    creator: '@efesopoulos',
    images: ['/app/og-image.png'],
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
      </body>
    </html>
  );
}
