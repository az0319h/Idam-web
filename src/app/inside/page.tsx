import type { Metadata } from "next";
import { pageDescriptions, site } from "@/lib/site";
import { Footer, Nav } from "@/components/sites/a365";
import { InsideHeading, InsideList } from "@/components/sites/a365/InsidePage";
import { insidePage } from "@/components/sites/a365/inside-data";
import "@/components/sites/a365/inside.css";

export const metadata: Metadata = {
  title: insidePage.title,
  description: pageDescriptions.inside,
  alternates: { canonical: "/inside" },
  openGraph: { description: pageDescriptions.inside, url: "/inside", images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.ogImageAlt }] },
};

export default function InsideRoute() {
  return (
    <>
      <Nav theme="dark" current="/inside" />
      <main>
        <InsideHeading />
        <InsideList />
      </main>
      <Footer />
    </>
  );
}
