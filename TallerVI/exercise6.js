function decimalABinario(n) {
  if (n === 0) return "0";

  let negativo = n < 0;
  n = Math.abs(n);
  let bits = [];

  while (n > 0) {
    bits.unshift(n % 2);       
    n = Math.floor(n / 2);
  }

  return (negativo ? "-" : "") + bits.join("");
}

function convertir() {
  const n = parseInt(document.getElementById("num").value);
  const out = document.getElementById("output");

  if (isNaN(n)) {
    out.innerHTML = '<span class="err">⚠ Ingresa un número válido.</span>';
    return;
  }

  const bin = decimalABinario(n);
  out.innerHTML = `
    <span class="dim">decimalABinario(${n})</span><br>
    <span class="warn">${n}  →  ${bin}</span>`;
}