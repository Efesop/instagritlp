import { getBlogPosts } from '@/lib/blog'
import RSS from 'rss'

export const dynamic = 'force-static'
export const revalidate = false

export async function GET() {
  const posts = await getBlogPosts()
  
  const feed = new RSS({
    title: 'Instagrit Blog',
    description: 'Articles about building discipline, productivity, and habit formation',
    site_url: 'https://instagrit.com',
    feed_url: 'https://instagrit.com/feed.xml',
    language: 'en',
    pubDate: new Date(),
  })

  posts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.excerpt,
      url: `https://instagrit.com/blog/${post.slug}`,
      date: post.date,
      categories: post.tags,
    })
  })

  return new Response(feed.xml(), {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
} 