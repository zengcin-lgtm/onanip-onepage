(() => {
  const root = document.getElementById('onanip-site');
  if (!root) return;
  const nav = root.querySelector('#oni-nav');
  const toggle = root.querySelector('.oni-menu');
  if (nav && toggle) {
    root.classList.add('oni-js');
    toggle.hidden = false;
    const closeMenu = () => { toggle.setAttribute('aria-expanded','false'); nav.classList.remove('oni-open'); };
    toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded',String(open)); nav.classList.toggle('oni-open',open); });
    root.addEventListener('keydown', event => { if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { closeMenu(); toggle.focus(); } });
    root.addEventListener('click', event => {
      const link = event.target.closest('a');
      if (link && link.getAttribute('href').startsWith('#oni-')) {
        event.preventDefault();
        closeMenu();
        const section = root.querySelector(link.getAttribute('href'));
        if (section) section.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});
      } else if (!event.target.closest('.oni-header')) closeMenu();
    });
    window.matchMedia('(max-width: 820px)').addEventListener('change',closeMenu);
  }
  const year = root.querySelector('[data-oni-year]');
  if (year) year.textContent = String(new Date().getFullYear());
})();
