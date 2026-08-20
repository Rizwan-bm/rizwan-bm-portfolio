import { ArrowRight, Compass, Users, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "./Section";

const points = [
  { icon: Wrench, title: "Developing Skills", text: "Practising daily with modern web and backend technologies." },
  { icon: Users, title: "Team Collaboration", text: "Eager to learn from experienced engineers and contribute." },
  { icon: Compass, title: "Seeking Opportunities", text: "Open to internships and junior engineering roles." },
];

export function Career() {
  return (
    <Section
      id="career"
      eyebrow="Career"
      title="Associate Software Engineer — Career Beginning"
      description="I'm at the start of my software engineering journey, actively developing my technical skills and seeking opportunities to gain practical experience and contribute to real-world software projects."
    >
      <div className="grid gap-5 sm:grid-cols-3">
        {points.map((p) => (
          <article key={p.title} className="glass-card rounded-2xl p-6">
            <p.icon className="size-5 text-primary" />
            <h3 className="mt-4 font-display text-base font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
          </article>
        ))}
      </div>

      <div className="glass-card mt-10 flex flex-wrap items-center justify-between gap-6 rounded-3xl p-8">
        <div>
          <h3 className="font-display text-2xl font-bold">Let&apos;s build something together.</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Have a project, a role, or an idea in mind? I&apos;d love to hear about it.
          </p>
        </div>
        <Button asChild size="lg" className="rounded-full">
          <a href="#contact">
            Start a conversation <ArrowRight />
          </a>
        </Button>
      </div>
    </Section>
  );
}