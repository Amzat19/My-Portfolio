"use client";

import { useEffect, useRef, useState } from "react";

/*
 * A small, self-contained demo of the pattern from the TheGigs case study:
 * optimistic sends, a dropped connection, and reconciliation against the
 * server's order on reconnect. Written for this page; it is not TheGigs' code.
 */

type Status = "sending" | "queued" | "delivered";
type Connection = "online" | "offline" | "reconnecting";

interface Message {
  id: string;
  from: "me" | "them";
  text: string;
  status: Status;
  /** Server sequence number. Undefined until the server has accepted it. */
  seq?: number;
  /** Local creation order, used for messages the server hasn't seen yet. */
  local: number;
}

const REPLIES = [
  "Does Saturday at 10am still work?",
  "Great, see you there.",
  "Can we push it to 11?",
  "Perfect, booking it now.",
];

const SUGGESTIONS = ["Yes, 10am works", "Running 5 minutes late", "Can you share the address?"];

const initial: Message[] = [
  { id: "srv-1", from: "them", text: "Hi! Is the studio free this weekend?", status: "delivered", seq: 1, local: 0 },
  { id: "srv-2", from: "me", text: "It is. Saturday or Sunday?", status: "delivered", seq: 2, local: 1 },
];

function ordered(messages: Message[]) {
  return [...messages].sort((a, b) => {
    const sa = a.seq ?? Number.POSITIVE_INFINITY;
    const sb = b.seq ?? Number.POSITIVE_INFINITY;
    return sa === sb ? a.local - b.local : sa - sb;
  });
}

