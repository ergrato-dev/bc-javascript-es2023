// PRÁCTICA 04: Drag and Drop

const dropZone = document.querySelector('#dropZone');
const fileList = document.querySelector('#fileList');

// ============================================
// PASO 1: Prevenir comportamiento por defecto
// (sin esto, el navegador abre el archivo)
// ============================================
console.log('--- Paso 1: dragover con preventDefault ---');

// Descomenta las siguientes líneas:
// dropZone.addEventListener('dragover', e => {
//   e.preventDefault(); // obligatorio para que drop funcione
// });

// ============================================
// PASO 2: Feedback visual con dragenter / dragleave
// ============================================
console.log('--- Paso 2: feedback visual ---');

// Descomenta las siguientes líneas:
// dropZone.addEventListener('dragenter', () => {
//   dropZone.classList.add('drag-active');
//   dropZone.textContent = 'Suelta el archivo';
// });
//
// dropZone.addEventListener('dragleave', () => {
//   dropZone.classList.remove('drag-active');
//   dropZone.textContent = 'Arrastra archivos aquí';
// });

// ============================================
// PASO 3: Capturar archivos en el evento drop
// ============================================
console.log('--- Paso 3: drop y dataTransfer.files ---');

// Descomenta las siguientes líneas:
// dropZone.addEventListener('drop', e => {
//   e.preventDefault();
//   dropZone.classList.remove('drag-active');
//   dropZone.textContent = 'Arrastra archivos aquí';
//
//   const files = Array.from(e.dataTransfer.files);
//   fileList.innerHTML = '';
//
//   files.forEach(file => {
//     const li = document.createElement('li');
//     const sizeKB = (file.size / 1024).toFixed(1);
//     li.textContent = `${file.name} — ${sizeKB} KB`;
//     fileList.appendChild(li);
//   });
//
//   console.log('Archivos recibidos:', files.map(f => f.name));
// });

console.log('=== Práctica 04 lista ===');
