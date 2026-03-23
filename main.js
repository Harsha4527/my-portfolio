/* =============================================
   HARSHA VARDHAN — PORTFOLIO WEBSITE
   main.js — Shared JavaScript (all pages)
   ============================================= */

// ── HAMBURGER MENU ──
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}

// ── SCROLL FADE-IN (Intersection Observer) ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
});

// Observe all .fade-in elements
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ── NAVBAR SCROLL SHADOW ──
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 24) {
      navbar.style.background = 'rgba(9,9,11,0.97)';
    } else {
      navbar.style.background = 'rgba(9,9,11,0.85)';
    }
  });
}

// ── CONTACT FORM (prevent default, show feedback) ──
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    // The form uses mailto: action — browsers will open email client.
    // This handler adds a visual confirmation after a brief delay.
    const btn = this.querySelector('button[type="submit"]');
    if (btn) {
      setTimeout(() => {
        btn.textContent = 'Opening your email client…';
        btn.style.background = '#4af0d4';
        btn.style.color = '#09090b';
        setTimeout(() => {
          btn.textContent = 'Send Message';
          btn.style.background = '';
          btn.style.color = '';
        }, 3000);
      }, 100);
    }
  });
}
