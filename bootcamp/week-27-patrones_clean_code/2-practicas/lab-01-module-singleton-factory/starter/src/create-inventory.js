// Una fábrica de inventarios: cada llamada crea uno nuevo, con sus propios datos.
export const createInventory = () => {
  // Privado de este inventario: lo ven solo las funciones de abajo (un closure).
  const units = new Map();
  let changes = 0;

  const record = () => {
    changes += 1;
  };

  return {
    add: (name, amount) => {
      units.set(name, (units.get(name) ?? 0) + amount);
      record();
    },
    unitsOf: (name) => units.get(name) ?? 0,
    changeCount: () => changes,
  };
};
