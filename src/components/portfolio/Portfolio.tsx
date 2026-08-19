import { Award, Rocket, Terminal } from "lucide-react";
import { Section } from "./Section";

const certificates = [
  { name: "Web Design for Beginners", org: "University of Moratuwa", year: "Completed" },
  { name: "Professional Certificate of AI and Robotics", org: "Professional Certification", year: "Completed" },
  { name: "Artificial Intelligence & Robotics", org: "Mars Tech", year: "In Progress" },
  { name: "Artificial Intelligence & Cyber Security", org: "Mars Tech", year: "In Progress" },
];

export function Portfolio() {
  return (
    <Section
      id="portfolio"
      eyebrow="Portfolio"
      title="Projects Coming Soon"
      description="My portfolio is currently growing. I'm continuously learning, experimenting with new technologies, and preparing to showcase practical projects soon."
    >
      <div className="glass-card relative overflow-hidden rounded-3xl p-8 text-center sm:p-12">
        <div aria-hidden className="tech-grid absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-xl">
          <div className="mx-auto grid size-14 place-items-center rounded-2xl bg-primary/15 text-primary ring-1 ring-primary/40">
            <Rocket className="size-6" />
          </div>
          <h3 className="mt-5 font-display text-xl font-semibold">Building towards real-world work</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            I&apos;m sharpening my skills through courses and hands-on practice. Real projects will
            be published here as soon as they&apos;re ready.
          </p>
          <pre className="mt-7 overflow-x-auto rounded-2xl border border-border bg-background/60 p-5 text-left font-mono text-xs leading-relaxed text-muted-foreground">
{`> status: learning
> stack : html, css, js, php, python, mysql
> next  : ai • robotics • cybersecurity
> build : in progress ...`}
          </pre>
          <p className="mt-4 inline-flex items-center gap-2 font-mono text-xs text-primary">
            <Terminal className="size-4" /> portfolio.deploy() — soon
          </p>
        </div>
      </div>

      <h3 className="mt-16 mb-6 text-center font-display text-2xl font-bold">Certificates</h3>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {certificates.map((c) => (
          <article key={c.name} className="glass-card flex flex-col rounded-2xl p-6">
            <Award className="size-5 text-primary" />
            <h4 className="mt-4 font-display text-base font-semibold">{c.name}</h4>
            <p className="mt-1 text-sm text-muted-foreground">{c.org}</p>
            <p className="mt-3 font-mono text-xs tracking-wide text-accent uppercase">{c.year}</p>
            <span className="mt-4 text-xs text-muted-foreground/70">
              Certificate link available on request
            </span>
          </article>
        ))}
      </div>
    </Section>
  );
}