import type { Metadata } from "next";
import { pageDescriptions, site } from "@/lib/site";
import { Footer, Nav } from "@/components/sites/a365";
import { PrivacyBody, PrivacyHeading } from "@/components/sites/a365/Impressum";
import { privacy } from "@/components/sites/a365/data";

export const metadata: Metadata = {
  title: privacy.title,
  description: pageDescriptions.privacy,
  alternates: { canonical: "/info/impressum" },
  openGraph: { description: pageDescriptions.privacy, url: "/info/impressum", images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.ogImageAlt }] },
};

export default function PrivacyRoute() {
  return (
    <>
      <Nav theme="dark" current="/info/impressum" />
      <main>
        <PrivacyHeading />
        <PrivacyBody />
      </main>
      <Footer />
    </>
  );
}
