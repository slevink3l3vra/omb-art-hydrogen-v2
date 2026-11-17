import { createFileRoute, Link } from "@tanstack/react-router";
import { Artwork } from "@/components/artwork";
import { WorkCard } from "@/components/work-card";
import { formatHuf, getWork, works } from "@/data/catalog";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/works/$slug")({ component: WorkPage });

function WorkPage() {
  const { slug } = Route.useParams();
  const work = getWork(slug);
  const add = useCart((state) => state.add);

  if (!work) {
    return (
      <main className="mx-auto max-w-3xl px-5 py-24 text-center">
        <h1 className="font-display text-5xl">This work is not in the collection.</h1>
        <Link to="/paintings" className="mt-6 inline-flex min-h-11 items-center text-gold">
          Return to paintings
        </Link>
      </main>
    );
  }

  const related = works.filter((item) => item.slug !== work.slug).slice(0, 3);

  return (
    <main>
      <article className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.15fr_0.85fr] md:px-8 md:py-16">
        <div className="bg-surface">
          <Artwork composition={work.composition} palette={work.palette} title={work.title} />
        </div>
        <div className="md:sticky md:top-24 md:self-start">
          <p className="text-xs tracking-[0.22em] text-gold uppercase">{work.technique}</p>
          <h1 className="mt-3 font-display text-5xl leading-none">{work.title}</h1>
          <p className="mt-4 text-muted">
            {work.size} · {work.year}
          </p>
          <p className="mt-6 font-display text-4xl text-fg">{formatHuf(work.priceHuf)}</p>
          <p className="mt-6 text-base text-muted">{work.story}</p>
          {work.award ? (
            <p className="mt-4 border-l border-gold pl-4 text-sm text-fg">{work.award}</p>
          ) : null}
          {work.scent ? (
            <div className="mt-6 border border-line bg-surface p-4">
              <p className="text-xs tracking-[0.2em] text-gold uppercase">Scent</p>
              <p className="mt-2 text-sm text-muted">{work.scent}</p>
            </div>
          ) : null}
          <button
            type="button"
            className="mt-8 flex min-h-12 w-full items-center justify-center bg-gold text-sm tracking-wide text-bg"
            onClick={() =>
              add({
                slug: work.slug,
                title: work.title,
                priceHuf: work.priceHuf,
                size: work.size,
              })
            }
          >
            Reserve this work
          </button>
          <p className="mt-3 text-xs text-muted">
            Unique piece. The studio confirms it is still available before any payment.
          </p>
        </div>
      </article>

      <section className="mx-auto max-w-6xl px-5 pb-16 md:px-8">
        <h2 className="font-display text-4xl">Alongside</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          {related.map((item) => (
            <WorkCard key={item.slug} work={item} />
          ))}
        </div>
      </section>
    </main>
  );
}
