// Un inventario como módulo: lo que se exporta es público y lo demás, privado.

// Privado: ningún otro archivo puede leer ni cambiar estas dos variables.
const units = new Map();
let changes = 0;

// Privada también: solo la usan las funciones de este archivo.
const record = () => {
  changes += 1;
};

export const add = (name, amount) => {
  units.set(name, (units.get(name) ?? 0) + amount);
  record();
};

export const unitsOf = (name) => units.get(name) ?? 0;

export const changeCount = () => changes;
