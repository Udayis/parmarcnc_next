/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static image optimization
  images: {
    unoptimized: true,
  },
  // Handle API routes
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
    ]
  },
}

module.exports = nextConfig;