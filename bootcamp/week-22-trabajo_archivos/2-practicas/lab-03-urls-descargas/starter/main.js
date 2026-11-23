/**
 * 📘 Lab 03: URLs de objeto y descargas
 * Este es un lab guiado. Descomenta el código de cada paso, guarda y recarga la página.
 *
 * Abre starter/index.html en el navegador y mira la consola de las DevTools (F12).
 * Los pasos 4 a 6 se prueban con los botones de la página.
 * Los pasos van en orden: cada uno usa lo que definen los anteriores.
 */

const preview = document.querySelector('#preview');
const SESSIONS = [
  { id: 'S1', title: 'La Luna de cerca', room: 'Cúpula', seats: 80 },
  { id: 'S2', title: 'Constelaciones, mitos y mapas', room: 'Cúpula', seats: 80 },
  { id: 'S3', title: 'El "Gran Telescopio"', room: 'Terraza', seats: 30 },
];
// Espera al evento load o error de una imagen y devuelve cuál llegó.
const loaded = (img) => new Promise((resolve) => {
  img.addEventListener('load', () => resolve('load'), { once: true });
  img.addEventListener('error', () => resolve('error'), { once: true });
});
// Cada paso añade a steps una función; al final del archivo se ejecutan en orden, esperando a
// que termine cada una, para que la salida de un paso no se mezcle con la del siguiente.
const steps = [];

// ============================================
// PASO 1: Una URL para un Blob
// ============================================

// Descomenta las siguientes líneas:
// const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="90">
//   <rect width="160" height="90" fill="#161b22"/>
//   <circle cx="80" cy="45" r="30" fill="#F7DF1E"/>
// </svg>`;
// const image = new Blob([svg], { type: 'image/svg+xml' });
// const imageUrl = URL.createObjectURL(image);
// steps.push(async () => {
//   console.log('--- Paso 1: URL.createObjectURL ---');
//   console.log('  empieza por:', imageUrl.slice(0, 5), '· longitud:', imageUrl.length);
//   const other = URL.createObjectURL(image);
//   console.log('  ¿otra URL para el mismo Blob?', other === imageUrl);
//   URL.revokeObjectURL(other);
//   preview.src = imageUrl;
//   console.log('  imagen:', await loaded(preview), `${preview.naturalWidth}×${preview.naturalHeight}`);
// });

// ============================================
// PASO 2: Una data URL lleva el contenido dentro
// ============================================

// Descomenta las siguientes líneas:
// const toDataUrl = (blob) => new Promise((resolve, reject) => {
//   const reader = new FileReader();
//   reader.addEventListener('load', () => resolve(reader.result));
//   reader.addEventListener('error', () => reject(reader.error));
//   reader.readAsDataURL(blob);
// });
// steps.push(async () => {
//   console.log('\n--- Paso 2: data URL ---');
//   const dataUrl = await toDataUrl(image);
//   console.log('  empieza por:', dataUrl.slice(0, dataUrl.indexOf(',') + 1));
//   console.log('  longitud:', dataUrl.length, '· el Blob:', image.size, 'bytes');
//   const copy = document.createElement('img');
//   copy.src = dataUrl;
//   console.log('  imagen desde la data URL:', await loaded(copy));
// });

// ============================================
// PASO 3: Liberar la URL con revokeObjectURL
// ============================================

// Descomenta las siguientes líneas:
// steps.push(async () => {
//   console.log('\n--- Paso 3: revokeObjectURL ---');
//   URL.revokeObjectURL(imageUrl);
//   console.log('  la imagen ya cargada sigue visible:', preview.complete, preview.naturalWidth);
//   const late = document.createElement('img');
//   late.src = imageUrl;
//   console.log('  una imagen nueva con la URL revocada:', await loaded(late));
// });

// ============================================
// PASO 4: Descargar un archivo creado en la página
// ============================================

// Descomenta las siguientes líneas:
// const download = (blob, filename) => {
//   const url = URL.createObjectURL(blob);
//   const link = document.createElement('a');
//   link.href = url;
//   link.download = filename;
//   link.click();
//   setTimeout(() => URL.revokeObjectURL(url), 0);
//   console.log(`  descargado ${filename}: ${blob.size} bytes, ${blob.type}`);
// };
// document.querySelector('#download-txt').addEventListener('click', () => {
//   const lines = SESSIONS.map(({ title, seats }) => `${title}: ${seats} plazas`);
//   download(new Blob([lines.join('\n'), '\n'], { type: 'text/plain' }), 'plazas.txt');
// });
// steps.push(() => {
//   console.log('\n--- Paso 4: Descargar ---');
//   console.log('  Pulsa «Descargar plazas.txt»');
// });

// ============================================
// PASO 5: Exportar CSV
// ============================================

// Descomenta las siguientes líneas:
// const csvCell = (value) => {
//   const text = String(value);
//   return /[",\r\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
// };
// const toCsv = (rows, columns) => [columns, ...rows.map((row) => columns.map((column) => row[column]))]
//   .map((cells) => cells.map(csvCell).join(','))
//   .join('\r\n');
// const csvText = toCsv(SESSIONS, ['id', 'title', 'room', 'seats']);
// document.querySelector('#download-csv').addEventListener('click', () => {
//   download(new Blob(['﻿', csvText, '\r\n'], { type: 'text/csv' }), 'sesiones.csv');
// });
// steps.push(() => {
//   console.log('\n--- Paso 5: CSV ---');
//   console.log(csvText);
//   console.log('  Pulsa «Descargar sesiones.csv»');
// });

// ============================================
// PASO 6: Guardar como JSON y volver a abrirlo
// ============================================

// Descomenta las siguientes líneas:
// document.querySelector('#download-json').addEventListener('click', () => {
//   download(new Blob([JSON.stringify(SESSIONS, null, 2)], { type: 'application/json' }), 'sesiones.json');
// });
// document.querySelector('#reopen').addEventListener('change', async (event) => {
//   const [file] = event.target.files;
//   const data = JSON.parse(await file.text());
//   console.log(`  abierto ${file.name}: ${data.length} sesiones · la tercera: ${data[2].title}`);
//   console.log('  ¿igual que SESSIONS?', JSON.stringify(data) === JSON.stringify(SESSIONS));
//   console.log('\n✅ Lab completado.');
// });
// steps.push(() => {
//   console.log('\n--- Paso 6: JSON de ida y vuelta ---');
//   console.log('  Pulsa «Descargar sesiones.json» y ábrelo con «Abrir el JSON descargado»');
// });

// Ejecuta los pasos descomentados, uno detrás de otro.
(async () => {
  for (const step of steps) await step();
})();
