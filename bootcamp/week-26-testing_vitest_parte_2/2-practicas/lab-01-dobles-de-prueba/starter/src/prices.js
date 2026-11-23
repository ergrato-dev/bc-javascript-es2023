import { getRate } from './rates.js';

// Convierte un precio en euros a otra moneda, redondeado a 2 decimales.
// Importa getRate directamente: no la recibe como parámetro.
export const convert = (euros, currency) => {
  const rate = getRate(currency);
  return Math.round(euros * rate * 100) / 100;
};
