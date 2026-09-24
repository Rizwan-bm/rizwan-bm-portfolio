import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Education } from "@/components/portfolio/Education";
import { Skills } from "@/components/portfolio/Skills";
import { Services } from "@/components/portfolio/Services";
import { Portfolio } from "@/components/portfolio/Portfolio";
import { Career } from "@/components/portfolio/Career";
import { JobFit } from "@/components/portfolio/JobFit";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const title = "B M Rizwan — Associate Software Engineer Portfolio";
const description =
  "Portfolio of B M Rizwan, Associate Software Engineer in Bogawantalawa, Sri Lanka — web development, AI, robotics and cybersecurity.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "B M Rizwan",
          jobTitle: "Associate Software Engineer",
          email: "mailto:bm.rizwan.it@gmail.com",
          telephone: "+94767312298",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Bogawantalawa",
            addressCountry: "LK",
          },
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Services />
        <Portfolio />
        <Career />
        <JobFit />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
