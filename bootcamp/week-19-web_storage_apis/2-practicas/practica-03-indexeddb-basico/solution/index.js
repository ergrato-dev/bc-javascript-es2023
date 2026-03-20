// PRÁCTICA 03: IndexedDB básico (SOLUCIÓN)

console.log('--- Paso 1: open DB ---');
const request = { name: 'bootcamp-db', version: 1 };
console.log('Abriendo DB:', request);

console.log('');
console.log('--- Paso 2: onupgradeneeded ---');
const stores = new Set();
stores.add('items');
console.log('Stores:', [...stores]);

console.log('');
console.log('--- Paso 3: put/get simulado ---');
const table = new Map();
table.set(1, { id: 1, title: 'Registro demo' });
console.log('Item 1:', table.get(1));

console.log('');
console.log('=== Fin ===');
