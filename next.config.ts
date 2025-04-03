import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    domains: ["ik.imagekit.io"],
  },
};

export default nextConfig;
