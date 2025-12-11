import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "videos.unsplash.com",
      "images.pexels.com",
      "videos.pexels.com",
    ],
    unoptimized: true,
  },
  output: "export",
};

export default nextConfig;
