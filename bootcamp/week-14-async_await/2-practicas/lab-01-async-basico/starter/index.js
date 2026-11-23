/**
 * 📘 Lab 01: Funciones async y await
 * Este es un lab guiado. Descomenta el código de cada paso y ejecuta.
 *
 * Ejecuta desde la carpeta del lab: node starter/index.js
 */

// Espera `ms` milisegundos. Es la misma función de la semana 13.
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Simula una consulta lenta: devuelve una promesa que se cumple con `value` pasados `ms`.
const slowValue = (value, ms) => wait(ms).then(() => value);

// ============================================
// PASO 1: Una función async devuelve una promesa
// ============================================
console.log('--- Paso 1: async devuelve una promesa ---');

// Descomenta las siguientes líneas:
// async function greet() {
//   return 'Bienvenido al planetario';
// }
//
// const result = greet();
// console.log('greet() devuelve:', result);
// console.log('¿Es una Promise?', result instanceof Promise);
// console.log('Valor:', await result);

console.log('');

// ============================================
// PASO 2: Cuatro formas de escribir una función async
// ============================================
console.log('--- Paso 2: Sintaxis ---');

// Descomenta las siguientes líneas:
// async function declaration() {
//   return 'declaración';
// }
// const expression = async function () {
//   return 'expresión';
// };
// const arrow = async () => 'arrow function';
// const planetarium = {
//   async open() {
//     return 'método de objeto';
//   },
// };
//
// console.log(await declaration());
// console.log(await expression());
// console.log(await arrow());
// console.log(await planetarium.open());

console.log('');

// ============================================
// PASO 3: await espera a que la promesa termine
// ============================================
console.log('--- Paso 3: await ---');

// Descomenta las siguientes líneas:
// const loadSession = async () => {
//   console.log('Pidiendo la sesión...');
//   const session = await slowValue('Viaje a Saturno', 100);
//   console.log('Sesión recibida:', session);
//   const seats = await slowValue(42, 100);
//   console.log('Butacas libres:', seats);
//   return `${session} (${seats} butacas)`;
// };
//
// console.log('Resultado:', await loadSession());

console.log('');

// ============================================
// PASO 4: De .then() a async/await
// ============================================
console.log('--- Paso 4: De .then() a await ---');

// Descomenta las siguientes líneas:
// const getShow = (id) => slowValue({ id, title: 'Nebulosas' }, 50);
// const getRoom = (show) => slowValue({ ...show, room: 'Cúpula A' }, 50);
//
// // Con .then(), como en la semana 13:
// const withThen = (id) => getShow(id).then(getRoom).then((show) => `${show.title} en ${show.room}`);
//
// // Con async/await: el mismo orden, escrito de arriba abajo.
// const withAwait = async (id) => {
//   const show = await getShow(id);
//   const withRoom = await getRoom(show);
//   return `${withRoom.title} en ${withRoom.room}`;
// };
//
// console.log('then: ', await withThen(7));
// console.log('await:', await withAwait(7));

console.log('');

// ============================================
// PASO 5: El código de fuera no espera
// ============================================
console.log('--- Paso 5: Orden de ejecución ---');

// Descomenta las siguientes líneas:
// const task = async () => {
//   console.log('2. Empieza task');
//   await wait(50);
//   console.log('4. task sigue tras el await');
// };
//
// console.log('1. Antes de llamar a task');
// const pending = task();
// console.log('3. Después de llamar a task (no ha esperado)');
// await pending;
// console.log('5. Ya terminó task');

console.log('');

// ============================================
// PASO 6: await con valores que no son promesas
// ============================================
console.log('--- Paso 6: await con cualquier valor ---');

// Descomenta las siguientes líneas:
// console.log('Número:', await 42);
// console.log('Texto:', await 'sin promesa');
// console.log('Promise.resolve:', await Promise.resolve('ya resuelta'));
//
// // async siempre envuelve el valor: devolver una promesa no da una promesa de promesa.
// const nested = async () => slowValue('valor interior', 20);
// console.log('Promesa devuelta:', await nested());

console.log('');

// ============================================
// PASO 7: Olvidar el await
// ============================================
console.log('--- Paso 7: Olvidar el await ---');

// Descomenta las siguientes líneas:
// const getVisitors = async () => slowValue(['Ana', 'Luis', 'Marta'], 30);
//
// const withoutAwait = getVisitors();
// console.log('Sin await:', withoutAwait);
// console.log('¿length?', withoutAwait.length);
//
// const withAwaitList = await getVisitors();
// console.log('Con await:', withAwaitList);
// console.log('¿length?', withAwaitList.length);
// await wait(50);

console.log('');
console.log('✅ Lab completado.');
