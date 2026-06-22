import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useDarkMode } from "../hooks/useDarkMode";

export const WHATSAPP_NUMBER = "260955816380";

const nav = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useDarkMode();

  return (
    <div className="min-h-screen bg-white font-sans text-[var(--c-text)] antialiased transition-colors dark:bg-[#0B0B1A] dark:text-slate-200">
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-[#0B0B1A]/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--c-primary)]">
              <span className="text-lg font-extrabold text-[var(--c-cta)]">R</span>
            </div>
            <span className="text-xl font-extrabold tracking-tight text-[var(--c-primary)] dark:text-white">Roccess</span>
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-sm font-medium text-slate-600 transition hover:text-[var(--c-primary)] dark:text-slate-300 dark:hover:text-[var(--c-cta)]"
                activeProps={{ className: "text-sm font-semibold text-[var(--c-primary)] dark:text-[var(--c-cta)]" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsDark(!isDark)}
              className="rounded-full border border-slate-200 p-2 text-[var(--c-primary)] transition hover:bg-slate-100 dark:border-white/15 dark:text-[var(--c-cta)] dark:hover:bg-white/10"
              aria-label="Toggle dark mode"
              title={isDark ? "Switch to light" : "Switch to dark"}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link
              to="/contact"
              className="hidden rounded-full bg-[var(--c-cta)] px-5 py-2.5 text-sm font-semibold text-[var(--c-primary)] shadow-sm transition hover:opacity-90 md:inline-flex"
            >
              Get a Quote
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-md p-2 text-[var(--c-primary)] dark:text-white md:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="border-t border-slate-100 bg-white px-6 py-4 dark:border-white/10 dark:bg-[#0B0B1A] md:hidden">
            <div className="flex flex-col gap-4">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-slate-700 dark:text-slate-200"
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
              <p className="mt-1">+{WHATSAPP_NUMBER} | +260974788182</p>
              <p className="mt-1">roccess10@gmail.com</p>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="mt-3 inline-block text-[var(--c-cta)] hover:underline">
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