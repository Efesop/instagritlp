import { MetadataRoute } from 'next'

export const dynamic = 'force-static'
export const revalidate = false

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.SITE_URL || 'https://instagrit.com'
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}