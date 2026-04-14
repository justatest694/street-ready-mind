const drills = [
  "Striking basics that actually work",
  "Defence against common street scenarios",
  "Distance control and positioning",
  "Pressure-based drills (safe but realistic)",
  "Mental composure under stress",
];

const TrainingSection = () => {
  return (
    <section id="training" className="py-20 px-4 bg-secondary">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-gradient-orange">
          Training Style
        </h2>
        <p className="text-muted-foreground mb-10">
          Sessions are structured, progressive, and realistic.
        </p>

        <div className="text-left max-w-md mx-auto space-y-3">
          <p className="font-heading text-foreground text-lg font-semibold mb-3">
            You'll train:
          </p>
          {drills.map((d) => (
            <div key={d} className="flex items-start gap-3 text-secondary-foreground">
              <span className="text-primary mt-0.5">▸</span>
              <span>{d}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-grit pt-8 max-w-md mx-auto">
          <p className="text-muted-foreground italic">
            This isn't about aggression.
          </p>
          <p className="text-foreground font-heading text-xl font-bold mt-1">
            It's about capability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
