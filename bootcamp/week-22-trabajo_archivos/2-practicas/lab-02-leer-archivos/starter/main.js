/**
 * 📘 Lab 02: Leer archivos del usuario
 * Este es un lab guiado. Descomenta el código de cada paso, guarda y recarga la página.
 *
 * Abre starter/index.html en el navegador y mira la consola de las DevTools (F12).
 * Después de recargar, pulsa «Elegir archivos» y elige a la vez los cinco archivos de
 * starter/muestras/ (Ctrl+A o Cmd+A dentro del diálogo).
 * Los pasos van en orden: cada uno usa lo que definen los anteriores.
 */

const input = document.querySelector('#files');
const list = document.querySelector('#summary');
const MAX_BYTES = 1024;
const ACCEPTED = ['.csv', '.json'];

// Cada paso añade a steps una función que recibe los archivos elegidos. Al elegir, se ejecutan
// en orden, con los archivos ordenados por nombre para que la salida no dependa del diálogo.
const steps = [];
input.addEventListener('change', async () => {
  const files = [...input.files].toSorted((a, b) => a.name.localeCompare(b.name));
  for (const step of steps) await step(files);
});

// ============================================
// PASO 1: input.files
// ============================================
console.log('--- Paso 1: input.files ---');

// Descomenta las siguientes líneas:
// console.log('  accept:', input.accept, '· multiple:', input.multiple);
// console.log('  antes de elegir:', input.files.length, 'archivos en un', input.files.constructor.name);
// steps.push((files) => {
//   console.log('--- Paso 1: Los archivos elegidos ---');
//   for (const file of files) {
//     console.log(`  ${file.name.padEnd(20)} ${String(file.size).padStart(5)} B  ${file.type || '(sin type)'}`);
//   }
// });

// ============================================
// PASO 2: Validar antes de leer
// ============================================

// Descomenta las siguientes líneas:
// const extensionOf = (name) => name.includes('.') ? name.slice(name.lastIndexOf('.')).toLowerCase() : '';
// const checkFile = (file) => {
//   const extension = extensionOf(file.name);
//   if (!ACCEPTED.includes(extension)) return `la extensión ${extension || '(ninguna)'} no se admite`;
//   if (file.size === 0) return 'está vacío';
//   if (file.size > MAX_BYTES) return `pesa ${file.size} B y el máximo es ${MAX_BYTES} B`;
//   return null;
// };
// steps.push((files) => {
//   console.log('--- Paso 2: Validar ---');
//   for (const file of files) {
//     const error = checkFile(file);
//     console.log(`  ${error ? '✘' : '✔'} ${file.name}${error ? `: ${error}` : ''}`);
//   }
// });

// ============================================
// PASO 3: Leer el texto con file.text()
// ============================================

// Descomenta las siguientes líneas:
// steps.push(async (files) => {
//   console.log('--- Paso 3: file.text() ---');
//   for (const file of files.filter((file) => checkFile(file) === null)) {
//     const text = await file.text();
//     const lines = text.trimEnd().split('\n');
//     console.log(`  ${file.name}: ${lines.length} líneas · primera: ${lines[0]}`);
//   }
// });

// ============================================
// PASO 4: FileReader y sus eventos
// ============================================

// Descomenta las siguientes líneas:
// const readWithReader = (file) => new Promise((resolve, reject) => {
//   const reader = new FileReader();
//   const events = [];
//   for (const type of ['loadstart', 'progress', 'load', 'loadend']) {
//     reader.addEventListener(type, (event) => events.push(type === 'progress' ? `progress ${event.loaded}/${event.total}` : type));
//   }
//   reader.addEventListener('loadend', () => (reader.error ? reject(reader.error) : resolve({ text: reader.result, events })));
//   reader.readAsText(file);
// });
// steps.push(async (files) => {
//   console.log('--- Paso 4: FileReader ---');
//   const csv = files.find((file) => file.name === 'sesiones.csv');
//   if (!csv) return console.log('  Elige también sesiones.csv');
//   const { text, events } = await readWithReader(csv);
//   console.log('  eventos:', events.join(' → '));
//   console.log('  ¿mismo texto que file.text()?', text === await csv.text());
// });

// ============================================
// PASO 5: Convertir el texto en datos
// ============================================

// Descomenta las siguientes líneas:
// const parse = (file, text) => {
//   if (extensionOf(file.name) === '.json') return JSON.parse(text);
//   return text.trimEnd().split('\n').slice(1).map((line) => line.split(','));
// };
// steps.push(async (files) => {
//   console.log('--- Paso 5: Parsear ---');
//   for (const file of files.filter((file) => checkFile(file) === null)) {
//     try {
//       const data = parse(file, await file.text());
//       console.log(`  ${file.name}: ${data.length} registros`);
//       for (const row of data.filter(Array.isArray).filter((row) => row.length !== 4)) {
//         console.log(`    ⚠ ${row[0]} tiene ${row.length} columnas en lugar de 4:`, row.join(' | '));
//       }
//     } catch (error) {
//       console.log(`  ${file.name}: ${error.name}, no es JSON válido`);
//     }
//   }
// });

// ============================================
// PASO 6: Mostrarlo en la página
// ============================================

// Descomenta las siguientes líneas:
// steps.push((files) => {
//   console.log('--- Paso 6: En la página ---');
//   list.replaceChildren(...files.map((file) => {
//     const error = checkFile(file);
//     const item = document.createElement('li');
//     item.className = error ? 'rejected' : 'accepted';
//     const size = file.size < 1024 ? `${file.size} B` : `${(file.size / 1024).toFixed(1)} KB`;
//     item.textContent = `${file.name} · ${size} · ${error ?? 'listo para leer'}`;
//     return item;
//   }));
//   console.log('  Elementos en la lista:', list.children.length);
//   input.value = '';
//   console.log('  input.files después de vaciarlo:', input.files.length);
//   console.log('\n✅ Lab completado.');
// });
