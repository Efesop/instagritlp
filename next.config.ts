import type { NextConfig } from 'next'

const isProduction = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  output: isProduction ? 'export' : undefined,
  basePath: isProduction ? '/instagritlp' : '',
  images: {
    unoptimized: true,
  },
  distDir: 'out',
}

export default nextConfig 