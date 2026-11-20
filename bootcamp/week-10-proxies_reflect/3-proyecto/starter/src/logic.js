// Lógica de las fichas: validadores y proxies, sin DOM.
// main.js las importa para pintar la página y scripts/verificar-semana.sh las comprueba desde Node.
// Completa cada TODO siguiendo 3-proyecto/README.md.
// Un validador es una función que recibe un valor y devuelve un mensaje de error, o null si el valor es válido.

// TODO paso 3: devuelve un proxy de solo lectura sobre object.
// Se lee igual que object, pero los traps set y deleteProperty devuelven false sin tocarlo:
// en un módulo, eso hace que asignar o borrar lance TypeError.
// const piece = readOnly({ value: 1 }); piece.value → 1; piece.value = 2 → TypeError
export const readOnly = (object) => {
  // TODO
};

// TODO paso 4: validador que falla si el valor, pasado a texto y sin espacios en los extremos, queda vacío.
// required()('  ') → 'Campo obligatorio'; required()('Mapa') → null
export const required = () => {
  // TODO
};

// TODO paso 5: validador que falla si el texto, sin espacios en los extremos, tiene menos de min caracteres.
// minLength(3)('ab') → 'Mínimo 3 caracteres'; minLength(3)('abc') → null
export const minLength = (min) => {
  // TODO
};

// TODO paso 5: validador que falla si Number(value) no es un número finito entre min y max (ambos incluidos).
// between(0, 10)('12') → 'Debe estar entre 0 y 10'; between(0, 10)('abc') → 'Debe estar entre 0 y 10'; between(0, 10)('7') → null
export const between = (min, max) => {
  // TODO
};

// TODO paso 5: validador que falla si el valor no es uno de options.
// oneOf(['a', 'b'])('c') → 'Elige una opción válida'; oneOf(['a', 'b'])('a') → null
export const oneOf = (options) => {
  // TODO
};

// TODO paso 6: aplica los validadores en orden y devuelve el primer mensaje de error, o null si todos pasan.
// firstError([required(), minLength(3)], '') → 'Campo obligatorio'
export const firstError = (validators, value) => {
  // TODO
};

// TODO pasos 7 y 8: devuelve un proxy sobre un objeto vacío que hace de borrador del formulario.
// - set: solo admite los campos de schema (con otro lanza TypeError 'Campo desconocido: <campo>').
//   Guarda el valor con Reflect.set, apunta o borra su error y llama a onChange(campo, valor, error).
// - get: form.errors devuelve un objeto nuevo { campo: mensaje } con los campos que tienen error;
//   form.isValid es true si todos los campos de schema tienen valor y ninguno tiene error.
//   El resto de propiedades se leen con Reflect.get.
// const form = createForm(SCHEMA, onChange); form.name = 'ab'; form.errors → { name: 'Mínimo 3 caracteres' }
export const createForm = (schema, onChange) => {
  // TODO
};
