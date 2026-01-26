import { client } from "./client";
import { Project, ProjectPreview, TriplePanelSlide } from "@/app/types/project";

export async function getTriplePanelSlides(): Promise<TriplePanelSlide[]> {
  return client.fetch(
    `*[_type == "home"][0].triplePanelSlides[]{
      leftImage,
      centerImage,
      rightBg,
      text
    }`,
    {},
    { next: { revalidate: 30 } }
  );
}

/* ---------- all projects (preview) ---------- */

export async function getProjectsFromSanity(): Promise<ProjectPreview[]> {
  return client.fetch<ProjectPreview[]>(
    `
    *[_type == "project" && defined(slug.current)] | order(publishedAt desc) {
      _id,
      title,
      slug,
      titleImage,
      client,
      role,
      publishedAt
    }
    `,
    {},
    { next: { revalidate: 60 } }
  );
}

/* ---------- single project (full) ---------- */

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  return client.fetch<Project | null>(
    `
    *[_type == "project" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      publishedAt,
      client,
      role,
      photographer,
      producer,
      body,
      embedUrl,

      titleImage{
        asset->{
          _id,
          url
        }
      },

      projectImages[]{
        alt,
        asset->{
          _id,
          url
        }
      }
    }
    `,
    { slug },
    { next: { revalidate: 30 } }
  );
}

export async function getProjectsByCategoryPaginated(
  categorySlug: string,
  start = 0,
  limit = 9
): Promise<ProjectPreview[]> {
  return client.fetch(
    `
    *[
      _type == "project" &&
      references(*[_type == "category" && slug.current == $categorySlug]._id)
    ]
    | order(publishedAt desc)
    [$start...$end] {
      _id,
      title,
      slug,
      client,
      role,
      publishedAt,
      titleImage{
        asset->{
          _id,
          url,
          metadata{dimensions{width,height}}
        }
      }
    }
    `,
    {
      categorySlug,
      start,
      end: start + limit,
    },
    { next: { revalidate: 60 } }
  );
}
