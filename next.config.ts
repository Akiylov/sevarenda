import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  allowedDevOrigins: ["http://10.167.208.6", "http://localhost:3000"],
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
