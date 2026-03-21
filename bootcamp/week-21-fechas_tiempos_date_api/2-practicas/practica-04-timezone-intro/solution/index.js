// PRÁCTICA 04: Timezone intro (SOLUCIÓN)

const utcDate = new Date('2026-05-15T15:00:00Z');

console.log('--- Paso 1: Local vs UTC ---');
console.log('Local:', utcDate.toString());
console.log('UTC:', utcDate.toUTCString());

console.log('');
console.log('--- Paso 2: Zonas específicas ---');
const bogota = utcDate.toLocaleString('es-CO', { timeZone: 'America/Bogota' });
const madrid = utcDate.toLocaleString('es-ES', { timeZone: 'Europe/Madrid' });
console.log('Bogotá:', bogota);
console.log('Madrid:', madrid);

console.log('');
console.log('=== Fin ===');
