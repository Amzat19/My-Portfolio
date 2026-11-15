/** Home page copy. Layout lives in src/app/page.tsx. */
export const home = {
  employersLabel: "Experience at",
  employers: ["TheGigs", "Blucera", "AllofHealth", "Omnivate AI"],

  proof: [
    { value: "~40%", label: "smaller initial bundle", where: "TheGigs" },
    { value: "~60%", label: "less UI lag during uploads", where: "Blucera" },
    { value: "~25%", label: "faster record-heavy views", where: "AllofHealth" },
    { value: "5", label: "user roles, each kept to its own data", where: "AllofHealth" },
  ],

  work: {
    kicker: "Selected work",
    title: "Products I’ve shipped",
    intro:
      "Three production platforms where I worked across the whole frontend, not a single feature. Each case study covers the product, what I worked on and the engineering decisions behind it.",
    cta: "Read the case study",
  },

  skills: {
    kicker: "What I bring",
    title: "How I help teams ship",
    intro:
      "Beyond shipping features, I agree API contracts with backend before building, review code carefully, write down decisions and their trade-offs, and leave behind standards the rest of the team can follow.",
  },

  experience: {
    kicker: "Experience",
    title: "Where I’ve worked",
    intro: "Working remotely since 2022, with product teams in London, Nairobi and Lagos.",
  },

  automation: {
    kicker: "Beyond the frontend",
    title: "AI automation, built to be reliable",
    intro:
      "At Omnivate AI (Apr — Nov 2026) I worked as an AI GTM Engineer, building the Python and n8n systems behind AI-driven go-to-market pipelines.",
  },

  contact: {
    kicker: "Contact",
    title: "Hiring a frontend engineer? Let’s talk.",
    body: "I’m open to frontend roles, remote anywhere. I’m based in Lagos (UTC+1) and used to working with teams across European time zones.",
  },
} as const;
