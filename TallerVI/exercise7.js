function clasificarNumero(n) {
  function esPrimo(x) {
    if (x < 2) return false;
    let i = 2;
    while (i <= Math.sqrt(x)) {
      if (x % i === 0) return false;
      i++;
    }
    return true;
  }

  if (esPrimo(n))  return "PRIMO";
  if (n % 2 === 0) return "PAR";
  return "IMPAR";
}

function clasificar() {
  const n = parseInt(document.getElementById("num").value);
  const out = document.getElementById("output");

  if (isNaN(n)) {
    out.innerHTML = '<span class="err">⚠ Ingresa un número válido.</span>';
    return;
  }

  const cls = clasificarNumero(n);
  const color = cls === "PRIMO" ? "warn" : "ok";

  out.innerHTML = `
    <span class="dim">clasificarNumero(${n})</span><br>
    <span class="${color}">→ ${cls}</span>`;
}