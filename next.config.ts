import type { NextConfig } from "next";
import * as path from "path";

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: `
      script-src 'self' 'unsafe-inline' https://elfsightcdn.com https://static.elfsight.com;
      frame-src https://elfsight.com https://static.elfsight.com https://www.google.com
                https://maps.google.com;
      img-src 'self' https: data:;
      style-src 'self' 'unsafe-inline';
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
        hostname: "cdn2.behold.pictures", // for the profile pic
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
