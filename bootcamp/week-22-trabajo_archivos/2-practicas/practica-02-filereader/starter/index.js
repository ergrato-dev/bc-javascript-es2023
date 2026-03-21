// PRÁCTICA 02: FileReader

const input = document.querySelector('#fileInput');
const output = document.querySelector('#output');

// ============================================
// PASO 1: Helper — leer archivo como texto (Promise)
// ============================================

// Descomenta las siguientes líneas:
// const readFileAsText = file =>
//   new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.onload = e => resolve(e.target.result);
//     reader.onerror = () =>
//       reject(new Error(`No se pudo leer: ${file.name}`));
//     reader.readAsText(file, 'UTF-8');
//   });

// ============================================
// PASO 2: Helper — leer como Data URL (para imágenes)
// ============================================

// Descomenta las siguientes líneas:
// const readFileAsDataURL = file =>
//   new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.onload = e => resolve(e.target.result);
//     reader.onerror = () =>
//       reject(new Error(`No se pudo leer imagen: ${file.name}`));
//     reader.readAsDataURL(file);
//   });

// ============================================
// PASO 3: Usar los helpers en el evento change
// ============================================

// Descomenta las siguientes líneas:
// input.addEventListener('change', async e => {
//   const file = e.target.files[0];
//   if (!file) return;
//
//   try {
//     const content = await readFileAsText(file);
//     output.textContent = content;
//     console.log(`Archivo leído: ${file.name} (${content.length} caracteres)`);
//   } catch (error) {
//     output.textContent = `Error: ${error.message}`;
//     console.error(error);
//   }
// });

console.log('=== Práctica 02 lista ===');
