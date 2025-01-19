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
  'self-improvement',
  'motivation science',
  'motivation psychology',
  'overcoming demotivation',
  'discipline benefits',
  'happiness habits',
  'motivation research',
  'emotional discipline',
  'happiness psychology',
  'motivation blocks',
  'discipline mindset',
  'happiness strategies',
  'motivation patterns'
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
  const currentDate = new Date()
  const isoDate = currentDate.toISOString()

  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `You are an expert content writer specializing in habit formation and self-improvement.
        Create unique, engaging content that:
        - Takes fresh, thought-provoking angles on topics
        - Alternates between intellectual analysis and direct, no-excuses approaches
        - Sometimes uses a tough-love, direct style
        - Challenges conventional wisdom when appropriate
        - References varied research and studies
        - Provides fresh insights while maintaining SEO best practices
        - Is written in a natural, conversational tone
        - Includes actionable takeaways

        CONTENT STRUCTURE:
        - Start with a compelling opening paragraph
        - Include 3-4 main sections with ## headers
        - Headers should be unique and engaging (not "Section 1", "Introduction", etc.)
        - Each section should be 2-3 paragraphs
        - End with a strong final section (avoid using "Conclusion" or "Wrapping Up")
        
        HEADER EXAMPLES:
        ## Why Most People Get It Wrong
        ## The Truth About Showing Up
        ## Stop Making These Common Mistakes
        ## When Motivation Isn't Enough
        ## Building Real Mental Toughness
        ## No More Excuses
        ## The Hard Way Works Better
        ## Small Wins Lead to Big Changes
        ## Getting Started (Even When You Don't Want To)
        ## Face Your Fears Head-On
        
        Note: Headers should sound natural and direct - like advice from a friend or mentor who doesn't sugar-coat things.

        FORMAT:
        First line: Title (no markdown)
        Second line: Brief, engaging excerpt (1-2 sentences)
        Then: Main content with headers

        Never use "Title:", "Meta Description:", or "Introduction:" labels.`
      },
      {
        role: "user",
        content: `Write a unique, engaging blog post about ${topic} with clear section headers.`
      }
    ],
    temperature: 0.7,
    max_tokens: 4000,
    frequency_penalty: 0.3
  })

  let content = completion.choices[0].message.content?.trim() || ''
  
  // Extract first line as title and clean it
  const lines = content.split('\n')
  const title = lines[0].replace(/^#\s*/, '').replace(/\*\*/g, '').trim()
  
  // Get excerpt from second non-empty line
  const excerpt = lines.find((line, index) => index > 0 && line.trim().length > 0)?.trim() || 
    `Discover fresh insights about ${topic} that challenge conventional wisdom and transform your approach.`
  
  // Get main content starting from third line
  const mainContent = lines.slice(2).join('\n').trim()

  // Create frontmatter
  const frontmatter = `---
title: "${title}"
date: "${isoDate}"
excerpt: "${excerpt}"
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

${mainContent}`

  return frontmatter
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