import { Link } from "@tanstack/react-router";

import { Artwork } from "@/components/artwork";
import { formatHuf, type Work } from "@/data/catalog";

export function WorkCard({ work }: { work: Work }) {
  return (
    <Link to="/works/$slug" params={{ slug: work.slug }} className="group block">
      <div className="bg-surface-2 aspect-[4/5] overflow-hidden">
        <div className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100">
          <Artwork composition={work.composition} palette={work.palette} title={work.title} />
        </div>
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-3">
        <h3 className="font-display text-fg text-2xl leading-none">{work.title}</h3>
        <span className="text-muted shrink-0 text-xs tracking-wide">{work.year}</span>
      </div>
      <p className="text-muted mt-2 text-sm">{work.size}</p>
      <p className="text-gold mt-1 text-sm">{formatHuf(work.priceHuf)}</p>
    </Link>
  );
}
