import { getBlogPosts } from '@/lib/blog'
import { BlogList } from '@/app/components/blog-list'

export default async function BlogPage() {
  const posts = await getBlogPosts()
  
  return <BlogList initialPosts={posts} />
} 