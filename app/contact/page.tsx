import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Victoria Poland Makeup Artist",
  description:
    "Get in touch with Victoria Poland, London-based makeup artist and SFX designer. Available for film, commercial, and advertising projects.",
  openGraph: {
    title: "Contact Victoria Poland",
    description:
      "Get in touch with Victoria Poland, London-based makeup artist and SFX designer.",
    url: "https://victoriapolandmakeup.com/contact",
    siteName: "Victoria Poland Makeup",
    type: "website",
  },
};

import styles from "./styles.module.css";
import ContactLink from "../components/contactlink/ContactLink";
import {
  FaMailBulk,
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className={styles.contact}>
      <h1 className={styles.header}>Contact</h1>
      <p className={styles.subheader}>Let’s collaborate. Get in touch.</p>

      <section className={styles.block}>
        <h2 className={styles.label}>Email</h2>
        <ContactLink
          href="mailto:vp@victoriapolandstudio.com"
          label="vp@victoriapolandstudio.com"
          icon={<FaMailBulk />}
          ariaLabel="Send an email to vp@victoriapolandstudio.com"
        />
      </section>

      <section className={styles.block}>
        <h2 className={styles.label}>Phone</h2>
        <ContactLink
          href="tel:+447904225801"
          label="+44 (0) 7904 225 801"
          icon={<FaPhone />}
          ariaLabel="Call +44 (0) 7904 225 801"
        />
      </section>

      <section className={styles.socials} aria-labelledby="socials-heading">
        <h2 id="socials-heading" className={styles.label}>
          Socials
        </h2>

        <ContactLink
          href="https://instagram.com/victoriapolandstudioltd"
          label=""
          icon={<FaInstagram />}
          external
        />
        <ContactLink
          href="https://linkedin.com/in/victoria-poland-39a95618"
          label=""
          icon={<FaLinkedin />}
          external
        />
        <ContactLink
          href="https://facebook.com/profile.php?id=100087655003059"
          label=""
          icon={<FaFacebook />}
          external
        />
      </section>
    </main>
  );
}
