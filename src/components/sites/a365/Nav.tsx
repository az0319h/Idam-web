"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { brand, contactLink, footer, navLinks, socialLinks, ui } from "./data";
import { UnderlineLink } from "./UnderlineLink";

interface NavProps {
  /** `light` = 히어로 위 흰 글자 (홈); `dark` = 흰 배경 위 검정 글자 (내부 페이지). */
  theme?: "light" | "dark";
  /** 현재 페이지 경로. `aria-current`에 쓴다. */
  current?: string;
}

export function Nav({ theme = "light", current = "/" }: NavProps) {
  const [open, setOpen] = useState(false);
  const dark = theme === "dark";

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    const mq = window.matchMedia("(min-width: 480px)");
    mq.addEventListener("change", close);
    return () => mq.removeEventListener("change", close);
  }, [open]);

  return (
    <header className={["a365-nav", dark ? "a365-nav-dark" : "", open ? "is-open" : ""].filter(Boolean).join(" ")}>
      <div className="a365-nav-grid">
        <div className="a365-nav-col1">
          <Link id="Top" href="/" aria-current={current === "/" ? "page" : undefined} className="a365-logo-link">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={dark ? brand.logoBlack : brand.logoWhite} alt={brand.name} width={450} height={210} className="a365-logo" />
          </Link>
          <div className="a365-nav-copy">
            <div className={dark ? "a365-serif" : "a365-serif a365-serif-white"}>{brand.tagline}</div>
          </div>
        </div>

        <div className="a365-nav-col2" id="a365-mobile-menu" aria-hidden={!open ? undefined : false}>
          <nav className="a365-nav-menu" aria-label="주 메뉴">
            <div className="a365-nav-links">
              {navLinks.map((l) => (
                <UnderlineLink key={l.label} href={l.href} underline={dark ? "hidden" : "white"} ariaCurrent={current === l.href}>
                  <div className="a365-standard a365-standard-nav">{l.label}</div>
                </UnderlineLink>
              ))}
            </div>
            <UnderlineLink href={contactLink.href} underline={dark ? "hidden" : "white"} ariaCurrent={current === contactLink.href}>
              <div className="a365-standard a365-standard-nav">{contactLink.label}</div>
            </UnderlineLink>
          </nav>

          <div className="a365-mobile-social">
            <div className="a365-standard a365-standard-white">{ui.social}</div>
            <div className="a365-mobile-social-list">
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} className="a365-mobile-social-link" target="_blank" rel="noopener noreferrer">
                  <div className="a365-standard a365-standard-white">{s.label}</div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/sites/a365/icons/link-arrow-white.svg" alt="" width={16} height={16} className="a365-social-arrow" />
                </a>
              ))}
            </div>
            <div className="a365-standard a365-standard-white">{footer.mobileCopyright}</div>
          </div>
        </div>

        <button
          type="button"
          className="a365-menu-button"
          aria-expanded={open}
          aria-controls="a365-mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="a365-menu-text-wrapper">
            <span className="a365-standard">{ui.menu}</span>
            <span className="a365-standard">{ui.close}</span>
          </span>
        </button>
      </div>
    </header>
  );
}
