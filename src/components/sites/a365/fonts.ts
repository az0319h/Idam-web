import localFont from "next/font/local";

/**
 * 한글 본문·제목 글꼴: Freesentation (SIL OFL, https://freesentation.blog/).
 * 원본의 Helvetica Neue 400/500 자리에 그대로 대입한다.
 */
export const freesentation = localFont({
  src: [
    { path: "../../../../public/sites/idam/fonts/Freesentation-4Regular.woff2", weight: "400", style: "normal" },
    { path: "../../../../public/sites/idam/fonts/Freesentation-5Medium.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-hn",
  display: "swap",
  fallback: ["Pretendard", "Apple SD Gothic Neo", "Malgun Gothic", "sans-serif"],
});
