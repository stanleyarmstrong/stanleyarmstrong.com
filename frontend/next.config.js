/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    loader: "akamai",
    path: "/",
    domains: [
      'www.stanleyarmstrong.com'
    ]
  },
}

module.exports = nextConfig
