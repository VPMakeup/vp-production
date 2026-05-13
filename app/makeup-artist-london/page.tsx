import Link from "next/link";
import SeoServicePage from "../components/templates/SeoServicePage";
import CategoryContainer from "../components/categoryContainer/CategoryContainer";
import { getProjectsByCategoryPaginated } from "@/sanity/lib/queries";
import styles from "./page.module.css";

export const metadata = {
  metadataBase: new URL("https://www.victoriapolandmakeup.com"),
  title: "London Makeup Artist | Film, SFX & Commercial Makeup",
  description:
    "London-based makeup artist with 15+ years of experience across film, television, commercial and editorial productions.",
  alternates: {
    canonical: "/makeup-artist-london",
  },
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
          question: "What types of makeup projects do you work on?",
          answer:
            "Victoria works across commercial campaigns, editorial shoots, branded content, music videos and creative productions, tailoring makeup to each project’s visual style and creative direction.",
        },
        {
          question: "Do you provide both makeup and hair styling?",
          answer:
            "Yes, services can include both makeup and hair styling depending on the production requirements, helping create cohesive looks for photography, advertising and screen work.",
        },
        {
          question: "Do you offer SFX and prosthetic makeup?",
          answer:
            "Yes, experience includes SFX makeup, prosthetics and character-based effects for commercial, film and creative productions.",
        },
        {
          question: "Do you work with photographers and creative agencies?",
          answer:
            "Yes, Victoria regularly collaborates with photographers, directors, stylists, brands and creative agencies across editorial and commercial projects.",
        },
        {
          question: "How do I book a makeup artist in London?",
          answer:
            "Enquiries can be made through the contact page to discuss project details, shoot dates, creative references and availability.",
        },
      ]}
      body={
        <>
          <p>
            Victoria Poland is a London-based makeup artist specialising in
            commercial, editorial and creative makeup for brands, advertising
            campaigns, music videos and digital content.
          </p>

          <p>
            With over 15 years of industry experience, she collaborates with
            photographers, stylists, creative agencies and production teams to
            create polished, visually distinctive makeup looks tailored to each
            project.
          </p>

          <p>
            Her work spans beauty makeup, fashion-inspired looks, grooming, hair
            styling and SFX makeup, adapting seamlessly to both natural and
            highly conceptual creative briefs.
          </p>

          <p>
            Based in London and available for UK and international projects,
            Victoria brings a calm, professional approach to studio shoots,
            branded campaigns and fast-moving creative environments.
          </p>
          <h2>Recent London Makeup Work</h2>
          <p>
            Recent Makeup projects in London have included the Hirsh Project
            campaign, shot in London.{" "}
            <Link className={styles.ctaLink} href="/hirsh-london">
              {" "}
              Hirsh London
            </Link>{" "}
            for Hirsh. Commercial standard makeup for this campaign,
            highlighting luxury. Another was the wear the damn shorts campaign
            for Sweaty Betty.
            <Link className={styles.ctaLink} href="/wear-the-damn-shorts">
              {" "}
              Wear the Damn Shorts
            </Link>{" "}
            This was shot at Kennington studios in London.
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
          <section>
            Looking for film makeup work instead?
            <Link className={styles.ctaLink} href="/film-makeup-london">
              View film makeup services
            </Link>
          </section>
        </>
      }
    />
  );
}
