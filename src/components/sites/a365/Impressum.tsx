import { privacy } from "./data";
import { privacyPage, type PrivacyBlock } from "./privacy-data";

function Block({ b }: { b: PrivacyBlock }) {
  switch (b.type) {
    case "p":
      return <p className="a365-standard a365-privacy-p">{b.text}</p>;
    case "h":
      return <div className="a365-standard a365-privacy-h">{b.text}</div>;
    case "ul":
      return (
        <ul className="a365-privacy-list">
          {b.items.map((t) => (
            <li key={t} className="a365-standard">
              {t}
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="a365-privacy-list a365-privacy-ol">
          {b.items.map((t) => (
            <li key={t} className="a365-standard">
              {t}
            </li>
          ))}
        </ol>
      );
    case "table":
      return (
        <table className="a365-privacy-table">
          <thead>
            <tr>
              {b.headers.map((h) => (
                <th key={h} className="a365-standard">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {b.rows.map((r) => (
              <tr key={r.join("|")}>
                {r.map((c, i) => (
                  <td key={i} className="a365-standard">
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
    case "info":
      return (
        <dl className="a365-privacy-info">
          {b.items.map(([k, v]) => (
            <div key={k} className="a365-privacy-info-row">
              <dt className="a365-standard">{k}</dt>
              <dd className="a365-standard">{v}</dd>
            </div>
          ))}
        </dl>
      );
  }
}

export function PrivacyHeading() {
  return (
    <section>
      <div className="a365-container a365-container-page-heading">
        <h1 className="a365-big-heading a365-big-heading-long">{privacy.heading}</h1>
      </div>
    </section>
  );
}

export function PrivacyBody() {
  return (
    <section>
      <div className="a365-top-divider">
        <div className="a365-container">
          <div className="a365-grid">
            <div className="a365-info-container a365-privacy">
              <div className="a365-medium">{privacyPage.intro}</div>
              <div className="a365-standard">{privacyPage.meta}</div>
              <div className="a365-divider" />
              <p className="a365-standard a365-privacy-p">{privacyPage.preamble}</p>
              {privacyPage.sections.map((s) => (
                <section key={s.num} id={`privacy-${s.num}`} className="a365-privacy-section">
                  <div className="a365-privacy-title">
                    <span className="a365-standard">{s.num}</span>
                    <h2 className="a365-medium">{s.title}</h2>
                  </div>
                  {s.blocks.map((b, i) => (
                    <Block key={i} b={b} />
                  ))}
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
