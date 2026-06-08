import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CTAStrip({
  title = "Ready to build something that works?",
  subtitle = "Get a free, no-obligation quote within one business day.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-3xl bg-[var(--c-primary)] p-8 text-white lg:p-12">
          <div>
            <h3 className="text-2xl font-extrabold sm:text-3xl">{title}</h3>
            <p className="mt-2 text-slate-300">{subtitle}</p>
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