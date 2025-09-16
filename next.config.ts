import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    allowedDevOrigins: ['http://192.168.100.6:3000'], // tu IP + puerto
  },
};

export default nextConfig;
