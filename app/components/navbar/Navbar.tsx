"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import Image from "next/image";

const links = [
  { name: "About", href: "/about" },
  { name: "Sfx", href: "/sfx" },
  { name: "Makeup & Hair", href: "/makeupandhair" },
  { name: "Film", href: "/film" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar({
  className = "navbar",
}: {
  className?: string;
}) {
  const pathname = usePathname();

  // Hide navbar on any Studio route
  const isStudio = pathname.startsWith("/studio");
  if (isStudio) return null;

  return (
    <nav className={`${styles.navbar} ${className}`}>
      <div className={styles.logo}>
        <Link href="/" aria-label="Go to homepage">
          <Image
            src="/vp-logoblack.svg"
            data-hover="/vp-pink.svg"
            height={50}
            width={80}
            alt="Victoria Poland Logo"
            className={styles.logoImage}
          />
        </Link>
      </div>
      <ul className={styles.navLinks}>
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={
                pathname === link.href ? styles.activeLink : styles.link
              }
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
