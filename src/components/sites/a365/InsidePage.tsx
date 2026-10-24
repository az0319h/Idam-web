import type { NewsItem } from "./data";
import { insidePage } from "./inside-data";
import { Reveal } from "./Reveal";

/** 소식 카드: 사진, 제목, 요약, (날짜 · 공정). `compact`는 홈용(요약·날짜 줄 없음). */
export function NewsCard({ item, compact = false }: { item: NewsItem; compact?: boolean }) {
  const body = (
    <>
      <div className="a365-thumb-wrap">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={item.image} alt={`${item.title} 현장 사진`} width={item.width} height={item.height} loading="lazy" className="a365-thumb a365-thumb-3-2" />
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
              {insidePage.items.map((item) => (
                <Reveal key={item.href}>
                  <NewsCard item={item} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
