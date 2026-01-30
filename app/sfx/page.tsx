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
export const revalidate = 60;

import CategoryContainer from "../components/categoryContainer/CategoryContainer";
//import CategoryTile from "../components/categoryContainer/CategoryTile";
import WorkType from "../components/work/WorkType";
import styles from "./styles.module.css";
import { getProjectsByCategoryPaginated } from "@/sanity/lib/queries";
import Navbar from "../components/navbar/Navbar";

export default async function SFX() {
  const projects = await getProjectsByCategoryPaginated("sfx", 0, 100);

  const infoText = "Check out my latest SFX project";
  return (
    <main className={styles.about}>
      <Navbar backgroundColor="#f3eeee" />{" "}
      <div>
        <WorkType sideTitle="SFX" sideTitlePosition="left" />{" "}
      </div>
      <section aria-label="SFX projects">
        <CategoryContainer
          initialProjects={projects}
          category="sfx"
          infoText={infoText}
        />
      </section>
    </main>
  );
}
