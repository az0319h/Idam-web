import type { MetadataRoute } from "next";
import { allWork } from "@/components/sites/a365/data";
import { posts } from "@/components/sites/a365/posts";
import { SITE_URL, SITE_UPDATED } from "@/lib/site";

/** "2024.08" → Date */
const ym = (s: string) => {
  const [y, m] = s.split(/[.-]/).map(Number);
  return y && m ? new Date(y, m - 1, 1) : undefined;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const updated = new Date(SITE_UPDATED);
  const latest = (dates: (Date | undefined)[]) => new Date(Math.max(updated.getTime(), ...dates.map((d) => d?.getTime() ?? 0)));
  const latestWork = latest(allWork.map((w) => ym(w.completion)));
  const latestPost = latest(posts.map((p) => ym(p.date)));
  const fixed: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: latest([latestWork, latestPost]), changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/work`, lastModified: latestWork, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/about`, lastModified: updated, changeFrequency: "yearly", priority: 0.8 },
    { url: `${SITE_URL}/contact`, lastModified: updated, changeFrequency: "yearly", priority: 0.8 },
    { url: `${SITE_URL}/inside`, lastModified: latestPost, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/info/impressum`, lastModified: updated, changeFrequency: "yearly", priority: 0.2 },
  ];
  const works: MetadataRoute.Sitemap = allWork
    .filter((w) => w.href)
    .map((w) => ({ url: `${SITE_URL}${w.href}`, lastModified: ym(w.completion) ?? now, changeFrequency: "yearly", priority: 0.7 }));
  const news: MetadataRoute.Sitemap = posts.map((p) => ({ url: `${SITE_URL}/inside/${p.slug}`, lastModified: ym(p.date) ?? now, changeFrequency: "yearly", priority: 0.5 }));
  return [...fixed, ...works, ...news];
}
