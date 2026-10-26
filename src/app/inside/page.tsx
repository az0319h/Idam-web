import type { Metadata } from "next";
import { Footer, Nav } from "@/components/sites/a365";
import { InsideHeading, InsideList } from "@/components/sites/a365/InsidePage";
import { insidePage } from "@/components/sites/a365/inside-data";
import "@/components/sites/a365/inside.css";

export const metadata: Metadata = {
  title: insidePage.title,
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
