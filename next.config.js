/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure basePath and assetPrefix for GitHub Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? '/PolarisWebsite/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/PolarisWebsite' : '',
  
  // Enable static export
  output: 'export',
  
  eslint: {
    // We use Biome for linting; ignore ESLint errors during builds
    ignoreDuringBuilds: true,
  },
  
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
  
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
