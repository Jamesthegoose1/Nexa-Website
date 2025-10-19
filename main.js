// js/main.js
// Misc page behaviors: smooth scroll, simple active nav
(() => {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        const href = a.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
        // close mobile nav if open
        const nav = document.getElementById('nav');
        if (nav && nav.classList.contains('open')) nav.classList.remove('open');
      });
    });
  
    // Highlight nav links on scroll (simple)
    const sections = Array.from(document.querySelectorAll('main section'));
    const navLinks = Array.from(document.querySelectorAll('.nav a'));
    const onScroll = () => {
      const y = window.scrollY + 120;
      let currentIndex = 0;
      sections.forEach((sec, i) => {
        if (sec.offsetTop <= y) currentIndex = i;
      });
      navLinks.forEach((link, i) => link.classList.toggle('active', i === currentIndex));
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
  })();
  