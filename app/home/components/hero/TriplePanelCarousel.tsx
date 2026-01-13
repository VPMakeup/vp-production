"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./TriplePanelCarousel.module.css";

type Slide = {
  leftImage: string;
  centerImage: string;
  rightBg: string;
  text: string;
};

type Props = {
  slides: Slide[];
  interval?: number;
};

export default function TriplePanelCarousel({
  slides,
  interval = 6000,
}: Props) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length, interval]);

  return (
    <section className={styles.wrapper}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${styles.slide} ${
            index === current ? styles.active : ""
          }`}
        >
          <div className={styles.panel}>
            <Image
              src={slide.leftImage}
              alt="SFX makeup for projects by Victoria Poland"
              fill
              className={styles.image}
              sizes="(max-width: 900px) 100vw, 33vw"
            />
          </div>

          <div className={styles.panel}>
            <Image
              src={slide.centerImage}
              alt="Film makeup for projects by Victoria Poland"
              fill
              className={styles.image}
              sizes="(max-width: 900px) 100vw, 33vw"
            />
          </div>

          <div
            className={styles.panelText}
            style={{ backgroundColor: slide.rightBg }}
          >
            <p>{slide.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
