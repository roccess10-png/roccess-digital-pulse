import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, MapPin, Mail, Phone, User, MessageSquare, Check, Clock, Zap, Plus, Minus } from "lucide-react";
import { WHATSAPP_NUMBER } from "../components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Roccess — Get a Free Quote" },
      {
        name: "description",
        content: "Tell us about your project. Roccess replies within one business day. Based in Mansa, Zambia.",
      },
      { property: "og:title", content: "Contact Roccess" },
      { property: "og:description", content: "Let's build something that works." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="bg-[var(--c-soft)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-[var(--c-accent)]">Get In Touch</span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-[var(--c-primary)] sm:text-5xl">
              Let's build something that works.
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              Tell us about your business and what you need. We reply within one business day.
            </p>
            <div className="mt-10 space-y-5">
              <InfoRow icon={MapPin} label="Location" value="Mansa, Luapula Province, Zambia" />
              <InfoRow icon={Mail} label="Email" value="hello@roccess.co.zm" />
              <InfoRow icon={Clock} label="Office Hours" value="Mon–Fri, 08:00 – 17:00 CAT" />
              <InfoRow icon={Zap} label="Response Time" value="Within 1 business day" />
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-500/20 transition hover:bg-[#1ebe5a]"
              >
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
                  <label htmlFor="interest" className="mb-2 block text-sm font-semibold text-[var(--c-primary)]">
                    What are you interested in?
                  </label>
                  <select
                    id="interest"
                    className="w-full rounded-xl border border-slate-200 bg-[var(--c-soft)] py-3 px-4 text-sm text-[var(--c-primary)] focus:border-[var(--c-accent)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--c-accent)]/20"
                  >
                    <option>Website Design</option>
                    <option>Business Website</option>
                    <option>Landing Page</option>
                    <option>Website Maintenance</option>
                    <option>Something else</option>
                  </select>
                </div>
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

        {/* FAQ */}
        <div className="mt-24 grid gap-12 lg:grid-cols-3">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-[var(--c-accent)]">FAQ</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[var(--c-primary)] sm:text-4xl">
              Common questions.
            </h2>
            <p className="mt-4 text-slate-600">
              Still have questions? Send us a message — we'll get back fast.
            </p>
          </div>
          <div className="lg:col-span-2">
            <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
              {faqs.map((f, i) => {
                const open = openFaq === i;
                return (
                  <button
                    key={f.q}
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="w-full px-6 py-5 text-left"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-semibold text-[var(--c-primary)]">{f.q}</span>
                      {open ? <Minus size={18} className="text-[var(--c-accent)]" /> : <Plus size={18} className="text-[var(--c-accent)]" />}
                    </div>
                    {open && <p className="mt-3 text-slate-600">{f.a}</p>}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  { q: "How much does a website cost?", a: "Most projects start from ZMW 4,500. The final quote depends on pages, features, and timeline — we send a clear, no-obligation quote after a quick chat." },
  { q: "How long does a project take?", a: "Landing pages: 1–2 weeks. Business sites: 3–5 weeks. We share a clear timeline before we start." },
  { q: "Do you handle hosting and domains?", a: "Yes. We can set up hosting, domains, and business email — or work with what you already have." },
  { q: "How many revisions do I get?", a: "Each package includes set revision rounds. We work closely with you so we rarely hit the limit." },
  { q: "How do payments work?", a: "We typically split into 50% to start, 50% on launch. Payments via mobile money or bank transfer." },
];

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ size?: number }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-[var(--c-accent)] shadow-sm">
        <Icon size={18} />
      </div>
      <div>
        <div className="text-sm font-semibold text-[var(--c-primary)]">{label}</div>
        <div className="text-sm text-slate-600">{value}</div>
      </div>
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