"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Featured.module.css";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import { ProjectPreview } from "@/app/types/project";

/* ------------------ Sanity image helper ------------------ */

const builder = imageUrlBuilder(client);

/* ------------------ Props ------------------ */

type Props = {
  projects: ProjectPreview[];
};

/* ------------------ Featured Component ------------------ */

export default function Featured({ projects }: Props) {
  if (!projects || projects.length < 2) return null;

  const [primary, secondary] = projects;

  // Build image URLs safely
  const primaryImageUrl = primary.titleImage
    ? builder.image(primary.titleImage).width(1200).url()
    : null;

  if (!primaryImageUrl) return null; // Don't render if primary image is missing

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>Featured</h2>

      <div className={styles.grid}>
        {/* ---------- Primary Project ---------- */}
        <Link href={`/${primary.slug.current}`} className={styles.primary}>
          <div className={styles.imageWrap}>
            <Image
              src={primaryImageUrl}
              alt={primary.title}
              fill
              className={styles.image}
              sizes="(min-width: 768px) 60vw, 100vw"
              unoptimized
            />
          </div>

          <div className={styles.meta}>
            {primary.client && <strong>{primary.client}</strong>}
            {primary.role && <span>{primary.role}</span>}
            {primary.category && <span>{primary.category}</span>}
          </div>
        </Link>

        {/* ---------- Secondary Project ---------- */}
        <Link href={`/${secondary.slug.current}`} className={styles.secondary}>
          <strong>{secondary.title}</strong>
          {secondary.client && <span>{secondary.client}</span>}
          <span className={styles.cta}>View project →</span>
        </Link>
      </div>
    </section>
  );
}
