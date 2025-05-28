/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '',
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['kickoutcancer.org'],
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  poweredByHeader: false,
  compress: true,
  swcMinify: true,
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['framer-motion', 'react-icons'],
    scrollRestoration: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig 