const targets = [
  "Beginners who want real confidence",
  "People who feel unsafe walking alone",
  "Professionals who want practical defence skills",
  "Anyone who wants to be prepared — not paranoid",
];

const builds = [
  "Situational awareness",
  "Calmness under pressure",
  "Effective striking fundamentals",
  "Close-range defence skills",
  "Mental resilience",
  "Real confidence",
];

const WhoForSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 text-gradient-orange">
          Who This Is For
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          You don't need experience. You just need commitment.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <ul className="space-y-3">
            {targets.map((t) => (
              <li key={t} className="flex items-start gap-3 text-secondary-foreground">
                <span className="text-primary mt-0.5">●</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>

          <div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-4">
              What You'll Build
            </h3>
            <ul className="space-y-2">
              {builds.map((b) => (
                <li key={b} className="flex items-center gap-3 text-secondary-foreground">
                  <span className="text-primary">✔</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoForSection;
