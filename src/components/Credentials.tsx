import { education, certs, credentialsIntro } from "../data/credentials";

export function Credentials() {
  return (
    <div className="tab-panel">
      <div className="panel-pad">
        <div className="wrap">
          <div className="eyebrow">Education &amp; Credentials</div>
          <h2 className="sec-title">Education &amp; certifications</h2>
          <p className="sec-intro">{credentialsIntro}</p>

          <div className="edu">
            {education.map((e, i) => (
              <div className="e" key={i} style={{ background: e.soft }}>
                <span className="e-bar" style={{ background: e.bar }} />
                <div className="sch" style={{ color: e.accent }}>
                  {e.school}
                </div>
                <div className="deg">{e.degree}</div>
                <div className="d">{e.detail}</div>
              </div>
            ))}
          </div>

          <div className="cert-grid">
            {certs.map((c, i) => {
              const inner = (
                <>
                  <span className="cert-badge" style={{ background: c.tint, color: c.fg }}>
                    {c.icon}
                  </span>
                  <div className="cert-text">
                    <div className="t">{c.title}</div>
                    <div className="s">{c.sub}</div>
                    {c.cta && <span className="v">{c.cta}</span>}
                  </div>
                </>
              );
              return c.href ? (
                <a className="cert" href={c.href} target="_blank" rel="noopener" key={i}>
                  {inner}
                </a>
              ) : (
                <div className="cert" key={i}>
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
