import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/instagritlp',
  images: {
    unoptimized: true,
  },
}

export default nextConfig 