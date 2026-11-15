import type { Role } from "./types";

/** Work history, newest first. Mirrors the résumé. */
export const experience: Role[] = [
  {
    company: "TheGigs",
    title: "Software Engineer",
    period: "Mar 2025 — Present",
    location: "Remote",
    summary:
      "Building across the web app, from gigs and the marketplace to Places. Designed the real-time messaging layer and cut the initial bundle by ~40%.",
    caseStudy: "thegigs",
  },
  {
    company: "Omnivate AI",
    title: "AI GTM Engineer",
    period: "Apr 2026 — Nov 2026",
    location: "London, UK · Remote",
    summary:
      "Built Python and n8n automation for AI-driven go-to-market pipelines, designed to be idempotent and retry-safe.",
  },
  {
    company: "Blucera",
    title: "Frontend Engineer",
    period: "Oct 2023 — Feb 2025",
    location: "Remote",
    summary:
      "Built across the user and admin dashboards. Set the team’s frontend standards, cut UI lag by ~60% and made loads ~40% faster.",
    caseStudy: "blucera",
  },
  {
    company: "AllofHealth",
    title: "Frontend Engineer",
    period: "Apr 2023 — Oct 2024",
    location: "Remote",
    summary:
      "Worked on all five role-based dashboards with strict authorization boundaries, and made record-heavy views ~25% faster.",
    caseStudy: "allofhealth",
  },
  {
    company: "Game Huz (Pentria)",
    title: "Frontend Developer",
    period: "Jan 2023 — Mar 2023",
    location: "Remote",
    summary: "Built an event booking app on a reusable React component library and restructured styling with Sass.",
  },
  {
    company: "HNG",
    title: "Frontend Developer Intern · Finalist",
    period: "Oct 2022 — Dec 2022",
    location: "Lagos · Remote",
    summary: "Built pixel-accurate React and TypeScript UI and shared components for a large social scheduling product.",
  },
  {
    company: "Smart Finance",
    title: "Fullstack Engineer",
    period: "Aug 2022 — Oct 2022",
    location: "Nairobi, Kenya · Remote",
    summary: "Designed MongoDB schemas and indexing (~40% faster queries) and built the React–Node REST integration.",
  },
  {
    company: "Freelance",
    title: "Frontend Developer",
    period: "Aug 2021 — Aug 2022",
    location: "Lagos",
    summary: "Delivered client web apps in React and Vue with GraphQL and REST integrations.",
  },
];

/** What I'm hired for, grounded in the work above. */
export const capabilities: { title: string; body: string; proof: string }[] = [
  {
    title: "Real-time interfaces",
    body: "Messaging and notifications that stay correct through dropped connections, with ordered messages and optimistic updates reconciled against the server.",
    proof: "TheGigs",
  },
  {
    title: "Web performance",
    body: "Faster first loads through code splitting and lazy loading, heavy work moved to Web Workers, and regular audits aimed at people on slow mobile networks.",
    proof: "TheGigs · Blucera",
  },
  {
    title: "Multi-role platforms",
    body: "Products shared by many kinds of users, with authorization and data isolation built into the architecture and lean GraphQL queries.",
    proof: "AllofHealth · TheGigs",
  },
  {
    title: "Team foundations",
    body: "Coding standards and component patterns adopted team-wide, careful code review, and end-to-end tests and CI that keep the main branch deployable.",
    proof: "Blucera · TheGigs",
  },
];

export const toolkit: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["TypeScript", "JavaScript", "Python", "HTML", "CSS"] },
  { label: "Frontend", items: ["React", "Next.js", "Vue", "Nuxt", "Redux", "Vuex", "Pinia"] },
  { label: "Data", items: ["GraphQL", "REST", "WebSockets", "Node.js", "Express", "MongoDB"] },
  { label: "Styling", items: ["Tailwind CSS", "SCSS", "Styled Components"] },
  { label: "Delivery", items: ["End-to-end testing", "Automated testing", "CI/CD", "Code review"] },
  { label: "Automation", items: ["Python", "n8n", "Workflow automation"] },
];

export const education = {
  school: "University of Ibadan",
  degree: "B.Sc., Industrial and Production Engineering",
};

export const automation = {
  company: "Omnivate AI",
  role: "AI GTM Engineer",
  period: "Apr — Nov 2026",
  points: [
    "Replaced manual, multi-step pipelines with Python and n8n automation: sourcing, enrichment, deduplication, scheduling and response routing.",
    "Designed every workflow to be idempotent and retry-safe, so a re-run never duplicates work.",
    "Ran email infrastructure across multiple domains and inboxes, diagnosing deliverability through DNS, authentication and reputation signals.",
    "Treated campaigns as instrumented systems: controlled variations on targeting and sequencing, iterated on measured results.",
  ],
};
