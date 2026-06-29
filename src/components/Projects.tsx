import { useState } from "react";
import { projects, projectsIntro } from "../data/projects";
import type { Project } from "../types";
import { Img } from "./Img";

function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="proj-view">
      <div className="proj-card">
        <div className="proj-hero">
          <div className="media">
            <Img src={p.image} alt={p.heading} phClass="ph3" phText="Interactive demo loads below ↓" imgClass={p.imageContain ? "media-contain" : undefined} />
          </div>
          <div className="body">
            <div className="kind">{p.kind}</div>
            <h3>{p.heading}</h3>
            <div className="meta">{p.meta}</div>
            <p>{p.blurb}</p>
            <ul className="highlights">
              {p.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
            <div className="tags">
              {p.tags.map((t, i) => (
                <span className="tag" key={i}>
                  {t}
                </span>
              ))}
            </div>
            {p.demoUrl && (
              <a className="btn dark" href={p.demoUrl} target="_blank" rel="noopener">
                Open full demo in new tab ↗
              </a>
            )}
            {p.note && <p className="note">{p.note}</p>}
          </div>
        </div>

        {/* Project 1 gets the live AI insight + embedded demo */}
        {p.demoUrl && (
          <div className="embed-block">
            <h4>Try it live</h4>
            <div className="es">
              {p.demoNote ??
                "Fully interactive, sanitized demo — click the sidebar tabs to explore each view. All names and figures are fictional sample data; no real company data is shown."}
            </div>
            <div className="frame">
              <iframe src={p.demoUrl} title={`${p.heading} Demo`} loading="lazy" />
            </div>
          </div>
        )}

        {/* Optional rich gallery */}
        {p.gallery && (
          <div className="gallery">
            {p.gallery.map((g, i) => (
              <figure key={i} className={g.contain ? "fit-contain" : undefined}>
                <Img src={g.src} alt={g.caption} phClass="ph4" phText="Add an image to /images" />
                <figcaption>{g.caption}</figcaption>
              </figure>
            ))}
          </div>
        )}

        {/* Optional stat band */}
        {p.band && (
          <div className="bucks-band">
            {p.band.map((b, i) => (
              <div className="bb" key={i}>
                <div className="n">{b.n}</div>
                <div className="l">{b.l}</div>
              </div>
            ))}
          </div>
        )}

        {/* Optional flow */}
        {p.flow && (
          <div className="flow">
            <h4>{p.flow.title}</h4>
            {p.flow.subtitle && <div className="fs">{p.flow.subtitle}</div>}
            <div className="flow-steps">
              {p.flow.steps.map((s) => (
                <div className="flow-step" key={s.num}>
                  <div className="num">{s.num}</div>
                  <div className="st">{s.title}</div>
                  <p>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Optional two-column breakdown */}
        {p.twoCol && (
          <div className="twocol">
            {p.twoCol.map((c, i) => (
              <div className="col" key={i}>
                <div className="ct">{c.title}</div>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        )}

        {/* Optional tech stack */}
        {p.stack && (
          <div className="stack">
            <span className="lbl">Built with</span>
            {p.stack.map((s, i) => (
              <span className="s" key={i}>
                {s}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function Projects() {
  const [active, setActive] = useState(projects[0].id);
  const current = projects.find((p) => p.id === active)!;
  return (
    <div className="tab-panel">
      <div className="panel-pad">
        <div className="wrap">
          <div className="eyebrow">Selected Projects</div>
          <h2 className="sec-title">Things I've built</h2>
          <p className="sec-intro">{projectsIntro}</p>

          <div className="proj-tabs">
            {projects.map((p) => (
              <button
                key={p.id}
                className={active === p.id ? "active" : ""}
                onClick={() => setActive(p.id)}
              >
                <div className="pt-k">{p.kicker}</div>
                <div className="pt-t">{p.title}</div>
                <div className="pt-s">{p.subtitle}</div>
              </button>
            ))}
          </div>

          <ProjectCard p={current} />
        </div>
      </div>
    </div>
  );
}
