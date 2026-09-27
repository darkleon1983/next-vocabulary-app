import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trainlinSlash: true,
  images: {unoptimized: true},
  /* config options here */
};
module.exports = nextConfig;

export default nextConfig;
