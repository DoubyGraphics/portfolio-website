# Portfolio Website — Tobi Studio

A modern, single-page portfolio for a graphic designer targeting millennial & gen-Z
entrepreneurs and event organizers.

## Brand
- **Colors:** `#0432BC` (deep blue) · `#0FF29F` (mint) · `#010440` (dark navy)
- **Type:** Poppins (body) + IvyPresto Display Italic (headings — Playfair Display Italic loaded as a free fallback)

## Structure
```
PORTFOLIO-WEBSITE/
├── index.html      # Single-page site
├── style.css       # All styling (responsive, desktop + mobile)
├── script.js       # Reveal animations, counters, lightbox, mobile nav
└── images/         # Bio photo + selected portfolio works
```

## Sections
Nav · Hero · Marquee · About/Bio (with stats counters) · Services · Selected Work (lightbox gallery) · CTA · Footer

## Run locally
Just open `index.html` in a browser — no build step or dependencies.

## Publishing
Enable GitHub Pages (Settings → Pages → deploy from `main` branch root), or drop
the folder on Netlify/Vercel.

## Customization checklist
- [ ] Replace placeholder name "Tobi" with the real name
- [ ] Update `hello@tobistudio.design` and social links in the CTA/footer
- [ ] (Optional) Optimize `images/` — export ~1200–1600px wide JPGs (~200–400 KB) for faster page loads
