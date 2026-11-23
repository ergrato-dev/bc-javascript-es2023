/**
 * 📘 Lab 02: La copia local
 * Este es un lab guiado. Descomenta el código de cada paso y ejecuta:
 *
 *   node starter/index.js
 *
 * Node no tiene localStorage: `createStorage` crea uno de mentira con los mismos métodos
 * (getItem, setItem, removeItem) y un límite de tamaño. La hora tampoco es la real: `NOW` es
 * siempre el mismo momento, para que tu salida coincida con la del README.
 * Los pasos van en orden; cada uno usa su propio almacén.
 */

const NOW = Date.UTC(2026, 0, 15, 10, 0); // 15 de enero de 2026, 10:00 UTC
const MINUTE = 60_000;

// Un localStorage de mentira. `limit` es el máximo de caracteres (claves más valores):
// el de los navegadores ronda los 5 millones. Al pasarse, setItem lanza un QuotaExceededError.
const createStorage = (limit = 5_000_000) => {
  const data = new Map();
  const used = () => [...data].reduce((sum, [key, value]) => sum + key.length + value.length, 0);
  return {
    getItem: (key) => data.get(key) ?? null,
    setItem: (key, value) => {
      const text = String(value);
      if (used() - (data.get(key)?.length ?? 0) + text.length > limit) {
        throw new DOMException(`No caben ${text.length} caracteres más`, 'QuotaExceededError');
      }
      data.set(key, text);
    },
    removeItem: (key) => data.delete(key),
  };
};

const PAGE = [
  { id: 1, name: 'Sirio', type: 'Estrella' },
  { id: 2, name: 'Vega', type: 'Estrella' },
  { id: 3, name: 'Nebulosa de Orión', type: 'Nebulosa' },
];

// ============================================
// PASO 1: Lo que JSON no devuelve igual
// ============================================
console.log('--- Paso 1: Ida y vuelta por JSON ---');

// Descomenta las siguientes líneas:
// const storage1 = createStorage();
// const original = { savedAt: new Date(NOW), tags: new Map([['favorita', 2]]), items: PAGE };
// storage1.setItem('copia', JSON.stringify(original));
// const back = JSON.parse(storage1.getItem('copia'));
// console.log('  savedAt:', typeof back.savedAt, back.savedAt);
// console.log('  tags:', back.tags);
// console.log('  items iguales:', JSON.stringify(back.items) === JSON.stringify(PAGE));
// const better = { savedAt: NOW, tags: [...original.tags], items: PAGE };
// const back2 = JSON.parse(JSON.stringify(better));
// console.log('  savedAt como número:', back2.savedAt, '→', new Date(back2.savedAt).toISOString());
// console.log('  tags como array:', new Map(back2.tags).get('favorita'));

// ============================================
// PASO 2: Cuánto ocupa lo que guardas
// ============================================
console.log('\n--- Paso 2: Una página o el catálogo entero ---');

// Descomenta las siguientes líneas:
// const catalog = Array.from({ length: 2000 }, (_, i) => ({ id: i + 1, name: `Nebulosa número ${i + 1}`, type: 'Nebulosa' }));
// for (const [label, items] of [['una página (3 fichas)', PAGE], ['el catálogo (2000 fichas)', catalog]]) {
//   const json = JSON.stringify({ savedAt: NOW, items });
//   console.log(`  ${label}: ${json.length} caracteres, ${new Blob([json]).size} bytes en UTF-8`);
// }
// console.log('  «Orión»:', 'Orión'.length, 'caracteres,', new Blob(['Orión']).size, 'bytes');

// ============================================
// PASO 3: Primero la copia, después la red
// ============================================
console.log('\n--- Paso 3: Enseñar algo enseguida ---');

// Descomenta las siguientes líneas:
// const relative = new Intl.RelativeTimeFormat('es', { numeric: 'auto' });
// const ago = (ms) => relative.format(-Math.round(ms / MINUTE), 'minute');
// const open = async (storage, network) => {
//   const saved = JSON.parse(storage.getItem('copia'));
//   if (saved) console.log(`  pinto la copia guardada ${ago(NOW - saved.savedAt)}: ${saved.items.length} fichas`);
//   else console.log('  no hay copia: pinto «Cargando…»');
//   try {
//     const items = await network();
//     console.log(`  pinto la red: ${items.length} fichas, y guardo la copia`);
//     storage.setItem('copia', JSON.stringify({ savedAt: NOW, items }));
//   } catch (error) {
//     console.log(`  la red falla (${error.message}): ${saved ? 'la copia se queda en pantalla' : 'solo puedo enseñar el error'}`);
//   }
// };
// const storage3 = createStorage();
// const online = async () => [...PAGE, { id: 4, name: 'Pléyades', type: 'Cúmulo' }];
// await open(storage3, online);                            // primera visita
// storage3.setItem('copia', JSON.stringify({ savedAt: NOW - 5 * MINUTE, items: PAGE }));
// await open(storage3, online);                            // vuelve 5 minutos después
// console.log('  otros textos:', ago(0), '·', ago(MINUTE), '·', ago(90 * MINUTE));

// ============================================
// PASO 4: Sin red
// ============================================
console.log('\n--- Paso 4: La red falla ---');

// Descomenta las siguientes líneas:
// const offline = async () => { throw new TypeError('fetch failed'); };
// const storage4 = createStorage();
// await open(storage4, offline);                           // sin copia
// storage4.setItem('copia', JSON.stringify({ savedAt: NOW - 3 * MINUTE, items: PAGE }));
// await open(storage4, offline);                           // con copia

// ============================================
// PASO 5: Cuando guardar falla
// ============================================
console.log('\n--- Paso 5: Cuota llena y almacenamiento bloqueado ---');

// Descomenta las siguientes líneas:
// const small = createStorage(200);
// const save = (storage, items) => {
//   try {
//     storage.setItem('copia', JSON.stringify({ savedAt: NOW, items }));
//     return 'guardada';
//   } catch (error) {
//     return `no se guarda (${error.name}), la página sigue`;
//   }
// };
// console.log('  3 fichas:', save(small, PAGE));
// console.log('  2000 fichas:', save(small, catalog));
// console.log('  sin almacén:', save(undefined, PAGE));

// ============================================
// PASO 6: Una copia de otra versión
// ============================================
console.log('\n--- Paso 6: Los datos cambiaron de forma ---');

// Descomenta las siguientes líneas:
// const storage6 = createStorage();
// // Una versión anterior de la página guardó las fichas con `nombre` en lugar de `name`:
// storage6.setItem('copia', JSON.stringify({ savedAt: NOW, items: [{ id: 1, nombre: 'Sirio' }] }));
// const old = JSON.parse(storage6.getItem('copia'));
// try {
//   console.log('  sin comprobar:', old.items.map((item) => item.name.toUpperCase()));
// } catch (error) {
//   console.log(`  sin comprobar: ${error.name}: ${error.message}`);
// }
// const VERSION = 2;
// const read = (storage) => {
//   const saved = JSON.parse(storage.getItem('copia'));
//   return saved?.version === VERSION ? saved : null;
// };
// console.log('  con versión:', read(storage6));
// storage6.setItem('copia', JSON.stringify({ version: VERSION, savedAt: NOW, items: PAGE }));
// console.log('  con versión 2:', read(storage6).items.length, 'fichas');

console.log('\n✅ Lab completado.');
