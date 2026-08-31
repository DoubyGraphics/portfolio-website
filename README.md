# Douby Graphics — Portfolio Website

A single‑page showcase for graphic design work focused on bold flyers, brand identities, and campaigns for millennial and Gen‑Z entrepreneurs and event organizers.

## Pages / sections

| Section | Identifier |
|---------|------------|
| Navigation | `<header id="nav">` |
## Features (what the JS does)

| Feature | What it does | Where it lives |
|---------|--------------|----------------|
| **Nav shrink on scroll** | Header reduces height and gets a subtle shadow after scrolling past 40px | `script.js:6-12` |
| **Mobile menu** | Hamburger toggles a full‑screen overlay; clicking links closes it | `script.js:14-26` |
| **Theme toggle** | Switches between light and dark mode; preference is saved in `localStorage` | `script.js:28-76` |
| **Reveal‑on‑scroll** | Elements fade in with a staggered delay as they enter the viewport | `script.js:79-88` |
## File structure

```
PORTFOLIO-WEBSITE/
├── index.html        # Markup and semantic structure
├── style.css         # All visual styling (responsive, dark/light mode)
├── script.js         # All interactions (see table above)
└── images/           # Bio photo + selected portfolio work images
```
| **Lightbox gallery** | Click any project image to open a full‑screen preview; Esc to close, click outside to close, arrow keys navigate | `script.js:135-182` |
## Customization

Open the files and replace the following:

| What to change | Where it is | Example |
|----------------|-------------|---------|
| Your name / studio name | `index.html` (`<a href="#top" class="logo">douby<span>.</span>graphics</a>`) | `aaroncreative` |
| Primary contact email | `index.html` CTA and footer (`doubygraphics@gmail.com`) | `your@email.com` |
| Social links | `index.html` footer social icons (`Instagram`, `Behance`, `WhatsApp`, `X`) | Update `href` values |
| Phone / location (if desired) | Footer text near the bottom | Add your details |
## Publishing

- **GitHub Pages**: In repo settings, set Pages source to the `main` (or `master`) branch root. Push your changes and the site publishes automatically.
- **Netlify**: Drag the entire folder onto netlify.app or connect the repo via the dashboard.
- **Vercel**: Import the project, Vercel will detect `index.html` as the entry point.
| Project images | Replace files in `images/` keeping similar names, or update `<img src="...">` in the work grid | Use 1200–1600px wide JPGs (~200–400 KB) |
| Color scheme | Edit CSS variables at the top of `style.css` (`--blue`, `--mint`, `--navy`) | Already set to `#0432BC`, `#0FF29F`, `#010440` |
| Fonts | Google‑font URLs in `<head>` of `index.html` (Poppins + Playfair/IVyPresto) | Add/remove weights as needed |
| Hero text / typing animation | `script.js` (`const fullText = 'Be the brand that raises the bar.';`) | Change the sentence, accent word, or scribble text |
| **Custom cursor** | Small circle follows the mouse on fine‑pointer devices (laptops/trackpads) | `script.js:185-202` |
## Browser & device notes

- The custom cursor only appears on devices with a "fine" pointer (mouse/trackpad). It is suppressed on touch‑only devices.
- The lightbox works with keyboard navigation: `Escape` closes, `ArrowLeft`/`ArrowRight` cycles images.
- Reduced‑motion preference is respected for the theme‑fade transition.
- The site uses `color-scheme: light` / `dark` so OS‑level light/dark settings are honored (unless the user has manually set a theme).
| **Hero typing animation** | Types "Be the brand that raises the bar." with an accented first word and a scribble‑style ending | `script.js:208-265` |
| **Footer year** | Automatically updates the copyright year each January 1 | `script.js:205` |
| Hero (with typing animation) | `<section class="hero">` |
| Work / Selected projects | `<section id="work">` |
## No build dependencies

There are no npm packages, no bundler, and no runtime required beyond a web browser. All CSS is vanilla, and all JavaScript is vanilla ES6+. If you want to add more interactivity, keep it vanilla or use lightweight vanilla‑first libraries.
| About / Bio | `<section id="about">` |
| Services | `<section id="services">` |
| CTA / Contact | `<section class="cta" id="contact">` |
| Footer | `<footer class="footer">` |
---

## Quick start

