import { getBlogPosts } from '@/lib/blog'
import { notFound } from 'next/navigation'
import { BlogList } from '@/app/components/blog-list'

interface TagPageProps {
  params: {
    tag: string
  }
}

export default async function TagPage({ params }: TagPageProps) {
  const posts = await getBlogPosts()
  const tag = decodeURIComponent(params.tag)
  
  const filteredPosts = posts.filter(post => 
    post.tags.includes(tag)
  )

  if (filteredPosts.length === 0) {
    notFound()
  }

  return (
    <>
      <h1 className="text-3xl font-bold px-4 sm:px-6 lg:px-8 py-8 max-w-3xl mx-auto">
        Posts tagged "{tag}"
      </h1>
      <BlogList initialPosts={filteredPosts} />
    </>
  )
}

// Generate metadata for the page
export async function generateMetadata({ params }: TagPageProps) {
  const tag = decodeURIComponent(params.tag)
  
  return {
    title: `${tag} Posts | Instagrit Blog`,
    description: `Read all our blog posts about ${tag}`,
  }
} 