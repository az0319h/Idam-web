import Link from "next/link";
import { brand, footer, ui } from "./data";
import { UnderlineLink } from "./UnderlineLink";

export function Footer() {
  return (
    <footer>
      <div className="a365-top-divider">
        <div className="a365-container a365-container-footer">
          <div className="a365-footer-content">
            <div className="a365-grid a365-grid-biggap">
              <Link href="/" className="a365-logo-link a365-f-logo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={brand.logoBlack} alt={brand.name} width={450} height={210} className="a365-logo" />
              </Link>
              <div className="a365-footer-links a365-f-links">
                {footer.links.map((l) => (
                  <UnderlineLink key={l.label} href={l.href} underline="hidden">
                    <div className="a365-large">{l.label}</div>
                  </UnderlineLink>
                ))}
              </div>
              <div className="a365-vflex a365-gap-05 a365-f-social">
                <div className="a365-standard">{ui.social}</div>
                <div className="a365-social-list">
                  {footer.social.map((s) => (
                    <a key={s.label} href={s.href} className="a365-social-link" target="_blank" rel="noopener noreferrer">
                      <div className="a365-standard">{s.label}</div>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/sites/a365/icons/link-arrow-black.svg" alt="" width={16} height={16} className="a365-social-arrow" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="a365-grid">
              <div className="a365-vflex a365-gap-05 a365-f-cta">
                <div className="a365-standard">{footer.ctaLabel}</div>
                <UnderlineLink href={footer.cta.href} underline="footer">
                  <div className="a365-big-heading">{footer.cta.label}</div>
                </UnderlineLink>
              </div>
            </div>
          </div>

          <div className="a365-bottom-bar">
            <div className="a365-grid a365-grid-centered">
              <UnderlineLink href={footer.studio.href} underline="hidden" className="a365-f-studio">
                <div className="a365-serif">{footer.studio.label}</div>
              </UnderlineLink>
              <div className="a365-bottom-links a365-f-legal">
                {footer.legal.map((l) => (
                  <UnderlineLink key={l.label} href={l.href} underline="hidden">
                    <div className="a365-standard">{l.label}</div>
                  </UnderlineLink>
                ))}
              </div>
              <div className="a365-standard a365-f-copy">{footer.copyright}</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
