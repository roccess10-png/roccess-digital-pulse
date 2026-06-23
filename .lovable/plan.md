Add visual depth to all cards across the site so they stop looking like flat borders on the background.

## What we're fixing
Cards currently rely on thin borders + flat backgrounds with no shadow or elevation. In dark mode this is especially bad — low-contrast borders disappear into the background and cards look like outlined boxes rather than elevated surfaces.

## How

### 1. Add depth design tokens to `src/styles.css`
New semantic tokens for both light and dark modes:
- `--card-surface`: a card background that's slightly different from the page background
- `--card-shadow`: a soft colored shadow that lifts the card off the page
- `--card-inner-light`: a subtle top-edge inner highlight that simulates a light source hitting the surface
- `--card-border`: a border color that supports the depth instead of fighting it

### 2. Create a reusable card-depth utility class
A single `.card-depth` class (via `@utility`) that bundles:
- background: `var(--card-surface)`
- box-shadow: `var(--card-shadow)`
- optional inner highlight
- smooth transition on hover for a gentle lift

### 3. Apply consistently across all cards
Update every card-like element to use the new utility:
- Home page: service highlight cards, process cards
- Services page: service detail cards, process cards, pricing cards
- Work page: project cards, testimonial cards, industry tags
- About page: reason cards, value cards
- Contact page: form card, FAQ accordion, info-row icon boxes

### 4. Dark-mode specific polish
In dark mode, give cards:
- A slightly raised surface (brighter than the page background, not darker)
- A purple-tinted soft shadow
- An inner top highlight at `rgba(255,255,255,0.04)` to catch light
- On hover: slightly more lift + brighter highlight

### 5. Light-mode treatment
In light mode, keep the clean aesthetic but add:
- A very soft slate-tinted shadow
- Slightly warmer card surface vs pure white background
- No drastic changes — the current light look is fine, just needs subtle elevation

## Files to change
- `src/styles.css` — new tokens + `@utility` class
- `src/routes/index.tsx` — service cards, process cards
- `src/routes/services.tsx` — service cards, process cards, pricing cards
- `src/routes/work.tsx` — project cards, testimonials, industry tags
- `src/routes/about.tsx` — reason cards, value cards
- `src/routes/contact.tsx` — form card, FAQ accordion, info-row boxes