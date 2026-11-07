import type { Metadata } from "next";
import { alternatesFor, pageDescriptions, site } from "@/lib/site";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import { Footer, Nav, ParallaxImage } from "@/components/sites/a365";
import { AboutAwards, AboutHeading, AboutIntro, AboutSpirit } from "@/components/sites/a365/AboutPage";
import { aboutPage } from "@/components/sites/a365/about-data";
import "@/components/sites/a365/about.css";

export const metadata: Metadata = {
  title: aboutPage.title,
  description: pageDescriptions.about,
  alternates: alternatesFor("/about"),
  openGraph: { type: "website", description: pageDescriptions.about, url: "/about", images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.ogImageAlt }] },
};

export default function AboutRoute() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema([{ name: aboutPage.title, path: "/about" }])) }} />
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
