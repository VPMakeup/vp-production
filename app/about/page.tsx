import InstagramFeed from "../components/instagram/instafeed";
import InstagramProfile from "../components/instagram/instaprofile";
import ClientLogosSection from "./components/clients/ClientLogoSection";
import PhotographersSection from "./components/PhotographersSection";
import SplitSection from "./components/SplitSection";
import styles from "./styles.module.css";

export default function AboutPage() {
  return (
    <main className={styles.about}>
      {/* -------- Structured Data -------- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Victoria Poland",
            jobTitle: "Makeup Artist & SFX Designer",
            url: "https://victoriapolandmakeup.com/about",
            image: "https://victoriapolandmakeup.com/vp2.png",
            sameAs: ["https://www.instagram.com/victoriapolandmakeup"],
            worksFor: {
              "@type": "Organization",
              name: "Freelance",
            },
            description:
              "London-based makeup artist and SFX designer with over 15 years of experience across film, commercial and advertising.",
          }),
        }}
      />

      <SplitSection
        sideTitle="About"
        sideTitlePosition="right"
        body={
          <>
            <h1 className="sr-only">
              About Victoria Poland – Makeup Artist & SFX Designer
            </h1>

            <p>
              Using makeup to tell a story has been at the heart of Victoria’s
              career since her early work on films such as{" "}
              <em>Edge of Tomorrow</em> and <em>Anna Karenina</em>. Now a
              London-based makeup artist with over 15 years of industry
              experience, she works across film, commercial and advertising,
              bringing a thoughtful, design-led approach to every project.
            </p>

            <p>
              Known for her calm, adaptable approach on set and her ability to
              meet complex briefs, no challenge is too technical, unusual or
              ambitious.
            </p>

            <p>
              When not on set, Victoria can usually be found throwing shapes on
              the potter’s wheel, exploring galleries, travelling to far-flung
              places, cooking, or listening to live music.
            </p>
          </>
        }
        imageSrc="/vp2.png"
        imageAlt="Portrait of London makeup artist Victoria Poland"
      />

      <ClientLogosSection
        sideTitle="Clients"
        sideTitlePosition="left"
        reverse
        body={
          <>
            <h2>Selected Clients & Commercial Work</h2>

            <p>
              As a makeup designer and SFX artist, Victoria has built a diverse
              skill set spanning beauty, character, and prosthetic work. She has
              collaborated with award-winning photographers and created makeup
              for global brands such as Virgin Atlantic, easyJet, British
              Airways, Amazon, Puma, Nike, and New Balance.
            </p>

            <p>
              From crafting realistic SFX shingles on location in Ecuador and
              China to developing waterproof makeup for major international
              campaigns, Victoria thrives on creative problem solving.
            </p>
          </>
        }
      />

      <PhotographersSection
        sideTitle="Photographers"
        names={[
          "Andy Glass",
          "Andy Lo Po",
          "Adam Hinton",
          "Dylan Collard",
          "Em Cole",
          "Erik Almas",
          "Felicity Crawshaw",
          "George Logan",
          "James Loveday",
          "James Williamson",
          "Julian Ward",
          "Kate Peters",
          "Kell Mitchell",
          "Lewis Khan",
          "Mads Perch",
          "Nick Dolding",
          "Paul Calver",
          "Sebastian Nevols",
          "Simon Webb",
          "Spencer Murphy",
          "Todd Anthony",
          "Tom Van Shelven",
          "Wade Brothers",
        ]}
      />

      <section className={styles.instagramSection}>
        <InstagramProfile />
        <InstagramFeed />
      </section>
    </main>
  );
}
