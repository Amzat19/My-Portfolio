import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "./container";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#skills", label: "Skills" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-10">
      <Container className="border-rule grid gap-8 border-t py-10 sm:grid-cols-[1fr_auto] sm:items-start">
        <div>
          <p className="font-semibold">{site.name}</p>
          <p className="text-ink-3 mt-1 text-sm">
            {site.role} · {site.location} · Open to remote roles
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="text-ink-2 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <Link prefetch={false} href={l.href} className="hover:text-ink inline-block py-1">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={site.links.github} className="hover:text-ink inline-block py-1" rel="me">
                GitHub
              </a>
            </li>
            <li>
              <a href={site.links.linkedin} className="hover:text-ink inline-block py-1" rel="me">
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
        <p className="text-ink-3 text-sm sm:col-span-2">
          © {new Date().getFullYear()} {site.name}. Designed and built by me with Next.js, TypeScript and Tailwind.{" "}
          <a href="https://github.com/Amzat19/My-Portfolio" className="link hover:text-ink">
            View source
          </a>
        </p>
      </Container>
    </footer>
  );
}
