import Link from "next/link";
import SeoServicePage from "../components/templates/SeoServicePage";
import CategoryContainer from "../components/categoryContainer/CategoryContainer";
import { getProjectsByCategoryPaginated } from "@/sanity/lib/queries";
import styles from "./page.module.css";

export const metadata = {
  title: "London Film Makeup Artist | Film & TV Production Makeup",
  description:
    "Experienced London film makeup artist working across feature films, television and commercial productions.",
};

export default async function Page() {
  const projects = await getProjectsByCategoryPaginated("film", 0, 20);

  return (
    <SeoServicePage
      schemaTitle="London Film Makeup Artist"
      description="Film makeup artist in London working across feature films, TV and commercial productions."
      h1="London Film Makeup Artist – On-Set & Production Makeup"
      image="/VictoriaPolandProfile.jpeg"
      imageAlt="London film makeup artist Victoria Poland"
      seeMoreLink="/film"
      /* OPTIONAL CONTACT BLOCK (NEW STRUCTURE) */
      contactBlock={
        <>
          <h3>Film Makeup Enquiries</h3>

          <p>
            Available for feature films, television and commercial productions
            across London and internationally.
          </p>

          <p>
            <strong>Email:</strong>{" "}
            <Link href="mailto:vp@victoriapolandmakeup.com">
              vp@victoriapolandmakeup.com
            </Link>
          </p>

          <p>
            <strong>Location:</strong> London, UK
          </p>

          <p>
            <Link href="/contact">Full contact page →</Link>
          </p>
        </>
      }
      faqs={[
        {
          question: "Do you work on feature films and TV productions?",
          answer:
            "Yes, Victoria works across feature films, television dramas and commercial productions in the UK and internationally.",
        },
        {
          question: "What does a film makeup artist do?",
          answer:
            "A film makeup artist is responsible for character continuity, on-set application, and ensuring visual consistency across scenes and shooting days.",
        },
        {
          question: "Do you work on both studio and location shoots?",
          answer:
            "Yes, she has experience working across studio environments, exterior locations and international productions.",
        },
        {
          question: "How do I hire a film makeup artist in London?",
          answer:
            "You can enquire via the contact page to discuss availability, creative requirements and production details.",
        },
      ]}
      body={
        <>
          <p>
            Victoria Poland is a London-based film makeup artist working across
            feature films, television and commercial productions, with over 15
            years of industry experience.
          </p>

          <p>
            Her work focuses on character-driven makeup and continuity, ensuring
            visual consistency across scenes while supporting narrative and
            performance on screen.
          </p>

          <p>
            She collaborates closely with directors, costume departments and
            production teams from pre-production through to final shoot days,
            adapting seamlessly to the demands of each project.
          </p>

          <p>
            Experience spans studio-based filming, on-location shoots and
            international productions, with a calm and efficient approach to
            fast-paced environments.
          </p>

          <p>
            Learn more{" "}
            <Link className={styles.ctaLink} href="/about">
              about Victoria
            </Link>{" "}
            or explore selected film work below.
          </p>

          {/* CTA */}
          <div className={styles.cta}>
            <p>
              Looking for a film makeup artist in London?{" "}
              <Link href="/contact" className={styles.ctaLink}>
                Get in touch
              </Link>{" "}
              to discuss your production.
            </p>
          </div>

          {/* PROJECTS */}
          <section
            className={styles.projectsSection}
            aria-label="Film makeup projects"
          >
            <CategoryContainer
              initialProjects={projects}
              category="film"
              infoText="Selected film and TV work"
            />
          </section>
        </>
      }
    />
  );
}
