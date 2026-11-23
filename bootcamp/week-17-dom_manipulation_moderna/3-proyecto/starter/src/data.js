// Datos de ejemplo: las fichas del Planetario. Cámbialos por los de tu dominio (paso 2 del README).
// Cada ficha: id (entero, sin repetir), name, category, detail y featured (true o false).

export const TITLE = 'Planetario: fichas del cielo';

const ITEMS = [
  { id: 1, name: 'Saturno', category: 'Planeta', detail: 'Sus anillos son de hielo y roca', featured: true },
  { id: 2, name: 'Júpiter', category: 'Planeta', detail: 'La Gran Mancha Roja es una tormenta', featured: false },
  { id: 3, name: 'Marte', category: 'Planeta', detail: 'Tiene el volcán más alto conocido', featured: false },
  { id: 4, name: 'Sirio', category: 'Estrella', detail: 'La estrella más brillante del cielo nocturno', featured: false },
  { id: 5, name: 'Betelgeuse', category: 'Estrella', detail: 'Una supergigante roja en Orión', featured: true },
  { id: 6, name: 'Polaris', category: 'Estrella', detail: 'Marca el norte desde hace siglos', featured: false },
  { id: 7, name: 'Andrómeda', category: 'Galaxia', detail: 'La galaxia grande más cercana', featured: false },
  { id: 8, name: 'Vía Láctea', category: 'Galaxia', detail: 'Nuestra galaxia, vista desde dentro', featured: false },
  { id: 9, name: 'Nebulosa de Orión', category: 'Nebulosa', detail: 'Una guardería de estrellas', featured: false },
  { id: 10, name: 'Nebulosa del Cangrejo', category: 'Nebulosa', detail: 'Los restos de una supernova', featured: false },
];

export default ITEMS;
