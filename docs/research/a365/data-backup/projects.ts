import { SOURCE, allWork, type WorkItem } from "./data";

export type GalleryItem =
  | { type: "image"; layout: "wide" | "tall"; src: string; width: number; height: number; alt?: string }
  | { type: "video"; layout: "wide" | "tall"; src: string; aspect: "1920/1280" | "1920/1440" | "1/1" };

export interface ProjectPage {
  slug: string;
  title: string;
  name: string;
  year: string;
  client: string;
  service: string;
  industry: string;
  hero: { src: string; width: number; height: number };
  lead: string;
  services: string[];
  text: string;
  link?: { label: string; href: string };
  gallery: GalleryItem[];
  /** "Next Project" cards, by work slug. */
  next: string[];
}

const efs = "/sites/a365/works/efs-ag";

/** Cloned project detail pages (`/works/<slug>`), keyed by slug. */
export const projects: Record<string, ProjectPage> = {
  "efs-ag": {
    slug: "efs-ag",
    title: "EFS-AG Webseite",
    name: "EFS-AG",
    year: "2026",
    client: "EFS-AG",
    service: "Website",
    industry: "Finanzen",
    hero: { src: `${efs}/header-efs-01.jpg`, width: 2500, height: 1457 },
    lead: "Relaunch mit Fokus auf Performance, Design und Nutzererlebnis: Die neue Website der EFS-AG verbindet moderne Ästhetik mit technischer Exzellenz.",
    services: ["UI/UX-Design", "Screendesign", "Programmierung", "Bildsprache"],
    text: "Die neue Website übersetzt die Werte und den Qualitätsanspruch der EFS-AG in ein digitales Erlebnis. Klare Strukturen, eine moderne Bildsprache und eine durchdachte Informationsarchitektur schaffen Orientierung und stärken die Wahrnehmung der Marke.",
    link: { label: "www.efs-ag.at", href: "https://www.efs-ag.at" },
    gallery: [
      { type: "video", layout: "wide", src: `${efs}/video-capture-02.mp4`, aspect: "1920/1280" },
      { type: "image", layout: "tall", src: `${efs}/cd-efs-links.png`, width: 1697, height: 1713 },
      { type: "image", layout: "tall", src: `${efs}/cd-efs-rechts.png`, width: 1701, height: 1713 },
      { type: "video", layout: "wide", src: `${efs}/video-capture-3b.mp4`, aspect: "1920/1440" },
      { type: "image", layout: "wide", src: `${efs}/landscape-mixed-01.jpg`, width: 2500, height: 1875 },
      { type: "video", layout: "tall", src: `${efs}/icons-split-01.mp4`, aspect: "1/1" },
      { type: "video", layout: "tall", src: `${efs}/icons-split-02.mp4`, aspect: "1/1" },
      { type: "image", layout: "wide", src: `${efs}/girl-calling-efs-01.jpg`, width: 2493, height: 1454 },
      { type: "image", layout: "tall", src: `${efs}/bild01.jpg`, width: 1140, height: 1122 },
      { type: "image", layout: "tall", src: `${efs}/bild02.jpg`, width: 1138, height: 1122 },
      { type: "image", layout: "tall", src: `${efs}/bild03.jpg`, width: 1140, height: 1141 },
      { type: "image", layout: "tall", src: `${efs}/bild04.jpg`, width: 1138, height: 1141 },
      { type: "image", layout: "wide", src: `${efs}/bild05.jpg`, width: 2296, height: 1344 },
      { type: "image", layout: "wide", src: `${efs}/tablet-01.jpg`, width: 2500, height: 1667 },
      { type: "image", layout: "wide", src: `${efs}/mobil-combo-03.jpg`, width: 2296, height: 1340 },
    ],
    next: ["vandealps", "link3"],
  },
};

export const projectSlugs = Object.keys(projects);

export function workSlug(item: WorkItem): string {
  return item.href.split("/").pop() ?? "";
}

/** Local route when the detail page is cloned, otherwise the source URL. */
export function workHref(item: WorkItem): string {
  const slug = workSlug(item);
  return slug in projects ? `/works/${slug}` : `${SOURCE}/works/${slug}`;
}

export function workBySlug(slug: string): WorkItem | undefined {
  return allWork.find((w) => workSlug(w) === slug);
}
