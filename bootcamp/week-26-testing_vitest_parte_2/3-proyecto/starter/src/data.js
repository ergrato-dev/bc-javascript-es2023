// Las fichas con las que arranca el servidor: las del ejemplo Planetario.
// Cámbialas por las de tu dominio:
// - De 6 a 20 fichas.
// - Cada una con id (entero mayor que 0, sin repetir), name (texto sin repetir)
//   y de 1 a 4 campos más de tu dominio, los mismos en todas.
// - Al menos dos fichas que compartan una palabra en el nombre o en otro campo de texto,
//   y una con tildes: te harán falta para probar la búsqueda.
export const SEED = [
  { id: 1, name: 'Sirio', type: 'estrella', constellation: 'Can Mayor' },
  { id: 2, name: 'Vega', type: 'estrella', constellation: 'Lira' },
  { id: 3, name: 'Betelgeuse', type: 'estrella', constellation: 'Orión' },
  { id: 4, name: 'Pléyades', type: 'cúmulo', constellation: 'Tauro' },
  { id: 5, name: 'Andrómeda', type: 'galaxia', constellation: 'Andrómeda' },
  { id: 6, name: 'Nebulosa de Orión', type: 'nebulosa', constellation: 'Orión' },
  { id: 7, name: 'Aldebarán', type: 'estrella', constellation: 'Tauro' },
  { id: 8, name: 'Omega Centauri', type: 'cúmulo', constellation: 'Centauro' },
];
