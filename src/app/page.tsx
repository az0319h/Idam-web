import { About, Footer, Hero, Inside, Nav, ParallaxImage, Service, Work } from "@/components/sites/a365";
import { businessSchema, jsonLd } from "@/lib/schema";
import "@/components/sites/a365/inside.css";

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(businessSchema) }} />
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Service />
        <ParallaxImage />
        <Inside />
      </main>
      <Footer />
    </>
  );
}
