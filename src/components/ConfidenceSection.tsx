const ConfidenceSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-gradient-orange">
          Confidence Changes Everything
        </h2>

        <div className="space-y-4 text-secondary-foreground text-lg leading-relaxed">
          <p>When you know you can defend yourself, you walk differently.</p>
          <p>You carry yourself differently.</p>
          <p>You think differently.</p>
        </div>

        <div className="mt-8 border-t border-grit pt-8">
          <p className="text-muted-foreground italic">
            This training isn't about fighting.
          </p>
          <p className="text-foreground font-heading text-2xl font-bold mt-2">
            It's about not being helpless.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConfidenceSection;
