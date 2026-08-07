import type { NextConfig } from "next";

const STATIC_EXPORT = process.env.STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  ...(STATIC_EXPORT
    ? {
        output: "export",
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {
        images: {
          remotePatterns: [
            { protocol: "https", hostname: "m.media-amazon.com" },
            { protocol: "https", hostname: "images-na.ssl-images-amazon.com" },
          ],
        },
      }),
};

export default nextConfig;
