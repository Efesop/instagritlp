import { ReactNode } from 'react'
import { BlogSidebar } from '@/app/components/blog-sidebar'
import { getBlogPosts } from '@/lib/blog'

type LayoutProps = {
  children: ReactNode
  params: Promise<{
    slug?: string
  }>
}

export default async function BlogLayout({ 
  children,
  params 
}: LayoutProps) {
  const resolvedParams = await params
  const posts = await getBlogPosts()

  return (
    <div className="flex h-screen">
      <BlogSidebar posts={posts} currentSlug={resolvedParams.slug} />
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  )
} 