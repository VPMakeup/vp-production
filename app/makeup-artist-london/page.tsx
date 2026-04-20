import Link from "next/link";
import SeoServicePage from "../components/templates/SeoServicePage";
import CategoryContainer from "../components/categoryContainer/CategoryContainer";
import { getProjectsByCategoryPaginated } from "@/sanity/lib/queries";
import styles from "./page.module.css";

export const metadata = {
  title: "London Makeup Artist | Film, SFX & Commercial Makeup",
  description:
    "London-based makeup artist with 15+ years of experience across film, television, commercial and editorial productions.",
};

const infoText = "Explore selected film and commercial work";

export default async function Page() {
  const projects = await getProjectsByCategoryPaginated("makeupandhair", 0, 20);

  return (
    <SeoServicePage
      title="London Makeup Artist"
      schemaTitle="London Makeup Artist"
      description="Experienced London makeup artist working across film, TV, commercial campaigns and editorial productions."
      h1="London Makeup Artist – Film, TV, Commercial & Editorial"
      image="/VictoriaPolandProfile.jpeg"
      imageAlt="London makeup artist Victoria Poland"
      contactBlock={
        <>
          <h3>Contact</h3>
          <p>
            For bookings, collaborations or availability enquiries, please get
            in touch.
          </p>

          <p>
            <strong>Email:</strong>{" "}
            <Link href="mailto:vp@victoriapolandmakeup.com">
              vp@victoriapolandmakeup.com
            </Link>
          </p>

          <p>
            <strong>Based in:</strong> London, UK
          </p>

          <p>
            <Link href="/contact">Full contact page →</Link>
          </p>
        </>
      }
      seeMoreLink="/makeupandhair"
      faqs={[
        {
          question: "What does a London makeup artist do?",
          answer:
            "A professional makeup artist works across film, television, commercial and editorial productions to create character-driven and camera-ready looks.",
        },
        {
          question: "Do you work on both film and commercial projects?",
          answer:
            "Yes, Victoria works across film, TV, advertising campaigns and editorial shoots in London and internationally.",
        },
        {
          question: "Are you also an SFX makeup artist?",
          answer:
            "Yes, her work includes SFX makeup, prosthetics and character effects for screen and commercial production.",
        },
        {
          question: "How do I book a makeup artist in London?",
          answer:
            "You can enquire via the contact page to discuss availability, creative direction and production details.",
        },
      ]}
      body={
        <>
          <p>
            Victoria Poland is a London-based makeup artist with over 15 years
            of experience working across film, television, commercial campaigns
            and editorial productions.
          </p>

          <p>
            Her work focuses on character-led makeup that supports storytelling
            on screen and in print, collaborating closely with directors,
            photographers and creative teams.
          </p>

          <p>
            She is experienced in both beauty and technical makeup, including
            SFX and prosthetics, adapting her approach to suit each production’s
            visual requirements.
          </p>

          <p>
            Based in London, she works across UK and international shoots,
            bringing a calm, reliable presence to fast-paced production
            environments.
          </p>

          <p>
            Learn more{" "}
            <Link className={styles.ctaLink} href="/about">
              about Victoria
            </Link>{" "}
            or explore selected projects below.
          </p>

          <div className={styles.cta}>
            <p>
              Planning a shoot or production?{" "}
              <Link href="/contact" className={styles.ctaLink}>
                Get in touch
              </Link>{" "}
              to discuss your project.
            </p>
          </div>

          <section
            aria-label="Makeup and hair projects"
            className={styles.projectsSection}
          >
            <CategoryContainer
              initialProjects={projects}
              category="makeupandhair"
              infoText={infoText}
            />
          </section>
        </>
      }
    />
  );
}