1. Open `index.html` in a modern browser (Chrome, Firefox, Safari, Edge).
2. No build step, no npm install, no local server required — just drag the file or open it directly.
# Douby Graphics — Portfolio Website

A single‑page showcase for graphic design work focused on bold flyers, brand identities, and campaigns for millennial and Gen‑Z entrepreneurs and event organizers.

## Pages / sections

| Section | Identifier |
|---------|------------|
| Navigation | `<header id="nav">` |
## Features (what the JS does)

| Feature | What it does | Where it lives |
|---------|--------------|----------------|
| **Nav shrink on scroll** | Header reduces height and gets a subtle shadow after scrolling past 40px | `script.js:6-12` |
| **Mobile menu** | Hamburger toggles a full‑screen overlay; clicking links closes it | `script.js:14-26` |
| **Theme toggle** | Switches between light and dark mode; preference is saved in `localStorage` | `script.js:28-76` |
| **Reveal‑on‑scroll** | Elements fade in with a staggered delay as they enter the viewport | `script.js:79-88` |
## File structure

```
PORTFOLIO-WEBSITE/
├── index.html        # Markup and semantic structure
├── style.css         # All visual styling (responsive, dark/light mode)
├── script.js         # All interactions (see table above)
└── images/           # Bio photo + selected portfolio work images
```
| **Lightbox gallery** | Click any project image to open a full‑screen preview; Esc to close, click outside to close, arrow keys navigate | `script.js:135-182` |
## Customization

Open the files and replace the following:

| What to change | Where it is | Example |
|----------------|-------------|---------|
| Your name / studio name | `index.html` (`<a href="#top" class="logo">douby<span>.</span>graphics</a>`) | `aaroncreative` |
| Primary contact email | `index.html` CTA and footer (`doubygraphics@gmail.com`) | `your@email.com` |
| Social links | `index.html` footer social icons (`Instagram`, `Behance`, `WhatsApp`, `X`) | Update `href` values |
| Phone / location (if desired) | Footer text near the bottom | Add your details |
## Publishing

- **GitHub Pages**: In repo settings, set Pages source to the `main` (or `master`) branch root. Push your changes and the site publishes automatically.
- **Netlify**: Drag the entire folder onto netlify.app or connect the repo via the dashboard.
- **Vercel**: Import the project, Vercel will detect `index.html` as the entry point.
| Project images | Replace files in `images/` keeping similar names, or update `<img src="...">` in the work grid | Use 1200–1600px wide JPGs (~200–400 KB) |
| Color scheme | Edit CSS variables at the top of `style.css` (`--blue`, `--mint`, `--navy`) | Already set to `#0432BC`, `#0FF29F`, `#010440` |
| Fonts | Google‑font URLs in `<head>` of `index.html` (Poppins + Playfair/IVyPresto) | Add/remove weights as needed |
| Hero text / typing animation | `script.js` (`const fullText = 'Be the brand that raises the bar.';`) | Change the sentence, accent word, or scribble text |
| **Custom cursor** | Small circle follows the mouse on fine‑pointer devices (laptops/trackpads) | `script.js:185-202` |
## Browser & device notes

- The custom cursor only appears on devices with a "fine" pointer (mouse/trackpad). It is suppressed on touch‑only devices.
- The lightbox works with keyboard navigation: `Escape` closes, `ArrowLeft`/`ArrowRight` cycles images.
- Reduced‑motion preference is respected for the theme‑fade transition.
- The site uses `color-scheme: light` / `dark` so OS‑level light/dark settings are honored (unless the user has manually set a theme).
| **Hero typing animation** | Types "Be the brand that raises the bar." with an accented first word and a scribble‑style ending | `script.js:208-265` |
| **Footer year** | Automatically updates the copyright year each January 1 | `script.js:205` |
| Hero (with typing animation) | `<section class="hero">` |
| Work / Selected projects | `<section id="work">` |
## No build dependencies

There are no npm packages, no bundler, and no runtime required beyond a web browser. All CSS is vanilla, and all JavaScript is vanilla ES6+. If you want to add more interactivity, keep it vanilla or use lightweight vanilla‑first libraries.
| About / Bio | `<section id="about">` |
| Services | `<section id="services">` |
| CTA / Contact | `<section class="cta" id="contact">` |
| Footer | `<footer class="footer">` |

---
---

## Quick start

