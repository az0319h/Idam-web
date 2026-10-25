export const SOURCE = "https://www.a365.at";

export const navLinks = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Inside", href: "/inside" },
];
export const contactLink = { label: "Contact", href: "/contact" };

export const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/a365inside/" },
  { label: "LinkedIn", href: "https://at.linkedin.com/company/a365" },
  { label: "Vimeo", href: "https://vimeo.com/a365" },
];

export const hero = {
  heading: "Building Brands that Resonate",
  since: "since 2006",
  text: "• Wir helfen Unternehmen, ihre Marke zu positionieren und wirkungsvoll zu kommunizieren. Für Wachstum und Erfolg.",
  image: "/sites/a365/agentur-shooting.jpg",
};

export const about = {
  heading: "About",
  lead: "Für uns liegt die wahre Kraft darin – die Essenz einer Marke zu erkennen und diese in eine relevante Botschaft zu transformieren. Mit einem tiefen Verständnis für Design und Menschen gestalten wir Kommunikation, die Herzen erreicht, Werte verbindet und sich im Gedächtnis verankert.",
  text: "Wir glauben, dass Marken, die ehrlich, authentisch und relevant kommunizieren, nicht nur erfolgreich sind, sondern auch einen positiven Beitrag zur Gesellschaft leisten. Unser Fokus liegt darauf, einzigartige Markenidentitäten zu entwickeln, die nicht nur ästhetisch überzeugen, sondern auch kraftvolle, emotionale Verbindungen zu ihren Zielgruppen schaffen.",
  link: { label: "Mehr über uns", href: "/about" },
};

export interface WorkItem {
  name: string;
  service: string;
  year: string;
  href: string;
  image: string;
  width: number;
  height: number;
}

