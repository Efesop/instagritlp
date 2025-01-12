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
        try {
          const filePath = join(BLOG_DIR, file)
          const content = await readFile(filePath, 'utf8')
          
          // Debug log the content
          console.log(`Content for ${file}:`, content.substring(0, 500))

          // Validate content structure
          if (!content.startsWith('---\n')) {
            console.error(`Invalid file format for ${file}: Missing opening frontmatter delimiter`)
            return null
          }

          const secondDelimiter = content.indexOf('\n---\n')
          if (secondDelimiter === -1) {
            console.error(`Invalid file format for ${file}: Missing closing frontmatter delimiter`)
            return null
          }

          try {
            const { data, content: markdown } = matter(content)
            
            // Log parsed data for debugging
            console.log(`Parsed frontmatter for ${file}:`, data)
            
            // Skip posts with empty or invalid frontmatter
            if (!data.title || !data.date || !data.tags || !data.excerpt) {
              console.log(`Skipping invalid post: ${file} - Missing required frontmatter fields:`, {
                hasTitle: !!data.title,
                hasDate: !!data.date,
                hasTags: !!data.tags,
                hasExcerpt: !!data.excerpt
              })
              return null
            }

            // Ensure date is valid and not in the future
            const postDate = new Date(data.date)
            const now = new Date()
            const validDate = !isNaN(postDate.getTime()) && postDate <= now ? 
              postDate : 
              now

            return {
              title: data.title,
              slug: file.replace(/\.mdx?$/, ''),
              date: validDate.toISOString(),
              excerpt: data.excerpt,
              content: markdown,
              tags: data.tags,
            }
          } catch (matterError) {
            console.error(`YAML parsing error in ${file}:`, matterError)
            return null
          }
        } catch (fileError) {
          console.error(`Error processing file ${file}:`, fileError)
          return null
        }
      })
    )

    // Filter out null posts and duplicates by title
    const validPosts = posts
      .filter((post): post is BlogPost => 
        post !== null && 
        typeof post.title === 'string' && 
        post.title.length > 0
      )
      .reduce((acc, current) => {
        const exists = acc.find(post => post.title === current.title)
        if (!exists) {
          acc.push(current)
        }
        return acc
      }, [] as BlogPost[])

    console.log(`Found ${validPosts.length} valid posts out of ${files.length} files`)
    return validPosts.sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    )
  } catch (error) {
    console.error('Error getting blog posts:', error)
    return []
  }
} 