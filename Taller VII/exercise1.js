const albums = [
  { title: "Neon Dreams",    artist: "Synthwave Co.",  emoji: "🌆", bg: "linear-gradient(135deg,#1a0533,#7c3aed)" },
  { title: "Ocean Waves",    artist: "Lo-fi Studio",   emoji: "🌊", bg: "linear-gradient(135deg,#0c2461,#4a69bd)" },
  { title: "Dark Forest",    artist: "Ambient Echo",   emoji: "🌲", bg: "linear-gradient(135deg,#1e3c1e,#2e7d32)" },
  { title: "City Lights",    artist: "Urban Beats",    emoji: "🏙️", bg: "linear-gradient(135deg,#1a1a2e,#e94560)" },
  { title: "Solar Flare",    artist: "Space Jams",     emoji: "☀️", bg: "linear-gradient(135deg,#7f1d1d,#dc2626)" },
  { title: "Midnight Jazz",  artist: "Blue Note Trio", emoji: "🎷", bg: "linear-gradient(135deg,#1e1b4b,#4f46e5)" },
  { title: "Tropical Mix",   artist: "Island Vibes",   emoji: "🌴", bg: "linear-gradient(135deg,#064e3b,#10b981)" },
  { title: "Electric Soul",  artist: "Funk Masters",   emoji: "⚡", bg: "linear-gradient(135deg,#78350f,#f59e0b)" },
];

function renderAlbums() {
  const grid = document.getElementById('albumGrid');
  if (!grid) return;

  albums.forEach(album => {
    const col = document.createElement('div');
    col.className = 'col';
    col.innerHTML = `
      <div class="album-card" onclick="playAlbum('${album.emoji}','${album.title}','${album.artist}')">
        <div class="album-card__cover" style="background:${album.bg}">
          <span>${album.emoji}</span>
          <div class="album-card__play"><i class="bi bi-play-fill"></i></div>
        </div>
        <div class="album-card__body">
          <div class="album-card__title">${album.title}</div>
          <div class="album-card__artist">${album.artist}</div>
        </div>
      </div>`;
    grid.appendChild(col);
  });
}

function playAlbum(emoji, title, artist) {
  document.getElementById('playerThumb').textContent  = emoji;
  document.getElementById('playerTitle').textContent  = title;
  document.getElementById('playerArtist').textContent = artist;

  const btn = document.getElementById('playBtn');
  btn.innerHTML = '<i class="bi bi-pause-fill"></i>';
}
window.playAlbum = playAlbum;

document.querySelectorAll('.mf-cat').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.mf-cat').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

document.addEventListener('DOMContentLoaded', renderAlbums);