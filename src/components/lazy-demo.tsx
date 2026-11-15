"use client";

import { useEffect, useRef, useState, type ComponentType } from "react";

/*
 * Loads an interactive demo only when it's about to scroll into view. The
 * demos sit far below the fold, so their JavaScript has no business competing
 * with the first render on a slow phone.
 */

const demos = {
  realtime: { load: () => import("./realtime-demo").then((m) => m.RealtimeDemo), height: "min-h-[34rem] sm:min-h-[30rem]" },
  worker: { load: () => import("./worker-demo").then((m) => m.WorkerDemo), height: "min-h-[22rem] sm:min-h-[18rem]" },
} satisfies Record<string, { load: () => Promise<ComponentType>; height: string }>;

export type DemoKind = keyof typeof demos;

export function LazyDemo({ kind }: { kind: DemoKind }) {
  const ref = useRef<HTMLDivElement>(null);
  const [Demo, setDemo] = useState<ComponentType | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        demos[kind].load().then((Component) => setDemo(() => Component));
      },
      { rootMargin: "600px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [kind]);

  return (
    <div ref={ref} data-demo={kind} className={demos[kind].height}>
      {Demo ? (
        <Demo />
      ) : (
        <div
          className={`bg-paper-raised ring-ink/10 text-ink-3 grid place-items-center rounded-3xl text-sm ring-1 ${demos[kind].height}`}
        >
          <noscript>This demo needs JavaScript.</noscript>
        </div>
      )}
    </div>
  );
}
