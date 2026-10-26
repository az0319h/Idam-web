/** 이담건축 사이트 콘텐츠. 레이아웃은 a365 클론 구조를 그대로 쓰고 내용만 바꾼다. */

import { posts } from "./posts";

/** 원본 레퍼런스 사이트 주소 (이제 링크에는 쓰지 않음). */
export const SOURCE = "https://www.a365.at";

export const brand = {
  name: "이담건축",
  /** 로고 옆·푸터 하단의 작은 기울임 문구 */
  tagline: "경기 북부 주택 시공",
  phone: "010-7123-0261",
  phoneHref: "tel:01071230261",
  email: "idamstudio.doodream@gmail.com",
  address: "경기도 동두천시 평화로2862번길 94 (동두천동)",
  jibun: "경기도 동두천시 동두천동 산12",
  logoWhite: "/sites/idam/icons/logo-white.svg",
  logoBlack: "/sites/idam/icons/logo-black.svg",
};

export const navLinks = [
  { label: "건축 작품", href: "/work" },
  { label: "회사 소개", href: "/about" },
  { label: "현장 소식", href: "/inside" },
];
export const contactLink = { label: "견적 문의", href: "/contact" };

export const socialLinks = [
  { label: "인스타그램", href: "https://www.instagram.com/ida.mstudio/" },
  { label: "유튜브", href: "https://www.youtube.com/@%EC%9D%B4%EB%8B%B4%EA%B1%B4%EC%B6%95" },
];

export const ui = {
  menu: "메뉴",
  close: "닫기",
  social: "소셜",
  scrollHint: "아래로 스크롤",
  open: "열기",
};

export const hero = {
  heading: "경기 북부에서, 오래 살 집을 짓습니다.",
  since: "2014년부터",
  text: "• 경기 북부에서 목조·경량 철골 주택을 직접 짓습니다. 현장 상담은 무료입니다.",
  image: "/sites/idam/hero-img.jpg",
  width: 1536,
  height: 1024,
};

export const about = {
  heading: "회사 소개",
  lead: "이담건축은 경기 북부에서 집을 짓습니다. 목조 주택, 경량 철골 주택, 상가, 판넬 시공, 인테리어, 증축·개축까지 직접 시공합니다. 설계는 하지 않습니다. 도면이 있으면 그대로 짓고, 없으면 믿을 수 있는 설계업체를 소개해 드립니다. 현장 상담과 방문은 무료입니다.",
  text: "이담건축은 건축을 단순한 구조물이 아닌, 사람들의 삶과 시간을 담는 그릇으로 바라봅니다. 우리는 눈에 보이는 형태보다 공간이 주는 감정과 경험을 더 중요하게 생각합니다. 그래서 작은 디테일 하나에도 진심을 담아, 머무는 이가 편안함과 따뜻함을 느낄 수 있는 환경을 만들어갑니다. 우리의 목표는 완공 순간의 감동을 넘어서, 시간이 흐를수록 더욱 깊은 가치를 품는 건축을 실현하는 것입니다.",
  link: { label: "회사 소개 더 보기", href: "/about" },
};

export interface WorkItem {
  slug: string;
  name: string;
  /** 카드 부제 (위치) */
  service: string;
  year: string;
  completion: string;
  type: string;
  usage: string;
  floors: string;
  area: number;
  exterior: string[];
  interior: string[];
  features: string[];
  description: string;
  /** 상세 페이지 경로 (/works/<slug>). 비어 있으면 카드에 링크를 걸지 않는다. */
  href: string;
  image: string;
  width: number;
  height: number;
  gallery: string[];
}

