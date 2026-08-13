/* ─── Shared nav + footer injector ─── */
(function () {
  /* ── Detect current page ── */
  const path = location.pathname.split('/').pop() || 'index.html';

  const navHTML = `
  <header class="nav">
    <div class="nav-inner">
      <a class="brand" href="index.html">
        <img class="brand-logo" src="assets/app-icon.png" alt="Expense Tracker logo">
        <span>Expense Tracker</span>
      </a>
      <nav class="nav-links" id="nav-links">
        <a href="index.html"    data-page="index.html">Home</a>
        <a href="features.html" data-page="features.html">Features</a>
        <a href="privacy.html"  data-page="privacy.html">Privacy</a>
        <a href="terms.html"    data-page="terms.html">Terms</a>
        <a href="download.html" class="nav-cta" data-page="download.html">Get the App</a>
      </nav>
    </div>
  </header>`;

  const footerHTML = `
  <footer class="footer">
    <div class="footer-inner">
      <div>
        <div class="footer-brand">
          <img class="brand-logo" src="assets/app-icon.png" alt="Expense Tracker logo">
          <span class="brand-name">Expense Tracker</span>
        </div>
        <p class="footer-tagline">A free, private way to track your spending, budgets, and savings goals on Android.</p>
      </div>
      <div class="footer-col">
        <h4>Pages</h4>
        <a href="index.html">Home</a>
        <a href="features.html">Features</a>
        <a href="download.html">Download</a>
      </div>
      <div class="footer-col">
        <h4>Legal</h4>
        <a href="privacy.html">Privacy Policy</a>
        <a href="terms.html">Terms of Service</a>
        <a href="mailto:support@example.com">Contact</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 Expense Tracker. All rights reserved.</p>
      <p>Made with <svg class="icon icon-xs icon-fill" style="display:inline-block;"><use href="assets/icons.svg#icon-heart"/></svg> for your wallet</p>
    </div>
  </footer>`;

  /* ── Inject nav before <main> ── */
  document.body.insertAdjacentHTML('afterbegin', navHTML);

  /* ── Inject footer after <main> ── */
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  /* ── Mark active link ── */
  document.querySelectorAll('.nav-links a[data-page]').forEach(link => {
    if (link.getAttribute('data-page') === path) {
      link.classList.add('active');
    }
  });

  /* ── Scroll-reveal ── */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    reveals.forEach(el => io.observe(el));
  }
})();
