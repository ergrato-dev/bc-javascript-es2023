// PRÁCTICA 04: Custom Events (SOLUCIÓN)

const handlers = new Map();

console.log('--- Paso 1: Registrar listener ---');
handlers.set('notification:created', payload => {
  console.log(`Notificación creada: ${payload.title}`);
});

console.log('');
console.log('--- Paso 2: Emitir evento ---');
const payload = { id: 1, title: 'Nueva alerta', type: 'info' };
handlers.get('notification:created')?.(payload);

console.log('');
console.log('=== Fin ===');
