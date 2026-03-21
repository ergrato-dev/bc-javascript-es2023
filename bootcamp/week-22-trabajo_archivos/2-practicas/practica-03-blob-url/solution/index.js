// PRÁCTICA 03: Blob y URL.createObjectURL — SOLUCIÓN

const textInput = document.querySelector('#textInput');
const downloadBtn = document.querySelector('#downloadBtn');
const downloadJsonBtn = document.querySelector('#downloadJsonBtn');
const status = document.querySelector('#status');

// Función genérica de descarga
const downloadBlob = (content, filename, mimeType = 'text/plain') => {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();

  URL.revokeObjectURL(url);
};

// Descargar como texto plano
downloadBtn.addEventListener('click', () => {
  const text = textInput.value.trim();
  if (!text) {
    status.textContent = 'Escribe algo antes de descargar.';
    return;
  }
  downloadBlob(text, 'contenido.txt', 'text/plain');
  status.textContent = 'Archivo .txt descargado';
});

// Descargar como JSON
downloadJsonBtn.addEventListener('click', () => {
  const text = textInput.value.trim();
  if (!text) {
    status.textContent = 'Escribe algo antes de descargar.';
    return;
  }
  const data = { contenido: text, fecha: new Date().toISOString() };
  const jsonStr = JSON.stringify(data, null, 2);
  downloadBlob(jsonStr, 'contenido.json', 'application/json');
  status.textContent = 'Archivo .json descargado';
});
