import { Check } from "lucide-react";

const items = [
  { title: "Not Sport", desc: "No rules. No referees. No points." },
  { title: "Not Flashy Techniques", desc: "If it looks impressive but won't work under stress — we don't teach it." },
  { title: "Not Fantasy Moves", desc: "No unrealistic drills. No cinematic nonsense." },
  { title: "Real-World Self Defence", desc: "Practical skills for real-life situations." },
  { title: "1–2–1 Coaching", desc: "Private, focused sessions tailored to you." },
];

const DifferenceSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 text-gradient-orange">
          What Makes This Different?
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-card border border-border rounded p-6 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-green-500/20 p-1.5 rounded-full">
                  <Check className="text-green-500" size={16} />
                </span>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
              </div>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferenceSection;
