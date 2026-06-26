import { roles, experienceIntro } from "../data/experience";
import type { Role } from "../types";

function Timeline({ items }: { items: Role[] }) {
  return (
    <div>
      {items.map((r, i) => (
        <div className="tl-item" key={i}>
          <div className="role">{r.role}</div>
          <div className="org">{r.org}</div>
          <div className="date">{r.date}</div>
          <ul>
            {r.bullets.map((b, j) => (
              <li key={j}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function Experience() {
  const col1 = roles.filter((r) => r.column === 1);
  const col2 = roles.filter((r) => r.column === 2);
  return (
    <div className="tab-panel">
      <div className="panel-pad">
        <div className="wrap">
          <div className="eyebrow">Experience &amp; Leadership</div>
          <h2 className="sec-title">Where I've been working</h2>
          <p className="sec-intro">{experienceIntro}</p>
          <div className="two">
            <Timeline items={col1} />
            <Timeline items={col2} />
          </div>
        </div>
      </div>
    </div>
  );
}
