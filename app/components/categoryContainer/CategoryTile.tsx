"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./CategoryTile.module.css";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import { ProjectPreview } from "@/app/types/project";

const builder = imageUrlBuilder(client);

export default function CategoryTile({ project }: { project: ProjectPreview }) {
  const tileRef = useRef<HTMLDivElement>(null);
  const [rowSpan, setRowSpan] = useState<number>(1);

  // Always define the URL even if image is missing
  const imageUrl = project.titleImage
    ? builder.image(project.titleImage).width(800).url()
    : null;

  // Hook always runs, even if imageUrl is null
  useEffect(() => {
    if (!imageUrl) return;

    const img = new window.Image();
    img.src = imageUrl;
    img.onload = () => {
      if (tileRef.current) {
        const rowHeight = 10; // same as grid-auto-rows
        const rowGap = 24; // same as CSS gap
        const span =
          Math.ceil(
            ((img.height / img.width) * tileRef.current.offsetWidth + rowGap) /
              (rowHeight + rowGap)
          ) || 1;
        setRowSpan(span);
      }
    };
  }, [imageUrl]);

  // If no image, render a placeholder tile
  if (!imageUrl)
    return (
      <div className={styles.tile}>
        <div className={styles.imageWrap} style={{ gridRowEnd: `span 1` }} />
      </div>
    );

  return (
    <Link href={`/${project.slug.current}`} className={styles.tile}>
      <div
        ref={tileRef}
        className={styles.imageWrap}
        style={{ gridRowEnd: `span ${rowSpan}` }}
      >
        <Image
          src={imageUrl}
          alt={project.title}
          width={800}
          height={600}
          className={styles.image}
          style={{ objectFit: "cover" }}
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
