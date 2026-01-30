import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Victoria Poland | Makeup Artist for Film, TV & SFX",
  description:
    "London-based makeup artist specializing in film, TV, SFX, and commercial projects. Explore the work of Victoria Poland.",
  openGraph: {
    title: "Victoria Poland | Makeup Artist for Film, TV & SFX",
    description:
      "London-based makeup artist specializing in film, TV, SFX, and commercial projects.",
    url: "https://victoriapolandmakeup.com",
    siteName: "Victoria Poland Makeup",
    images: [
      {
        url: "https://victoriapolandmakeup.com/VP2.png",
        width: 1200,
        height: 630,
        alt: "Victoria Poland Makeup Artist",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Victoria Poland | Makeup Artist",
    description: "Makeup artist for film, TV & SFX based in London.",
  },
};

import {
  getHeroCarouselImages,
  getProjectsFromSanity,
  getTriplePanelSlides,
} from "@/sanity/lib/queries";

import FeaturedContainer from "./components/featured/FeaturedContainer";
import HeroNameCarousel from "./home/components/hero/HeroNameCarousel";
import TriplePanelCarousel from "./home/components/hero/TriplePanelCarousel";
import SecondHero from "./home/components/second/SecondHero";
import Navbar from "./components/navbar/Navbar";
import { urlFor } from "@/sanity/lib/image";

export default async function Home() {
  const projects = await getProjectsFromSanity();
  const slides = (await getTriplePanelSlides()) ?? [];
  const heroImages = (await getHeroCarouselImages()) ?? [];

  return (
    <main>
      <Navbar backgroundColor="#fff" />
      <h1 className="sr-only">
        Victoria Poland – Makeup Artist for Film, TV & SFX
      </h1>

      <section aria-label="Hero showcase">
        {heroImages.length > 0 && (
          <HeroNameCarousel
            images={heroImages
              .filter((img) => img.image) // <-- ignore nulls
              .map((img) => urlFor(img.image).width(1200).url())}
            interval={4500}
          />
        )}
      </section>

      <section aria-label="Introduction">
        {slides.length > 0 && (
          <TriplePanelCarousel
            slides={slides.map((slide) => ({
              leftImage: urlFor(slide.leftImage).width(1200).url(),
              centerImage: urlFor(slide.centerImage).width(1200).url(),
              rightBg: slide.rightBg,
              text: slide.text,
            }))}
          />
        )}
      </section>

      <section aria-label="About Victoria Poland">
        <SecondHero />
      </section>

      <section aria-label="Featured projects">
        <FeaturedContainer projects={projects} />
      </section>
    </main>
  );
}
