import type { ReactNode } from "react";
import { Container } from "./container";

interface SectionProps {
  id: string;
  /** Short label above the heading. */
  kicker: string;
  title: ReactNode;
  /** Optional line under the heading. */
  intro?: ReactNode;
  children: ReactNode;
  /** Alternate sections sit on a slightly darker surface. */
  tone?: "plain" | "sunk";
}

export function Section({ id, kicker, title, intro, children, tone = "plain" }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`scroll-mt-16 py-20 sm:py-28 ${tone === "sunk" ? "bg-paper-sunk/60 border-rule/70 border-y" : ""}`}
    >
      <Container>
        <header className="max-w-3xl">
          <p className="text-accent flex items-center gap-2.5 text-sm font-semibold tracking-wide">
            <span aria-hidden="true" className="bg-accent h-px w-6" />
            {kicker}
          </p>
          <h2
            id={headingId}
            className="font-display mt-3 text-3xl leading-[1.08] tracking-tight text-balance sm:text-[2.75rem]"
          >
            {title}
          </h2>
          {intro && <p className="text-ink-2 mt-4 text-lg leading-relaxed text-pretty">{intro}</p>}
        </header>
        <div className="mt-10 sm:mt-14">{children}</div>
      </Container>
    </section>
  );
}
