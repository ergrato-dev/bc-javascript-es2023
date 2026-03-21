// ============================================
// PROYECTO: Lector y Procesador de Archivos
// Semana 22 - Trabajo con Archivos
// ============================================
//
// NOTA PARA EL APRENDIZ:
// Adapta este proyecto a tu dominio asignado.
// Ejemplos de procesamiento por dominio:
// - Museo:      leer CSV de obras, filtrar disponibles
// - Planetario: leer JSON de planetas, ordenar por tamaño
// - Acuario:    leer TXT de especies, contar por hábitat
// - Biblioteca: leer JSON de libros, filtrar disponibles
//
// Completa cada TODO con la lógica de tu dominio.

// ============================================
// SELECTORES DOM
// ============================================

const dropZone = document.querySelector('#dropZone');
const fileInput = document.querySelector('#fileInput');
const fileInfo = document.querySelector('#fileInfo');
const originalContent = document.querySelector('#originalContent');
const processBtn = document.querySelector('#processBtn');
const processedContent = document.querySelector('#processedContent');
const downloadBtn = document.querySelector('#downloadBtn');
const downloadStatus = document.querySelector('#downloadStatus');
const errorMsg = document.querySelector('#errorMsg');

// Almacenar contenido leído y procesado
let rawContent = '';
let processedResult = '';

// ============================================
// HELPER: Leer archivo como texto (Promise)
// ============================================

// TODO: Implementar la función readFileAsText
// Debe devolver una Promise que resuelva con el texto del archivo
// Usar FileReader.readAsText() con codificación 'UTF-8'
// En caso de error rechazar con new Error(mensaje)
const readFileAsText = file => {
  return new Promise((resolve, reject) => {
    // TODO: implementar
  });
};

// ============================================
// HELPER: Mostrar error al usuario
// ============================================

const showError = message => {
  errorMsg.textContent = message;
};

const clearError = () => {
  errorMsg.textContent = '';
};

// ============================================
// LÓGICA DE CARGA DE ARCHIVO
// ============================================

// TODO: Implementar la función handleFile
// Debe:
// 1. Limpiar errores anteriores
// 2. Mostrar nombre y tamaño del archivo en fileInfo
// 3. Leer el contenido con readFileAsText (async/await)
// 4. Guardar el contenido en rawContent
// 5. Mostrar el contenido en originalContent
// 6. Habilitar processBtn
// 7. Capturar errores y mostrarlos con showError
const handleFile = async file => {
  // TODO: implementar
};

// ============================================
// DRAG AND DROP
// ============================================

// TODO: Implementar los eventos de drag & drop
// dragover: preventDefault + clase drag-active
// dragleave: remover clase drag-active
// drop: preventDefault + remover clase + llamar handleFile con el primer archivo

// ============================================
// INPUT FILE
// ============================================

// TODO: Implementar el evento change del fileInput
// Llamar a handleFile con el primer archivo seleccionado

// ============================================
// PROCESAMIENTO (adaptar al dominio)
// ============================================

// TODO: Implementar la función processContent
// Recibe el texto rawContent y devuelve un string con el resultado
// Ejemplos de procesamiento:
// - Parsear JSON y extraer ciertos campos
// - Contar líneas, palabras o caracteres
// - Filtrar filas de un CSV por una condición
// - Transformar el texto de alguna forma útil en tu dominio
const processContent = content => {
  // TODO: implementar según tu dominio
  // Ejemplo genérico: contar líneas
  const lines = content.split('\n').filter(l => l.trim() !== '');
  return `Líneas: ${lines.length}\nCaracteres: ${content.length}`;
};

processBtn.addEventListener('click', () => {
  // TODO: Llamar a processContent con rawContent
  // Guardar resultado en processedResult
  // Mostrar en processedContent
  // Habilitar downloadBtn
});

// ============================================
// DESCARGA DEL RESULTADO
// ============================================

// TODO: Implementar la función downloadBlob
// Recibe (content, filename, mimeType)
// Crea un Blob, una Object URL, un link con download, hace click y revoca la URL
const downloadBlob = (content, filename, mimeType = 'text/plain') => {
  // TODO: implementar
};

downloadBtn.addEventListener('click', () => {
  // TODO: Llamar a downloadBlob con processedResult
  // Nombre del archivo: 'resultado-procesado.txt' (o .json según tu dominio)
  // Actualizar downloadStatus con mensaje de confirmación
});
