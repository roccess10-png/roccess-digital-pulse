import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Quote } from "lucide-react";
import { CTAStrip } from "../components/CTAStrip";

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
  {
    tag: "Coming Soon",
    title: "Project One",
    category: "Business Website",
    challenge: "A local retailer needed a real online presence to compete.",
    solution: "We built a fast, branded multi-page site with WhatsApp ordering.",
    tech: ["React", "Tailwind", "CMS"],
    result: "More walk-ins, more inbound leads.",
  },
  {
    tag: "Coming Soon",
    title: "Project Two",
    category: "Landing Page",
    challenge: "A campaign needed a high-converting page in under two weeks.",
    solution: "We shipped a focused landing page with lead capture and analytics.",
    tech: ["React", "Tailwind", "Analytics"],
    result: "Triple-digit signups in the first week.",
  },
  {
    tag: "Coming Soon",
    title: "Project Three",
    category: "E-commerce",
    challenge: "An emerging brand wanted to sell online without complexity.",
    solution: "We delivered a simple storefront with mobile-first checkout.",
    tech: ["React", "Stripe", "CMS"],
    result: "Selling within the first month of launch.",
  },
];

const industries = ["Retail", "Hospitality", "NGOs", "Education", "Agriculture", "Professional Services", "Logistics", "Health"];

const testimonials = [
  { quote: "Roccess turned our outdated site into something we're proud to share.", name: "Mwila K.", role: "Director, Local NGO" },
  { quote: "Fast, professional, and honest pricing. Easy to work with.", name: "Bwalya T.", role: "Founder, Hospitality" },
  { quote: "Our new site loads in under a second and looks the part. Worth every kwacha.", name: "Chanda M.", role: "Owner, Retail" },
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
              <div className="mt-5 space-y-3 border-t border-white/10 pt-5 text-sm">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[var(--c-cta)]">Challenge</div>
                  <p className="mt-1 text-slate-300">{p.challenge}</p>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[var(--c-cta)]">Solution</div>
                  <p className="mt-1 text-slate-300">{p.solution}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs text-slate-200">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industries */}
        <div className="mt-24">
          <span className="text-sm font-semibold uppercase tracking-widest text-[var(--c-cta)]">Industries</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">Who we work with.</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {industries.map((i) => (
              <span key={i} className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-200">
                {i}
              </span>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-24">
          <span className="text-sm font-semibold uppercase tracking-widest text-[var(--c-cta)]">What clients say</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">Words from the room.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-white/10 bg-white/5 p-7">
                <Quote size={24} className="text-[var(--c-cta)]" />
                <p className="mt-4 text-slate-200">"{t.quote}"</p>
                <div className="mt-6 text-sm">
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="text-slate-400">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <CTAStrip title="Want your project featured here?" subtitle="Let's build something worth showing off." />
    </>
  );
}