// Algoritmo 1: El Reparto de los Camellos
function calcularCamellos() {
  let inicial = parseInt(document.getElementById("camellos").value);
  
  if (isNaN(inicial) || inicial <= 0) {
    alert("Por favor, ingresa un número de camellos válido.");
    return;
  }

  let total = inicial + 1;
  let hermanoMayor = Math.floor(total / 2);
  let hermanoMedio = Math.floor(total / 3);
  let hermanoMenor = Math.floor(total / 9);
  let gananciaBeremiz = total - (hermanoMayor + hermanoMedio + hermanoMenor);

  let contenedor = document.getElementById("outCamellos");
  contenedor.innerHTML = `
    <div class="resultado">
      <p><b>Análisis con ${total} camellos (${inicial} iniciales + 1 prestado):</b></p>
      <ul>
        <li>Hermano Mayor (1/2 de ${total}): <b>${hermanoMayor}</b> camellos</li>
        <li>Hermano Medio (1/3 de ${total}): <b>${hermanoMedio}</b> camellos</li>
        <li>Hermano Menor (1/9 de ${total}): <b>${hermanoMenor}</b> camellos</li>
        <li><b>Sobrante para Beremiz:</b> <b>${gananciaBeremiz}</b> camello(s)</li>
      </ul>
    </div>
  `;
}

// Algoritmo 2: Los Granos de Trigo en el Tablero
function calcularTrigo() {
  let casillas = parseInt(document.getElementById("casillas").value);

  if (isNaN(casillas) || casillas < 1 || casillas > 64) {
    alert("Ingresa un número de casillas entre 1 y 64.");
    return;
  }
  
  let totalGranos = (2n ** BigInt(casillas)) - 1n;

  let contenedor = document.getElementById("outTrigo");
  contenedor.innerHTML = `
    <div class="resultado">
      <p>Total acumulado de granos de trigo para <b>${casillas}</b> casilla(s):</p>
      <p class="resultado-numero">${totalGranos.toLocaleString()} granos</p>
    </div>
  `;
}

// Algoritmo 3: Ecuación Cuadrática (Problema 12) - CORREGIDO
function resolverCuadratica() {
  let a = parseFloat(document.getElementById("valA").value);
  let b = parseFloat(document.getElementById("valB").value);
  let c = parseFloat(document.getElementById("valC").value);

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert("Por favor, introduce un número válido en todos los campos (a, b y c).");
    return;
  }

  if (a === 0) {
    alert("El valor de 'a' no puede ser 0 en una ecuación cuadrática.");
    return;
  }

  // Calcular el discriminante D = b^2 - 4ac
  let D = (b ** 2) - (4 * a * c);
  let mensajeEstado = "";
  let detalleRaices = "";

  // Margen de tolerancia pequeño para evitar errores de precisión con decimales exactos en D === 0
  if (D > 0.000001) {
    mensajeEstado = "The equation has two roots";
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);
    detalleRaices = `<li>Raíz 1 (x₁): <b>${x1.toFixed(4)}</b></li>
                     <li>Raíz 2 (x₂): <b>${x2.toFixed(4)}</b></li>`;
  } else if (Math.abs(D) <= 0.000001) {
    mensajeEstado = "The equation has one root";
    let x = -b / (2 * a);
    detalleRaices = `<li>Raíz única (x): <b>${x.toFixed(4)}</b></li>`;
  } else {
    mensajeEstado = "The equation has no real roots";
    detalleRaices = `<li>No existen raíces reales (Discriminante negativo: D = ${D.toFixed(4)})</li>`;
  }

  let contenedor = document.getElementById("outCuadratica");
  contenedor.innerHTML = `
    <div class="resultado">
      <p>Discriminante calculado (D): <b>${D.toFixed(4)}</b></p>
      <p class="resultado-texto">${mensajeEstado}</p>
      <ul>
        ${detalleRaices}
      </ul>
    </div>
  `;
}

// Algoritmo 4: Estimación de Pi mediante bucle (Problema 13) - RESTAURADO Y CORREGIDO
function calcularPi() {
  let n = parseInt(document.getElementById("valN").value);

  if (isNaN(n) || n <= 0) {
    alert("Por favor, ingresa un número entero positivo para n.");
    return;
  }

  let suma = 0;
  for (let i = 1; i <= n; i++) {
    suma += 1 / (i ** 2);
  }

  let piEstimado = Math.sqrt(6 * suma);
  let diferencia = Math.abs(Math.PI - piEstimado);

  let contenedor = document.getElementById("outPi");
  contenedor.innerHTML = `
    <div class="resultado">
      <p>Para n = <b>${n.toLocaleString()}</b> iteraciones:</p>
      <p class="resultado-texto">Pi estimado: ${piEstimado.toFixed(8)}</p>
      <ul>
        <li>Valor real de Math.PI: ${Math.PI.toFixed(8)}</li>
        <li>Diferencia absoluta: ${diferencia.toExponential(4)}</li>
      </ul>
    </div>
  `;
}