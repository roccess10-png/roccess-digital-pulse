import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, DollarSign, Zap, MapPin, ArrowRight, Hammer, Shield, Gauge, Handshake } from "lucide-react";
import { CTAStrip } from "../components/CTAStrip";

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

const values = [
  { icon: Hammer, title: "Craft", desc: "We sweat the details others ignore." },
  { icon: Shield, title: "Honesty", desc: "Clear pricing, clear timelines, no surprises." },
  { icon: Gauge, title: "Speed", desc: "We move fast — without cutting corners." },
  { icon: Handshake, title: "Partnership", desc: "We're invested in the long-term success of your business." },
];

const founders = [
  {
    name: "Roy Lupemba",
    role: "Co-Founder · Design & Strategy",
    bio: "Leads brand strategy and visual design. Obsessed with making sure every project actually moves the business forward.",
  },
  {
    name: "Musasa Banda",
    role: "Co-Founder · Engineering",
    bio: "Builds the engine room — fast, reliable websites that hold up under real-world use.",
  },
];

const milestones = [
  { year: "2024", title: "Roccess founded", desc: "Started in Mansa with one mission: raise the bar for web design in Zambia." },
  { year: "2024", title: "First client launch", desc: "Shipped our first business site and proved the model works." },
  { year: "2025", title: "Studio expanded", desc: "Grew the team and the project list across Luapula." },
  { year: "Today", title: "Built for what's next", desc: "Serving ambitious clients locally and regionally." },
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

      {/* Founders */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-[var(--c-accent)]">The Founders</span>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[var(--c-primary)] sm:text-5xl">
              Two people. One standard.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {founders.map((f) => (
              <div key={f.name} className="rounded-2xl border border-slate-200 bg-[var(--c-soft)] p-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--c-primary)] text-2xl font-extrabold text-[var(--c-cta)]">
                  {f.name.charAt(0)}
                </div>
                <h3 className="mt-6 text-xl font-bold text-[var(--c-primary)]">{f.name}</h3>
                <div className="text-sm font-medium text-[var(--c-accent)]">{f.role}</div>
                <p className="mt-4 text-slate-600">{f.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[var(--c-soft)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-[var(--c-accent)]">Our Values</span>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[var(--c-primary)] sm:text-5xl">
              What we stand on.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-slate-200 bg-white p-7">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--c-cta)]/20 text-[var(--c-primary)]">
                  <v.icon size={20} />
                </div>
                <h3 className="font-bold text-[var(--c-primary)]">{v.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-[var(--c-accent)]">Milestones</span>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[var(--c-primary)] sm:text-5xl">
              Where we've been.
            </h2>
          </div>
          <ol className="mt-12 relative border-l-2 border-[var(--c-accent)]/30 pl-8">
            {milestones.map((m) => (
              <li key={m.title} className="relative mb-10 last:mb-0">
                <span className="absolute -left-[42px] flex h-6 w-6 items-center justify-center rounded-full bg-[var(--c-cta)] ring-4 ring-white" />
                <div className="text-xs font-bold uppercase tracking-wider text-[var(--c-accent)]">{m.year}</div>
                <h3 className="mt-1 text-lg font-bold text-[var(--c-primary)]">{m.title}</h3>
                <p className="mt-1 text-slate-600">{m.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTAStrip title="Want to work with us?" subtitle="Tell us about your project — we'll reply within a day." />
    </>
  );
}