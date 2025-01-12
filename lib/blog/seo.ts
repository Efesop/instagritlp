interface SEOMetadata {
  title: string
  description: string
  publishedTime: string
  modifiedTime: string
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
}: SEOMetadata) {
  const baseUrl = process.env.SITE_URL || 'https://instagrit.com'
  const url = `${baseUrl}/blog/${slug}`
  const ogImage = `${baseUrl}/og/${slug}.png`

  // Generate keywords from tags and common terms
  const keywords = [
    ...tags,
    'habit formation',
    'productivity',
    'self improvement',
    'habit tracking',
    'goal setting',
    'personal development'
  ]

  return {
    title: `${title} | Instagrit Blog`,
    description,
    keywords: keywords.join(', '),
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      modifiedTime,
      url,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      tags,
      siteName: 'Instagrit',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      creator: '@instagrit',
    },
    // Schema.org structured data
    other: {
      'application/ld+json': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: title,
        description,
        image: ogImage,
        datePublished: publishedTime,
        dateModified: modifiedTime,
        url,
        keywords: keywords.join(', '),
        author: {
          '@type': 'Organization',
          name: 'Instagrit',
          url: baseUrl,
        },
        publisher: {
          '@type': 'Organization',
          name: 'Instagrit',
          url: baseUrl,
          logo: {
            '@type': 'ImageObject',
            url: `${baseUrl}/logo.png`,
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': url,
        },
      }),
    },
    robots: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  }
} 