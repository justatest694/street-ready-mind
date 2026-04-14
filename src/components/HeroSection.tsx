import { useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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

        {!showForm ? (
          <div className="space-y-6">
            <button
              onClick={() => setShowForm(true)}
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

            <p className="font-heading text-3xl text-gradient-orange">
              £35.00 per hour
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-6 mb-4 text-left space-y-4 animate-fade-in max-w-lg mx-auto">
            <h3 className="font-heading text-xl font-bold text-foreground">Send Us a Message</h3>
            <Input name="name" placeholder="Your Name" required className="bg-background" />
            <Input name="email" type="email" placeholder="Your Email" required className="bg-background" />
            <Textarea name="message" placeholder="What would you like to say?" rows={5} required className="bg-background" />
            <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2 border-t border-border">
              <Mail size={14} className="text-primary" />
              <span>This will be sent to: email@</span>
            </div>
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
      </div>
    </section>
  );
};

export default HeroSection;
