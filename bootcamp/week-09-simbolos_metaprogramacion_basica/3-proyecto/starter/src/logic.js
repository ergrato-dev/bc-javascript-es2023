// Lógica de las fichas: símbolos y funciones puras, sin DOM.
// main.js las importa para pintar la página y scripts/verificar-semana.sh las comprueba desde Node.
// Completa cada TODO siguiendo 3-proyecto/README.md. Ninguna modifica lo que recibe.
// Los datos de una pieza tienen la forma { name, room, value, note }.

// TODO paso 3: símbolo local (no del registro global) con la descripción 'notes'.
// Es la clave con la que cada pieza guarda su nota reservada.
export const NOTES = undefined;

// TODO paso 4: devuelve una pieza nueva { id, name, room, value } con la nota guardada en la clave NOTES.
// Object.keys(pieza) → [ 'id', 'name', 'room', 'value' ]; pieza[NOTES] → la nota
// TODO paso 5: añade a la pieza Symbol.toStringTag ('Piece') y Symbol.toPrimitive:
// String(pieza) → 'Telescopio refractor (PLA-001)'; +pieza → 12000
export const createPiece = ({ name, room, value, note }, id) => {
  // TODO
};

// TODO paso 6: el tipo que da Object.prototype.toString.call(value), sin '[object ' ni ']'.
// typeOf([]) → 'Array'; typeOf(pieza) → 'Piece'
export const typeOf = (value) => {
  // TODO
};

// TODO paso 7: objeto con un método Symbol.hasInstance para que x instanceof Piece
// sea true solo cuando x es una pieza (usa typeOf).
export const Piece = {};

// TODO paso 8: suma las piezas con reduce, empezando en 0. Suma las piezas, no su value:
// Symbol.toPrimitive las convierte en número. totalValue([]) → 0
export const totalValue = (pieces) => {
  // TODO
};

// TODO paso 9: objeto nuevo y normal con solo las claves de texto de la pieza.
// toPublic(pieza) → { id: 'PLA-001', name: 'Telescopio refractor', room: 'Cúpula', value: 12000 }
export const toPublic = (piece) => {
  // TODO
};

// TODO paso 10: la descripción de cada clave simbólica propia del objeto.
// hiddenKeys({ a: 1, [Symbol('x')]: 2 }) → [ 'x' ]
export const hiddenKeys = (object) => {
  // TODO
};
