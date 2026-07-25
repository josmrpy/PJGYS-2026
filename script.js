/* ==================================================================
   PARLAMENTO JOVEN GUÍA Y SCOUT COSTA RICA 2026
   Lógica de la plataforma de propuestas
   ------------------------------------------------------------------
   ÚNICA SECCIÓN QUE NECESITAS EDITAR PARA CARGAR TUS DATOS REALES:
   el arreglo "propuestas" que está justo debajo de este comentario.

   Por cada propuesta reemplaza:
     id       -> número (mantén el orden 1, 2, 3... es solo una etiqueta)
     titulo   -> Nombre completo de la propuesta
     autor    -> Nombre de quien la presenta
     grupo    -> Grupo Guía y Scout (ej. "GYS 144")
     resumen  -> Resumen corto (2-4 líneas)
     drive    -> Enlace al documento en Google Drive
     pdf      -> Nombre del archivo PDF a incrustar (colócalo en la
                 misma carpeta que este sitio) o una URL completa a
                 un PDF público

   No necesitas tocar el resto de este archivo para que el sitio
   funcione: el grid completo se genera a partir de este arreglo.
   ================================================================== */

const propuestas = [
  {
    id: 1,
    titulo: "nombre de propuesta",
    autor: "Aaron José Torres Ríos",
    grupo: "Guanacaste #000",
    resumen:
      "Texto de ejemplo. Sustituye este resumen por una descripción breve (2-4 líneas) del objetivo y alcance de la propuesta.",
    drive:
      "https://drive.google.com/drive/folders/1_--jEkB4P-6aOHF4qL7XtvG8WmpS_S9b?usp=drive_link",
    pdf: "propuesta1.pdf",
  },
  {
    id: 2,
    titulo: "nombre de propuesta",
    autor: "Gabriel Madrigal Aguilar",
    grupo: "Cartago #000",
    resumen:
      "Texto de ejemplo. Sustituye este resumen por una descripción breve (2-4 líneas) del objetivo y alcance de la propuesta.",
    drive:
      "https://drive.google.com/drive/folders/1_--jEkB4P-6aOHF4qL7XtvG8WmpS_S9b?usp=drive_link",
    pdf: "propuesta2.pdf",
  },
  {
    id: 3,
    titulo: "nombre de propuesta",
    autor: "Hannah Sánchez Barquero",
    grupo: "Heredia #000",
    resumen:
      "Texto de ejemplo. Sustituye este resumen por una descripción breve (2-4 líneas) del objetivo y alcance de la propuesta.",
    drive:
      "https://drive.google.com/drive/folders/1_--jEkB4P-6aOHF4qL7XtvG8WmpS_S9b?usp=drive_link",
    pdf: "propuesta3.pdf",
  },
  {
    id: 4,
    titulo: "nombre de propuesta",
    autor: "Isabella Rojas Céspedes",
    grupo: "Heredia #000",
    resumen:
      "Texto de ejemplo. Sustituye este resumen por una descripción breve (2-4 líneas) del objetivo y alcance de la propuesta.",
    drive:
      "https://drive.google.com/drive/folders/1_--jEkB4P-6aOHF4qL7XtvG8WmpS_S9b?usp=drive_link",
    pdf: "propuesta4.pdf",
  },
  {
    id: 5,
    titulo: "nombre de propuesta",
    autor: "José Ivankovich Solano",
    grupo: "Cartago #000",
    resumen:
      "Texto de ejemplo. Sustituye este resumen por una descripción breve (2-4 líneas) del objetivo y alcance de la propuesta.",
    drive:
      "https://drive.google.com/drive/folders/1_--jEkB4P-6aOHF4qL7XtvG8WmpS_S9b?usp=drive_link",
    pdf: "propuesta5.pdf",
  },
  {
    id: 6,
    titulo: "nombre de propuesta",
    autor: "Josimar Madrigal Espinoza",
    grupo: "Limón #144",
    resumen:
      "Texto de ejemplo. Sustituye este resumen por una descripción breve (2-4 líneas) del objetivo y alcance de la propuesta.",
    drive:
      "https://drive.google.com/drive/folders/1_--jEkB4P-6aOHF4qL7XtvG8WmpS_S9b?usp=drive_link",
    pdf: "propuesta6.pdf",
  },
  {
    id: 7,
    titulo: "nombre de propuesta",
    autor: "Mari Corella Castro",
    grupo: "San José #000",
    resumen:
      "Texto de ejemplo. Sustituye este resumen por una descripción breve (2-4 líneas) del objetivo y alcance de la propuesta.",
    drive:
      "https://drive.google.com/drive/folders/1_--jEkB4P-6aOHF4qL7XtvG8WmpS_S9b?usp=drive_link",
    pdf: "propuesta7.pdf",
  },
  {
    id: 8,
    titulo: "nombre de propuesta",
    autor: "María Isabel Araya Díaz",
    grupo: "Alajuela #000",
    resumen:
      "Texto de ejemplo. Sustituye este resumen por una descripción breve (2-4 líneas) del objetivo y alcance de la propuesta.",
    drive:
      "https://drive.google.com/drive/folders/1_--jEkB4P-6aOHF4qL7XtvG8WmpS_S9b?usp=drive_link",
    pdf: "propuesta8.pdf",
  },
  {
    id: 9,
    titulo: "nombre de propuesta",
    autor: "María José Zúñiga Loría",
    grupo: "Limón #000",
    resumen:
      "Texto de ejemplo. Sustituye este resumen por una descripción breve (2-4 líneas) del objetivo y alcance de la propuesta.",
    drive:
      "https://drive.google.com/drive/folders/1_--jEkB4P-6aOHF4qL7XtvG8WmpS_S9b?usp=drive_link",
    pdf: "propuesta9.pdf",
  },
  {
    id: 10,
    titulo: "nombre de propuesta",
    autor: "Nathalie Espinoza Retana",
    grupo: "Cartago #000",
    resumen:
      "Texto de ejemplo. Sustituye este resumen por una descripción breve (2-4 líneas) del objetivo y alcance de la propuesta.",
    drive:
      "https://drive.google.com/drive/folders/1_--jEkB4P-6aOHF4qL7XtvG8WmpS_S9b?usp=drive_link",
    pdf: "propuesta10.pdf",
  },
  {
    id: 11,
    titulo: "nombre de propuesta",
    autor: "Sebastián Felipe Badilla Groves",
    grupo: "San José #000",
    resumen:
      "Texto de ejemplo. Sustituye este resumen por una descripción breve (2-4 líneas) del objetivo y alcance de la propuesta.",
    drive:
      "https://drive.google.com/drive/folders/1_--jEkB4P-6aOHF4qL7XtvG8WmpS_S9b?usp=drive_link",
    pdf: "propuesta11.pdf",
  },
];

