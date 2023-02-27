/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    // example for image
    domains: ['res.cloudinary.com'],
  }
}

module.exports = nextConfig
