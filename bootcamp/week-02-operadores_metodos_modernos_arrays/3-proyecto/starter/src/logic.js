// Lógica de la colección: funciones puras, sin DOM ni localStorage.
// main.js las importa para pintar la página y scripts/verificar-semana.sh las comprueba desde Node.
// Completa cada TODO siguiendo 3-proyecto/README.md. Ninguna función modifica el array que recibe.

// TODO paso 3: devuelve un elemento nuevo con valores por defecto y el siguiente id libre.
// createItem({ name: 'Marte' }) → { id: 1, name: 'Marte', description: '', category: 'other', priority: 'medium', active: true }
// createItem({ name: 'Venus' }, [{ id: 4 }, { id: 9 }]).id → 10
export const createItem = (data, items) => {
  // TODO
};

// TODO paso 4: devuelve un array nuevo con los elementos de items y después los nuevos.
// addItem([a], b, c) → [a, b, c]
export const addItem = (items, newItems) => {
  // TODO
};

// TODO paso 4: devuelve un array nuevo en el que el elemento con ese id lleva los cambios.
// updateItem(items, 2, { priority: 'high' })
export const updateItem = (items, id, changes) => {
  // TODO
};

// TODO paso 4: devuelve un array nuevo sin el elemento con ese id.
export const removeItem = (items, id) => {
  // TODO
};

// TODO paso 4: devuelve un array nuevo en el que el elemento con ese id cambia active de true a false o al revés.
export const toggleActive = (items, id) => {
  // TODO
};

// TODO paso 5: devuelve los elementos que cumplen todos los filtros.
// status: 'all' | 'active' | 'inactive'; category y priority: 'all' o un valor; query: texto en name o description.
// filterItems(items) → todos; filterItems(items, { status: 'active', query: 'sat' })
export const filterItems = (items, filters) => {
  // TODO
};

// TODO paso 6: devuelve { total, active, inactive, byCategory }.
// byCategory cuenta los elementos de cada categoría: { planet: 2, star: 1 }
export const getStats = (items) => {
  // TODO
};

// TODO paso 7: devuelve los campos obligatorios que faltan o están vacíos.
// missingFields({ name: '  ', category: 'star' }) → ['name']
// missingFields({ name: 'Sirio' }, ['name', 'priority']) → ['priority']
export const missingFields = (data, required) => {
  // TODO
};
