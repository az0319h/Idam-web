import type { Metadata } from "next";
import { alternatesFor, pageDescriptions, site } from "@/lib/site";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import { Footer, Nav } from "@/components/sites/a365";
import { WorkHeading, WorkTabs } from "@/components/sites/a365/WorkPage";
import { workPage } from "@/components/sites/a365/data";

export const metadata: Metadata = {
  title: workPage.title,
  description: pageDescriptions.work,
  alternates: alternatesFor("/work"),
  openGraph: { type: "website", description: pageDescriptions.work, url: "/work", images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.ogImageAlt }] },
};

export default function WorkRoute() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema([{ name: workPage.title, path: "/work" }])) }} />
      <Nav theme="dark" current="/work" />
      <main>
        <WorkHeading />
        <WorkTabs />
      </main>
      <Footer />
    </>
  );
}
