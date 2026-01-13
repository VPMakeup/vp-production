import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Film Makeup Artist | Victoria Poland",
  description:
    "Explore Film Makeup and SFX projects by Victoria Poland, London-based makeup artist and designer.",
  openGraph: {
    title: "Film Makeup Artist | Victoria Poland",
    description:
      "Explore Film Makeup and SFX projects by Victoria Poland, London-based makeup artist.",
    url: "https://victoriapolandmakeup.com/film",
    siteName: "Victoria Poland Makeup",
    type: "website",
  },
};

import CategoryContainer from "../components/categoryContainer/CategoryContainer";
//import CategoryTile from "../components/categoryContainer/CategoryTile";
import WorkType from "../components/work/WorkType";
import styles from "./styles.module.css";
import { getProjectsByCategoryPaginated } from "@/sanity/lib/queries";

export default async function Film() {
  const projects = await getProjectsByCategoryPaginated("Film", 0, 9);

  const infoText = "Check out our latest Film project";
  return (
    <main className={styles.about}>
      {" "}
      <div>
        <WorkType sideTitle="Film" sideTitlePosition="left" />{" "}
      </div>
      <section aria-label="Film projects">
        <CategoryContainer
          initialProjects={projects}
          category="Film"
          infoText={infoText}
        />
      </section>
    </main>
  );
}
