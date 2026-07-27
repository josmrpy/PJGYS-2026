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
    titulo: "Ley: Educación ambiental y bioalfabetización en Costa Rica",
    autor: "Aaron José Torres Ríos",
    grupo: "Guanacaste #257",
    resumen:
      "Esta propuesta tiene como objetivo fortalecer la conciencia ecológica y el uso sostenible de la biodiversidad mediante la creación de programas nacionales gratuitos de educación ambiental y bioalfabetización. Su alcance abarca la formación integral en todas las etapas educativas y prioritariamente en comunidades aledañas a áreas protegidas, promoviendo la prevención del tráfico ilegal de fauna, la adopción de tecnologías sostenibles y la conservación comunitaria a nivel país.",
    drive:
      "https://drive.google.com/drive/folders/19aveMPDsZvPUHWrCO5fcy2lXoNZAuAtl?usp=drive_link",
    pdf: "PROPUESTAS/propuesta01.pdf",
  },
  {
    id: 2,
    titulo: "Ley para la Mejora del Transporte Público en Costa Rica",
    autor: "Gabriel Madrigal Aguilar",
    grupo: "Cartago #314",
    resumen:
      "Esta propuesta tiene como objetivo garantizar un transporte público seguro, eficiente y digno mediante la creación del Sistema Nacional de Fiscalización Permanente del Transporte Público Concesionado. Su alcance abarca la realización de inspecciones periódicas y sorpresivas para verificar el estado mecánico, cumplimiento de horarios, accesibilidad y calidad del servicio, priorizando las rutas más problemáticas y publicando los resultados de manera transparente para prevenir accidentes.",
    drive:
      "https://drive.google.com/drive/folders/19aveMPDsZvPUHWrCO5fcy2lXoNZAuAtl?usp=drive_link",
    pdf: "PROPUESTAS/propuesta02.mp4",
  },
  {
    id: 3,
    titulo:
      "Proyecto de Ley para la Implementación de la Economía Circular en los Centros Educativos públicos",
    autor: "Hannah Sánchez Barquero",
    grupo: "Heredia #000",
    resumen:
      "Esta propuesta tiene como objetivo obligar e institucionalizar el modelo de economía circular en todos los centros educativos públicos mediante comités institucionales de separación, recolección y compostaje. Su alcance abarca la capacitación comunitaria, la alianza con gestores locales y la creación de un fondo verde auto-gestionado con los ingresos del reciclaje para financiar mejoras de infraestructura, proyectos estudiantiles y becas académicas.",
    drive:
      "https://drive.google.com/drive/folders/19aveMPDsZvPUHWrCO5fcy2lXoNZAuAtl?usp=drive_link",
    pdf: "PROPUESTAS/propuesta03.pdf",
  },
  {
    id: 4,
    titulo:
      "La Importancia del Sistema de Alimentación Integral en la Comunidad Estudiantil Costarricense",
    autor: "Isabella Rojas Céspedes",
    grupo: "Heredia #38",
    resumen:
      "Esta propuesta tiene como objetivo garantizar la calidad, inocuidad y valor nutricional de los alimentos brindados por el PANEA para proteger el bienestar y rendimiento de la comunidad estudiantil. Su alcance abarca la creación de un sistema nacional de evaluación participativa cuatrimestral en los centros educativos, la obligatoriedad de estándares sanitarios para proveedores y la facultad del MEP para rescindir contratos ante incumplimientos reiterados.",
    drive:
      "https://drive.google.com/drive/folders/19aveMPDsZvPUHWrCO5fcy2lXoNZAuAtl?usp=drive_link",
    pdf: "PROPUESTAS/propuesta04.pdf",
  },
  {
    id: 5,
    titulo:
      "Ley para garantizar instalaciones seguras, accesibles y dignas en los centros educativos",
    autor: "José Ivankovich Solano",
    grupo: "Cartago #54",
    resumen:
      "Esta propuesta tiene como objetivo garantizar instalaciones seguras, accesibles y dignas para la comunidad estudiantil mediante la creación de un Fondo Nacional de Infraestructura Educativa con recursos permanentes. Su alcance abarca la realización de diagnósticos técnicos anuales por parte del MEP, la priorización objetiva de las escuelas y colegios en riesgo o deterioro y la implementación de una plataforma digital transparente para el seguimiento público de presupuestos y obras.",
    drive:
      "https://drive.google.com/drive/folders/19aveMPDsZvPUHWrCO5fcy2lXoNZAuAtl?usp=drive_link",
    pdf: "PROPUESTAS/propuesta05.pdf",
  },
  {
    id: 6,
    titulo:
      "Ley para la promoción de la Accesibilidad Comunicativa en Espacios y Servicios Públicos de Costa Rica",
    autor: "Josimar Madrigal Espinoza",
    grupo: "Limón #144",
    resumen:
      "Esta propuesta de ley tiene como objetivo impulsar la incorporación progresiva de recursos visuales, pictogramas, señalización accesible y formatos de lectura fácil en los entornos y servicios públicos de Costa Rica. Su alcance abarca la creación de lineamientos nacionales liderados por el CONAPDIS para su implementación en instituciones públicas, centros educativos, hospitales, sistemas de transporte y espacios de uso público, promoviendo la autonomía de la ciudadanía.",
    drive:
      "https://drive.google.com/drive/folders/19aveMPDsZvPUHWrCO5fcy2lXoNZAuAtl?usp=drive_link",
    pdf: "PROPUESTAS/propuesta06.pdf",
  },
  {
    id: 7,
    titulo: "Ley para fortalecer la salud mental en los centros educativos.",
    autor: "Mariam Corella Castro",
    grupo: "San José #42",
    resumen:
      "Esta propuesta tiene como objetivo garantizar el derecho al bienestar emocional y la atención de la salud mental en la población estudiantil de secundaria. Su alcance abarca la presencia obligatoria de profesionales en psicología y psiquiatría en centros educativos públicos, la capacitación anual al personal docente, la detección temprana y prevención de trastornos como ansiedad y depresión en alianza con la CCSS y el Ministerio de Salud, y la rendición de cuentas anual ante la Asamblea Legislativa.",
    drive:
      "https://drive.google.com/drive/folders/19aveMPDsZvPUHWrCO5fcy2lXoNZAuAtl?usp=drive_link",
    pdf: "PROPUESTAS/propuesta07.pdf",
  },
  {
    id: 8,
    titulo:
      "Proyecto de Ley para la Creación del Sistema Nacional de Prospectiva Estratégica, coordinado por una agencia técnica adscrita a MIDEPLAN con autonomía funcional.",
    autor: "María Isabel Araya Díaz",
    grupo: "Alajuela #14",
    resumen:
      "Esta propuesta busca institucionalizar la planificación pública de largo plazo mediante la creación del Sistema Nacional de Prospectiva Estratégica, coordinado por una agencia técnica adscrita a MIDEPLAN. Su alcance abarca la elaboración de estrategias quinquenales, la evaluación de riesgos futuros, el monitoreo de tendencias globales y el análisis prospectivo en proyectos legislativos clave para fortalecer la gobernanza anticipatoria en Costa Rica.",
    drive:
      "https://drive.google.com/drive/folders/19aveMPDsZvPUHWrCO5fcy2lXoNZAuAtl?usp=drive_link",
    pdf: "PROPUESTAS/propuesta08.pdf",
  },
  {
    id: 9,
    titulo: "Propuesta para parlamento juvenil guía y scout",
    autor: "María José Zúñiga Loría",
    grupo: "Limón #28",
    resumen:
      "Esta propuesta tiene como objetivo mejorar la inclusión educativa mediante la concientización sobre la neurodivergencia y la atención de los diferentes estilos de aprendizaje. Su alcance abarca la creación de un marco legal para capacitar obligatoriamente al personal docente y de orientación mediante profesionales en psicología de la CCSS, implementándose de forma gradual desde la GAM hacia las zonas periféricas para promover diagnósticos tempranos, combatir la automedicación e incentivar la empatía en el aula.",
    drive:
      "https://drive.google.com/drive/folders/19aveMPDsZvPUHWrCO5fcy2lXoNZAuAtl?usp=drive_link",
    pdf: "PROPUESTAS/propuesta09.pdf",
  },
  {
    id: 10,
    titulo:
      "Ley para la Prevención Integral de la criminalidad mediante el fortalecimiento de la cultura de la paz, la identidad cultural y la participación ciudadana.",
    autor: "Nathalie Espinoza Retana",
    grupo: "Cartago #57",
    resumen:
      "Esta propuesta tiene como objetivo prevenir la criminalidad y reconstruir el tejido social mediante una estrategia integral enfocada en la niñez y juventud. Su alcance abarca la implementación de educación preventiva en valores y resolución pacífica de conflictos, el fortalecimiento de la identidad cultural y la creación de espacios comunitarios y artísticos que promuevan la convivencia pacífica y reduzcan los factores de riesgo en todo el país.",
    drive:
      "https://drive.google.com/drive/folders/19aveMPDsZvPUHWrCO5fcy2lXoNZAuAtl?usp=drive_link",
    pdf: "PROPUESTAS/propuesta10.pdf",
  },
  {
    id: 11,
    titulo:
      "LEY DE PRESUPUESTOS PARTICIPATIVOS JUVENILES Y ACREDITACIÓN DE PRIMERA EXPERIENCIA",
    autor: "Sebastián Felipe Badilla Groves",
    grupo: "San José #100",
    resumen:
      "Esta propuesta tiene como objetivo promover la participación cívica y la inserción laboral de las personas jóvenes mediante la creación de presupuestos participativos municipales vinculantes. Su alcance abarca la asignación obligatoria de al menos un 3% del presupuesto de inversión local a proyectos diseñados y votados por jóvenes de 15 a 24 años mediante plataformas digitales, la mentoría técnica con Trabajo Comunal Universitario y la emisión de certificaciones oficiales de Primera Experiencia Laboral para quienes lideren su ejecución.",
    drive:
      "https://drive.google.com/drive/folders/19aveMPDsZvPUHWrCO5fcy2lXoNZAuAtl?usp=drive_link",
    pdf: "PROPUESTAS/propuesta11.pdf",
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

function esPdfRuta(ruta) {
  return typeof ruta === "string" && ruta.match(/\.pdf$/i);
}

function esVideoRuta(ruta) {
  return typeof ruta === "string" && ruta.match(/\.(mp4|webm|ogg)$/i);
}

function crearRutaVisorPDF(origen) {
  const archivo = new URL(origen, window.location.href).href;
  return `pdfjs/web/viewer.html?file=${encodeURIComponent(archivo)}`;
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
    video.src = recurso;
    video.innerHTML = "Tu navegador no soporta la etiqueta de video.";
    visorContenido.innerHTML = "";
    visorContenido.appendChild(video);
  } else {
    const iframe = document.createElement("iframe");
    iframe.src = recurso;
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

        <div class="detalle-visor" data-origen="${escapeAttr(propuesta.pdf)}" data-cargado="false">
          <p class="visor-etiqueta">Documento</p>
          <div class="visor-contenido">
            <div class="visor-placeholder">Abre la propuesta para cargarla con el visor PDF.js.</div>
          </div>
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
    cargarVisor(tarjetaActual);
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

/* --- Banner de "Resultado de la votación": abre la propuesta electa --- */
document.querySelectorAll("[data-abrir-propuesta]").forEach((elemento) => {
  elemento.addEventListener("click", () => {
    const idObjetivo = Number(elemento.dataset.abrirPropuesta);
    const indice = propuestas.findIndex((p) => p.id === idObjetivo);
    if (indice === -1) return;
    // Se espera a que termine el scroll hacia #propuestas antes de abrir
    // la tarjeta, para que la animación de apertura se vea completa.
    setTimeout(() => alternarTarjeta(indice), 350);
  });
});

/* --- Inicialización --- */
(function iniciar() {
  renderizar();
  actualizarEstadisticas();
})();