1. Open `index.html` in a modern browser (Chrome, Firefox, Safari, Edge).
2. No build step, no npm install, no local server required — just drag the file or open it directly.


A single‑page showcase for graphic design work focused on bold flyers, brand identities, and campaigns for millennial and Gen‑Z entrepreneurs and event organizers.

---

## Quick start

1. Open `index.html` in a modern browser (Chrome, Firefox, Safari, Edge).
2. No build step, no npm install, no local server required — just drag the file or open it directly.

## Pages / sections

| Section | Identifier |
|---------|------------|
| Navigation | `<header id="nav">` |
| Hero (with typing animation) | `<section class="hero">` |
| Work / Selected projects | `<section id="work">` |
| About / Bio | `<section id="about">` |
| Services | `<section id="services">` |
| CTA / Contact | `<section class="cta" id="contact">` |
| Footer | `<footer class="footer">` |

## Features (what the JS does)

| Feature | What it does | Where it lives |
|---------|--------------|----------------|
| **Nav shrink on scroll** | Header reduces height and gets a subtle shadow after scrolling past 40px | `script.js:6-12` |
| **Mobile menu** | Hamburger toggles a full‑screen overlay; clicking links closes it | `script.js:14-26` |
| **Theme toggle** | Switches between light and dark mode; preference is saved in `localStorage` | `script.js:28-76` |
| **Reveal‑on‑scroll** | Elements fade in with a staggered delay as they enter the viewport | `script.js:79-88` |
| **Lightbox gallery** | Click any project image to open a full‑screen preview; Esc to close, click outside to close, arrow keys navigate | `script.js:135-182` |
| **Custom cursor** | Small circle follows the mouse on fine‑pointer devices (laptops/trackpads) | `script.js:185-202` |
| **Hero typing animation** | Types "Be the brand that raises the bar." with an accented first word and a scribble‑style ending | `script.js:208-265` |
| **Footer year** | Automatically updates the copyright year each January 1 | `script.js:205` |

## File structure

```
PORTFOLIO-WEBSITE/
├── index.html        # Markup and semantic structure
├── style.css         # All visual styling (responsive, dark/light mode)
├── script.js         # All interactions (see table above)
└── images/           # Bio photo + selected portfolio work images
```

## Customization

Open the files and replace the following:

| What to change | Where it is | Example |
|----------------|-------------|---------|
| Your name / studio name | `index.html` (`<a href="#top" class="logo">douby<span>.</span>graphics</a>`) | `aaroncreative` |
| Primary contact email | `index.html` CTA and footer (`doubygraphics@gmail.com`) | `your@email.com` |
| Social links | `index.html` footer social icons (`Instagram`, `Behance`, `WhatsApp`, `X`) | Update `href` values |
| Phone / location (if desired) | Footer text near the bottom | Add your details |
| Project images | Replace files in `images/` keeping similar names, or update `<img src="...">` in the work grid | Use 1200–1600px wide JPGs (~200–400 KB) |
| Color scheme | Edit CSS variables at the top of `style.css` (`--blue`, `--mint`, `--navy`) | Already set to `#0432BC`, `#0FF29F`, `#010440` |
| Fonts | Google‑font URLs in `<head>` of `index.html` (Poppins + Playfair/IVyPresto) | Add/remove weights as needed |
| Hero text / typing animation | `script.js` (`const fullText = 'Be the brand that raises the bar.';`) | Change the sentence, accent word, or scribble text |

## Publishing

- **GitHub Pages**: In repo settings, set Pages source to the `main` (or `master`) branch root. Push your changes and the site publishes automatically.
- **Netlify**: Drag the entire folder onto netlify.app or connect the repo via the dashboard.
- **Vercel**: Import the project, Vercel will detect `index.html` as the entry point.

## Browser & device notes

- The custom cursor only appears on devices with a "fine" pointer (mouse/trackpad). It is suppressed on touch‑only devices.
- The lightbox works with keyboard navigation: `Escape` closes, `ArrowLeft`/`ArrowRight` cycles images.
- Reduced‑motion preference is respected for the theme‑fade transition.
- The site uses `color-scheme: light` / `dark` so OS‑level light/dark settings are honored (unless the user has manually set a theme).

## No build dependencies

