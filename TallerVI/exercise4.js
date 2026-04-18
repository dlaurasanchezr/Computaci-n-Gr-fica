function invertirNumero(n) {
  let negativo = n < 0;
  n = Math.abs(n);
  let invertido = 0;

  while (n > 0) {
    let digito = n % 10;
    invertido = invertido * 10 + digito;
    n = Math.floor(n / 10);
  }

  return negativo ? -invertido : invertido;
}

function esPalindromo(n) {
  return Math.abs(n) === invertirNumero(Math.abs(n));
}

function verificar() {
  const n = parseInt(document.getElementById("num").value);
  const out = document.getElementById("output");

  if (isNaN(n)) {
    out.innerHTML = '<span class="err">⚠ Ingresa un número válido.</span>';
    return;
  }

  const invertido = invertirNumero(Math.abs(n));
  const ok = esPalindromo(n);

  out.innerHTML = `
    <span class="dim">invertido: ${invertido}</span><br>
    <span class="${ok ? 'ok' : 'err'}">
      ${ok ? `✓ ${n} ES palíndromo` : `✗ ${n} NO es palíndromo`}
    </span>`;
}