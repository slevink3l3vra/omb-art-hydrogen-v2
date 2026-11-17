export function HeroField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <span className="absolute -top-16 left-[8%] size-64 rounded-full bg-gold/15 blur-3xl" />
      <span className="absolute top-24 right-[12%] size-72 rounded-full bg-ember/20 blur-3xl" />
      <span className="absolute bottom-0 left-1/3 size-80 rounded-full bg-gold-dim/20 blur-3xl" />
      <span className="hero-drift absolute top-1/3 left-[18%] size-2 rounded-full bg-gold" />
      <span className="hero-drift absolute top-1/4 right-[28%] size-1.5 rounded-full bg-fg/70 [animation-delay:1.2s]" />
      <span className="hero-drift absolute bottom-16 left-[42%] size-1.5 rounded-full bg-ember [animation-delay:2s]" />
    </div>
  );
}
