// Este módulo solo se carga cuando alguien lo pide con import().
import { formatPrice } from '../utils/format.js';

console.log('  (report.js se está evaluando)');

export const totalReport = (products) =>
  `Total: ${formatPrice(products.reduce((sum, product) => sum + product.price, 0))}`;
