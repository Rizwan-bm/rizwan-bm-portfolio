import { Brain, Code2, Globe, Megaphone, PenTool, ShieldCheck } from "lucide-react";
import { Section } from "./Section";

const services = [
  { icon: Code2, title: "Website Development", text: "Modern, responsive and user-friendly websites." },
  { icon: PenTool, title: "UI/UX Design", text: "Clean and intuitive interfaces focused on user experience." },
  { icon: Globe, title: "WordPress Websites", text: "Professional and customizable WordPress websites." },
  { icon: Megaphone, title: "Digital Marketing", text: "Digital strategies and online presence development." },
  { icon: Brain, title: "AI Solutions", text: "Technology-focused AI concepts and practical solutions." },
  { icon: ShieldCheck, title: "Cybersecurity Services", text: "Security-focused technology solutions and awareness." },
];

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title="What I Can Help With"
      description="Areas where I can contribute today and continue to grow."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <article key={s.title} className="glass-card group rounded-2xl p-7">
            <div className="grid size-12 place-items-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/30 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <s.icon className="size-5" />
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}