import type { Project } from "../types";

export const projectsIntro =
  "Pick a project to see the work — pairing financial rigor with technology, from a live dashboard to AI hardware to data-driven strategy.";

export const projects: Project[] = [
  {
    id: "p1",
    kicker: "Software Technology Group",
    title: "AI Financials Dashboard",
    subtitle: "Live KPI dashboard + Claude API insights",
    kind: "Software Technology Group · Internship",
    heading: "AI-Powered Financials Dashboard",
    meta: "Live KPI dashboard with a Claude-API insights layer",
    blurb:
      "An internal business-metrics dashboard for company leadership that connects to live financial and operational data — giving executives real-time visibility into revenue, profitability, employee utilization, customer concentration, and cash health.",
    image: "/images/dashboard-preview.jpg",
    highlights: [
      "Surfaces 5+ KPIs across revenue, profitability, utilization, and customer-concentration risk.",
      "AI insights layer (Claude API) flags anomalies and writes plain-English narrative summaries.",
      "Authored the project brief, user stories & design — approved by ownership.",
    ],
    tags: ["Financial Analytics", "Claude API", "Data Viz", "Dashboards"],
    demoUrl: "/stg-dashboard-demo.html",
    band: [
      { n: "5+", l: "KPIs in a single executive view" },
      { n: "Live", l: "Connected to financial + ops data" },
      { n: "AI", l: "Claude-API insights & anomaly flags" },
      { n: "100%", l: "Brief, specs & design — authored by me" },
    ],
    twoCol: [
      {
        title: "What I built — Product",
        body: "Authored the project brief, user stories, and dashboard design — scoping which metrics leadership actually needed and getting the plan approved by ownership before development began.",
      },
      {
        title: "What I built — Engineering",
        body: "Built the live KPI views over financial and operational data, plus an AI insights layer on the Claude API that flags anomalies and writes plain-English narrative summaries of what the numbers mean.",
      },
    ],
  },
  {
    id: "p4",
    kicker: "Software Technology Group",
    title: "STG Company Website",
    subtitle: "Multi-page marketing site, designed & shipped",
    kind: "Software Technology Group · Internship",
    heading: "Software Technology Group — Company Website",
    meta: "A 9-page marketing site, built and deployed end to end",
    blurb:
      "A full marketing website for Software Technology Group — a Beaverton engineering firm in business since 1992. I took the company's brand and existing site and rebuilt it as a modern, responsive, multi-page React app, then shipped it live with continuous deployment.",
    image: "/images/stg-website.png",
    highlights: [
      "Designed and built 9 pages — Home, Services, Case Studies, Notable Projects, Partners, Testimonials, About, Careers, and Contact — as a component-driven React app.",
      "Mirrored the company's real brand: integrated the official logo (converted from vector art) and matched its color scheme, then modernized the layout.",
      "Added a zero-backend contact form, a full SEO/social kit (Open Graph cards, sitemap, structured data), and a responsive nav with a dropdown.",
      "Deployed to a live URL with automatic deploys on every push to GitHub.",
    ],
    tags: ["React", "TypeScript", "Web Design", "SEO", "Netlify"],
    demoUrl: "https://software-technology-group.netlify.app/",
    demoNote:
      "The actual live site, embedded and fully interactive — use the navigation to explore all nine pages.",
    band: [
      { n: "9", l: "Pages, fully responsive" },
      { n: "Live", l: "Auto-deployed via Netlify CI" },
      { n: "1992", l: "Client in business since" },
      { n: "100%", l: "Custom-built — no template" },
    ],
    twoCol: [
      {
        title: "What I built — Design",
        body: "Took the company's brand — logo, colors, and copy — and rebuilt it as a clean, modern, responsive layout: a brand-forward hero, service and case-study cards, a client roster, and a consistent design system in CSS.",
      },
      {
        title: "What I built — Engineering",
        body: "A Vite + React + TypeScript app with React Router across nine pages, a data-driven content layer, a Netlify-Forms contact form, a complete SEO/social meta layer, and CI that auto-deploys every push to production.",
      },
    ],
    stack: ["React", "TypeScript", "Vite", "React Router", "CSS", "Netlify", "Git"],
  },
  {
    id: "p2",
    kicker: "Marshall AI Association",
    title: "“Bucks” AI Robot",
    subtitle: "Financial-literacy robot dog for kids",
    kind: "Marshall AI Association · Team Project",
    heading: "“Bucks” — AI Financial-Literacy Robot",
    meta: "Robotic dog that teaches kids to save & invest · presented to 100+ at the Marshall AI Summit",
    blurb:
      "A robotic AI dog that makes financial literacy interactive for children through chores, rewards, and gamified lessons. I worked across both the engineering and the business case — a true finance-meets-AI build.",
    image: "/images/bucks.jpg",
    highlights: [
      "Assembled the hardware — Raspberry Pi, servos & sensors — powering movement and interaction.",
      "Contributed to a computer-vision & voice stack (YOLO, MediaPipe, ElevenLabs).",
      "Authored the market-sizing & pricing model: TAM/SAM/SOM, unit economics, and a competitive teardown.",
      "Helped present the project to an audience of 100+ at the Marshall AI Summit.",
    ],
    tags: ["Raspberry Pi", "Computer Vision", "Market Sizing", "Unit Economics"],
    gallery: [
      {
        src: "/images/bucks.jpg",
        caption: "The Bucks hardware build — Raspberry Pi, servos, and ultrasonic sensor I assembled.",
      },
      {
        src: "/images/maiaprez.jpg",
        caption: "Presenting the project to 100+ attendees at the Marshall AI Summit.",
      },
    ],
    band: [
      { n: "100+", l: "Audience at the Marshall AI Summit" },
      { n: "3 jars", l: "Spend · Save · Invest allocation" },
      { n: "~$5B", l: "Serviceable market I sized" },
      { n: "8.5×", l: "Modeled LTV / CAC ratio" },
    ],
    flow: {
      title: "How Bucks works",
      subtitle: 'A gamified loop that turns everyday chores into financial habits — "Earn it. Learn it. Own it."',
      steps: [
        {
          num: 1,
          title: "Earn",
          body: "Kids complete real-world chores. Bucks uses computer vision (YOLO + MediaPipe pose estimation) to recognize activity, and a voice agent coaches them in real time.",
        },
        {
          num: 2,
          title: "Allocate",
          body: "Earnings drop into three glowing jars — Spend, Save, and Invest — so kids practice splitting money and see the trade-offs for themselves.",
        },
        {
          num: 3,
          title: "Own",
          body: "Saving milestones unlock new robot tricks and a simple investment simulation that shows money growing over time. Parents track every dollar from a companion app.",
        },
      ],
    },
    twoCol: [
      {
        title: "What I built — Engineering",
        body: "Assembled the Raspberry Pi hardware (servos, ultrasonic + camera sensors) and helped wire the computer-vision and ElevenLabs voice stack that lets Bucks see, move, and talk.",
      },
      {
        title: "What I built — Business",
        body: "Authored the market & pricing research memo: TAM/SAM/SOM sizing from primary sources, per-classroom unit economics (~$1,150 Year-1 ARPU, ~57% gross margin), and a competitive teardown vs. EVERFI, ClassDojo & Sphero.",
      },
    ],
    stack: ["Raspberry Pi", "YOLO", "MediaPipe", "ElevenLabs", "Computer Vision", "Mobile App", "Market Model"],
  },
  {
    id: "p3",
    kicker: "Brunk Industries",
    title: "RFM Strategy Analysis",
    subtitle: "Data-driven revenue-growth strategy",
    kind: "Brunk Industries · Consulting Project",
    heading: "Customer RFM & Quoting-Pipeline Strategy",
    meta: "Data-driven strategy to support a 10% revenue-growth goal",
    blurb:
      "As one of six analysts on a cross-university team, I helped a precision manufacturer answer a single question: how to optimize its quoting pipeline to reach a 10% revenue-growth goal in one year. We turned ~171 quotes across medical and high-tech verticals into an RFM model, 16 correlation studies, and a forecasting model — then distilled it all into three board-ready plays.",
    image: "/images/brunk-hero.svg",
    imageContain: true,
    highlights: [
      "Built an RFM (recency–frequency–monetary) model and clustered 60+ B2B customers across medical & high-tech verticals to score loyalty and revenue potential.",
      "Ran 16 correlation & regression models linking RFM to production, tooling, automation, and prototyping revenue — finding RFM explains ~51% of production revenue in Medical (r = 0.71) but is near-zero in High-Tech (r = 0.05).",
      "Quantified the quoting pipeline: Category B quotes generate ~7.4× the revenue per quote of Category A — at a nearly identical ~11% win rate.",
      "Showed prototyping has no measurable effect on win rate (~11% with or without), reframing it as a follow-through problem rather than a volume problem.",
      "Built a four-revenue-stream forecasting model (toggleable by revenue and industry type) and a risk-analysis matrix for each recommendation.",
    ],
    tags: ["RFM Segmentation", "Regression Analysis", "Forecasting", "Strategy"],
    band: [
      { n: "171", l: "Quotes analyzed (112 medical · 59 high-tech)" },
      { n: "16", l: "Correlation & regression models" },
      { n: "7.4×", l: "Category B vs A revenue / quote" },
      { n: "10%", l: "Revenue-growth goal we targeted" },
    ],
    flow: {
      title: "How we approached it",
      steps: [
        {
          num: 1,
          title: "Segment",
          body: "Scored 60+ customers with an RFM model and clustered them by vertical, separating loyal, high-value 'Champions' from low-loyalty accounts.",
        },
        {
          num: 2,
          title: "Model",
          body: "Ran 16 correlation and regression models plus a four-stream forecasting model to find which behaviors actually predict revenue in each vertical.",
        },
        {
          num: 3,
          title: "Recommend",
          body: "Translated the analysis into three prioritized plays — each with a risk matrix and concrete next steps the client could action immediately.",
        },
      ],
    },
    twoCol: [
      {
        title: "What I did — Analysis",
        body: "Contributed to the RFM scoring, clustering, and correlation work in Excel — building and interpreting regressions across production, tooling, automation, and prototyping revenue for both verticals.",
      },
      {
        title: "What we delivered — Strategy",
        body: "Three board-ready recommendations: re-engage mid-to-high-RFM 'waiting' clients, reallocate quoting effort toward Category B, and stop over-investing in prototypes that don't move win rate.",
      },
    ],
    gallery: [
      {
        src: "/images/brunk-categories.svg",
        caption: "Quote-category analysis: Category B drives ~7.4× the revenue per quote of Category A at a similar win rate.",
        contain: true,
      },
      {
        src: "/images/brunk-correlation.svg",
        caption: "One of 16 correlation models — RFM strongly predicts production revenue in Medical (r = 0.71), but not in High-Tech (r = 0.05).",
        contain: true,
      },
    ],
    stack: ["RFM Modeling", "Correlation & Regression", "Clustering", "Excel", "Revenue Forecasting", "Risk Analysis"],
    note: "Performed under NDA. Customer identities and the client's actual revenue figures are confidential — the charts here are sanitized recreations using indexed values and aggregate statistics only.",
  },
];
