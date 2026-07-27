# Propuestas Legislativas · Parlamento Joven Guía y Scout Costa Rica 2026

Repositorio del sitio de consulta y análisis de las propuestas legislativas presentadas por la fracción legislativa del Parlamento Joven Guía y Scout Costa Rica 2026.

## Descripción

Este proyecto es una página web estática que muestra un listado de propuestas legislativas con:

- títulos, autores y grupos de origen
- resúmenes breves
- acceso directo a documentos en Google Drive
- visor integrado de archivos PDF/Google Docs
- buscador en la interfaz
- marcador de progreso personal en el navegador

El contenido principal se gestiona desde `script.js`, donde se define el arreglo de propuestas.

## Estructura del proyecto

- `index.html` — Página principal del sitio.
- `styles.css` — Estilos y diseño responsive.
- `script.js` — Datos de las propuestas y lógica interactiva.
- `logo.png` — Logo institucional.
- `hero.jpg` — Imagen hero opcional para la portada.
- `README.md` — Documentación del proyecto.

## Cómo usar

1. Abre `index.html` en el navegador para ver la página.
2. Utiliza el campo de búsqueda para filtrar propuestas por título.
3. Haz clic en cada tarjeta para expandirla y ver más detalles.
4. Abre el documento en Drive o visualízalo directamente desde la tarjeta.
5. Marca las propuestas revisadas; el progreso se guarda en el navegador.

## Cómo actualizar las propuestas

Para agregar o editar propuestas, modifica el arreglo `propuestas` en `script.js`.

Cada objeto de propuesta incluye:

- `id` — número de propuesta.
- `titulo` — nombre completo de la iniciativa.
- `autor` — persona que la presenta.
- `grupo` — Grupo Guía y Scout.
- `resumen` — descripción corta de 2-4 líneas.
- `drive` — enlace a la carpeta o documento en Google Drive.
- `pdf` — enlace público a PDF o Google Docs.

Ejemplo:

```js
{
  id: 1,
  titulo: "Ley: Educación ambiental y bioalfabetización en Costa Rica",
  autor: "Aaron José Torres Ríos",
  grupo: "Guanacaste #257",
  resumen: "Esta propuesta tiene como objetivo fortalecer la conciencia ecológica...",
  drive: "https://drive.google.com/...",
  pdf: "https://drive.google.com/file/d/.../preview",
}
```

> Nota: si usas un archivo `hero.jpg`, colócalo en la raíz del proyecto y asegúrate de usar la etiqueta `<img>` en `index.html` como se comenta en el código.

## Personalización rápida

- Cambia el título y la descripción en `index.html`.
- Ajusta colores y tipografía en `styles.css`.
- Si no quieres depender de Google Fonts, elimina el bloque `<link>` de `index.html` y se usarán las fuentes del sistema.

## Requisitos

No necesitas servidor ni compilación; basta con abrir `index.html` en el navegador.

## Autor

Desarrollado por Josimar Madrigal (`@josmr.py`) · Grupo Guía y Scout 144