/** All 24 projects in source order (from /work). The homepage shows the first six. */
export const allWork: WorkItem[] = [
    { name: "EFS-AG Euro Finanz Service", service: "Website", year: "2026", href: `${SOURCE}/works/efs-ag`, image: "/sites/a365/work/efs-ag.jpg", width: 2500, height: 1457 },
    { name: "Hannak", service: "Brand Identity", year: "2026", href: `${SOURCE}/works/hannak`, image: "/sites/a365/work/hannak.jpg", width: 2330, height: 1360 },
    { name: "Merwart", service: "Brand Identity", year: "2025", href: `${SOURCE}/works/merwart`, image: "/sites/a365/work/merwart.webp", width: 2330, height: 1360 },
    { name: "Inovum", service: "Brand Identity", year: "2025", href: `${SOURCE}/works/inovum`, image: "/sites/a365/work/inovum.jpg", width: 2330, height: 1360 },
    { name: "Salzburg Verkehr", service: "Kampagne", year: "2025", href: `${SOURCE}/works/salzburg-verkehr`, image: "/sites/a365/work/salzburg-verkehr.webp", width: 4590, height: 2676 },
    { name: "Salzburger Verlagshaus", service: "UI/UX-Design", year: "2025", href: `${SOURCE}/works/salzburger-verlagshaus`, image: "/sites/a365/work/salzburger-verlagshaus.png", width: 2297, height: 1329 },
    { name: "Meschik", service: "Brand Identity", year: "2025", href: `${SOURCE}/works/meschik`, image: "/sites/a365/work/meschik.webp", width: 2300, height: 1330 },
    { name: "LINK3", service: "Brand Identity", year: "2024", href: `${SOURCE}/works/link3`, image: "/sites/a365/work/link3.jpg", width: 2330, height: 1360 },
    { name: "Quant", service: "Brand Identity", year: "2024", href: `${SOURCE}/works/quant`, image: "/sites/a365/work/quant.webp", width: 2330, height: 1360 },
    { name: "Amari", service: "Brand Identity", year: "2023", href: `${SOURCE}/works/amari`, image: "/sites/a365/work/amari.jpg", width: 2330, height: 1360 },
    { name: "247–Billiards", service: "Brand Identity", year: "2024", href: `${SOURCE}/works/247-billiards`, image: "/sites/a365/work/247-billiards.jpg", width: 2330, height: 1360 },
    { name: "Marcel Eberharter", service: "Website", year: "2023", href: `${SOURCE}/works/marcel-eberharter`, image: "/sites/a365/work/marcel-eberharter.webp", width: 2330, height: 1360 },
    { name: "Caritas", service: "OOH Kampagne", year: "2024", href: `${SOURCE}/works/caritas`, image: "/sites/a365/work/caritas.svg", width: 2330, height: 1350 },
    { name: "Dubi", service: "Produktfilm", year: "2023", href: `${SOURCE}/works/dubi`, image: "/sites/a365/work/dubi.webp", width: 2330, height: 1360 },
    { name: "Lagermax Futurespace", service: "Exhibition Design", year: "2022", href: `${SOURCE}/works/lagermax-futurespace`, image: "/sites/a365/work/lagermax-futurespace.jpg", width: 2330, height: 1360 },
    { name: "Lagermax", service: "Brand Identity", year: "2022", href: `${SOURCE}/works/lagermax`, image: "/sites/a365/work/lagermax.webp", width: 2500, height: 1449 },
    { name: "Ramsauer", service: "Kampagne", year: "2023", href: `${SOURCE}/works/ramsauer`, image: "/sites/a365/work/ramsauer.webp", width: 2330, height: 1360 },
    { name: "Kunesch", service: "Brand Identity", year: "2021", href: `${SOURCE}/works/kunesch`, image: "/sites/a365/work/kunesch.svg", width: 2330, height: 1350 },
    { name: "Xtrig", service: "Brand Identity", year: "2021", href: `${SOURCE}/works/xtrig`, image: "/sites/a365/work/xtrig.webp", width: 2330, height: 1360 },
    { name: "Graggaber", service: "Brand Identity", year: "2023", href: `${SOURCE}/works/graggaber`, image: "/sites/a365/work/graggaber.webp", width: 2330, height: 1360 },
    { name: "Alumero", service: "Brand Identity", year: "2021", href: `${SOURCE}/works/alumero`, image: "/sites/a365/work/alumero.webp", width: 2500, height: 1449 },
    { name: "Solarfold", service: "Brand Identity", year: "2022", href: `${SOURCE}/works/solarfold`, image: "/sites/a365/work/solarfold.webp", width: 2330, height: 1360 },
    { name: "Vandealps", service: "Brand Identity", year: "2023", href: `${SOURCE}/works/vandealps`, image: "/sites/a365/work/vandealps.webp", width: 2330, height: 1360 },
    { name: "Hasenkopf", service: "Website", year: "2023", href: `${SOURCE}/works/hasenkopf`, image: "/sites/a365/work/hasenkopf.webp", width: 2330, height: 1360 },
];

export const work = {
  heading: "Work",
  years: "(2006-2026)",
  allLink: { label: "Alle Projekte", href: `${SOURCE}/work` },
  lead: "Aktuelle Projekte.",
  items: allWork.slice(0, 6),
};

/** Paragraph parts: plain strings or { strong: string }. `"\n"` marks a line break pair. */
export type RichPart = string | { strong: string };

export interface ServiceItem {
  number: string;
  title: string;
  /** The source hides this item (`.open-by-default { display:none }`). */
  hidden?: boolean;
  images: string[];
  headline: string;
  paragraphs: RichPart[][];
  tools: string[];
}

