/**
 * 📘 Lab 04: Arrastrar y soltar archivos
 * Este es un lab guiado. Descomenta el código de cada paso, guarda y recarga la página.
 *
 * Abre starter/index.html en el navegador y mira la consola de las DevTools (F12).
 * Arrastra los archivos de starter/muestras/ desde el explorador de archivos hasta la zona
 * punteada de la página.
 * Los pasos van en orden: cada uno usa lo que definen los anteriores.
 */

const zone = document.querySelector('#zone');
const input = document.querySelector('#files');
const list = document.querySelector('#list');
const gallery = document.querySelector('#gallery');
// ¿El arrastre trae archivos? Durante dragenter y dragover no se pueden leer, pero sí sus tipos.
const hasFiles = (event) => event.dataTransfer?.types.includes('Files') ?? false;

// ============================================
// PASO 1: Que el navegador no abra el archivo
// ============================================
console.log('--- Paso 1: Fuera de la zona ---');

// Descomenta las siguientes líneas:
// for (const type of ['dragover', 'drop']) {
//   window.addEventListener(type, (event) => {
//     if (!hasFiles(event) || event.target.closest('#zone')) return;
//     event.preventDefault();
//     event.dataTransfer.dropEffect = 'none';
//     if (type === 'drop') console.log('  soltado fuera de la zona: ignorado');
//   });
// }
// console.log('  Suelta un archivo fuera de la zona: la página no cambia');

// ============================================
// PASO 2: Los eventos de la zona
// ============================================
console.log('--- Paso 2: Eventos ---');

// Descomenta las siguientes líneas:
// const seen = [];
// for (const type of ['dragenter', 'dragover', 'dragleave', 'drop']) {
//   zone.addEventListener(type, (event) => {
//     if (!hasFiles(event)) return;
//     event.preventDefault();
//     seen.push(type);
//   });
// }
// // Agrupa los repetidos: ['dragover', 'dragover'] → 'dragover ×2'.
// const summarize = (types) => types
//   .reduce((groups, type) => (groups.at(-1)?.type === type ? groups.at(-1).count++ : groups.push({ type, count: 1 }), groups), [])
//   .map(({ type, count }) => (count > 1 ? `${type} ×${count}` : type))
//   .join(', ');
// zone.addEventListener('drop', (event) => {
//   if (!hasFiles(event)) return;
//   console.log('  eventos:', summarize(seen));
//   seen.length = 0;
// });

// ============================================
// PASO 3: Resaltar la zona mientras se arrastra
// ============================================
console.log('--- Paso 3: Resaltar ---');

// Descomenta las siguientes líneas:
// let depth = 0;
// zone.addEventListener('dragenter', (event) => {
//   if (!hasFiles(event)) return;
//   depth += 1;
//   zone.classList.add('is-over');
// });
// zone.addEventListener('dragleave', () => {
//   depth = Math.max(0, depth - 1);
//   if (depth === 0) zone.classList.remove('is-over');
// });
// zone.addEventListener('drop', (event) => {
//   if (!hasFiles(event)) return;
//   console.log('  profundidad al soltar:', depth);
//   depth = 0;
//   zone.classList.remove('is-over');
// });

// ============================================
// PASO 4: Leer los archivos soltados
// ============================================
console.log('--- Paso 4: dataTransfer.files ---');

// Descomenta las siguientes líneas:
// const onFiles = [];
// const handleFiles = (fileList, source) => {
//   const files = [...fileList].toSorted((a, b) => a.name.localeCompare(b.name));
//   console.log(`  ${files.length} archivos por ${source}:`, files.map((file) => `${file.name} (${file.size} B)`).join(', '));
//   for (const file of files) {
//     const item = document.createElement('li');
//     item.textContent = `${file.name} · ${file.type || 'sin type'} · llegó por ${source}`;
//     list.append(item);
//   }
//   for (const handler of onFiles) handler(files);
// };
// zone.addEventListener('drop', (event) => {
//   if (!hasFiles(event)) return console.log('  soltado algo que no son archivos:', event.dataTransfer.types.join(', '));
//   handleFiles(event.dataTransfer.files, 'arrastre');
// });

// ============================================
// PASO 5: El botón y pegar también valen
// ============================================
console.log('--- Paso 5: Botón y pegar ---');

// Descomenta las siguientes líneas:
// input.addEventListener('change', () => {
//   handleFiles(input.files, 'botón');
//   input.value = '';
// });
// document.addEventListener('paste', (event) => {
//   if (event.clipboardData.files.length === 0) return;
//   event.preventDefault();
//   handleFiles(event.clipboardData.files, 'pegado');
// });

// ============================================
// PASO 6: Vista previa de las imágenes
// ============================================
console.log('--- Paso 6: Vista previa ---');

// Descomenta las siguientes líneas:
// onFiles.push((files) => {
//   for (const file of files.filter((file) => file.type.startsWith('image/'))) {
//     const img = document.createElement('img');
//     const url = URL.createObjectURL(file);
//     img.addEventListener('load', () => {
//       URL.revokeObjectURL(url);
//       console.log(`  vista previa de ${file.name}: ${img.naturalWidth}×${img.naturalHeight}, URL liberada`);
//     }, { once: true });
//     img.src = url;
//     img.alt = file.name;
//     gallery.append(img);
//   }
// });
// console.log('  Imágenes en la galería al empezar:', gallery.children.length);
// console.log('\n✅ Lab completado. Arrastra, elige o pega archivos.');
