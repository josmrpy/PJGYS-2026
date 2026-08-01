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

* `index.html` — Estructura principal del sitio.
* `styles.css` — Diseño visual y estilos responsive.
* `script.js` — Contiene la información de las propuestas y la lógica de interacción.
* `logo.png` — Elemento gráfico institucional.
* `hero.jpg` — Imagen opcional para la portada.

## Gestión de propuestas

Las propuestas se administran desde el archivo `script.js` mediante el arreglo `propuestas`.

Cada propuesta contiene información como:

* identificador
* título de la iniciativa
* autor
* grupo Guía y Scout de origen
* resumen
* enlaces a documentos de trabajo

Ejemplo de estructura:

```js
{
  id: 1,
  titulo: "Ley de accesibilidad comunicativa",
  autor: "Nombre del autor",
  grupo: "Grupo Guía y Scout",
  resumen: "Descripción breve de la propuesta.",
  drive: "Enlace al documento",
  pdf: "Enlace al visor del documento"
}
```

## Propósito

El proyecto busca facilitar la organización del trabajo legislativo dentro del Parlamento Joven, creando un espacio donde las propuestas puedan consultarse, revisarse y mantenerse como registro de la experiencia.

## Autor

Desarrollado por Josimar Madrigal (`@josmr.py`)
Grupo Guía y Scout 144
