/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: true
  },
  compress: true,
  poweredByHeader: false,
  swcMinify: true,
  experimental: {
    optimizeCss: true
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },
  basePath: process.env.NODE_ENV === 'production' ? '/kick-out-cancer' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/kick-out-cancer/' : '',
}

module.exports = nextConfig 