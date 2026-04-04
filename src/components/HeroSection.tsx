import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto pt-20">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          <span className="text-gradient-orange">Learn How to Defend Yourself</span>
          <br />
          <span className="text-foreground">in the Real World</span>
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-8 font-body font-light">
          Practical. Realistic. Pressure-tested self defence training designed for
          real-life situations — not sport, not fantasy.
        </p>

        <button
          onClick={() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            window.dispatchEvent(new CustomEvent('open-contact-form'));
          }}
          className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-heading text-lg tracking-widest px-10 py-4 rounded transition-all glow-orange hover:scale-105"
        >
          BOOK YOUR SESSION
        </button>

        <p className="text-muted-foreground text-sm mt-4 tracking-wide">
          Private Coaching · First Session Free · Beginners Welcome
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
