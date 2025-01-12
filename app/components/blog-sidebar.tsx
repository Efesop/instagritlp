"use client"

import Link from 'next/link'
import { BlogPost } from '@/lib/blog/types'
import { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

interface BlogSidebarProps {
  posts: BlogPost[]
  currentSlug?: string
}

export function BlogSidebar({ posts, currentSlug }: BlogSidebarProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) return null

  // Filter out invalid posts
  const validPosts = posts.filter(post => post?.title && post?.tags)

  const currentPost = validPosts.find(post => post.slug === currentSlug)
  const allTags = Array.from(new Set(validPosts.flatMap(post => post.tags)))
  const relatedPosts = currentPost 
    ? validPosts.filter(post => 
        post.slug !== currentSlug && 
        post.tags.some(tag => currentPost.tags.includes(tag))
      )
    : []

  const filteredPosts = validPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <aside className="w-80 h-screen overflow-y-auto border-r border-zinc-200 p-4">
      <nav className="space-y-8">
        <div className="space-y-4">
          <Input
            type="search"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold text-lg">Categories</h2>
          <div className="flex flex-wrap gap-2">
            {allTags.map(tag => (
              <Link
                key={tag}
                href={`/blog/tag/${tag}`}
                className={cn(
                  "text-sm px-3 py-1.5 rounded-full transition-colors",
                  currentPost?.tags.includes(tag)
                    ? "bg-blue-100 text-blue-700 hover:bg-blue-200"
                    : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                )}
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>

        {currentPost && (
          <div>
            <h2 className="font-semibold text-lg mb-3">Current Article</h2>
            <div className="p-3 rounded-lg bg-blue-50">
              <div className="text-blue-700 font-medium mb-2">
                {currentPost.title}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {currentPost.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-xs text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {currentPost && !searchTerm && (
          <div className="space-y-4">
            <h2 className="font-semibold text-lg">Related Posts</h2>
            <ul className="space-y-3">
              {relatedPosts.map(post => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className={cn(
                      "block p-2 rounded-lg transition-colors",
                      post.slug === currentSlug 
                        ? "bg-blue-50 text-blue-700" 
                        : "hover:bg-zinc-50"
                    )}
                  >
                    <span className="block mb-1 text-zinc-900">{post.title}</span>
                    <div className="flex flex-wrap gap-1">
                      {post.tags.map(tag => (
                        <span 
                          key={tag}
                          className="text-xs text-zinc-500"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {(!currentPost || searchTerm) && (
          <div className="space-y-4">
            <h2 className="font-semibold text-lg">
              {searchTerm ? 'Search Results' : 'All Posts'}
            </h2>
            <ul className="space-y-3">
              {filteredPosts.map(post => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className={cn(
                      "block p-2 rounded-lg transition-colors",
                      post.slug === currentSlug 
                        ? "bg-blue-50 text-blue-700" 
                        : "hover:bg-zinc-50"
                    )}
                  >
                    <span className="block mb-1 text-zinc-900">{post.title}</span>
                    <div className="flex flex-wrap gap-1">
                      {post.tags.map(tag => (
                        <span 
                          key={tag}
                          className="text-xs text-zinc-500"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </aside>
  )
} 