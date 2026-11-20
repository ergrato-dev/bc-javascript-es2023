// Lógica de la ficha: funciones puras, sin DOM.
// main.js las importa para pintar la página y scripts/verificar-semana.sh las comprueba desde Node.
// Completa cada TODO siguiendo 3-proyecto/README.md. Usa solo const, arrow functions y template literals.

// TODO paso 3: devuelve "nombre (código)" con un template literal.
// formatHeader({ name: 'Sala Cúpula', code: 'SC-01' }) → 'Sala Cúpula (SC-01)'
export const formatHeader = (entity) => {
  // TODO
};

// TODO paso 4: devuelve "sala · planta N" leyendo entity.location con ?. y ??.
// Sin sala → 'Sin ubicación'; sin planta → '-'. La planta 0 es válida.
// formatLocation({ location: { room: 'Sala A', floor: 0 } }) → 'Sala A · planta 0'
// formatLocation({}) → 'Sin ubicación · planta -'
export const formatLocation = (entity) => {
  // TODO
};

// TODO paso 5: devuelve el <li> de un elemento.
// itemToHtml({ name: 'Telescopio', level: 80 }) →
// '<li class="skill-item"><span class="skill-name">Telescopio</span> <span class="skill-level">80%</span></li>'
export const itemToHtml = (item) => {
  // TODO
};

// TODO paso 5: devuelve los 3 primeros elementos, o todos si showAll es true.
export const visibleItems = (items, showAll) => {
  // TODO
};

// TODO paso 6: devuelve la media de los niveles redondeada con Math.round; 0 si el array está vacío.
// averageLevel([{ level: 90 }, { level: 75 }]) → 83
export const averageLevel = (items) => {
  // TODO
};

// TODO paso 6: devuelve cuántos elementos tienen level >= minLevel.
// countAbove([{ level: 90 }, { level: 75 }], 80) → 1
export const countAbove = (items, minLevel) => {
  // TODO
};

// TODO paso 7: devuelve un resumen de 4 líneas con un template literal multilínea:
//   línea 1: formatHeader(entity)
//   línea 2: la descripción, o 'Sin descripción'
//   línea 3: formatLocation(entity)
//   línea 4: 'Elementos: N · nivel medio M%' (sin items, N y M valen 0)
export const buildSummary = (entity) => {
  // TODO
};

// TODO paso 8: devuelve 'light' si theme es 'dark', y 'dark' en cualquier otro caso.
export const nextTheme = (theme) => {
  // TODO
};
