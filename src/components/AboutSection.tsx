import { Check } from "lucide-react";

const AboutSection = () => {
  const points = [
    "Staying calm under pressure",
    "Understanding real threats",
    "Learning what actually works",
    "Building confidence that carries into everyday life",
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 text-gradient-orange">
          Why I Started LS Street MMA
        </h2>

        <div className="border-t border-grit mb-10" />

        <div className="space-y-5 text-secondary-foreground font-body text-base md:text-lg leading-relaxed">
          <p>I didn't start training for medals.</p>
          <p>I didn't start training for competition.</p>
          <p>
            I started training because I wanted to know — without doubt — that I
            could defend myself if it ever came to it.
          </p>
          <p>I started training because freezing isn't an option.</p>
          <p>Like most people, I realised something important:</p>

          <p className="text-foreground font-heading text-2xl md:text-3xl font-bold py-2">
            Real violence doesn't look like sport.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-1 text-muted-foreground">
            <span>✓ It's messy.</span>
            <span>✓ It's fast.</span>
            <span>✓ It's unpredictable.</span>
          </div>

          <p>
            That's why <strong className="text-primary">LS Street MMA</strong> is
            built around <em className="text-foreground">realistic self defence</em> —
            not flashy techniques, not choreographed moves, and not point scoring.
          </p>

          <p className="text-foreground font-heading text-xl font-semibold mt-6">
            This is about:
          </p>

          <ul className="space-y-2">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <Check className="text-primary mt-1 shrink-0" size={18} />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
