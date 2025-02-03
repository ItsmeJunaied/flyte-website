/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['ik.imagekit.io', 'images.unsplash.com', 'i.ibb.co'],
  },
  output:"export",
};

export default nextConfig;
