// ============================================
// PRÁCTICA 02: createElement, append y remove (SOLUCIÓN)
// ============================================

const state = {
  items: []
};

console.log('--- Paso 1: Crear elemento ---');
const createItem = (id, title) => ({ id, title, classes: ['card'] });
const item = createItem(1, 'Elemento inicial');
console.log('Creado:', item);

console.log('');
console.log('--- Paso 2: Insertar en colección ---');
const appendItem = itemData => {
  state.items.push(itemData);
};

appendItem({ id: 1, title: 'Card 1' });
appendItem({ id: 2, title: 'Card 2' });
console.log('Total items:', state.items.length);

console.log('');
console.log('--- Paso 3: Remover por ID ---');
const removeItemById = itemId => {
  state.items = state.items.filter(itemData => itemData.id !== itemId);
};

removeItemById(1);
console.log('Items tras remove:', state.items.length);

console.log('');
console.log('--- Paso 4: Render desde estado ---');
const render = () => {
  console.log('Render actual:');
  state.items.forEach(itemData => {
    console.log(`- #${itemData.id}: ${itemData.title}`);
  });
};

render();

console.log('');
console.log('=== Fin de la práctica ===');
