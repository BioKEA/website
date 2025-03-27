/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: false, // Disable font optimization
  experimental: {
    optimizeCss: false // Disable CSS optimization that requires critters
  }
}

module.exports = nextConfig 