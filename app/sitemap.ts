import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://victoriapolandmakeup.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sfx`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/makeupandhair`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/film`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      priority: 0.7,
    },
  ];
}
