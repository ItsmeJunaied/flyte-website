/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['ik.imagekit.io', 'images.unsplash.com', 'i.ibb.co'], // Add i.ibb.co here
  },
  output:"export",
};

export default nextConfig;
