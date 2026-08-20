import { useRef, useState } from "react";
import { Brain, Braces, Cpu, Terminal } from "lucide-react";
import profile from "@/assets/rizwan-profile.png.asset.json";

export function ProfileOrb() {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, active: false });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: -py * 10, y: px * 10, active: true });
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0, active: false })}
      className="relative mx-auto w-full max-w-[22rem] [perspective:1000px]"
    >
      <div
        className="relative transition-transform duration-300 ease-out [transform-style:preserve-3d]"
        style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      >
        <div
          aria-hidden
          className={`animate-breathe absolute -inset-6 rounded-full bg-accent/25 blur-[70px] transition-opacity duration-500 ${
            tilt.active ? "opacity-100" : "opacity-70"
          }`}
        />

        {/* animated conic border */}
        <div aria-hidden className="animate-ring-spin absolute -inset-1 rounded-full conic-ring" />
        <div
          aria-hidden
          className="absolute -inset-1 rounded-full border border-primary/25"
        />

        <div className="glass-card relative aspect-square overflow-hidden rounded-full p-2 [transform:translateZ(40px)]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-2 z-10 rounded-full bg-gradient-to-t from-background/55 via-transparent to-transparent"
          />
          <img
            src={profile.url}
            alt="Portrait of B M Rizwan, Associate Software Engineer"
            width={600}
            height={800}
            className="size-full rounded-full object-cover"
          />
        </div>

        {/* orbiting tech nodes */}
        <div aria-hidden className="animate-orbit pointer-events-none absolute inset-0">
          <span className="orbit-node absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Brain className="size-3.5 text-accent" />
          </span>
          <span className="orbit-node absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
            <Braces className="size-3.5 text-primary" />
          </span>
          <span className="orbit-node absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
            <Cpu className="size-3.5 text-primary" />
          </span>
          <span className="orbit-node absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
            <Terminal className="size-3.5 text-accent" />
          </span>
        </div>
      </div>
    </div>
  );
}