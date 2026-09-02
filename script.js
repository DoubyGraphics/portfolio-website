/* ============================================
   TOBI STUDIO — interactions
   ============================================ */

/* ---------- Nav: shrink on scroll + mobile menu ---------- */
const nav = document.getElementById('nav');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

hamburger.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

navLinks.querySelectorAll('a').forEach(link =>
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  })
);

/* ---------- Theme toggle (dark / light mode) ---------- */
const rootEl = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const themeColorMeta = document.getElementById('themeColorMeta');

const THEME_META = {
  light: { label: 'Switch to dark mode', color: '#0432BC' },
  dark:  { label: 'Switch to light mode', color: '#05082B' }
};

const syncThemeUI = () => {
  const dark = rootEl.dataset.theme === 'dark';
  themeToggle.setAttribute('aria-pressed', String(dark));
  themeToggle.setAttribute('aria-label', THEME_META[dark ? 'dark' : 'light'].label);
  if (themeColorMeta) themeColorMeta.setAttribute('content', THEME_META[dark ? 'dark' : 'light'].color);
};

let pingTimer;
themeToggle.addEventListener('click', () => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reduceMotion) {
    // Crossfade the theme colors across the page
    rootEl.classList.remove('theme-fade');
    void rootEl.offsetWidth; // restart the transition cleanly on rapid clicks
    rootEl.classList.add('theme-fade');
    clearTimeout(pingTimer);
    pingTimer = setTimeout(() => rootEl.classList.remove('theme-fade'), 450);

    // Mint ping ring from the button
    themeToggle.classList.remove('ping');
    void themeToggle.offsetWidth;
    themeToggle.classList.add('ping');
  }

  rootEl.dataset.theme = rootEl.dataset.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('dg-theme', rootEl.dataset.theme);
  syncThemeUI();
});

// Follow the OS preference only while the user hasn't chosen manually
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  if (!localStorage.getItem('dg-theme')) {
    rootEl.dataset.theme = e.matches ? 'dark' : 'light';
    syncThemeUI();
  }
});

syncThemeUI();

/* ---------- Reveal on scroll ---------- */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => entry.target.classList.add('visible'), delay);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ---------- Services: sticky card stack (scroll-driven scale + blur) ----------
   Mirrors the reference site's "sticky-scale-blur" on-scroll effect:
   each pinned card scales to 0.9, dims to 93% brightness, lifts contrast
   to 105% and blurs as the NEXT card slides up to cover it. Progress is
   driven by the next card's viewport position (useNextElementProgress),
   with a depth-based easing curve so earlier cards ramp more gradually. */
const serviceCards = Array.from(document.querySelectorAll('.service-card'));
const stackSection = document.querySelector('.services');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (serviceCards.length > 1 && stackSection) {
  const lastCard = serviceCards[serviceCards.length - 1];

  const updateStack = () => {
    if (prefersReducedMotion.matches) return;

    // Skip the math while the section is far off-screen
    const stackRect = stackSection.getBoundingClientRect();
    if (stackRect.bottom < -200 || stackRect.top > window.innerHeight + 200) return;

    const vh = window.innerHeight;
    serviceCards.forEach((card, i) => {
      if (card === lastCard) { card.style.setProperty('--p', 0); return; }

      const next = serviceCards[i + 1];
      const stickyTop = parseFloat(getComputedStyle(next).top) || 0;
      const nextTop = next.getBoundingClientRect().top;

      // 0 while the next card is still below the fold, 1 once it fully covers this card
      let p = 1 - (nextTop - stickyTop) / (vh - stickyTop);
      p = Math.min(1, Math.max(0, p));
      // Depth curve — cards earlier in the stack ease in more gently
      p = Math.pow(p, serviceCards.length - 1 - i);
      card.style.setProperty('--p', p.toFixed(4));
    });
  };

  let stackTicking = false;
  const queueStackUpdate = () => {
    if (stackTicking) return;
    stackTicking = true;
    requestAnimationFrame(() => { stackTicking = false; updateStack(); });
  };

  window.addEventListener('scroll', queueStackUpdate, { passive: true });
  window.addEventListener('resize', queueStackUpdate);
  updateStack();
}

/* ---------- Animated counters ---------- */
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = +el.dataset.target;
    const suffix = el.dataset.suffix || '';
    const duration = 1600;
    const start = performance.now();

    const tick = now => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    counterObserver.unobserve(el);
  });
}, { threshold: 0.6 });
document.querySelectorAll('.stat-num').forEach(el => counterObserver.observe(el));