/** 등록된 작품 4건 (Firebase 내보내기 기준, docs/research/idam-projects.json). */
export const allWork: WorkItem[] = [
    {
      slug: "yeoncheon-42",
      name: "연천 42평 경량 철골 주택",
      service: "경기도 연천군",
      year: "2024",
      completion: "2024-08",
      type: "경량 철골 구조",
      usage: "단독주택",
      floors: "지상 1층",
      area: 139,
      exterior: ["세라믹 사이딩", "클래딩 사이딩"],
      interior: ["목공 마감"],
      features: ["단순한 상자형 외관", "큰 창으로 확보한 채광과 개방감", "검정과 나무색이 대비되는 외장", "가족이 쓰는 야외 포치"],
      description: "경기도 연천군 장탄리에 2024년 8월 준공한 단층 경량 철골 주택입니다. 건축 면적은 139㎡(약 42평)입니다. 전면에 큰 창을 두어 거실 깊숙이 빛이 들고, 외장은 세라믹 사이딩과 클래딩 사이딩으로 마감해 검정과 나무색이 대비됩니다. 포치는 가족이 쉬고 바깥 활동을 하는 공간으로 쓰이며, 실내는 목공 마감을 중심으로 아늑하게 꾸몄습니다.",
      href: "/works/yeoncheon-42",
      image: "/sites/idam/works/yeoncheon-42/main.jpg",
      width: 2000,
      height: 1167,
      gallery: ["/sites/idam/works/yeoncheon-42/detail0.jpg", "/sites/idam/works/yeoncheon-42/detail1.jpg", "/sites/idam/works/yeoncheon-42/detail2.jpg", "/sites/idam/works/yeoncheon-42/detail3.jpg", "/sites/idam/works/yeoncheon-42/detail4.jpg", "/sites/idam/works/yeoncheon-42/detail5.jpg"],
    },
    {
      slug: "dongducheon-wood",
      name: "동두천 40평 목조 주택",
      service: "경기도 동두천시",
      year: "2024",
      completion: "2024-10",
      type: "목조 구조",
      usage: "단독주택",
      floors: "지상 2층",
      area: 132,
      exterior: ["세라믹 사이딩", "클래딩 사이딩"],
      interior: ["원목 마루"],
      features: ["목조 구조의 따뜻한 외관", "넓은 데크와 마당 연결", "두 가지 외장재 조합"],
      description: "경기도 동두천시에 2024년 10월 준공한 2층 목조 주택입니다. 건축 면적은 132㎡(약 40평)입니다. 목조 구조의 따뜻한 느낌을 살리고, 외장은 세라믹 사이딩과 클래딩 사이딩을 섞어 마감했습니다. 넓은 데크가 마당으로 이어져 가족이 함께 지내기에 여유로운 집입니다.",
      href: "/works/dongducheon-wood",
      image: "/sites/idam/works/dongducheon-wood/main.jpg",
      width: 2000,
      height: 1167,
      gallery: ["/sites/idam/works/dongducheon-wood/detail0.jpg", "/sites/idam/works/dongducheon-wood/detail1.jpg", "/sites/idam/works/dongducheon-wood/detail2.jpg", "/sites/idam/works/dongducheon-wood/detail3.jpg", "/sites/idam/works/dongducheon-wood/detail4.jpg", "/sites/idam/works/dongducheon-wood/detail5.jpg"],
    },
    {
      slug: "yeoncheon-27",
      name: "연천 27평 경량 철골 주택",
      service: "경기도 연천군",
      year: "2024",
      completion: "2024-05",
      type: "경량 철골 구조",
      usage: "단독주택",
      floors: "지상 1층",
      area: 89,
      exterior: ["세라믹 사이딩", "징크 판넬", "클래딩 사이딩"],
      interior: ["친환경 마감재", "장판 (PVC 바닥재)", "실크 도배"],
      features: ["단층 구성", "에너지 절약형 단열 시공", "짧고 효율적인 동선", "작은 가족에 맞는 규모"],
      description: "경기도 연천군에 2024년 5월 준공한 단층 경량 철골 주택입니다. 건축 면적은 89㎡(약 27평)입니다. 외장은 세라믹 사이딩과 징크 판넬, 클래딩 사이딩으로 마감했고, 실내는 친환경 마감재와 실크 도배로 깔끔하게 정리했습니다. 단열을 두껍게 넣고 동선을 짧게 잡아, 신혼부부나 소규모 가족, 두 번째 집으로 알맞은 실속 있는 집입니다.",
      href: "/works/yeoncheon-27",
      image: "/sites/idam/works/yeoncheon-27/main.jpg",
      width: 2000,
      height: 1167,
      gallery: ["/sites/idam/works/yeoncheon-27/detail0.jpg", "/sites/idam/works/yeoncheon-27/detail1.jpg", "/sites/idam/works/yeoncheon-27/detail2.jpg", "/sites/idam/works/yeoncheon-27/detail3.jpg", "/sites/idam/works/yeoncheon-27/detail4.jpg", "/sites/idam/works/yeoncheon-27/detail5.jpg"],
    },
    {
      slug: "yeoncheon-30",
      name: "연천 30평 경량 철골 주택",
      service: "경기도 연천군",
      year: "2023",
      completion: "2023-09",
      type: "경량 철골 구조",
      usage: "단독주택",
      floors: "지상 2층 (다락 포함)",
      area: 99,
      exterior: ["세라믹 사이딩", "징크 판넬", "클래딩 사이딩"],
      interior: ["친환경 마감재", "원목 바닥재", "실크 도배"],
      features: ["튼튼한 경량 철골 구조", "개방형 거실 위 다락", "흰 벽과 원목 바닥의 실내"],
      description: "경기도 연천군에 2023년 9월 준공한 2층 경량 철골 주택입니다. 건축 면적은 99㎡(약 30평)입니다. 외장은 세라믹 사이딩과 징크 판넬, 클래딩 사이딩으로 마감했고, 실내는 흰 벽과 원목 바닥으로 따뜻하게 꾸몄습니다. 개방형 거실 위에 다락을 올려 같은 면적에서 쓸 수 있는 공간을 넓혔습니다.",
      href: "/works/yeoncheon-30",
      image: "/sites/idam/works/yeoncheon-30/main.jpg",
      width: 2000,
      height: 1167,
      gallery: ["/sites/idam/works/yeoncheon-30/detail0.jpg", "/sites/idam/works/yeoncheon-30/detail1.jpg", "/sites/idam/works/yeoncheon-30/detail2.jpg", "/sites/idam/works/yeoncheon-30/detail3.jpg", "/sites/idam/works/yeoncheon-30/detail4.jpg", "/sites/idam/works/yeoncheon-30/detail5.jpg"],
    },
];

