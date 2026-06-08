import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Globe,
  Briefcase,
  Rocket,
  Wrench,
  Heart,
  DollarSign,
  Zap,
  MapPin,
  Mail,
  Phone,
  User,
  MessageSquare,
  Menu,
  X,
  Check,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Roccess — Web Design That Works | Mansa, Zambia" },
      {
        name: "description",
        content:
          "Roccess is a results-driven web design company in Mansa, Zambia. We build fast, modern websites that help local and regional businesses grow online.",
      },
      { property: "og:title", content: "Roccess — Web Design That Works" },
      {
        property: "og:description",
        content: "Modern websites for ambitious businesses in Zambia and beyond.",
      },
    ],
  }),
  component: Index,
});

const WHATSAPP_NUMBER = "260000000000"; // Placeholder

const services = [
  {
    icon: Globe,
    title: "Website Design",
    desc: "Custom-designed websites built around your brand, your goals, and your audience.",
  },
  {
    icon: Briefcase,
    title: "Business Websites",
    desc: "Professional multi-page sites that turn visitors into customers and build credibility.",
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    desc: "High-converting single-page sites designed for campaigns, launches, and lead capture.",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    desc: "Keep your site fast, secure, and up to date with ongoing care and content updates.",
  },
];

const reasons = [
  { icon: Heart, title: "Personal Service", desc: "We work closely with you — no call centers, no middlemen." },
  { icon: DollarSign, title: "Affordable Pricing", desc: "Premium results at prices that make sense for Zambian businesses." },
  { icon: Zap, title: "Fast Delivery", desc: "Launch in weeks, not months. We move quickly without cutting corners." },
  { icon: MapPin, title: "Local Understanding", desc: "Based in Mansa, we know the market and what works here." },
];

