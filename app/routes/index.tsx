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
      <section className="relative overflow-hidden border-b border-line">
        <HeroField />
        <div className="relative mx-auto grid max-w-6xl items-end gap-10 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:py-24">
          <div>
            <p className="text-xs tracking-[0.28em] text-gold uppercase">Budapest · Original works</p>
            <h1 className="mt-5 font-display text-display text-fg">
              More than
              <span className="block italic text-gold">a visual experience.</span>
            </h1>
            <p className="mt-6 max-w-md text-base text-muted">
              Abstract acrylic paintings that meet the room twice — once as color, and, when the work
              asks for it, once as scent.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/paintings"
                className="inline-flex min-h-12 items-center bg-fg px-6 text-sm tracking-wide text-bg"
              >
                Enter the collection
              </Link>
              <Link
                to="/about"
                className="inline-flex min-h-12 items-center border border-line px-6 text-sm tracking-wide text-fg"
              >
                Meet the artist
              </Link>
            </div>
          </div>
          <Link to="/works/$slug" params={{ slug: featured.slug }} className="block">
            <div className="mx-auto aspect-[4/5] max-w-sm overflow-hidden border border-line bg-surface shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
              <Artwork
                composition={featured.composition}
                palette={featured.palette}
                title={featured.title}
              />
            </div>
            <p className="mt-4 text-center font-display text-2xl">{featured.title}</p>
            <p className="text-center text-sm text-muted">{featured.year}</p>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-4xl md:text-5xl">In the studio now</h2>
          <Link to="/paintings" className="text-sm text-gold">
            All paintings
          </Link>
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {trio.map((work) => (
            <WorkCard key={work.slug} work={work} />
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-[0.8fr_1.2fr] md:px-8">
          <div>
            <p className="text-xs tracking-[0.28em] text-gold uppercase">Next</p>
            <h2 className="mt-3 font-display text-4xl">{next.title}</h2>
            <p className="mt-3 text-muted">{next.date}</p>
            <p className="text-muted">{next.place}</p>
            <Link to="/exhibitions" className="mt-6 inline-flex min-h-11 items-center text-sm text-fg">
              The exhibition record →
            </Link>
          </div>
          <blockquote className="border-l border-gold pl-6 font-display text-2xl leading-snug text-fg md:text-3xl">
            “I bring a feeling to the canvas that will not happen twice. There are no identical
            moments.”
            <footer className="mt-4 font-sans text-sm tracking-wide text-muted not-italic">
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
                className="border border-line bg-surface p-6"
              >
                <p className="text-xs tracking-[0.22em] text-gold uppercase">Scent note</p>
                <h3 className="mt-3 font-display text-3xl">{work.title}</h3>
                <p className="mt-3 text-sm text-muted">{work.scent}</p>
              </Link>
            ))}
        </div>
      </section>
    </main>
  );
}
