import type { Metadata } from "next";
import { Footer, Nav, ParallaxImage } from "@/components/sites/a365";
import { AboutAwards, AboutHeading, AboutIntro, AboutSpirit } from "@/components/sites/a365/AboutPage";
import { aboutPage } from "@/components/sites/a365/about-data";
import "@/components/sites/a365/about.css";

export const metadata: Metadata = {
  title: aboutPage.title,
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
