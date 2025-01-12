import OpenAI from 'openai'
import { writeFile, mkdir } from 'fs/promises'
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

const generateBlogPost = async (topic: string): Promise<string> => {
  try {
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
          Create engaging, informative blog content that:
          - Is written in a natural, conversational tone
          - Includes relevant research and expert insights
          - Uses real-world examples and practical applications
          - Maintains SEO best practices without being overly structured
          - Focuses on providing genuine value to readers
          - Has a clear introduction, 3-4 main sections, and conclusion
          - Uses headers naturally, only when needed to break up content
          - Includes actionable takeaways

          IMPORTANT: Do not include any markdown headers at the start of your content. The title is already provided in the frontmatter.
          Start with a regular paragraph introducing the topic.`
        },
        {
          role: "user",
          content: `Write an engaging, SEO-optimized blog post about ${topic}. 
          Start with a regular paragraph (no headers).
          
          Write the blog post in a natural, flowing style with:
          - A compelling introduction that hooks the reader
          - 3-4 main sections with H2 headers
          - Real examples and practical applications
          - Research-backed insights without being too academic
          - A strong conclusion with actionable next steps
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

    // Validate using gray-matter
    try {
      const parsed = matter(fullContent)
      if (!parsed.data.title || !parsed.data.date || !parsed.data.tags || !parsed.data.excerpt) {
        throw new Error('Missing required frontmatter fields')
      }
    } catch (error) {
      console.error('YAML parsing error:', error)
      throw new Error('Invalid YAML format in frontmatter')
    }

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