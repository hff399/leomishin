import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Note: "standalone" output is incompatible with Keystatic local mode
  // which needs the Node.js server to read/write content files.
  // Re-enable for production deployments without local CMS.
};

export default nextConfig;
