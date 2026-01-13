import Featured from "./Featured";
import { useFeaturedProjects } from "./useFeaturedProjects";
import { Project } from "@/app/types/project";

type Props = {
  projects: Project[];
  excludeSlug?: string;
};

export default function FeaturedContainer({ projects, excludeSlug }: Props) {
  const featured = useFeaturedProjects(projects, {
    excludeSlug,
    count: 2,
  });

  if (featured.length < 2) return null;

  return <Featured projects={featured} />;
}
