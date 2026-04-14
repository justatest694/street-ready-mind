import heroBg from "@/assets/hero-bg.jpg";
import { Check } from "lucide-react";

const HeroSection = () => {
  const handleBookClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      window.dispatchEvent(new CustomEvent('open-contact-form'));
    }
  };

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
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
          <span className="text-foreground">LS Street MMA</span>
        </h1>

        <p className="font-heading text-2xl sm:text-3xl md:text-4xl text-gradient-orange mb-4">
          Learn How to Defend Yourself in the Real World
        </p>

        <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-8 font-body font-light">
          Practical, realistic, pressure-tested self-defence training designed for
          real-life violence — not sport, not fantasy.
        </p>

        <div className="space-y-6">
          <button
            onClick={handleBookClick}
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-heading text-2xl tracking-widest px-10 py-4 rounded transition-all glow-orange hover:scale-105"
          >
            Book Your Session
          </button>

          <div className="flex flex-col items-center gap-2 text-secondary-foreground text-sm">
            <div className="flex items-center gap-2">
              <Check size={16} className="text-primary" />
              <span>No experience needed</span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={16} className="text-primary" />
              <span>1–2–1 pressure-testing coaching</span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={16} className="text-primary" />
              <span>Train at your pace</span>
            </div>
          </div>

          <p className="font-heading text-xl text-gradient-orange">
            £35.00 per hour
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
