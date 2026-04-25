const progressObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const bar = entry.target.querySelector('.progress-bar');
    if (!bar) return;

    const target = bar.getAttribute('aria-valuenow');
    bar.style.width = '0%';
    setTimeout(() => { bar.style.width = target + '%'; }, 120);

    progressObserver.unobserve(entry.target);
  });
}, { threshold: 0.4 });

document.querySelectorAll('.prog-item').forEach(el => progressObserver.observe(el));

const loadBtn = document.getElementById('loadBtn');
if (loadBtn) {
  loadBtn.addEventListener('click', () => {
    loadBtn.disabled = true;
    loadBtn.innerHTML = `
      <span class="spinner-border spinner-border-sm me-2" role="status"></span>Cargando...`;

    setTimeout(() => {
      loadBtn.disabled = false;
      loadBtn.innerHTML = `<i class="bi bi-check-lg me-1"></i>¡Listo!`;
      loadBtn.classList.replace('c-btn--success', 'c-btn--primary');

      setTimeout(() => {
        loadBtn.innerHTML = 'Simular carga';
        loadBtn.classList.replace('c-btn--primary', 'c-btn--success');
      }, 1800);
    }, 2200);
  });
}

const alertsHTML = document.getElementById('alertsDemo')?.innerHTML;

document.getElementById('resetAlerts')?.addEventListener('click', () => {
  document.getElementById('alertsDemo').innerHTML = alertsHTML;
  document.querySelectorAll('.alert').forEach(el => {
    new bootstrap.Alert(el);
  });
});