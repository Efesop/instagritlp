import { NextResponse } from 'next/server'
import { getBlogPosts } from '@/lib/blog'

export async function GET() {
  const posts = await getBlogPosts()
  const baseUrl = 'https://instagrit.com'

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>Instagrit Blog</title>
        <link>${baseUrl}</link>
        <description>Progress Through Shared Discipline</description>
        <language>en</language>
        ${posts.map(post => `
          <item>
            <title>${post.title}</title>
            <link>${baseUrl}/blog/${post.slug}</link>
            <pubDate>${new Date(post.date).toUTCString()}</pubDate>
            <description>${post.excerpt}</description>
          </item>
        `).join('')}
      </channel>
    </rss>`

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  })
} 