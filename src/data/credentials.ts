import type { Education, Cert } from "../types";

export const credentialsIntro =
  "A finance foundation backed by hands-on technical and modeling credentials.";

export const education: Education[] = [
  {
    school: "University of Southern California",
    degree: "BS, Business Administration (STEM) · Minor in AI Applications",
    detail: "Marshall School of Business & Viterbi School of Engineering · Expected Dec 2028 · GPA 3.95",
    // USC colors: Cardinal + Gold
    bar: "linear-gradient(90deg,#990000 0%,#ffcc00 100%)",
    accent: "#990000",
    soft: "#fcf4f4",
  },
  {
    school: "Syracuse University",
    degree: "BS, Finance & Information Management & Technology",
    detail: "Whitman School of Management & School of Information Studies · 2024–2025 · GPA 3.92",
    // Syracuse colors: Orange + Navy
    bar: "linear-gradient(90deg,#f76900 0%,#0e1a3c 100%)",
    accent: "#cf4500",
    soft: "#fff7f1",
  },
];

export const certs: Cert[] = [
  {
    title: "FINRA SIE Exam",
    sub: "Securities Industry Essentials",
    href: "https://www.linkedin.com/in/mason-zimmerman1/details/certifications/",
    cta: "View on LinkedIn ↗",
    icon: "📈",
    tint: "#eaf1fb",
    fg: "#0f2a43",
  },
  {
    title: "Wall Street Prep",
    sub: "Financial & Valuation Modeling",
    href: "https://certification.wallstreetprep.com/1e7650e0-cf36-4ef4-93a6-be9659421c0d",
    cta: "Verify credential ↗",
    icon: "📊",
    tint: "#e8f5ee",
    fg: "#1c7a4a",
  },
  {
    title: "Wall Street Prep",
    sub: "Transaction Comps Modeling",
    href: "https://certification.wallstreetprep.com/90786b0b-04c7-4cf4-87aa-b28f93fb6df1",
    cta: "Verify credential ↗",
    icon: "🤝",
    tint: "#e8f5ee",
    fg: "#1c7a4a",
  },
  {
    title: "Bloomberg BMC",
    sub: "Market Concepts",
    href: "https://www.linkedin.com/in/mason-zimmerman1/details/certifications/",
    cta: "View on LinkedIn ↗",
    icon: "💹",
    tint: "#f0f0f2",
    fg: "#111111",
  },
  {
    title: "AWS",
    sub: "Cloud Practitioner Essentials",
    href: "https://www.linkedin.com/in/mason-zimmerman1/details/certifications/",
    cta: "View on LinkedIn ↗",
    icon: "☁️",
    tint: "#fff1e0",
    fg: "#d86613",
  },
  {
    title: "SAT 1500",
    sub: "770 Math · 730 Reading & Writing",
    icon: "✏️",
    tint: "#eef0f7",
    fg: "#1d3a8a",
  },
];
