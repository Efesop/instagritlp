import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/instagritlp',
  images: {
    unoptimized: true,
  },
  distDir: 'out',
}

export default nextConfig 