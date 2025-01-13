//import { Metadata, Viewport } from 'next'
import { SiteHeader } from '@/components/site-header'
import { Breadcrumbs } from '@/app/components/breadcrumbs'
import { BreadcrumbsJsonLd } from '@/app/components/json-ld/breadcrumbs'
import { getBlogPosts } from '@/lib/blog'
import { formatDate } from '@/lib/utils'
import Link from 'next/link'

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata = {
  title: 'Blog | Instagrit',
  description: 'Read our latest articles about building discipline, productivity, and habit formation.',
  alternates: {
    canonical: 'https://instagrit.com/blog',
    languages: {
      'en-US': 'https://instagrit.com/blog',
    },
  },
}

export default async function Blog() {
  const posts = await getBlogPosts()
  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Blog', item: '/blog' },
  ]

  return (
    <>
      <SiteHeader />
      <BreadcrumbsJsonLd items={breadcrumbs} />
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs />
          <h1 className="text-4xl font-bold tracking-tight mt-8 mb-8">Blog</h1>
          {posts.length === 0 ? (
            <p className="text-zinc-600">No blog posts found.</p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <article key={post.slug} className="group">
                  <Link href={`/blog/${post.slug}`} className="block hover:bg-zinc-50 rounded-lg p-6 -mx-6">
                    <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>
                    <time className="text-sm text-zinc-500 mb-2 block">
                      {formatDate(post.date)}
                    </time>
                    <p className="text-zinc-600 mb-4">{post.excerpt}</p>
                    <div className="flex gap-2">
                      {post.tags?.map((tag) => (
                        <span 
                          key={tag} 
                          className="text-xs text-zinc-600 bg-zinc-100 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  )
} 