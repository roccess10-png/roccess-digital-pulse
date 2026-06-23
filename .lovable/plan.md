## Goal

In dark mode, every page (Home, Services, About, Contact) should look like the Work page: deep purple/navy background, no white card/section spots. Light mode stays exactly as it is today.

## Approach

The pages use a custom palette (`--c-primary`, `--c-accent`, `--c-cta`, `--c-soft`, `--c-text`) plus raw `bg-white` / `border-slate-200` / `divide-slate-200` for cards and form fields. The Work page already looks right because it uses `bg-[var(--c-primary)]` + `bg-white/5` translucent cards.

Fix entirely in CSS — no component rewrites — by:

1. **Re-mapping the `--c-*` tokens under `.dark`** in `src/styles.css`:
   - `--c-primary`: stays the deep navy/purple (this is already the "dark" surface)
   - `--c-soft`: from `#F8FAFC` → a darker shade (e.g. `#13132A`) so `bg-[var(--c-soft)]` sections stop being white
   - `--c-text`: from slate-800 → light slate (e.g. `#E2E8F0`) so headings/body using `text-[var(--c-primary)]` remain readable… actually invert: in dark mode, classes like `text-[var(--c-primary)]` need to render light. Simplest: in `.dark`, set `--c-primary: #F1F5F9` for text use AND introduce a separate `--c-surface` for the dark backdrop. But pages use `--c-primary` for both backgrounds and text.
   - Cleanest split: in `.dark` set
     - `--c-primary: #F1F5F9` (so text reads light)
     - `--c-soft: #0F0F23` (so soft section backgrounds are dark)
     - and override the hero/testimonial sections that use `bg-[var(--c-primary)]` separately — see step 2.

2. **Add scoped dark overrides** in `src/styles.css` for the raw-white surfaces and the `bg-[var(--c-primary)]` sections so they don't flip to light:

```css
.dark {
  --c-primary: #F1F5F9;     /* text color in dark */
  --c-soft: #0F0F23;        /* soft section bg in dark */
  --c-text: #E2E8F0;
  --c-surface: #1A1A2E;     /* new: dark hero/cta surface */
}

/* Recolor raw white surfaces in dark mode */
.dark .bg-white { background-color: #14142B !important; }
.dark .border-slate-200 { border-color: rgb(255 255 255 / 0.10) !important; }
.dark .divide-slate-200 > :not([hidden]) ~ :not([hidden]) { border-color: rgb(255 255 255 / 0.10) !important; }
.dark .placeholder\:text-slate-400::placeholder { color: rgb(148 163 184); }
```

3. **Fix the hero / quote sections** that hardcode `bg-[var(--c-primary)] text-white`. Since `--c-primary` is now light in dark mode, those sections would invert badly. Override them with a small utility: add `.dark section.bg-\[var\(--c-primary\)\] { background-color: #1A1A2E; }` — or, simpler, replace the few usages (4 spots across index.tsx and work.tsx) to use a new `--c-surface` token that stays dark in both themes. Edit only those className strings.

4. **Ensure the `dark` class is actually toggled at the root.** The summary noted `useDarkMode` is commented out in `__root.tsx`. Re-enable it (it's already wired in the header toggle) so the `.dark` class lands on `<html>`/`<body>`.

## Files to change

- `src/styles.css` — add `.dark` overrides for `--c-*` tokens, raw `bg-white`, `border-slate-200`, `divide-slate-200`, and a new `--c-surface` token.
- `src/routes/__root.tsx` — re-enable the dark-mode root effect so `.dark` toggles globally.
- `src/routes/index.tsx`, `src/routes/work.tsx` — swap the 3–4 `bg-[var(--c-primary)]` hero/testimonial section backgrounds to `bg-[var(--c-surface)]` (and matching `text-[var(--c-cta)]` on the inner button keeps working).

## Out of scope

- No layout, copy, or component restructuring.
- Light mode is untouched.
- The header dark-toggle button already exists; not redesigning it.
