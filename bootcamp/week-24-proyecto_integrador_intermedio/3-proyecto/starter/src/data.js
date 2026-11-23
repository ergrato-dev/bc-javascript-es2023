// Datos de ejemplo del dominio (Planetario). Cámbialos por los de tu dominio: paso 2 del README.

// Textos y ajustes de la página.
// - cacheKey: la clave de localStorage donde se guarda la copia de la primera página.
// - perPage: fichas por página, de 3 a 20.
export const APP = {
  title: '🔭 Planetario — catálogo del cielo',
  intro: 'Los objetos del cielo que enseña el planetario. Busca, añade, corrige y borra fichas.',
  cacheKey: 'planetario-catalogo',
  perPage: 6,
};

// Los campos de cada ficha, en el orden en que se muestran. El primero es el nombre de la ficha.
// - name: camelCase en inglés, sin repetir y distinto de id. label: el texto que ve la persona.
// - type: 'text' o 'number'.
// - required: true si no puede quedar vacío. El primer campo siempre es obligatorio.
// - minLength (solo text) y min/max (solo number): opcionales.
export const FIELDS = [
  { name: 'name', label: 'Nombre', type: 'text', required: true, minLength: 3 },
  { name: 'type', label: 'Tipo', type: 'text', required: true },
  { name: 'constellation', label: 'Constelación', type: 'text' },
  { name: 'magnitude', label: 'Magnitud', type: 'number', min: -30, max: 30 },
];

// Las fichas con las que arranca la API de server.js, que les pone un id del 1 en adelante.
// Cada una tiene todos los campos y cumple sus reglas; el primer campo no se repite.
export const SEED = [
  { name: 'Sirio', type: 'Estrella', constellation: 'Can Mayor', magnitude: -1.46 },
  { name: 'Vega', type: 'Estrella', constellation: 'Lira', magnitude: 0.03 },
  { name: 'Betelgeuse', type: 'Estrella supergigante', constellation: 'Orión', magnitude: 0.5 },
  { name: 'Nebulosa de Orión', type: 'Nebulosa', constellation: 'Orión', magnitude: 4 },
  { name: 'Nebulosa del Cangrejo', type: 'Resto de supernova', constellation: 'Tauro', magnitude: 8.4 },
  { name: 'Pléyades', type: 'Cúmulo abierto', constellation: 'Tauro', magnitude: 1.6 },
  { name: 'Galaxia de Andrómeda', type: 'Galaxia espiral', constellation: 'Andrómeda', magnitude: 3.4 },
  { name: 'Galaxia del Remolino', type: 'Galaxia espiral', constellation: 'Perros de Caza', magnitude: 8.4 },
  { name: 'Omega Centauri', type: 'Cúmulo globular', constellation: 'Centauro', magnitude: 3.9 },
  { name: 'Nebulosa del Anillo', type: 'Nebulosa planetaria', constellation: 'Lira', magnitude: 8.8 },
];
