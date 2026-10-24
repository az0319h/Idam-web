import { About, Footer, Hero, Inside, Nav, ParallaxImage, Service, Work } from "@/components/sites/a365";
import "@/components/sites/a365/inside.css";

export default function Home() {
  return (
    <>
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
