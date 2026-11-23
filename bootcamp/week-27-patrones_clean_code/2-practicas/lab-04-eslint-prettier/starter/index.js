// Usa las funciones de src/products.js. Ejecuta: pnpm start
import { countByCategory, label, totalStock } from './src/products.js';

const products = [
  { name: 'Lápiz', category: 'escritura', price: 1.2, stock: 40, active: true },
  { name: 'Goma', category: 'escritura', price: 0.8, stock: 3, active: true },
  { name: 'Cuaderno', category: 'papel', price: 3.5, stock: 0, active: true },
];

console.log(countByCategory(products));
console.log(label(products[1], true, true, false));
console.log('Unidades:', totalStock(products));
