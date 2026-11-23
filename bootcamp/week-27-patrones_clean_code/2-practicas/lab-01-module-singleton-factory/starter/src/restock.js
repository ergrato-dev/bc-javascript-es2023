// Otro módulo que usa el inventario: repone 10 unidades de un producto.
import { add } from './inventory.js';

export const restock = (name) => {
  add(name, 10);
};
