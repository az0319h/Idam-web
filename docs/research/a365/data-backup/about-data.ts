/** a365.at/about — content transcribed from the source page. */

export type ValueIcon = "star" | "heart" | "circle";

export interface ValueItem {
  icon: ValueIcon;
  title: string;
  /** Source wraps most titles in <strong>; "Get Inspired" is plain. */
  strong: boolean;
  text: string;
}

export interface AwardItem {
  number: string;
  name: string;
  category: string;
  /** Source links every category to the Webflow placeholder URL. */
  href: string;
  year: string;
}

export const aboutPage = {
  title: "About . Creative Studio Salzburg",
  heading: "Studio",
  intro: {
    heading: "We are A365",
    lead: "Seit 2006 entwickeln wir digitale und analoge Designkonzepte die Werte reflektieren und emotionale Verbindungen schaffen. Mit strategischer Präzision, Kreativität und tiefem Designverständnis realisieren wir Kommunikationslösungen die Menschen berühren und die Zukunft positiv gestalten.",
    stats: [
      { number: "20", label: "Jahre Erfahrung" },
      { number: "07", label: "Auszeichnungen" },
      { number: "63", label: "Kunden" },
      { number: "365", label: "Tage Inspiration / Jahr" },
    ],
  },
  parallaxTop: { image: "/sites/a365/about/about-a365-04.jpg", width: 2400, height: 1420, alt: "About Image" },
  spirit: {
    heading: "Spirit",
    lead: "Mit Achtsamkeit, Respekt und Liebe begegnen wir uns, unseren Kunden und Partnern – ein inspirierender Austausch auf Augenhöhe. Stärke und gemeinsames Wachstum öffnen Wege zu neuen Ideen und kraftvollen Marken, die einen positiven Beitrag für Gesellschaft und Zukunft leisten. ",
    values: [
      {
        icon: "star",
        title: "Open your Heart",
        strong: true,
        text: "Wer den eigenen Geist öffnet, erweitert seinen Horizont und schafft Freiheit im Kopf. Für unsere kreativen Prozesse ist dieser Grundsatz essenziell, denn um die besten Ideen hervorbringen zu können, braucht es Stabilität im Geist und Klarheit im Verstand.",
      },
      {
        icon: "heart",
        title: "Listen to Yourself",
        strong: true,
        text: "Der respektvolle und achtsame Umgang im Team sowie mit unseren Kunden und Partnern sehen wir als Grundprinzip, welches wir zutiefst integriert haben. So entsteht nicht nur ein Austausch auf Augenhöhe, sondern auch inspirierende Kreativität – und eine echte Win-win-Situation.",
      },
      {
        icon: "circle",
        title: "Get Inspired",
        strong: false,
        text: "Mit Kreativität und Inspiration brechen wir Altes auf und machen Platz für Neues. So können wir nicht nur kraftvolle Marken mit echter Ausstrahlung entwickeln und Unternehmen effektiv unterstützen, sondern auch einen positiven Beitrag für unsere Gesellschaft leisten.",
      },
      {
        icon: "star",
        title: "Feed your Power",
        strong: true,
        text: "Wir lieben Herausforderungen, auch wenn manche im ersten Moment zu groß erscheinen. Aber gemeinsam wachsen wir über uns hinaus und bringen so neue Ideen hervor, entwickeln individuelle Prozesse, die uns bereichern und unser gesamtes Team stärker machen.",
      },
      {
        icon: "heart",
        title: "Power of Love",
        strong: true,
        text: "Die Sprache der Liebe ist die reinste und schönste Form der Kommunikation. Wenn innere Harmonie und Schönheit sich im Außen manifestieren, werden die Herzen der Menschen berührt und inspiriert. So entstehen Arbeiten und Designprodukte, die geliebt werden.",
      },
    ] satisfies ValueItem[],
  },
  awards: {
    heading: "Awards",
    lead: "Wir sind dankbar für die nationalen und internationalen Auszeichnungen. Sie motivieren uns, immer neue Wege zu finden, um beste Ergebnisse zu erzielen.",
    items: [
      { number: "01", name: "Salzburger Landespreis", category: "Messebau & POS", href: "https://webflow.com", year: "2024" },
      { number: "02", name: "Salzburger Landespreis", category: "Web & Digital", href: "https://webflow.com", year: "2022" },
      { number: "03", name: "Golden Pixel Award", category: "Cross Media", href: "https://webflow.com", year: "2022" },
      { number: "04", name: "Salzburger Landespreis", category: "Film & Video", href: "https://webflow.com", year: "2016" },
      { number: "05", name: "Awwwards Honorable", category: "Web & Digital", href: "https://webflow.com", year: "2014" },
      { number: "06", name: "Salzburger Landespreis", category: "Werbekampagne", href: "https://webflow.com", year: "2012" },
      { number: "07", name: "Dope Awards", category: "Web & Digital", href: "https://webflow.com", year: "2010" },
    ] satisfies AwardItem[],
  },
  parallaxBottom: { image: "/sites/a365/about/about-a365-03.jpg", width: 2600, height: 1538, alt: "About Image" },
};

export const valueIcons: Record<ValueIcon, { src: string; height: number }> = {
  star: { src: "/sites/a365/icons/star-white.svg", height: 22 },
  heart: { src: "/sites/a365/icons/heart-white.svg", height: 19 },
  circle: { src: "/sites/a365/icons/circle-white.svg", height: 18 },
};
