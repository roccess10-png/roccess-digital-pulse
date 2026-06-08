import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

export const WHATSAPP_NUMBER = "260000000000";

const nav = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-[var(--c-text)] antialiased">
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--c-primary)]">
              <span className="text-lg font-extrabold text-[var(--c-cta)]">R</span>
            </div>
            <span className="text-xl font-extrabold tracking-tight text-[var(--c-primary)]">Roccess</span>
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-sm font-medium text-slate-600 transition hover:text-[var(--c-primary)]"
                activeProps={{ className: "text-sm font-semibold text-[var(--c-primary)]" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <Link
            to="/contact"
            className="hidden rounded-full bg-[var(--c-cta)] px-5 py-2.5 text-sm font-semibold text-[var(--c-primary)] shadow-sm transition hover:opacity-90 md:inline-flex"
          >
            Get a Quote
          </Link>
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
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-slate-700"
                >
                  {n.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="rounded-full bg-[var(--c-cta)] px-5 py-2.5 text-center text-sm font-semibold text-[var(--c-primary)]"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </header>

      {children}

      <footer className="bg-[var(--c-primary)] py-14 text-slate-400">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-10 md:grid-cols-4">
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
              <div className="font-semibold text-white">Explore</div>
              <ul className="mt-3 space-y-2">
                {nav.map((n) => (
                  <li key={n.to}>
                    <Link to={n.to} className="hover:text-[var(--c-cta)]">{n.label}</Link>
                  </li>
                ))}
              </ul>
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