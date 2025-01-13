import { MetadataRoute } from 'next'
import { getBlogPosts } from '@/lib/blog'

export const dynamic = 'force-static'
export const revalidate = false

type ChangeFreq = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getBlogPosts()
  
  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: 'https://instagrit.com',
      lastModified: new Date(),
      changeFrequency: 'weekly' as ChangeFreq,
      priority: 1.0
    },
    {
      url: 'https://instagrit.com/blog',
      lastModified: new Date(),
      changeFrequency: 'daily' as ChangeFreq,
      priority: 0.8
    }
  ]

  // Blog routes
  const blogRoutes: MetadataRoute.Sitemap = posts.map(post => ({
    url: `https://instagrit.com/blog/${post.slug}`,
    lastModified: new Date(post.modifiedDate || post.date),
    changeFrequency: 'weekly' as ChangeFreq,
    priority: 0.6
  }))

  // Tag routes
  const tags = Array.from(new Set(posts.flatMap(post => post.tags)))
  const tagRoutes: MetadataRoute.Sitemap = tags.map(tag => ({
    url: `https://instagrit.com/blog/tag/${tag}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as ChangeFreq,
    priority: 0.4
  }))

  return [...staticRoutes, ...blogRoutes, ...tagRoutes]
} 