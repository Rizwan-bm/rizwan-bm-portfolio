import { Award, ExternalLink, Rocket, Terminal } from "lucide-react";
import { Section } from "./Section";
import webDesignCert from "@/assets/web-design-certificate.jpg.asset.json";
import dataScienceCert from "@/assets/data-science-certificate.png.asset.json";
import aiForBeginnersCert from "@/assets/ai-for-beginners.png.asset.json";
import professionalNetworkingCert from "@/assets/professional-networking-for-career-growth.png.asset.json";
import cybersecurityAwarenessCert from "@/assets/introduction-to-cybersecurity-awareness.png.asset.json";
import introModernAICert from "@/assets/introduction-to-modern-ai.jpg.asset.json";

const certificates = [
  {
    name: "Web Design for Beginners",
    org: "University of Moratuwa",
    year: "Completed",
    image: webDesignCert.url,
    verifyUrl: "https://open.uom.lk/verify?code=kWVZO3CzX8",
  },
  { name: "Data Science & Analytics", org: "HP LIFE", year: "Completed", image: dataScienceCert.url, verifyUrl: "https://www.life-global.org/certificate/aab93036-7a35-45a9-ac6c-a7491a8fb798" },
  { name: "AI for Beginners", org: "HP LIFE", year: "Completed", image: aiForBeginnersCert.url, verifyUrl: "https://www.life-global.org/certificate/71b1f4b1-71ea-4306-b6ba-eba31193be19" },
  { name: "Professional Networking for Career Growth", org: "HP LIFE", year: "Completed", image: professionalNetworkingCert.url, verifyUrl: "https://www.life-global.org/certificate/8f8f986a-1cbd-4975-bbfc-19214fabe0c3" },
  { name: "Introduction to Cybersecurity Awareness", org: "HP LIFE", year: "Completed", image: cybersecurityAwarenessCert.url, verifyUrl: "https://www.life-global.org/certificate/2841f7a2-81ca-40ef-93d9-334d008a51e1" },
  { name: "Introduction to Modern AI", org: "Cisco Networking Academy", year: "Completed", image: introModernAICert.url, verifyUrl: "https://www.netacad.com/recognitions/verify/84b2c5c7-bf09-48f1-a54a-54912061170f" },
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
      className="pt-8 md:pt-10"
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

      <h3 id="certificates" className="mt-16 mb-6 text-center font-display text-2xl font-bold">Certificates</h3>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {certificates.map((c) => (
          <article key={c.name} className="glass-card flex flex-col rounded-2xl p-6">
            {c.image ? (
              <div className="overflow-hidden rounded-xl border border-border bg-background/50">
                <img
                  src={c.image}
                  alt={`${c.name} certificate`}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
            ) : (
              <Award className="size-5 text-primary" />
            )}
            <h4 className="mt-4 font-display text-base font-semibold">{c.name}</h4>
            <p className="mt-1 text-sm text-muted-foreground">{c.org}</p>
            <p className="mt-3 font-mono text-xs tracking-wide text-accent uppercase">{c.year}</p>
            {c.verifyUrl ? (
              <a
                href={c.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
              >
                Verify certificate <ExternalLink className="size-3.5" />
              </a>
            ) : (
              <span className="mt-4 text-xs text-muted-foreground/70">
                Certificate link available on request
              </span>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
