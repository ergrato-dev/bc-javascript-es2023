// Lógica de la colección: el error de validación, la clase Collection y las funciones de búsqueda, sin DOM.
// main.js las importa para pintar la página y scripts/verificar-semana.sh las comprueba desde Node.
// Completa cada TODO siguiendo 3-proyecto/README.md.

// TODO paso 3: un dato del formulario no cumple una regla (semana 11).
// - Hereda de Error. name: 'ValidationError'. Guarda el campo en field.
// new ValidationError('name', 'Campo obligatorio') → field 'name', message 'Campo obligatorio'
export class ValidationError extends Error {
  // TODO
}

// TODO paso 4: comprueba los datos de una pieza y devuelve una copia limpia { name, room, value }.
// - name sin espacios en los extremos. value convertido a número: el formulario lo envía como texto ('12.5').
// Lanza ValidationError con el primer problema, en este orden:
// - data no es un objeto (null, array u otro tipo) → field 'piece', 'Cada pieza debe ser un objeto'
// - name no es texto o queda vacío → 'name', 'Campo obligatorio'; menos de 3 caracteres → 'name', 'Mínimo 3 caracteres'
// - room no está en rooms → 'room', 'Elige una sala válida'
// - value vacío, no numérico o menor que 0 → 'value', 'Debe ser un número de 0 o más'
export const validatePiece = (data, rooms) => {
  // TODO
};

// La colección guarda las piezas en un Map por id y avisa a quien se suscriba cada vez que cambia.
// Todo su estado va en campos privados (#): desde fuera solo se usa a través de sus métodos.
export class Collection {
  // TODO paso 5: campos privados para las piezas (un Map), los suscriptores (un Set), el prefijo,
  // las salas y el número del último id.

  constructor(prefix, rooms) {
    // TODO paso 5
  }

  // TODO paso 5: cuántas piezas hay.
  get size() {
    // TODO
  }

  // TODO paso 6: guarda listener y devuelve una función que lo da de baja.
  subscribe(listener) {
    // TODO
  }

  // TODO paso 5: valida data con validatePiece y guarda la pieza con id `${prefix}-001`, `-002`...
  // La pieza se congela con Object.freeze y se devuelve. Si los datos no valen, el error sale y no se gasta ningún número.
  // Paso 6: después de guardar, llama a cada suscriptor con la colección.
  add(data) {
    // TODO
  }

  // TODO paso 5: la pieza con ese id, o undefined.
  get(id) {
    // TODO
  }

  // TODO paso 6: borra la pieza y devuelve true; si no existía, devuelve false.
  // Solo avisa a los suscriptores si ha borrado algo.
  remove(id) {
    // TODO
  }

  // TODO paso 7: entrega las piezas en el orden en que se añadieron, para usar for...of y [...collection].
  *[Symbol.iterator]() {
    // TODO
  }
}

// TODO paso 8: filtra y ordena cualquier iterable de piezas (un array o una Collection) y devuelve un array nuevo.
// - text: el nombre lo contiene, sin distinguir mayúsculas y sin contar los espacios de los extremos ('' = todas).
// - room: solo las de esa sala ('' = todas).
// - sort 'name': por nombre de la A a la Z (localeCompare); sort 'value': de mayor a menor valor.
export const search = (pieces, { text = '', room = '', sort = 'name' } = {}) => {
  // TODO
};

// TODO paso 9: generador que entrega items en páginas de size elementos: [1, 2, 3, 4, 5] con size 2 → [1, 2], [3, 4], [5].
export function* paginate(items, size) {
  // TODO
}

// TODO paso 10: resumen de cualquier iterable de piezas: { count, total, byRoom }.
// byRoom es un Map de sala → número de piezas, con las salas en el orden en que aparecen.
export const summarize = (pieces) => {
  // TODO
};
