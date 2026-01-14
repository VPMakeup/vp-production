import Image from "next/image";
import styles from "./SplitSection.module.css";
import { Dancing_Script } from "next/font/google";

type SplitSectionProps = {
  title?: string;
  eyebrow?: string;
  sideTitle?: string;
  sideTitlePosition: "left" | "right";
  body: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
};
export const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function SplitSection({
  eyebrow,
  sideTitle,
  sideTitlePosition = "left",
  body,
  imageSrc,
  imageAlt,
  reverse = false,
}: SplitSectionProps) {
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

        <div className={styles.imageCol}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={400}
            height={550}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
