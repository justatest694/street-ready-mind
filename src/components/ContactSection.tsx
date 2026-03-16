import { useState } from "react";
import { Phone, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const [showForm, setShowForm] = useState(false);

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
          <div className="bg-card border border-border rounded-lg p-6 mb-10 text-left space-y-4 animate-fade-in">
            <h3 className="font-heading text-xl font-bold text-foreground">Send Us a Message</h3>
            <Input placeholder="Your Name" className="bg-background" />
            <Input type="email" placeholder="Your Email" className="bg-background" />
            <Textarea placeholder="What would you like to say?" rows={5} className="bg-background" />
            <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2 border-t border-border">
              <Mail size={14} className="text-primary" />
              <span>This will be sent to: email@</span>
            </div>
            <div className="flex gap-3">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading tracking-widest px-8 py-3 rounded transition-all glow-orange hover:scale-105">
                SEND
              </button>
              <button
                onClick={() => setShowForm(false)}
                className="border border-border text-muted-foreground hover:text-foreground px-6 py-3 rounded transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
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
