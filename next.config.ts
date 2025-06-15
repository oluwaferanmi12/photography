import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hni.eastus.cloudapp.azure.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
