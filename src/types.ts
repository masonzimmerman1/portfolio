// Shared content types for the portfolio.
// Editing the site = editing the typed data files in src/data/* that use these shapes.

export interface Stat {
  n: string;
  nSuffix?: string; // e.g. the "×" rendered in gold
  l: string;
}

export interface Role {
  role: string;
  org: string;
  date: string;
  bullets: string[];
  column: 1 | 2; // which timeline column it appears in
}

export interface Project {
  id: string;
  kicker: string; // small label on the switcher tab
  title: string; // switcher tab title
  subtitle: string; // switcher tab one-liner
  kind: string; // eyebrow inside the card
  heading: string;
  meta: string;
  blurb: string;
  image: string;
  highlights: string[];
  tags: string[];
  note?: string;
  demoUrl?: string; // opens in new tab + embeds in an iframe
  // Optional rich "deep dive" content (used by the Bucks project)
  gallery?: { src: string; caption: string }[];
  band?: Stat[];
  flow?: { title: string; steps: { num: number; title: string; body: string }[] };
  twoCol?: { title: string; body: string }[];
  stack?: string[];
}

export interface Education {
  school: string;
  degree: string;
  detail: string;
  bar: string; // CSS background for the school-color accent bar (gradient)
  accent: string; // school primary color, used for the school name
  soft: string; // faint background tint in the school color
}

export interface Cert {
  title: string;
  sub: string;
  href?: string;
  cta?: string;
  icon: string; // emoji/glyph shown in the badge
  tint: string; // badge background color
  fg: string; // badge foreground (icon) color
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
}
