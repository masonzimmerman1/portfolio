import { CountUp } from "./CountUp";

// Floating "live" KPI card pinned to the hero portrait — the sparkline draws
// itself in, the end-dot pulses, and the number counts up (nominal.so style).
// Decorative sample data, echoing the dashboard work in Projects.
export function HeroViz() {
  return (
    <div className="viz-card" aria-hidden="true">
      <div className="viz-label">KPI TRACKER · DEMO</div>
      <svg viewBox="0 0 150 44" className="viz-spark">
        <path
          className="viz-line"
          d="M2 38 L18 32 L34 34 L50 26 L66 28 L82 20 L98 23 L114 13 L130 16 L148 6"
          fill="none"
          stroke="#a51c30"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle className="viz-dot" cx="148" cy="6" r="3.5" fill="#c9a227" />
      </svg>
      <div className="viz-value">
        <CountUp value="+12.4%" duration={1800} />{" "}
        <span className="viz-sub">revenue growth</span>
      </div>
    </div>
  );
}
