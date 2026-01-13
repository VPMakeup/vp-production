import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SFX Makeup Artist | Victoria Poland",
  description:
    "Special effects makeup, prosthetics, and character design by Victoria Poland.",
  openGraph: {
    title: "SFX Makeup Artist | Victoria Poland",
    description:
      "Special effects makeup, prosthetics, and character design by Victoria Poland.",
    url: "https://victoriapolandmakeup.com/sfx",
    siteName: "Victoria Poland Makeup",
    type: "website",
  },
};

import CategoryContainer from "../components/categoryContainer/CategoryContainer";
//import CategoryTile from "../components/categoryContainer/CategoryTile";
import WorkType from "../components/work/WorkType";
import styles from "./styles.module.css";
import { getProjectsByCategoryPaginated } from "@/sanity/lib/queries";

export default async function SFX() {
  const projects = await getProjectsByCategoryPaginated("SFX", 0, 9);

  const infoText = "Check out our latest SFX project";
  return (
    <main className={styles.about}>
      {" "}
      <div>
        <WorkType sideTitle="SFX" sideTitlePosition="left" />{" "}
      </div>
      <section aria-label="SFX projects">
        <CategoryContainer
          initialProjects={projects}
          category="SFX"
          infoText={infoText}
        />
      </section>
    </main>
  );
}
