import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/*": ["./index.html", "./planejar.html"],
  },
};

export default nextConfig;
