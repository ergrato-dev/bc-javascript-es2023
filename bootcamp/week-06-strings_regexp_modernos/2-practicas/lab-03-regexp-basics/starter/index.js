/**
 * 📘 Lab 03: Fundamentos de RegExp
 * Este es un lab guiado. Descomenta el código de cada paso y ejecuta.
 *
 * Ejecuta desde la carpeta del lab: node starter/index.js
 */

// ============================================
// PASO 1: Crear y Probar RegExp
// ============================================
console.log('--- Paso 1: Crear RegExp ---');

// Dos formas de crear expresiones regulares
// Descomenta las siguientes líneas:

// // Forma literal (preferida)
// const regex1 = /hello/;
//
// // Constructor (útil para patrones dinámicos)
// const regex2 = new RegExp('hello');
//
// // test() - verifica si hay coincidencia
// console.log('/hello/ en "hello world":', regex1.test('hello world'));
// console.log('/hello/ en "hi there":', regex1.test('hi there'));
//
// // Case sensitive por defecto
// console.log('/hello/ en "HELLO":', regex1.test('HELLO'));

console.log('');

// ============================================
// PASO 2: Flags (Banderas)
// ============================================
console.log('--- Paso 2: Flags ---');

// Las flags modifican el comportamiento del patrón
// Descomenta las siguientes líneas:

// const greetings = 'Hello hello HELLO';
//
// // Sin flag: case sensitive, solo primer match
// console.log('Sin flags:', greetings.match(/hello/));
//
// // Flag 'i': ignore case
// console.log('Con i:', greetings.match(/hello/i));
//
// // Flag 'g': global (todos los matches)
// console.log('Con g:', greetings.match(/hello/g));
//
// // Combinando flags
// console.log('Con gi:', greetings.match(/hello/gi));

console.log('');

// ============================================
// PASO 3: Clases de Caracteres
// ============================================
console.log('--- Paso 3: Clases de Caracteres ---');

// Atajos para conjuntos comunes
// Descomenta las siguientes líneas:

// const sample = 'ABC 123 def_456';
//
// // \d = dígito [0-9]
// console.log('Dígitos (\\d):', sample.match(/\d+/g));
//
// // \w = palabra [a-zA-Z0-9_]
// console.log('Palabras (\\w+):', sample.match(/\w+/g));
//
// // \s = espacio en blanco
// console.log('Espacios (\\s+):', sample.match(/\s+/g));
//
// // Negaciones: \D, \W, \S
// console.log('No dígitos (\\D+):', sample.match(/\D+/g));

console.log('');

// ============================================
// PASO 4: Cuantificadores
// ============================================
console.log('--- Paso 4: Cuantificadores ---');

// Especificar cantidad de repeticiones
// Descomenta las siguientes líneas:

// // * = 0 o más
// console.log('a*:', 'aaa'.match(/a*/));    // ['aaa']
// console.log('a* en "":', ''.match(/a*/)); // ['']
//
// // + = 1 o más
// console.log('a+:', 'aaa'.match(/a+/));    // ['aaa']
// console.log('a+ en "bbb":', 'bbb'.match(/a+/)); // null
//
// // ? = 0 o 1
// console.log('colou?r:', 'color'.match(/colou?r/));  // ['color']
// console.log('colou?r:', 'colour'.match(/colou?r/)); // ['colour']
//
// // {n} = exactamente n
// console.log('\\d{3}:', '12345'.match(/\d{3}/));  // ['123']
//
// // {n,m} = entre n y m
// console.log('\\d{2,4}:', '123456'.match(/\d{2,4}/)); // ['1234']

console.log('');

// ============================================
// PASO 5: Anclas
// ============================================
console.log('--- Paso 5: Anclas ---');

// Posiciones en el string
// Descomenta las siguientes líneas:

// // ^ = inicio del string
// console.log('^hello:', /^hello/.test('hello world'));  // true
// console.log('^hello:', /^hello/.test('say hello'));    // false
//
// // $ = final del string
// console.log('world$:', /world$/.test('hello world'));  // true
// console.log('world$:', /world$/.test('world war'));    // false
//
// // \b = límite de palabra
// console.log('\\bcat\\b en "cat":', /\bcat\b/.test('cat'));       // true
// console.log('\\bcat\\b en "category":', /\bcat\b/.test('category')); // false
// console.log('\\bcat\\b en "the cat sat":', /\bcat\b/.test('the cat sat')); // true

