import matter from 'gray-matter'
import { readFile, readdir } from 'fs/promises'
import { join } from 'path'
import { BlogPost } from './types'

const BLOG_DIR = join(process.cwd(), 'content/blog')

export const getBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const files = await readdir(BLOG_DIR)
    console.log('Found blog files:', files)

    const posts = await Promise.all(
      files.map(async (file: string) => {
        const filePath = join(BLOG_DIR, file)
        const content = await readFile(filePath, 'utf8')
        const { data, content: markdown } = matter(content)
        console.log('Parsed frontmatter:', data)
        
        return {
          title: data.title,
          slug: file.replace(/\.mdx?$/, ''),
          date: data.date,
          excerpt: data.excerpt,
          content: markdown,
          tags: data.tags || [],
        }
      })
    )

    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error('Error getting blog posts:', error)
    return []
  }
} 