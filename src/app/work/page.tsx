import type { Metadata } from "next";
import { Footer, Nav } from "@/components/sites/a365";
import { WorkHeading, WorkTabs } from "@/components/sites/a365/WorkPage";
import { workPage } from "@/components/sites/a365/data";

export const metadata: Metadata = {
  title: workPage.title,
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
