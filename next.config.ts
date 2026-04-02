import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.katemu.com",
      },
      {
        protocol: "https",
        hostname: "revestimientosqyc.cl",
      },
      {
        protocol: "https",
        hostname: "www.revestimientosqyc.cl",
      },
    ],
  },
};

export default nextConfig;
