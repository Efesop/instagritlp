import { config } from 'dotenv'
config({ path: '.env.local' })

import { TOPICS, generateBlogPost, saveBlogPost } from '../lib/blog/generator'
import { updateSitemap, generateRSSFeed } from '../lib/blog/utils'

// Add this to verify the API key is loaded
console.log('API Key present:', !!process.env.OPENAI_API_KEY)

const testGeneration = async () => {
  try {
    const topic = TOPICS[0] // Use first topic for testing
    console.log('Generating post about:', topic)
    
    const content = await generateBlogPost(topic)
    if (!content) {
      throw new Error('No content generated')
    }
    
    // Add null check and sanitize topic
    if (!topic) {
      throw new Error('No topic selected')
    }
    
    // Ensure topic is a string and sanitize it
    const slug = typeof topic === 'string' 
      ? topic.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      : 'default-post'
    
    await saveBlogPost(content, slug)
    
    await updateSitemap()
    await generateRSSFeed()
    
    console.log('Successfully generated test post!')
  } catch (error) {
    console.error('Test failed:', error)
    process.exit(1)
  }
}

testGeneration() 