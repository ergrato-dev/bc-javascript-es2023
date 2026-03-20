// PRÁCTICA 02: Validación HTML5 (simulación)

const validations = {
  email: value => value.includes('@'),
  password: value => value.length >= 8
};

console.log('--- Paso 1: Validar email ---');
// console.log('email válido:', validations.email('ana@mail.com'));

console.log('');
console.log('--- Paso 2: Validar password ---');
// console.log('password válido:', validations.password('12345678'));

console.log('');
console.log('=== Fin ===');
