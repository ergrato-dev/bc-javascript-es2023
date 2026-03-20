// ============================================
// PRÁCTICA 02: createElement, append y remove
// ============================================

const state = {
  items: []
};

// ============================================
// PASO 1: Crear elemento
// ============================================
console.log('--- Paso 1: Crear elemento ---');

// Descomenta las siguientes líneas:
// const createItem = (id, title) => ({ id, title, classes: ['card'] });
// const item = createItem(1, 'Elemento inicial');
// console.log('Creado:', item);

console.log('');

// ============================================
// PASO 2: Insertar en colección
// ============================================
console.log('--- Paso 2: Insertar en colección ---');

// Descomenta las siguientes líneas:
// const appendItem = itemData => {
//   state.items.push(itemData);
// };
//
// appendItem({ id: 1, title: 'Card 1' });
// appendItem({ id: 2, title: 'Card 2' });
// console.log('Total items:', state.items.length);

console.log('');

// ============================================
// PASO 3: Remover por ID
// ============================================
console.log('--- Paso 3: Remover por ID ---');

// Descomenta las siguientes líneas:
// const removeItemById = itemId => {
//   state.items = state.items.filter(itemData => itemData.id !== itemId);
// };
//
// removeItemById(1);
// console.log('Items tras remove:', state.items.length);

console.log('');

// ============================================
// PASO 4: Render desde estado
// ============================================
console.log('--- Paso 4: Render desde estado ---');

// Descomenta las siguientes líneas:
// const render = () => {
//   console.log('Render actual:');
//   state.items.forEach(itemData => {
//     console.log(`- #${itemData.id}: ${itemData.title}`);
//   });
// };
//
// render();

console.log('');
console.log('=== Fin de la práctica ===');
