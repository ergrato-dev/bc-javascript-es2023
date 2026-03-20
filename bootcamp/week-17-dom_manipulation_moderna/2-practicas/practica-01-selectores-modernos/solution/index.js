// ============================================
// PRÁCTICA 01: Selectores Modernos (SOLUCIÓN)
// ============================================

const mockDom = {
  querySelector: selector => ({ selector, type: 'single' }),
  querySelectorAll: selector => ([
    { selector, index: 0 },
    { selector, index: 1 }
  ])
};

console.log('--- Paso 1: Selección única ---');
const panel = mockDom.querySelector('.panel');
console.log('Nodo único:', panel);

console.log('');
console.log('--- Paso 2: Selección múltiple ---');
const cards = mockDom.querySelectorAll('.card');
console.log('Total cards:', cards.length);
cards.forEach(card => console.log('Card index:', card.index));

console.log('');
console.log('--- Paso 3: Data attributes ---');
const submitButton = mockDom.querySelector('[data-action="submit"]');
console.log('Botón submit:', submitButton.selector);

console.log('');
console.log('--- Paso 4: Cache de nodos ---');
const elements = {
  list: mockDom.querySelector('[data-ui="list"]'),
  form: mockDom.querySelector('[data-ui="form"]'),
  status: mockDom.querySelector('[data-ui="status"]')
};

console.log('Cache keys:', Object.keys(elements));

console.log('');
console.log('=== Fin de la práctica ===');
