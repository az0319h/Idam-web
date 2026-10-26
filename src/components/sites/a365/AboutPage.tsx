import { aboutPage, valueIcons } from "./about-data";
import { Reveal } from "./Reveal";
import { UnderlineLink } from "./UnderlineLink";

export function AboutHeading() {
  return (
    <section>
      <div className="a365-container a365-container-page-heading">
        <Reveal>
          <h1 className="a365-big-heading">{aboutPage.heading}</h1>
        </Reveal>
      </div>
    </section>
  );
}

export function AboutIntro() {
  const { intro } = aboutPage;
  return (
    <section>
      <div className="a365-top-divider">
        <div className="a365-container a365-container-pb-1">
          <Reveal>
            <div className="a365-vflex a365-gap-16">
              <div className="a365-grid">
                <div className="a365-large a365-large-indent a365-about-lead">{intro.lead}</div>
                <h2 className="a365-small-heading a365-about-heading">{intro.heading}</h2>
              </div>
              <div className="a365-grid a365-grid-biggap">
                {intro.stats.map((st) => (
                  <div key={st.label} className="a365-stat">
                    <div className="a365-stat-number-wrap">
                      <div className="a365-stat-number">{st.number}</div>
                    </div>
                    <div className="a365-serif">{st.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function AboutSpirit() {
  const { spirit } = aboutPage;
  return (
    <section>
      <div className="a365-black-bg">
        <div className="a365-container">
          <div className="a365-vflex a365-gap-8">
            <Reveal>
              <div className="a365-grid">
                <div className="a365-large a365-large-white a365-large-indent a365-about-lead">{spirit.lead}</div>
                <h2 className="a365-small-heading a365-small-heading-white a365-about-heading">{spirit.heading}</h2>
              </div>
            </Reveal>
            <div className="a365-vflex a365-gap-6">
              {spirit.values.map((v) => {
                const icon = valueIcons[v.icon];
                return (
                  <Reveal key={v.title}>
                    <div className="a365-value-item">
                      <div className="a365-grid">
                        <div className="a365-icon-wrap">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={icon.src} alt="" width={icon.height} height={icon.height} className="a365-value-icon" style={{ height: icon.height }} />
                        </div>
                        <div className="a365-standard a365-standard-white a365-value-title">{v.strong ? <strong>{v.title}</strong> : v.title}</div>
                        <div className="a365-standard a365-standard-white a365-value-text">{v.text}</div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutAwards() {
  const { awards } = aboutPage;
  return (
    <section>
      <div className="a365-top-divider">
        <div className="a365-container">
          <div className="a365-vflex a365-gap-4">
            <div className="a365-grid">
              <h2 className="a365-small-heading a365-awards-heading">{awards.heading}</h2>
              <div className="a365-medium a365-awards-lead">{awards.lead}</div>
            </div>
            <div className="a365-grid">
              <div className="a365-vflex a365-awards-list">
                {awards.items.map((a) => (
                  <Reveal key={a.number}>
                    <div className="a365-award-item">
                      <div className="a365-mobile-hidden a365-award-number">
                        <div className="a365-standard">{a.number}</div>
                      </div>
                      <div className="a365-standard a365-award-name">{a.name}</div>
                      {a.href ? (
                        <UnderlineLink href={a.href} underline="hidden" className="a365-award-category">
                          <div className="a365-standard">{a.category}</div>
                        </UnderlineLink>
                      ) : (
                        <div className="a365-standard a365-award-category">{a.category}</div>
                      )}
                      {a.year && <div className="a365-standard a365-award-year">{a.year}</div>}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
