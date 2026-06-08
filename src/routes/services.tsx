import { createFileRoute, Link } from "@tanstack/react-router";
import { Globe, Briefcase, Rocket, Wrench, ArrowRight, Check, Search, PenTool, Code2, Send, Type, Mail, Server, Image as ImageIcon } from "lucide-react";
import { CTAStrip } from "../components/CTAStrip";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Roccess Web Design, Mansa Zambia" },
      {
        name: "description",
        content:
          "Website design, business websites, landing pages, and ongoing maintenance from Roccess in Mansa, Zambia.",
      },
      { property: "og:title", content: "Roccess Services" },
      { property: "og:description", content: "What we build for you." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Globe,
    title: "Website Design",
    desc: "Custom-designed websites built around your brand, goals, and audience.",
    includes: ["Brand-aligned visual design", "Mobile-first layouts", "Up to 5 unique page designs", "Design handoff & assets"],
    idealFor: "Brands launching or rebranding online",
    timeline: "From 2 weeks",
  },
  {
    icon: Briefcase,
    title: "Business Websites",
    desc: "Multi-page sites that turn visitors into customers and build credibility.",
    includes: ["Up to 8 pages", "Contact forms & WhatsApp", "Basic SEO setup", "CMS for easy updates"],
    idealFor: "Established businesses growing online",
    timeline: "3–5 weeks",
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    desc: "Single-page sites designed for campaigns, launches, and lead capture.",
    includes: ["Conversion-focused copy structure", "Lead capture form", "Fast load times", "Analytics setup"],
    idealFor: "Promos, product launches, ad campaigns",
    timeline: "1–2 weeks",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    desc: "Keep your site fast, secure, and up to date with ongoing care.",
    includes: ["Monthly updates & backups", "Security monitoring", "Content updates", "Priority support"],
    idealFor: "Owners who'd rather focus on their business",
    timeline: "Ongoing monthly",
  },
];

const addons = [
  { icon: Search, label: "SEO Setup" },
  { icon: Type, label: "Copywriting" },
  { icon: Server, label: "Hosting" },
  { icon: Mail, label: "Email Setup" },
  { icon: ImageIcon, label: "Logo Design" },
];

const process = [
  { icon: Search, title: "Discover", desc: "We learn your business, audience, and goals before a single pixel." },
  { icon: PenTool, title: "Design", desc: "We craft a design that's on-brand and built to convert." },
  { icon: Code2, title: "Build", desc: "We engineer it fast, responsive, and ready for real traffic." },
  { icon: Send, title: "Launch", desc: "We ship it live, train you, and stick around for support." },
];

const tiers = [
  {
    name: "Starter",
    price: "From ZMW 4,500",
    desc: "A simple, professional presence to get you online.",
    features: ["1–3 pages", "Mobile responsive", "Contact form", "1 round of revisions"],
    highlighted: false,
  },
  {
    name: "Business",
    price: "From ZMW 9,500",
    desc: "A full business site to grow your brand and bring in leads.",
    features: ["Up to 8 pages", "CMS included", "Basic SEO", "WhatsApp integration", "2 rounds of revisions"],
    highlighted: true,
  },
  {
    name: "Custom",
    price: "Let's talk",
    desc: "Larger projects, e-commerce, or special integrations.",
    features: ["Scoped to your needs", "Custom features", "Dedicated support", "Ongoing partnership"],
    highlighted: false,
  },
];

