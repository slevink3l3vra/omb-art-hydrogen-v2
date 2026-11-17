import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { WorkCard } from "@/components/work-card";
import { sizeGroups, works, type SizeGroup } from "@/data/catalog";
import { cn } from "@/lib/cn";

export const Route = createFileRoute("/paintings")({ component: Paintings });

function Paintings() {
  const [filter, setFilter] = useState<"All" | SizeGroup>("All");
  const visible = works.filter((work) => filter === "All" || work.sizeGroup === filter);

  return (
    <main className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
      <p className="text-xs tracking-[0.28em] text-gold uppercase">Collection</p>
      <h1 className="mt-3 font-display text-5xl md:text-6xl">Paintings</h1>
      <p className="mt-4 max-w-xl text-muted">
        One-of-a-kind acrylic works. Sizes are the canvas, not the frame. Prices are in forint and
        confirmed before a work leaves the studio.
      </p>

      <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter by size">
        {sizeGroups.map((group) => (
          <button
            key={group}
            type="button"
            role="tab"
            aria-selected={filter === group}
            onClick={() => setFilter(group)}
            className={cn(
              "min-h-11 border px-4 text-sm",
              filter === group
                ? "border-gold bg-gold text-bg"
                : "border-line text-muted hover:text-fg",
            )}
          >
            {group === "All" ? "All sizes" : `${group} cm`}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((work) => (
          <WorkCard key={work.slug} work={work} />
        ))}
      </div>
    </main>
  );
}
