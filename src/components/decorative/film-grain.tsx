/** Site-wide film grain — subtle texture, pointer-events none */
export function FilmGrain() {
  return (
    <div
      className="film-grain pointer-events-none fixed inset-0 z-[100] opacity-[0.35] mix-blend-overlay"
      aria-hidden
    />
  );
}
