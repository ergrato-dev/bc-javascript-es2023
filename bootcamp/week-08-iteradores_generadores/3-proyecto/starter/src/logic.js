// Lógica del catálogo: generadores y funciones puras, sin DOM.
// main.js las importa para pintar la página y scripts/verificar-semana.sh las comprueba desde Node.
// Completa cada TODO siguiendo 3-proyecto/README.md. Ninguna modifica lo que recibe.
// Cada pieza tiene la forma { id, name, room }.

// TODO paso 3: generador infinito de ids: prefijo, guion y un número de 3 cifras que empieza en 1.
// const ids = createIdGenerator('PLA'); ids.next().value → 'PLA-001'; ids.next().value → 'PLA-002'
export function* createIdGenerator(prefix) {
  // TODO
}

// TODO paso 4: entrega los n primeros valores de iterable y termina. Con n <= 0 no entrega nada.
// No pide al iterable ningún valor de más: funciona con generadores infinitos.
// [...take(createIdGenerator('PLA'), 2)] → [ 'PLA-001', 'PLA-002' ]
export function* take(iterable, n) {
  // TODO
}

// TODO paso 5: se salta los n primeros valores de iterable y entrega el resto.
// [...skip(['a', 'b', 'c', 'd'], 1)] → [ 'b', 'c', 'd' ]
export function* skip(iterable, n) {
  // TODO
}

// TODO paso 6: entrega, a medida que se piden, los valores de iterable que cumplen predicate.
// [...filterBy([1, 2, 3, 4], (n) => n % 2 === 0)] → [ 2, 4 ]
export function* filterBy(iterable, predicate) {
  // TODO
}

// TODO paso 7: número de páginas para total piezas, con pageSize por página. Nunca menos de 1.
// countPages(10, 4) → 3; countPages(0, 4) → 1
export const countPages = (total, pageSize) => {
  // TODO
};

// TODO paso 8: array con las piezas de la página page (la primera es la 1), usando skip y take.
// Debe funcionar con cualquier iterable, no solo con arrays: nada de índices ni slice.
// getPage(['a', 'b', 'c', 'd', 'e'], 2, 2) → [ 'c', 'd' ]
export const getPage = (iterable, page, pageSize) => {
  // TODO
};

// TODO paso 9: devuelve un objeto iterable con size (número de piezas) y un [Symbol.iterator]
// que entrega las piezas ordenadas por nombre (localeCompare con 'es'), sin ordenar items.
// const catalog = createCatalog(items); catalog.size → 10; [...catalog][0].name → 'Astrolabio'
export const createCatalog = (items) => {
  // TODO
};
