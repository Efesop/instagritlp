'use client'

import Link from 'next/link'
import { ChevronLeft, Search } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { useSearchStore } from '@/lib/store/search-store'

interface BlogMobileHeaderProps {
  tags: string[]
  currentSlug?: string
  currentTag?: string
}

export function BlogMobileHeader({ tags, currentSlug, currentTag }: BlogMobileHeaderProps) {
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const { searchQuery, setSearchQuery } = useSearchStore()

  return (
    <div className="lg:hidden border-b border-zinc-200 sticky top-0 bg-white z-10">
      <div className="p-4 flex items-center relative">
        {/* Tags with overflow */}
        <div className="flex-1 overflow-x-auto scrollbar-hide pr-[200px]">
          <div className="flex gap-2 whitespace-nowrap pb-1">
            <Link
              href="/blog"
              className={cn(
                "text-sm px-3 py-1.5 rounded-full transition-colors hover:scale-105 active:scale-95",
                !currentTag
                  ? "bg-blue-100 text-blue-700 shadow-sm"
                  : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
              )}
            >
              All Posts
            </Link>
            {tags.map(tag => (
              <Link
                key={tag}
                href={`/blog/tag/${tag}`}
                className={cn(
                  "text-sm px-3 py-1.5 rounded-full transition-colors hover:scale-105 active:scale-95",
                  currentTag === tag
                    ? "bg-blue-100 text-blue-700 shadow-sm"
                    : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                )}
              >
                {tag}
              </Link>
            ))}
          </div>
          
          {/* Scroll Indicator */}
          <div className="h-0.5 bg-gradient-to-r from-blue-500/10 via-blue-500/5 to-transparent mt-1 rounded-full" />
        </div>

        {/* Search with background overlay */}
        <div className="absolute right-0 top-0 h-full flex items-center">
          <div className={cn(
            "h-full w-4 bg-gradient-to-r from-transparent to-white transition-opacity",
            isSearchFocused ? "opacity-0" : "opacity-100"
          )} />
          <div className={cn(
            "h-full px-4 bg-white flex items-center transition-colors",
            isSearchFocused && "bg-zinc-50"
          )}>
            <div className="relative w-[160px]">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search posts..."
                className={cn(
                  "w-full px-3 py-1.5 rounded-full border transition-all",
                  "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                  isSearchFocused
                    ? "border-blue-200 bg-white shadow-sm"
                    : "border-zinc-200 bg-zinc-50"
                )}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
              <Search className={cn(
                "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors",
                isSearchFocused ? "text-blue-500" : "text-zinc-400"
              )} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 