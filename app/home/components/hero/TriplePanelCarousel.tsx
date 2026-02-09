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
  const [prev, setPrev] = useState(0);

  useEffect(() => {
    if (!slides.length) return;

    const timer = setInterval(() => {
      setPrev(current);
      setCurrent((current + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [current, slides.length, interval]);

  const currentSlide = slides[current];
  const prevSlide = slides[prev];

  return (
    <section className={styles.wrapper}>
      <div className={styles.grid}>
        <div className={styles.panel}>
          <FadeImage
            src={currentSlide.leftImage}
            prevSrc={prevSlide.leftImage}
            alt="SFX makeup by Victoria Poland"
          />
        </div>

        <div className={styles.panel}>
          <FadeImage
            src={currentSlide.centerImage}
            prevSrc={prevSlide.centerImage}
            alt="Film makeup by Victoria Poland"
          />
        </div>

        <div
          className={styles.panelText}
          style={{ backgroundColor: currentSlide.rightBg }}
        >
          <p>{currentSlide.text}</p>
        </div>
      </div>
    </section>
  );
}

/* ---------- FadeImage helper ---------- */

function FadeImage({
  src,
  prevSrc,
  alt,
}: {
  src: string;
  prevSrc: string;
  alt: string;
}) {
  return (
    <div className={styles.imageStack}>
      <Image
        src={prevSrc}
        alt={alt}
        fill
        className={`${styles.image} ${styles.fadeOut}`}
        sizes="(max-width: 900px) 100vw, 33vw"
      />
      <Image
        src={src}
        alt={alt}
        fill
        className={`${styles.image} ${styles.fadeIn}`}
        sizes="(max-width: 900px) 100vw, 33vw"
      />
    </div>
  );
}
