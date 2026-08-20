import { BadgeCheck, BookOpen } from "lucide-react";
import { Section } from "./Section";

const items = [
  {
    title: "Web Design for Beginners",
    org: "University of Moratuwa",
    status: "Completed",
  },
  {
    title: "Professional Certificate of Artificial Intelligence and Robotics",
    org: "Professional Certification",
    status: "Completed",
  },
  {
    title: "Artificial Intelligence & Robotics",
    org: "Mars Tech",
    status: "Currently Following",
  },
  {
    title: "Artificial Intelligence & Cyber Security",
    org: "Mars Tech",
    status: "Currently Following",
  },
];

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Education & Certifications"
      description="Qualifications completed and courses currently in progress."
    >
      <ol className="relative mx-auto max-w-3xl border-l border-border pl-6 sm:pl-10">
        {items.map((item) => {
          const done = item.status === "Completed";
          const Icon = done ? BadgeCheck : BookOpen;
          return (
            <li key={item.title} className="mb-6 last:mb-0">
              <span
                aria-hidden
                className={`absolute -left-[9px] mt-6 grid size-[18px] place-items-center rounded-full ${done ? "bg-primary" : "bg-accent"} ring-4 ring-background`}
              />
              <div className="glass-card rounded-2xl p-5 sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex gap-3">
                    <Icon
                      className={`mt-0.5 size-5 shrink-0 ${done ? "text-primary" : "text-accent"}`}
                    />
                    <div>
                      <h3 className="font-display text-base font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{item.org}</p>
                    </div>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      done
                        ? "bg-primary/15 text-primary ring-1 ring-primary/30"
                        : "bg-accent/15 text-accent ring-1 ring-accent/30"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}