const projects = [
  { tag: "Coming Soon", title: "Project One", category: "Business Website" },
  { tag: "Coming Soon", title: "Project Two", category: "Landing Page" },
  { tag: "Coming Soon", title: "Project Three", category: "E-commerce" },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const nav = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#why", label: "Why Us" },
    { href: "#work", label: "Work" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[var(--c-text)] antialiased">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--c-primary)]">
              <span className="text-lg font-extrabold text-[var(--c-cta)]">R</span>
            </div>
            <span className="text-xl font-extrabold tracking-tight text-[var(--c-primary)]">Roccess</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-sm font-medium text-slate-600 transition hover:text-[var(--c-primary)]">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden rounded-full bg-[var(--c-cta)] px-5 py-2.5 text-sm font-semibold text-[var(--c-primary)] shadow-sm transition hover:opacity-90 md:inline-flex"
          >
            Get a Quote
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-md p-2 text-[var(--c-primary)] md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-slate-100 bg-white px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {nav.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)} className="text-sm font-medium text-slate-700">
                  {n.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="rounded-full bg-[var(--c-cta)] px-5 py-2.5 text-center text-sm font-semibold text-[var(--c-primary)]"
              >
                Get a Quote
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
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
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--c-cta)] px-7 py-3.5 text-base font-semibold text-[var(--c-primary)] shadow-lg shadow-black/20 transition hover:opacity-90"
              >
                Get a Free Quote <ArrowRight size={18} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-base font-medium text-white transition hover:bg-white/10"
              >
                Explore Services
              </a>
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

      {/* ABOUT */}
      <section id="about" className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-[var(--c-accent)]">About Roccess</span>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[var(--c-primary)] sm:text-5xl">
                A driven studio with one focus: results.
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-slate-600">
              <p>
                Roccess is a results-focused web design company based in Mansa, Zambia. We help local and regional businesses
                establish a powerful online presence with websites that look sharp, load fast, and convert visitors into customers.
              </p>
              <p>
                Founded by <span className="font-semibold text-[var(--c-primary)]">Roy Lupemba</span> and{" "}
                <span className="font-semibold text-[var(--c-primary)]">Musasa Banda</span>, we combine global design standards with a
                deep understanding of the Zambian market — giving you a real partner, not just a vendor.
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

      {/* SERVICES */}
      <section id="services" className="bg-[var(--c-soft)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-[var(--c-accent)]">Services</span>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[var(--c-primary)] sm:text-5xl">
              What we build for you.
            </h2>
            <p className="mt-5 text-lg text-slate-600">
              Whether you need a single landing page or a full business site, we deliver work that performs.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-[var(--c-accent)] hover:shadow-xl hover:shadow-blue-500/5"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--c-primary)] text-[var(--c-cta)] transition group-hover:bg-[var(--c-accent)] group-hover:text-white">
                  <s.icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-[var(--c-primary)]">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why" className="bg-white py-24 lg:py-32">
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
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
              {reasons.map((r) => (
                <div key={r.title} className="rounded-2xl border border-slate-100 bg-[var(--c-soft)] p-6">
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

      {/* WORK */}
      <section id="work" className="bg-[var(--c-primary)] py-24 text-white lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-widest text-[var(--c-cta)]">Our Work</span>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Selected projects.</h2>
              <p className="mt-5 text-lg text-slate-300">
                A glimpse of what we're working on. Real client work coming soon.
              </p>
            </div>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {projects.map((p, i) => (
              <div
                key={p.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:border-[var(--c-cta)]/50"
              >
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

      {/* CONTACT */}
      <section id="contact" className="bg-[var(--c-soft)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-[var(--c-accent)]">Get In Touch</span>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[var(--c-primary)] sm:text-5xl">
                Let's build something that works.
              </h2>
              <p className="mt-5 text-lg text-slate-600">
                Tell us about your business and what you need. We reply within one business day.
              </p>
              <div className="mt-10 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-[var(--c-accent)] shadow-sm">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[var(--c-primary)]">Location</div>
                    <div className="text-sm text-slate-600">Mansa, Luapula Province, Zambia</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-[var(--c-accent)] shadow-sm">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[var(--c-primary)]">Email</div>
                    <div className="text-sm text-slate-600">hello@roccess.co.zm</div>
                  </div>
                </div>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-500/20 transition hover:bg-[#1ebe5a]"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
              {submitted ? (
                <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <Check size={28} />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-[var(--c-primary)]">Message sent!</h3>
                  <p className="mt-2 text-slate-600">We'll be in touch within one business day.</p>
                </div>
              ) : (
                <div className="space-y-5">
                  <Field icon={User} label="Name" id="name" type="text" placeholder="Your full name" />
                  <Field icon={Mail} label="Email" id="email" type="email" placeholder="you@example.com" />
                  <Field icon={Phone} label="Phone" id="phone" type="tel" placeholder="+260 ..." />
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-semibold text-[var(--c-primary)]">
                      Message
                    </label>
                    <div className="relative">
                      <MessageSquare size={18} className="absolute left-4 top-4 text-slate-400" />
                      <textarea
                        id="message"
                        required
                        rows={5}
                        placeholder="Tell us about your project..."
                        className="w-full resize-none rounded-xl border border-slate-200 bg-[var(--c-soft)] py-3 pl-12 pr-4 text-sm text-[var(--c-primary)] placeholder:text-slate-400 focus:border-[var(--c-accent)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--c-accent)]/20"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--c-cta)] px-6 py-3.5 text-base font-semibold text-[var(--c-primary)] shadow-lg shadow-black/20 transition hover:opacity-90"
                  >
                    Send Message <ArrowRight size={18} />
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[var(--c-primary)] py-14 text-slate-400">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--c-cta)]">
                  <span className="text-lg font-extrabold text-[var(--c-primary)]">R</span>
                </div>
                <span className="text-xl font-extrabold text-white">Roccess</span>
              </div>
              <p className="mt-4 text-sm">Websites that work — built in Mansa, for businesses going somewhere.</p>
            </div>
            <div className="text-sm">
              <div className="font-semibold text-white">Location</div>
              <p className="mt-3">Mansa, Luapula Province<br />Zambia</p>
            </div>
            <div className="text-sm">
              <div className="font-semibold text-white">Contact</div>
              <p className="mt-3">hello@roccess.co.zm</p>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="mt-1 inline-block text-[var(--c-cta)] hover:underline">
                WhatsApp us
              </a>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs">
            <div>© {new Date().getFullYear()} Roccess. All rights reserved.</div>
            <div>Founded by Roy Lupemba & Musasa Banda</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Field({
  icon: Icon,
  label,
  id,
  type,
  placeholder,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  id: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-[var(--c-primary)]">
        {label}
      </label>
      <div className="relative">
        <Icon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          id={id}
          type={type}
          required
          placeholder={placeholder}
          className="w-full rounded-xl border border-slate-200 bg-[var(--c-soft)] py-3 pl-12 pr-4 text-sm text-[var(--c-primary)] placeholder:text-slate-400 focus:border-[var(--c-accent)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--c-accent)]/20"
        />
      </div>
    </div>
  );
}
