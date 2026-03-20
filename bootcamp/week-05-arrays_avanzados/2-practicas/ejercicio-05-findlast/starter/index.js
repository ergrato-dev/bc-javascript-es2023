// ============================================
// EJERCICIO 05: findLast() y findLastIndex() - ES2023
// ============================================
// Aprende a buscar desde el final del array con estos nuevos métodos.

console.log('='.repeat(60));
console.log('EJERCICIO 05: findLast() y findLastIndex() - ES2023');
console.log('='.repeat(60));
console.log('');

// ============================================
// DATOS DE EJEMPLO
// ============================================

const numbers = [5, 12, 8, 130, 44, 8, 22];

const activityLog = [
  { action: 'login', user: 'alice', timestamp: '2024-01-15T08:00:00' },
  { action: 'view_page', user: 'alice', timestamp: '2024-01-15T08:05:00' },
  { action: 'edit', user: 'alice', timestamp: '2024-01-15T08:10:00' },
  { action: 'login', user: 'bob', timestamp: '2024-01-15T08:12:00' },
  { action: 'save', user: 'alice', timestamp: '2024-01-15T08:15:00' },
  { action: 'view_page', user: 'bob', timestamp: '2024-01-15T08:20:00' },
  { action: 'logout', user: 'alice', timestamp: '2024-01-15T08:30:00' },
];

const versions = [
  { version: '1.0.0', stable: true, date: '2023-01-01' },
  { version: '1.1.0', stable: true, date: '2023-03-15' },
  { version: '1.2.0-beta', stable: false, date: '2023-05-01' },
  { version: '2.0.0', stable: true, date: '2023-06-01' },
  { version: '2.1.0-alpha', stable: false, date: '2023-07-15' },
  { version: '2.1.0-beta', stable: false, date: '2023-08-01' },
];

const orders = [
  { id: 1, status: 'delivered', customer: 'Alice', total: 99.99 },
  { id: 2, status: 'pending', customer: 'Bob', total: 149.99 },
  { id: 3, status: 'shipped', customer: 'Alice', total: 79.99 },
  { id: 4, status: 'delivered', customer: 'Alice', total: 199.99 },
  { id: 5, status: 'pending', customer: 'Carol', total: 59.99 },
  { id: 6, status: 'delivered', customer: 'Bob', total: 299.99 },
];

const notifications = [
  { id: 1, read: true, message: 'Welcome to our app!' },
  { id: 2, read: false, message: 'You have a new follower' },
  { id: 3, read: false, message: 'Your post was liked' },
  { id: 4, read: true, message: 'Weekly digest available' },
  { id: 5, read: false, message: 'New comment on your post' },
];

// ============================================
// PASO 1: findLast() Básico
// ============================================
console.log('--- Paso 1: findLast() Básico ---');

// findLast() encuentra el ÚLTIMO elemento que cumple la condición
// Descomenta las siguientes líneas:

// const lastGreater10 = numbers.findLast(n => n > 10);
// console.log('Números:', numbers);
// console.log('Último mayor que 10:', lastGreater10);

// const lastEven = numbers.findLast(n => n % 2 === 0);
// console.log('Último par:', lastEven);

// const lastLess5 = numbers.findLast(n => n < 5);
// console.log('Último menor que 5:', lastLess5); // undefined

console.log('');

// ============================================
// PASO 2: findLast() vs find()
// ============================================
console.log('--- Paso 2: findLast() vs find() ---');

// Compara el comportamiento de ambos métodos
// Descomenta las siguientes líneas:

// const numbersWithDuplicates = [1, 2, 8, 4, 5, 8, 7];
// console.log('Array:', numbersWithDuplicates);

// // find() - busca desde el INICIO, retorna el PRIMERO
// const firstEight = numbersWithDuplicates.find(n => n === 8);
// console.log('find(n => n === 8):', firstEight, '(primer 8)');

// // findLast() - busca desde el FINAL, retorna el ÚLTIMO
// const lastEight = numbersWithDuplicates.findLast(n => n === 8);
// console.log('findLast(n => n === 8):', lastEight, '(último 8)');

// // Aunque el valor es igual, la posición es diferente
// const firstGreater3 = numbersWithDuplicates.find(n => n > 3);
// const lastGreater3 = numbersWithDuplicates.findLast(n => n > 3);
// console.log('find(n => n > 3):', firstGreater3, '(primer > 3)');
// console.log('findLast(n => n > 3):', lastGreater3, '(último > 3)');

console.log('');

// ============================================
// PASO 3: findLastIndex() Básico
// ============================================
console.log('--- Paso 3: findLastIndex() Básico ---');

// findLastIndex() retorna el ÍNDICE del último elemento que cumple
// Descomenta las siguientes líneas:

// console.log('Números:', numbers);

// const lastIndexOf8 = numbers.findLastIndex(n => n === 8);
// console.log('findLastIndex(n => n === 8):', lastIndexOf8);

// const firstIndexOf8 = numbers.findIndex(n => n === 8);
// console.log('findIndex(n => n === 8):', firstIndexOf8);

// // -1 si no encuentra
// const notFoundIndex = numbers.findLastIndex(n => n > 200);
// console.log('findLastIndex(n => n > 200):', notFoundIndex);

// // Comparación completa
// console.log('');
// console.log('Comparación:');
// console.log('  findIndex(n => n === 8):', firstIndexOf8, '→ numbers[' + firstIndexOf8 + '] =', numbers[firstIndexOf8]);
// console.log('  findLastIndex(n => n === 8):', lastIndexOf8, '→ numbers[' + lastIndexOf8 + '] =', numbers[lastIndexOf8]);

console.log('');

// ============================================
// PASO 4: Historial de Actividad
// ============================================
console.log('--- Paso 4: Historial de Actividad ---');

