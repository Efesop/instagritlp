import OpenAI from 'openai'
import { writeFile, mkdir, readdir, readFile } from 'fs/promises'
import { join } from 'path'
import { Topic } from './types'
import matter from 'gray-matter'

if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing OPENAI_API_KEY environment variable')
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: false
})

const TOPICS: Topic[] = [
  'habit formation',
  'discipline',
  'productivity',
  'accountability',
  'goal setting',
  'motivation',
  'time management',
  'self-improvement'
]

// Track recently generated posts to avoid duplicates
const recentPosts = new Set<string>()

// Add function to check existing posts
const checkExistingPosts = async (): Promise<Set<string>> => {
  try {
    const blogDir = join(process.cwd(), 'content/blog')
    const files = await readdir(blogDir)
    
    // Sort files by creation time (most recent first)
    const sortedFiles = files.sort().reverse().slice(0, TOPICS.length)
    const existingTopics = new Set<string>()
    
    for (const file of sortedFiles) {
      const content = await readFile(join(blogDir, file), 'utf8')
      const { data } = matter(content)
      if (data.tags && data.tags[0]) {
        existingTopics.add(data.tags[0].replace(/-/g, ' '))
      }
    }
    
    return existingTopics
  } catch (error) {
    console.error('Error checking existing posts:', error)
    return new Set()
  }
}

const generateBlogPost = async (topic: string): Promise<string> => {
  try {
    // Check both recent and existing posts
    const existingTopics = await checkExistingPosts()
    if (recentPosts.has(topic) || existingTopics.has(topic)) {
      throw new Error(`Recently generated post about ${topic}. Skipping to maintain uniqueness.`)
    }

    const currentDate = new Date()
    const isoDate = currentDate.toISOString()
    const year = currentDate.getFullYear()

    // Create frontmatter with proper YAML formatting and spacing
    const frontmatter = `---
title: "${topic.charAt(0).toUpperCase() + topic.slice(1)}: A Practical Guide to Lasting Change [${year}]"
date: "${isoDate}"
excerpt: "Discover practical, science-backed strategies for ${topic}. Learn how to create lasting change and achieve your goals with proven techniques and real-world examples."
tags:
  - "${topic.split(' ').join('-')}"
  - "self-improvement"
  - "personal-development"
keywords:
  - "${topic}"
  - "how to ${topic}"
  - "${topic} tips"
  - "${topic} strategies"
  - "improve ${topic}"
---

`  // Note the double newline after the closing ---

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are an expert content writer specializing in habit formation and self-improvement.
          Create unique, engaging content that:
          - Uses different examples and case studies each time
          - References varied research and studies
          - Provides fresh insights while maintaining SEO best practices
          - Focuses on providing unique value to readers
          - Has a clear introduction, 3-4 main sections, and conclusion
          - Is written in a natural, conversational tone
          - Uses headers naturally, only when needed
          - Includes actionable takeaways

          IMPORTANT: Do not include any markdown headers at the start. The title is already provided.
          Start with a regular paragraph introducing the topic.`
        },
        {
          role: "user",
          content: `Write a unique, SEO-optimized and engaging blog post about ${topic}. 
          Start with a regular paragraph (no headers).
          
          Ensure the content is fresh and original while maintaining SEO structure:
          - A compelling introduction that hooks the reader
          - 3-4 main sections with H2 headers
          - Different examples and applications than previous posts
          - Varied research citations and expert insights
          - A strong conclusion with unique action steps
          - Natural use of headers (## for H2 and ### for H3) only when needed
          - Engaging, conversational tone throughout`
        }
      ],
      temperature: 0.7,
      max_tokens: 4000,
      top_p: 1,
      frequency_penalty: 0.3,
      presence_penalty: 0.2
    })

    let content = completion.choices[0].message.content?.trim() || ''
    
    // Remove any leading headers or frontmatter-like content
    content = content.replace(/^#\s.*?\n/, '')
    content = content.replace(/^---[\s\S]*?---\n/, '')
    
    // Ensure content starts with a newline
    content = `\n${content.trim()}\n`
    
    // Combine frontmatter with content
    const fullContent = `${frontmatter}${content}`

    // Add to recent posts after successful generation
    recentPosts.add(topic)

    return fullContent
  } catch (error) {
    if (error instanceof OpenAI.APIError) {
      console.error('OpenAI API Error:', error)
    }
    throw error
  }
}

const saveBlogPost = async (content: string, slug: string): Promise<void> => {
  try {
    const blogDir = join(process.cwd(), 'content/blog')
    await mkdir(blogDir, { recursive: true })
    
    const timestamp = new Date().getTime()
    const uniqueSlug = `${slug}-${timestamp}`
    
    const filePath = join(blogDir, `${uniqueSlug}.mdx`)
    await writeFile(filePath, content)
    console.log(`Blog post saved to: ${filePath}`)
  } catch (error) {
    console.error('Error saving blog post:', error)
    throw error
  }
}

export {
  TOPICS,
  generateBlogPost,
  saveBlogPost
} 