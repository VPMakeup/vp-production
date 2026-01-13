import styles from "./SecondHero.module.css";

export default function SecondHero() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.divider} />

        <h1 className={styles.heading}>
          victoria poland is a makeup artist from london.
        </h1>

        <p className={styles.card}>
          partnering with talented photographers, models, and actors,
          <span className={styles.highlight}>
            {" "}
            VP offers her artistry and professionalism{" "}
          </span>
          as a makeup artist to bring each project to life.
        </p>
      </div>
    </section>
  );
}
