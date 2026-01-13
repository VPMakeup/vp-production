import styles from "./WorkType.module.css";

type WorkTypeProps = {
  sideTitle?: string;
  sideTitlePosition: "left" | "right";
};

export default function WorkType({
  sideTitle,
  sideTitlePosition = "left",
}: WorkTypeProps) {
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
    </section>
  );
}
