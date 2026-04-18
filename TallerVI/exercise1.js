function esPerfecto(n) {
  if (n < 1) return false;
  let suma = 0;
  let i = 1;
  while (i < n) {
    if (n % i === 0) suma += i;
    i++;
  }
  return suma === n;
}

function verificar() {
  const n = parseInt(document.getElementById("num").value);
  const out = document.getElementById("output");

  if (isNaN(n)) {
    out.innerHTML = '<span class="err">⚠ Ingresa un número válido.</span>';
    return;
  }

  const resultado = esPerfecto(n);
  out.innerHTML = `
    <span class="dim">esPerfecto(${n})</span><br>
    <span class="${resultado ? 'ok' : 'err'}">
      ${resultado ? `✓ ${n} ES un número perfecto` : `✗ ${n} NO es un número perfecto`}
    </span>`;
}