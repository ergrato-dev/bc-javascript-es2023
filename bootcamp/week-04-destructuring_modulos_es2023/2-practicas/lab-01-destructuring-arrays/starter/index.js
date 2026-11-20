/**
 * 📘 Lab 01: Destructuring de Arrays
 *
 * Este es un lab guiado. Descomenta el código en cada paso
 * para aprender destructuring de arrays progresivamente.
 *
 * Ejecuta desde la carpeta del lab: node starter/index.js
 */

// ============================================
// DATOS DE PRUEBA (no modificar)
// ============================================

const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
const numbers = [10, 20, 30, 40, 50];
const coordinates = [
  [0, 0],
  [10, 20],
  [30, 40],
];
const mixed = ['JavaScript', 2024, true, { name: 'ES6' }];

// ============================================
// PASO 1: Extracción Básica
// ============================================
console.log('--- Paso 1: Extracción Básica ---');

// Extraemos los primeros 3 elementos del array colors
// La sintaxis [a, b, c] = array asigna por posición
// Descomenta las siguientes líneas:

// const [first, second, third] = colors;
// console.log('Primeros 3 colores:', first, second, third);

console.log('');

// ============================================
// PASO 2: Skip de Elementos
// ============================================
console.log('--- Paso 2: Skip de Elementos ---');

// Podemos omitir elementos usando comas vacías
// [a, , c] salta el segundo elemento
// Descomenta las siguientes líneas:

// const [firstNum, , thirdNum] = numbers;
// console.log('Primer y tercer número:', firstNum, thirdNum);

console.log('');

// ============================================
// PASO 3: Rest Pattern (...)
// ============================================
console.log('--- Paso 3: Rest Pattern ---');

// El operador rest (...) captura "el resto" de elementos
// Siempre debe ir al final del destructuring
// Descomenta las siguientes líneas:

// const [primary, ...otherColors] = colors;
// console.log('Color primario:', primary);
// console.log('Otros colores:', otherColors);

console.log('');

// ============================================
// PASO 4: Valores por Defecto
// ============================================
console.log('--- Paso 4: Valores por Defecto ---');

// Si el array no tiene suficientes elementos, podemos dar defaults
// Usa = para asignar el valor por defecto
// Descomenta las siguientes líneas:

const shortArray = ['only one'];

// const [item1, item2 = 'N/A', item3 = 'N/A'] = shortArray;
// console.log('Items con defaults:', item1, item2, item3);

console.log('');

// ============================================
// PASO 5: Swap de Variables
// ============================================
console.log('--- Paso 5: Swap de Variables ---');

// Destructuring permite intercambiar valores en una línea
// Sin necesidad de variable temporal
// Descomenta las siguientes líneas:

let x = 'hello';
let y = 'world';

// [x, y] = [y, x];
// console.log('Después del swap:', x, y);

console.log('');

// ============================================
// PASO 6: Destructuring Anidado
// ============================================
console.log('--- Paso 6: Destructuring Anidado ---');

// Podemos extraer de arrays dentro de arrays
// Usamos corchetes anidados para acceder a niveles internos
// Descomenta las siguientes líneas:

// const [, [pointX, pointY]] = coordinates;
// console.log('Segundo punto - X:', pointX, 'Y:', pointY);

console.log('');

// ============================================
// PASO 7: En Parámetros de Función
// ============================================
console.log('--- Paso 7: En Parámetros de Función ---');

// Podemos hacer destructuring directamente en los parámetros
// La función recibe un array y lo descompone automáticamente
// Descomenta las siguientes líneas:

// const sumThree = ([a, b, c]) => a + b + c;
// console.log('Suma de [5, 10, 15]:', sumThree([5, 10, 15]));

console.log('');

// ============================================
// PASO 8: Retorno de Funciones
// ============================================
console.log('--- Paso 8: Retorno de Funciones ---');

// Cuando una función retorna un array, podemos destructurarlo
// Esto es común para funciones que retornan múltiples valores
// Descomenta las siguientes líneas:

const getMinMax = arr => {
  const sorted = [...arr].sort((a, b) => a - b);
  return [sorted[0], sorted[sorted.length - 1]];
};

// const [min, max] = getMinMax(numbers);
// console.log('Min:', min, 'Max:', max);

console.log('');

// ============================================
// PASO 9: Combinación Avanzada
// ============================================
console.log('--- Paso 9: Combinación Avanzada ---');

// Podemos combinar skip, rest y destructuring de objetos
// En este caso extraemos del array mixed que tiene un objeto al final
// Descomenta las siguientes líneas:

// const [language, year, , { name: version }] = mixed;
// console.log('Lenguaje:', language);
// console.log('Año:', year);
// console.log('Versión:', version);

console.log('');

// ============================================
// PASO 10: Caso Práctico - Procesar Coordenadas
// ============================================
console.log('--- Paso 10: Caso Práctico ---');

// Ejemplo real: calcular distancia entre dos puntos
// Combinamos destructuring con funciones
// Descomenta las siguientes líneas:

// const calculateDistance = ([[x1, y1], [x2, y2]]) => {
//   return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
// };

// const points = [[0, 0], [3, 4]];
// const distance = calculateDistance(points);
// console.log('Distancia entre puntos:', distance);

console.log('');
console.log('✅ Lab completado.');
