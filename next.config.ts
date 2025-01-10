import type { NextConfig } from 'next'

const isProduction = process.env.NODE_ENV === 'production'
const isGitHubPages = process.env.GITHUB_PAGES === 'true'

const nextConfig: NextConfig = {
  output: isProduction ? 'export' : undefined,
  basePath: isGitHubPages ? '/instagritlp' : '',
  images: {
    unoptimized: true,
  },
  distDir: 'out',
}

export default nextConfig 