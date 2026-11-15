"use client";

import { useEffect, useRef, useState } from "react";

/*
 * Main thread vs Web Worker. The same CPU-heavy job runs in either place while
 * a requestAnimationFrame loop measures the longest gap between frames. On the
 * main thread the UI freezes for the whole job; in a worker it doesn't.
 * Written for this page; it is not Blucera's code.
 */

const JOB_MS = 1200;

const workerSource = `onmessage = (e) => {
  const end = performance.now() + e.data;
  let x = 0;
  while (performance.now() < end) x += Math.sqrt(x + 1);
  postMessage(x);
};`;

function createWorker() {
  return new Worker(URL.createObjectURL(new Blob([workerSource], { type: "text/javascript" })));
}

function heavyJob(ms: number) {
  const end = performance.now() + ms;
  let x = 0;
  while (performance.now() < end) x += Math.sqrt(x + 1);
  return x;
}

type Where = "main" | "worker";
interface Run {
  where: Where;
  longestFrame: number;
}

export function WorkerDemo() {
  const [running, setRunning] = useState<Where | null>(null);
  const [runs, setRuns] = useState<Run[]>([]);
  const dotRef = useRef<HTMLSpanElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const longest = useRef(0);
  const last = useRef(0);
  const workerRef = useRef<Worker | null>(null);

  // Animate a dot from JavaScript (not CSS, which runs off the main thread and
  // would keep moving) and record the longest gap between frames.
  useEffect(() => {
    let frame = 0;
    let visible = false;
    const tick = (now: number) => {
      if (last.current) longest.current = Math.max(longest.current, now - last.current);
      last.current = now;
      const dot = dotRef.current;
      if (dot) dot.style.transform = `translateX(${((Math.sin(now / 350) + 1) / 2) * 100}%)`;
      frame = requestAnimationFrame(tick);
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !visible) {
        visible = true;
        // Start the worker ahead of time so its startup isn't part of the measurement.
        workerRef.current ??= createWorker();
        last.current = 0;
        frame = requestAnimationFrame(tick);
      } else if (!entry.isIntersecting && visible) {
        visible = false;
        cancelAnimationFrame(frame);
      }
    });
    if (rootRef.current) observer.observe(rootRef.current);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      workerRef.current?.terminate();
    };
  }, []);

  function finish(where: Where) {
    // Wait two frames so the frame after the job is included in the measurement.
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        setRuns((r) => [{ where, longestFrame: Math.round(longest.current) }, ...r].slice(0, 4));
        setRunning(null);
      }),
    );
  }

  function start(where: Where) {
    setRunning(where);
    // Let the "running" state paint before the job starts.
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        longest.current = 0;
        last.current = performance.now();
        if (where === "main") {
          heavyJob(JOB_MS);
          finish("main");
        } else {
          workerRef.current ??= createWorker();
          workerRef.current.onmessage = () => finish("worker");
          workerRef.current.postMessage(JOB_MS);
        }
      }),
    );
  }

  return (
    <div ref={rootRef} className="bg-paper-raised ring-ink/10 overflow-hidden rounded-3xl ring-1">
      <div className="p-4 sm:p-6">
        <p className="text-ink-3 text-sm">The interface: a dot animated from JavaScript</p>
        <div className="bg-paper-sunk relative mt-3 h-10 rounded-full px-5">
          <div className="relative h-full">
            <span
              ref={dotRef}
              aria-hidden="true"
              className="absolute top-1/2 left-0 -mt-3 -ml-3 block size-6 w-full"
            >
              <span className="bg-accent block size-6 rounded-full" />
            </span>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          <button
            type="button"
            disabled={running !== null}
            onClick={() => start("main")}
            className="bg-ink text-paper h-11 rounded-full px-5 font-medium transition-colors disabled:opacity-50"
          >
            {running === "main" ? "Running…" : "Process on the main thread"}
          </button>
          <button
            type="button"
            disabled={running !== null}
            onClick={() => start("worker")}
            className="bg-mark text-mark-ink h-11 rounded-full px-5 font-medium transition-colors disabled:opacity-50"
          >
            {running === "worker" ? "Running…" : "Process in a Web Worker"}
          </button>
        </div>
        <p className="text-ink-3 mt-3 text-sm">Both buttons run the same {JOB_MS / 1000}-second CPU job.</p>
      </div>
      <div className="border-rule bg-paper border-t p-4 sm:p-6" role="status" aria-live="polite">
        {runs.length === 0 ? (
          <p className="text-ink-2 text-sm">Run both and compare the longest frame. Anything over ~50 ms feels like lag.</p>
        ) : (
          <ul className="space-y-1.5 text-sm">
            {runs.map((run, i) => (
              <li key={runs.length - i} className="flex items-baseline justify-between gap-4">
                <span className="text-ink-2">{run.where === "main" ? "Main thread" : "Web Worker"}</span>
                <span className="tabular-nums">
                  longest frame{" "}
                  <span className={`font-semibold ${run.longestFrame > 50 ? "text-[#c2410c] dark:text-[#fb923c]" : "text-ink"}`}>
                    {run.longestFrame} ms
                  </span>
                  <span className="text-ink-3"> · {run.longestFrame > 50 ? "UI froze" : "UI stayed smooth"}</span>
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
