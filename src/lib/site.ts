/** 사이트 전역 SEO 설정. 도메인은 배포 환경변수로 받는다. */
import { brand } from "@/components/sites/a365/data";

const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/+$/, "");
/**
 * 배포 도메인. 미설정 시 로컬 주소. 끝의 슬래시는 제거하고,
 * "idam-web.vercel.app"처럼 프로토콜 없이 들어오면 https:// 를 붙인다 (new URL() 실패 방지).
 */
/** 운영 도메인. 환경변수가 없을 때의 기본값. */
const PRODUCTION_URL = "https://idam-web.vercel.app";
const vercelProd = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
const pick = raw || vercelProd;
export const SITE_URL = pick
  ? /^https?:\/\//.test(pick)
    ? pick.replace(/\/+$/, "")
    : `https://${pick.replace(/\/+$/, "")}`
  : process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : PRODUCTION_URL;

export const site = {
  name: brand.name,
  /** 홈 제목은 상호만 쓴다 (기획 확정). */
  title: brand.name,
  /** 하위 페이지 제목 규칙: "{페이지} - 이담건축" */
  titleTemplate: `%s - ${brand.name}`,
  description: "이담건축은 경기 북부에서 목조·경량 철골 주택을 직접 짓습니다. 현장 상담과 방문은 무료입니다.",
  /** 공유 미리보기 기본 이미지 (1200×630) */
  ogImage: "/og.jpg",
  ogImageAlt: "해 질 녘 목조 골조 공사 현장",
  locale: "ko_KR",
  regions: ["동두천", "연천", "양주", "파주", "의정부", "남양주", "철원"],
  keywords: ["이담건축", "경기 북부 주택 시공", "목조 주택", "경량 철골 주택", "판넬 시공", "동두천 건축", "연천 주택", "양주 주택 시공", "파주 주택 시공"],
};

/** 고정 페이지 설명 (120자 이내) */
export const pageDescriptions = {
  about: "경기 북부에서 2014년부터 목조·경량 철골 주택을 직접 지어 왔습니다. 상가, 판넬 시공, 인테리어, 증축·개축까지 시공합니다.",
  work: "이담건축이 경기 북부에 지은 집들입니다. 연천·동두천의 목조 주택과 경량 철골 주택을 사진과 함께 소개합니다.",
  inside: "터 다지기부터 준공까지, 경기 북부 현장의 공정을 사진 한 장에 하나씩 기록합니다.",
  contact: "현장 상담과 방문은 무료입니다. 전화·문자 010-7123-0261 또는 양식으로 남겨 주시면 확인 후 연락드립니다.",
  privacy: "이담건축 개인정보처리방침. 견적 문의 시 수집하는 항목과 이용 목적, 보유 기간, 보호책임자 연락처를 안내합니다.",
};
