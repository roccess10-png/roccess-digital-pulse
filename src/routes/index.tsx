import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Globe,
  Briefcase,
  Rocket,
  Wrench,
  Search,
  PenTool,
  Code2,
  Send,
  Quote,
} from "lucide-react";
import { CTAStrip } from "../components/CTAStrip";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Roccess — Web Design That Works | Mansa, Zambia" },
      {
        name: "description",
        content:
          "Roccess is a results-driven web design company in Mansa, Zambia. Fast, modern websites that help local and regional businesses grow online.",
      },
      { property: "og:title", content: "Roccess — Web Design That Works" },
      { property: "og:description", content: "Modern websites for ambitious businesses in Zambia and beyond." },
    ],
  }),
  component: Home,
});

const highlights = [
  { icon: Globe, title: "Website Design" },
  { icon: Briefcase, title: "Business Websites" },
  { icon: Rocket, title: "Landing Pages" },
  { icon: Wrench, title: "Maintenance" },
];

const process = [
  { icon: Search, title: "Discover", desc: "We learn your business, audience, and goals." },
  { icon: PenTool, title: "Design", desc: "We craft a design that fits your brand." },
  { icon: Code2, title: "Build", desc: "We engineer it to be fast, responsive, and reliable." },
  { icon: Send, title: "Launch", desc: "We ship it live and support you after launch." },
];

const stats = [
  ["20+", "Projects Shipped"],
  ["<2s", "Avg. Load Time"],
  ["98%", "Client Satisfaction"],
  ["<24h", "Reply Time"],
];

function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--c-primary)] text-white">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, var(--c-accent) 0%, transparent 50%), radial-gradient(circle at 80% 60%, var(--c-cta) 0%, transparent 45%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-slate-200">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--c-cta)]" />
              Web Design Studio · Mansa, Zambia
            </div>
            <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              We Build Websites <span className="text-[var(--c-cta)]">That Work.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl">
              Fast, modern, professional websites for ambitious Zambian businesses. We design to grow your brand — not just to look good.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--c-cta)] px-7 py-3.5 text-base font-semibold text-[var(--c-primary)] shadow-lg shadow-black/20 transition hover:opacity-90"
              >
                Get a Free Quote <ArrowRight size={18} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-base font-medium text-white transition hover:bg-white/10"
              >
                Explore Services
              </Link>
            </div>
            <div className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {[
                ["100%", "Custom Built"],
                ["7 Days", "Avg. Delivery"],
                ["24/7", "Support"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="text-2xl font-bold text-white sm:text-3xl">{n}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-slate-400">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}

      {/*<section className="border-y border-slate-100 bg-white py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
            Trusted by businesses across Luapula & beyond
          </p>
          <div className="mt-6 grid grid-cols-2 gap-6 opacity-70 sm:grid-cols-3 md:grid-cols-6">
            {["Kanono Co.", "Luapula Foods", "Mansa Auto", "BrightPath", "Sasa Logistics", "NorthStar NGO"].map((b) => (
              <div key={b} className="text-center text-sm font-bold tracking-tight text-slate-500">
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>*/}

      <section className="bg-[var(--c-soft)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-widest text-[var(--c-accent)]">What we do</span>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[var(--c-primary)] sm:text-5xl">
                Built for businesses that mean it.
              </h2>
            </div>
            <Link to="/services" className="text-sm font-semibold text-[var(--c-accent)] hover:underline">
              See all services →
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((s) => (
              <div key={s.title} className="card-depth-lift rounded-2xl p-7">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--c-primary)] text-[var(--c-cta)]">
                  <s.icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-[var(--c-primary)]">{s.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-[var(--c-accent)]">How we work</span>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[var(--c-primary)] sm:text-5xl">
              A clear process. No surprises.
            </h2>
            <p className="mt-5 text-lg text-slate-600">
              Four steps from first conversation to launch — and we keep you in the loop the whole way.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <div key={p.title} className="card-depth-lift relative rounded-2xl p-7">
                <div className="absolute -top-3 left-7 rounded-full bg-[var(--c-primary)] px-3 py-1 text-xs font-bold text-[var(--c-cta)]">
                  Step {i + 1}
                </div>
                <div className="mt-3 mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--c-soft)] text-[var(--c-accent)]">
                  <p.icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-[var(--c-primary)]">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-[var(--c-primary)] py-24 text-white lg:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <Quote className="mx-auto text-[var(--c-cta)]" size={42} />
          <p className="mt-8 text-2xl font-medium leading-relaxed text-slate-100 sm:text-3xl">
            "Roccess delivered a website that actually brings in business. Clean design, fast delivery, and they really listened."
          </p>
          <div className="mt-8 text-sm text-slate-400">
            <span className="font-semibold text-white">Chola M.</span> — Owner, Local Retail Brand
          </div>
        </div>
      </section>

      {/* Stats band */}
      {/*<section className="bg-[var(--c-soft)] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map(([n, l]) => (
              <div key={l} className="text-center">
                <div className="text-4xl font-extrabold text-[var(--c-primary)] sm:text-5xl">{n}</div>
                <div className="mt-2 text-xs uppercase tracking-wider text-slate-500">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>*/}

      <CTAStrip />
    </>
  );
}