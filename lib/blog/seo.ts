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
  
  return {
    title: `${title} | Instagrit Blog`,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      modifiedTime,
      url,
      images: [
        {
          url: `${baseUrl}/og/${slug}.png`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      tags,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/og/${slug}.png`],
    },
  }
} 