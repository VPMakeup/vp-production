// components/categoryContainer/CategoryGrid.tsx
import styles from "./CategoryGrid.module.css";
import { ProjectPreview } from "@/app/types/project";
import CategoryTile from "./CategoryTile";
import CategoryInfoBlock from "./CategoryInfoBlock";

type Props = {
  projects: ProjectPreview[];
  infoText: string;
  latestSlug: string;
};

export default function CategoryGrid({
  projects,
  infoText,
  latestSlug,
}: Props) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.grid}>
        {projects.map((project, i) => {
          // Insert info block after 3rd project or last project if fewer
          if (i === 3 || (projects.length < 4 && i === projects.length - 1)) {
            return (
              <CategoryInfoBlock
                key="info"
                text={infoText}
                href={`/${latestSlug}`}
              />
            );
          }
          return <CategoryTile key={project._id} project={project} />;
        })}
      </div>
    </section>
  );
}
