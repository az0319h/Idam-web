import type { Metadata } from "next";
import { pageDescriptions, site } from "@/lib/site";
import { Footer, Nav } from "@/components/sites/a365";
import { WorkHeading, WorkTabs } from "@/components/sites/a365/WorkPage";
import { workPage } from "@/components/sites/a365/data";

export const metadata: Metadata = {
  title: workPage.title,
  description: pageDescriptions.work,
  alternates: { canonical: "/work" },
  openGraph: { description: pageDescriptions.work, url: "/work", images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.ogImageAlt }] },
};

export default function WorkRoute() {
  return (
    <>
      <Nav theme="dark" current="/work" />
      <main>
        <WorkHeading />
        <WorkTabs />
      </main>
      <Footer />
    </>
  );
}
