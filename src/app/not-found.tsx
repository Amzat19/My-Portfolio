import Link from "next/link";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <Container className="py-24 sm:py-32">
      <p className="text-accent text-sm font-semibold">404</p>
      <h1 className="font-display mt-2 text-5xl tracking-tight">This page doesn&rsquo;t exist.</h1>
      <p className="text-ink-2 mt-4 text-lg">It may have moved when the site was rebuilt.</p>
      <Link prefetch={false} href="/" className="bg-ink text-paper mt-8 inline-flex h-12 items-center rounded-full px-6 font-medium">
        Go to the home page
      </Link>
    </Container>
  );
}
