import { useState, useEffect } from "react";
import { Phone, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
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
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-gradient-orange">
          Ready to Train?
        </h2>
        <p className="text-muted-foreground mb-8">
          If you're serious about learning real self defence — let's start.
        </p>

        {!showForm ? (
          <button
            onClick={() => setShowForm(true)}
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-heading text-lg tracking-widest px-10 py-4 rounded transition-all glow-orange hover:scale-105 mb-10"
          >
            BOOK YOUR SESSION NOW
          </button>
        ) : (
          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-6 mb-10 text-left space-y-4 animate-fade-in">
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

        <div className="flex flex-col items-center gap-3 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-primary" />
            <span>Call / WhatsApp: 000-000-0000</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-primary" />
            <span>Email: email@</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
