// PRÁCTICA 02: Date formatting (SOLUCIÓN)

const date = new Date('2026-05-15T10:30:00Z');

console.log('--- Paso 1: Formateo simple ---');
console.log(date.toLocaleDateString('es-CO'));
console.log(date.toLocaleTimeString('es-CO'));

console.log('');
console.log('--- Paso 2: Formateo con opciones ---');
console.log(date.toLocaleString('es-CO', { dateStyle: 'medium', timeStyle: 'short' }));

console.log('');
console.log('=== Fin ===');
