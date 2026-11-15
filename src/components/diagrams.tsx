/*
 * The over-fetching diagram on the AllofHealth page. Built from plain HTML so
 * it follows the theme and reflows on phones. Proportions are illustrative.
 */

function FieldBar({ requested, shown, label }: { requested: number; shown: number; label: string }) {
  return (
    <div>
      <p className="text-ink-2 mb-2 text-sm">{label}</p>
      <div className="flex gap-1" aria-hidden="true">
        {Array.from({ length: requested }, (_, i) => (
          <span
            key={i}
            className={`h-3 flex-1 rounded-sm ${i < shown ? "bg-accent" : "border-rule border border-dashed"}`}
          />
        ))}
      </div>
    </div>
  );
}

export function QueryDiagram() {
  return (
    <figure className="bg-paper-raised ring-ink/10 rounded-2xl p-5 ring-1 sm:p-6">
      <div className="space-y-5">
        <FieldBar label="Before: the query asks for everything" requested={12} shown={4} />
        <FieldBar label="After: only what the view shows" requested={4} shown={4} />
      </div>
      <figcaption className="text-ink-3 border-rule mt-5 flex flex-wrap gap-x-5 gap-y-1 border-t pt-3 text-sm">
        <span>
          <span className="bg-accent mr-1.5 inline-block size-2.5 rounded-sm align-middle" aria-hidden="true" />
          Field the view renders
        </span>
        <span>
          <span
            className="border-rule mr-1.5 inline-block size-2.5 rounded-sm border border-dashed align-middle"
            aria-hidden="true"
          />
          Fetched but unused
        </span>
        <span>Proportions are illustrative.</span>
      </figcaption>
    </figure>
  );
}
