import styles from "./PhotographersSection.module.css";

type PhotographersSectionProps = {
  sideTitle: string;
  names: string[];
};

export default function PhotographersSection({
  sideTitle,
  names,
}: PhotographersSectionProps) {
  return (
    <section className={styles.wrapper}>
      <span className={styles.sideTitle}>{sideTitle}</span>

      <div className={styles.content}>
        <p className={styles.names}>{names.join(", ")}</p>
      </div>
    </section>
  );
}
