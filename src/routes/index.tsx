import { createFileRoute } from "@tanstack/react-router";

const title = "Baseline — Tennis Club & Academy";
const description =
  "A members’ tennis club and academy where focused coaching meets championship courts.";

export const Route = createFileRoute("/")({
  component: BaselinePage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function BaselinePage() {
  return (
    <iframe
      src="/baseline.html"
      title="Baseline Tennis Club & Academy"
      className="fixed inset-0 h-dvh w-full border-0"
    />
  );
}
