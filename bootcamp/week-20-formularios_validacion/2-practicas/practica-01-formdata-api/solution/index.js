// PRÁCTICA 01: FormData API (SOLUCIÓN)

console.log('--- Paso 1: Datos del formulario ---');
const entries = [
  ['email', 'ana@mail.com'],
  ['password', 'secret123']
];

console.log('');
console.log('--- Paso 2: Convertir a objeto ---');
const payload = Object.fromEntries(entries);
console.log(payload);

console.log('');
console.log('=== Fin ===');
