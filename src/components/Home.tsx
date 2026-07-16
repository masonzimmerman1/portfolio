import { profile, stats, about } from "../data/profile";
import { Img } from "./Img";
import { Logo } from "./Logo";
import type { TabId } from "./Nav";

export function Home({ onNavigate }: { onNavigate: (id: TabId) => void }) {
  return (
    <div className="tab-panel flow" id="home">
      <div className="hero">
        <div className="wrap">
          <div>
            <div className="eyebrow">{profile.eyebrow}</div>
            <h1>{profile.name}</h1>
            <div className="hero-tag">{profile.tag}</div>
            <p className="lede">{profile.lede}</p>
            <div className="btns">
              <button className="btn primary" onClick={() => onNavigate("projects")}>
                View my work →
              </button>
              <a className="btn ghost" href={profile.linkedin} target="_blank" rel="noopener">
                LinkedIn
              </a>
              <a className="btn ghost" href={`mailto:${profile.email}`}>
                Email
              </a>
            </div>
          </div>
          <div className="portrait">
            <Img src={profile.headshot} alt={profile.name} phClass="ph" phText="Add headshot.jpg to /images" />
            <Logo src={profile.uscLogo} name="University of Southern California" className="usc-badge" />
          </div>
        </div>
      </div>

      <div className="stats">
        <div className="wrap">
          {stats.map((s, i) => (
            <div className="stat" key={i}>
              <div className="n">
                {s.n}
                {s.nSuffix && <span>{s.nSuffix}</span>}
              </div>
              <div className="l">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="panel-pad">
        <div className="wrap">
          <div className="eyebrow">About</div>
          <h2 className="sec-title">A builder at the intersection of finance and technology</h2>
          <div className="about-grid">
            <div className="about">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <aside className="interests">
              <h4>Beyond the resume</h4>
              <div className="chips">
                {about.interestChips.map((c, i) => (
                  <span className="chip" key={i}>
                    {c}
                  </span>
                ))}
              </div>
              <div className="golf-card">
                <Img
                  src={about.golfCard.image}
                  alt="State golf championship"
                  phClass="ph2"
                  phText="Add golf-championship.jpg to /images"
                />
                <div className="cap">
                  <b>{about.golfCard.captionLead}</b> {about.golfCard.caption}
                </div>
              </div>
              {about.dives.map((d, i) => (
                <p className="dive" key={i}>
                  <b>{d.lead}</b> {d.body}
                </p>
              ))}
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
