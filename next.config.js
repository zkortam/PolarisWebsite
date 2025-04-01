/** @type {import('next').NextConfig} */
const nextConfig = {
  // Set basePath and assetPrefix for GitHub Pages deployment
  assetPrefix: process.env.NODE_ENV === 'production' ? '/PolarisWebsite/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/PolarisWebsite' : '',
  
  // ESLint configuration (we use Biome for linting)
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Image configuration
  images: {
    unoptimized: true,
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "ext.same-assets.com",
      "ugc.same-assets.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ugc.same-assets.com",
        pathname: "/**",
      },
    ],
  },
  
  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
