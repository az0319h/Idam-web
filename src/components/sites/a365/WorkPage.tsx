"use client";

import { useState } from "react";
import { allWork, workPage } from "./data";
import { Reveal } from "./Reveal";
import { WorkCard } from "./WorkCard";

type Tab = "grid" | "list";

export function WorkHeading() {
  return (
    <section>
      <div className="a365-container a365-container-page-heading">
        <Reveal>
          <h1 className="a365-big-heading">{workPage.heading}</h1>
        </Reveal>
      </div>
    </section>
  );
}

/** 격자 / 목록 탭. 탭 메뉴는 767px 이하에서 숨겨지고 격자만 보인다. */
export function WorkTabs() {
  const [tab, setTab] = useState<Tab>("grid");
  return (
    <section>
      <div className="a365-top-divider">
        <div className="a365-container a365-container-work-page">
          <div className="a365-tabs">
            <div className="a365-tabs-menu" role="tablist" aria-label="보기 방식">
              {(["grid", "list"] as const).map((t) => (
                <button
                  key={t}
                  type="button"
                  role="tab"
                  id={`a365-tab-${t}`}
                  aria-selected={tab === t}
                  aria-controls={`a365-pane-${t}`}
                  className={["a365-tab-link", tab === t ? "is-current" : ""].filter(Boolean).join(" ")}
                  onClick={() => setTab(t)}
                >
                  <div className="a365-standard">{workPage.tabs[t]}</div>
                </button>
              ))}
            </div>
            <div className="a365-tabs-content">
              <div id="a365-pane-grid" role="tabpanel" aria-labelledby="a365-tab-grid" className="a365-tab-pane a365-tab-pane-grid" hidden={tab !== "grid"}>
                <div className="a365-collection">
                  {allWork.map((item) => (
                    <Reveal key={item.slug}>
                      <WorkCard item={item} />
                    </Reveal>
                  ))}
                </div>
              </div>
              <div id="a365-pane-list" role="tabpanel" aria-labelledby="a365-tab-list" className="a365-tab-pane a365-tab-pane-list" hidden={tab !== "list"}>
                <div className="a365-work-list">
                  {allWork.map((item) => (
                    <div key={item.slug} className="a365-work-row">
                      <a href={item.href} className="a365-work-link a365-work-link-list">
                        <div className="a365-work-list-grid">
                          <div className="a365-standard a365-wl-year">{item.year}</div>
                          <div className="a365-medium a365-wl-name">{item.name}</div>
                          <div className="a365-thumb-wrap a365-wl-thumb">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={item.image} alt={`${item.name} 대표 사진`} width={item.width} height={item.height} loading="lazy" className="a365-thumb" />
                          </div>
                          <div className="a365-wl-button">
                            <div className="a365-standard">{workPage.detail}</div>
                            <span className="a365-ul a365-ul-hidden" />
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
