import type { NextConfig } from "next";

/** 예전 임시 주소. 들어오면 새 도메인의 같은 경로로 영구 이동시킨다. */
const OLD_HOST = "idam-web.vercel.app";
/** 운영 도메인. src/lib/site.ts 의 PRODUCTION_URL 과 같아야 한다. */
const NEW_ORIGIN = "https://doodreamidam.site";

const nextConfig: NextConfig = {
  output: "standalone",
  /** 원본 JPG 대신 화면 크기에 맞는 AVIF/WebP 를 내보낸다 (휴대폰 LCP 개선). */
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75],
  },
  async redirects() {
    return [
      {
        // 구글·네이버 소유 확인 파일은 예전 주소에서도 그대로 열려야 한다 (주소 변경 도구가 예전 속성 확인을 요구함).
        source: "/:path((?!google[0-9a-f]+\\.html$|naver[0-9a-f]+\\.html$).*)",
        has: [{ type: "host", value: OLD_HOST }],
        destination: `${NEW_ORIGIN}/:path`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