There are no npm packages, no bundler, and no runtime required beyond a web browser. All CSS is vanilla, and all JavaScript is vanilla ES6+. If you want to add more interactivity, keep it vanilla or use lightweight vanilla‑first libraries.

## Quick start

1. Open `index.html` in a modern browser (Chrome, Firefox, Safari, Edge).
2. No build step, no npm install, no local server required — just drag the file or open it directly.

---

## Pages / sections

| Section | Identifier |
|---------|------------|
| Navigation | `<header id="nav">` |
| Hero (with typing animation) | `<section class="hero">` |
| Work / Selected projects | `<section id="work">` |
| About / Bio | `<section id="about">` |
| Services | `<section id="services">` |
| CTA / Contact | `<section class="cta" id="contact">` |
| Footer | `<footer class="footer">` |

---

---

## Features (what the JS does)

| Feature | What it does | Where it lives |
|---------|--------------|----------------|
| **Nav shrink on scroll** | Header reduces height and gets a subtle shadow after scrolling past 40px | `script.js:6-12` |
| **Mobile menu** | Hamburger toggles a full‑screen overlay; clicking links closes it | `script.js:14-26` |
| **Theme toggle** | Switches between light and dark mode; preference is saved in `localStorage` | `script.js:28-76` |
| **Reveal‑on‑scroll** | Elements fade in with a staggered delay as they enter the viewport | `script.js:79-88` |
| **Lightbox gallery** | Click any project image to open a full‑screen preview; Esc to close, click outside to close, arrow keys navigate | `script.js:135-182` |
| **Custom cursor** | Small circle follows the mouse on fine‑pointer devices (laptops/trackpads) | `script.js:185-202` |
| **Hero typing animation** | Types "Be the brand that raises the bar." with an accented first word and a scribble‑style ending | `script.js:208-265` |
| **Footer year** | Automatically updates the copyright year each January 1 | `script.js:205` |

---

## File structure

```
PORTFOLIO-WEBSITE/
├── index.html        # Markup and semantic structure
├── style.css         # All visual styling (responsive, dark/light mode)
├── script.js         # All interactions (see table above)
└── images/           # Bio photo + selected portfolio work images
```

---

## Customization

Open the files and replace the following:

| What to change | Where it is | Example |
|----------------|-------------|---------|
| Your name / studio name | `index.html` (`<a href="#top" class="logo">douby<span>.</span>graphics</a>`) | `aaroncreative` |
| Primary contact email | `index.html` CTA and footer (`doubygraphics@gmail.com`) | `your@email.com` |
| Social links | `index.html` footer social icons (`Instagram`, `Behance`, `WhatsApp`, `X`) | Update `href` values |
| Phone / location (if desired) | Footer text near the bottom | Add your details |
| Project images | Replace files in `images/` keeping similar names, or update `<img src="...">` in the work grid | Use 1200–1600px wide JPGs (~200–400 KB) |
| Color scheme | Edit CSS variables at the top of `style.css` (`--blue`, `--mint`, `--navy`) | Already set to `#0432BC`, `#0FF29F`, `#010440` |
| Fonts | Google‑font URLs in `<head>` of `index.html` (Poppins + Playfair/IVyPresto) | Add/remove weights as needed |
| Hero text / typing animation | `script.js` (`const fullText = 'Be the brand that raises the bar.';`) | Change the sentence, accent word, or scribble text |

---

## Publishing

- **GitHub Pages**: In repo settings, set Pages source to the `main` (or `master`) branch root. Push your changes and the site publishes automatically.
- **Netlify**: Drag the entire folder onto netlify.app or connect the repo via the dashboard.
- **Vercel**: Import the project, Vercel will detect `index.html` as the entry point.

---

## Browser & device notes

- The custom cursor only appears on devices with a "fine" pointer (mouse/trackpad). It is suppressed on touch‑only devices.
- The lightbox works with keyboard navigation: `Escape` closes, `ArrowLeft`/`ArrowRight` cycles images.
- Reduced‑motion preference is respected for the theme‑fade transition.
- The site uses `color-scheme: light` / `dark` so OS‑level light/dark settings are honored (unless the user has manually set a theme).

---

## No build dependencies

There are no npm packages, no bundler, and no runtime required beyond a web browser. All CSS is vanilla, and all JavaScript is vanilla ES6+. If you want to add more interactivity, keep it vanilla or use lightweight vanilla‑first libraries.
