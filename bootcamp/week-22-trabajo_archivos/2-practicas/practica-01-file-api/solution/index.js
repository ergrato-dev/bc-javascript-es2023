// PRÁCTICA 01: File API — SOLUCIÓN

const input = document.querySelector('#fileInput');
const output = document.querySelector('#output');

input.addEventListener('change', e => {
  // PASO 1: Acceder al FileList
  const files = e.target.files;
  console.log('Total de archivos:', files.length);

  // PASO 2: Propiedades del primer archivo
  const file = files[0];
  console.log('Nombre:', file.name);
  console.log('Tamaño (bytes):', file.size);
  console.log('Tipo MIME:', file.type);
  console.log('Última modificación:', new Date(file.lastModified).toLocaleString());

  // PASO 3: Convertir FileList a array y listar todos
  const filesArray = Array.from(e.target.files);
  const summary = filesArray.map(f => {
    const sizeKB = (f.size / 1024).toFixed(1);
    return `${f.name} — ${sizeKB} KB — ${f.type || 'sin tipo'}`;
  }).join('\n');

  output.textContent = summary;
  console.log(summary);
});
