import { Link } from "@tanstack/react-router";
import { Artwork } from "@/components/artwork";
import { formatHuf, type Work } from "@/data/catalog";

export function WorkCard({ work }: { work: Work }) {
  return (
    <Link to="/works/$slug" params={{ slug: work.slug }} className="group block">
      <div className="aspect-[4/5] overflow-hidden bg-surface-2">
        <div className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100">
          <Artwork composition={work.composition} palette={work.palette} title={work.title} />
        </div>
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-3">
        <h3 className="font-display text-2xl leading-none text-fg">{work.title}</h3>
        <span className="shrink-0 text-xs tracking-wide text-muted">{work.year}</span>
      </div>
      <p className="mt-2 text-sm text-muted">{work.size}</p>
      <p className="mt-1 text-sm text-gold">{formatHuf(work.priceHuf)}</p>
    </Link>
  );
}
