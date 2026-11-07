import type { Metadata } from "next";
import { alternatesFor, pageDescriptions, site } from "@/lib/site";
import { breadcrumbSchema, businessSchema, jsonLd } from "@/lib/schema";
import { Footer, Nav } from "@/components/sites/a365";
import { ContactBody, ContactHeading } from "@/components/sites/a365/Contact";
import { ContactFaq } from "@/components/sites/a365/ContactExtras";
import { contact } from "@/components/sites/a365/data";
import type { FAQPage, WithContext } from "schema-dts";

export const metadata: Metadata = {
  title: contact.title,
  description: pageDescriptions.contact,
  alternates: alternatesFor("/contact"),
  openGraph: { type: "website", description: pageDescriptions.contact, url: "/contact", images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.ogImageAlt }] },
};

const faqSchema: WithContext<FAQPage> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: contact.faq.items.map((q) => ({ "@type": "Question", name: q.question, acceptedAnswer: { "@type": "Answer", text: q.answer } })),
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd([businessSchema, faqSchema, breadcrumbSchema([{ name: contact.title, path: "/contact" }])]) }} />
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
