/**
 * 📘 Lab 01: Blob y File
 * Este es un lab guiado. Descomenta el código de cada paso y ejecuta:
 *
 *   node starter/index.js
 *
 * Node 24 trae Blob, File, TextEncoder y TextDecoder igual que el navegador, así que todo
 * este lab se ejecuta en la terminal. Los pasos van en orden: cada uno usa lo de los anteriores.
 */

// Escribe los bytes de un Uint8Array en hexadecimal: hex(new Uint8Array([72, 105])) → '48 69'.
const hex = (bytes) => [...bytes].map((byte) => byte.toString(16).padStart(2, '0')).join(' ');

// ============================================
// PASO 1: Crear un Blob
// ============================================
console.log('--- Paso 1: Crear un Blob ---');

// Descomenta las siguientes líneas:
// const note = new Blob(['Cúpula'], { type: 'text/plain' });
// console.log('  size:', note.size, '· length del texto:', 'Cúpula'.length);
// console.log('  type:', note.type);
// const empty = new Blob([]);
// console.log('  vacío:', empty.size, `type: '${empty.type}'`);
// const mixed = new Blob(['id,title\n', 'S1,La Luna\n', new Uint8Array([79, 75])], { type: 'text/csv' });
// console.log('  partes unidas:', mixed.size, 'bytes');

// ============================================
// PASO 2: Leer un Blob
// ============================================
console.log('\n--- Paso 2: Leer un Blob ---');

// Descomenta las siguientes líneas:
// console.log('  text():', JSON.stringify(await mixed.text()));
// const bytes = await note.bytes();
// console.log('  bytes():', hex(bytes));
// const buffer = await note.arrayBuffer();
// console.log('  arrayBuffer():', buffer.byteLength, 'bytes ·', buffer.constructor.name);
// console.log('  TextDecoder:', new TextDecoder().decode(buffer));
// const encoded = new TextEncoder().encode('ú');
// console.log('  TextEncoder("ú"):', hex(encoded));

// ============================================
// PASO 3: Cortar con slice
// ============================================
console.log('\n--- Paso 3: slice ---');

// Descomenta las siguientes líneas:
// const firstLine = mixed.slice(0, 9);
// console.log('  slice(0, 9):', JSON.stringify(await firstLine.text()), `type: '${firstLine.type}'`);
// console.log('  slice(-2):', await mixed.slice(-2).text());
// console.log('  mixed sigue igual:', mixed.size, 'bytes');
// console.log('  slice(0, 2) de Cúpula:', await note.slice(0, 2).text());
// console.log('  slice(0, 3) de Cúpula:', await note.slice(0, 3).text());

// ============================================
// PASO 4: Un File es un Blob con nombre
// ============================================
console.log('\n--- Paso 4: File ---');

// Descomenta las siguientes líneas:
// const csv = new File(['id,title\nS1,La Luna\n'], 'sesiones.csv', {
//   type: 'text/csv',
//   lastModified: Date.UTC(2026, 10, 2, 9, 0),
// });
// console.log('  name:', csv.name, '· size:', csv.size, '· type:', csv.type);
// console.log('  lastModified:', new Date(csv.lastModified).toISOString());
// console.log('  ¿es un Blob?', csv instanceof Blob);
// const untyped = new File(['{}'], 'datos.json');
// console.log(`  sin type: '${untyped.type}'`);
// const extensionOf = (name) => name.includes('.') ? name.slice(name.lastIndexOf('.')).toLowerCase() : '';
// for (const name of ['sesiones.CSV', 'foto.final.png', 'LEEME']) {
//   console.log(`  extensión de ${name}: '${extensionOf(name)}'`);
// }

// ============================================
// PASO 5: El contenido manda: los primeros bytes
// ============================================
console.log('\n--- Paso 5: Firmas ---');

// Descomenta las siguientes líneas:
// const SIGNATURES = [
//   { type: 'image/png', bytes: [0x89, 0x50, 0x4e, 0x47] },
//   { type: 'image/jpeg', bytes: [0xff, 0xd8, 0xff] },
//   { type: 'application/pdf', bytes: [0x25, 0x50, 0x44, 0x46] },
// ];
// const sniff = async (blob) => {
//   const head = await blob.slice(0, 4).bytes();
//   const match = SIGNATURES.find(({ bytes }) => bytes.every((byte, i) => head[i] === byte));
//   return match?.type ?? 'desconocido';
// };
// const files = [
//   new File([new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])], 'cupula.png', { type: 'image/png' }),
//   new File(['%PDF-1.7'], 'programa.pdf', { type: 'application/pdf' }),
//   new File(['no soy una imagen'], 'falsa.png', { type: 'image/png' }),
// ];
// for (const file of files) {
//   console.log(`  ${file.name.padEnd(13)} dice ${file.type.padEnd(16)} es ${await sniff(file)}`);
// }

// ============================================
// PASO 6: Texto, JSON y la marca BOM
// ============================================
console.log('\n--- Paso 6: JSON y BOM ---');

// Descomenta las siguientes líneas:
// const sessions = [{ id: 'S1', title: 'La Luna', seats: 80 }, { id: 'S2', title: 'Cúpula abierta', seats: 120 }];
// const json = new File([JSON.stringify(sessions, null, 2)], 'sesiones.json', { type: 'application/json' });
// const back = JSON.parse(await json.text());
// console.log('  JSON:', json.size, 'bytes ·', back.length, 'sesiones · la segunda:', back[1].title);
// try {
//   JSON.parse(await new Blob(['{ roto']).text());
// } catch (error) {
//   console.log('  JSON roto:', error.name);
// }
// const BOM = '﻿';
// const withBom = new Blob([BOM, 'id,title\n'], { type: 'text/csv' });
// console.log('  con BOM:', withBom.size, 'bytes · primeros:', hex((await withBom.bytes()).slice(0, 3)));
// const text = await withBom.text();
// console.log('  text() empieza por BOM:', text.startsWith(BOM), '· length:', text.length);
// const kept = new TextDecoder('utf-8', { ignoreBOM: true }).decode(await withBom.bytes());
// console.log('  ignoreBOM: true lo conserva:', kept.startsWith(BOM), '· length:', kept.length);

console.log('\n✅ Lab completado.');
