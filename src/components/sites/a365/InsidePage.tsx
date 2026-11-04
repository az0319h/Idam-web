import Image from "next/image";
import type { NewsItem } from "./data";
import { insidePage } from "./inside-data";
import { Reveal } from "./Reveal";

/** 홈 4열(991px 이하 2열, 479px 이하 1열) 과 목록 2열(479px 이하 1열) 기준 폭. */
const SIZES = {
  compact: "(max-width: 479px) 100vw, (max-width: 991px) 50vw, 25vw",
  list: "(max-width: 479px) 100vw, 50vw",
};

/** 소식 카드: 사진, 제목, 요약, (날짜 · 공정). `compact`는 홈용(요약·날짜 줄 없음). `eager`는 화면 맨 위 카드용. */
export function NewsCard({ item, compact = false, eager = false }: { item: NewsItem; compact?: boolean; eager?: boolean }) {
  const body = (
    <>
      <div className="a365-thumb-wrap">
        <Image
          src={item.image}
          alt={`${item.title} 현장 사진`}
          width={item.width}
          height={item.height}
          sizes={compact ? SIZES.compact : SIZES.list}
          loading={eager ? "eager" : "lazy"}
          className="a365-thumb a365-thumb-3-2"
        />
      </div>
      {compact ? (
        <div className="a365-vflex a365-gap-05">
          <div className="a365-standard">{item.title}</div>
          <div className="a365-serif a365-serif-pad">{item.category}</div>
        </div>
      ) : (
        <div className="a365-vflex a365-gap-4">
          <div className="a365-standard a365-news-title">{item.title}</div>
          <div className="a365-news-meta">
            <div className="a365-standard">{item.date}</div>
            <div className="a365-dot a365-dot-small" />
            <div className="a365-standard">{item.category}</div>
          </div>
        </div>
      )}
    </>
  );
  if (!item.href) return <div className="a365-blog-link">{body}</div>;
  return (
    <a href={item.href} className="a365-blog-link">
      {body}
    </a>
  );
}

export function InsideHeading() {
  return (
    <section>
      <div className="a365-container a365-container-page-heading">
        <Reveal>
          <h1 className="a365-big-heading">{insidePage.heading}</h1>
        </Reveal>
      </div>
    </section>
  );
}

export function InsideList() {
  return (
    <section className="a365-inside-page">
      <div className="a365-top-divider">
        <div className="a365-container">
          <div className="a365-vflex a365-gap-6">
            <Reveal>
              <div className="a365-grid">
                <h2 className="a365-small-heading a365-news-heading">{insidePage.listHeading}</h2>
                <div className="a365-medium a365-news-lead">{insidePage.lead}</div>
              </div>
            </Reveal>
            <div className="a365-blog-list a365-blog-list-2">
              {insidePage.items.map((item, i) => (
                <Reveal key={item.href}>
                  <NewsCard item={item} eager={i < 2} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
