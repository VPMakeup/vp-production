"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./CategoryTile.module.css";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import { ProjectPreview } from "@/app/types/project";

const builder = imageUrlBuilder(client);

export default function CategoryTile({ project }: { project: ProjectPreview }) {
  if (!project.titleImage) return null;

  const { asset } = project.titleImage;
  const width = asset?.metadata?.dimensions?.width ?? 1;
  const height = asset?.metadata?.dimensions?.height ?? 1;
  const aspectRatio = width / height;

  const imageUrl = builder.image(project.titleImage).width(800).url();

  return (
    <Link href={`/${project.slug.current}`} className={styles.tile}>
      <div className={styles.imageWrap} style={{ aspectRatio }}>
        <Image
          src={imageUrl}
          alt={project.title}
          fill
          loading="lazy"
          className={styles.image}
        />
        <div className={styles.overlay}>
          <h3>{project.title}</h3>
          {project.client && <p>{project.client}</p>}
          {project.role && <p>{project.role}</p>}
        </div>
      </div>
    </Link>
  );
}
