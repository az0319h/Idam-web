"use client";

import { useEffect, useRef } from "react";
import { parallax } from "./data";

/**
 * Source behaviour: the image is scaled 1.2 while its top edge is at the bottom of the viewport
 * and settles to 1.0 once the image is centred in the viewport (scroll-driven, linear, both directions).
 */
interface ParallaxImageProps {
  image?: string;
  width?: number;
  height?: number;
  alt?: string;
  /** Render only the wrapper (for use inside another section/container) instead of its own `<section>`. */
  bare?: boolean;
  /** Scale while the image enters from the bottom of the viewport (home: 1.2, project pages: 1.125). */
  scaleFrom?: number;
  /** 래퍼에 추가할 클래스 */
  className?: string;
}

export function ParallaxImage({ image = parallax.image, width = parallax.width, height = parallax.height, alt = parallax.alt, bare = false, scaleFrom = 1.2, className }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      el.style.setProperty("--a365-parallax-scale", "1");
      return;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // Webflow IX2 "while scrolling in view": progress 0 when the top edge enters at the bottom of the
      // viewport, and the scale settles once the element has travelled half of (viewport + element height).
      const progress = Math.min(1, Math.max(0, (2 * (vh - rect.top)) / (vh + rect.height)));
      const scale = scaleFrom - (scaleFrom - 1) * progress;
      el.style.setProperty("--a365-parallax-scale", scale.toFixed(4));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [scaleFrom]);

  const wrapper = (
    <div ref={ref} className={["a365-parallax", className].filter(Boolean).join(" ")}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt={alt} width={width} height={height} loading="lazy" />
    </div>
  );
  return bare ? wrapper : <section>{wrapper}</section>;
}
