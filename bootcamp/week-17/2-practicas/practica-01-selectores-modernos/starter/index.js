// ============================================
// PRÁCTICA 01: Selectores Modernos
// ============================================

// Simulación mínima de estructura para ejercicios por consola
const mockDom = {
  querySelector: selector => ({ selector, type: 'single' }),
  querySelectorAll: selector => ([
    { selector, index: 0 },
    { selector, index: 1 }
  ])
};

// ============================================
// PASO 1: Selección única
// ============================================
console.log('--- Paso 1: Selección única ---');

// Descomenta las siguientes líneas:
// const panel = mockDom.querySelector('.panel');
// console.log('Nodo único:', panel);

console.log('');

// ============================================
// PASO 2: Selección múltiple
// ============================================
console.log('--- Paso 2: Selección múltiple ---');

// Descomenta las siguientes líneas:
// const cards = mockDom.querySelectorAll('.card');
// console.log('Total cards:', cards.length);
// cards.forEach(card => console.log('Card index:', card.index));

console.log('');

// ============================================
// PASO 3: Data attributes
// ============================================
console.log('--- Paso 3: Data attributes ---');

// Descomenta las siguientes líneas:
// const submitButton = mockDom.querySelector('[data-action="submit"]');
// console.log('Botón submit:', submitButton.selector);

console.log('');

// ============================================
// PASO 4: Cache de nodos
// ============================================
console.log('--- Paso 4: Cache de nodos ---');

// Descomenta las siguientes líneas:
// const elements = {
//   list: mockDom.querySelector('[data-ui="list"]'),
//   form: mockDom.querySelector('[data-ui="form"]'),
//   status: mockDom.querySelector('[data-ui="status"]')
// };
//
// console.log('Cache keys:', Object.keys(elements));

console.log('');
console.log('=== Fin de la práctica ===');
