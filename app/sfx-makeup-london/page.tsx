import Link from "next/link";
import SeoServicePage from "../components/templates/SeoServicePage";
import CategoryContainer from "../components/categoryContainer/CategoryContainer";
import { getProjectsByCategoryPaginated } from "@/sanity/lib/queries";
import styles from "./page.module.css";

export const metadata = {
  metadataBase: new URL("https://www.victoriapolandmakeup.com"),
  title: "London SFX Makeup Artist | Prosthetics & Special Effects",
  description:
    "London-based SFX makeup artist specialising in prosthetics, character design and practical effects for film and commercial productions.",
  alternates: {
    canonical: "/sfx-makeup-london",
  },
};

export default async function Page() {
  const projects = await getProjectsByCategoryPaginated("sfx", 0, 20);

  return (
    <SeoServicePage
      title="SFX Makeup Artist London"
      schemaTitle="SFX Makeup Artist London"
      description="Special effects makeup artist in London working across film, TV and commercial productions."
      h1="London SFX Makeup Artist – Prosthetics, Character & Effects"
      image="/VictoriaPolandProfile.jpeg"
      imageAlt="London SFX makeup artist Victoria Poland"
      seeMoreLink="/sfx"
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
      faqs={[
        {
          question: "What SFX makeup services do you offer?",
          answer:
            "Services include prosthetics, character design, injury simulation and practical effects for film, television and commercial productions.",
        },
        {
          question: "Do you work on film sets in London?",
          answer:
            "Yes, Victoria works on film and TV productions across London and the UK, collaborating closely with directors and production teams.",
        },
        {
          question: "Can you travel for international productions?",
          answer:
            "Yes, she regularly works internationally and adapts SFX techniques to different environments and production requirements.",
        },
        {
          question: "How do I book an SFX makeup artist?",
          answer:
            "You can enquire via the contact page to discuss your project, timeline and technical requirements.",
        },
      ]}
      body={
        <>
          <p>
            Victoria Poland is a London-based SFX makeup artist specialising in
            prosthetics, character work and practical effects for film,
            television and commercial productions.
          </p>

          <p>
            Her work combines technical precision with a creative, design-led
            approach—developing makeup that supports character, narrative and
            visual realism on screen.
          </p>

          <p>
            From subtle skin effects to complex transformations, she works
            closely with directors, costume departments and production teams to
            ensure continuity and believability throughout filming.
          </p>

          <p>
            With experience across UK and international productions, Victoria is
            comfortable working in fast-paced on-set environments as well as
            during pre-production development.
          </p>

          <p>
            Learn more{" "}
            <Link className={styles.ctaLink} href="/about">
              about her experience
            </Link>{" "}
            or explore recent SFX projects below.
          </p>

          <div className={styles.cta}>
            <p>
              Planning a production or shoot?{" "}
              <Link href="/contact" className={styles.ctaLink}>
                Get in touch
              </Link>{" "}
              to discuss your SFX requirements.
            </p>
          </div>

          <section className={styles.projectsSection}>
            <CategoryContainer
              initialProjects={projects}
              category="sfx"
              infoText="Recent SFX work"
            />
          </section>
        </>
      }
    />
  );
}
