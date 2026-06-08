import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Our Work — Roccess Web Design" },
      { name: "description", content: "Selected projects by Roccess. Real client work coming soon." },
      { property: "og:title", content: "Roccess Work" },
      { property: "og:description", content: "A glimpse of what we're building." },
    ],
  }),
  component: WorkPage,
});

const projects = [
  { tag: "Coming Soon", title: "Project One", category: "Business Website" },
  { tag: "Coming Soon", title: "Project Two", category: "Landing Page" },
  { tag: "Coming Soon", title: "Project Three", category: "E-commerce" },
];

function WorkPage() {
  return (
    <section className="bg-[var(--c-primary)] py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-[var(--c-cta)]">Our Work</span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Selected projects.</h1>
            <p className="mt-5 text-lg text-slate-300">
              A glimpse of what we're working on. Real client work coming soon.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--c-cta)] px-6 py-3 text-sm font-semibold text-[var(--c-primary)] hover:opacity-90"
          >
            Be our next case study <ArrowRight size={16} />
          </Link>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <div key={p.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:border-[var(--c-cta)]/50">
              <div
                className="aspect-[4/3] w-full rounded-xl"
                style={{
                  background:
                    i === 0
                      ? "linear-gradient(135deg,var(--c-accent),var(--c-primary))"
                      : i === 1
                        ? "linear-gradient(135deg,var(--c-cta),var(--c-primary))"
                        : "linear-gradient(135deg,var(--c-text),var(--c-accent))",
                }}
              />
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400">{p.category}</div>
                  <div className="mt-1 text-lg font-bold">{p.title}</div>
                </div>
                <span className="rounded-full bg-[var(--c-cta)]/15 px-3 py-1 text-xs font-semibold text-[var(--c-cta)]">
                  {p.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}