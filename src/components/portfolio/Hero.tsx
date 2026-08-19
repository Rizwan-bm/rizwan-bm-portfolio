import { ArrowRight, Download, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import portrait from "@/assets/rizwan-portrait.jpg.asset.json";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div
        aria-hidden
        className="tech-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(70%_60%_at_50%_20%,black,transparent)]"
      />
      <div
        aria-hidden
        className="absolute -top-40 right-[-10%] size-[34rem] rounded-full bg-primary/20 blur-[130px]"
      />
      <div
        aria-hidden
        className="absolute bottom-[-10rem] left-[-8rem] size-[26rem] rounded-full bg-accent/15 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary">
            <Sparkles className="size-3.5" /> Open to opportunities
          </span>

          <h1 className="mt-6 font-display text-4xl leading-[1.05] font-extrabold sm:text-5xl lg:text-6xl">
            B M Rizwan
          </h1>
          <p className="mt-3 font-mono text-sm tracking-widest text-primary uppercase sm:text-base">
            Junior Software Engineer
          </p>
          <p className="mt-5 max-w-xl text-xl font-semibold text-gradient sm:text-2xl">
            Building Clean, Smart &amp; User-Friendly Digital Solutions.
          </p>
          <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
            I build responsive web applications with HTML, CSS, JavaScript, PHP, Python and MySQL,
            while continuously exploring artificial intelligence, robotics and cybersecurity. I love
            turning ideas into practical, well-crafted software.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full">
              <a href="#contact">
                Contact Me <ArrowRight />
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

          <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4 text-primary" /> Bogawantalawa, Sri Lanka
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div
            aria-hidden
            className="absolute inset-0 -rotate-6 rounded-[2rem] border border-primary/30 bg-primary/5"
          />
          <div className="glass-card relative overflow-hidden rounded-[2rem] p-3">
            <img
              src={portrait.url}
              alt="Portrait of B M Rizwan, Associate Software Engineer"
              width={896}
              height={1152}
              className="w-full rounded-[1.5rem] object-cover"
            />
          </div>
          <div className="glass-card absolute -bottom-6 -left-4 rounded-2xl px-4 py-3 font-mono text-xs text-muted-foreground sm:-left-8">
            <span className="text-primary">const</span> focus ={" "}
            <span className="text-accent">"AI • Web • Security"</span>
          </div>
        </div>
      </div>
    </section>
  );
}