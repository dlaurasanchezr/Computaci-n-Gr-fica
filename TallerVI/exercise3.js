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

function invertir() {
  const n = parseInt(document.getElementById("num").value);
  const out = document.getElementById("output");

  if (isNaN(n)) {
    out.innerHTML = '<span class="err">⚠ Ingresa un número válido.</span>';
    return;
  }

  const resultado = invertirNumero(n);
  out.innerHTML = `
    <span class="dim">invertirNumero(${n})</span><br>
    <span class="ok">→ ${resultado}</span>`;
}