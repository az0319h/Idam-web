import { contact } from "./data";
import { ContactForm } from "./ContactForm";
import { Reveal } from "./Reveal";
import { UnderlineLink } from "./UnderlineLink";

export function ContactHeading() {
  return (
    <section>
      <div className="a365-container a365-container-page-heading">
        <Reveal>
          <h1 className="a365-big-heading">{contact.heading}</h1>
        </Reveal>
      </div>
    </section>
  );
}

export function ContactBody() {
  return (
    <section>
      <div className="a365-top-divider">
        <div className="a365-container">
          <div className="a365-vflex a365-gap-6">
            <div className="a365-grid a365-grid-biggap a365-contact-grid">
              <div className="a365-vflex a365-gap-4 a365-contact-info">
                {contact.blocks.map((b, i) => (
                  <Reveal key={b.label}>
                    <div className={["a365-contact-block", i === 0 ? "a365-contact-block-first" : ""].filter(Boolean).join(" ")}>
                      <div className="a365-standard">{b.label}</div>
                      {b.lines && <div className="a365-standard a365-contact-lines">{b.lines.join("\n")}</div>}
                      <div className={["a365-vflex", b.lines ? "a365-contact-block-links-row2" : "a365-contact-block-links"].join(" ")}>
                        {b.links.map((l) => (
                          <UnderlineLink key={l.label} href={l.href} underline="hidden">
                            <div className="a365-standard">{l.label}</div>
                          </UnderlineLink>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <div className="a365-map-box">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={contact.map.image} alt={contact.map.alt} width={contact.map.width} height={contact.map.height} loading="lazy" sizes="100vw" />
              </div>

              <Reveal className="a365-contact-form-wrap">
                <div className="a365-form-block">
                  <div className="a365-vflex a365-gap-6">
                    <div className="a365-large a365-large-white">{contact.form.heading}</div>
                    <ContactForm />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
