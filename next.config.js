/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure trailing slashes are used
  trailingSlash: true,
}

module.exports = nextConfig 