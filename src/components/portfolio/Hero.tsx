import { ArrowRight, Brain, Code2, Download, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import profile from "@/assets/rizwan-profile.png.asset.json";

const stack = [
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "Python",
  "C",
  "MySQL",
  "Git",
  "GitHub",
  "VS Code",
  "UI/UX",
  "WordPress",
];

const stats = [
  { value: "7+", label: "Core technologies" },
  { value: "4", label: "Certifications" },
  { value: "100%", label: "Learning mindset" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
      <div
        aria-hidden
        className="tech-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(70%_60%_at_50%_20%,black,transparent)]"
      />
      <div
        aria-hidden
        className="animate-orb absolute -top-40 right-[-10%] size-[34rem] rounded-full bg-primary/25 blur-[130px]"
      />
      <div
        aria-hidden
        className="animate-orb absolute bottom-[-10rem] left-[-8rem] size-[26rem] rounded-full bg-accent/20 blur-[120px] [animation-delay:-8s]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="rise inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/70" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Open to opportunities
            <Sparkles className="size-3.5" />
          </span>

          <h1 className="rise mt-6 font-display text-4xl leading-[1.05] font-extrabold [animation-delay:80ms] sm:text-5xl lg:text-[4.25rem]">
            <span className="block text-muted-foreground/70 text-lg font-medium tracking-wide sm:text-xl">
              Hi, I&apos;m
            </span>
            <span className="text-gradient">B M Rizwan</span>
          </h1>

          <p className="rise mt-4 font-mono text-sm tracking-[0.25em] text-primary uppercase [animation-delay:140ms] sm:text-base">
            Associate Software Engineer
            <span className="animate-caret ml-1 inline-block text-accent">_</span>
          </p>

          <p className="rise mt-5 max-w-xl text-xl font-semibold [animation-delay:200ms] sm:text-2xl">
            Building Clean, Smart &amp; User-Friendly Digital Solutions.
          </p>
          <p className="rise mt-5 max-w-xl leading-relaxed text-muted-foreground [animation-delay:260ms]">
            I build responsive web applications with HTML, CSS, JavaScript, PHP, Python and MySQL,
            while continuously exploring artificial intelligence, robotics and cybersecurity. I love
            turning ideas into practical, well-crafted software.
          </p>

          <div className="rise mt-8 flex flex-wrap gap-3 [animation-delay:320ms]">
            <Button asChild size="lg" className="rounded-full">
              <a href="#contact" className="group">
                Contact Me{" "}
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <a href="#skills">View My Skills</a>
            </Button>
            <Button asChild size="lg" variant="ghost" className="rounded-full">
              <a href="/BM-Rizwan-CV.pdf" download>
                <Download /> Download CV
              </a>
            </Button>
          </div>

          <dl className="rise mt-9 grid max-w-lg grid-cols-3 gap-3 [animation-delay:380ms]">
            {stats.map((s) => (
              <div key={s.label} className="glass-card rounded-2xl px-4 py-3">
                <dt className="font-display text-2xl font-bold text-gradient">{s.value}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>

          <p className="rise mt-6 flex items-center gap-2 text-sm text-muted-foreground [animation-delay:420ms]">
            <MapPin className="size-4 text-primary" /> Bogawantalawa, Sri Lanka
          </p>
        </div>

        <div className="rise relative mx-auto w-full max-w-[22rem] [animation-delay:200ms]">
          <div
            aria-hidden
            className="animate-spin-slow absolute -inset-5 rounded-full border-2 border-dashed border-primary/25"
          />
          <div
            aria-hidden
            className="absolute -inset-2 rounded-full border border-primary/20 bg-primary/5"
          />
          <div className="glass-card relative aspect-square overflow-hidden rounded-full p-2">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-2 z-10 rounded-full bg-gradient-to-t from-background/60 via-transparent to-transparent"
            />
            <img
              src={profile.url}
              alt="Portrait of B M Rizwan, Associate Software Engineer"
              width={600}
              height={800}
              className="size-full rounded-full object-cover"
            />
          </div>

          <div className="animate-float glass-card absolute -top-2 -left-4 flex items-center gap-2 rounded-2xl px-3.5 py-2.5 text-xs font-medium sm:-left-10">
            <Code2 className="size-4 text-primary" /> Web Development
          </div>
          <div className="animate-float glass-card absolute top-1/3 -right-4 flex items-center gap-2 rounded-2xl px-3.5 py-2.5 text-xs font-medium [animation-delay:-2s] sm:-right-10">
            <Brain className="size-4 text-accent" /> AI &amp; Robotics
          </div>
          <div className="animate-float glass-card absolute -bottom-2 -left-4 flex items-center gap-2 rounded-2xl px-3.5 py-2.5 text-xs font-medium [animation-delay:-4s] sm:-left-8">
            <ShieldCheck className="size-4 text-primary" /> Cybersecurity
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="relative mt-14 overflow-hidden border-y border-border py-4 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]"
      >
        <div className="animate-marquee flex w-max gap-10 pr-10">
          {[...stack, ...stack].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="font-mono text-sm tracking-widest text-muted-foreground/70 uppercase"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}