export const service = {
  heading: "Service",
  items: [
    {
      number: "01",
      title: "Strategy",
      hidden: true,
      images: ["/sites/a365/service/strategy-02.jpg", "/sites/a365/service/strategy-03.jpg"],
      headline: "Das Fundament",
      paragraphs: [
        ["Durch eine fundierte Analyse im Rahmen einer ", { strong: "Markenrecherche" }, " decken wir das volle Potenzial Ihrer Marke auf und legen die Basis für eine klare und differenzierte ", { strong: "Positionierung" }, ". Gemeinsam entwickeln wir ein maßgeschneidertes ", { strong: "Kommunikationskonzept" }, ", das Ihre Zielgruppe anspricht und begeistert, und schaffen damit ein authentisches ", { strong: "Brand Narrativ" }, ", welches Ihre Marke emotional auflädt und nachhaltig verankert."],
        ["Unser Ansatz vereint Strategie und Kreativität: Mit einer präzisen ", { strong: "Zielgruppenanalyse" }, ", einem starken ", { strong: "Naming" }, " und wirkungsvollen Kampagnen setzen wir den USP Ihres Unternehmens oder Produkts gekonnt in Szene. So schaffen wir eine starke Verbindung zwischen Ihrer Marke und Ihrer Zielgruppe – für langfristigen Erfolg."],
      ],
      tools: ["Brand Audit", "Positionierung", "Kommunikationskonzept", "Brand Narrativ"],
    },
    {
      number: "02",
      title: "Design",
      images: ["/sites/a365/service/identity-01.jpg", "/sites/a365/service/identity-02.jpg"],
      headline: "Eine einzigartige Identität",
      paragraphs: [
        ["Wir entwickeln eine ", { strong: "Corporate Identity" }, ", die Ihre Marke visuell und verbal besonders macht. Auf Basis einer klaren strategischen Positionierung gestalten wir eine Designsprache, die Ihre Kunden verstehen und lieben. Mit einer prägnanten ", { strong: "Visual Identity" }, " – von ", { strong: "Logoentwicklung" }, " über ", { strong: "Packaging Design" }, " bis hin zu ", { strong: "Drucksorten" }, " und ", { strong: "Corporate Publishing" }, " – und einer konsistenten ", { strong: "Verbal Identity" }, " schaffen wir ein starkes Fundament für Ihren Markenauftritt."],
        ["Unsere ", { strong: "Art Direction" }, " für Film und Fotografie sorgt für einheitliche und überzeugende visuelle Inhalte, während ein flexibles ", { strong: "Design System" }, " die Gestaltung über alle Kanäle hinweg sichert. So machen wir Ihren Kommunikationsauftritt fit für die Zukunft und für alle Touchpoints – mit einer Marke, die begeistert und im Gedächtnis bleibt."],
      ],
      tools: ["Visual Identity", "Verbal Identity", "Art Direction (Film & Fotografie)", "Design System"],
    },
    {
      number: "03",
      title: "Communication",
      images: ["/sites/a365/service/communication-01.jpg", "/sites/a365/service/communication-02.jpg"],
      headline: "Die Marke nach außen kommunizieren",
      paragraphs: [
        ["Als Design Studio begleiten wir Sie von der Konzeption bis zur Realisierung Ihrer Kommunikationsmaßnahmen. Für Ihre ", { strong: "Website" }, " entwickeln wir ein individuelles Design, das Ihre Markenbotschaft klar transportiert und Ihre Zielgruppe überzeugt. Mit einem intuitiven Nutzererlebnis und modernster Technologie."],
        ["Bei der Gestaltung Ihrer ", { strong: "Kampagne" }, " schaffen wir starke Leitideen und ein einprägsames ", { strong: "Key Visual" }, ", das auf allen Kanälen Wiedererkennungswert garantiert. Ob ", { strong: "Printprodukte" }, " wie Broschüren und Plakate oder digitale Assets – wir setzen Ihre Kampagne konsistent und wirkungsvoll um."],
        ["Unsere ", { strong: "Film- und Fotografie-Produktionen" }, " geben Ihrer Marke eine emotionale Dimension. Mit durchdachter ", { strong: "Art Direction" }, " und einem klaren Fokus auf Ästhetik und Storytelling entstehen Inhalte, die Ihre Botschaft eindrucksvoll transportieren."],
      ],
      tools: ["Website", "Kampagne", "Printprodukte", "Key Visual", "Film & Fotografie"],
    },
  ] satisfies ServiceItem[],
};

export const parallax = {
  image: "/sites/a365/agentur-shooting-02.webp",
  width: 2330,
  height: 1360,
  alt: "A365 Agentur Shooting",
};

