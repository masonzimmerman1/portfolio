import type { CSSProperties } from "react";
import { profile, stats, about } from "../data/profile";
import { Img } from "./Img";
import { Logo } from "./Logo";
import { CountUp } from "./CountUp";
import { Marquee } from "./Marquee";
import type { TabId } from "./Nav";

const delay = (ms: number) => ({ "--rd": `${ms}ms` }) as CSSProperties;

export function Home({ onNavigate }: { onNavigate: (id: TabId) => void }) {
  return (
    <div className="tab-panel page-flow" id="home">
      <div className="hero">
        <div className="orb orb-a" aria-hidden="true" />
        <div className="orb orb-b" aria-hidden="true" />
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

      <Marquee />

      <div className="stats">
        <div className="wrap">
          {stats.map((s, i) => (
            <div className="stat reveal" style={delay(i * 140)} key={i}>
              <div className="n">
                <CountUp value={s.n} />
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
          <h2 className="sec-title reveal">A builder at the intersection of finance and technology</h2>
          <div className="about-grid">
            <div className="about reveal">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <aside className="interests reveal" style={delay(150)}>
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
