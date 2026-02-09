import type { NextConfig } from "next";
import * as path from "path";

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-inline' https://elfsightcdn.com https://static.elfsight.com;
      connect-src 'self' https://*.sanity.io;
      img-src 'self' https: data:
        https://cdn.sanity.io
        https://behold.pictures
        https://cdn2.behold.pictures
        https://feeds.behold.so
        https://scontent-sof1-1.cdninstagram.com
        https://scontent-sof1-2.cdninstagram.com;
      style-src 'self' 'unsafe-inline';
      frame-src
        https://elfsight.com
        https://static.elfsight.com
        https://www.google.com
        https://maps.google.com
        https://www.youtube.com
        https://player.vimeo.com;
    `
      .replace(/\s{2,}/g, " ")
      .trim(),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

  turbopack: {
    root: path.join(__dirname, ""),
  },

  images: {
    minimumCacheTTL: 2678400, // 31 days
    formats: ["image/webp"],

    deviceSizes: [360, 640, 768, 1024, 1280, 1536],
    imageSizes: [64, 128, 256, 384],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "behold.pictures",
      },
      {
        protocol: "https",
        hostname: "cdn2.behold.pictures",
      },
      {
        protocol: "https",
        hostname: "feeds.behold.so",
      },
      {
        protocol: "https",
        hostname: "**.behold.so",
      },
      {
        protocol: "https",
        hostname: "**.instagram.com",
      },
      {
        protocol: "https",
        hostname: "scontent-sof1-1.cdninstagram.com",
      },
      {
        protocol: "https",
        hostname: "scontent-sof1-2.cdninstagram.com",
      },
    ],
  },
};

export default nextConfig;
