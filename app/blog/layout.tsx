import { ReactNode } from 'react'
import { BlogSidebar } from '@/app/components/blog-sidebar'
import { BlogMobileHeader } from '@/app/components/blog-mobile-header'
import { getBlogPosts } from '@/lib/blog'
import { SiteHeader } from '@/components/site-header'

type LayoutProps = {
  children: ReactNode
  params: Promise<{
    slug?: string
    tag?: string
  }>
}

export default async function BlogLayout({ 
  children,
  params 
}: LayoutProps) {
  const resolvedParams = await params
  const posts = await getBlogPosts()
  
  // Get unique tags from posts
  const tags = Array.from(new Set(posts.flatMap(post => post.tags)))

  return (
    <>
      <SiteHeader />
      <div className="lg:flex h-screen">
        <div className="hidden lg:block w-80 border-r border-zinc-200 overflow-y-auto">
          <BlogSidebar posts={posts} currentSlug={resolvedParams.slug} />
        </div>
        <div className="flex-1 flex flex-col h-screen">
          <BlogMobileHeader 
            tags={tags} 
            currentSlug={resolvedParams.slug}
            currentTag={resolvedParams.tag}
          />
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    </>
  )
} 