import { Metadata } from 'next'

interface PostMetadataProps {
  title: string
  description: string
  publishedTime: string
  modifiedTime?: string
  tags: string[]
  slug: string
}

export function generatePostMetadata({
  title,
  description,
  publishedTime,
  modifiedTime,
  tags,
  slug
}: PostMetadataProps): Metadata {
  const url = new URL('https://instagrit.com')
  
  return {
    title: `${title} | Instagrit Blog`,
    description,
    keywords: tags.join(', '),
    metadataBase: url,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: `${title} | Instagrit Blog`,
      description,
      type: 'article',
      publishedTime,
      modifiedTime: modifiedTime || publishedTime,
      authors: ['Instagrit'],
      tags,
      siteName: 'Instagrit',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Instagrit Blog`,
      description,
    },
    /*other: {
      'google-site-verification': process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },*/
    robots: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large' as const,
      'max-video-preview': -1,
    }
  }
} 