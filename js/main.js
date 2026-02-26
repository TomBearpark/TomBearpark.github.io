/* ============================================================
   Dark Mode Toggle
   ============================================================ */
const themeToggle = document.getElementById('theme-toggle');
const htmlEl = document.documentElement;

function getPreferredTheme() {
  const saved = localStorage.getItem('theme');
  if (saved) return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function setTheme(theme) {
  htmlEl.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

setTheme(getPreferredTheme());

themeToggle.addEventListener('click', () => {
  const current = htmlEl.getAttribute('data-theme');
  setTheme(current === 'dark' ? 'light' : 'dark');
});

/* ============================================================
   Sticky Navigation
   ============================================================ */
const navbar = document.getElementById('navbar');
const hero = document.getElementById('hero');

function handleScroll() {
  const heroBottom = hero.offsetHeight * 0.8;
  if (window.scrollY > heroBottom) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleScroll, { passive: true });
handleScroll();

/* ============================================================
   Smooth scroll for nav links
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
