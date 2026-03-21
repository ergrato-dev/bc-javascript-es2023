// PRÁCTICA 01: File API

const input = document.querySelector('#fileInput');
const output = document.querySelector('#output');

input.addEventListener('change', e => {
  // ============================================
  // PASO 1: Acceder al FileList
  // ============================================
  console.log('--- Paso 1: FileList ---');

  // Descomenta las siguientes líneas:
  // const files = e.target.files;
  // console.log('Total de archivos:', files.length);

  console.log('');

  // ============================================
  // PASO 2: Propiedades de un File
  // ============================================
  console.log('--- Paso 2: Propiedades del primer archivo ---');

  // Descomenta las siguientes líneas:
  // const file = files[0];
  // console.log('Nombre:', file.name);
  // console.log('Tamaño (bytes):', file.size);
  // console.log('Tipo MIME:', file.type);
  // console.log('Última modificación:', new Date(file.lastModified).toLocaleString());

  console.log('');

  // ============================================
  // PASO 3: Convertir FileList a array
  // ============================================
  console.log('--- Paso 3: Array.from(FileList) ---');

  // Descomenta las siguientes líneas:
  // const filesArray = Array.from(e.target.files);
  // filesArray.forEach(f => {
  //   const sizeKB = (f.size / 1024).toFixed(1);
  //   console.log(`${f.name} — ${sizeKB} KB — ${f.type || 'sin tipo'}`);
  // });

  console.log('=== Fin ===');
});