export const work = {
  heading: "건축 작품",
  years: "(2014-2026)",
  allLink: { label: "작품 전체 보기", href: "/work" },
  lead: "최근에 지은 집.",
  items: allWork,
};

/** 문단 조각: 문자열 또는 { strong } */
export type RichPart = string | { strong: string };

export interface ServiceItem {
  number: string;
  title: string;
  hidden?: boolean;
  images: string[];
  headline: string;
  paragraphs: RichPart[][];
  tools: string[];
}

export const service = {
  heading: "짓는 과정",
  toolsLabel: "세부 항목",
  items: [
    {
      number: "01",
      title: "견적 문의",
      images: ["/sites/idam/process/step1-sketch.jpg", "/sites/idam/process/step1-desk.jpg"],
      headline: "전화 한 통, 양식 하나로 시작합니다",
      paragraphs: [
        ["전화나 견적 문의 양식으로 연락 주시면 됩니다. ", { strong: "지역, 대략적인 규모, 희망 시기" }, "만 알려주셔도 충분합니다. 도면이 있으면 함께 보내주시고, 없어도 괜찮습니다."],
        ["문의를 받으면 내용을 확인한 뒤 ", { strong: "현장 방문 일정" }, "을 잡아 연락드립니다."],
      ],
      tools: ["전화 문의", "문의 양식"],
    },
    {
      number: "02",
      title: "현장 상담",
      images: ["/sites/idam/process/step2-survey.jpg", "/sites/idam/process/step2-site.jpg"],
      headline: "직접 보고, 가장 알맞은 방법을 제안합니다",
      paragraphs: [
        ["도면과 설명만으로는 알기 어려운 부분이 있기 때문에 ", { strong: "직접 현장을 방문" }, "합니다. 부지와 주변 환경, 사용 목적, 생활 동선까지 살펴본 뒤 ", { strong: "최적의 시공 방향과 예상 견적" }, "을 안내합니다."],
        ["철골 구조, 목조 주택, 판넬 시공 등 다양한 경험을 바탕으로 현장 상황에 ", { strong: "가장 알맞은 자재와 공법" }, "을 고릅니다. 도면이 없는 경우에는 믿을 수 있는 설계업체를 소개해 드립니다. ", { strong: "기본 상담과 현장 방문은 무료" }, "입니다."],
      ],
      tools: ["현장 조사", "시공 방식 제안", "도면 확인", "설계업체 소개"],
    },
    {
      number: "03",
      title: "견적서 작성 및 계약",
      images: ["/sites/idam/process/step3-materials.jpg"],
      headline: "항목별 근거가 있는 견적",
      paragraphs: [
        ["건축 규모, 자재 선택, 시공 방식, 현장 조건을 종합해 ", { strong: "항목별 견적서" }, "를 작성합니다. 단순히 가격을 산출하는 데 그치지 않고, 어떤 자재와 공법을 왜 선택했는지 함께 설명드립니다."],
        ["이미 받아 두신 ", { strong: "다른 업체 견적서" }, "가 있다면 함께 보내 주세요. 항목별로 검토해 빠진 공정이나 과하게 잡힌 부분을 짚어 드리고, 같은 조건에서 비교할 수 있도록 산출합니다."],
        ["세부 사항을 조율한 뒤 ", { strong: "최종 견적과 공정표" }, "를 확정하고 계약을 진행합니다. 계약 내용은 투명하게 문서로 남깁니다."],
      ],
      tools: ["항목별 견적서", "받으신 견적서 검토", "자재 선정", "공정표 작성", "계약"],
    },
    {
      number: "04",
      title: "현장 작업",
      images: ["/sites/idam/process/step4-steel.jpg", "/sites/idam/process/step4-interior.jpg"],
      headline: "품질과 일정을 현장에서 지켜냅니다",
      paragraphs: [
        ["기초와 구조부터 외장, 지붕, 내장 마감까지 ", { strong: "직접 시공" }, "합니다. 공사 전 과정에서 ", { strong: "예산과 일정을 철저히 관리" }, "하고, 안전과 품질을 최우선으로 합니다."],
        ["작은 디테일 하나가 완성도를 좌우한다는 것을 알기에 모든 작업에서 ", { strong: "정밀함과 꼼꼼함" }, "을 유지합니다. 진행 상황은 ", { strong: "그대로 공유" }, "하고, 문제가 생기면 바로 알리고 해결합니다."],
      ],
      tools: ["기초·구조", "외장·지붕", "내장·마감", "예산·일정 관리", "진행 상황 공유"],
    },
    {
      number: "05",
      title: "준공과 사후 관리",
      images: ["/sites/idam/process/step5-house.jpg", "/sites/idam/process/step5-keys.jpg"],
      headline: "준공이 끝이 아닙니다",
      paragraphs: [
        ["공사가 끝나면 함께 ", { strong: "준공 검수" }, "를 하고 집을 인도합니다. 입주 후 생기는 궁금한 점도 언제든 연락 주시면 됩니다."],
        ["필요한 경우 ", { strong: "하자 보수" }, "를 지원하고, 살면서 바뀌는 요구에 맞춰 ", { strong: "리모델링이나 공간 활용 개선" }, "까지 제안합니다. 단순한 시공 파트너가 아니라 고객의 생활에 오랫동안 기여하는 동반자로서 책임을 다합니다."],
      ],
      tools: ["준공 검수", "하자 보수 지원", "리모델링·공간 개선 제안"],
    },
  ] as ServiceItem[],
};

