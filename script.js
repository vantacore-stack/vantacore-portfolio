/* ========= VANTACORE.ID – script.js ========= */

/* -------------------------------------------------
   1. Pre-loader (fades out after DOM ready)
--------------------------------------------------*/
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.style.transition = 'opacity .6s';
    preloader.style.opacity = '0';
    setTimeout(() => preloader.remove(), 600);
  }
});

/* -------------------------------------------------
   2. Reveal on scroll (Intersection Observer)
--------------------------------------------------*/
const revealEls = document.querySelectorAll('.reveal');
const ioReveal = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        ioReveal.unobserve(e.target);
      }
    });
  },
  { threshold: 0.1 }
);
revealEls.forEach((el) => ioReveal.observe(el));

/* -------------------------------------------------
   3. Navbar shrink on scroll
--------------------------------------------------*/
const nav = document.querySelector('nav');
let lastY = 0;
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  nav.classList.toggle('scrolled', y > 20);
  nav.style.transform = y > lastY && y > 60 ? 'translateY(-100%)' : 'translateY(0)';
  lastY = y;
});

/* -------------------------------------------------
   4. Smooth scroll to anchor w/ offset
--------------------------------------------------*/
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (id.length > 1) {
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        const offset = nav.offsetHeight + 8;
        const pos = target.offsetTop - offset;
        window.scrollTo({ top: pos, behavior: 'smooth' });
      }
    }
  });
});

/* -------------------------------------------------
   5. Typing effect on hero title
--------------------------------------------------*/
function typeWriter(el, text, speed = 80) {
  el.textContent = '';
  let i = 0;
  const timer = setInterval(() => {
    el.textContent += text.charAt(i);
    i++;
    if (i === text.length) clearInterval(timer);
  }, speed);
}
const heroTitle = document.querySelector('#hero-typing');
if (heroTitle) {
  const original = heroTitle.dataset.text || heroTitle.textContent;
  typeWriter(heroTitle, original, 90);
}

/* -------------------------------------------------
   6. Copy e-mail to clipboard
--------------------------------------------------*/
document.querySelectorAll('.copy-mail').forEach((btn) => {
  btn.addEventListener('click', () => {
    const mail = btn.dataset.mail || 'hello@vantacore.id';
    navigator.clipboard.writeText(mail).then(() => {
      btn.textContent = 'Copied!';
      setTimeout(() => (btn.textContent = mail), 1200);
    });
  });
});

/* -------------------------------------------------
   7. Dark / light toggle (optional)
--------------------------------------------------*/
const toggleBtn = document.querySelector('#theme-toggle');
if (toggleBtn) {
  const root = document.documentElement;
  toggleBtn.addEventListener('click', () => {
    root.classList.toggle('light');
    localStorage.setItem('vanta-theme', root.classList.contains('light') ? 'light' : 'dark');
  });
  const saved = localStorage.getItem('vanta-theme');
  if (saved === 'light') root.classList.add('light');
}

/* -------------------------------------------------
   8. Dynamic year in footer
--------------------------------------------------*/
const yearSpan = document.querySelector('#year');
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

/* -------------------------------------------------
   9. Parallax hero background
--------------------------------------------------*/
window.addEventListener('scroll', () => {
  const hero = document.querySelector('header');
  if (hero) hero.style.transform = `translateY(${window.scrollY * 0.25}px)`;
});

/* -------------------------------------------------
   10. Lazy load external images
--------------------------------------------------*/
const lazyImgs = document.querySelectorAll('img[data-src]');
const ioLazy = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      const img = e.target;
      img.src = img.dataset.src;
      img.classList.remove('lazy');
      ioLazy.unobserve(img);
    }
  });
});
lazyImgs.forEach((img) => ioLazy.observe(img));

/* -------------------------------------------------
   11. Form validation (contact)
--------------------------------------------------*/
document.querySelectorAll('.contact-form').forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.email.value.trim();
    const msg   = form.message.value.trim();
    if (!email || !msg) {
      alert('Please fill all fields');
      return;
    }
    /* Kirim ke backend / webhook di sini */
    alert('Thank you! We will reply soon.');
    form.reset();
  });
});

/* -------------------------------------------------
   12. Ripple effect on buttons
--------------------------------------------------*/
document.querySelectorAll('.ripple').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const span = document.createElement('span');
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    span.style.cssText = `
      position:absolute;border-radius:50%;
      background:rgba(255,255,255,.6);
      transform:scale(0);width:${size}px;height:${size}px;
      left:${x}px;top:${y}px;animation:ripple .6s linear;
    `;
    btn.style.position = 'relative';
    btn.style.overflow = 'hidden';
    btn.appendChild(span);
    setTimeout(() => span.remove(), 600);
  });
});

/* CSS tambahan untuk ripple */
const rippleCSS = document.createElement('style');
rippleCSS.innerHTML = `
@keyframes ripple {
  to { transform: scale(2); opacity: 0; }
}`;
document.head.appendChild(rippleCSS);

/* -------------------------------------------------
   13. Service-worker offline (PWA-ready)
--------------------------------------------------*/
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}
