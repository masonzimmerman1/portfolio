import { contact, profile } from "../data/profile";

export function Contact() {
  return (
    <div className="tab-panel">
      <div className="contact panel-pad">
        <div className="wrap">
          <div className="eyebrow">Get in touch</div>
          <h2>Let's connect</h2>
          <p>{contact.intro}</p>
          <div className="contact-list">
            {contact.links.map((l, i) => (
              <a href={l.href} key={i}>
                <span className="ci">{l.label}</span>
                {l.value}
              </a>
            ))}
          </div>
          <div className="btns" style={{ justifyContent: "center" }}>
            <a className="btn primary" href={`mailto:${contact.links[0].value}`}>
              Email me
            </a>
            <a className="btn ghost" href={profile.linkedin} target="_blank" rel="noopener">
              LinkedIn →
            </a>
          </div>
        </div>
      </div>
      <div className="footer-note">© 2026 {profile.name} · Built in Los Angeles, CA</div>
    </div>
  );
}
