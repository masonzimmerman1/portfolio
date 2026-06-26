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
      "As part of a cross-university analyst team, I helped a precision manufacturer figure out which clients, quotes, and strategies actually drive revenue — then turned the analysis into clear, board-ready recommendations.",
    image: "/images/maiaprez.jpg",
    highlights: [
      "Segmented 60+ B2B customers across medical & high-tech verticals with an RFM scoring model.",
      "Ran 16 correlation models and a quote-category analysis — found one quote type drives ~7.4× more revenue per quote at the same ~11% win rate.",
      "Showed prototyping had no measurable effect on win rate, reframing where the team should invest.",
      "Delivered three core recommendations: re-engage quiet high-value clients, reallocate toward high-yield quotes, and finish stalled prototypes instead of starting new ones.",
    ],
    tags: ["RFM Segmentation", "Correlation Modeling", "Excel", "Strategy"],
    note: "Note: the client's customer names and revenue figures are confidential and omitted — only aggregate, non-identifying findings are shown.",
  },
];