export const inside = {
  heading: "Inside",
  allLink: { label: "Alle News", href: "/inside" },
  lead: "Ein Raum für Neues, in dem Visionen Form annehmen und Experimente zu echten Erkenntnissen werden.",
  items: [
    { title: "Visitenkarten – gedruckt auf hochwertigem Baumwollpapier von Gmund, veredelt im Letterpress-Verfahren.", href: `${SOURCE}/blog/visitenkarten---gedruckt-auf-hochwertigem-baumwollpapier-von-gmund-veredelt-im-letterpress-verfahren`, image: "/sites/a365/blog/vk-studio.jpg", width: 2400, height: 1402 },
    { title: "Digitale Barrierefreiheit", href: `${SOURCE}/blog/digitale-barrierefreiheit`, image: "/sites/a365/blog/barrierefreiheit.gif", width: 2400, height: 1401 },
    { title: "Out of Home Kampagne", href: `${SOURCE}/blog/plakatwand-die-bunt-ist`, image: "/sites/a365/blog/inside-ooh-03.jpg", width: 2400, height: 1402 },
    { title: "30 Jahre Printdesign - 1990 - 2020", href: `${SOURCE}/blog/30-jahre-printdesign---1990---2020`, image: "/sites/a365/blog/buch-since-2006.jpg", width: 2000, height: 1168 },
  ],
};

export const footer = {
  links: [...navLinks, contactLink],
  social: socialLinks,
  ctaLabel: "Interesse an einer Zusammenarbeit?",
  cta: { label: "Let’s Chat", href: "/contact" },
  studio: { label: "Creative Studio", href: "tel:+436622307610" },
  legal: [
    { label: "Impressum", href: "/info/impressum" },
    { label: "AGB", href: "https://cdn.prod.website-files.com/673f3f3c0d757a4a956146c9/6752dd68d0d55412c36efd6f_A365-AGB.pdf" },
    { label: "Datenschutz", href: "https://cdn.prod.website-files.com/673f3f3c0d757a4a956146c9/6752dd681c5905ae01d0c7cd_A365-Datenschutzerklaerung.pdf" },
  ],
  copyright: "©2026",
  mobileCopyright: "©2024",
};

export const contact = {
  title: "Contact . Werbeagentur Salzburg",
  heading: "Hello",
  blocks: [
    { label: "Social", links: socialLinks },
    {
      label: "Standort",
      lines: ["Elisabethstraße 36", "5020 Salzburg", "Austria"],
      links: [{ label: "Auf Google Maps ansehen", href: "https://maps.app.goo.gl/NdSRDZxVTKtnnfhM7" }],
    },
    { label: "Parkplatz", links: [{ label: "Auf Google Maps ansehen", href: "https://maps.app.goo.gl/EmvPM8S8aGnFW7Ar9" }] },
    {
      label: "Kontakt",
      links: [
        { label: "office@a365.at", href: "mailto:office@a365.at" },
        { label: "+43 662 230761 0", href: "tel:+436622307610" },
      ],
    },
  ],
  map: { image: "/sites/a365/map-desktop.png", width: 3792, height: 3056, alt: "Karte: A365, Elisabethstraße 36, 5020 Salzburg" },
  form: {
    heading: "Sende uns Deine Nachricht!",
    namePlaceholder: "Name",
    emailPlaceholder: "Email",
    messagePlaceholder: "Nachricht",
    submit: "Submit",
    wait: "Please wait...",
    success: "Danke! Wir werden dich in Kürze kontaktieren.",
    error: "Oops! Something went wrong while submitting the form.",
    mailto: "office@a365.at",
  },
};

export const workPage = {
  title: "Work . Werbeagentur Design Studio Salzburg",
  heading: "Projects",
  tabs: { grid: "Grid", list: "List" },
  detail: "Zum Projekt",
};

export const impressum = {
  title: "Impressum",
  heading: "Impressum",
  lines: [
    { text: "A365 / Agentur für neue Kommunikation GmbH" },
    { text: "Elisabethstraße 36, 5020 Salzburg Österreich" },
    { text: "T: +43 662 230761", href: "tel:+43662230761" },
    { text: "office@a365.at", href: "mailto:office@a365.at" },
    { text: "UID: ATU 67081105 . FN 376093 d" },
    { text: "Landesgericht Salzburg" },
    { text: "Geschäftsführer: Christian Kosmaier" },
  ],
};