console.log('');

// ============================================
// PASO 6: Conjuntos y Rangos
// ============================================
console.log('--- Paso 6: Conjuntos ---');

// [abc] coincide con a, b o c
// Descomenta las siguientes líneas:

// // Conjunto de caracteres
// console.log('[aeiou]:', 'hello'.match(/[aeiou]/g)); // ['e', 'o']
//
// // Rangos
// console.log('[a-z]:', 'Hello123'.match(/[a-z]/g)); // ['e', 'l', 'l', 'o']
// console.log('[A-Z]:', 'Hello123'.match(/[A-Z]/g)); // ['H']
// console.log('[0-9]:', 'Hello123'.match(/[0-9]/g)); // ['1', '2', '3']
//
// // Combinando rangos
// console.log('[a-zA-Z]:', 'Hello'.match(/[a-zA-Z]/g)); // ['H','e','l','l','o']
//
// // Negación con ^
// console.log('[^0-9]:', 'abc123'.match(/[^0-9]/g)); // ['a', 'b', 'c']

console.log('');

// ============================================
// PASO 7: Alternancia y Grupos
// ============================================
console.log('--- Paso 7: Alternancia ---');

// | para "o" lógico
// Descomenta las siguientes líneas:

// // Alternancia simple
// const pets = /cat|dog|bird/;
// console.log('cat|dog|bird en "I have a cat":', pets.test('I have a cat'));
// console.log('cat|dog|bird en "I have a fish":', pets.test('I have a fish'));
//
// // Grupos con paréntesis
// const match = 'John: 25'.match(/(\w+):\s*(\d+)/);
// console.log('Match completo:', match[0]);  // 'John: 25'
// console.log('Grupo 1:', match[1]);         // 'John'
// console.log('Grupo 2:', match[2]);         // '25'
//
// // Extensiones de archivo
// const imgRegex = /\.(jpg|png|gif)$/i;
// console.log('image.PNG:', imgRegex.test('image.PNG'));
// console.log('doc.pdf:', imgRegex.test('doc.pdf'));

console.log('');

// ============================================
// PASO 8: Métodos Útiles
// ============================================
console.log('--- Paso 8: Métodos ---');

// Diferentes formas de usar RegExp
// Descomenta las siguientes líneas:

// const prices = 'The price is $100 and $200';
//
// // test() - boolean
// console.log('test():', /\$\d+/.test(prices));
//
// // match() - array de coincidencias
// console.log('match():', prices.match(/\$\d+/g));
//
// // search() - índice de primera coincidencia
// console.log('search():', prices.search(/\$\d+/));
//
// // replace() - reemplazar
// console.log('replace():', prices.replace(/\$(\d+)/g, '€$1'));
//
// // split() - dividir
// console.log('split():', 'a1b2c3'.split(/\d/));

console.log('');

// ============================================
// PASO 9: Caso Práctico - Validaciones
// ============================================
console.log('--- Paso 9: Validaciones ---');

// Patrones de validación comunes
// Descomenta las siguientes líneas:

// // Email simple
// const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// console.log('Email válido:', emailRegex.test('user@example.com'));
// console.log('Email inválido:', emailRegex.test('invalid@'));
//
// // Teléfono (formato simple)
// const phoneRegex = /^\d{3}[-\s]?\d{3}[-\s]?\d{3}$/;
// console.log('Teléfono 612345678:', phoneRegex.test('612345678'));
// console.log('Teléfono 612-345-678:', phoneRegex.test('612-345-678'));
//
// // URL con protocolo
// const urlRegex = /^https?:\/\/[\w.-]+\.\w{2,}/;
// console.log('URL https:', urlRegex.test('https://example.com'));
// console.log('URL sin protocolo:', urlRegex.test('example.com'));

console.log('');

console.log('✅ Lab completado.');
