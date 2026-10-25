import type { Metadata } from "next";
import type { HomeAndConstructionBusiness, WithContext } from "schema-dts";
import { freesentation } from "@/components/sites/a365/fonts";
import { brand, socialLinks } from "@/components/sites/a365/data";
import { SITE_URL, site } from "@/lib/site";
import "./globals.css";
import "@/components/sites/a365/a365.css";

const verification: NonNullable<Metadata["verification"]> = {};
if (process.env.GOOGLE_SITE_VERIFICATION) verification.google = process.env.GOOGLE_SITE_VERIFICATION;
if (process.env.NAVER_SITE_VERIFICATION) verification.other = { "naver-site-verification": process.env.NAVER_SITE_VERIFICATION };

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: site.title, template: site.titleTemplate },
  description: site.description,
  keywords: site.keywords,
  alternates: { canonical: "/" },
  icons: { icon: "/sites/idam/favicon.ico" },
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: site.name,
    title: site.title,
    description: site.description,
    url: "/",
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.ogImageAlt }],
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description, images: [site.ogImage] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  verification,
};

/** 구글·네이버용 업체 정보 (schema.org LocalBusiness). */
const business: WithContext<HomeAndConstructionBusiness> = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${SITE_URL}/#business`,
  name: brand.name,
  url: SITE_URL,
  logo: `${SITE_URL}${brand.logoBlack}`,
  image: `${SITE_URL}${site.ogImage}`,
  description: site.description,
  telephone: "+82-10-7123-0261",
  email: brand.email,
  address: { "@type": "PostalAddress", streetAddress: "평화로2862번길 94", addressLocality: "동두천시", addressRegion: "경기도", addressCountry: "KR" },
  areaServed: site.regions.map((name) => ({ "@type": "City", name })),
  foundingDate: "2014",
  priceRange: "상담 무료",
  sameAs: socialLinks.map((s) => s.href),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${freesentation.variable} h-full`}>
      <body className="a365 min-h-full flex flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }} />
        {children}
      </body>
    </html>
  );
}
