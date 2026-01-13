import styles from "./ContactLink.module.css";
import type { ReactNode } from "react";

type ContactLinkProps = {
  href: string;
  label: string;
  icon?: ReactNode;
  external?: boolean;
  ariaLabel?: string;
};

export default function ContactLink({
  href,
  label,
  icon,
  external = false,
  ariaLabel,
}: ContactLinkProps) {
  return (
    <a
      href={href}
      className={styles.link}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel ?? label}
    >
      {icon && (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      )}
      <span className={styles.text}>{label}</span>

      {external && <span className={styles.srOnly}>(opens in a new tab)</span>}
    </a>
  );
}
