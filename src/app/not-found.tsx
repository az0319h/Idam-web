import type { Metadata } from "next";
import { Footer, Nav } from "@/components/sites/a365";
import { UnderlineLink } from "@/components/sites/a365/UnderlineLink";
import { brand, contactLink } from "@/components/sites/a365/data";

export const metadata: Metadata = {
  title: "페이지를 찾을 수 없습니다 - 이담건축",
};

export default function NotFound() {
  return (
    <>
      <Nav theme="dark" current="/404" />
      <main>
        <section>
          <div className="a365-container a365-container-page-heading">
            <h1 className="a365-big-heading">페이지를 찾을 수 없습니다</h1>
          </div>
        </section>
        <section>
          <div className="a365-top-divider">
            <div className="a365-container">
              <div className="a365-grid">
                <div className="a365-vflex a365-gap-4 a365-about-body">
                  <div className="a365-standard">
                    주소가 바뀌었거나 삭제된 페이지입니다. 아래에서 홈으로 돌아가거나, 바로 견적 문의를 남겨 주세요.
                    <br />
                    전화·문자 상담은 {brand.phone}입니다.
                  </div>
                  <div className="a365-vflex a365-gap-05">
                    <UnderlineLink href="/" underline="inline">
                      <div className="a365-standard">홈으로 돌아가기</div>
                    </UnderlineLink>
                    <UnderlineLink href={contactLink.href} underline="inline">
                      <div className="a365-standard">{contactLink.label}</div>
                    </UnderlineLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
