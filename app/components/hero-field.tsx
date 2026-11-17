export function HeroField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <span className="bg-gold/15 absolute -top-16 left-[8%] size-64 rounded-full blur-3xl" />
      <span className="bg-ember/20 absolute top-24 right-[12%] size-72 rounded-full blur-3xl" />
      <span className="bg-gold-dim/20 absolute bottom-0 left-1/3 size-80 rounded-full blur-3xl" />
      <span className="hero-drift bg-gold absolute top-1/3 left-[18%] size-2 rounded-full" />
      <span className="hero-drift bg-fg/70 absolute top-1/4 right-[28%] size-1.5 rounded-full [animation-delay:1.2s]" />
      <span className="hero-drift bg-ember absolute bottom-16 left-[42%] size-1.5 rounded-full [animation-delay:2s]" />
    </div>
  );
}
