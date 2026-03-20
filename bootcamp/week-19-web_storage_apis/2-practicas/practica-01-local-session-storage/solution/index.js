// PRÁCTICA 01: localStorage y sessionStorage (SOLUCIÓN)

const localStore = new Map();
const sessionStore = new Map();

console.log('--- Paso 1: Guardar preferencia persistente ---');
localStore.set('app:theme', 'dark');
console.log('Theme guardado en localStorage simulado');

console.log('');
console.log('--- Paso 2: Guardar estado temporal ---');
sessionStore.set('app:wizard-step', '2');
console.log('Paso guardado en sessionStorage simulado');

console.log('');
console.log('--- Paso 3: Recuperar datos ---');
console.log('Theme:', localStore.get('app:theme'));
console.log('Wizard step:', sessionStore.get('app:wizard-step'));

console.log('');
console.log('=== Fin ===');
