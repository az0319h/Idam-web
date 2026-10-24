import { about } from "./data";
import { Reveal } from "./Reveal";
import { UnderlineLink } from "./UnderlineLink";

export function About() {
  return (
    <section>
      <div className="a365-container a365-container-mobile-padding">
        <Reveal>
          <div className="a365-vflex a365-gap-6">
            <div className="a365-grid">
              <div className="a365-large a365-large-indent a365-about-lead">{about.lead}</div>
              <h2 className="a365-small-heading a365-about-heading">{about.heading}</h2>
            </div>
            <div className="a365-grid">
              <div className="a365-vflex a365-gap-4 a365-about-body">
                <div className="a365-standard a365-standard-none">{about.text}</div>
                <UnderlineLink href={about.link.href} underline="inline">
                  <div className="a365-standard">{about.link.label}</div>
                </UnderlineLink>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