// Caso de uso real: encontrar la última actividad de cierto tipo
// Descomenta las siguientes líneas:

// console.log('Log de actividad:');
// activityLog.forEach((log, i) => {
//   console.log(`  [${i}] ${log.action} - ${log.user} @ ${log.timestamp.slice(11, 19)}`);
// });
// console.log('');

// // Último login de cualquier usuario
// const lastLogin = activityLog.findLast(log => log.action === 'login');
// console.log('Último login:', lastLogin);

// // Última actividad de Alice
// const lastAliceActivity = activityLog.findLast(log => log.user === 'alice');
// console.log('Última actividad de Alice:', lastAliceActivity);

// // Índice de la última edición
// const lastEditIndex = activityLog.findLastIndex(log => log.action === 'edit');
// console.log('Índice de última edición:', lastEditIndex);

console.log('');

// ============================================
// PASO 5: Sistema de Versiones
// ============================================
console.log('--- Paso 5: Sistema de Versiones ---');

// Encontrar la última versión estable y la última pre-release
// Descomenta las siguientes líneas:

// console.log('Versiones disponibles:');
// versions.forEach((v, i) => {
//   const status = v.stable ? '✅ stable' : '🧪 pre-release';
//   console.log(`  [${i}] ${v.version} - ${status} (${v.date})`);
// });
// console.log('');

// // Última versión estable
// const latestStable = versions.findLast(v => v.stable);
// console.log('Última versión estable:', latestStable?.version);

// // Última versión pre-release
// const latestPreRelease = versions.findLast(v => !v.stable);
// console.log('Última pre-release:', latestPreRelease?.version);

// // Índice de la última estable (útil para saber cuántas pre-releases después)
// const lastStableIndex = versions.findLastIndex(v => v.stable);
// const preReleasesAfterStable = versions.length - 1 - lastStableIndex;
// console.log(`Pre-releases después de la última estable: ${preReleasesAfterStable}`);

console.log('');

// ============================================
// PASO 6: Procesamiento de Pedidos
// ============================================
console.log('--- Paso 6: Procesamiento de Pedidos ---');

// Filtrar pedidos con condiciones múltiples
// Descomenta las siguientes líneas:

// console.log('Pedidos:');
// orders.forEach((o, i) => {
//   console.log(`  [${i}] #${o.id} - ${o.customer} - ${o.status} - $${o.total}`);
// });
// console.log('');

// // Último pedido entregado de Alice
// const aliceLastDelivered = orders.findLast(
//   order => order.customer === 'Alice' && order.status === 'delivered'
// );
// console.log('Último pedido entregado de Alice:', aliceLastDelivered);

// // Último pedido pendiente (de cualquier cliente)
// const lastPending = orders.findLast(order => order.status === 'pending');
// console.log('Último pedido pendiente:', lastPending);

// // Índice del último pedido de valor alto (> $100)
// const lastHighValueIndex = orders.findLastIndex(order => order.total > 100);
// console.log('Índice del último pedido > $100:', lastHighValueIndex);
// if (lastHighValueIndex !== -1) {
//   console.log('  Pedido:', orders[lastHighValueIndex]);
// }

console.log('');

// ============================================
// PASO 7: Combinando con Otros Métodos ES2023
// ============================================
console.log('--- Paso 7: Combinando con Otros Métodos ES2023 ---');

// Usar findLastIndex() con with() y toSpliced() para operaciones inmutables
// Descomenta las siguientes líneas:

// console.log('Notificaciones originales:');
// notifications.forEach((n, i) => {
//   const status = n.read ? '✓' : '○';
//   console.log(`  [${i}] ${status} ${n.message}`);
// });
// console.log('');

// // Marcar la última notificación no leída como leída (inmutable)
// const lastUnreadIndex = notifications.findLastIndex(n => !n.read);
// console.log('Índice de última no leída:', lastUnreadIndex);

// if (lastUnreadIndex !== -1) {
//   // with() - actualizar un elemento sin mutar (ES2023)
//   const updatedNotifications = notifications.with(lastUnreadIndex, {
//     ...notifications[lastUnreadIndex],
//     read: true
//   });

//   console.log('');
//   console.log('Después de marcar como leída (con with):');
//   updatedNotifications.forEach((n, i) => {
//     const status = n.read ? '✓' : '○';
//     console.log(`  [${i}] ${status} ${n.message}`);
//   });

//   // Verificar que el original no cambió
//   console.log('');
//   console.log('Original sin modificar:', notifications[lastUnreadIndex].read ? '✓ leída' : '○ no leída');
// }

// // Eliminar la última no leída (inmutable con toSpliced)
// console.log('');
// const lastUnreadIndex2 = notifications.findLastIndex(n => !n.read);
// if (lastUnreadIndex2 !== -1) {
//   const withoutLastUnread = notifications.toSpliced(lastUnreadIndex2, 1);
//   console.log('Después de eliminar última no leída (con toSpliced):');
//   console.log('  Original tiene', notifications.length, 'elementos');
//   console.log('  Nueva lista tiene', withoutLastUnread.length, 'elementos');
// }

console.log('');

// ============================================
// RESUMEN
// ============================================
console.log('='.repeat(60));
console.log('RESUMEN');
console.log('='.repeat(60));
console.log('');
console.log(
  'findLast(callback)      → Último elemento que cumple, o undefined'
);
console.log('findLastIndex(callback) → Índice del último que cumple, o -1');
console.log('');
console.log('Diferencias clave:');
console.log('  find()          busca desde el INICIO');
console.log('  findLast()      busca desde el FINAL');
console.log('  findIndex()     índice desde el INICIO');
console.log('  findLastIndex() índice desde el FINAL');
console.log('');
console.log('✅ Ejercicio completado');
