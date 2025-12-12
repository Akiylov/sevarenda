import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  allowedDevOrigins: ["192.168.1.10", "192.168.1.12", "192.168.1.15"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // barcha hostlarga ruxsat
      },
    ],
  },
};

export default nextConfig;