function ServicesPage() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-[var(--c-accent)]">Services</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-[var(--c-primary)] sm:text-5xl">
            What we build for you.
          </h1>
          <p className="mt-5 text-lg text-slate-600">
            Whether you need a single landing page or a full business site, we deliver work that performs.
          </p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-[var(--c-soft)] p-8 transition hover:-translate-y-1 hover:border-[var(--c-accent)] hover:shadow-xl hover:shadow-blue-500/5"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--c-primary)] text-[var(--c-cta)] transition group-hover:bg-[var(--c-accent)] group-hover:text-white">
                <s.icon size={22} />
              </div>
              <h3 className="text-xl font-bold text-[var(--c-primary)]">{s.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">{s.desc}</p>
              <ul className="mt-5 space-y-2">
                {s.includes.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                    <Check size={16} className="mt-0.5 flex-shrink-0 text-[var(--c-accent)]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-4 border-t border-slate-200 pt-4 text-xs">
                <div>
                  <div className="font-semibold uppercase tracking-wider text-slate-400">Ideal for</div>
                  <div className="mt-1 text-[var(--c-primary)]">{s.idealFor}</div>
                </div>
                <div>
                  <div className="font-semibold uppercase tracking-wider text-slate-400">Timeline</div>
                  <div className="mt-1 text-[var(--c-primary)]">{s.timeline}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="mt-20">
          <h2 className="text-2xl font-extrabold text-[var(--c-primary)]">Add-ons</h2>
          <p className="mt-2 text-slate-600">Bolt these on to any package.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {addons.map((a) => (
              <div key={a.label} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-[var(--c-soft)] px-5 py-2.5 text-sm font-medium text-[var(--c-primary)]">
                <a.icon size={16} className="text-[var(--c-accent)]" />
                {a.label}
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mt-24">
          <span className="text-sm font-semibold uppercase tracking-widest text-[var(--c-accent)]">Our Process</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[var(--c-primary)] sm:text-4xl">
            How a project goes.
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <div key={p.title} className="relative rounded-2xl border border-slate-200 bg-[var(--c-soft)] p-7">
                <div className="absolute -top-3 left-7 rounded-full bg-[var(--c-primary)] px-3 py-1 text-xs font-bold text-[var(--c-cta)]">
                  Step {i + 1}
                </div>
                <div className="mt-3 mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[var(--c-accent)]">
                  <p.icon size={22} />
                </div>
                <h3 className="font-bold text-[var(--c-primary)]">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="mt-24">
          <span className="text-sm font-semibold uppercase tracking-widest text-[var(--c-accent)]">Packages</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[var(--c-primary)] sm:text-4xl">
            Simple, transparent pricing.
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Starting points to give you a sense — every project gets a tailored quote.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`relative rounded-2xl border p-8 ${
                  t.highlighted
                    ? "border-[var(--c-accent)] bg-[var(--c-primary)] text-white shadow-xl"
                    : "border-slate-200 bg-white text-[var(--c-primary)]"
                }`}
              >
                {t.highlighted && (
                  <div className="absolute -top-3 right-6 rounded-full bg-[var(--c-cta)] px-3 py-1 text-xs font-bold text-[var(--c-primary)]">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-extrabold">{t.name}</h3>
                <div className={`mt-2 text-2xl font-bold ${t.highlighted ? "text-[var(--c-cta)]" : "text-[var(--c-accent)]"}`}>
                  {t.price}
                </div>
                <p className={`mt-3 text-sm ${t.highlighted ? "text-slate-300" : "text-slate-600"}`}>{t.desc}</p>
                <ul className="mt-6 space-y-2">
                  {t.features.map((f) => (
                    <li key={f} className={`flex items-start gap-2 text-sm ${t.highlighted ? "text-slate-200" : "text-slate-700"}`}>
                      <Check size={16} className={`mt-0.5 flex-shrink-0 ${t.highlighted ? "text-[var(--c-cta)]" : "text-[var(--c-accent)]"}`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold ${
                    t.highlighted
                      ? "bg-[var(--c-cta)] text-[var(--c-primary)] hover:opacity-90"
                      : "border border-[var(--c-primary)] text-[var(--c-primary)] hover:bg-[var(--c-primary)] hover:text-white"
                  }`}
                >
                  Request Quote
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 rounded-2xl bg-[var(--c-primary)] p-8 text-white lg:p-12">
          <div>
            <h3 className="text-2xl font-extrabold">Ready to start?</h3>
            <p className="mt-2 text-slate-300">Get a free, no-obligation quote within one business day.</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--c-cta)] px-6 py-3 text-sm font-semibold text-[var(--c-primary)] hover:opacity-90"
          >
            Get a Free Quote <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}