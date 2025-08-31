import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'export',
  typedRoutes: true,
};

export default nextConfig;
