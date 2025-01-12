import { MDXRemote } from 'next-mdx-remote/rsc'
import { SiteHeader } from '@/components/site-header'
import { getBlogPosts } from '@/lib/blog'
import Link from 'next/link'
import { formatDate } from '@/lib/utils'
import { generatePostMetadata } from '@/lib/blog/seo'
import { Metadata } from 'next'
import { BlogCTA } from '@/components/blog-cta'
import { notFound } from 'next/navigation'

// Custom components for MDX
const components = {
  h2: (props: any) => <h2 className="text-3xl font-bold mt-8 mb-4" {...props} />,
  h3: (props: any) => <h3 className="text-2xl font-semibold mt-6 mb-3" {...props} />,
  p: (props: any) => <p className="mb-4 text-zinc-700 leading-relaxed" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-6 mb-4" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-6 mb-4" {...props} />,
  li: (props: any) => <li className="mb-2" {...props} />,
  strong: (props: any) => <strong className="font-semibold" {...props} />,
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

interface Props {
  params: {
    slug: string
  }
}

async function getPost(slug: string) {
  const posts = await getBlogPosts()
  return posts.find(post => post.slug === slug)
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(await params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found | Instagrit Blog',
      description: 'The requested blog post could not be found.'
    }
  }
  
  return generatePostMetadata({
    title: post.title,
    description: post.excerpt,
    publishedTime: post.date,
    modifiedTime: post.modifiedDate || post.date,
    tags: post.tags,
    slug: post.slug,
  })
}

export default async function BlogPost({ params }: Props) {
  const post = await getPost(await params.slug)

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
        <p>The requested blog post could not be found.</p>
      </div>
    )
  }

  return (
    <>
      <SiteHeader />
      <article className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <time className="text-zinc-600 mb-4 block">
            {formatDate(post.date)}
          </time>
          <div className="flex gap-2 mb-8">
            {post.tags.map(tag => (
              <Link 
                key={tag}
                href={`/blog/tag/${tag}`}
                className="text-sm text-zinc-600 bg-zinc-100 px-2 py-1 rounded hover:bg-zinc-200"
              >
                {tag}
              </Link>
            ))}
          </div>
        </header>
        
        <MDXRemote source={post.content} components={components} />
        
        <BlogCTA />
      </article>
    </>
  )
} 