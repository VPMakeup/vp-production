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

import { getProjectsFromSanity } from "@/sanity/lib/queries";
import FeaturedContainer from "./components/featured/FeaturedContainer";
import HeroNameCarousel from "./home/components/hero/HeroNameCarousel";
import TriplePanelCarousel from "./home/components/hero/TriplePanelCarousel";
import SecondHero from "./home/components/second/SecondHero";

export default async function Home() {
  const projects = await getProjectsFromSanity();

  return (
    <main>
      <h1 className="sr-only">
        Victoria Poland – Makeup Artist for Film, TV & SFX
      </h1>

      <section aria-label="Hero showcase">
        <HeroNameCarousel
          images={[
            "/VPTITLEIMAGE1.jpeg",
            "/VPTITLEIMAGE2.jpg",
            "/VPTITLEIMAGE3.jpg",
            "/VPTITLEIMAGE4.jpg",
            "/VPTITLEIMAGE5.jpg",
            "/VPTITLEIMAGE6.jpg",
          ]}
          interval={4500}
        />
      </section>

      <section aria-label="Introduction">
        <TriplePanelCarousel
          slides={[
            {
              leftImage: "/wonderhood.jpg",
              centerImage: "/wagamama.jpg",
              rightBg: "#C7C3C1",
              text: "Victoria Poland is an experienced Makeup Artist based in London. Focussing on TV, Film and SFX.",
            },
            {
              leftImage: "/benstockleyedit.jpg",
              centerImage: "/instaportrait.jpg",
              rightBg: "#CDACA3",
              text: "With over 14 years experience, Victoria works across advertising, drama and high-end photography.",
            },
            {
              leftImage: "/nectar_insta.jpg",
              centerImage: "/threemobile.jpg",
              rightBg: "#BEB9A3",
              text: "Her work appears internationally across film, broadcast and commercial campaigns.",
            },
          ]}
          interval={6000}
        />
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
