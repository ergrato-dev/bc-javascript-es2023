// PRÁCTICA 02: Serialización JSON (SOLUCIÓN)

console.log('--- Paso 1: Convertir objeto a JSON ---');
const state = { filters: ['active'], page: 1 };
const serialized = JSON.stringify(state);
console.log('JSON:', serialized);

console.log('');
console.log('--- Paso 2: Parsear JSON válido ---');
const parsed = JSON.parse(serialized);
console.log('Objeto restaurado:', parsed);

console.log('');
console.log('--- Paso 3: Parseo seguro con fallback ---');
const safeParse = (value, fallback) => {
  try {
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
};
console.log('Fallback:', safeParse('{bad-json}', { filters: [] }));

console.log('');
console.log('=== Fin ===');
