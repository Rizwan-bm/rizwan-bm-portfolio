import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const PROFILE = `Candidate: B M Rizwan — Associate Software Engineer, Bogawantalawa, Sri Lanka. Early-career, motivated, passionate about clean, efficient, user-friendly software and continuous learning.
Skills: JavaScript, Python, PHP, C; HTML, CSS; server-side development, API integration; MySQL, SQL, database management; VS Code, Git, GitHub, XAMPP; AI tools (ChatGPT, Gemini, GitHub Copilot); UI/UX design; digital marketing.
Education & certificates: Professional Certificate of AI and Robotics; Artificial Intelligence & Robotics (completed); Artificial Intelligence & Cyber Security; Web Design for Beginners and Front-End Web Development (University of Moratuwa); Data Science & Analytics, AI for Beginners, Professional Networking, Intro to Cybersecurity Awareness (HP LIFE); Introduction to Modern AI (Cisco Networking Academy).
Seeking internships and junior/associate engineering roles.`;

const Input = z.object({ jobDescription: z.string().trim().min(30).max(8000) });

export const Route = createFileRoute("/api/job-fit")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const parsed = Input.safeParse(await request.json().catch(() => null));
        if (!parsed.success) {
          return Response.json({ error: "Please paste a job description (at least 30 characters)." }, { status: 400 });
        }
        const key = process.env["LOVABLE_API_KEY"];
        if (!key) return Response.json({ error: "AI is not configured." }, { status: 500 });

        const upstream = await fetch("https://ai.gateway.lovable.dev/v1/responses", {
          method: "POST",
          signal: request.signal,
          headers: {
            "Content-Type": "application/json",
            "Lovable-API-Key": key,
            "X-Lovable-AIG-SDK": "fetch",
          },
          body: JSON.stringify({
            model: "openai/gpt-6-astra",
            stream: true,
            reasoning: { effort: "low" },
            instructions: `You are an honest recruiting assistant writing on behalf of a candidate's portfolio. Compare the job description with the candidate profile below. Respond in plain text (no markdown symbols like ** or #) with these sections, each title on its own line followed by a colon:
Fit score: a number out of 100 and one-line verdict.
Summary: 2-3 sentences, personalized and warm but truthful.
Matching strengths: 3-5 short lines starting with "- ".
Gaps to grow: 1-4 short lines starting with "- ", framed constructively.
Why Rizwan: one closing sentence.
Never invent experience that is not in the profile. Keep it under 250 words.

${PROFILE}`,
            input: parsed.data.jobDescription,
          }),
        });

        if (!upstream.ok || !upstream.body) {
          const msg =
            upstream.status === 429
              ? "Too many requests right now — please try again in a moment."
              : upstream.status === 402
                ? "The AI feature is temporarily unavailable."
                : "Couldn't analyze the job description. Please try again later.";
          return Response.json({ error: msg }, { status: upstream.status || 500 });
        }

        const reader = upstream.body.getReader();
        const decoder = new TextDecoder();
        const encoder = new TextEncoder();
        let buffer = "";
        const stream = new ReadableStream({
          async start(controller) {
            try {
              while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                buffer += decoder.decode(value, { stream: true });
                const lines = buffer.split("\n");
                buffer = lines.pop() ?? "";
                for (const line of lines) {
                  if (!line.startsWith("data:")) continue;
                  const data = line.slice(5).trim();
                  if (!data || data === "[DONE]") continue;
                  try {
                    const evt = JSON.parse(data);
                    if (evt.type === "response.output_text.delta" && evt.delta) {
                      controller.enqueue(encoder.encode(evt.delta));
                    }
                  } catch {
                    /* ignore partial */
                  }
                }
              }
              controller.close();
            } catch (e) {
              controller.error(e);
            }
          },
          cancel(r) {
            return reader.cancel(r);
          },
        });
        return new Response(stream, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
      },
    },
  },
});
