import type { NextConfig } from "next";

/**
 * Fully static export: every route is pre-rendered to HTML at build time and
 * served from Netlify's CDN with no server runtime.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  reactCompiler: true,
  // Images are pre-optimised to AVIF/WebP by `npm run images`, so Next's
  // runtime optimiser (unavailable in a static export) is not needed.
  images: { unoptimized: true },
  // The stylesheet is small (~7 KB); inlining it removes the only
  // render-blocking request on first load.
  experimental: { inlineCss: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
