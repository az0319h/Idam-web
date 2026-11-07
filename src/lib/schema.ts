import type { BlogPosting, BreadcrumbList, GeneralContractor, ImageObject, Thing, WebSite, WithContext } from "schema-dts";
import { brand, socialLinks } from "@/components/sites/a365/data";
import type { SitePost } from "@/components/sites/a365/posts";
import type { WorkItem } from "@/components/sites/a365/data";
import { SITE_URL, site } from "./site";

/** `<script type="application/ld+json">` 용 직렬화. `<` 를 이스케이프해 XSS 를 막는다. */
export const jsonLd = (data: Thing | WithContext<Thing> | (Thing | WithContext<Thing>)[]) => JSON.stringify(data).replace(/</g, "\\u003c");

export const BUSINESS_ID = `${SITE_URL}/#business`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/** "2024.08" / "2024-08" → "2024-08-01" */
export const isoMonth = (ym: string) => {
  const [y, m] = ym.split(/[.-]/).map(Number);
  return `${y}-${String(m || 1).padStart(2, "0")}-01`;
};

/** 시공 서비스 목록. 구조화 데이터와 검색엔진이 사이트의 업종을 이해하는 근거가 된다. */
export const services = [
  { name: "목조 주택 시공", description: "경기 북부 목조 주택 신축. 기초, 골조, 단열, 외장, 마감까지 직접 시공합니다." },
  { name: "경량 철골 주택 시공", description: "경량 철골 구조 단독주택과 전원주택 신축." },
  { name: "판넬 공장·창고 시공", description: "철골 골조와 샌드위치 판넬로 짓는 소규모 공장, 창고, 농업용 건물." },
  { name: "상가 인테리어", description: "식당과 상가의 내부 공사, 부분 수리, 증축·개축·리모델링." },
];

/** 홈·견적 문의 페이지에만 넣는 업체 정보 (schema.org GeneralContractor). 다른 페이지는 `@id` 로만 참조한다. */
export const businessSchema: WithContext<GeneralContractor> = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": BUSINESS_ID,
  name: brand.name,
  alternateName: ["이담", "IDAM", "두드림 이담"],
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  image: `${SITE_URL}${site.ogImage}`,
  description: site.description,
  telephone: "+82-10-7123-0261",
  email: brand.email,
  address: { "@type": "PostalAddress", streetAddress: "평화로2862번길 94", addressLocality: "동두천시", addressRegion: "경기도", addressCountry: "KR" },
  /** 평화로2862번길 도로 기준 좌표 (OpenStreetMap). */
  geo: { "@type": "GeoCoordinates", latitude: 37.94121, longitude: 127.06016 },
  areaServed: [{ "@type": "AdministrativeArea", name: "경기 북부" }, ...site.regions.map((name) => ({ "@type": "City" as const, name }))],
  foundingDate: "2014",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "10:00",
    closes: "19:00",
  },
  knowsAbout: ["목조 주택", "경량 철골 주택", "전원주택 신축", "판넬 공장", "판넬 창고", "상가 인테리어", "증축·개축"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "시공 서비스",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name, description: s.description, provider: { "@id": BUSINESS_ID }, areaServed: { "@type": "AdministrativeArea", name: "경기 북부" } },
    })),
  },
  sameAs: socialLinks.map((s) => s.href),
};

/** 검색 결과 상단의 사이트 이름 표시용 (schema.org WebSite). 모든 페이지에 들어간다. */
export const websiteSchema: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: brand.name,
  alternateName: ["이담", "IDAM"],
  url: `${SITE_URL}/`,
  inLanguage: "ko-KR",
  publisher: { "@type": "Organization", "@id": BUSINESS_ID, name: brand.name },
};

/** 사이트 이동 경로. 첫 항목은 "홈" 같은 일반어 대신 상호를 쓴다 (네이버 가이드). */
export function breadcrumbSchema(trail: { name: string; path: string }[]): WithContext<BreadcrumbList> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: brand.name, path: "/" }, ...trail].map((t, i) => ({ "@type": "ListItem", position: i + 1, name: t.name, item: `${SITE_URL}${t.path}` })),
  };
}

/** 현장 소식 글 (schema.org BlogPosting). */
export function postSchema(post: SitePost): WithContext<BlogPosting> {
  const url = `${SITE_URL}/inside/${post.slug}`;
  const date = isoMonth(post.date);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#post`,
    mainEntityOfPage: url,
    url,
    headline: post.title,
    description: post.look || undefined,
    image: `${SITE_URL}${post.hero.src}`,
    datePublished: date,
    dateModified: date,
    articleSection: post.category,
    inLanguage: "ko-KR",
    author: { "@type": "Organization", "@id": BUSINESS_ID, name: brand.name, url: SITE_URL },
    publisher: { "@type": "Organization", "@id": BUSINESS_ID, name: brand.name, logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.png` } },
    isPartOf: { "@id": WEBSITE_ID },
  };
}

/** 작품 대표 사진 (schema.org ImageObject). 구글 이미지 검색의 저작자 표시용. */
export function workImageSchema(item: WorkItem): WithContext<ImageObject> {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: `${SITE_URL}${item.image}`,
    url: `${SITE_URL}${item.image}`,
    name: `${item.name} 대표 사진`,
    description: `${item.service} ${item.name}. ${item.type}, ${item.floors}, ${item.area}㎡.`,
    width: `${item.width}`,
    height: `${item.height}`,
    creator: { "@type": "Organization", "@id": BUSINESS_ID, name: brand.name },
    creditText: brand.name,
    copyrightNotice: `© ${brand.name}`,
    contentLocation: { "@type": "Place", name: item.service },
  };
}
