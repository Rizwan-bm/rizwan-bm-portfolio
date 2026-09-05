import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Section } from "./Section";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  subject: z.string().trim().min(1, "Please enter a subject").max(150),
  message: z.string().trim().min(1, "Please enter a message").max(1000),
});

const details = [
  { icon: Mail, label: "Email", value: "bm.rizwan.it@gmail.com", href: "mailto:bm.rizwan.it@gmail.com" },
  { icon: Phone, label: "Phone", value: "+94 (76) 731 2298", href: "tel:+94767312298" },
  { icon: MapPin, label: "Location", value: "Bogawantalawa, Sri Lanka" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/bm-rizwan", href: "https://www.linkedin.com/in/bm-rizwan", external: true },
  { icon: Github, label: "GitHub", value: "github.com/Rizwan-bm", href: "https://github.com/Rizwan-bm", external: true },
];

export function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const parsed = schema.safeParse(data);

    if (!parsed.success) {
      event.preventDefault();
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }

    setErrors({});
  };

  return (
    <Section
      id="contact"
      className="pt-8 md:pt-10"
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
                      target={d.external ? "_blank" : undefined}
                      rel={d.external ? "noopener noreferrer" : undefined}
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

        <form action="https://formsubmit.co/bm.rizwan.it@gmail.com" method="POST" onSubmit={onSubmit} noValidate className="glass-card rounded-3xl p-7">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" maxLength={100} placeholder="Your name" />
              {errors["name"] && <p className="text-xs text-destructive">{errors["name"]}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" maxLength={255} placeholder="you@example.com" />
              {errors["email"] && <p className="text-xs text-destructive">{errors["email"]}</p>}
            </div>
          </div>
          <div className="mt-5 grid gap-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" name="subject" maxLength={150} placeholder="How can I help?" />
            {errors["subject"] && <p className="text-xs text-destructive">{errors["subject"]}</p>}
          </div>
          <div className="mt-5 grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" rows={6} maxLength={1000} placeholder="Write your message..." />
            {errors["message"] && <p className="text-xs text-destructive">{errors["message"]}</p>}
          </div>
          <Button type="submit" size="lg" className="mt-6 w-full rounded-full sm:w-auto">
            <Send /> Send Message
          </Button>
        </form>
      </div>
    </Section>
  );
}