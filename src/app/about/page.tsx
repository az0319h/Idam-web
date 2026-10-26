import type { Metadata } from "next";
import { pageDescriptions, site } from "@/lib/site";
import { Footer, Nav, ParallaxImage } from "@/components/sites/a365";
import { AboutAwards, AboutHeading, AboutIntro, AboutSpirit } from "@/components/sites/a365/AboutPage";
import { aboutPage } from "@/components/sites/a365/about-data";
import "@/components/sites/a365/about.css";

export const metadata: Metadata = {
  title: aboutPage.title,
  description: pageDescriptions.about,
  alternates: { canonical: "/about" },
  openGraph: { description: pageDescriptions.about, url: "/about", images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.ogImageAlt }] },
};

export default function AboutRoute() {
  return (
    <>
      <Nav theme="dark" current="/about" />
      <main>
        <AboutHeading />
        <AboutIntro />
        <ParallaxImage {...aboutPage.parallaxTop} />
        <AboutSpirit />
        <AboutAwards />
        <ParallaxImage {...aboutPage.parallaxBottom} />
      </main>
      <Footer />
    </>
  );
}
