'use client'
import { BlogPost } from '@/lib/blog/types'
import { BlogPostCard } from './blog-post-card'
import { useSearchStore } from '@/lib/store/search-store'

interface BlogListProps {
  initialPosts: BlogPost[]
}

export function BlogList({ initialPosts }: BlogListProps) {
  const { searchQuery } = useSearchStore()

  const filteredPosts = initialPosts.filter(post => {
    if (!searchQuery) return true
    
    const searchContent = [
      post.title,
      post.excerpt,
      ...post.tags,
    ].join(' ').toLowerCase()
    
    return searchContent.includes(searchQuery.toLowerCase())
  })

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {filteredPosts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-zinc-600">No posts found matching "{searchQuery}"</p>
        </div>
      ) : (
        <div className="divide-y divide-zinc-200">
          {filteredPosts.map(post => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  )
} 