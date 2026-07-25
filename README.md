# Propuestas Legislativas — Parlamento Joven Guía y Scout Costa Rica 2026

Sitio estático (HTML + CSS + JS puro, sin frameworks ni build) para consultar, leer y comparar las 11 propuestas antes del proceso de deliberación. Diseño institucional simple: sin degradados, sin animaciones decorativas, sin ilustraciones — pensado para verse como una herramienta real de una organización, no como una plantilla.

## Archivos del proyecto

```
├── index.html   → estructura: barra superior, hero, buscador, listado
├── styles.css   → todo el sistema visual (colores, tipografía, tarjetas)
├── script.js    → datos de las propuestas + toda la lógica del sitio
├── README.md    → este archivo
└── (aquí van tus PDFs e imágenes: propuesta1.pdf, hero.jpg, ...)
```

Cada archivo trae comentarios en el propio código señalando exactamente qué editar. Esta guía es un resumen de esos mismos puntos.

## 1. Dónde modificar los textos generales

Todo el texto que no son propuestas (título del hero, subtítulo, descripción, nombre del sitio en la barra superior, textos del footer) está directamente en `index.html`, en español y sin abreviaturas técnicas. Búscalo por sección:

- Barra superior → `<div class="topbar">`
- Hero (título, subtítulo, descripción, botones) → `<section class="hero">`
- Pie de página → `<footer class="site-footer">`

## 2. Dónde modificar las propuestas

Todo vive en **un solo arreglo** llamado `propuestas`, al inicio de `script.js`:

```js
{
  id: 1,
  titulo:  "Nombre real de la propuesta",
  autor:   "Nombre Apellido",
  grupo:   "GYS 144",
  resumen: "Resumen corto de 2 a 4 líneas.",
  drive:   "https://drive.google.com/file/d/XXXXX/view",
  pdf:     "propuesta1.pdf"
}
```

Abre `script.js`, ubica el bloque correspondiente (van del 1 al 11) y reemplaza `titulo`, `autor`, `grupo`, `resumen`, `drive` y `pdf`. No necesitas tocar `index.html` ni `styles.css`: el listado completo se regenera solo a partir de este arreglo.

**Para agregar o quitar propuestas**: copia o borra un bloque `{ ... }` completo dentro del arreglo. El contador, las estadísticas del hero y la navegación "Anterior/Siguiente" se ajustan automáticamente — no hay ningún número escrito "a mano" en el resto del código.

## 3. Dónde colocar imágenes

El sitio no trae ninguna imagen de ejemplo descargada de internet; en su lugar hay **contenedores reservados y documentados**, listos para recibir contenido real:

### Imagen del hero
En `index.html`, dentro de `<section class="hero">`, verás un bloque `<div class="hero-imagen-marcador">` con un comentario explicativo justo encima. Para activarlo:
1. Coloca tu imagen (por ejemplo `hero.jpg`) en la misma carpeta que `index.html`.
2. Reemplaza el `<div class="hero-imagen-marcador">...</div>` completo por:
   ```html
   <img src="hero.jpg" alt="Descripción de la imagen" class="hero-imagen">
   ```
El tamaño y las proporciones ya están definidos en `styles.css` (busca `.hero-imagen`), así que la imagen se ajustará automáticamente.

### Logo en la barra superior (opcional)
En `index.html`, dentro de `<div class="topbar">`, hay un comentario que explica cómo reemplazar el texto por un `<img>` con el logo oficial, si la organización decide usar uno.

## 4. Dónde modificar los colores

Todos los colores institucionales están definidos **una sola vez**, como variables, al inicio de `styles.css` (sección `1. COLORES Y TIPOGRAFÍA`):

```css
--azul:   #2C1261;   /* encabezados, botones principales, footer */
--rojo:   #ED1A39;   /* acentos e indicadores — usar con moderación */
```

Si en algún momento cambian los colores institucionales, basta con editar estos valores hexadecimales: se actualizan en todo el sitio automáticamente. No hay colores "sueltos" escritos en otras partes del archivo.

## 5. Dónde modificar la tipografía

También como variables, en la misma sección de `styles.css`:

```css
--fuente-titulo: "Montserrat", ...;   /* títulos y botones */
--fuente-texto:   "Nunito", ...;      /* párrafos y contenido */
```

Ambas se cargan desde Google Fonts en `index.html`. Si prefieres no depender de una conexión externa, borra ese bloque `<link>`: el sitio usará automáticamente tipografías del sistema ya definidas como respaldo.

## Funcionalidades incluidas

- **Listado de tarjetas** con expansión en el mismo lugar: al hacer clic en una propuesta se abre suavemente ocupando todo el ancho; si abres otra, la anterior se cierra sola. No se navega a otra página.
- **Buscador por título** en tiempo real, con contador de resultados.
- **Botón "Marcar como revisada"** dentro de cada propuesta — el progreso se guarda en el navegador de cada persona y se refleja en "Revisadas por ti" del hero. La insignia de la tarjeta muestra un indicador cuando ya fue revisada.
- **Navegación "Anterior / Siguiente"** dentro de cada propuesta abierta.
- **Interacciones discretas**: el único movimiento del sitio es la apertura/cierre de una propuesta. Los botones y tarjetas solo cambian de color o sombra muy sutil al pasar el cursor — sin desplazamientos, sin efectos decorativos.
- **Totalmente responsive**, y respeta la preferencia de "reducir movimiento" del sistema operativo.

## Cómo publicarlo en GitHub Pages

1. Crea un repositorio nuevo en GitHub.
2. Sube `index.html`, `styles.css`, `script.js`, tus PDFs y tu imagen del hero a la raíz del repositorio.
3. Ve a **Settings → Pages**.
4. En **"Build and deployment"** elige **"Deploy from a branch"**, rama `main`, carpeta `/ (root)`.
5. En un par de minutos tendrás una URL del estilo:
   `https://tu-usuario.github.io/nombre-del-repositorio/`

---
Desarrollado por Josimar Madrigal (@josmr.py) · Grupo Guía y Scout 144
