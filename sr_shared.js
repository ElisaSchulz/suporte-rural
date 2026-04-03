// Shared nav + footer injected into every page
const NAV_HTML = `
<nav id="sr-nav">
  <a href="index.html" class="nav-logo">Suporte<span>Rural</span></a>
  <button class="nav-toggle" onclick="document.getElementById('sr-nav').classList.toggle('open')" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
  <ul class="nav-links">
    <li><a href="index.html">Home</a></li>
    <li><a href="servicos.html">Serviços</a></li>
    <li><a href="produtos.html">Produtos</a></li>
    <li><a href="conteudo.html">Conteúdo</a></li>
    <li><a href="contato.html" class="nav-cta">Fale Conosco</a></li>
  </ul>
</nav>`;

const FOOTER_HTML = `
<footer>
  <div class="footer-inner">
    <div class="footer-brand">
      <div class="footer-logo">Suporte<span>Rural</span></div>
      <p class="footer-tagline">Consultoria Agropecuária · Pasto & Feno</p>
      <div class="footer-social">
        <a href="https://instagram.com/suporteruralconsultoria" target="_blank" title="Instagram">📷</a>
        <a href="https://youtube.com/@dicadoagronomo-suporterural" target="_blank" title="YouTube">▶</a>
        <a href="https://wa.me/5567999999999" target="_blank" title="WhatsApp">💬</a>
      </div>
    </div>
    <div class="footer-nav">
      <div class="footer-col">
        <h5>Navegação</h5>
        <a href="index.html">Home</a>
        <a href="servicos.html">Serviços</a>
        <a href="produtos.html">Produtos</a>
        <a href="conteudo.html">Conteúdo</a>
        <a href="contato.html">Contato</a>
      </div>
      <div class="footer-col">
        <h5>Serviços</h5>
        <a href="servicos.html">Manejo de Pastagens</a>
        <a href="servicos.html">Produção de Feno</a>
        <a href="servicos.html">Análise de Solo</a>
        <a href="servicos.html">Gestão Agropecuária</a>
      </div>
      <div class="footer-col">
        <h5>Produtos</h5>
        <a href="produtos.html">Livros Técnicos</a>
        <a href="produtos.html">Recompactadora de Feno</a>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2025 Suporte Rural Consultoria Agropecuária · Todos os direitos reservados</span>
  </div>
</footer>
<a href="https://wa.me/5567999999999" target="_blank" class="float-wa" title="WhatsApp">💬</a>`;

// Inject nav + footer
document.addEventListener('DOMContentLoaded', () => {
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

  // Mark active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });

  // Scroll fade-in
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }});
  }, { threshold: 0.08 });
  document.querySelectorAll('.fi').forEach(el => obs.observe(el));
});
