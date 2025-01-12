import cron from 'node-cron'
import { generateBlogPost, saveBlogPost, TOPICS } from '../lib/blog/generator'
import { updateSitemap, generateRSSFeed } from '../lib/blog/utils'
import { readdir, readFile } from 'fs/promises'
import { join } from 'path'
import matter from 'gray-matter'

// Track used topics across cron jobs
const usedTopics = new Set<string>()

// Function to check existing posts to avoid duplicates
const getRecentTopics = async (): Promise<Set<string>> => {
  try {
    const blogDir = join(process.cwd(), 'content/blog')
    const files = await readdir(blogDir)
    
    // Sort files by creation time (most recent first)
    const sortedFiles = files.sort().reverse().slice(0, TOPICS.length)
    
    const recentTopics = new Set<string>()
    
    for (const file of sortedFiles) {
      const content = await readFile(join(blogDir, file), 'utf8')
      const { data } = matter(content)
      if (data.tags && data.tags[0]) {
        recentTopics.add(data.tags[0].replace(/-/g, ' '))
      }
    }
    
    return recentTopics
  } catch (error) {
    console.error('Error reading recent topics:', error)
    return new Set()
  }
}

// Run three times per week: Monday, Wednesday, and Friday at a random time between 9am-5pm
const schedules = [
  '0 9-17 * * 1', // Monday
  '0 9-17 * * 3', // Wednesday
  '0 9-17 * * 5'  // Friday
]

schedules.forEach(schedule => {
  cron.schedule(schedule, async () => {
    try {
      // Add random delay (0-59 minutes) to make it look more natural
      const delay = Math.floor(Math.random() * 60) * 60000
      await new Promise(resolve => setTimeout(resolve, delay))

      // Get recently used topics
      const recentTopics = await getRecentTopics()
      
      // Find available topics (not used recently)
      const availableTopics = TOPICS.filter(topic => 
        !recentTopics.has(topic) && !usedTopics.has(topic)
      )

      if (availableTopics.length === 0) {
        console.log('All topics recently used, clearing history')
        usedTopics.clear()
        // Try again with all topics available
        const topic = TOPICS[Math.floor(Math.random() * TOPICS.length)]
        const content = await generateBlogPost(topic)
        const slug = topic.toLowerCase().replace(/\s+/g, '-')
        await saveBlogPost(content, slug)
      } else {
        // Pick a random topic from available ones
        const topic = availableTopics[Math.floor(Math.random() * availableTopics.length)]
        const content = await generateBlogPost(topic)
        const slug = topic.toLowerCase().replace(/\s+/g, '-')
        await saveBlogPost(content, slug)
        
        // Track used topic
        usedTopics.add(topic)
      }
      
      // Update sitemap and RSS feed
      await updateSitemap()
      await generateRSSFeed()

      console.log(`Successfully generated blog post at ${new Date().toISOString()}`)
    } catch (error) {
      console.error('Failed to generate blog post:', error)
    }
  }, {
    timezone: 'UTC' // Specify your timezone if needed
  })
})

console.log('Blog post generation scheduled for Monday, Wednesday, and Friday between 9am-5pm') 