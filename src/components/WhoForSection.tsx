import { Check } from "lucide-react";

const targets = [
  "Complete beginners",
  "People who want real-world confidence",
  "Anyone who knows deep down their current training isn't enough",
  "Those who want to feel in control — not helpless — in unpredictable situations",
];

const WhoForSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="border-t border-grit mb-12" />

        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 text-gradient-orange">
          Who This Is For
        </h2>

        <div className="space-y-5 text-secondary-foreground font-body text-base md:text-lg leading-relaxed">
          <p className="text-foreground font-heading text-xl font-bold">
            No experience? Perfect.
          </p>

          <p>
            We start from zero —
            <br />
            building a solid foundation of movement, awareness, and tactical thinking.
          </p>

          <p>This isn't about being the toughest person in the room.</p>
          <p className="text-foreground font-heading text-xl font-bold">
            It's about becoming capable, composed, and prepared.
          </p>

          <ul className="space-y-2 mt-6">
            {targets.map((t) => (
              <li key={t} className="flex items-start gap-3">
                <Check className="text-primary mt-1 shrink-0" size={18} />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhoForSection;
