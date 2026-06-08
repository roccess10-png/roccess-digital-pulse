import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, DollarSign, Zap, MapPin, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Roccess — Web Design Studio in Mansa, Zambia" },
      {
        name: "description",
        content:
          "Roccess is a results-focused web design studio in Mansa, Zambia, founded by Roy Lupemba and Musasa Banda.",
      },
      { property: "og:title", content: "About Roccess" },
      { property: "og:description", content: "A driven studio with one focus: results." },
    ],
  }),
  component: AboutPage,
});

const reasons = [
  { icon: Heart, title: "Personal Service", desc: "We work closely with you — no call centers, no middlemen." },
  { icon: DollarSign, title: "Affordable Pricing", desc: "Premium results at prices that make sense for Zambian businesses." },
  { icon: Zap, title: "Fast Delivery", desc: "Launch in weeks, not months. We move quickly without cutting corners." },
  { icon: MapPin, title: "Local Understanding", desc: "Based in Mansa, we know the market and what works here." },
];

function AboutPage() {
  return (
    <>
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-[var(--c-accent)]">About Roccess</span>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-[var(--c-primary)] sm:text-5xl">
                A driven studio with one focus: results.
              </h1>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-slate-600">
              <p>
                Roccess is a results-focused web design company based in Mansa, Zambia. We help local and regional businesses
                establish a powerful online presence with websites that look sharp, load fast, and convert visitors into customers.
              </p>
              <p>
                Founded by <span className="font-semibold text-[var(--c-primary)]">Roy Lupemba</span> and{" "}
                <span className="font-semibold text-[var(--c-primary)]">Musasa Banda</span>, we combine global design standards with
                a deep understanding of the Zambian market — giving you a real partner, not just a vendor.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {["Results-Driven", "Locally Grounded", "Modern Standards"].map((t) => (
                  <span key={t} className="rounded-full bg-[var(--c-soft)] px-4 py-2 text-sm font-medium text-[var(--c-primary)]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--c-soft)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="text-sm font-semibold uppercase tracking-widest text-[var(--c-accent)]">Why Choose Us</span>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[var(--c-primary)] sm:text-5xl">
                Built for businesses that mean it.
              </h2>
              <p className="mt-5 text-lg text-slate-600">
                We're not the cheapest, and we're not trying to be. We're the team that delivers a website you'll actually be proud of.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--c-cta)] px-6 py-3 text-sm font-semibold text-[var(--c-primary)] shadow-sm hover:opacity-90"
              >
                Start a Project <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
              {reasons.map((r) => (
                <div key={r.title} className="rounded-2xl border border-slate-100 bg-white p-6">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--c-accent)]/10 text-[var(--c-accent)]">
                    <r.icon size={20} />
                  </div>
                  <h3 className="font-bold text-[var(--c-primary)]">{r.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}