// PRÁCTICA 03: Constraint Validation API (SOLUCIÓN)

console.log('--- Paso 1: Regla personalizada ---');
const validateUsername = value => {
  if (value.length < 6) return 'Minimo 6 caracteres';
  return '';
};

console.log('');
console.log('--- Paso 2: Aplicar resultado ---');
const message = validateUsername('ana');
console.log('Mensaje:', message || 'válido');

console.log('');
console.log('=== Fin ===');
