import { Mail, MapPin, Phone } from "lucide-react";
import { Section } from "./Section";

const details = [
  { icon: Mail, label: "Email", value: "bm.rizwan.it@gmail.com", href: "mailto:bm.rizwan.it@gmail.com" },
  { icon: Phone, label: "Phone", value: "+94 (76) 731 2298", href: "tel:+94767312298" },
  { icon: MapPin, label: "Location", value: "Bogawantalawa, Sri Lanka" },
];

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Get in Touch"
      description="Whether it's an opportunity, a project or a question — my inbox is open."
    >
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="glass-card h-fit rounded-3xl p-7">
          <ul className="space-y-5">
            {details.map((d) => (
              <li key={d.label} className="flex gap-4">
                <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/30">
                  <d.icon className="size-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs tracking-widest text-muted-foreground uppercase">
                    {d.label}
                  </p>
                  {d.href ? (
                    <a
                      href={d.href}
                      className="mt-1 block truncate font-medium transition-colors hover:text-primary"
                    >
                      {d.value}
                    </a>
                  ) : (
                    <p className="mt-1 font-medium">{d.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-card overflow-hidden rounded-3xl p-2 sm:p-4">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScB7EOD18_7N3yb6_rLbWReTnXnc5mQoYMCUGjawMF_Jz8j2Q/viewform?embedded=true"
            title="Contact form"
            loading="lazy"
            className="h-[900px] w-full rounded-2xl border-0 bg-transparent"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </Section>
  );
}