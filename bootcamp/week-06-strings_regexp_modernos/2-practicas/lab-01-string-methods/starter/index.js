/**
 * 📘 Lab 01: Métodos modernos de strings
 * Este es un lab guiado. Descomenta el código de cada paso y ejecuta.
 *
 * Ejecuta desde la carpeta del lab: node starter/index.js
 */

// ============================================
// DATOS DE PRUEBA (no modificar)
// ============================================

const filename = 'document.pdf';
const email = '  USER@Example.COM  ';
const url = 'https://api.example.com/v2/users';
const text = 'JavaScript es un lenguaje de programación';
const numbers = ['1', '42', '7', '123'];

// ============================================
// PASO 1: includes() - Verificar contenido
// ============================================
console.log('--- Paso 1: includes() ---');

// includes() verifica si un string contiene otro
// Descomenta las siguientes líneas:

// console.log('¿Contiene "Script"?:', text.includes('Script'));
// console.log('¿Contiene "Python"?:', text.includes('Python'));
//
// // Case sensitive
// console.log('¿Contiene "javascript"?:', text.includes('javascript'));
// console.log('¿Contiene "javascript" (ignorando caso)?:',
//   text.toLowerCase().includes('javascript'));
//
// // Desde posición específica
// console.log('¿"Java" desde posición 0?:', text.includes('Java', 0));
// console.log('¿"Java" desde posición 5?:', text.includes('Java', 5));

console.log('');

// ============================================
// PASO 2: startsWith() y endsWith()
// ============================================
console.log('--- Paso 2: startsWith / endsWith ---');

// Verificar inicio y final de strings
// Descomenta las siguientes líneas:

// // startsWith
// console.log('¿URL empieza con https?:', url.startsWith('https'));
// console.log('¿URL empieza con http?:', url.startsWith('http://'));
//
// // endsWith
// console.log('¿Archivo termina en .pdf?:', filename.endsWith('.pdf'));
// console.log('¿Archivo termina en .txt?:', filename.endsWith('.txt'));
//
// // Caso práctico: validar extensión
// const isImage = file => {
//   const extensions = ['.jpg', '.png', '.gif', '.webp'];
//   return extensions.some(ext => file.toLowerCase().endsWith(ext));
// };
// console.log('photo.JPG es imagen?:', isImage('photo.JPG'));
// console.log('doc.pdf es imagen?:', isImage('doc.pdf'));

console.log('');

// ============================================
// PASO 3: padStart() y padEnd()
// ============================================
console.log('--- Paso 3: padStart / padEnd ---');

// Agregar caracteres hasta alcanzar longitud
// Descomenta las siguientes líneas:

// // padStart - rellena al inicio
// const num = '7';
// console.log('Pad con 0:', num.padStart(3, '0'));  // '007'
//
// // Formatear hora
// const formatTime = (h, m, s) => {
//   return [h, m, s]
//     .map(n => String(n).padStart(2, '0'))
//     .join(':');
// };
// console.log('Hora formateada:', formatTime(9, 5, 3));
//
// // padEnd - rellena al final
// const name = 'Ana';
// console.log('Nombre padded:', name.padEnd(10, '.'));
//
// // IDs con formato
// const formatId = id => `ID-${String(id).padStart(6, '0')}`;
// console.log('ID formateado:', formatId(42));

console.log('');

// ============================================
// PASO 4: trim(), trimStart(), trimEnd()
// ============================================
console.log('--- Paso 4: trim ---');

// Eliminar espacios en blanco
// Descomenta las siguientes líneas:

// console.log('Email original:', `"${email}"`);
// console.log('trim():', `"${email.trim()}"`);
// console.log('trimStart():', `"${email.trimStart()}"`);
// console.log('trimEnd():', `"${email.trimEnd()}"`);
//
// // Caso práctico: limpiar input
// const cleanInput = input => input.trim().toLowerCase();
// console.log('Email limpio:', cleanInput(email));

console.log('');

// ============================================
// PASO 5: repeat()
// ============================================
console.log('--- Paso 5: repeat() ---');

// Repetir un string n veces
// Descomenta las siguientes líneas:

// console.log('Estrellas:', '⭐'.repeat(5));
// console.log('Separador:', '-'.repeat(30));
//
// // Mostrar rating
// const showRating = (rating, max = 5) => {
//   const filled = '★'.repeat(rating);
//   const empty = '☆'.repeat(max - rating);
//   return filled + empty;
// };
// console.log('Rating 3:', showRating(3));
// console.log('Rating 5:', showRating(5));
// console.log('Rating 1:', showRating(1));

console.log('');

// ============================================
// PASO 6: at() - Acceso por índice
// ============================================
console.log('--- Paso 6: at() ---');

// Acceder a caracteres con índices negativos
// Descomenta las siguientes líneas:

// const word = 'JavaScript';
//
// // Índices positivos
// console.log('Primer carácter:', word.at(0));
// console.log('Quinto carácter:', word.at(4));
//
// // Índices negativos (desde el final)
// console.log('Último carácter:', word.at(-1));
// console.log('Penúltimo:', word.at(-2));
//
// // Comparación con forma antigua
// console.log('Último (antiguo):', word[word.length - 1]);
// console.log('Último (moderno):', word.at(-1));

console.log('');

// ============================================
// PASO 7: replaceAll()
// ============================================
console.log('--- Paso 7: replaceAll() ---');

// Reemplazar todas las ocurrencias
// Descomenta las siguientes líneas:

// const sentence = 'foo bar foo baz foo';
//
// // replace solo reemplaza la primera
// console.log('replace():', sentence.replace('foo', 'XXX'));
//
// // replaceAll reemplaza todas
// console.log('replaceAll():', sentence.replaceAll('foo', 'XXX'));
//
// // Caso práctico: sanitizar HTML
// const escapeHtml = str => {
//   return str
//     .replaceAll('&', '&amp;')
//     .replaceAll('<', '&lt;')
//     .replaceAll('>', '&gt;')
//     .replaceAll('"', '&quot;');
// };
// const userInput = '<script>alert("xss")</script>';
// console.log('HTML escapado:', escapeHtml(userInput));

console.log('');

// ============================================
// PASO 8: Caso Práctico - Procesador de Texto
// ============================================
console.log('--- Paso 8: Caso Práctico ---');

// Combinar múltiples métodos
// Descomenta las siguientes líneas:

// const processUserInput = input => {
//   return input
//     .trim()                          // Eliminar espacios
//     .toLowerCase()                   // Minúsculas
//     .replaceAll('  ', ' ');          // Espacios dobles
// };
//
// const rawInput = '  HELLO   WORLD  ';
// console.log('Input procesado:', processUserInput(rawInput));
//
// // Formatear lista de números
// const formatNumbers = nums => {
//   return nums
//     .map(n => n.padStart(4, '0'))
//     .join(', ');
// };
// console.log('Números formateados:', formatNumbers(numbers));
//
// // Validar URL segura
// const isSecureUrl = url => {
//   return url.trim().toLowerCase().startsWith('https://');
// };
// console.log('¿URL segura?:', isSecureUrl(url));
// console.log('¿http es segura?:', isSecureUrl('http://example.com'));

console.log('');

console.log('✅ Lab completado.');
