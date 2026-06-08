import { createFileRoute, Link } from "@tanstack/react-router";
import { Globe, Briefcase, Rocket, Wrench, ArrowRight } from "lucide-react";

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
  { icon: Globe, title: "Website Design", desc: "Custom-designed websites built around your brand, your goals, and your audience." },
  { icon: Briefcase, title: "Business Websites", desc: "Professional multi-page sites that turn visitors into customers and build credibility." },
  { icon: Rocket, title: "Landing Pages", desc: "High-converting single-page sites designed for campaigns, launches, and lead capture." },
  { icon: Wrench, title: "Website Maintenance", desc: "Keep your site fast, secure, and up to date with ongoing care and content updates." },
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
            </div>
          ))}
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