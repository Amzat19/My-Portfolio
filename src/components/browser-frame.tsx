import type { ReactNode } from "react";

/** A light browser chrome around a product screenshot. Decorative only. */
export function BrowserFrame({ url, children, className = "" }: { url: string; children: ReactNode; className?: string }) {
  return (
    <div
      className={`bg-paper-raised ring-ink/10 overflow-hidden rounded-xl shadow-[0_1px_2px_rgb(0_0_0/0.06),0_12px_32px_-12px_rgb(0_0_0/0.25)] ring-1 ${className}`}
    >
      <div className="border-rule flex items-center gap-3 border-b px-3 py-2" aria-hidden="true">
        <span className="flex gap-1.5">
          <span className="bg-rule size-2.5 rounded-full" />
          <span className="bg-rule size-2.5 rounded-full" />
          <span className="bg-rule size-2.5 rounded-full" />
        </span>
        <span className="bg-paper-sunk text-ink-3 min-w-0 flex-1 truncate rounded-md px-2 py-0.5 text-center font-mono text-[11px]">
          {url.replace(/^https?:\/\//, "")}
        </span>
      </div>
      {children}
    </div>
  );
}
