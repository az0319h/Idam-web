/** a365.at/inside — content transcribed from the source page. */
import { SOURCE } from "./data";

export interface NewsItem {
  title: string;
  /** Blog detail pages are not cloned; links go to the source site. */
  href: string;
  image: string;
  width: number;
  height: number;
  date: string;
  category: string;
}

export const insidePage = {
  title: "Inside . Design Studio News Salzburg",
  heading: "News",
  listHeading: "Aktuelle Beiträge",
  lead: "Ein Raum für Neues, in dem Visionen Form annehmen und Experimente zu echten Erkenntnissen werden.",
  items: [
    { title: "Visitenkarten – gedruckt auf hochwertigem Baumwollpapier von Gmund, veredelt im Letterpress-Verfahren.", href: "/blog/visitenkarten---gedruckt-auf-hochwertigem-baumwollpapier-von-gmund-veredelt-im-letterpress-verfahren", image: "/sites/a365/blog/vk-studio.jpg", width: 2400, height: 1402, date: "07/2025", category: "Printdesign" },
    { title: "Digitale Barrierefreiheit", href: `${SOURCE}/blog/digitale-barrierefreiheit`, image: "/sites/a365/blog/barrierefreiheit.gif", width: 2400, height: 1401, date: "01/2025", category: "News" },
    { title: "Out of Home Kampagne", href: `${SOURCE}/blog/plakatwand-die-bunt-ist`, image: "/sites/a365/blog/inside-ooh-03.jpg", width: 2400, height: 1402, date: "12/2024", category: "Out of Home Kampagne" },
    { title: "30 Jahre Printdesign - 1990 - 2020", href: `${SOURCE}/blog/30-jahre-printdesign---1990---2020`, image: "/sites/a365/blog/buch-since-2006.jpg", width: 2000, height: 1168, date: "12/2024", category: "Printdesign" },
    { title: "X'mas Weihnachtskarte 2024. Fest der Liebe.", href: `${SOURCE}/blog/das-fest-der-liebe`, image: "/sites/a365/blog/x-mas-24b.jpg", width: 2000, height: 1169, date: "12/2024", category: "Branding" },
    { title: "Flauschiges ", href: `${SOURCE}/blog/flauschiges-`, image: "/sites/a365/blog/fluffy-a365.gif", width: 2000, height: 1168, date: "09/2024", category: "Design" },
    { title: "Ästhetisch, ausdrucksstark und anziehend. ", href: `${SOURCE}/blog/incorporating-psychology-in-design-how-to-influence-consumer-behavior`, image: "/sites/a365/blog/fashion-shirt-01.jpg", width: 2000, height: 1169, date: "09/2024", category: "Marketing" },
    { title: "Wandel", href: `${SOURCE}/blog/wandel`, image: "/sites/a365/blog/wandel-01.jpg", width: 2000, height: 1168, date: "09/2024", category: "Design" },
  ] satisfies NewsItem[],
};
