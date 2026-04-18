function cuadradosOCubos(n) {
  let lineas = [];

  if (n % 2 === 0) {
    lineas.push(`n = ${n} es PAR → cuadrados del 1 al ${n}:`);
    let i = 1;
    while (i <= n) {
      lineas.push(`  ${i}² = ${i * i}`);
      i++;
    }
  } else {
    lineas.push(`n = ${n} es IMPAR → cubos del 1 al ${n}:`);
    let i = 1;
    while (i <= n) {
      lineas.push(`  ${i}³ = ${i * i * i}`);
      i++;
    }
  }

  return lineas;
}

function calcular() {
  const n = parseInt(document.getElementById("num").value);
  const out = document.getElementById("output");

  if (isNaN(n) || n < 1) {
    out.innerHTML = '<span class="err">⚠ Ingresa un entero positivo.</span>';
    return;
  }

  const lineas = cuadradosOCubos(n);
  out.innerHTML = lineas
    .map((l, i) => `<span class="${i === 0 ? 'warn' : 'row'}">${l}</span><br>`)
    .join("");
}