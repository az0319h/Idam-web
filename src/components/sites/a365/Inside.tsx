import { inside } from "./data";
import { NewsCard } from "./InsidePage";
import { Reveal } from "./Reveal";
import { UnderlineLink } from "./UnderlineLink";

export function Inside() {
  return (
    <section>
      <div className="a365-container a365-container-padding-top">
        <div className="a365-section-header-block">
          <div className="a365-vflex a365-gap-2">
            <div className="a365-section-header">
              <div className="a365-grid">
                <h2 className="a365-big-heading a365-sh-title">{inside.heading}</h2>
                <UnderlineLink href={inside.allLink.href} underline="inline" className="a365-sh-link">
                  <div className="a365-standard">{inside.allLink.label}</div>
                </UnderlineLink>
              </div>
            </div>
            <div className="a365-grid">
              <div className="a365-large a365-sh-lead">{inside.lead}</div>
            </div>
          </div>
        </div>

        <div className="a365-blog-list">
          {inside.items.map((item) => (
            <Reveal key={item.title}>
              <NewsCard item={item} compact />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
