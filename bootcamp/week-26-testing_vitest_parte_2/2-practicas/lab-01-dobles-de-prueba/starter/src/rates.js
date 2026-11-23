// Pide el cambio de euros a otra moneda a un servicio externo (en una app real, por la red).
// En el lab no hay servicio: la función falla siempre, como si no hubiera red.
export const getRate = (currency) => {
  throw new Error(`Sin conexión: no se pudo pedir el cambio a ${currency}`);
};
