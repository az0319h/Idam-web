import type { Metadata } from "next";
import { jsonLd, websiteSchema } from "@/lib/schema";
import { SITE_URL, alternatesFor, site } from "@/lib/site";
import "./globals.css";
import "@/components/sites/a365/fonts.css";
import "@/components/sites/a365/a365.css";

const verification: NonNullable<Metadata["verification"]> = {};
if (process.env.GOOGLE_SITE_VERIFICATION) verification.google = process.env.GOOGLE_SITE_VERIFICATION;
if (process.env.NAVER_SITE_VERIFICATION) verification.other = { "naver-site-verification": process.env.NAVER_SITE_VERIFICATION };

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: site.title, template: site.titleTemplate },
  description: site.description,
  keywords: site.keywords,
  applicationName: site.name,
  alternates: alternatesFor("/"),
  icons: {
    icon: [
      { url: "/sites/idam/favicon.ico", sizes: "any" },
      { url: "/sites/idam/icons/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/sites/idam/favicon.ico",
  },
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
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  verification,
  other: { "geo.region": "KR-41", "geo.placename": "동두천시" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full">
      <body className="a365 min-h-full flex flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(websiteSchema) }} />
        {children}
      </body>
    </html>
  );
}
