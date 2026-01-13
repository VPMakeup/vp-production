import styles from "./ClientLogoSection.module.css";
import LogoContainer from "./LogoContainer";

type ClientLogosSectionProps = {
  sideTitle?: string;
  sideTitlePosition: "left" | "right";
  eyebrow?: string;
  body: React.ReactNode;
  reverse?: boolean;
};

export default function ClientLogosSection({
  sideTitle,
  sideTitlePosition,
  eyebrow,
  body,
  reverse = false,
}: ClientLogosSectionProps) {
  return (
    <section className={styles.wrapper}>
      {sideTitle && (
        <h1
          className={`${styles.sideTitle} ${
            sideTitlePosition === "right"
              ? styles.sideTitleRight
              : styles.sideTitleLeft
          }`}
        >
          {sideTitle}
        </h1>
      )}

      <div className={`${styles.section} ${reverse ? styles.reverse : ""}`}>
        <div className={styles.textCol}>
          <div className={styles.displayline}></div>
          {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
          <div className={styles.body}>{body}</div>
        </div>

        <div className={styles.logosCol}>
          <LogoContainer />
        </div>
      </div>
    </section>
  );
}
