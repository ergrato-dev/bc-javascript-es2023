// Datos del dominio. Adáptalos al dominio que te asigna el instructor: el nombre, el prefijo
// de las claves, las categorías y las entradas iniciales.

// title: el título de la página. namespace: el prefijo de las claves en localStorage y
// sessionStorage (para no pisar las de otras páginas del mismo origen).
// entry: cómo se llama una entrada en tu dominio, en singular y en plural.
export const APP = {
  title: 'Cuaderno del planetario',
  namespace: 'planetario',
  entry: { one: 'observación', many: 'observaciones' },
};

export const CATEGORIES = ['luna', 'planeta', 'estrella', 'cielo profundo'];

// El borrador del formulario caduca a los 30 minutos.
export const DRAFT_TTL_MS = 30 * 60 * 1000;

// Entradas con las que empieza el cuaderno la primera vez (cuando no hay nada guardado).
export const SEED = [
  { id: 1, title: 'Luna en cuarto creciente', category: 'luna', createdAt: new Date('2026-11-02T19:30:00Z'), favorite: true },
  { id: 2, title: 'Júpiter y sus cuatro lunas', category: 'planeta', createdAt: new Date('2026-11-05T21:10:00Z'), favorite: false },
  { id: 3, title: 'Betelgeuse en Orión', category: 'estrella', createdAt: new Date('2026-11-09T22:45:00Z'), favorite: false },
  { id: 4, title: 'Galaxia de Andrómeda', category: 'cielo profundo', createdAt: new Date('2026-11-12T20:00:00Z'), favorite: true },
  { id: 5, title: 'Anillos de Saturno', category: 'planeta', createdAt: new Date('2026-11-16T19:50:00Z'), favorite: false },
  { id: 6, title: 'Cúmulo de las Pléyades', category: 'cielo profundo', createdAt: new Date('2026-11-20T23:15:00Z'), favorite: false },
];