export const parallax = {
  image: "/sites/idam/parallax-home.jpg",
  width: 1536,
  height: 896,
  alt: "공장단지에 판넬로 지은 창고형 공장 건물, 해 질 녘",
};

export interface NewsItem {
  title: string;
  /** 상세 없음. 비어 있으면 링크를 걸지 않는다. */
  href: string;
  image: string;
  width: number;
  height: number;
  date: string;
  category: string;
  text: string;
}

/** 현장 기록 글을 카드 데이터로 변환 (홈·목록 공용). */
export const news: NewsItem[] = posts.map((p) => ({
  title: p.title,
  href: `/inside/${p.slug}`,
  image: p.hero.src,
  width: 2048,
  height: 1360,
  date: p.date,
  category: p.category,
  text: p.look,
}));

export const inside = {
  heading: "현장 소식",
  allLink: { label: "소식 전체 보기", href: "/inside" },
  lead: "사진 한 장에 공정 하나. 지금 현장에서 무엇을, 왜 하고 있는지 짧게 기록합니다.",
  items: news.slice(0, 4),
};

export const footer = {
  links: [...navLinks, contactLink],
  social: socialLinks,
  ctaLabel: "이담건축과 함께 새로운 공간을 이야기해요.",
  cta: { label: "견적 문의하기", href: "/contact" },
  studio: { label: brand.tagline, href: brand.phoneHref },
  legal: [{ label: "개인정보처리방침", href: "/info/impressum" }],
  copyright: "©2026 이담건축",
  mobileCopyright: "©2026 이담건축",
};

