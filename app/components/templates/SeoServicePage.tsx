import Navbar from "../navbar/Navbar";
import SplitSection from "@/app/about/components/SplitSection";
import InstagramComponent from "../instagram/instagramComponent";

import PhotographersSection from "@/app/about/components/PhotographersSection";
import Map from "../footer/components/Map";
import styles from "./SeoServicePage.module.css";
import ClientLogoSection from "@/app/about/components/clients/ClientLogoSection";
import Link from "next/link";

type FAQItem = {
  question: string;
  answer: string;
};

type Props = {
  schemaTitle: string;
  description: string;
  title?: string;
  h1: string;
  image: string;
  imageAlt: string;
  body: React.ReactNode;
  faqs?: FAQItem[];
  seeMoreLink: string;
  contactBlock?: React.ReactNode;
};

export default function SeoServicePage({
  description,
  h1,
  image,
  imageAlt,
  body,
  schemaTitle,
  faqs,
  contactBlock,
  seeMoreLink,
}: Props) {
  return (
    <main>
      <Navbar backgroundColor="#f3eeee" />

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: schemaTitle,
            areaServed: "London",
            description,
            provider: {
              "@type": "Person",
              name: "Victoria Poland",
            },
          }),
        }}
      />

      {/* FAQ Schema */}
      {faqs && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      )}

      <div className={styles.container}>
        <SplitSection
          sideTitle={schemaTitle}
          sideTitlePosition="right"
          body={
            <div className={styles.body}>
              <h1 className="sr-only">{h1}</h1>
              {body}
              <Link href={seeMoreLink} className={styles.ctaLink}>
                See more Projects
              </Link>
            </div>
          }
          imageSrc={image}
          imageAlt={imageAlt}
        />

        {/* MAP + CONTACT BLOCK SIDE BY SIDE LOGIC */}
        <div className={styles.mapContactWrapper}>
          <Map />

          {contactBlock && (
            <div className={styles.contactBlock}>{contactBlock}</div>
          )}
        </div>

        <ClientLogoSection
          sideTitle="Clients"
          sideTitlePosition="left"
          reverse
          body={
            <>
              <p>
                As a makeup designer and SFX artist, Victoria has worked across
                global campaigns and feature productions including major brands
                and international shoots.
              </p>

              <p>
                Her experience spans beauty, character, SFX and prosthetic work,
                with a strong focus on problem-solving on set.
              </p>
            </>
          }
        />

        <PhotographersSection
          sideTitle="Photographers"
          names={[
            "Andy Glass",
            "Andy Lo Po",
            "Adam Hinton",
            "Dylan Collard",
            "Em Cole",
            "Erik Almas",
            "Felicity Crawshaw",
            "George Logan",
            "James Loveday",
            "James Williamson",
            "Julian Ward",
            "Kate Peters",
            "Kell Mitchell",
            "Lewis Khan",
            "Mads Perch",
            "Nick Dolding",
            "Paul Calver",
            "Sebastian Nevols",
            "Simon Webb",
            "Spencer Murphy",
            "Todd Anthony",
            "Tom Van Shelven",
            "Wade Brothers",
          ]}
        />

        {faqs && (
          <section className={styles.faqSection}>
            <div className={styles.faqInner}>
              <h2 className={styles.faqTitle}>FAQs</h2>

              <div className={styles.faqList}>
                {faqs.map((faq, index) => (
                  <div key={index} className={styles.faqItem}>
                    <h3 className={styles.faqQuestion}>{faq.question}</h3>
                    <p className={styles.faqAnswer}>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className={styles.instagramSection}>
          <InstagramComponent />
        </section>
      </div>
    </main>
  );
}
