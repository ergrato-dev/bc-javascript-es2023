// PRÁCTICA 03: Blob y URL.createObjectURL

const textInput = document.querySelector('#textInput');
const downloadBtn = document.querySelector('#downloadBtn');
const downloadJsonBtn = document.querySelector('#downloadJsonBtn');
const status = document.querySelector('#status');

// ============================================
// PASO 1: Función genérica de descarga con Blob
// ============================================

// Descomenta las siguientes líneas:
// const downloadBlob = (content, filename, mimeType = 'text/plain') => {
//   const blob = new Blob([content], { type: mimeType });
//   const url = URL.createObjectURL(blob);
//
//   const link = document.createElement('a');
//   link.href = url;
//   link.download = filename;
//   link.click();
//
//   // Liberar memoria
//   URL.revokeObjectURL(url);
// };

// ============================================
// PASO 2: Descargar texto plano
// ============================================

// Descomenta las siguientes líneas:
// downloadBtn.addEventListener('click', () => {
//   const text = textInput.value.trim();
//   if (!text) {
//     status.textContent = 'Escribe algo antes de descargar.';
//     return;
//   }
//   downloadBlob(text, 'contenido.txt', 'text/plain');
//   status.textContent = 'Archivo .txt descargado';
// });

// ============================================
// PASO 3: Descargar como JSON
// ============================================

// Descomenta las siguientes líneas:
// downloadJsonBtn.addEventListener('click', () => {
//   const text = textInput.value.trim();
//   if (!text) {
//     status.textContent = 'Escribe algo antes de descargar.';
//     return;
//   }
//   const data = { contenido: text, fecha: new Date().toISOString() };
//   const jsonStr = JSON.stringify(data, null, 2);
//   downloadBlob(jsonStr, 'contenido.json', 'application/json');
//   status.textContent = 'Archivo .json descargado';
// });

console.log('=== Práctica 03 lista ===');
