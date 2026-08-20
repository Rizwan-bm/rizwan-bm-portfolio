import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative scroll-mt-24 py-20 md:py-28", className)}>
      <div className="mx-auto max-w-6xl px-5">
        <header className="mx-auto mb-12 max-w-2xl text-center">
          {eyebrow && (
            <span className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
              {eyebrow}
            </span>
          )}
          <h2 className={cn("font-display text-3xl font-bold sm:text-4xl", eyebrow ? "mt-3" : "")}>{title}</h2>
          {description && <p className="mt-4 text-muted-foreground">{description}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}