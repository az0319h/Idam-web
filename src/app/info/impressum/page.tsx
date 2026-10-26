import type { Metadata } from "next";
import { Footer, Nav } from "@/components/sites/a365";
import { PrivacyBody, PrivacyHeading } from "@/components/sites/a365/Impressum";
import { privacy } from "@/components/sites/a365/data";

export const metadata: Metadata = {
  title: privacy.title,
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
