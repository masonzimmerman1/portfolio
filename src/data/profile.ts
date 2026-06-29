import type { Stat, ContactLink } from "../types";

export const profile = {
  name: "Mason Zimmerman",
  logoFirst: "Mason",
  logoLast: "Zimmerman",
  eyebrow: "Finance & AI · USC '28",
  tag: "Finance student & AI builder turning data into better financial decisions.",
  lede: "I study Finance at USC Marshall with a minor in AI Applications through Viterbi. I work at the intersection of business, technology, and wealth management — building dashboards, financial models, and AI-driven tools that help people make smarter decisions with their money.",
  headshot: "/images/headshot_mason_zimmerman.jpg",
  uscLogo: "/images/logos/usc.svg",
  linkedin: "https://www.linkedin.com/in/mason-zimmerman1/",
  email: "masonzimmerman1@gmail.com",
  resumeUrl: "/resume.pdf",
};

export const stats: Stat[] = [
  { n: "3.95", l: "USC GPA · Dean's List" },
  { n: "2", nSuffix: "×", l: "Degrees: Finance + AI" },
];

export const about = {
  paragraphs: [
    "I am a Business Administration student at USC's Marshall School of Business, pursuing a STEM-designated B.S. with a minor in AI Applications through the Viterbi School of Engineering. I am drawn to the intersection of business strategy and technology, and to how data-driven insights sharpen decision-making and drive measurable outcomes.",
    "As an active member of the Marshall Artificial Intelligence Association, I help design AI-enabled tools that translate product concepts into real economic outcomes. My hands-on experience spans strategy consulting and applied technology, from leading finance workstreams on client engagements to building a live business metrics dashboard with an AI-powered insights layer. I am sharpening my skills in problem structuring, quantitative analysis, and turning complex data into clear, actionable recommendations.",
    "Outside of academics, I enjoy golfing, basketball, hiking, and the outdoors. I am always looking to connect with professionals across consulting, technology, and business strategy.",
  ],
  interestChips: ["⛳ Golf", "🎿 Skiing", "🏀 Basketball", "🥾 Hiking"],
  golfCard: {
    image: "/images/chip.jpg",
    caption:
      "I captained Jesuit High School (Portland, OR) to the OSAA Class 6A boys golf state championship and finished 3rd individually at the state tournament, playing to a +3.1 handicap.",
    captionLead: "State champion.",
  },
  dives: [
    {
      lead: "On the course.",
      body: "Competitive golf shaped how I work — composure under pressure, discipline in preparation, and the patience to grind out a result one shot at a time. I carried that into the game off the course too, becoming the youngest-ever Certified Professional Club Fitter at my course and driving $300K+ in custom-equipment sales.",
    },
    {
      lead: "Off the course.",
      body: "I grew up skiing the Pacific Northwest, play and follow basketball year-round, and spend as much time as I can hiking and exploring the outdoors. I'm happiest when I'm competing, learning something new, or out in the mountains.",
    },
  ],
};

export const contact = {
  intro:
    "I'm always glad to talk finance, AI, wealth management, or a good round of golf. Reach out anytime.",
  links: [
    { label: "School email", value: "mrzimmer@usc.edu", href: "mailto:mrzimmer@usc.edu" },
    { label: "Personal email", value: "masonzimmerman1@gmail.com", href: "mailto:masonzimmerman1@gmail.com" },
    { label: "Phone", value: "(503) 828-4949", href: "tel:+15038284949" },
  ] satisfies ContactLink[],
};
