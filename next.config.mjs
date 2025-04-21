const isProd = true;

const nextConfig = {
  basePath: isProd ? '/ibp' : '',
  assetPrefix: isProd ? '/ibp/' : '',
  images: {
    unoptimized: true, // Disable Next.js Image Optimization for GitHub Pages
  },
  output: 'export', // If you are using Static HTML Export
};

export default nextConfig;
