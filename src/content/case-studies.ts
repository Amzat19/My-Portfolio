import type { CaseStudy } from "./types";

/**
 * Company write-ups. Facts and numbers come from the résumé; product areas
 * come from each product's own site.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "thegigs",
    company: "TheGigs",
    companyUrl: "https://thegigs.co",
    role: "Software Engineer",
    period: "Mar 2025 — Present",
    location: "Remote",
    product: "A marketplace for creative work, products and spaces",
    title: "A creative marketplace that feels instant, even on a slow connection",
    summary:
      "I’ve shipped work in nearly every corner of TheGigs’ web app. I designed its real-time messaging layer and cut the initial bundle by ~40% for people on low-bandwidth phones.",
    overview: [
      "TheGigs brings creative work into one place. People post and find gigs, hire a single talent or a whole team through Full Gigs, buy, rent and sell products in the marketplace, and book studios and venues through Places.",
      "Since joining in March 2025 I’ve contributed to almost every part of the web app, working closely with backend engineers and design. The work I’m proudest of is the real-time layer, and the performance work that made the app feel quick on low-bandwidth phones.",
    ],
    areas: [
      { name: "Gigs and Full Gigs", description: "Posting, finding and staffing gigs, including team-based Full Gigs." },
      { name: "Talent discovery", description: "Search and category browsing across talents, jobs, projects and services." },
      { name: "Marketplace", description: "Listing, buying and renting creative products." },
      { name: "Places", description: "Finding and booking studios, venues and creative spaces." },
      { name: "Profiles, projects and services", description: "Public profiles and the flows for posting projects and services." },
      { name: "Messaging and notifications", description: "Real-time conversations and alerts across the product." },
    ],
    outcomes: [{ value: "~40%", label: "smaller initial bundle" }],
    highlights: [
      {
        title: "Real-time messaging people can trust",
        body: [
          "I designed and shipped the messaging and notification layer on Laravel Echo and WebSockets. It handles the full connection lifecycle instead of assuming the socket is always up.",
          "Messages appear the moment they’re sent. After a reconnect, optimistic client state is reconciled against the server and message order is preserved, so a conversation always matches what was actually delivered.",
        ],
        visual: "realtime-demo",
        visualNote:
          "A small demo of the pattern, written for this page rather than taken from TheGigs. Send a message, drop the connection, send a couple more, then reconnect.",
      },
      {
        title: "A faster first load on slow networks",
        body: [
          "The app used to ship as one large bundle, so every visitor paid for code they might never use. Route-level code splitting and lazy loading cut the initial bundle by about 40%, which noticeably improved time-to-interactive on low-bandwidth mobile connections.",
        ],
      },
      {
        title: "Contracts before code",
        body: [
          "I work with backend engineers to agree API contracts against the frontend’s state-management boundaries before features are built. It has cut integration defects and rework across releases.",
        ],
      },
      {
        title: "A codebase that stays shippable",
        body: [
          "I review my teammates’ pull requests and built out automated tests and CI workflows, so a growing production codebase stays continuously deployable.",
        ],
      },
    ],
    practices: [
      "API contracts agreed up front",
      "Code review across the team",
      "Automated tests and CI",
    ],
    decisions: [
      {
        title: "Optimistic UI over waiting for the server",
        body: "It means briefly holding two versions of the truth. The payoff is a conversation that feels instant; the price is reconciliation logic that has to get ordering right, and that is the code that most deserves tests.",
      },
      {
        title: "Splitting by route",
        body: "Code splitting moves some cost from the first load to navigation. On slow mobile networks, paying a little per route beats paying for everything up front.",
      },
    ],
    impact:
      "A marketplace frontend that loads quickly on slow phones, stays correct when the network doesn’t, and ships continuously.",
    stack: ["React", "TypeScript", "Laravel Echo", "WebSockets", "CI"],
    image: {
      name: "thegigs",
      width: 1600,
      height: 747,
      alt: "TheGigs home page: “Discover, Collaborate, Trade” with photos of creatives and spaces.",
    },
    tint: "#e9f6d8",
  },
  {
    slug: "blucera",
    company: "Blucera",
    companyUrl: "https://blucera.com",
    role: "Frontend Engineer",
    period: "Oct 2023 — Feb 2025",
    location: "Remote",
    product: "An all-in-one platform for running a business",
    title: "A business platform that stays fast and consistent as it grows",
    summary:
      "For sixteen months I built across Blucera’s user and admin dashboards and wrote the frontend standards the team adopted. Along the way I cut UI lag during uploads by ~60% and made pages load ~40% faster.",
    overview: [
      "Blucera gives businesses one place to run their operations: tools for inventory, bookkeeping, sales, expenses, personnel and payroll; an eVault for important documents; training courses; and a marketplace for digital products and services. Each comes with user and administrative views.",
      "From October 2023 to February 2025 I built across those dashboards alongside engineers in several time zones. Shipping features was only part of the job. The rest was making the codebase consistent and fast enough to keep growing.",
    ],
    areas: [
      { name: "Business tools", description: "Inventory, bookkeeping, sales analytics, expenses, personnel and payroll." },
      { name: "eVault", description: "Uploading and safely storing important personal and business documents." },
      { name: "Training", description: "Browsing and taking courses." },
      { name: "Marketplace", description: "Discovering and selling digital products and services." },
      { name: "Admin dashboard", description: "The separate administrative views for running the platform." },
      { name: "Email templates", description: "Responsive emails that render consistently in Gmail, Outlook and other clients." },
    ],
    outcomes: [
      { value: "~60%", label: "less observed UI lag" },
      { value: "~40%", label: "faster load times" },
    ],
    highlights: [
      {
        title: "Heavy image work, off the main thread",
        body: [
          "Large images were processed on the main thread, so the interface froze during uploads. I architected an upload and caching pipeline on Web Workers that moves that work off the main thread. Observed UI lag dropped by about 60%.",
        ],
        visual: "worker-demo",
        visualNote:
          "A small demo of the idea, written for this page rather than taken from Blucera. Both buttons run the same CPU-heavy job; watch the dot.",
      },
      {
        title: "Performance as a habit",
        body: [
          "I ran systematic performance audits with Lighthouse and PageSpeed Insights and worked through what they found. Load times improved by about 40%.",
        ],
      },
      {
        title: "Standards a distributed team could share",
        body: [
          "I defined the frontend coding standards and component architecture patterns the team adopted, giving contributions from engineers in every time zone the same structure.",
        ],
      },
      {
        title: "Regressions caught before release",
        body: ["I set up end-to-end testing workflows so regressions surfaced before a release, not in production."],
      },
    ],
    practices: [
      "Team-wide coding standards",
      "End-to-end tests before release",
      "Regular performance audits",
    ],
    decisions: [
      {
        title: "What belongs in a Web Worker",
        body: "A worker adds a thread boundary: data has to cross it and errors need handling on both sides. That cost is worth paying for heavy, repeated work like image processing, and for very little else.",
      },
    ],
    impact:
      "A broad, multi-product dashboard that stays responsive under heavy use, loads faster, and is built the same way by everyone who touches it.",
    stack: ["Web Workers", "Lighthouse", "PageSpeed Insights", "End-to-end testing"],
    image: {
      name: "blucera",
      width: 1600,
      height: 755,
      alt: "Blucera home page: “We power firms and people with markets, tools, knowledge & AI.”",
    },
    tint: "#ddf3e2",
  },
  {
    slug: "allofhealth",
    company: "AllofHealth",
    companyUrl: "https://allofhealth.africa",
    role: "Frontend Engineer",
    period: "Apr 2023 — Oct 2024",
    location: "Remote",
    product: "A secure, multi-tenant healthcare platform",
    title: "A healthcare platform where every role sees exactly what it should",
    summary:
      "I worked on all five of AllofHealth’s dashboards (patients, doctors, pharmacists, institutions and admins) and kept strict authorization boundaries between them. I also made record-heavy views ~25% faster and designed data visualisations with clinicians.",
    overview: [
      "AllofHealth gives patients, doctors, pharmacists and healthcare institutions secure, shared access to medical records, with consultations and prescriptions built around them. Sensitive data is handled through smart contracts and decentralised storage, so it stays tamper-evident.",
      "I contributed to the frontend architecture and to most of the product’s dashboards, and worked directly with clinicians on the views they rely on.",
    ],
    areas: [
      { name: "Patient dashboard", description: "Records, health journal, medications and consultations." },
      { name: "Doctor dashboard", description: "Consultations and access to the records of patients in their care." },
      { name: "Pharmacist and institution views", description: "The workflows for pharmacies and healthcare institutions." },
      { name: "Admin dashboard", description: "Overseeing users and activity across the platform." },
      { name: "Clinical data visualisations", description: "Charts designed with clinicians around real diagnostic workflows." },
      { name: "Secure records", description: "Smart contracts and decentralised storage for tamper-evident patient data." },
    ],
    outcomes: [
      { value: "5", label: "user roles with isolated data" },
      { value: "~25%", label: "faster record-heavy views" },
    ],
    highlights: [
      {
        title: "Five roles, strict boundaries",
        body: [
          "A record shown to the wrong person is a serious failure in healthcare. I contributed to the frontend architecture for all five roles, enforcing data-isolation and authorization boundaries so clinical records surfaced only to authorized parties.",
        ],
      },
      {
        title: "Fetch only what the screen shows",
        body: [
          "Record-heavy views were requesting far more than they displayed. I implemented GraphQL query strategies that eliminated the over-fetching and improved load performance by about 25%.",
        ],
        visual: "query-diagram",
      },
      {
        title: "State you can audit",
        body: [
          "I structured Redux state so workflows stayed predictable and auditable across concurrent, multi-user sessions.",
        ],
      },
      {
        title: "Charts designed with clinicians",
        body: ["I worked directly with clinicians to design data visualisations that follow real diagnostic workflows."],
      },
    ],
    practices: [
      "Views designed with clinicians",
      "Authorization as architecture",
      "Predictable, auditable state",
    ],
    decisions: [
      {
        title: "Tight, per-view queries",
        body: "They mean more queries to maintain. On record-heavy screens the trade is clearly worth it: every unused field is paid for on every load.",
      },
    ],
    impact:
      "A healthcare product where each of five roles sees only its own data, record-heavy views load faster, and the charts match how clinicians actually work.",
    stack: ["React", "Redux", "GraphQL", "Smart contracts", "Decentralised storage"],
    image: {
      name: "allofhealth",
      width: 1600,
      height: 746,
      alt: "AllofHealth home page: “Reclaim Control of Your Health, Securely.” above a patient dashboard.",
    },
    tint: "#d6ebe8",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
