import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.victoriapolandmakeup.com"),
  title: "Film Makeup Artist | Victoria Poland",
  description:
    "Explore Film Makeup and SFX projects by Victoria Poland, London-based makeup artist and designer.",
  alternates: {
    canonical: "/film",
  },
  openGraph: {
    title: "Film Makeup Artist | Victoria Poland",
    description:
      "Explore Film Makeup and SFX projects by Victoria Poland, London-based makeup artist.",
    url: "https://www.victoriapolandmakeup.com/film", // ✅ fixed
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

export default async function Film() {
  const projects = await getProjectsByCategoryPaginated("film", 0, 100);

  const infoText = "Check out my latest Film project";
  return (
    <main className={styles.about}>
      <Navbar backgroundColor="#f3eeee" />{" "}
      <div>
        <WorkType sideTitle="Film" sideTitlePosition="left" />{" "}
      </div>
      <section aria-label="Film projects">
        <CategoryContainer
          initialProjects={projects}
          category="film"
          infoText={infoText}
        />
      </section>
    </main>
  );
}
