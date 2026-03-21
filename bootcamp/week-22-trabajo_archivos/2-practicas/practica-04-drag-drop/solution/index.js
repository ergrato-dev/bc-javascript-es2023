// PRÁCTICA 04: Drag and Drop — SOLUCIÓN

const dropZone = document.querySelector('#dropZone');
const fileList = document.querySelector('#fileList');

// Paso 1: Prevenir comportamiento por defecto del navegador
dropZone.addEventListener('dragover', e => {
  e.preventDefault();
});

// Paso 2: Feedback visual
dropZone.addEventListener('dragenter', () => {
  dropZone.classList.add('drag-active');
  dropZone.textContent = 'Suelta el archivo';
});

dropZone.addEventListener('dragleave', () => {
  dropZone.classList.remove('drag-active');
  dropZone.textContent = 'Arrastra archivos aquí';
});

// Paso 3: Capturar y listar archivos
dropZone.addEventListener('drop', e => {
  e.preventDefault();
  dropZone.classList.remove('drag-active');
  dropZone.textContent = 'Arrastra archivos aquí';

  const files = Array.from(e.dataTransfer.files);
  fileList.innerHTML = '';

  files.forEach(file => {
    const li = document.createElement('li');
    const sizeKB = (file.size / 1024).toFixed(1);
    li.textContent = `${file.name} — ${sizeKB} KB`;
    fileList.appendChild(li);
  });

  console.log('Archivos recibidos:', files.map(f => f.name));
});
