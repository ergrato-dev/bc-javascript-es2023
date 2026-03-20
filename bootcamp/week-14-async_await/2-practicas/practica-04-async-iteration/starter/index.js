// ============================================
// PRÁCTICA 04: Iteración Asíncrona
// ============================================

// Helper para simular latencia
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// Crear promesa con delay
const createAsyncValue = async (value, ms) => {
  await delay(ms);
  return value;
};

// ============================================
// PASO 1: For Await Básico
// ============================================
console.log('--- Paso 1: For Await Básico ---');

// Iterar sobre un array de promesas de forma secuencial
// Descomenta las siguientes líneas:

// async function forAwaitBasic() {
//   // Array de promesas con diferentes delays
//   const promises = [
//     createAsyncValue('Primero', 100),
//     createAsyncValue('Segundo', 50),
//     createAsyncValue('Tercero', 150)
//   ];
//
//   console.log('Iniciando iteración...');
//
//   // for await...of espera cada promesa en orden
//   for await (const value of promises) {
//     console.log('Recibido:', value);
//   }
//
//   console.log('Iteración completada');
// }

// forAwaitBasic();

console.log('');

// ============================================
// PASO 2: Generador Asíncrono Simple
// ============================================
console.log('--- Paso 2: Generador Asíncrono Simple ---');

// async function* crea un generador asíncrono
// Descomenta las siguientes líneas:

// async function* asyncCounter(max) {
//   for (let i = 1; i <= max; i++) {
//     // Simular operación asíncrona antes de yield
//     await delay(100);
//     yield i;
//   }
// }

// async function useAsyncGenerator() {
//   console.log('Contando asíncronamente...');
//
//   for await (const num of asyncCounter(5)) {
//     console.log('Número:', num);
//   }
//
//   console.log('Conteo completado');
// }

// useAsyncGenerator();

console.log('');

// ============================================
// PASO 3: Paginación con Generadores
// ============================================
console.log('--- Paso 3: Paginación con Generadores ---');

// Simular API paginada
// Descomenta las siguientes líneas:

// async function* paginator(totalPages) {
//   for (let page = 1; page <= totalPages; page++) {
//     // Simular fetch de cada página
//     await delay(150);
//
//     const items = [
//       { id: (page - 1) * 2 + 1, name: `Item ${(page - 1) * 2 + 1}` },
//       { id: (page - 1) * 2 + 2, name: `Item ${(page - 1) * 2 + 2}` }
//     ];
//
//     console.log(`Página ${page} cargada`);
//     yield { page, items, hasMore: page < totalPages };
//   }
// }

// async function loadAllPages() {
//   const allItems = [];
//
//   for await (const { page, items, hasMore } of paginator(3)) {
//     allItems.push(...items);
//     console.log(`Procesando página ${page}, items acumulados: ${allItems.length}`);
//   }
//
//   console.log('Total items:', allItems.length);
// }

// loadAllPages();

console.log('');

// ============================================
// PASO 4: Yield Delegado con Async
// ============================================
console.log('--- Paso 4: Yield Delegado con Async ---');

// yield* también funciona con generadores asíncronos
// Descomenta las siguientes líneas:

// async function* fetchCategory(category) {
//   await delay(100);
//   yield `${category}: Item 1`;
//   await delay(50);
//   yield `${category}: Item 2`;
// }

// async function* fetchAllCategories() {
//   console.log('Cargando Electrónica...');
//   yield* fetchCategory('Electrónica');
//
//   console.log('Cargando Ropa...');
//   yield* fetchCategory('Ropa');
//
//   console.log('Cargando Hogar...');
//   yield* fetchCategory('Hogar');
// }

// async function useDelegatedGenerator() {
//   for await (const item of fetchAllCategories()) {
//     console.log('Item:', item);
//   }
// }

// useDelegatedGenerator();

console.log('');

// ============================================
// PASO 5: Control de Flujo
// ============================================
console.log('--- Paso 5: Control de Flujo ---');

// Puedes usar break y return para controlar la iteración
// Descomenta las siguientes líneas:

// async function* infiniteStream() {
//   let id = 0;
//   while (true) {
//     await delay(100);
//     id++;
//     console.log(`Generando evento ${id}`);
//     yield { id, timestamp: Date.now() };
//   }
// }

// async function consumeWithLimit() {
//   const events = [];
//
//   for await (const event of infiniteStream()) {
//     events.push(event);
//
//     // Detener después de 5 eventos
//     if (events.length >= 5) {
//       console.log('Límite alcanzado, deteniendo...');
//       break;
//     }
//   }
//
//   console.log('Eventos capturados:', events.length);
// }

// consumeWithLimit();

console.log('');
console.log('=== Fin de la práctica ===');
