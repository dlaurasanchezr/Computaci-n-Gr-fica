function esPerfecto(n) {
  if (n < 1) return false;
  let suma = 0, i = 1;
  while (i < n) { if (n % i === 0) suma += i; i++; }
  return suma === n;
}

function cuadradosOCubos(n) {
  let lineas = [];
  if (n % 2 === 0) {
    lineas.push(`n=${n} es PAR → cuadrados:`);
    let i = 1;
    while (i <= n) { lineas.push(`  ${i}² = ${i * i}`); i++; }
  } else {
    lineas.push(`n=${n} es IMPAR → cubos:`);
    let i = 1;
    while (i <= n) { lineas.push(`  ${i}³ = ${i * i * i}`); i++; }
  }
  return lineas.join("\n");
}

function invertirNumero(n) {
  let neg = n < 0;
  n = Math.abs(n);
  let inv = 0;
  while (n > 0) { inv = inv * 10 + n % 10; n = Math.floor(n / 10); }
  return neg ? -inv : inv;
}

function esPalindromo(n) {
  return Math.abs(n) === invertirNumero(Math.abs(n));
}

function contarDigito(n, d) {
  n = Math.abs(n);
  if (n === 0) return d === 0 ? 1 : 0;
  let c = 0;
  while (n > 0) { if (n % 10 === d) c++; n = Math.floor(n / 10); }
  return c;
}

function decimalABinario(n) {
  if (n === 0) return "0";
  let neg = n < 0;
  n = Math.abs(n);
  let bits = [];
  while (n > 0) { bits.unshift(n % 2); n = Math.floor(n / 2); }
  return (neg ? "-" : "") + bits.join("");
}

function clasificarNumero(n) {
  function esPrimo(x) {
    if (x < 2) return false;
    let i = 2;
    while (i <= Math.sqrt(x)) { if (x % i === 0) return false; i++; }
    return true;
  }
  if (esPrimo(n))  return "PRIMO";
  if (n % 2 === 0) return "PAR";
  return "IMPAR";
}

function mostrarCampos() {
  const op = parseInt(document.getElementById("opcion").value);
  const campos = document.getElementById("campos");
  document.getElementById("output").innerHTML = "";

  if (op === 0) { campos.innerHTML = ""; return; }

  let inputs = [{ id: "inp1", label: "Número:", placeholder: "ingresa un número" }];
  if (op === 5) {
    inputs.push({ id: "inp2", label: "Dígito a buscar (0–9):", placeholder: "0-9" });
  }

  let html = "";
  let i = 0;
  while (i < inputs.length) {
    const inp = inputs[i];
    html += `<label for="${inp.id}">${inp.label}</label>
             <input type="number" id="${inp.id}" placeholder="${inp.placeholder}"/>`;
    i++;
  }

  campos.innerHTML = html;
}

function ejecutarOpcion() {
  const op = parseInt(document.getElementById("opcion").value);
  const out = document.getElementById("output");

  if (op === 0) {
    out.innerHTML = '<span class="err">⚠ Selecciona una opción primero.</span>';
    return;
  }

  const inp1 = document.getElementById("inp1");
  const n = parseInt(inp1 ? inp1.value : "");

  if (isNaN(n)) {
    out.innerHTML = '<span class="err">⚠ Ingresa un número válido.</span>';
    return;
  }

  let resultado = "";

  switch (op) {
    case 1:
      const ok1 = esPerfecto(n);
      resultado = `<span class="dim">esPerfecto(${n})</span><br>
                   <span class="${ok1 ? 'ok' : 'err'}">${ok1 ? '✓ ES perfecto' : '✗ NO es perfecto'}</span>`;
      break;

    case 2:
      resultado = `<span class="warn">${cuadradosOCubos(n)}</span>`;
      break;

    case 3:
      const inv = invertirNumero(n);
      resultado = `<span class="dim">invertirNumero(${n})</span><br>
                   <span class="ok">→ ${inv}</span>`;
      break;

    case 4:
      const pal = esPalindromo(n);
      resultado = `<span class="dim">invertido: ${invertirNumero(Math.abs(n))}</span><br>
                   <span class="${pal ? 'ok' : 'err'}">${pal ? `✓ ${n} ES palíndromo` : `✗ ${n} NO es palíndromo`}</span>`;
      break;

    case 5:
      const inp2 = document.getElementById("inp2");
      const d = parseInt(inp2 ? inp2.value : "");
      if (isNaN(d) || d < 0 || d > 9) {
        out.innerHTML = '<span class="err">⚠ El dígito debe ser 0–9.</span>';
        return;
      }
      const veces = contarDigito(n, d);
      resultado = `<span class="dim">contarDigito(${n}, ${d})</span><br>
                   <span class="ok">El dígito ${d} aparece ${veces} vez${veces !== 1 ? 'es' : ''} en ${n}</span>`;
      break;

    case 6:
      const bin = decimalABinario(n);
      resultado = `<span class="dim">decimalABinario(${n})</span><br>
                   <span class="warn">${n}  →  ${bin}</span>`;
      break;

    case 7:
      const cls = clasificarNumero(n);
      const color = cls === "PRIMO" ? "warn" : "ok";
      resultado = `<span class="dim">clasificarNumero(${n})</span><br>
                   <span class="${color}">→ ${cls}</span>`;
      break;

    default:
      resultado = '<span class="err">Opción no válida.</span>';
  }

  out.innerHTML = resultado;
}