/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ["html-to-text"],
  images: {
    qualities: [75, 95, 100],
  },
};

export default nextConfig;
