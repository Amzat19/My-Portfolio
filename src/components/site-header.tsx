import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "./container";
import { ThemeToggle } from "./theme-toggle";

const nav = [
  { href: "/#work", label: "Work" },
  { href: "/#skills", label: "Skills", wide: true },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="bg-paper/80 supports-[backdrop-filter]:bg-paper/70 border-rule/70 sticky top-0 z-30 border-b backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-x-4">
        <Link prefetch={false} href="/" className="flex items-center gap-2.5 py-2">
          <span
            aria-hidden="true"
            className="bg-ink text-paper font-display grid size-8 place-items-center rounded-full text-xs tracking-tight"
          >
            AS
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-[15px] font-semibold">{site.name}</span>
            <span className="text-ink-3 block text-xs">{site.role}</span>
          </span>
          <span className="sr-only sm:hidden">{site.name}</span>
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          <nav aria-label="Primary">
            <ul className="text-ink-2 flex items-center text-sm font-medium">
              {nav.map((item) => (
                <li key={item.href} className={"wide" in item ? "hidden md:block" : undefined}>
                  <Link
                    prefetch={false}
                    href={item.href}
                    className="hover:text-ink hover:bg-paper-sunk inline-block rounded-full px-2.5 py-2 transition-colors sm:px-3"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ink text-paper hover:bg-accent hover:text-accent-ink ml-1 hidden h-9 items-center gap-1 rounded-full px-4 text-sm font-medium transition-colors sm:inline-flex"
          >
            Résumé <span aria-hidden="true">↗</span>
            <span className="sr-only">(opens in a new tab)</span>
          </a>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
