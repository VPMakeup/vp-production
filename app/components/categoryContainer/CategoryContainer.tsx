"use client";

import CategoryGrid from "./CategoryGrid";
import { ProjectPreview } from "@/app/types/project";

type Props = {
  initialProjects: ProjectPreview[];
  category: string;
  infoText: string;
};

export default function CategoryContainer({
  initialProjects,
  infoText,
}: Props) {
  return (
    <CategoryGrid
      projects={initialProjects}
      infoText={infoText}
      latestSlug={initialProjects[0]?.slug?.current ?? ""}
    />
  );
}
