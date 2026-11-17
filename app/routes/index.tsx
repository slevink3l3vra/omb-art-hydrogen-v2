import { createFileRoute, Link } from "@tanstack/react-router";

import { Artwork } from "@/components/artwork";
import { HeroField } from "@/components/hero-field";
import { WorkCard } from "@/components/work-card";
import { exhibitions, works } from "@/data/catalog";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const featured = works[0];
  const trio = works.slice(0, 3);
  const next = exhibitions.find((item) => item.upcoming) ?? exhibitions[0];

  return (
    <main>
      <section className="border-line relative overflow-hidden border-b">
        <HeroField />
        <div className="relative mx-auto grid max-w-6xl items-end gap-10 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:py-24">
          <div>
            <p className="text-gold text-xs tracking-[0.28em] uppercase">
              Budapest · Original works
            </p>
            <h1 className="font-display text-display text-fg mt-5">
              More than
              <span className="text-gold block italic">a visual experience.</span>
            </h1>
            <p className="text-muted mt-6 max-w-md text-base">
              Abstract acrylic paintings that meet the room twice — once as color, and, when the
              work asks for it, once as scent.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/paintings"
                className="bg-fg text-bg inline-flex min-h-12 items-center px-6 text-sm tracking-wide"
              >
                Enter the collection
              </Link>
              <Link
                to="/about"
                className="border-line text-fg inline-flex min-h-12 items-center border px-6 text-sm tracking-wide"
              >
                Meet the artist
              </Link>
            </div>
          </div>
          <Link to="/works/$slug" params={{ slug: featured.slug }} className="block">
            <div className="border-line bg-surface mx-auto aspect-[4/5] max-w-sm overflow-hidden border shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
              <Artwork
                composition={featured.composition}
                palette={featured.palette}
                title={featured.title}
              />
            </div>
            <p className="font-display mt-4 text-center text-2xl">{featured.title}</p>
            <p className="text-muted text-center text-sm">{featured.year}</p>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-4xl md:text-5xl">In the studio now</h2>
          <Link to="/paintings" className="text-gold text-sm">
            All paintings
          </Link>
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {trio.map((work) => (
            <WorkCard key={work.slug} work={work} />
          ))}
        </div>
      </section>

      <section className="border-line bg-surface border-y">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-[0.8fr_1.2fr] md:px-8">
          <div>
            <p className="text-gold text-xs tracking-[0.28em] uppercase">Next</p>
            <h2 className="font-display mt-3 text-4xl">{next.title}</h2>
            <p className="text-muted mt-3">{next.date}</p>
            <p className="text-muted">{next.place}</p>
            <Link
              to="/exhibitions"
              className="text-fg mt-6 inline-flex min-h-11 items-center text-sm"
            >
              The exhibition record →
            </Link>
          </div>
          <blockquote className="border-gold font-display text-fg border-l pl-6 text-2xl leading-snug md:text-3xl">
            “I bring a feeling to the canvas that will not happen twice. There are no identical
            moments.”
            <footer className="text-muted mt-4 font-sans text-sm tracking-wide not-italic">
              OMB Art
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {works
            .filter((work) => work.scent)
            .slice(0, 2)
            .map((work) => (
              <Link
                key={work.slug}
                to="/works/$slug"
                params={{ slug: work.slug }}
                className="border-line bg-surface border p-6"
              >
                <p className="text-gold text-xs tracking-[0.22em] uppercase">Scent note</p>
                <h3 className="font-display mt-3 text-3xl">{work.title}</h3>
                <p className="text-muted mt-3 text-sm">{work.scent}</p>
              </Link>
            ))}
        </div>
      </section>
    </main>
  );
}
