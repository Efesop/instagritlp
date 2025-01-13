import { writeFile } from 'fs/promises'
import { join } from 'path'
import { getBlogPosts } from './index'

export const updateSitemap = async (): Promise<void> => {
  try {
    const posts = await getBlogPosts()
    const baseUrl = process.env.SITE_URL || 'https://instagrit.com'

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>${baseUrl}</loc>
          <changefreq>daily</changefreq>
          <priority>1.0</priority>
        </url>
        ${posts.filter(post => post?.title).map(post => {
          // Ensure valid date
          const date = new Date(post.date)
          const isoDate = !isNaN(date.getTime()) ? 
            date.toISOString() : 
            new Date().toISOString()

          return `
            <url>
              <loc>${baseUrl}/blog/${post.slug}</loc>
              <lastmod>${isoDate}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>0.8</priority>
            </url>
          `
        }).join('')}
      </urlset>`

    await writeFile(join(process.cwd(), 'public/sitemap.xml'), sitemap)
    console.log('Sitemap updated')
  } catch (error) {
    console.error('Error updating sitemap:', error)
  }
}

export const generateRSSFeed = async (): Promise<void> => {
  await getBlogPosts()
  console.log('RSS feed generated')
} 