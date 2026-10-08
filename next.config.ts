import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org", "rb.gy", "assets.nflxext.com"]
  }
};

export default nextConfig;
