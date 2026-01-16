"use client";

import { useState } from "react";
import CategoryGrid from "./CategoryGrid";
import styles from "./CategoryContainer.module.css";
import { ProjectPreview } from "@/app/types/project";

type Props = {
  initialProjects: ProjectPreview[];
  category: string;
  infoText: string;
};

export default function CategoryContainer({
  initialProjects,
  category,
  infoText,
}: Props) {
  const [projects, setProjects] = useState<ProjectPreview[]>(initialProjects);
  const [offset, setOffset] = useState<number>(initialProjects.length);
  const [loading, setLoading] = useState<boolean>(false);

  async function loadMore() {
    try {
      setLoading(true);
      const res = await fetch(
        `/api/projects?category=${category}&start=${offset}`
      );
      if (!res.ok) throw new Error("Failed to load more projects");

      const newProjects: ProjectPreview[] = await res.json();
      setProjects((prev) => [...prev, ...newProjects]);
      setOffset((prev) => prev + newProjects.length);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <CategoryGrid
        projects={projects}
        infoText={infoText}
        latestSlug={projects[0]?.slug?.current ?? ""}
      />
      <div className={styles.loadMoreWrap}>
        <button onClick={loadMore} disabled={loading}>
          {loading ? "Loading..." : "Load more"}
        </button>
      </div>
    </>
  );
}
