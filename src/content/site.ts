/**
 * Single source of truth for identity, links and availability.
 * Change a value here and it updates the header, footer, metadata and OG images.
 */
export const site = {
  name: "Amzat Sheriff",
  firstName: "Amzat",
  role: "Senior Frontend Engineer",
  url: "https://amzat-portfolio.netlify.app",
  description:
    "Senior frontend engineer with 5+ years of React, Next.js and TypeScript, working across marketplaces, business software and healthcare. Open to remote frontend roles worldwide.",
  /** Hero headline; the second part gets the highlighter. */
  headline: { lead: "I build fast, reliable frontends for", marked: "complex products." },
  heroLine: "I build fast, reliable frontends for complex products.",
  intro:
    "I’m Amzat, a senior frontend engineer with 5+ years of React, Next.js and TypeScript. I’ve worked across the whole frontend of a creative marketplace, a business software suite and a healthcare platform, and I care most about what users only notice when it’s missing: speed, correctness and clarity.",
  location: "Lagos, Nigeria",
  timezone: "UTC+1",
  availability: "Open to frontend roles",
  remote: "Working remotely since 2022, with teams in London, Nairobi and Lagos",
  email: "kunmiamzat1@gmail.com",
  links: {
    github: "https://github.com/Amzat19",
    linkedin: "https://www.linkedin.com/in/kunmi-amzat",
  },
  /** Hosted on Google Drive so it is always the latest version. */
  resume: "https://drive.google.com/file/d/13Jm6J-AAovrVysk-CcUeU6GcGgRhF6Op/view?usp=sharing",
} as const;
