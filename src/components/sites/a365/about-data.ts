/** 회사 소개 페이지 콘텐츠 (이담건축). 사실 위주로 짧게. */
export type ValueIcon = "star" | "heart" | "circle";

export interface ValueItem {
  icon: ValueIcon;
  title: string;
  strong: boolean;
  text: string;
}

export interface ScopeItem {
  number: string;
  name: string;
  /** 한 줄 설명 */
  category: string;
  href: string;
  year: string;
}

export const aboutPage = {
  title: "회사 소개",
  heading: "회사 소개",
  intro: {
    heading: "이담건축",
    lead: "경기 북부에서 집을 짓습니다. 목조 주택과 경량 철골 주택이 주력이고, 상가, 판넬 시공, 인테리어, 증축·개축도 직접 시공합니다.",
    /** 원본 구조(숫자 4칸)에 사실 4개를 넣는다. */
    stats: [
      { number: "동두천", label: "기반" },
      { number: "경기 북부", label: "시공 지역" },
      { number: "목조 · 경량 철골 · 판넬", label: "주력 구조" },
      { number: "무료", label: "현장 상담" },
    ],
  },
  parallaxTop: { image: "/sites/idam/about-visual1.jpg", width: 1536, height: 1024, alt: "주택가 벽돌집 사이에 세운 경량 철골 골조를 위에서 내려다본 아침 현장" },
  spirit: {
    heading: "이렇게 다릅니다",
    lead: "말보다 현장으로 보여드립니다. 집을 지을 때 가장 자주 듣는 걱정 세 가지에 이렇게 답합니다.",
    values: [
      { icon: "star", title: "직접 짓습니다", strong: true, text: "기초와 구조부터 외장, 마감까지 이담건축이 직접 시공합니다. 누가 짓는지 분명하니, 문제가 생겨도 책임지는 사람이 분명합니다." },
      { icon: "heart", title: "현장을 보고 견적합니다", strong: true, text: "도면만 보고 가격을 말하지 않습니다. 부지와 주변 환경을 직접 확인한 뒤 항목별 근거가 있는 견적을 드립니다. 상담과 방문은 무료입니다." },
      { icon: "circle", title: "준공 후에도 책임집니다", strong: false, text: "집을 인도한 뒤 최대 1년 동안 하자 보수를 해 드립니다. 시공 잘못으로 생긴 하자가 대상이며, 사용 중 파손은 제외됩니다. 하자인지는 시공을 맡은 이담건축이 판단합니다." },
    ] satisfies ValueItem[],
  },
  awards: {
    heading: "하는 일 범위",
    lead: "아래 공사를 시공합니다. 도면이 없으면 믿을 수 있는 설계업체를 소개해 드립니다.",
    items: [
      { number: "01", name: "목조 주택", category: "전원주택 · 단독주택", href: "", year: "" },
      { number: "02", name: "경량 철골 주택", category: "단층 · 복층 주택", href: "", year: "" },
      { number: "03", name: "상가·상업 시설", category: "일정에 맞춘 상가 시공", href: "", year: "" },
      { number: "04", name: "판넬 시공", category: "창고 · 외장 판넬", href: "", year: "" },
      { number: "05", name: "인테리어·마감", category: "내부 마감 · 공간 개선", href: "", year: "" },
      { number: "06", name: "증축·개축·리모델링", category: "소규모 개선부터 구조 보강까지", href: "", year: "" },
    ] satisfies ScopeItem[],
  },
  /** 하단 전폭 사진 */
  parallaxBottom: { image: "/sites/idam/about-finish.jpg", width: 1536, height: 896, alt: "마감 공사 중인 실내: 우물천장 매립등, 벽걸이 에어컨, 알루미늄 사다리" },
};

export const valueIcons: Record<ValueIcon, { src: string; height: number }> = {
  star: { src: "/sites/a365/icons/star-white.svg", height: 22 },
  heart: { src: "/sites/a365/icons/heart-white.svg", height: 19 },
  circle: { src: "/sites/a365/icons/circle-white.svg", height: 18 },
};