export const consultationAreas = [
  "주거용 신축",
  "상가·상업 시설",
  "철골 구조",
  "목조 주택",
  "판넬 시공",
  "인테리어·마감",
  "증축·개축·리모델링",
  "기타",
] as const;

export interface ContactBlock {
  label: string;
  lines?: string[];
  links: { label: string; href: string }[];
}

export const contact = {
  title: "견적 문의",
  heading: "견적 문의",
  blocks: [
    {
      label: "연락처",
      links: [
        { label: brand.phone, href: brand.phoneHref },
        { label: brand.email, href: `mailto:${brand.email}` },
      ],
    },
    {
      label: "주소",
      lines: [brand.address],
      links: [
        { label: "카카오맵에서 보기", href: "https://map.kakao.com/link/search/%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EB%8F%99%EB%91%90%EC%B2%9C%EC%8B%9C%20%ED%8F%89%ED%99%94%EB%A1%9C2862%EB%B2%88%EA%B8%B8%2094" },
        { label: "네이버 지도에서 보기", href: "https://map.naver.com/p/search/%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EB%8F%99%EB%91%90%EC%B2%9C%EC%8B%9C%20%ED%8F%89%ED%99%94%EB%A1%9C2862%EB%B2%88%EA%B8%B8%2094" },
      ],
    },
    {
      label: "소셜",
      links: socialLinks,
    },
  ] satisfies ContactBlock[],
  map: { image: "/sites/idam/map.png", width: 1440, height: 1160, alt: "이담건축 위치 약도: 경기도 동두천시 평화로2862번길 94" },
  form: {
    heading: "상담 내용을 남겨주세요",
    name: "이름",
    phone: "연락처",
    phonePlaceholder: "010-1234-5678 또는 02-123-4567",
    area: "상담 분야",
    areaPlaceholder: "상담 분야를 선택해 주세요",
    message: "내용",
    messagePlaceholder: "지역, 규모, 희망 시기 등을 적어 주시면 상담이 빨라집니다.",
    privacy: "개인정보 수집·이용에 동의합니다. (필수)",
    submit: "보내기",
    wait: "보내는 중…",
    success: "감사합니다. 내용을 확인한 뒤 연락드리겠습니다.",
    error: "필수 항목을 확인해 주세요.",
    sendError: "전송 중 문제가 생겼습니다. 잠시 후 다시 시도하거나 전화로 연락 주세요.",
  },
  faq: {
    heading: "자주 묻는 질문",
    items: [
      { question: "이담건축은 어떤 종류의 건축을 하나요?", answer: "주택만 짓는 곳이 아닙니다. 목조 주택과 경량 철골 주택 같은 주거용 건축은 물론, 판넬 공장과 창고, 식당·카페 같은 상가, 사무실까지 시공합니다. 새로 짓는 일뿐 아니라 내부 인테리어, 간단한 수리와 보수, 증축·개축·리모델링도 합니다. 규모가 작아도 괜찮습니다. 용도와 예산에 맞는 구조와 자재를 제안해 드리니, 어떤 공사든 먼저 상담해 주세요." },
      { question: "시공 가능한 지역은 어디까지인가요?", answer: "이담건축은 동두천을 기반으로 주로 경기 북부 지역을 중심으로 시공을 진행하고 있습니다. 지역 특성과 환경에 맞는 건축 경험을 바탕으로 주거지와 상업지에 최적화된 시공 서비스를 제공해왔습니다. 전국 시공은 원칙적으로 진행하지 않으며, 지역 밀착형 시공을 통해 세심하고 책임감 있는 관리에 집중하고 있습니다." },
      { question: "상담이나 현장 방문은 무료인가요?", answer: "네, 기본 상담과 현장 방문은 모두 무료로 제공됩니다. 단순히 도면이나 설명만으로는 알기 어려운 부분들이 있기 때문에, 직접 현장을 방문하여 부지와 주변 환경, 건축 목적을 꼼꼼히 살펴본 후 방향성을 제안해드립니다. 이러한 과정을 통해 고객님께서 더 명확하고 구체적인 견적을 받아보실 수 있으며, 초기 단계부터 신뢰할 수 있는 건축 계획을 세워 나가실 수 있습니다." },
      { question: "견적은 어떻게 산출되나요?", answer: "건축 규모, 자재 선택, 시공 방식, 현장 조건을 종합해 항목별로 산출합니다. 다른 업체에서 받은 견적서가 있다면 함께 보내 주세요. 그 견적서를 항목별로 검토해 빠진 공정이나 과하게 잡힌 부분을 짚어 드리고, 같은 조건에서 저희 견적을 비교해 보실 수 있게 안내합니다. 초기 상담 시 예상 견적을 드리고, 세부 사항을 조율한 뒤 최종 견적을 확정합니다." },
      { question: "소규모 리모델링도 가능한가요, 아니면 신축 위주인가요?", answer: "소규모 리모델링부터 신축까지 모두 가능합니다. 작은 공간 개선부터 대규모 건축까지, 고객의 필요에 맞게 유연하게 진행합니다." },
      { question: "직접 설계도 해주시나요, 아니면 설계 도면이 있어야 하나요?", answer: "고객이 도면을 가지고 계시다면 그대로 시공이 가능하며, 만약 도면이 없을 경우 저희가 신뢰할 수 있는 설계업체를 연결해 드리고 있습니다. 이 과정을 통해 고객님의 요구 사항이 설계에 잘 반영될 수 있도록 도와드리며, 설계부터 시공까지 원활하게 이어질 수 있도록 지원합니다." },
    ],
  },
};

export const workPage = {
  title: "건축 작품",
  heading: "건축 작품",
  tabs: { grid: "격자", list: "목록" },
  detail: "자세히 보기",
};

export const privacy = {
  title: "개인정보처리방침",
  heading: "개인정보처리방침",
};
