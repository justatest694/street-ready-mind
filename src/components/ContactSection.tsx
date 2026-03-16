import { Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-gradient-orange">
          Ready to Train?
        </h2>
        <p className="text-muted-foreground mb-8">
          If you're serious about learning real self defence — let's start.
        </p>

        <a
          href="#contact"
          className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-heading text-lg tracking-widest px-10 py-4 rounded transition-all glow-orange hover:scale-105 mb-10"
        >
          BOOK YOUR SESSION NOW
        </a>

        <div className="flex flex-col items-center gap-3 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-primary" />
            <span>Call / WhatsApp: 000-000-0000</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
