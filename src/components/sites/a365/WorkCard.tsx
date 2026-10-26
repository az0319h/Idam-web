import type { WorkItem } from "./data";

interface WorkCardProps {
  item: WorkItem;
  alt?: string;
  serifPadding?: boolean;
}

/** 작품 카드: 대표 사진, 작품명(밑줄은 호버 시), 기울임 부제(위치). `href`가 비어 있으면 링크를 걸지 않는다. */
export function WorkCard({ item, alt, serifPadding = true }: WorkCardProps) {
  const body = (
    <>
      <div className="a365-thumb-wrap">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={item.image} alt={alt ?? `${item.name} 대표 사진`} width={item.width} height={item.height} loading="lazy" className="a365-thumb" />
      </div>
      <div>
        <div className="a365-name-wrap">
          <div className="a365-standard">{item.name}</div>
          <span className="a365-ul a365-ul-hidden" />
        </div>
        <div className={serifPadding ? "a365-serif a365-serif-pad" : "a365-serif"}>{item.service}</div>
      </div>
    </>
  );
  if (!item.href) return <div className="a365-work-link">{body}</div>;
  const external = item.href.startsWith("http");
  return (
    <a href={item.href} className="a365-work-link" {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {body}
    </a>
  );
}
