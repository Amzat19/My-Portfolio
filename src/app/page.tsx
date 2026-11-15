import Link from "next/link";
import { BrowserFrame } from "@/components/browser-frame";
import { Container } from "@/components/container";
import { IMAGE_WIDTHS, Picture } from "@/components/picture";
import { Section } from "@/components/section";
import { caseStudies } from "@/content/case-studies";
import { automation, capabilities, education, experience, toolkit } from "@/content/experience";
import type { Role } from "@/content/types";
import { home } from "@/content/home";
import { site } from "@/content/site";

export default function Home() {
  return (
    <>
      <Hero />
      <Proof />
      <Work />
      <Capabilities />
      <Experience />
      <Automation />
      <Contact />
    </>
  );
}

function Hero() {
  return (
    <div className="hero-backdrop relative -mt-16 overflow-hidden pt-16">
    <Container className="relative grid items-center gap-10 pt-12 pb-14 sm:pt-20 lg:grid-cols-[1fr_21rem] lg:gap-16 lg:pt-24 lg:pb-20">
      <div>
        <p className="enter border-rule bg-paper-raised/80 text-ink-2 inline-flex items-center gap-2 rounded-full border py-1 pr-3 pl-2 text-sm shadow-sm">
          <span className="relative flex size-2" aria-hidden="true">
            <span className="absolute inset-0 rounded-full bg-[#4bb543] motion-safe:animate-ping motion-safe:[animation-duration:2.5s]" />
            <span className="relative size-2 rounded-full bg-[#4bb543]" />
          </span>
          {site.availability} · Remote, worldwide
        </p>
        <h1 className="font-display mt-6 text-[2.6rem] leading-[1.04] tracking-[-0.03em] text-balance sm:text-6xl lg:text-[4.25rem]">
          {site.headline.lead} <span className="mark">{site.headline.marked}</span>
        </h1>
        <p className="enter enter-2 text-ink-2 mt-6 max-w-2xl text-lg leading-relaxed text-pretty sm:text-xl">
          {site.intro}
        </p>
        <div className="enter enter-3 mt-8 flex flex-wrap items-center gap-3">
          <Link
            prefetch={false}
            href="/#work"
            className="bg-ink text-paper hover:bg-accent hover:text-accent-ink inline-flex h-12 items-center gap-2 rounded-full px-6 font-medium shadow-[0_8px_20px_-8px_rgb(12_14_19/0.5)] transition-colors"
          >
            View my work <span aria-hidden="true">↓</span>
          </Link>
          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="border-rule hover:border-ink bg-paper-raised inline-flex h-12 items-center gap-2 rounded-full border px-6 font-medium transition-colors"
          >
            Résumé <span aria-hidden="true">↗</span>
            <span className="sr-only">(opens in a new tab)</span>
          </a>
          <span className="flex">
          <SocialLink href={site.links.github} label="GitHub">
            <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
          </SocialLink>
          <SocialLink href={site.links.linkedin} label="LinkedIn">
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
          </SocialLink>
          </span>
        </div>
        <div className="enter enter-3 mt-10">
          <p className="text-ink-3 text-sm">{home.employersLabel}</p>
          <ul className="text-ink-2 mt-2 flex flex-wrap gap-x-6 gap-y-1 font-display text-lg tracking-tight">
            {home.employers.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
      <figure className="enter enter-2 relative w-full max-w-[15rem] sm:max-w-xs lg:max-w-none">
        <div
          className="from-accent/25 to-mark absolute -inset-2 rotate-3 rounded-[2.25rem] bg-gradient-to-br"
          aria-hidden="true"
        />
        <Picture
          image={{ name: "portrait", width: 640, height: 800, alt: `${site.name}, smiling, outdoors in Lagos` }}
          widths={IMAGE_WIDTHS.portrait}
          sizes="(min-width: 1024px) 21rem, 20rem"
          priority
          className="ring-ink/10 relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-xl ring-1"
        />
        <figcaption className="bg-paper-raised ring-ink/10 absolute -bottom-4 left-4 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm shadow-lg ring-1">
          <svg aria-hidden="true" viewBox="0 0 16 16" className="text-accent size-4" fill="currentColor">
            <path d="M8 1.5a4.75 4.75 0 0 0-4.75 4.75c0 3.4 4.75 8.25 4.75 8.25s4.75-4.85 4.75-8.25A4.75 4.75 0 0 0 8 1.5Zm0 6.5a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5Z" />
          </svg>
          {site.location} · {site.timezone}
        </figcaption>
      </figure>
    </Container>
    </div>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      rel="me"
      aria-label={label}
      className="text-ink-2 hover:text-ink hover:bg-paper-raised inline-flex size-12 items-center justify-center rounded-full transition-colors"
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="currentColor">
        {children}
      </svg>
    </a>
  );
}

function Proof() {
  return (
    <Container>
      <h2 className="sr-only">Results at a glance</h2>
      <ul className="bg-rule ring-rule grid grid-cols-2 gap-px overflow-hidden rounded-3xl shadow-[0_1px_2px_rgb(0_0_0/0.04),0_16px_40px_-24px_rgb(0_0_0/0.25)] ring-1 lg:grid-cols-4">
        {home.proof.map((p) => (
          <li key={p.label} className="bg-paper-raised p-5 sm:p-7">
            <p className="font-display text-4xl tracking-tight sm:text-5xl">{p.value}</p>
            <p className="text-ink-2 mt-2 text-sm leading-snug sm:text-base">{p.label}</p>
            <p className="text-accent mt-1.5 text-xs font-medium sm:text-sm">{p.where}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
}

function Work() {
  return (
    <Section
      id="work"
      kicker={home.work.kicker}
      title={home.work.title}
      intro={home.work.intro}
    >
      <ol className="space-y-8 sm:space-y-12">
        {caseStudies.map((study, i) => (
          <li key={study.slug} className="reveal">
            <article
              className="group tint ring-ink/10 relative grid overflow-hidden rounded-3xl shadow-[0_1px_2px_rgb(0_0_0/0.04)] ring-1 transition-shadow duration-300 hover:shadow-[0_24px_48px_-24px_rgb(0_0_0/0.3)] lg:grid-cols-2"
              style={{ "--tint": study.tint } as React.CSSProperties}
            >
              <div className={`p-4 pb-0 sm:p-8 sm:pb-0 lg:flex lg:items-center lg:pb-8 ${i % 2 ? "lg:order-2" : ""}`}>
                <BrowserFrame
                  url={study.companyUrl}
                  className="w-full transition-transform duration-500 ease-out group-hover:-translate-y-1"
                >
                  <Picture
                    image={study.image}
                    widths={IMAGE_WIDTHS.wide}
                    sizes="(min-width: 1024px) 34rem, calc(100vw - 4rem)"
                    className="aspect-[16/9] h-auto w-full object-cover object-top"
                  />
                </BrowserFrame>
              </div>
              <div className="bg-paper-raised flex flex-col p-6 sm:p-10">
                <p className="text-ink-3 text-sm">
                  <span className="text-ink font-semibold">{study.company}</span> · {study.role} · {study.period}
                </p>
                <h3 className="font-display mt-3 text-2xl leading-tight tracking-tight text-balance sm:text-3xl">
                  <Link
                    prefetch={false}
                    href={`/work/${study.slug}/`}
                    className="after:absolute after:inset-0 after:rounded-3xl"
                  >
                    {study.title}
                  </Link>
                </h3>
                <p className="text-ink-2 mt-3 leading-relaxed text-pretty">{study.summary}</p>
                <p className="text-ink-3 mt-5 text-xs font-semibold tracking-wide uppercase">Product areas</p>
                <ul className="mt-2 flex flex-wrap gap-1.5">
                  {study.areas.slice(0, 5).map((area) => (
                    <li
                      key={area.name}
                      className="bg-paper-sunk text-ink-2 rounded-full px-2.5 py-0.5 text-xs font-medium"
                    >
                      {area.name}
                    </li>
                  ))}
                </ul>
                <dl className="mt-6 grid max-w-md grid-cols-2 gap-4">
                  {study.outcomes.map((o) => (
                    <div key={o.label} className="bg-paper flex flex-col rounded-2xl p-4">
                      <dt className="text-ink-2 mt-1 text-sm leading-snug">{o.label}</dt>
                      <dd className="font-display -order-1 text-3xl tracking-tight">{o.value}</dd>
                    </div>
                  ))}
                </dl>
                <p className="text-accent mt-auto flex items-center gap-1 pt-6 font-medium" aria-hidden="true">
                  {home.work.cta}
                  <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </p>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}

const capabilityIcons: Record<string, React.ReactElement> = {
  "Real-time interfaces": <path d="M3 12h4l3-8 4 16 3-8h4" />,
  "Web performance": <path d="M12 13l4-4M4.5 18a9 9 0 1 1 15 0" />,
  "Multi-role platforms": (
    <>
      <circle cx="8" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M2.5 19a5.5 5.5 0 0 1 11 0M14 19a4 4 0 0 1 7.5-1.5" />
    </>
  ),
  "Team foundations": <path d="M4 20V10l8-6 8 6v10M9 20v-6h6v6" />,
};

function Capabilities() {
  return (
    <Section
      id="skills"
      kicker={home.skills.kicker}
      title={home.skills.title}
      intro={home.skills.intro}
      tone="sunk"
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((c) => (
          <li
            key={c.title}
            className="reveal bg-paper-raised ring-ink/10 rounded-3xl p-6 shadow-[0_1px_2px_rgb(0_0_0/0.04)] ring-1"
          >
            <span className="bg-accent-soft text-accent grid size-11 place-items-center rounded-2xl">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="size-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {capabilityIcons[c.title]}
              </svg>
            </span>
            <h3 className="font-display mt-5 text-xl tracking-tight">{c.title}</h3>
            <p className="text-ink-2 mt-2 leading-relaxed">{c.body}</p>
            <p className="text-ink-3 mt-3 text-sm">
              Shipped at <span className="text-ink font-medium">{c.proof}</span>
            </p>
          </li>
        ))}
      </ul>
      <h3 className="font-display mt-16 text-2xl tracking-tight">Toolkit</h3>
      <div className="reveal mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
        {toolkit.map((group) => (
          <div key={group.label}>
            <h4 className="text-ink-3 text-sm font-semibold">{group.label}</h4>
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <li key={item} className="bg-paper-raised ring-ink/10 rounded-full px-3 py-1 text-sm ring-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

function RoleRow({ role, compact = false }: { role: Role; compact?: boolean }) {
  const current = role.period.includes("Present");
  return (
    <li className="border-rule grid gap-x-8 gap-y-1 border-t py-5 sm:grid-cols-[11rem_1fr]">
      <p className="text-ink-3 flex items-center gap-2 self-start text-sm tabular-nums sm:pt-1">
        {current && <span className="size-2 rounded-full bg-[#4bb543]" aria-hidden="true" />}
        {role.period}
      </p>
      <div>
        <h3 className={compact ? "font-semibold" : "text-lg font-semibold"}>
          {role.company} <span className="text-ink-3 font-normal">· {role.title}</span>
        </h3>
        <p className={`text-ink-2 mt-1 max-w-2xl leading-relaxed ${compact ? "text-sm" : ""}`}>{role.summary}</p>
        {role.caseStudy && (
          <Link
            prefetch={false}
            href={`/work/${role.caseStudy}/`}
            className="text-accent mt-1 inline-block py-1 text-sm font-medium hover:underline"
          >
            Read the case study<span className="sr-only">: {role.company}</span> →
          </Link>
        )}
      </div>
    </li>
  );
}

function Experience() {
  const recent = experience.slice(0, 4);
  const earlier = experience.slice(4);
  return (
    <Section
      id="experience"
      kicker={home.experience.kicker}
      title={home.experience.title}
      intro={home.experience.intro}
    >
      <ol className="reveal">
        {recent.map((role) => (
          <RoleRow key={role.company} role={role} />
        ))}
      </ol>
      <h3 className="text-ink-3 mt-12 text-sm font-semibold">Earlier</h3>
      <ol className="reveal mt-2">
        {earlier.map((role) => (
          <RoleRow key={role.company} role={role} compact />
        ))}
      </ol>
      <p className="border-rule text-ink-2 border-t pt-5">
        <span className="text-ink font-semibold">{education.school}</span> · {education.degree}
      </p>
    </Section>
  );
}

const pipeline = ["Source", "Enrich", "Deduplicate", "Schedule", "Route replies"];

function Automation() {
  return (
    <Section
      id="automation"
      kicker={home.automation.kicker}
      title={home.automation.title}
      intro={home.automation.intro}
    >
      <figure className="reveal bg-paper-sunk relative overflow-hidden rounded-3xl p-5 sm:p-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 [background-image:radial-gradient(var(--rule)_1.2px,transparent_1.2px)] [background-size:18px_18px]"
        />
        <ol className="relative flex flex-col gap-0 md:flex-row md:items-center" aria-label="Pipeline steps">
          {pipeline.map((step, i) => (
            <li key={step} className="flex flex-col items-start md:flex-1 md:flex-row md:items-center md:last:flex-none">
              <span className="bg-paper-raised ring-ink/10 flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm font-medium whitespace-nowrap shadow-sm ring-1">
                <span className="bg-mark ring-ink/20 size-2.5 rounded-full ring-1" aria-hidden="true" />
                {step}
              </span>
              {i < pipeline.length - 1 && (
                <span aria-hidden="true" className="bg-ink-3/50 ml-6 h-4 w-px md:mx-2 md:h-px md:w-auto md:flex-1" />
              )}
            </li>
          ))}
        </ol>
        <figcaption className="text-ink-2 relative mt-6 flex flex-wrap gap-2 text-sm">
          <span className="bg-paper-raised ring-ink/10 rounded-full px-3 py-1 ring-1">Python + n8n</span>
          <span className="bg-paper-raised ring-ink/10 rounded-full px-3 py-1 ring-1">Idempotent</span>
          <span className="bg-paper-raised ring-ink/10 rounded-full px-3 py-1 ring-1">Retry-safe</span>
        </figcaption>
      </figure>
      <ul className="reveal mt-8 grid gap-x-10 gap-y-5 md:grid-cols-2">
        {automation.points.map((point) => (
          <li key={point} className="text-ink-2 flex gap-3 leading-relaxed">
            <span className="text-accent shrink-0" aria-hidden="true">
              →
            </span>
            {point}
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-16 px-2 sm:px-4">
      <div className="band-glow bg-band text-band-ink ring-band-ink/10 mx-auto max-w-[90rem] rounded-[2rem] px-4 py-16 ring-1 ring-inset sm:px-6 sm:py-24 lg:px-8">
        <Container className="px-0 sm:px-0 lg:px-0">
          <p className="text-mark text-sm font-semibold">{home.contact.kicker}</p>
          <h2
            id="contact-heading"
            className="font-display mt-2 max-w-3xl text-4xl leading-[1.05] tracking-tight text-balance sm:text-6xl"
          >
            {home.contact.title}
          </h2>
          <p className="text-band-ink/75 mt-5 max-w-2xl text-lg leading-relaxed">
            {home.contact.body}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${site.email}`}
              className="bg-mark text-mark-ink inline-flex h-12 items-center rounded-full px-6 font-medium break-all transition-transform hover:-translate-y-0.5"
            >
              {site.email}
            </a>
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="border-band-ink/25 hover:border-band-ink inline-flex h-12 items-center gap-1 rounded-full border px-6 font-medium transition-colors"
            >
              View résumé <span aria-hidden="true">↗</span>
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
          <ul className="text-band-ink/75 mt-8 flex flex-wrap gap-x-8 gap-y-2">
            <li>
              <a
                href={site.links.github}
                className="hover:text-band-ink inline-block py-2 underline-offset-4 hover:underline"
                rel="me"
              >
                GitHub ↗
              </a>
            </li>
            <li>
              <a
                href={site.links.linkedin}
                className="hover:text-band-ink inline-block py-2 underline-offset-4 hover:underline"
                rel="me"
              >
                LinkedIn ↗
              </a>
            </li>
          </ul>
        </Container>
      </div>
    </section>
  );
}
