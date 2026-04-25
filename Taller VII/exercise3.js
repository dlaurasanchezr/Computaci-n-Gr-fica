const INTERVAL = 4500; // mismo valor que data-bs-interval en el HTML

const carousel1El  = document.getElementById('carousel1');
const timebar      = document.getElementById('timebar1');
const playPauseBtn = document.getElementById('playPause1');
const currentLabel = document.getElementById('current1');

const carousel1Instance = bootstrap.Carousel.getOrCreateInstance(carousel1El, {
  interval: INTERVAL,
  ride: 'carousel'
});

let isPlaying = true;
let timerAnimation = null;

function startTimebar() {
  if (timebar) {
    timebar.style.transition = 'none';
    timebar.style.width = '0%';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        timebar.style.transition = `width ${INTERVAL}ms linear`;
        timebar.style.width = '100%';
      });
    });
  }
}

function stopTimebar() {
  if (timebar) {
    const computed = getComputedStyle(timebar).width;
    timebar.style.transition = 'none';
    timebar.style.width = computed;
  }
}

if (carousel1El) {

  carousel1El.addEventListener('slide.bs.carousel', (event) => {
    if (currentLabel) currentLabel.textContent = event.to + 1;
    if (isPlaying) startTimebar();
  });

  startTimebar();
}

if (playPauseBtn) {
  playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
      carousel1Instance.pause();  
      stopTimebar();
      playPauseBtn.innerHTML = '<i class="bi bi-play-fill"></i>';
      playPauseBtn.title = 'Reanudar';
    } else {
      carousel1Instance.cycle(); 
      startTimebar();
      playPauseBtn.innerHTML = '<i class="bi bi-pause-fill"></i>';
      playPauseBtn.title = 'Pausar';
    }
    isPlaying = !isPlaying;
  });
}

const thumbsData = [
  { label: 'Bootstrap 5', cls: 'c-thumb__img--1' },
  { label: 'Componentes', cls: 'c-thumb__img--2' },
  { label: 'Sass & CSS',  cls: 'c-thumb__img--3' },
  { label: 'Grid System', cls: 'c-thumb__img--4' },
];

const thumbsRow    = document.getElementById('thumbsRow3');
const carousel3El  = document.getElementById('carousel3');

if (thumbsRow) {
  thumbsData.forEach((t, i) => {
    const btn = document.createElement('button');
    btn.className = 'c-thumb' + (i === 0 ? ' active' : '');
    btn.setAttribute('data-bs-target', '#carousel3');
    btn.setAttribute('data-bs-slide-to', i);
    btn.setAttribute('aria-label', `Slide ${i + 1}`);
    btn.innerHTML = `
      <div class="c-thumb__img ${t.cls}"></div>
      <span>${t.label}</span>`;
    btn.addEventListener('click', () => {
      bootstrap.Carousel.getOrCreateInstance(carousel3El).to(i);
    });

    thumbsRow.appendChild(btn);
  });
}

if (carousel3El) {
  carousel3El.addEventListener('slid.bs.carousel', (event) => {
    const thumbBtns = thumbsRow?.querySelectorAll('.c-thumb');
    thumbBtns?.forEach((b, i) => {
      b.classList.toggle('active', i === event.to);
    });
  });
}

const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.custom-navbar .nav-link');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const id = entry.target.getAttribute('id');
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
    });
  });
}, { threshold: 0.4 });

sections.forEach(sec => navObserver.observe(sec));