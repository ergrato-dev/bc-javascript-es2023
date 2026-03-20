// PRÁCTICA 04: Manejo de cuota y fallback (SOLUCIÓN)

console.log('--- Paso 1: Simular guardado ---');
const save = payload => {
  if (payload.length > 20) throw new Error('QuotaExceededError');
  return true;
};

console.log('');
console.log('--- Paso 2: Manejar error ---');
const saveSafely = payload => {
  try {
    save(payload);
    return 'persisted';
  } catch {
    return 'memory-fallback';
  }
};

console.log('');
console.log('--- Paso 3: Probar fallback ---');
console.log(saveSafely('x'.repeat(50)));

console.log('');
console.log('=== Fin ===');