/* ==================================================================
   A partir de aquí: lógica de la plataforma.
   No es necesario modificar nada más abajo para uso normal.
   ================================================================== */

const grid = document.getElementById("grid-propuestas");
const sinResultados = document.getElementById("sin-resultados");
const buscador = document.getElementById("buscador");
const contadorResultados = document.getElementById("contador-resultados");
const heroStatGrupos = document.getElementById("hero-stat-grupos");
const heroStatRevisadas = document.getElementById("hero-stat-revisadas");

const CLAVE_REVISADAS = "pj-gys-2026-revisadas";

let indiceAbierto = null; // índice (dentro de "propuestas") de la tarjeta expandida

/* --- Progreso de revisión guardado en el navegador de cada persona --- */
function obtenerRevisadas() {
  try {
    return new Set(JSON.parse(localStorage.getItem(CLAVE_REVISADAS)) || []);
  } catch (e) {
    return new Set();
  }
}
function guardarRevisadas(set) {
  localStorage.setItem(CLAVE_REVISADAS, JSON.stringify([...set]));
}
let revisadas = obtenerRevisadas();

function actualizarEstadisticas() {
  heroStatRevisadas.textContent = revisadas.size;
  const gruposUnicos = new Set(propuestas.map((p) => p.grupo));
  heroStatGrupos.textContent = gruposUnicos.size;
}

