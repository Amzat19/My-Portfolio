import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BrowserFrame } from "@/components/browser-frame";
import { Container } from "@/components/container";
import { QueryDiagram } from "@/components/diagrams";
import { LazyDemo } from "@/components/lazy-demo";
import { IMAGE_WIDTHS, Picture } from "@/components/picture";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import type { Visual } from "@/content/types";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  const title = `${study.company} case study`;
  return {
    title,
    description: study.summary,
    alternates: { canonical: `/work/${study.slug}/` },
    openGraph: { type: "article", title, description: study.summary },
  };
}

const sections = [
  { id: "overview", label: "Overview" },
  { id: "scope", label: "What I worked on" },
  { id: "highlights", label: "Engineering highlights" },
  { id: "decisions", label: "Decisions and trade-offs" },
  { id: "impact", label: "Impact" },
] as const;

function Block({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-24">
      <h2 id={`${id}-heading`} className="font-display text-2xl tracking-tight sm:text-3xl">
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function VisualBlock({ visual }: { visual: Visual }) {
  if (visual === "realtime-demo") return <LazyDemo kind="realtime" />;
  if (visual === "worker-demo") return <LazyDemo kind="worker" />;
  return <QueryDiagram />;
}

const check = (
  <svg aria-hidden="true" viewBox="0 0 20 20" className="text-accent mt-0.5 size-5 shrink-0" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.86-9.86a.75.75 0 0 0-1.22-.88l-3.24 4.5-1.62-1.62a.75.75 0 1 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.09l3.75-5.22Z"
      clipRule="evenodd"
    />
  </svg>
);

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const index = caseStudies.indexOf(study);
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <article>
      <div className="reading-progress bg-accent fixed inset-x-0 top-0 z-40 h-1 origin-left" aria-hidden="true" />

      <Container className="pt-8 sm:pt-12">
        <nav aria-label="Breadcrumb" className="text-sm">
          <ol className="text-ink-3 flex items-center gap-2">
            <li>
              <Link prefetch={false} href="/#work" className="hover:text-ink inline-block py-2 font-medium">
                Work
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-ink-2" aria-current="page">
              {study.company}
            </li>
          </ol>
        </nav>

        <header className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16">
          <div>
            <p className="enter text-accent text-sm font-semibold">{study.product}</p>
            <h1 className="font-display mt-3 text-[2.25rem] leading-[1.06] tracking-[-0.025em] text-balance sm:text-5xl lg:text-[3.4rem]">
              {study.title}
            </h1>
            <p className="enter enter-2 text-ink-2 mt-6 max-w-2xl text-lg leading-relaxed text-pretty">
              {study.summary}
            </p>
            <dl className="enter enter-3 border-rule mt-8 flex max-w-2xl flex-wrap gap-x-12 gap-y-5 border-t pt-6">
              {study.outcomes.map((o) => (
                <div key={o.label} className="flex flex-col">
                  <dt className="text-ink-2 mt-1 text-sm">{o.label}</dt>
                  <dd className="font-display -order-1 text-4xl tracking-tight">{o.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <dl className="enter enter-3 bg-paper-raised ring-ink/10 grid h-fit grid-cols-2 gap-x-6 gap-y-5 self-start rounded-3xl p-6 text-sm shadow-[0_1px_2px_rgb(0_0_0/0.04)] ring-1 lg:grid-cols-1">
            <div>
              <dt className="text-ink-3">Company</dt>
              <dd className="mt-1 font-medium">
                <a href={study.companyUrl} className="link">
                  {study.company}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-ink-3">Role</dt>
              <dd className="mt-1 font-medium">{study.role}</dd>
            </div>
            <div>
              <dt className="text-ink-3">When</dt>
              <dd className="mt-1 font-medium">{study.period}</dd>
            </div>
            <div>
              <dt className="text-ink-3">Where</dt>
              <dd className="mt-1 font-medium">{study.location}</dd>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <dt className="text-ink-3">Stack</dt>
              <dd className="mt-2 flex flex-wrap gap-1.5">
                {study.stack.map((item) => (
                  <span key={item} className="bg-paper-sunk text-ink-2 rounded-full px-2.5 py-0.5 text-xs font-medium">
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </header>
      </Container>

      <Container className="mt-12">
        <div className="tint rounded-3xl p-3 sm:p-8 lg:p-12" style={{ "--tint": study.tint } as React.CSSProperties}>
          <BrowserFrame url={study.companyUrl}>
            <Picture
              image={study.image}
              widths={IMAGE_WIDTHS.wide}
              sizes="(min-width: 72rem) 64rem, calc(100vw - 3.5rem)"
              priority
              className="h-auto w-full"
            />
          </BrowserFrame>
        </div>
      </Container>

      <Container className="mt-16 grid gap-12 sm:mt-20 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-16">
        <aside className="hidden lg:block">
          <nav aria-label="On this page" className="sticky top-24">
            <p className="text-ink-3 text-sm font-semibold">On this page</p>
            <ul className="border-rule mt-3 space-y-1 border-l text-sm">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="text-ink-2 hover:text-ink hover:border-ink -ml-px block border-l border-transparent py-1.5 pl-4 transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <div className="max-w-3xl space-y-16 sm:space-y-20">
          <Block id="overview" title="Overview">
            <div className="text-ink-2 space-y-5 text-lg leading-relaxed text-pretty">
              {study.overview.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Block>

          <Block id="scope" title="What I worked on">
            <ul className="grid gap-3 sm:grid-cols-2">
              {study.areas.map((area) => (
                <li
                  key={area.name}
                  className="bg-paper-raised ring-ink/10 flex gap-3 rounded-2xl p-4 shadow-[0_1px_2px_rgb(0_0_0/0.04)] ring-1"
                >
                  {check}
                  <div>
                    <h3 className="font-semibold">{area.name}</h3>
                    <p className="text-ink-2 mt-0.5 text-sm leading-relaxed">{area.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <h3 className="text-ink-3 mt-8 text-sm font-semibold">How I worked</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {study.practices.map((p) => (
                <li key={p} className="bg-accent-soft text-ink rounded-full px-3 py-1 text-sm">
                  {p}
                </li>
              ))}
            </ul>
          </Block>

          <Block id="highlights" title="Engineering highlights">
            <ol className="space-y-12">
              {study.highlights.map((h, i) => (
                <li key={h.title} className="grid grid-cols-[minmax(0,1fr)] gap-x-3 gap-y-3 sm:grid-cols-[2.25rem_minmax(0,1fr)]">
                  <span
                    className="bg-ink text-paper font-display grid size-8 place-items-center rounded-full text-sm"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">{h.title}</h3>
                    <div className="text-ink-2 mt-2 space-y-4 text-lg leading-relaxed text-pretty">
                      {h.body.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </div>
                    {h.visual && (
                      <div className="mt-6 space-y-3">
                        {h.visualNote && <p className="text-ink-3 text-sm leading-relaxed">{h.visualNote}</p>}
                        <VisualBlock visual={h.visual} />
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </Block>

          <Block id="decisions" title="Decisions and trade-offs">
            <div className="grid gap-4">
              {study.decisions.map((d) => (
                <div key={d.title} className="border-accent rounded-r-2xl border-l-2 bg-[var(--paper-raised)] p-5">
                  <h3 className="font-semibold">{d.title}</h3>
                  <p className="text-ink-2 mt-1.5 leading-relaxed">{d.body}</p>
                </div>
              ))}
            </div>
          </Block>

          <Block id="impact" title="Impact">
            <p className="font-display text-2xl leading-snug tracking-tight text-pretty sm:text-3xl">{study.impact}</p>
          </Block>
        </div>
      </Container>

      <Container className="mt-24">
        <Link
          prefetch={false}
          href={`/work/${next.slug}/`}
          className="group bg-paper-raised ring-ink/10 block rounded-3xl p-6 shadow-[0_1px_2px_rgb(0_0_0/0.04)] ring-1 transition-shadow hover:shadow-[0_24px_48px_-24px_rgb(0_0_0/0.3)] sm:p-10"
        >
          <span className="text-ink-3 text-sm">Next case study · {next.company}</span>
          <span className="font-display mt-2 block text-2xl tracking-tight text-balance sm:text-4xl">
            {next.title}{" "}
            <span className="text-accent inline-block transition-transform group-hover:translate-x-1" aria-hidden="true">
              →
            </span>
          </span>
        </Link>
      </Container>
    </article>
  );
}
