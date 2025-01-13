import { getBlogPosts } from '@/lib/blog'
import { notFound } from 'next/navigation'
import { BlogList } from '@/app/components/blog-list'

type Params = Promise<{
  tag: string
}>

type Props = {
  params: Params
}

export default async function TagPage({ params }: Props) {
  const resolvedParams = await params
  const posts = await getBlogPosts()
  const tag = decodeURIComponent(resolvedParams.tag)
  
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

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params
  const tag = decodeURIComponent(resolvedParams.tag)
  
  return {
    title: `${tag} Posts | Instagrit Blog`,
    description: `Read all our blog posts about ${tag}`,
  }
}

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  const tags = Array.from(new Set(posts.flatMap(post => post.tags)))
  
  return tags.map((tag) => ({
    tag: tag,
  }))
} 