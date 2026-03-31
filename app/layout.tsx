import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

import Footer from "./components/footer/Footer";

const bagnard = localFont({
  src: [{ path: "./bagnard.woff2", weight: "400", style: "normal" }],
  variable: "--font-bagnard",
  display: "swap",
});

const optican = localFont({
  src: [{ path: "./Optiker-K.woff2", weight: "400", style: "normal" }],
  variable: "--font-optican",
  display: "swap",
});

// Static Metadata — can be overridden dynamically in pages
export const metadata: Metadata = {
  title: "Victoria Poland Makeup | London Makeup Artist",
  description:
    "Victoria Poland is a professional makeup artist based in London, specializing in Film, TV, SFX, and high-end photography.",
  keywords: [
    "Victoria Poland",
    "London makeup artist",
    "SFX makeup",
    "Film makeup",
    "Makeup designer",
    "Professional makeup services",
  ],
  authors: [
    { name: "Victoria Poland Studio", url: "https://victoriapolandmakeup.com" },
  ],
  openGraph: {
    title: "Victoria Poland Makeup | London Makeup Artist",
    description:
      "Professional makeup artist in London specializing in Film, TV, SFX, and high-end photography.",
    url: "https://victoriapolandmakeup.com",
    siteName: "Victoria Poland Studio",
    images: [
      {
        url: "https://victoriapolandmakeup.com/vp-logoblack.svg",
        width: 1200,
        height: 630,
        alt: "Victoria Poland Makeup Artist Portfolio",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Victoria Poland Makeup | London Makeup Artist",
    description:
      "Professional makeup artist in London specializing in Film, TV, SFX, and high-end photography.",
    images: ["https://victoriapolandmakeup.com/vp-logoblack.svg"],
    creator: "@victoriapoland",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="P4Rm6B21alrMAE5Z-5_2duU7wTPgeySg-grzNI1b83Q"
        />
      </head>
      <body className={`${bagnard.variable} ${optican.variable} antialiased`}>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
