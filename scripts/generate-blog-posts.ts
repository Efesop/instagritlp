import { config } from 'dotenv'
config({ path: '.env.local' })

import cron from 'node-cron'
import { TOPICS, generateBlogPost, saveBlogPost } from '../lib/blog/generator'
import { updateSitemap, generateRSSFeed } from '../lib/blog/utils'

// For testing, use every minute
const isTestMode = process.env.NODE_ENV === 'development'
const schedules = isTestMode 
  ? ['*/1 * * * *']  // Every minute for testing
  : [
      '0 9-17 * * 1', // Monday
      '0 9-17 * * 3', // Wednesday
      '0 9-17 * * 5'  // Friday
    ]

console.log(`Starting blog post generator in ${isTestMode ? 'TEST' : 'PRODUCTION'} mode`)

schedules.forEach(schedule => {
  cron.schedule(schedule, async () => {
    try {
      console.log(`Cron triggered at ${new Date().toISOString()}`)
      
      // Shorter delay for testing
      const delay = isTestMode
        ? Math.floor(Math.random() * 10) * 1000  // 0-10 seconds
        : Math.floor(Math.random() * 60) * 60000 // 0-60 minutes
      
      console.log(`Waiting ${delay/1000} seconds before generating...`)
      await new Promise(resolve => setTimeout(resolve, delay))

      // Pick a random topic
      const topic = TOPICS[Math.floor(Math.random() * TOPICS.length)]
      console.log('Selected topic:', topic)
      
      const content = await generateBlogPost(topic)
      const slug = topic.toLowerCase().replace(/\s+/g, '-')
      await saveBlogPost(content, slug)
      
      await updateSitemap()
      await generateRSSFeed()

      console.log(`Successfully generated blog post at ${new Date().toISOString()}`)
    } catch (error) {
      console.error('Failed to generate blog post:', error)
    }
  })
})