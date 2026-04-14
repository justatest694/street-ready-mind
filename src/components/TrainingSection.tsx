const builds = [
  "The ability to stay calm under pressure",
  "Real confidence — not false confidence",
  "Simple, reliable skills that hold up in chaos",
  "Awareness and decision-making in real time",
  "A mindset that doesn't freeze when things go wrong",
];

const TrainingSection = () => {
  return (
    <section id="training" className="py-20 px-4 bg-secondary">
      <div className="container mx-auto max-w-3xl">
        <div className="border-t border-grit mb-12" />

        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 text-gradient-orange">
          What You're Building
        </h2>

        <div className="space-y-5 text-secondary-foreground font-body text-base md:text-lg leading-relaxed">
          <p>You're not just learning techniques.</p>
          <p className="text-foreground font-heading text-xl font-bold">You're building:</p>

          <ul className="space-y-2">
            {builds.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="text-primary mt-0.5">•</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
