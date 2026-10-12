/* Parlamento Joven Guía y Scout Costa Rica 2026 — lógica del sitio
   (los datos están en src/data/propuestas.js) · 2 config/estado · 3 progreso guardado
   4 visor de documentos · 5 construcción de tarjetas
   6 abrir/cerrar/navegar · 7 eventos · 8 arranque */

import { propuestas } from "../data/propuestas.js";
import { publicUrl } from "../utils/url.js";

/* 2. Configuración y estado */
const grid = document.getElementById("grid-propuestas");
const sinResultados = document.getElementById("sin-resultados");
const buscador = document.getElementById("buscador");
const contadorResultados = document.getElementById("contador-resultados");
const heroStatGrupos = document.getElementById("hero-stat-grupos");
const heroStatRevisadas = document.getElementById("hero-stat-revisadas");

const CLAVE_REVISADAS = "pj-gys-2026-revisadas";

// Índice (en "propuestas") de la tarjeta abierta; null = ninguna
let indiceAbierto = null;

/* 3. Progreso guardado ("marcar como revisada"), local al navegador */
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

/* 4. Visor de documentos: detecta PDF, video u otro, y arma el visor.
   Se carga solo la primera vez que se abre cada tarjeta. */
function esPdfRuta(ruta) {
  return typeof ruta === "string" && ruta.match(/\.pdf$/i);
}

function esVideoRuta(ruta) {
  return typeof ruta === "string" && ruta.match(/\.(mp4|webm|ogg)$/i);
}

function crearRutaVisorPDF(origen) {
  const archivo = new URL(publicUrl(origen), window.location.origin).href;
  const visor = new URL(
    publicUrl("pdfjs/web/viewer.html"),
    window.location.origin,
  ).href;
  return `${visor}?file=${encodeURIComponent(archivo)}`;
}

function cargarVisor(tarjeta) {
  const visorContenedor = tarjeta.querySelector(".detalle-visor");
  if (!visorContenedor || visorContenedor.dataset.cargado === "true") return;

  const indice = Number(tarjeta.dataset.indice);
  const propuesta = propuestas[indice];
  const recurso = propuesta.pdf;
  const visorContenido = visorContenedor.querySelector(".visor-contenido");
  if (!visorContenido) return;

  visorContenedor.dataset.cargado = "true";

  if (esPdfRuta(recurso)) {
    const iframe = document.createElement("iframe");
    iframe.src = crearRutaVisorPDF(recurso);
    iframe.title = `Visor PDF de la propuesta ${String(propuesta.id).padStart(2, "0")}`;
    iframe.loading = "lazy";
    visorContenido.innerHTML = "";
    visorContenido.appendChild(iframe);
  } else if (esVideoRuta(recurso)) {
    const video = document.createElement("video");
    video.controls = true;
    video.playsInline = true;
    video.src = publicUrl(recurso);
    video.innerHTML = "Tu navegador no soporta la etiqueta de video.";
    visorContenido.innerHTML = "";
    visorContenido.appendChild(video);
  } else {
    const iframe = document.createElement("iframe");
    iframe.src = publicUrl(recurso);
    iframe.title = `Documento de la propuesta ${String(propuesta.id).padStart(2, "0")}`;
    iframe.loading = "lazy";
    visorContenido.innerHTML = "";
    visorContenido.appendChild(iframe);
  }
}

function actualizarEstadisticas() {
  heroStatRevisadas.textContent = revisadas.size;
  const gruposUnicos = new Set(propuestas.map((p) => p.grupo));
  heroStatGrupos.textContent = gruposUnicos.size;
}

/* 5. Construcción de tarjetas. Todo texto pasa por escapeHTML/escapeAttr
   antes de insertarse, para evitar romper el HTML. */
function escapeHTML(texto) {
  const div = document.createElement("div");
  div.textContent = texto ?? "";
  return div.innerHTML;
}

function escapeAttr(texto) {
  return (texto ?? "").replace(/"/g, "&quot;");
}

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

        <div class="detalle-visor" data-origen="${escapeAttr(propuesta.pdf)}" data-cargado="false">
          <p class="visor-etiqueta">Documento</p>
          <div class="visor-contenido">
            <div class="visor-placeholder">Abre la propuesta para cargarla con el visor PDF.js.</div>
          </div>
        </div>

        <div class="detalle-nav">
          <button class="boton boton-outline" type="button" data-accion="anterior"${indice === 0 ? " disabled" : ""}>← Propuesta anterior</button>
          <button class="boton boton-outline" type="button" data-accion="siguiente"${indice === propuestas.length - 1 ? " disabled" : ""}>Siguiente propuesta →</button>
        </div>

      </div>
    </div>
  `;

  return tarjeta;
}

function renderizar(filtro = "") {
  grid.innerHTML = "";

  const filtroNorm = filtro.trim().toLowerCase();
  const visibles = [];

  propuestas.forEach((propuesta, indice) => {
    const coincide = propuesta.titulo.toLowerCase().includes(filtroNorm);
    if (!coincide) return;
    visibles.push(indice);
    const tarjeta = crearTarjeta(propuesta, indice);
    if (indice === indiceAbierto) {
      abrirTarjetaElemento(tarjeta, false);
      cargarVisor(tarjeta);
    }
    grid.appendChild(tarjeta);
  });

  sinResultados.hidden = visibles.length !== 0;
  contadorResultados.textContent =
    filtroNorm === ""
      ? `${propuestas.length} propuestas`
      : `${visibles.length} de ${propuestas.length} propuestas`;
}

/* 6. Abrir, cerrar y navegar entre tarjetas. Solo una abierta a la vez. */
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
    cargarVisor(tarjetaActual);
    requestAnimationFrame(() => {
      tarjetaActual.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
}

function irAPropuesta(indiceDestino) {
  if (indiceDestino < 0 || indiceDestino >= propuestas.length) return;
  if (buscador.value.trim() !== "") {
    buscador.value = "";
    renderizar();
  }
  indiceAbierto = null;
  alternarTarjeta(indiceDestino);
}

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

/* 7. Eventos */
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

buscador.addEventListener("input", () => {
  indiceAbierto = null;
  renderizar(buscador.value);
});

document.querySelectorAll("[data-abrir-propuesta]").forEach((elemento) => {
  elemento.addEventListener("click", () => {
    const idObjetivo = Number(elemento.dataset.abrirPropuesta);
    const indice = propuestas.findIndex((p) => p.id === idObjetivo);
    if (indice === -1) return;
    setTimeout(() => alternarTarjeta(indice), 350);
  });
});

/* 8. Arranque del sitio */
(function iniciar() {
  renderizar();
  actualizarEstadisticas();
})();
