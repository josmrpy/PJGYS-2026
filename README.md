# Propuestas Legislativas · Parlamento Joven Guía y Scout Costa Rica 2026

Repositorio del sitio web creado para la consulta, organización y seguimiento de las propuestas legislativas presentadas durante el Parlamento Joven Guía y Scout Costa Rica 2026.

## Sobre el proyecto

Este sitio funciona como un espacio centralizado para reunir las propuestas de la fracción legislativa, permitiendo consultar información básica de cada iniciativa y acceder a sus documentos de trabajo.

La página incluye:

* listado organizado de propuestas legislativas
* información de autores y grupos de origen
* resúmenes de cada iniciativa
* acceso a documentos de referencia
* visor integrado de documentos
* buscador de propuestas
* sistema de seguimiento de progreso guardado localmente en el navegador

## Estructura

Proyecto hecho con [Astro](https://astro.build) (salida estática, CSS y JavaScript sin framework de UI).

```text
src/
  pages/index.astro          Página que compone todas las secciones
  layouts/BaseLayout.astro   <head>, tipografías y script principal
  components/                Topbar, Hero, ResultadoVotacion, Buscador, SelloFraccion, Footer...
  data/propuestas.js         Datos de las propuestas (arreglo `propuestas`)
  scripts/main.js            Lógica: tarjetas, buscador, visor y progreso guardado
  styles/global.css          Diseño visual y estilos responsive
  assets/images/             Imágenes optimizadas con astro:assets
    logo_gys.png  hero.jpg  logo_fraccion_circular.png
public/
  favicon.ico
  docs/                      propuesta01.pdf ... propuesta11.pdf (la 02 es .mp4)
  pdfjs/                     PDF.js local (pdfjs/web/viewer.html, pdfjs/build/...)
.github/workflows/deploy.yml Compila con Astro y publica en GitHub Pages
```

## Propósito

El proyecto busca facilitar la organización del trabajo legislativo dentro del Parlamento Joven, creando un espacio donde las propuestas puedan consultarse, revisarse y mantenerse como registro de la experiencia.

## Autor

Desarrollado por Josimar Madrigal (`@josmr.py`)
Grupo Guía y Scout 144