export function RealtimeDemo() {
  const [messages, setMessages] = useState<Message[]>(initial);
  const [connection, setConnection] = useState<Connection>("online");
  const [draft, setDraft] = useState("");
  const [announcement, setAnnouncement] = useState("");

  const seq = useRef(2);
  const local = useRef(2);
  const missed = useRef<Message[]>([]);
  const timers = useRef<number[]>([]);
  const listRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const pending = timers.current;
    return () => pending.forEach((t) => window.clearTimeout(t));
  }, []);

  useEffect(() => {
    const list = listRef.current;
    if (list) list.scrollTop = list.scrollHeight;
  }, [messages]);

  function later(fn: () => void, ms: number) {
    timers.current.push(window.setTimeout(fn, ms));
  }

  function confirm(id: string) {
    setMessages((current) =>
      current.map((m) => (m.id === id ? { ...m, id: `srv-${++seq.current}`, seq: seq.current, status: "delivered" } : m)),
    );
  }

  function send(text: string) {
    const body = text.trim();
    if (!body) return;
    const id = `tmp-${++local.current}`;
    const status: Status = connection === "online" ? "sending" : "queued";
    setMessages((current) => [...current, { id, from: "me", text: body, status, local: local.current }]);
    setDraft("");
    if (connection === "online") later(() => confirm(id), 700);
  }

  function goOffline() {
    setConnection("offline");
    setAnnouncement("Connection lost. New messages will be queued.");
    // While we're away, the other person replies. The server orders it now;
    // we won't see it until we reconnect.
    const replies = messages.filter((m) => m.from === "them").length - 1;
    const text = REPLIES[replies % REPLIES.length];
    missed.current.push({ id: `srv-${++seq.current}`, from: "them", text, status: "delivered", seq: seq.current, local: ++local.current });
  }

  function reconnect() {
    setConnection("reconnecting");
    setAnnouncement("Reconnecting…");
    later(() => {
      setConnection("online");
      const backfill = missed.current;
      missed.current = [];
      setMessages((current) => {
        // 1. Merge what the server sent while we were offline.
        // 2. Flush queued sends in the order they were written; each gets a
        //    server sequence number after the backfilled messages.
        const queued = current.filter((m) => m.status === "queued").sort((a, b) => a.local - b.local);
        const flushed = new Map(
          queued.map((m) => [m.id, { ...m, id: `srv-${++seq.current}`, seq: seq.current, status: "delivered" as const }]),
        );
        return [...current.map((m) => flushed.get(m.id) ?? m), ...backfill];
      });
      setAnnouncement(
        backfill.length
          ? `Back online. ${backfill.length} missed message${backfill.length > 1 ? "s" : ""} merged and queued messages sent.`
          : "Back online. Queued messages sent.",
      );
    }, 1100);
  }

  const offline = connection !== "online";

  return (
    <div className="bg-paper-raised ring-ink/10 overflow-hidden rounded-3xl ring-1">
      <div className="border-rule flex flex-wrap items-center justify-between gap-3 border-b px-4 py-3 sm:px-5">
        <p className="flex items-center gap-2 text-sm font-medium">
          <span
            aria-hidden="true"
            className={`size-2.5 rounded-full ${
              connection === "online" ? "bg-[#4bb543]" : connection === "reconnecting" ? "bg-[#e0a200]" : "bg-ink-3"
            }`}
          />
          {connection === "online" ? "Connected" : connection === "reconnecting" ? "Reconnecting…" : "Offline"}
        </p>
        <button
          type="button"
          onClick={connection === "online" ? goOffline : reconnect}
          disabled={connection === "reconnecting"}
          className="border-rule hover:border-ink h-10 rounded-full border px-4 text-sm font-medium transition-colors disabled:opacity-50"
        >
          {connection === "online" ? "Drop the connection" : "Reconnect"}
        </button>
      </div>

      {offline && (
        <p className="bg-paper-sunk text-ink-2 px-4 py-2 text-sm sm:px-5">
          You&rsquo;re offline. Messages you send now are queued and sent in order when you reconnect.
        </p>
      )}

      <ol ref={listRef} className="h-72 space-y-2 overflow-y-auto scroll-smooth px-4 py-4 sm:px-5" aria-label="Conversation">
        {ordered(messages).map((m) => (
          <li key={m.id} className={`flex flex-col ${m.from === "me" ? "items-end" : "items-start"}`}>
            <span
              className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-[15px] leading-snug ${
                m.from === "me"
                  ? `rounded-br-md ${m.status === "delivered" ? "bg-accent text-accent-ink" : "bg-accent-soft text-ink ring-accent/40 ring-1 ring-inset"}`
                  : "bg-paper-sunk text-ink rounded-bl-md"
              }`}
            >
              <span className="sr-only">{m.from === "me" ? "You: " : "Them: "}</span>
              {m.text}
            </span>
            {m.from === "me" && (
              <span className="text-ink-3 mt-0.5 font-mono text-[11px]">
                {m.status === "delivered" ? `✓ seq ${m.seq}` : m.status === "sending" ? "sending…" : "queued"}
              </span>
            )}
          </li>
        ))}
      </ol>

      <form
        className="border-rule border-t p-3 sm:p-4"
        onSubmit={(e) => {
          e.preventDefault();
          send(draft);
        }}
      >
        <div className="flex gap-2">
          <label htmlFor="demo-message" className="sr-only">
            Message
          </label>
          <input
            id="demo-message"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Type a message"
            autoComplete="off"
            className="bg-paper ring-ink/10 focus-visible:ring-accent min-w-0 flex-1 rounded-full px-4 py-2.5 ring-1 outline-none focus-visible:ring-2"
          />
          <button
            type="submit"
            className="bg-ink text-paper hover:bg-accent hover:text-accent-ink h-11 rounded-full px-5 font-medium transition-colors"
          >
            Send
          </button>
        </div>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => send(s)}
              className="bg-paper-sunk text-ink-2 hover:text-ink rounded-full px-3 py-1.5 text-sm transition-colors"
            >
              {s}
            </button>
          ))}
        </div>
      </form>
      <p className="sr-only" role="status" aria-live="polite">
        {announcement}
      </p>
    </div>
  );
}
