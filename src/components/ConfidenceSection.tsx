const ConfidenceSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="border-t border-grit mb-12" />

        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-6 text-gradient-orange">
          Confidence Changes Everything
        </h2>

        <div className="space-y-4 text-secondary-foreground text-lg leading-relaxed text-center">
          <p>When you know you can defend yourself, you walk differently.</p>
          <p>You carry yourself differently.</p>
          <p>You think differently.</p>
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground italic">
            You're not hoping you'll be okay.
          </p>
          <p className="text-foreground font-heading text-2xl font-bold mt-2">
            You know you will be.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConfidenceSection;
