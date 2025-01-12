import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'

export const metadata = {
  title: '404 - Page Not Found | Instagrit',
  description: 'Sorry, the page you are looking for does not exist.',
}

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">404 - Page Not Found</h1>
            <p className="text-lg text-zinc-500 mb-8">
              Sorry, we couldn't find the page you're looking for.
            </p>
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to home</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
} 