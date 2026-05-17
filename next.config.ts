/** @type {import('next').NextConfig} */
const nextConfig = {
  // 🚨 টাইপস্ক্রিপ্ট এরর থাকলেও বিল্ড সফল করতে এটি সাহায্য করবে
  typescript: {
    ignoreBuildErrors: true,
  },
  // 🚨 ইএসলিন্ট (ESLint) এরর ইগনোর করার জন্য
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
};

export default nextConfig;