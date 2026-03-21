// PRÁCTICA 03: Date operations (SOLUCIÓN)

const startDate = new Date('2026-05-01T00:00:00Z');
const endDate = new Date('2026-05-15T00:00:00Z');

console.log('--- Paso 1: Diferencia en días ---');
const diffMs = endDate.getTime() - startDate.getTime();
const diffDays = diffMs / (1000 * 60 * 60 * 24);
console.log('Días:', diffDays);

console.log('');
console.log('--- Paso 2: Sumar días ---');
const plusSeven = new Date(startDate);
plusSeven.setDate(plusSeven.getDate() + 7);
console.log('Nueva fecha:', plusSeven.toISOString());

console.log('');
console.log('=== Fin ===');
