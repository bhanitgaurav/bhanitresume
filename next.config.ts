import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/jsontotoon",
        destination: "https://jsontotoon.bhanit.com",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
