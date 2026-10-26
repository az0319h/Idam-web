"use client";

import { useState } from "react";
import { service, ui, type RichPart, type ServiceItem } from "./data";
import { Reveal } from "./Reveal";

function Rich({ parts }: { parts: RichPart[] }) {
  return (
    <>
      {parts.map((p, i) => (typeof p === "string" ? p : <strong key={i}>{p.strong}</strong>))}
    </>
  );
}

function DropdownItem({ item }: { item: ServiceItem }) {
  const [open, setOpen] = useState(false);
  const id = `a365-service-${item.number}`;
  return (
    <Reveal>
      <div className={["a365-dropdown-item", open ? "is-open" : ""].join(" ")}>
        <button type="button" className="a365-dropdown-header" aria-expanded={open} aria-controls={id} onClick={() => setOpen((v) => !v)}>
          <div className="a365-grid">
            <div className="a365-mobile-hidden">
              <div className="a365-large">{item.number}</div>
            </div>
            <div className="a365-large a365-dd-title">{item.title}</div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/sites/a365/icons/plus-icon.svg" alt={ui.open} width={32} height={32} className="a365-dropdown-icon a365-dd-icon" />
          </div>
        </button>
        <div id={id} className="a365-dropdown-content">
          <div className="a365-service-image-block">
            <div className="a365-grid">
              <div className="a365-service-images a365-dd-images">
                {item.images.map((src, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={src} src={src} alt={`${item.title} 사진 ${i + 1}`} width={894} height={564} loading="lazy" />
                ))}
              </div>
            </div>
          </div>
          <div className="a365-dropdown-text">
            <div className="a365-grid a365-grid-biggap">
              <div className="a365-vflex a365-gap-05 a365-dd-copy">
                <div className="a365-standard">{item.headline}</div>
                <div className="a365-divider" />
                <div className="a365-standard">
                  {item.paragraphs.map((p, i) => (
                    <span key={i}>
                      {i > 0 && (
                        <>
                          <br />
                          <br />
                        </>
                      )}
                      <Rich parts={p} />
                    </span>
                  ))}
                </div>
              </div>
              <div className="a365-vflex a365-gap-05 a365-dd-tools">
                <div className="a365-standard">{service.toolsLabel}</div>
                <div className="a365-tool-list">
                  {item.tools.map((t) => (
                    <div key={t} className="a365-tool-item">
                      <div className="a365-standard">{t}</div>
                      <div className="a365-dot" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

interface ServiceProps {
  /** Number of the item the page hides via `.open-by-default`; defaults to the homepage's (01). */
  hiddenNumber?: string;
}

export function Service({ hiddenNumber }: ServiceProps) {
  return (
    <section>
      <div className="a365-container">
        <div className="a365-vflex a365-gap-1">
          <h2 className="a365-big-heading">{service.heading}</h2>
          <div className="a365-dropdown-list">
            {service.items
              .filter((item) => (hiddenNumber ? item.number !== hiddenNumber : !item.hidden))
              .map((item) => (
                <DropdownItem key={item.number} item={item} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
