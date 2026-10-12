// Ruta a un archivo de /public respetando el "base" del sitio (/PJGYS-2026).
export const publicUrl = (path) =>
  `${import.meta.env.BASE_URL.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
