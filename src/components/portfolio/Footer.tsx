import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-bold text-gradient">B M Rizwan</p>
          <p className="mt-1 text-sm text-muted-foreground">Associate Software Engineer</p>
          <p className="mt-4 font-mono text-xs tracking-widest text-primary uppercase">
            Learn. Build. Innovate.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <p className="text-sm font-semibold">Navigation</p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-primary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm font-semibold">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail className="size-4 text-primary" />
              <a href="mailto:bm.rizwan.it@gmail.com" className="hover:text-primary">
                bm.rizwan.it@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 text-primary" />
              <a href="tel:+94767312298" className="hover:text-primary">
                +94 (76) 731 2298
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4 text-primary" /> Bogawantalawa, Sri Lanka
            </li>
            <li className="flex items-center gap-2">
              <Linkedin className="size-4 text-primary" />
              <a href="https://www.linkedin.com/in/bm-rizwan" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                linkedin.com/in/bm-rizwan
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Github className="size-4 text-primary" />
              <a href="https://github.com/Rizwan-bm" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                github.com/Rizwan-bm
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} B M Rizwan. All rights reserved.
      </div>
    </footer>
  );
}