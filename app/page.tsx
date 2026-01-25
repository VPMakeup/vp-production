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
import Navbar from "./components/navbar/Navbar";

export default async function Home() {
  const projects = await getProjectsFromSanity();

  return (
    <main>
      <Navbar backgroundColor="#fff" />
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
              text: "Victoria is an experienced makeup artist based in London. Focussing on SFX makeup for stills and moving image",
            },
            {
              leftImage: "/benstockleyedit.jpg",
              centerImage: "/instaportrait.jpg",
              rightBg: "#CDACA3",
              text: "With over 15 years experience working across advertising, moving image and high-end photography",
            },
            {
              leftImage: "/nectar_insta.jpg",
              centerImage: "/threemobile.jpg",
              rightBg: "#BEB9A3",
              text: "Her work appears internationally across commercial campaigns, spanning moving image and photography",
            },
            {
              leftImage: "/wagamama.jpg",
              centerImage: "/instaportrait.jpg",
              rightBg: "#CDACA3",
              text: "Collaborating with leading photographers, directors, talent and creative teams, Victoria delivers a high level of artistry and professionalism as a makeup artist on every project",
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
