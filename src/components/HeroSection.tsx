import { useState } from "react";
import { Check } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { useToast } from "@/hooks/use-toast";

const bookingFeatures = [
  "Private 1-2-1 pressure-test coaching",
  "Real-world scenario drills",
  "Knife threat awareness",
  "Free initial session",
];

const HeroSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mzdkkpgl", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        toast({ title: "Message sent!", description: "We'll get back to you soon." });
        form.reset();
        setShowForm(false);
      } else {
        toast({ title: "Failed to send", description: "Please try again.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Network error", description: "Please try again.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#000000" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 75% at 50% 60%, black 35%, transparent 95%)",
          maskImage:
            "radial-gradient(ellipse 70% 75% at 50% 60%, black 35%, transparent 95%)",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
      />
      {/* Top fade into navbar */}
      <div
        className="absolute inset-x-0 top-0 h-40 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, #000000 0%, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0) 100%)",
        }}
      />
      {/* Bottom fade into next section */}
      <div
        className="absolute inset-x-0 bottom-0 h-48 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, #000000 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0) 100%)",
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto pt-20">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          <span className="text-gradient-orange">Learn How to Defend Yourself</span>
          <br />
          <span className="text-foreground">in the Real World</span>
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-8 font-body font-light">
          Practical, realistic, pressure-tested self-defence training designed for
          real-life violence — not sport, not fantasy.
        </p>

        {!showForm ? (
          <button
            onClick={() => setShowForm(true)}
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-heading text-lg tracking-widest px-10 py-4 rounded transition-all glow-orange hover:scale-105"
          >
            BOOK YOUR SESSION
          </button>
        ) : (
          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-6 mb-4 text-left space-y-4 animate-fade-in max-w-lg mx-auto">
            <h3 className="font-heading text-xl font-bold text-foreground">Send Us a Message</h3>
            <Input name="name" placeholder="Your Name" required className="bg-background" />
            <Input name="email" type="email" placeholder="Your Email" required className="bg-background" />
            <Textarea name="message" placeholder="What would you like to say?" rows={5} required className="bg-background" />
            <div className="flex gap-3">
              <button
                type="submit"
                disabled={sending}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading tracking-widest px-8 py-3 rounded transition-all glow-orange hover:scale-105 disabled:opacity-50"
              >
                {sending ? "SENDING..." : "SEND"}
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="border border-border text-muted-foreground hover:text-foreground px-6 py-3 rounded transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        <p className="text-foreground font-heading text-base md:text-lg font-bold tracking-wide mt-5 mb-8">
          Private 1–2–1 Pressure-Test Coaching
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
