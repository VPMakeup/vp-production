"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import ContactLink from "../contactlink/ContactLink";
import Map from "./components/Map";
import { usePathname } from "next/navigation";

const links = [
  { name: "About", href: "/about" },
  { name: "Sfx", href: "/sfx" },
  { name: "Makeup & Hair", href: "/makeupandhair" },

  { name: "Film", href: "/film" },

  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.column}>
          <Image
            src="/vp-logoblack.svg"
            alt="Victoria Poland Logo"
            width={160}
            height={60}
            className={styles.logo}
          />
          <p className={styles.brand}>
            <span className={styles.highlight}>victoriapoland</span>studio.
          </p>

          <ContactLink
            href="tel:+447904225801"
            label="+44 (0) 7904 225 801"
            ariaLabel="Call +44 (0) 7904 225 801"
          />

          <ContactLink
            href="mailto:vp@victoriapolandmakeup.com"
            label="vp@victoriapolandmakeup.com"
            ariaLabel="Send an email to vp@victoriapolandmakeup.com"
          />
        </div>

        <div className={styles.column}>
          <div className={styles.heading}>Address</div>

          <Map />

          <address className={styles.address}>
            D226 Park Hall Business Centre
            <br />
            40 Martell Road
            <br />
            London, SE21 8EN
          </address>
        </div>

        <nav
          className={`${styles.column} ${styles.navColumn}`}
          aria-label="Footer navigation"
        >
          <ul className={styles.navList}>
            {links.map((link) => (
              <li key={link.href} className={styles.navItem}>
                <Link
                  href={link.href}
                  className={
                    pathname === link.href ? styles.activeLink : styles.navLink
                  }
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className={styles.bottom}>
        <p>
          © {new Date().getFullYear()} Victoria Poland Studio Ltd 15479936 ·
          <a
            href="https://vasselcreative.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website by Vassel Creative
          </a>
        </p>
      </div>
    </footer>
  );
}
