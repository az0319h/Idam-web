import type { Metadata } from "next";
import { Footer, Nav } from "@/components/sites/a365";
import { ContactBody, ContactHeading } from "@/components/sites/a365/Contact";
import { ContactFaq } from "@/components/sites/a365/ContactExtras";
import { contact } from "@/components/sites/a365/data";

export const metadata: Metadata = {
  title: contact.title,
};

export default function ContactPage() {
  return (
    <>
      <Nav theme="dark" current="/contact" />
      <main>
        <ContactHeading />
        <ContactBody />
        <ContactFaq />
      </main>
      <Footer />
    </>
  );
}
