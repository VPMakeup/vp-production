import type { MetadataRoute } from "next";
import { createClient } from "next-sanity";
import { Project } from "./types/project";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-01-01",
  useCdn: true,
});

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.victoriapolandmakeup.com";

  const projects = await client.fetch(`
    *[_type == "project" && defined(slug.current)]{
      "slug": slug.current,
      publishedAt,
      _updatedAt
    }
  `);

  const projectUrls = projects.map((project: Project) => ({
    url: `${baseUrl}/${project.slug}`,
    lastModified: project._updatedAt
      ? new Date(project._updatedAt)
      : project.publishedAt
        ? new Date(project.publishedAt)
        : new Date(),
    priority: 0.7,
    changeFrequency: "weekly" as const,
  }));

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
    {
      url: `${baseUrl}/film-makeup-london`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/sfx-makeup-london`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/makeup-artist-london`,
      lastModified: new Date(),
      priority: 0.8,
    },
    ...projectUrls,
  ];
}
