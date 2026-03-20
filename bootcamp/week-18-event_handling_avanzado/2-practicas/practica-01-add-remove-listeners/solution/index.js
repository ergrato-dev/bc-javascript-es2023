// PRÁCTICA 01: add/remove Event Listeners (SOLUCIÓN)

const listeners = new Map();

console.log('--- Paso 1: addEventListener ---');
const handleClick = () => console.log('Click detectado');
listeners.set('click', handleClick);
console.log('Listener click registrado');

console.log('');
console.log('--- Paso 2: dispatch simulado ---');
listeners.get('click')?.();

console.log('');
console.log('--- Paso 3: removeEventListener ---');
listeners.delete('click');
console.log('Listener click removido:', !listeners.has('click'));

console.log('');
console.log('=== Fin ===');
