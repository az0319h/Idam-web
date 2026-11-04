#!/usr/bin/env node
/**
 * IndexNow: 새로 올리거나 고친 페이지를 네이버(와 Bing 계열)에 바로 알린다.
 *
 *   npm run indexnow                      sitemap.xml 의 모든 URL
 *   npm run indexnow -- /inside/new-post  특정 경로만 (여러 개 가능)
 *
 * 키 파일은 public/<key>.txt 로 사이트 루트에 올라가 있어야 한다.
 * 색인을 보장하지는 않고, 검색로봇이 빨리 방문하도록 알리는 역할만 한다.
 * 가이드: https://searchadvisor.naver.com/guide/indexnow-request
 */
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const SITE = (process.env.NEXT_PUBLIC_SITE_URL || "https://doodreamidam.site").replace(/\/+$/, "");
const HOST = new URL(SITE).host;
const ENDPOINTS = ["https://searchadvisor.naver.com/indexnow", "https://api.indexnow.org/indexnow"];

const publicDir = join(process.cwd(), "public");
const keyFile = readdirSync(publicDir).find((f) => /^[0-9a-f-]{8,128}\.txt$/i.test(f));
if (!keyFile) {
  console.error("public/ 에 IndexNow 키 파일(<key>.txt)이 없습니다.");
  process.exit(1);
}
const key = readFileSync(join(publicDir, keyFile), "utf8").trim();

async function urlsFromSitemap() {
  const res = await fetch(`${SITE}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap.xml ${res.status}`);
  return [...(await res.text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

const args = process.argv.slice(2);
const urlList = args.length ? args.map((p) => (p.startsWith("http") ? p : `${SITE}${p.startsWith("/") ? p : `/${p}`}`)) : await urlsFromSitemap();
const body = JSON.stringify({ host: HOST, key, keyLocation: `${SITE}/${keyFile}`, urlList });

console.log(`${urlList.length}개 URL 전송`);
for (const endpoint of ENDPOINTS) {
  try {
    const res = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json; charset=utf-8" }, body });
    console.log(`${new URL(endpoint).host}: ${res.status} ${res.statusText}`);
  } catch (e) {
    console.log(`${new URL(endpoint).host}: 실패 (${e instanceof Error ? e.message : e})`);
  }
}
