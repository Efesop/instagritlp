import OpenAI from 'openai'
import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import matter from 'gray-matter'
import { Topic } from './types'

if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing OPENAI_API_KEY environment variable')
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: false // This ensures we're using server-side only
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
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a professional blog writer. Generate a blog post in MDX format with proper frontmatter."
        },
        {
          role: "user",
          content: `Write a blog post about ${topic}. Include a unique title related to the topic. The response must start with this exact frontmatter format:

---
title: "A Unique Title Here"
date: "${new Date().toISOString()}"
excerpt: "A brief description of the post"
tags:
  - ${topic.split(' ').join('-')}
  - self-improvement
---

Then write the main content in markdown. The title MUST be in quotes and MUST NOT contain colons.`
        }
      ],
      temperature: 0.7,
      max_tokens: 2000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0
    })

    return completion.choices[0].message.content || ''
  } catch (error) {
    if (error instanceof OpenAI.APIError) {
      console.error('OpenAI API Error:', {
        status: error.status,
        message: error.message,
        code: error.code,
        type: error.type
      })
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