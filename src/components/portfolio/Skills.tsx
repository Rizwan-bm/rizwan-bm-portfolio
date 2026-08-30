import {
  Braces,
  Bot,
  Database,
  LayoutDashboard,
  Megaphone,
  Palette,
  Server,
  Wrench,
} from "lucide-react";
import { Section } from "./Section";

const groups = [
  { icon: Braces, title: "Programming Languages", items: ["JavaScript", "Python", "PHP", "C Programming"] },
  { icon: LayoutDashboard, title: "Frontend", items: ["HTML", "CSS", "JavaScript"] },
  { icon: Server, title: "Backend", items: ["PHP", "Python", "Server-side Development", "API Integration"] },
  { icon: Database, title: "Database", items: ["MySQL", "Database Management", "SQL"] },
  { icon: Wrench, title: "Tools", items: ["Visual Studio Code", "Git", "GitHub", "XAMPP"] },
  { icon: Bot, title: "AI Tools", items: ["ChatGPT", "Google Gemini", "GitHub Copilot"] },
  { icon: Palette, title: "Design", items: ["UI/UX Design"] },
  { icon: Megaphone, title: "Marketing", items: ["Digital Marketing"] },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technical Toolkit"
      description="A collection of technical skills I've developed through learning, practice, and hands-on experience."
      className="pt-12 md:pt-16"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map((g) => (
          <article key={g.title} className="glass-card rounded-2xl p-6">
            <div className="grid size-11 place-items-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/30">
              <g.icon className="size-5" />
            </div>
            <h3 className="mt-4 font-display text-base font-semibold">{g.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.items.map((i) => (
                <li
                  key={i}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                >
                  {i}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}