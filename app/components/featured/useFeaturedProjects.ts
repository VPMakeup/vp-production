import { useMemo } from "react";

type ProjectWithSlug = {
  slug: { current: string };
};

type Options = {
  excludeSlug?: string;
  count?: number;
};

function shuffle<T>(items: T[]): T[] {
  return [...items].sort(() => 0.5 - Math.random());
}

/**
 * Generic hook to return a subset of featured projects.
 * Preserves the type of the projects passed in.
 */
export function useFeaturedProjects<T extends ProjectWithSlug>(
  projects: T[] | undefined,
  { excludeSlug, count = 2 }: Options = {}
): T[] {
  return useMemo(() => {
    if (!projects || projects.length === 0) return [];

    let result = projects;

    if (excludeSlug) {
      result = result.filter(
        (project) => project.slug?.current !== excludeSlug
      );
    }

    return shuffle(result).slice(0, count);
  }, [projects, excludeSlug, count]);
}
