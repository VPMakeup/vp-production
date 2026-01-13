import { getProjectsFromSanity } from "@/sanity/lib/queries";
import { NextResponse } from "next/server";

const SITE_URL = "https://victoriapolandmakeup.com";

export async function GET() {
  const projects = await getProjectsFromSanity();

  const staticPages = ["", "about", "contact", "film", "makeupandhair", "sfx"];

  const urls = staticPages
    .map(
      (path) => `
  <url>
    <loc>${SITE_URL}/${path}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join("");

  const projectUrls = projects
    .map(
      (proj) => `
  <url>
    <loc>${SITE_URL}/${proj.slug.current}</loc>
    <lastmod>${proj.publishedAt}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
    )
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
>
  ${urls}
  ${projectUrls}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
