import { getBlogPosts } from '@/lib/blog'
import { BlogSidebar } from '@/app/components/blog-sidebar'

export default async function BlogLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { slug?: string }
}) {
  const posts = await getBlogPosts()

  return (
    <div className="flex h-screen">
      <BlogSidebar posts={posts} currentSlug={params?.slug} />
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  )
} 