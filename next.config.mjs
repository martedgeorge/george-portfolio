/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'cdn.sanity.io'],
  },
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
}

export default nextConfig
