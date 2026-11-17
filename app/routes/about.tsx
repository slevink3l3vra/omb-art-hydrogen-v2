import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({ component: About });

const steps = [
  {
    year: "2016",
    title: "The first Buddhas",
    text: "The work begins with carved figures, some two metres high. The name Oh My Buddha belongs to that devotion.",
  },
  {
    year: "2017",
    title: "The first canvas",
    text: "Abstract painting opens a freer gesture. A feeling is brought to the surface once, and not repeated.",
  },
  {
    year: "Now",
    title: "Color and scent",
    text: "Selected paintings travel with a fragrance, so the work reaches past the eye into the air of the room.",
  },
];

function About() {
  return (
    <main>
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-14 md:grid-cols-[0.9fr_1.1fr] md:px-8 md:py-20">
        <div className="relative min-h-80 overflow-hidden bg-surface">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#c9a227_0%,transparent_42%),radial-gradient(circle_at_70%_80%,#c45a32_0%,transparent_40%),linear-gradient(#161412,#0c0b0a)]" />
          <div className="absolute inset-x-8 bottom-8">
            <p className="font-display text-4xl text-fg">OMB Art</p>
            <p className="mt-2 text-sm text-muted">Budapest</p>
          </div>
        </div>
        <div>
          <p className="text-xs tracking-[0.28em] text-gold uppercase">The artist</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">Where painting meets the senses.</h1>
          <div className="mt-6 space-y-4 text-muted">
            <p>
              The path started in sculpture. Large Buddha figures gave the studio its first name.
              Abstract painting arrived later, and stayed, because it left only one limit: the person
              holding the brush.
            </p>
            <p>
              For OMB Art, abstract means a mood that cannot be copied. No two days produce the same
              pressure of color. The canvas keeps that single weather.
            </p>
            <p>
              Some works now carry a composed scent — a garden, a forest, open water — so looking is
              not the only way in. The aim is a good feeling on the wall, and a quieter one in the air.
            </p>
          </div>
          <Link
            to="/paintings"
            className="mt-8 inline-flex min-h-12 items-center bg-fg px-6 text-sm tracking-wide text-bg"
          >
            See the paintings
          </Link>
        </div>
      </section>

      <section className="border-t border-line">
        <ol className="mx-auto grid max-w-6xl gap-px bg-line md:grid-cols-3">
          {steps.map((step) => (
            <li key={step.year} className="bg-bg px-5 py-10 md:px-8">
              <p className="text-xs tracking-[0.22em] text-gold uppercase">{step.year}</p>
              <h2 className="mt-3 font-display text-3xl">{step.title}</h2>
              <p className="mt-3 text-sm text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
