import styles from "./page.module.css";
import { PortableText } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import type { Metadata } from "next";

import { getProjectsFromSanity, getProjectBySlug } from "@/sanity/lib/queries";
import FeaturedContainer from "../components/featured/FeaturedContainer";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const { projectId, dataset } = client.config() as {
  projectId: string;
  dataset: string;
};

const builder = imageUrlBuilder({ projectId, dataset });
const urlFor = (source: SanityImageSource) => builder.image(source);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project not found | Victoria Poland Makeup",
    };
  }

  const title = `${project.title} | Victoria Poland Makeup`;
  const description = project.client
    ? `${project.title} for ${project.client} — makeup by Victoria Poland.`
    : `${project.title} — makeup by Victoria Poland.`;

  const imageUrl = project.titleImage
    ? urlFor(project.titleImage).width(1200).height(630).url()
    : "https://victoriapolandmakeup.com/og-default.jpg";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://victoriapolandmakeup.com/${slug}`,
      siteName: "Victoria Poland Makeup",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      type: "article",
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = await getProjectBySlug(slug);
  if (!project) return null;

  const projects = await getProjectsFromSanity();

  const imageUrl = project.titleImage
    ? urlFor(project.titleImage).width(1600).url()
    : null;

  const description =
    project.body?.[0]?.children?.[0]?.text ||
    `${project.title} – MUA project by Victoria Poland.`;

  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: project.title,
            datePublished: project.publishedAt,
            image: imageUrl,
            author: {
              "@type": "Person",
              name: "Victoria Poland",
            },
            description,
            url: `https://victoriapolandmakeup.com/${slug}`,
          }),
        }}
      />

      <article className={styles.article}>
        <h1 className={styles.title}>{project.title}</h1>

        {imageUrl && (
          <div className={styles.imageWrapper}>
            <Image
              src={imageUrl}
              alt={`${project.title} – makeup and hair project`}
              fill
              className={styles.image}
              priority
            />
          </div>
        )}

        <section className={styles.contentSection}>
          <p className={styles.date}>
            Published:{" "}
            <time dateTime={project.publishedAt}>
              {new Date(project.publishedAt!).toLocaleDateString()}
            </time>
          </p>

          {Array.isArray(project.body) && <PortableText value={project.body} />}
          <div>
            {project.embedUrl && (
              <iframe
                src={project.embedUrl}
                width="100%"
                height="500"
                loading="lazy"
                allowFullScreen
              />
            )}
          </div>
        </section>
      </article>

      <aside className={styles.sidebar}>
        <div className={styles.metaGroup}>
          <span className={styles.metaLabel}>Client</span>
          <p className={styles.metaValue}>{project.client}</p>
        </div>

        <div className={styles.metaGroup}>
          <span className={styles.metaLabel}>Role</span>
          <p className={styles.metaValue}>{project.role}</p>
        </div>

        <hr className={styles.divider} />

        <div className={styles.metaGrid}>
          <div className={styles.metaGroup}>
            <span className={styles.metaLabel}>Photographer</span>
            <p>{project.photographer}</p>
          </div>
          <div className={styles.metaGroup}>
            <span className={styles.metaLabel}>Producer</span>
            <p>{project.producer}</p>
          </div>
        </div>
      </aside>

      <section className={styles.featured}>
        <FeaturedContainer projects={projects} excludeSlug={slug} />
      </section>
    </main>
  );
}
