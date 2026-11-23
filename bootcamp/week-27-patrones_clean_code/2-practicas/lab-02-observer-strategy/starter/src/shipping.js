// El coste de envío según el método, de dos formas.

// 1. Con un switch: para añadir un método hay que cambiar esta función.
export const shippingCostSwitch = (method, weight) => {
  switch (method) {
    case 'standard':
      return 4 + weight * 0.5;
    case 'express':
      return 9 + weight;
    case 'locker':
      return 3;
    default:
      throw new Error(`Método de envío desconocido: ${method}`);
  }
};

// 2. Con estrategias: una función por método, en un objeto.
export const SHIPPING = {
  standard: (weight) => 4 + weight * 0.5,
  express: (weight) => 9 + weight,
  locker: () => 3,
};

export const shippingCost = (method, weight) => {
  const strategy = SHIPPING[method];
  if (!strategy) throw new Error(`Método de envío desconocido: ${method}`);
  return strategy(weight);
};
