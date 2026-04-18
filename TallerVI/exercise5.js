function contarDigito(n, digito) {
  n = Math.abs(n);
  if (n === 0) return digito === 0 ? 1 : 0;

  let conteo = 0;
  while (n > 0) {
    if (n % 10 === digito) conteo++;
    n = Math.floor(n / 10);
  }

  return conteo;
}

function contar() {
  const n = parseInt(document.getElementById("num").value);
  const d = parseInt(document.getElementById("dig").value);
  const out = document.getElementById("output");

  if (isNaN(n) || isNaN(d) || d < 0 || d > 9) {
    out.innerHTML = '<span class="err">⚠ Datos inválidos. El dígito debe ser 0–9.</span>';
    return;
  }

  const veces = contarDigito(n, d);
  out.innerHTML = `
    <span class="dim">contarDigito(${n}, ${d})</span><br>
    <span class="ok">El dígito ${d} aparece ${veces} vez${veces !== 1 ? "es" : ""} en ${n}</span>`;
}