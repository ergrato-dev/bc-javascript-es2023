// Datos del buscador. Cámbialos por los de tu dominio (paso 2).

// title e intro: el título y la presentación de la página.
// total: cuántas fichas genera makeRecords para probar con un catálogo grande (de 500 a 5000).
// searchFields: los campos de FIELDS en los que se busca.
// pageSize: las fichas de cada página de resultados (de 10 a 50).
// delay: los milisegundos que espera la búsqueda a que dejes de escribir (de 150 a 500).
export const APP = {
  title: 'Catálogo del cielo del planetario',
  intro: 'Busca estrellas, nebulosas y galaxias del catálogo de las sesiones de observación.',
  total: 2000,
  searchFields: ['name', 'type', 'constellation'],
  pageSize: 20,
  delay: 250,
};

// Los campos de cada ficha, en el orden en que se muestran: name en camelCase inglés y label,
// el texto que ve la persona. El primero es el nombre de la ficha.
export const FIELDS = [
  { name: 'name', label: 'Nombre' },
  { name: 'type', label: 'Tipo' },
  { name: 'constellation', label: 'Constelación' },
  { name: 'magnitude', label: 'Magnitud' },
];

// Fichas reales de ejemplo: de 8 a 30, con todos los campos de FIELDS.
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

// Genera total fichas repitiendo SEED, con un id del 1 en adelante y el número de copia en el
// primer campo: 'Sirio #1', 'Vega #1'... 'Sirio #2'... No hace falta editarla.
export const makeRecords = (total = APP.total) =>
  Array.from({ length: total }, (_, i) => {
    const base = SEED[i % SEED.length];
    const first = FIELDS[0].name;
    return { id: i + 1, ...base, [first]: `${base[first]} #${Math.floor(i / SEED.length) + 1}` };
  });
