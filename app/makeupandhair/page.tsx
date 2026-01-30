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
import Navbar from "../components/navbar/Navbar";

export default async function MakeupAndHair() {
  const projects = await getProjectsByCategoryPaginated(
    "makeupandhair",
    0,
    100
  );

  const infoText = "Check out my latest Makeup & Hair project";
  return (
    <main className={styles.about}>
      <Navbar backgroundColor="#f3eeee" />{" "}
      <div>
        <WorkType sideTitle="Makeup" sideTitlePosition="left" />{" "}
      </div>
      <section aria-label="Makeup & Hair projects">
        <CategoryContainer
          initialProjects={projects}
          category="makeupandhair"
          infoText={infoText}
        />
      </section>
    </main>
  );
}
