
/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,  // Disable image optimization for static export
  },
  assetPrefix: isGithubPages ? '/laundry-hero-landing-page/' : '',  // Replace <repo-name> with your GitHub repository name
  basePath: isGithubPages ? '/laundry-hero-landing-page' : '',  // Set basePath for GitHub Pages
};

export default nextConfig;

