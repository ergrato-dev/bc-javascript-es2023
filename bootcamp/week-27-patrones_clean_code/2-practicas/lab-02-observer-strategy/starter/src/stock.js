// Un almacén que avisa cuando a un producto le quedan pocas unidades.
// No sabe quién recibe el aviso: solo emite el evento 'low'.
const LOW_STOCK = 3;

export const createStock = (emitter) => {
  const units = new Map();

  return {
    add: (name, amount) => {
      units.set(name, (units.get(name) ?? 0) + amount);
    },
    take: (name, amount) => {
      const left = (units.get(name) ?? 0) - amount;
      units.set(name, left);
      if (left < LOW_STOCK) emitter.emit('low', { name, left });
    },
  };
};
