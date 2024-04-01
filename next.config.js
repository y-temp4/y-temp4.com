/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'export',
  experimental: {
    typedRoutes: true,
  },
};

module.exports = nextConfig;
