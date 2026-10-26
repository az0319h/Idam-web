import { posts } from "@/components/sites/a365/posts";
import { SITE_URL, site } from "@/lib/site";

export const dynamic = "force-static";

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string);
const toDate = (ym: string) => {
  const [y, m] = ym.split(/[.-]/).map(Number);
  return new Date(y, (m || 1) - 1, 1).toUTCString();
};

/** 네이버 서치어드바이저 RSS 제출용. 현장 소식을 최신순으로 낸다. */
export function GET() {
  const items = [...posts]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map(
      (p) => `
    <item>
      <title>${esc(p.title)}</title>
      <link>${SITE_URL}/inside/${p.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/inside/${p.slug}</guid>
      <pubDate>${toDate(p.date)}</pubDate>
      <category>${esc(p.category)}</category>
      <description>${esc(p.look)}</description>
    </item>`,
    )
    .join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${esc(site.name)} 현장 소식</title>
    <link>${SITE_URL}/inside</link>
    <description>${esc(site.description)}</description>
    <language>ko</language>${items}
  </channel>
</rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