/* ---------- Lightbox for portfolio images ---------- */
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
const lightboxCaption = document.getElementById('lightboxCaption');

document.querySelectorAll('.work-item').forEach(item => {
  item.addEventListener('click', () => {
    lightboxImg.src = item.querySelector('img').src;
    lightboxCaption.textContent = item.dataset.title;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

const closeLightbox = () => {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
};
lightbox.addEventListener('click', closeLightbox);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
});

/* ---------- Custom cursor (fine pointers only) ---------- */
if (window.matchMedia('(pointer: fine)').matches) {
  const cursor = document.querySelector('.cursor');
  let x = 0, y = 0, cx = 0, cy = 0;

  document.addEventListener('mousemove', e => { x = e.clientX; y = e.clientY; });

  (function loop() {
    cx += (x - cx) * 0.2;
    cy += (y - cy) * 0.2;
    cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
    requestAnimationFrame(loop);
  })();

  document.querySelectorAll('a, button, .work-item, .service-card, .price-card, .quick-list li').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('grow'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('grow'));
  });
}

/* ---------- Pricing: currency toggle (Naira / Dollar) ---------- */
const currencyBtns = document.querySelectorAll('.currency-btn');
const currencyNodes = document.querySelectorAll('[data-ngn]');

currencyBtns.forEach(btn => btn.addEventListener('click', () => {
  const currency = btn.dataset.currency;

  currencyBtns.forEach(b => {
    const active = b === btn;
    b.classList.toggle('active', active);
    b.setAttribute('aria-pressed', String(active));
  });

  currencyNodes.forEach(node => {
    node.textContent = currency === 'usd' ? node.dataset.usd : node.dataset.ngn;
  });
}));

/* ---------- Footer year ---------- */
document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- Hero typing animation ---------- */
const heroHeading = document.querySelector('.hero h1.display');
if (heroHeading) {
  const fullText = 'Be the brand that raises the bar.';
  const accentText = 'Be the brand';
  const scribbleText = 'raises the bar';
  const scribbleSVG = '<svg viewBox="0 0 200 80" preserveAspectRatio="none" aria-hidden="true"><ellipse cx="100" cy="40" rx="95" ry="35" fill="none" stroke="var(--mint)" stroke-width="3" stroke-dasharray="800" stroke-dashoffset="800" /></svg>';
  let charIndex = 0;
  let isDeleting = false;
  let delay = 50;

  function typeHero() {
    const currentText = fullText.slice(0, charIndex);
    
    // Build the HTML with proper formatting
    let displayHTML = '';
    if (charIndex <= accentText.length) {
      // Still typing the accented opening
      displayHTML = `<span class="accent hl">${currentText}</span>`;
    } else if (charIndex <= fullText.length - scribbleText.length - 1) {
      // Typing middle part
      const middleText = fullText.slice(accentText.length, charIndex);
      displayHTML = `<span class="accent hl">${accentText}</span>${middleText}`;
    } else if (charIndex < fullText.length) {
      // Typing the scribbled ending
      const scribbleStart = fullText.length - scribbleText.length - 1;
      const scribbleProgress = charIndex - scribbleStart;
      const scribblePartial = scribbleText.slice(0, scribbleProgress);
      const middleText = fullText.slice(accentText.length, scribbleStart);
      displayHTML = `<span class="accent hl">${accentText}</span>${middleText}<span class="scribble">${scribblePartial}${scribbleSVG}</span>.`;
    } else {
      // Complete
      const middleText = fullText.slice(accentText.length, fullText.length - scribbleText.length - 1);
      displayHTML = `<span class="accent hl">${accentText}</span>${middleText}<span class="scribble">${scribbleText}${scribbleSVG}</span>.`;
    }
    
    heroHeading.innerHTML = displayHTML;

    if (!isDeleting && charIndex < fullText.length) {
      charIndex++;
      delay = 50 + Math.random() * 30;
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      delay = 30;
    } else if (!isDeleting && charIndex === fullText.length) {
      // Pause at end
      isDeleting = true;
      delay = 2000;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      delay = 500;
    }

    setTimeout(typeHero, delay);
  }

  // Start typing after a brief delay
  setTimeout(typeHero, 300);
}
