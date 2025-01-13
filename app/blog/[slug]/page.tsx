import { MDXRemote } from 'next-mdx-remote/rsc'
import { getBlogPosts } from '@/lib/blog'
import Link from 'next/link'
import { formatDate } from '@/lib/utils'
import { generatePostMetadata } from '@/lib/blog/seo'
import { Metadata } from 'next'
import { BlogCTA } from '@/components/blog-cta'
import { ChevronLeft } from 'lucide-react'

// Define types for MDX components
interface MDXComponentProps {
  children: React.ReactNode
  className?: string
}

// Update types to handle Promise
type Params = Promise<{
  slug: string
}>

type Props = {
  params: Params
}

// Custom components for MDX with proper types
const components = {
  h2: ({ children, ...props }: MDXComponentProps) => (
    <h2 className="text-3xl font-bold mt-8 mb-4" {...props}>{children}</h2>
  ),
  h3: ({ children, ...props }: MDXComponentProps) => (
    <h3 className="text-2xl font-semibold mt-6 mb-3" {...props}>{children}</h3>
  ),
  p: ({ children, ...props }: MDXComponentProps) => (
    <p className="mb-4 text-zinc-700 leading-relaxed" {...props}>{children}</p>
  ),
  ul: ({ children, ...props }: MDXComponentProps) => (
    <ul className="list-disc pl-6 mb-4" {...props}>{children}</ul>
  ),
  ol: ({ children, ...props }: MDXComponentProps) => (
    <ol className="list-decimal pl-6 mb-4" {...props}>{children}</ol>
  ),
  li: ({ children, ...props }: MDXComponentProps) => (
    <li className="mb-2" {...props}>{children}</li>
  ),
  strong: ({ children, ...props }: MDXComponentProps) => (
    <strong className="font-semibold" {...props}>{children}</strong>
  ),
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

async function getPost(slug: string) {
  const posts = await getBlogPosts()
  return posts.find(post => post.slug === slug)
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const resolvedParams = await params
  const post = await getPost(resolvedParams.slug)
  
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

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPage({ params }: Props) {
  const resolvedParams = await params
  const post = await getPost(resolvedParams.slug)

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
      {/* <SiteHeader /> */}
      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-zinc-600">
            <li>
              <Link 
                href="/" 
                className="hover:text-zinc-900 transition-colors"
              >
                Home
              </Link>
            </li>
            <li className="text-zinc-400">/</li>
            <li>
              <Link 
                href="/blog" 
                className="hover:text-zinc-900 transition-colors"
              >
                Blog
              </Link>
            </li>
            <li className="text-zinc-400">/</li>
            <li className="text-zinc-900 truncate max-w-[200px]">
              {post.title}
            </li>
          </ol>
        </nav>

        {/* Back button */}
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 mb-8 group transition-colors"
        >
          <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to all posts
        </Link>

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