import Link from "next/link";
import SeoServicePage from "../components/templates/SeoServicePage";
import CategoryContainer from "../components/categoryContainer/CategoryContainer";
import { getProjectsByCategoryPaginated } from "@/sanity/lib/queries";
import styles from "./page.module.css";

export const metadata = {
  metadataBase: new URL("https://www.victoriapolandmakeup.com"),
  title: "London Film Makeup Artist | Film & TV Production Makeup",
  description:
    "Experienced London film makeup artist working across feature films, television and commercial productions.",
  alternates: {
    canonical: "/film-makeup-london",
  },
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
          question:
            "Do you provide continuity makeup for film and television productions?",
          answer:
            "Yes, continuity is maintained across scenes and shooting days to ensure makeup remains visually consistent throughout production.",
        },
        {
          question: "Can you work on location shoots and studio productions?",
          answer:
            "Yes, Victoria has experience working across studio environments, exterior locations and fast-paced on-set productions in the UK and internationally.",
        },
        {
          question:
            "Do you collaborate with directors and costume departments?",
          answer:
            "Yes, film makeup work often involves close collaboration with directors, costume designers, hair departments and production teams to support the visual direction of a project.",
        },
        {
          question: "What experience do you have in film and TV makeup?",
          answer:
            "Victoria has over 15 years of experience working across feature films, television dramas, music videos and commercial productions, adapting makeup for both cinematic and broadcast environments.",
        },
        {
          question: "How do I book a film makeup artist in London?",
          answer:
            "Production enquiries can be made via the contact page to discuss shoot schedules, creative requirements, locations and availability.",
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
          <h2>Recent London Film Work</h2>
          <p>
            Recent Film projects in London have included the Release the Peace
            campaign, shot in London.{" "}
            <Link className={styles.ctaLink} href="/release-the-peace">
              {" "}
              Release the Peace Project
            </Link>{" "}
            for Loaf productions. Another was the Jungle Good Times music video
            promotional film.
            <Link className={styles.ctaLink} href="/good-times">
              {" "}
              Jungle - Good Times
            </Link>{" "}
            This was shot at Holborn studios in London.
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
          <section>
            Looking for commercial or editorial makeup work instead?
            <Link className={styles.ctaLink} href="/makeup-artist-london">
              View makeup artist services
            </Link>
          </section>
        </>
      }
    />
  );
}
