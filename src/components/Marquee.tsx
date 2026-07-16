// Infinite skills & organizations marquee under the hero.
// Two identical copies in a flex track; animating to -50% loops seamlessly.
const items: { label: string; logo?: string }[] = [
  { label: "USC Marshall", logo: "/images/logos/usc.svg" },
  { label: "Software Technology Group", logo: "/images/logos/stg.svg" },
  { label: "Financial Modeling" },
  { label: "Brunk Industries", logo: "/images/logos/brunk.svg" },
  { label: "React + TypeScript" },
  { label: "Bloomberg BMC", logo: "/images/logos/bloomberg.png" },
  { label: "DCF & LBO Valuation" },
  { label: "USC Global Investment Society", logo: "/images/logos/usc-gis.svg" },
  { label: "Claude API" },
  { label: "Wall Street Prep", logo: "/images/logos/wallstreetprep.png" },
  { label: "Excel & CapitalIQ" },
  { label: "Marshall AI Association", logo: "/images/logos/maia.svg" },
  { label: "AWS", logo: "/images/logos/aws.png" },
  { label: "Data Visualization" },
  { label: "FINRA SIE", logo: "/images/logos/finra.png" },
  { label: "Slice Consulting", logo: "/images/logos/slice.svg" },
];

export function Marquee() {
  return (
    <div className="marquee" aria-label="Skills and organizations">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div className="mq-copy" key={copy} aria-hidden={copy === 1}>
            {items.map((it, i) => (
              <span className="mq-item" key={i}>
                {it.logo && <img src={it.logo} alt="" />}
                {it.label}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
