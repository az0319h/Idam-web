import type { Metadata } from "next";
import { alternatesFor, pageDescriptions, site } from "@/lib/site";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import { Footer, Nav } from "@/components/sites/a365";
import { PrivacyBody, PrivacyHeading } from "@/components/sites/a365/Impressum";
import { privacy } from "@/components/sites/a365/data";

export const metadata: Metadata = {
  title: privacy.title,
  description: pageDescriptions.privacy,
  alternates: alternatesFor("/info/impressum"),
  openGraph: { type: "website", description: pageDescriptions.privacy, url: "/info/impressum", images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.ogImageAlt }] },
};

export default function PrivacyRoute() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema([{ name: privacy.title, path: "/info/impressum" }])) }} />
      <Nav theme="dark" current="/info/impressum" />
      <main>
        <PrivacyHeading />
        <PrivacyBody />
      </main>
      <Footer />
    </>
  );
}
