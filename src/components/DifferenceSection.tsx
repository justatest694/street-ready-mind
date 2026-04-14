const DifferenceSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="container mx-auto max-w-3xl">
        <div className="border-t border-grit mb-12" />

        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-10 text-gradient-orange">
          This Is Where LS Street MMA Is Different
        </h2>

        <div className="space-y-5 text-secondary-foreground font-body text-base md:text-lg leading-relaxed">
          <p>We don't train for perfect conditions.</p>
          <p className="text-foreground font-heading text-xl font-bold">We train for reality.</p>

          <p>
            We train how to stay functional under pressure —
            <br />
            how to think, move, and act when everything feels chaotic.
          </p>

          <p>
            We strip things back to what actually works —
            <br />
            simple, effective movements you can rely on when stress hits.
          </p>

          <p className="text-foreground font-heading text-xl font-bold">Then we pressure-test it.</p>

          <p>
            Controlled but realistic scenarios
            <br />
            that build your ability to stay calm, make decisions, and respond under stress.
          </p>

          <p>
            Not just technique —
            <br />
            but awareness, positioning, timing, and control.
          </p>

          <div className="mt-8 space-y-3 text-foreground text-lg">
            <p>So instead of freezing… <strong>you respond.</strong></p>
            <p>Instead of panicking… <strong>you act.</strong></p>
            <p>Instead of guessing… <strong>you know what to do.</strong></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferenceSection;
