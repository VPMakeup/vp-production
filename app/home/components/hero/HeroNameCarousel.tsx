"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./HeroNameCarousel.module.css";

type HeroNameCarouselProps = {
  images: string[];
  interval?: number;
};

export default function HeroNameCarousel({
  images,
  interval = 4000,
}: HeroNameCarouselProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <section className={styles.wrapper}>
      <div className={styles.grid}>
        <h1 className={styles.left}>victoria</h1>

        <div className={styles.imageWrapper}>
          <Image
            src={images[current]}
            alt="Featured SFX work projects by Victoria Poland"
            width={500}
            height={500}
            priority
            sizes="(max-width: 768px) 70vw, 500px"
            className={styles.image}
          />
        </div>

        <h1 className={styles.right}>poland</h1>
      </div>
    </section>
  );
}
