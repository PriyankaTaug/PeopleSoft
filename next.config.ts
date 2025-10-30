import type {NextConfig} from 'next';

// Static export configuration for GitHub Pages-style hosting
const REPO_BASE = '/PeopleSoft'; // ← replace if your repo name differs

const nextConfig: NextConfig = {
  output: 'export', // enables static export
  images: {
    unoptimized: true, // required for static export
    remotePatterns: [
      { protocol: 'https', hostname: 'placehold.co', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'images.unsplash.com', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'picsum.photos', port: '', pathname: '/**' },
    ],
  },
  basePath: REPO_BASE,
  assetPrefix: `${REPO_BASE}/`,
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
