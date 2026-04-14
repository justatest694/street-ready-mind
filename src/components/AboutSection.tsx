const AboutSection = () => {
  const symptoms = [
    "Rapid breathing caused by an adrenaline dump",
    "Narrow vision",
    "A feeling of being frozen",
    "Fine motor skills breaking down",
    "Complex techniques failing",
    "Fear taking over",
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="border-t border-grit mb-12" />

        <div className="space-y-5 text-secondary-foreground font-body text-base md:text-lg leading-relaxed">
          <p className="text-foreground font-heading text-2xl md:text-3xl font-bold">
            Most people aren't prepared for violence.
          </p>

          <p>
            Self-defence classes give a false sense of security. It's clean, controlled,
            and predictable — but real situations aren't.
          </p>

          <p className="text-foreground font-heading text-2xl md:text-3xl font-bold py-2">
            Real violence is sudden, chaotic, and overwhelming.
          </p>

          <p>There are no warm-ups. No rules. No second chances.</p>

          <div className="flex flex-wrap gap-x-6 gap-y-1 text-muted-foreground">
            <span>It's messy.</span>
            <span>It's fast.</span>
            <span>It's unpredictable.</span>
          </div>

          <p>
            I founded <strong className="text-primary">LS Street MMA</strong> because I saw a gap —
          </p>
          <p>
            between what's being taught and what actually happens when violence finds you.
          </p>

          <p className="text-foreground font-heading text-xl font-semibold mt-6">
            If you've ever been in a physical confrontation, you will have experienced these symptoms:
          </p>

          <ul className="space-y-2">
            {symptoms.map((s) => (
              <li key={s} className="flex items-start gap-3">
                <span className="text-primary mt-0.5">•</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>

          <p>
            I didn't start training to compete. Referees and rules don't exist in real
            confrontations — I don't train for points.
          </p>

          <p>
            I wanted to know — without doubt — that I could defend myself if it ever came to it.
          </p>

          <p className="text-foreground font-heading text-xl font-bold">
            Because freezing isn't an option.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
