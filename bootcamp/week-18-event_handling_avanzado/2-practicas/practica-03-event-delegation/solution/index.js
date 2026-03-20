// PRÁCTICA 03: Event Delegation (SOLUCIÓN)

const actions = {
  edit: id => `Editar elemento ${id}`,
  delete: id => `Eliminar elemento ${id}`
};

console.log('--- Paso 1: Evento delegado ---');
const simulatedEvent = { target: { dataset: { action: 'edit', id: '42' } } };

console.log('');
console.log('--- Paso 2: Resolver acción ---');
const { action, id } = simulatedEvent.target.dataset;
const result = actions[action]?.(id) ?? 'Acción no soportada';
console.log(result);

console.log('');
console.log('=== Fin ===');
