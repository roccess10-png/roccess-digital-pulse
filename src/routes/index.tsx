import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Globe, Briefcase, Rocket, Wrench } from "lucide-react";

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
              <div key={s.title} className="rounded-2xl border border-slate-200 bg-white p-7">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--c-primary)] text-[var(--c-cta)]">
                  <s.icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-[var(--c-primary)]">{s.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}