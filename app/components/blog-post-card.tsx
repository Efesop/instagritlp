import Link from 'next/link'
import { formatDate } from '@/lib/utils'
import { BlogPost } from '@/lib/blog/types'

interface BlogPostCardProps {
  post: BlogPost
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="group py-12 first:pt-8 last:pb-8 hover:bg-zinc-50 transition-colors px-4 -mx-4">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">
            {post.title}
          </h2>

          <div className="text-zinc-600">
            <time dateTime={post.date}>
              {formatDate(post.date)}
            </time>
          </div>

          <p className="text-zinc-600 text-lg leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1.5 bg-zinc-100 text-zinc-700 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  )
} 