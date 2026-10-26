import { brand, news } from "./data";
import { NewsCard } from "./InsidePage";
import { ParallaxImage } from "./ParallaxImage";
import { Reveal } from "./Reveal";
import type { SitePost } from "./posts";

const labels = {
  look: "지금 보고 있는 것",
  why: "왜 이렇게 하는가",
  more: "다른 기록",
  scroll: "아래로 스크롤",
};

/**
 * 원본 a365 뉴스 상세 구조: 제목 → 정보 블록(작성자 · 날짜/분류 · 화살표) → 전폭 사진 → 본문(7~11칸) → 다른 소식 2열.
 */
export function PostPage({ post }: { post: SitePost }) {
  const others = news.filter((n) => n.href !== `/inside/${post.slug}`).slice(0, 2);
  return (
    <>
      <section>
        <div className="a365-container a365-container-page-heading">
          <Reveal>
            <h1 className="a365-post-title">{post.title}</h1>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="a365-container a365-container-news">
          <Reveal>
            <div className="a365-vflex a365-gap-1">
              <div className="a365-news-info">
                <div className="a365-grid">
                  <div className="a365-author">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={brand.logoBlack} alt="" width={48} height={48} className="a365-author-image" />
                    <div className="a365-vflex">
                      <div className="a365-standard">{brand.name}</div>
                      <div className="a365-standard a365-news-text">{brand.tagline}</div>
                    </div>
                  </div>
                  <div className="a365-news-catdate">
                    <div className="a365-standard">{post.date}</div>
                    <div className="a365-dot a365-dot-small" />
                    <div className="a365-standard">{post.category}</div>
                  </div>
                  <div className="a365-scroll-arrow a365-news-arrow">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/sites/a365/icons/down-arrow-black.svg" alt={labels.scroll} width={24} height={24} />
                  </div>
                </div>
              </div>

              <ParallaxImage bare className="a365-post-hero" image={post.hero.src} width={2048} height={1360} alt={post.hero.caption} />

              <div className="a365-news-body">
                <div className="a365-grid">
                  <div className="a365-rich a365-news-rich">
                    {post.hero.caption && <p className="a365-rich-caption">{post.hero.caption}</p>}
                    {post.look && (
                      <>
                        <h2>{labels.look}</h2>
                        <p>{post.look}</p>
                      </>
                    )}
                    {post.why.length > 0 && <h2>{labels.why}</h2>}
                    {post.why.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="a365-top-divider">
          <div className="a365-container">
            <div className="a365-grid">
              <div className="a365-standard a365-more-label">{labels.more}</div>
              <div className="a365-more-list">
                <div className="a365-blog-list a365-blog-list-2">
                  {others.map((item) => (
                    <Reveal key={item.href}>
                      <NewsCard item={item} />
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
