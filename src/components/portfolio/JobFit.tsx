import { useState } from "react";
import { Loader2, ScanSearch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Section } from "./Section";

export function JobFit() {
  const [jd, setJd] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const analyze = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResult("");
    if (jd.trim().length < 30) {
      setError("Please paste a job description (at least 30 characters).");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/job-fit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobDescription: jd }),
      });
      if (!res.ok || !res.body) {
        const body = await res.json().catch(() => null);
        setError(body?.error ?? "Something went wrong. Please try again.");
        return;
      }
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let text = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        text += decoder.decode(value, { stream: true });
        setResult(text);
      }
      if (!text.trim()) setError("No summary was generated. Please try again.");
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section
      id="job-fit"
      className="pt-8 md:pt-10"
      eyebrow="AI Job Match"
      title="Is Rizwan a Fit for Your Role?"
      description="Paste a job description and get an instant, honest AI summary of how my skills match."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <form onSubmit={analyze} className="glass-card flex flex-col rounded-3xl p-7">
          <label htmlFor="jd" className="text-sm font-medium">Job description</label>
          <Textarea
            id="jd"
            value={jd}
            onChange={(e) => setJd(e.target.value)}
            rows={12}
            maxLength={8000}
            placeholder="Paste the role's responsibilities and requirements here..."
            className="mt-2 flex-1"
          />
          <Button type="submit" size="lg" disabled={loading} className="mt-5 rounded-full sm:w-fit">
            {loading ? <Loader2 className="animate-spin" /> : <ScanSearch />}
            {loading ? "Analyzing..." : "Analyze Fit"}
          </Button>
        </form>

        <div className="glass-card min-h-[20rem] rounded-3xl p-7" aria-live="polite">
          <h3 className="font-display text-lg font-semibold">Fit summary</h3>
          {error ? (
            <p className="mt-4 text-sm text-destructive">{error}</p>
          ) : result ? (
            <p className="mt-4 text-sm leading-relaxed whitespace-pre-wrap text-muted-foreground">{result}</p>
          ) : loading ? (
            <p className="mt-4 animate-pulse text-sm text-muted-foreground">Comparing the role with my skills...</p>
          ) : (
            <p className="mt-4 text-sm text-muted-foreground">Your personalized summary will appear here.</p>
          )}
        </div>
      </div>
    </Section>
  );
}
