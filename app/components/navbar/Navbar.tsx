"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import Image from "next/image";
import { useState } from "react";

const links = [
  { name: "About", href: "/about" },
  { name: "Sfx", href: "/sfx" },
  { name: "Makeup & Hair", href: "/makeupandhair" },
  { name: "Film", href: "/film" },
  { name: "Contact", href: "/contact" },
];
type NavbarProps = {
  backgroundColor?: string; // optional prop
};

export default function Navbar({ backgroundColor }: NavbarProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  if (pathname.startsWith("/studio")) return null;

  return (
    <nav
      className={styles.navbar}
      style={{ backgroundColor: backgroundColor || "transparent" }}
    >
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

      <button
        className={styles.menuButton}
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`${styles.navMenu} ${isOpen ? styles.open : ""}`}>
        <ul className={styles.navList}>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={
                  pathname === link.href ? styles.activeLink : styles.link
                }
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
