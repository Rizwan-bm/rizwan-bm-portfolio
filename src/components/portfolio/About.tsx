import { Brain, Cpu, GraduationCap, Lightbulb, MapPin, ShieldCheck, User } from "lucide-react";
import { Section } from "./Section";

const highlights = [
  { icon: Cpu, title: "Passion for Technology", text: "Driven by curiosity for how software works." },
  { icon: GraduationCap, title: "Continuous Learning", text: "Always taking on new courses and tools." },
  { icon: Lightbulb, title: "Problem-Solving Mindset", text: "Breaking real problems into clean solutions." },
  { icon: Brain, title: "AI & Robotics", text: "Exploring intelligent and automated systems." },
  { icon: ShieldCheck, title: "Cybersecurity", text: "Building with security and awareness in mind." },
  { icon: User, title: "Meaningful Work", text: "Seeking projects with real, practical impact." },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="Who I Am"
      title="About Me"
    >
      <div className="mx-auto max-w-4xl">
        <div className="glass-card rounded-3xl p-7 sm:p-9">
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              I&apos;m Beer Mohamed Rizwan, an Associate Software Engineer passionate about building
              responsive, user-friendly, and modern web applications.
            </p>
            <p>
              I have a strong foundation in HTML, CSS, JavaScript, PHP, Python, C, and MySQL, and I
              enjoy transforming ideas into practical digital solutions.
            </p>
            <p>
              I&apos;m passionate about exploring new technologies, solving real-world problems, and
              creating clean, engaging, and effective digital experiences. As I grow in my software
              engineering career, my goal is to continuously improve my skills, gain valuable
              industry experience, and contribute to innovative and impactful software projects.
            </p>
          </div>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {highlights.map((h) => (
              <li key={h.title} className="flex gap-3 rounded-2xl border border-border p-4">
                <h.icon className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-semibold">{h.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{h.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}