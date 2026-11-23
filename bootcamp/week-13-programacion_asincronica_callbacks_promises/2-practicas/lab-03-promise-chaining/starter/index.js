/**
 * 📘 Lab 03: Encadenar promesas
 * Este es un lab guiado. Descomenta el código de cada paso y ejecuta.
 *
 * Ejecuta desde la carpeta del lab: node starter/index.js
 */

// Espera `ms` milisegundos y cumple la promesa con `value`.
const wait = (ms, value) => new Promise((resolve) => setTimeout(() => resolve(value), ms));

// ============================================
// PASO 1: Cadena con valores
// ============================================
console.log('--- Paso 1: Cadena simple ---');

// Descomenta las siguientes líneas:
// await Promise.resolve(5)
//   .then((value) => {
//     console.log('Valor inicial:', value);
//     return value * 2;
//   })
//   .then((value) => {
//     console.log('Después de x2:', value);
//     return value + 10;
//   })
//   .then((value) => {
//     console.log('Después de +10:', value);
//     return value / 2;
//   })
//   .then((finalValue) => console.log('Valor final:', finalValue));

console.log('');

// ============================================
// PASO 2: Cadena con promesas
// ============================================
console.log('--- Paso 2: Cadena con promesas ---');

// Descomenta las siguientes líneas:
// const getVisitor = (visitorId) => wait(100, { id: visitorId, name: 'Ana García' });
// const getBookings = (visitorId) => wait(100, [
//   { id: 7, show: 'Viaje a Marte', visitorId },
//   { id: 9, show: 'Cielo de invierno', visitorId },
// ]);
// const getSeats = (bookingId) => wait(100, ['F4', 'F5']);
//
// await getVisitor(123)
//   .then((visitor) => {
//     console.log('1. Visitante:', visitor.name);
//     return getBookings(visitor.id);
//   })
//   .then((bookings) => {
//     console.log('2. Reservas:', bookings.length);
//     return getSeats(bookings[0].id);
//   })
//   .then((seats) => console.log('3. Butacas de la primera reserva:', seats.join(', ')));

console.log('');

// ============================================
// PASO 3: Un error salta al .catch()
// ============================================
console.log('--- Paso 3: Errores en la cadena ---');

// Descomenta las siguientes líneas:
// const step = (name, shouldFail) => new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (shouldFail) return reject(new Error(`${name} falló`));
//     console.log(`${name}: OK`);
//     resolve(name);
//   }, 50);
// });
//
// const runSteps = (failAtStep2) => step('Paso A', false)
//   .then(() => step('Paso B', failAtStep2))
//   .then(() => step('Paso C', false))
//   .then(() => console.log('✅ Los tres pasos terminaron'))
//   .catch((error) => console.log('❌ Error en la cadena:', error.message));
//
// await runSteps(false);
// await runSteps(true);

console.log('');

// ============================================
// PASO 4: Acumular datos por la cadena
// ============================================
console.log('--- Paso 4: Acumular datos ---');

// Descomenta las siguientes líneas:
// const authenticate = (credentials) => wait(50, { userId: 123, token: 'abc123' });
// const fetchProfile = (session) => wait(50, { ...session, profile: { name: 'Ana' } });
// const fetchPreferences = (data) => wait(50, { ...data, preferences: { theme: 'dark' } });
//
// await authenticate({ user: 'ana', password: '1234' })
//   .then((session) => {
//     console.log('Token:', session.token);
//     return fetchProfile(session);
//   })
//   .then(fetchPreferences)
//   .then((allData) => console.log('Datos completos:', allData));

console.log('');

// ============================================
// PASO 5: El error típico: olvidar el return
// ============================================
console.log('--- Paso 5: Olvidar el return ---');

// Descomenta las siguientes líneas:
// await wait(10, 'sesión')
//   .then((session) => {
//     wait(100, 'perfil'); // sin return: el siguiente then no espera
//   })
//   .then((profile) => console.log('Sin return llega:', profile));
//
// await wait(10, 'sesión')
//   .then((session) => {
//     return wait(100, 'perfil');
//   })
//   .then((profile) => console.log('Con return llega:', profile));

console.log('');

// ============================================
// PASO 6: Recuperarse de un error
// ============================================
console.log('--- Paso 6: Recuperarse de un error ---');

// Descomenta las siguientes líneas:
// const fetchFromServer = () => new Promise((_, reject) => {
//   setTimeout(() => reject(new Error('Servidor caído')), 50);
// });
// const fetchFromCache = () => wait(50, 'Cartelera guardada en caché');
//
// await fetchFromServer()
//   .catch((error) => {
//     console.log('⚠️', error.message, '→ uso la caché');
//     return fetchFromCache();
//   })
//   .then((result) => console.log('Resultado:', result))
//   .catch((error) => console.log('Error irrecuperable:', error.message));

console.log('');

// ============================================
// PASO 7: Callbacks contra promesas
// ============================================
console.log('--- Paso 7: Callbacks contra promesas ---');

// Descomenta las siguientes líneas:
// const getVisitorCb = (id, callback) => setTimeout(() => callback({ id }), 30);
// const getBookingsCb = (id, callback) => setTimeout(() => callback([{ id: 7 }]), 30);
// const getSeatsCb = (id, callback) => setTimeout(() => callback(['F4', 'F5']), 30);
//
// getVisitorCb(123, (visitor) => {
//   getBookingsCb(visitor.id, (bookings) => {
//     getSeatsCb(bookings[0].id, (seats) => {
//       console.log('Con callbacks:', seats);
//     });
//   });
// });
// await wait(120);
//
// const getVisitorPr = (id) => wait(30, { id });
// const getBookingsPr = (id) => wait(30, [{ id: 7 }]);
// const getSeatsPr = (id) => wait(30, ['F4', 'F5']);
//
// await getVisitorPr(123)
//   .then((visitor) => getBookingsPr(visitor.id))
//   .then((bookings) => getSeatsPr(bookings[0].id))
//   .then((seats) => console.log('Con promesas:', seats));

console.log('');
console.log('✅ Lab completado.');
