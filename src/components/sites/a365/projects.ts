import { allWork, type WorkItem } from "./data";

export type GalleryItem = { layout: "wide" | "tall"; src: string; width: number; height: number };

export const projectSlugs = allWork.map((w) => w.slug);

export function workBySlug(slug: string): WorkItem | undefined {
  return allWork.find((w) => w.slug === slug);
}

/** 상세 페이지가 있으면 로컬 경로, 없으면 빈 문자열. */
export function workHref(item: WorkItem): string {
  return item.href;
}

/** 설명문을 첫 문장(리드)과 나머지(본문)로 나눈다. */
export function splitDescription(text: string): { lead: string; body: string } {
  const m = text.match(/^([^.!?]+[.!?])\s*([^]*)$/);
  if (!m) return { lead: text, body: "" };
  return { lead: m[1].trim(), body: m[2].trim() };
}

/** 원본 갤러리 리듬: 가로 1 → 정사각 2 → 가로 1 → 정사각 2 … */
export function galleryLayout(item: WorkItem): GalleryItem[] {
  const pattern: GalleryItem["layout"][] = ["wide", "tall", "tall", "wide", "tall", "tall"];
  return item.gallery.map((src, i) => ({ layout: pattern[i % pattern.length], src, width: item.width, height: item.height }));
}

/** "다음 작품" 2건: 목록 순서상 다음 두 건 (순환). */
export function nextWorks(slug: string): WorkItem[] {
  const i = allWork.findIndex((w) => w.slug === slug);
  if (i < 0) return allWork.slice(0, 2);
  return [allWork[(i + 1) % allWork.length], allWork[(i + 2) % allWork.length]];
}
