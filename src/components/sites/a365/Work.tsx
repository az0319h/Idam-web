import { work } from "./data";
import { Reveal } from "./Reveal";
import { UnderlineLink } from "./UnderlineLink";
import { WorkCard } from "./WorkCard";

export function Work() {
  return (
    <section>
      <div className="a365-container">
        <div className="a365-section-header-block">
          <div className="a365-vflex a365-gap-2">
            <div className="a365-section-header">
              <div className="a365-grid">
                <h2 className="a365-big-heading a365-sh-title">{work.heading}</h2>
                <div className="a365-mobile-hidden a365-sh-years">
                  <div className="a365-standard">{work.years}</div>
                </div>
                <UnderlineLink href={work.allLink.href} underline="inline" className="a365-sh-link">
                  <div className="a365-standard">{work.allLink.label}</div>
                </UnderlineLink>
              </div>
            </div>
            <div className="a365-grid">
              <div className="a365-large a365-sh-lead">{work.lead}</div>
            </div>
          </div>
        </div>

        <div className="a365-collection">
          {work.items.map((item) => (
            <Reveal key={item.name}>
              <WorkCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
