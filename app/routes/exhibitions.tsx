import { createFileRoute } from "@tanstack/react-router";
import { exhibitions } from "@/data/catalog";

export const Route = createFileRoute("/exhibitions")({ component: Exhibitions });

function Exhibitions() {
  const upcoming = exhibitions.filter((item) => item.upcoming);
  const archive = exhibitions.filter((item) => !item.upcoming);

  return (
    <main className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
      <p className="text-xs tracking-[0.28em] text-gold uppercase">Record</p>
      <h1 className="mt-3 font-display text-5xl md:text-6xl">Exhibitions</h1>
      <p className="mt-4 max-w-xl text-muted">
        Group shows, hotel evenings, and gallery rooms — from Budapest to Madrid and Vienna.
      </p>

      <h2 className="mt-12 font-display text-3xl">Ahead</h2>
      <ul className="mt-6 grid gap-4 md:grid-cols-2">
        {upcoming.map((item) => (
          <li key={item.title + item.date} className="border border-line bg-surface p-5">
            <p className="text-sm text-gold">{item.date}</p>
            <h3 className="mt-2 font-display text-3xl">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.kind}</p>
            <p className="text-sm text-fg">{item.place}</p>
          </li>
        ))}
      </ul>

      <h2 className="mt-14 font-display text-3xl">Already held</h2>
      <ul className="mt-6 divide-y divide-line border-y border-line">
        {archive.map((item) => (
          <li
            key={item.title + item.date}
            className="grid gap-1 py-4 md:grid-cols-[11rem_1fr_1.2fr] md:items-baseline md:gap-6"
          >
            <p className="text-sm text-muted">{item.date}</p>
            <p className="font-display text-2xl">{item.title}</p>
            <p className="text-sm text-muted">
              {item.kind} · {item.place}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
