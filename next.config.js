/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    // example for image
    domains: ['res.cloudinary.com', 's3.console.aws.amazon.com', 'portfolio-project-assets.s3.eu-central-1.amazonaws.com'],
  }
}

module.exports = nextConfig
