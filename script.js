const tabla = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
const mensaje = document.getElementById("mensaje");

// Copia inicial de los datos para restablecer
const datosIniciales = [
  ["Angel", 25, "Lima"],
  ["Bruno", 30, "Piura"],
  ["Camila", 22, "Chiclayo"]
];

// Mostrar mensaje visual
function mostrarMensaje(texto) {
  mensaje.textContent = texto;
}

// Ordenar toda la hoja
document.getElementById("ordenarHoja").addEventListener("click", () => {
  let filas = Array.from(tabla.rows);
  filas.sort((a, b) => a.cells[1].textContent - b.cells[1].textContent);
  filas.forEach(fila => tabla.appendChild(fila));
  mostrarMensaje("✅ Se ordenó toda la hoja por edad (manteniendo nombres y ciudades).");
});

// Ordenar solo el intervalo (columna Edad)
document.getElementById("ordenarIntervalo").addEventListener("click", () => {
  let edades = Array.from(tabla.rows).map(f => f.cells[1].textContent);
  edades.sort((a, b) => a - b);
  edades.forEach((edad, i) => {
    tabla.rows[i].cells[1].textContent = edad;
  });
  mostrarMensaje("⚠️ Se ordenó solo la columna Edad (se desalinearon los datos).");
});

// Restablecer
document.getElementById("restablecer").addEventListener("click", () => {
  tabla.innerHTML = "";
  datosIniciales.forEach(fila => {
    const nuevaFila = tabla.insertRow();
    fila.forEach(valor => {
      const celda = nuevaFila.insertCell();
      celda.textContent = valor;
    });
  });
  mostrarMensaje("🔁 Hoja restablecida a su estado original.");
});
