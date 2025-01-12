'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight } from 'lucide-react'

export function Breadcrumbs() {
  const pathname = usePathname()
  const paths = pathname.split('/').filter(Boolean)

  if (paths.length === 0) return null

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/" className="text-sm text-zinc-500 hover:text-zinc-900">
            Home
          </Link>
        </li>
        {paths.map((path, i) => (
          <li key={path} className="flex items-center">
            <ChevronRight className="h-4 w-4 text-zinc-400" />
            <Link
              href={`/${paths.slice(0, i + 1).join('/')}`}
              className="ml-2 text-sm text-zinc-500 hover:text-zinc-900 capitalize"
            >
              {path}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  )
} 