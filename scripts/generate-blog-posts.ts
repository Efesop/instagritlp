import cron from 'node-cron'
import { generateBlogPost, saveBlogPost, TOPICS } from '../lib/blog/generator'
import { updateSitemap, generateRSSFeed } from '../lib/blog/utils'

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

      // Pick a random topic, but don't repeat recent ones
      const usedTopics = new Set()
      let topic
      do {
        topic = TOPICS[Math.floor(Math.random() * TOPICS.length)]
      } while (usedTopics.has(topic) && usedTopics.size < TOPICS.length)
      
      usedTopics.add(topic)
      if (usedTopics.size >= TOPICS.length) usedTopics.clear()

      const content = await generateBlogPost(topic)
      const slug = topic.toLowerCase().replace(/\s+/g, '-')
      await saveBlogPost(content, slug)
      
      // Update sitemap and RSS feed
      await updateSitemap()
      await generateRSSFeed()

      console.log(`Successfully generated blog post about: ${topic} at ${new Date().toISOString()}`)
    } catch (error) {
      console.error('Failed to generate blog post:', error)
    }
  }, {
    timezone: 'UTC' // Specify your timezone if needed
  })
})

console.log('Blog post generation scheduled for Monday, Wednesday, and Friday between 9am-5pm') 