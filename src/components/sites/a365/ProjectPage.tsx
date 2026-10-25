import type { WorkItem } from "./data";
import { ParallaxImage } from "./ParallaxImage";
import { Reveal } from "./Reveal";
import { WorkCard } from "./WorkCard";
import { galleryLayout, nextWorks, splitDescription } from "./projects";

const labels = {
  location: "위치",
  type: "구조",
  usage: "용도",
  spec: "건축 개요",
  area: "건축 면적",
  floors: "층수",
  exterior: "외장재",
  interior: "내장재",
  completion: "준공",
  features: "특징",
  next: "다음 작품",
};

function Gallery({ item }: { item: WorkItem }) {
  const items = galleryLayout(item);
  return (
    <section>
      <div className="a365-container">
        <Reveal>
          <div className="a365-grid">
            {items.map((g, i) => (
              <div key={g.src} className={g.layout === "wide" ? "a365-project-wide" : "a365-project-tall"}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={g.src}
                  alt={`${item.name} 사진 ${i + 1}`}
                  width={g.width}
                  height={g.height}
                  loading="lazy"
                  className={g.layout === "wide" ? "a365-project-image" : "a365-project-image-tall"}
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ProjectPage({ project }: { project: WorkItem }) {
  const { lead, body } = splitDescription(project.description);
  const next = nextWorks(project.slug);
  const spec: [string, string][] = [
    [labels.area, `${project.area}㎡ (약 ${Math.round(project.area / 3.3058)}평)`],
    [labels.floors, project.floors],
    [labels.exterior, project.exterior.join(" · ")],
    [labels.interior, project.interior.join(" · ")],
    [labels.completion, project.completion.replace("-", "년 ") + "월"],
  ];
  return (
    <>
      <section>
        <div className="a365-container a365-container-page-heading">
          <Reveal>
            <h1 className="a365-work-title">{project.name}</h1>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="a365-container">
          <Reveal>
            <div className="a365-vflex a365-gap-1">
              <div className="a365-project-overview">
                <div className="a365-grid">
                  <div className="a365-medium a365-po-year">{project.year}</div>
                  <div className="a365-project-info a365-po-info">
                    {[
                      [labels.location, project.service],
                      [labels.type, project.type],
                      [labels.usage, project.usage],
                    ].map(([k, v]) => (
                      <div key={k} className="a365-project-info-item">
                        <div className="a365-standard">{k}</div>
                        <div className="a365-standard">{v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <ParallaxImage bare image={project.image} width={project.width} height={project.height} alt={`${project.name} 대표 사진`} />

              <div className="a365-project-detail">
                <div className="a365-vflex a365-gap-8">
                  <div className="a365-grid">
                    <div className="a365-large a365-pd-lead">{lead}</div>
                  </div>
                  <div className="a365-project-text">
                    <div className="a365-grid a365-grid-biggap">
                      <Reveal className="a365-pd-services">
                        <div className="a365-vflex a365-gap-05">
                          <div className="a365-standard">{labels.spec}</div>
                          <div className="a365-vflex">
                            {spec.map(([k, v]) => (
                              <div key={k} className="a365-deliverable a365-spec-row">
                                <div className="a365-standard a365-spec-label">{k}</div>
                                <div className="a365-standard">{v}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Reveal>
                      <Reveal className="a365-pd-text">
                        <div className="a365-vflex a365-gap-2">
                          {body && <div className="a365-standard">{body}</div>}
                          <div className="a365-vflex a365-gap-05">
                            <div className="a365-standard">{labels.features}</div>
                            <div className="a365-vflex">
                              {project.features.map((f) => (
                                <div key={f} className="a365-deliverable">
                                  <div className="a365-standard">{f}</div>
                                  <div className="a365-dot" />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Reveal>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Gallery item={project} />

      <section>
        <div className="a365-top-divider">
          <div className="a365-container">
            <div className="a365-grid">
              <div className="a365-standard a365-next-label">{labels.next}</div>
              <div className="a365-next-list">
                <div className="a365-collection">
                  {next.map((item) => (
                    <Reveal key={item.slug}>
                      <WorkCard item={item} serifPadding={false} />
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
