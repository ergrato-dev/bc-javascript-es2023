// Un almacén con estado y una tarifa de envío. En este lab organizas sus tests.

// Crea un almacén vacío. Cada almacén guarda sus propias unidades.
export const createStock = () => {
  const units = new Map();
  return {
    // Suma unidades de un producto. Lanza un RangeError si la cantidad no es un entero mayor que 0.
    add(name, quantity = 1) {
      if (!Number.isInteger(quantity) || quantity < 1) throw new RangeError('La cantidad debe ser un entero mayor que 0');
      units.set(name, this.count(name) + quantity);
    },
    // Quita unidades. Lanza un Error si no hay bastantes. Un producto que llega a 0 desaparece.
    remove(name, quantity = 1) {
      const current = this.count(name);
      if (quantity > current) throw new Error(`No hay ${quantity} de ${name}`);
      if (quantity === current) units.delete(name);
      else units.set(name, current - quantity);
    },
    count: (name) => units.get(name) ?? 0,
    get size() {
      return units.size;
    },
  };
};

// Precio del envío según el peso en kg: hasta 1 kg, 3 €; hasta 5 kg, 5 €; a partir de ahí, 1 € más por
// cada kg o fracción. Lanza un RangeError si el peso no es un número mayor que 0.
export const shippingCost = (weight) => {
  if (!(weight > 0)) throw new RangeError('El peso debe ser mayor que 0');
  if (weight <= 1) return 3;
  if (weight <= 5) return 5;
  return 5 + Math.ceil(weight - 5);
};
