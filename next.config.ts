import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "olaitanakinlade.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
