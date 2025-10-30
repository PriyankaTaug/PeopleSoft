import type {NextConfig} from 'next';

const isGitHubActions = true;

// When deploying to GitHub Pages for a project site, assets live under /<repo>
// Set NEXT_PUBLIC_BASE_PATH or rely on Actions env REPOSITORY to infer it.
const inferredBasePath = (() => {
  const explicit = process.env.NEXT_PUBLIC_BASE_PATH;
  if (explicit) return explicit;
  const repo = process.env.GITHUB_REPOSITORY?.split('/')[1];
  if (isGitHubActions && repo) return `/${repo}`;
  return '';
})();

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: inferredBasePath,
  assetPrefix: inferredBasePath ? `${inferredBasePath}/` : undefined,
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // Static export on GitHub Pages needs unoptimized images
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
