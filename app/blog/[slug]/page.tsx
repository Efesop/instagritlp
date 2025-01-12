import { MDXRemote } from 'next-mdx-remote/rsc'
import { SiteHeader } from '@/components/site-header'
import { getBlogPosts } from '@/lib/blog'
import Link from 'next/link'
import { formatDate } from '@/lib/utils'

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

interface Props {
  params: {
    slug: string
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = params
  const posts = await getBlogPosts()
  const post = posts.find(p => p.slug === slug)
  if (!post) return null

  // Remove the first h1 heading from the content
  const contentWithoutTitle = post.content.replace(/^#\s+.*$/m, '')

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
                className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200 transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        </header>
        
        <div className="prose prose-lg max-w-none">
          <MDXRemote source={contentWithoutTitle} components={components} />
        </div>
      </article>
    </>
  )
} 