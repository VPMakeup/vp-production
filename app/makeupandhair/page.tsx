import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Makeup & Hair Artist | Victoria Poland",
  description:
    "Commercial, editorial, and fashion makeup & hair projects by London-based artist Victoria Poland.",
  openGraph: {
    title: "Makeup & Hair Artist | Victoria Poland",
    description:
      "Commercial, editorial, and fashion makeup & hair projects by Victoria Poland.",
    url: "https://victoriapolandmakeup.com/makeupandhair",
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

export default async function MakeupAndHair() {
  const projects = await getProjectsByCategoryPaginated("MakeupandHair", 0, 9);

  const infoText = "Check out our latest Makeup & Hair project";
  return (
    <main className={styles.about}>
      {" "}
      <div>
        <WorkType sideTitle="Makeup" sideTitlePosition="left" />{" "}
      </div>
      <section aria-label="Makeup & Hair projects">
        <CategoryContainer
          initialProjects={projects}
          category="MakeupandHair"
          infoText={infoText}
        />
      </section>
    </main>
  );
}
