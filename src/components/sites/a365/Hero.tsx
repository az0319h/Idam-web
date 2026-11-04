import Image from "next/image";
import { hero, ui } from "./data";

export function Hero() {
  return (
    <section className="a365-hero">
      <div className="a365-container a365-hero-container">
        <h1 className="a365-hero-heading">{hero.heading}</h1>
        <div className="a365-grid a365-hero-grid">
          <div className="a365-serif a365-serif-white a365-hero-since">{hero.since}</div>
          <div className="a365-standard a365-standard-white a365-hero-text">{hero.text}</div>
          <div className="a365-scroll-arrow a365-hero-arrow">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/sites/a365/icons/down-arrow.svg" alt={ui.scrollHint} width={24} height={24} />
          </div>
        </div>
      </div>
      <div className="a365-hero-media">
        {/* 첫 화면의 LCP 요소: head 에서 미리 받는다. */}
        <Image src={hero.image} alt={hero.heading} width={hero.width} height={hero.height} sizes="100vw" preload />
        <div className="a365-hero-mask" />
      </div>
    </section>
  );
}
