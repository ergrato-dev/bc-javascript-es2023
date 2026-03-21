// PRÁCTICA 02: FileReader — SOLUCIÓN

const input = document.querySelector('#fileInput');
const output = document.querySelector('#output');

// Helper: leer archivo de texto con Promise
const readFileAsText = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => resolve(e.target.result);
    reader.onerror = () =>
      reject(new Error(`No se pudo leer: ${file.name}`));
    reader.readAsText(file, 'UTF-8');
  });

// Helper: leer como Data URL
const readFileAsDataURL = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => resolve(e.target.result);
    reader.onerror = () =>
      reject(new Error(`No se pudo leer imagen: ${file.name}`));
    reader.readAsDataURL(file);
  });

// Evento principal
input.addEventListener('change', async e => {
  const file = e.target.files[0];
  if (!file) return;

  try {
    const content = await readFileAsText(file);
    output.textContent = content;
    console.log(`Archivo leído: ${file.name} (${content.length} caracteres)`);
  } catch (error) {
    output.textContent = `Error: ${error.message}`;
    console.error(error);
  }
});