/* --- Utilidades para evitar inyección de HTML --- */
function escapeHTML(texto) {
  const div = document.createElement("div");
  div.textContent = texto ?? "";
  return div.innerHTML;
}
function escapeAttr(texto) {
  return (texto ?? "").replace(/"/g, "&quot;");
}

/* --- Construcción de una tarjeta --- */
function crearTarjeta(propuesta, indice) {
  const tarjeta = document.createElement("article");
  tarjeta.className = "tarjeta";
  tarjeta.dataset.indice = indice;
  if (revisadas.has(propuesta.id)) tarjeta.classList.add("revisada");

  const numero = String(propuesta.id).padStart(2, "0");
  const panelId = `panel-propuesta-${propuesta.id}`;

  tarjeta.innerHTML = `
    <button class="tarjeta-cabecera" type="button" aria-expanded="false" aria-controls="${panelId}">
      <span class="tarjeta-insignia" aria-hidden="true">
        ${numero}
        <span class="tarjeta-insignia-check" aria-hidden="true">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </span>
      </span>
      <span class="tarjeta-info">
        <span class="tarjeta-titulo">Propuesta ${numero} · ${escapeHTML(propuesta.titulo)}</span>
        <span class="tarjeta-meta">${escapeHTML(propuesta.autor)} · ${escapeHTML(propuesta.grupo)}</span>
      </span>
      <span class="tarjeta-flecha">
        <span>Ver propuesta</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>
      </span>
    </button>

    <div class="tarjeta-panel" id="${panelId}">
      <div class="tarjeta-panel-inner">

        <dl class="detalle-grid">
          <div class="detalle-campo">
            <dt>Autor</dt>
            <dd>${escapeHTML(propuesta.autor)}</dd>
          </div>
          <div class="detalle-campo">
            <dt>Grupo Guía y Scout</dt>
            <dd>${escapeHTML(propuesta.grupo)}</dd>
          </div>
        </dl>

        <p class="detalle-resumen">${escapeHTML(propuesta.resumen)}</p>

        <div class="detalle-acciones">
          <a class="boton boton-outline" href="${escapeAttr(propuesta.drive)}" target="_blank" rel="noopener noreferrer">
            Abrir en Drive ↗
          </a>
          <button class="boton boton-marcar" type="button" data-accion="marcar">
            ${revisadas.has(propuesta.id) ? "Marcada como revisada ✓" : "Marcar como revisada"}
          </button>
        </div>

        <div class="detalle-visor">
          <p class="visor-etiqueta">Documento</p>
          <iframe src="${escapeAttr(propuesta.pdf)}" title="Documento de la propuesta ${numero}" loading="lazy"></iframe>
        </div>

        <div class="detalle-nav">
          <button class="boton boton-outline" type="button" data-accion="anterior">← Propuesta anterior</button>
          <button class="boton boton-outline" type="button" data-accion="siguiente">Siguiente propuesta →</button>
        </div>

      </div>
    </div>
  `;

  return tarjeta;
}

/* --- Renderiza el grid completo (respetando el filtro de búsqueda) --- */
function renderizar(filtro = "") {
  grid.innerHTML = "";

  const filtroNorm = filtro.trim().toLowerCase();
  const visibles = [];

  propuestas.forEach((propuesta, indice) => {
    const coincide = propuesta.titulo.toLowerCase().includes(filtroNorm);
    if (!coincide) return;
    visibles.push(indice);
    const tarjeta = crearTarjeta(propuesta, indice);
    if (indice === indiceAbierto) abrirTarjetaElemento(tarjeta, false);
    grid.appendChild(tarjeta);
  });

  sinResultados.hidden = visibles.length !== 0;
  contadorResultados.textContent =
    filtroNorm === ""
      ? `${propuestas.length} propuestas`
      : `${visibles.length} de ${propuestas.length} propuestas`;
}

/* --- Abrir / cerrar tarjetas (solo una abierta a la vez) --- */
function abrirTarjetaElemento(tarjeta) {
  const boton = tarjeta.querySelector(".tarjeta-cabecera");
  const panel = tarjeta.querySelector(".tarjeta-panel");
  tarjeta.classList.add("abierta");
  boton.setAttribute("aria-expanded", "true");
  panel.style.maxHeight = panel.scrollHeight + "px";
}
function cerrarTarjetaElemento(tarjeta) {
  const boton = tarjeta.querySelector(".tarjeta-cabecera");
  const panel = tarjeta.querySelector(".tarjeta-panel");
  tarjeta.classList.remove("abierta");
  boton.setAttribute("aria-expanded", "false");
  panel.style.maxHeight = null;
}

function alternarTarjeta(indice) {
  const tarjetaActual = grid.querySelector(`.tarjeta[data-indice="${indice}"]`);
  if (!tarjetaActual) return;

  const yaAbierta = indice === indiceAbierto;

  if (indiceAbierto !== null) {
    const anterior = grid.querySelector(
      `.tarjeta[data-indice="${indiceAbierto}"]`,
    );
    if (anterior) cerrarTarjetaElemento(anterior);
  }

  if (yaAbierta) {
    indiceAbierto = null;
  } else {
    indiceAbierto = indice;
    abrirTarjetaElemento(tarjetaActual);
    requestAnimationFrame(() => {
      tarjetaActual.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
}

/* --- Navegar a la propuesta anterior/siguiente dentro del panel abierto --- */
function irAPropuesta(indiceDestino) {
  if (indiceDestino < 0 || indiceDestino >= propuestas.length) return;
  if (buscador.value.trim() !== "") {
    buscador.value = "";
    renderizar();
  }
  indiceAbierto = null;
  alternarTarjeta(indiceDestino);
}

/* --- Marcar una propuesta como revisada --- */
function alternarRevisada(indice) {
  const propuesta = propuestas[indice];
  if (revisadas.has(propuesta.id)) revisadas.delete(propuesta.id);
  else revisadas.add(propuesta.id);
  guardarRevisadas(revisadas);
  actualizarEstadisticas();

  const tarjeta = grid.querySelector(`.tarjeta[data-indice="${indice}"]`);
  if (!tarjeta) return;
  const marcada = revisadas.has(propuesta.id);
  tarjeta.classList.toggle("revisada", marcada);
  const botonMarcar = tarjeta.querySelector('[data-accion="marcar"]');
  botonMarcar.textContent = marcada
    ? "Marcada como revisada ✓"
    : "Marcar como revisada";

  const panel = tarjeta.querySelector(".tarjeta-panel");
  if (tarjeta.classList.contains("abierta"))
    panel.style.maxHeight = panel.scrollHeight + "px";
}

/* --- Delegación de eventos: un solo listener para todo el grid --- */
grid.addEventListener("click", (evento) => {
  const tarjeta = evento.target.closest(".tarjeta");
  if (!tarjeta) return;
  const indice = Number(tarjeta.dataset.indice);

  const botonAccion = evento.target.closest("[data-accion]");
  if (botonAccion) {
    const accion = botonAccion.dataset.accion;
    if (accion === "marcar") alternarRevisada(indice);
    if (accion === "anterior") irAPropuesta(indice - 1);
    if (accion === "siguiente") irAPropuesta(indice + 1);
    return;
  }

  const boton = evento.target.closest(".tarjeta-cabecera");
  if (boton) alternarTarjeta(indice);
});

/* --- Buscador por título --- */
buscador.addEventListener("input", () => {
  indiceAbierto = null;
  renderizar(buscador.value);
});

/* --- Inicialización --- */
(function iniciar() {
  renderizar();
  actualizarEstadisticas();
})();
