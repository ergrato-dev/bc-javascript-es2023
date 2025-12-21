/**
 * Ejercicio 02: Array.from() y Array.of()
 *
 * Practica la creación de arrays desde diferentes fuentes
 */

// ============================================
// TAREA 1: Caracteres de un String
// ============================================

const word = 'JavaScript';

// TODO: Convertir a array de caracteres
const characters = null; // Implementar

console.log('Tarea 1 - Caracteres:', characters);
// Esperado: ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']

// ============================================
// TAREA 2: Caracteres Únicos
// ============================================

const text = 'programming';

// TODO: Obtener caracteres únicos ordenados
const uniqueChars = null; // Implementar

console.log('Tarea 2 - Caracteres únicos:', uniqueChars);
// Esperado: ['a', 'g', 'i', 'm', 'n', 'o', 'p', 'r']

// ============================================
// TAREA 3: De Set a Array
// ============================================

const numbersSet = new Set([1, 2, 3, 2, 1, 4, 5, 4]);

// TODO: Convertir Set a Array
const numbersArray = null; // Implementar

console.log('Tarea 3 - Set a Array:', numbersArray);
// Esperado: [1, 2, 3, 4, 5]

// ============================================
// TAREA 4: De Map a Array de Objetos
// ============================================

const userMap = new Map([
  ['u1', { name: 'Ana', age: 25 }],
  ['u2', { name: 'Luis', age: 30 }],
  ['u3', { name: 'María', age: 28 }],
]);

// TODO: Convertir a array de objetos con id incluido
const usersArray = null; // Implementar

console.log('Tarea 4 - Map a Array:', usersArray);
// Esperado: [{ id: 'u1', name: 'Ana', age: 25 }, ...]

// ============================================
// TAREA 5: Generar Rango de Números
// ============================================

// TODO: Crear función que genere array de números desde start hasta end
const createRange = (start, end) => {
  // Implementar
  return null;
};

console.log('Tarea 5 - Rango 1-5:', createRange(1, 5));
// Esperado: [1, 2, 3, 4, 5]
console.log('Tarea 5 - Rango 10-15:', createRange(10, 15));
// Esperado: [10, 11, 12, 13, 14, 15]

// ============================================
// TAREA 6: Generar Array de Ceros
// ============================================

// TODO: Crear array de 10 ceros
const zeros = null; // Implementar

console.log('Tarea 6 - Array de ceros:', zeros);
// Esperado: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// ============================================
// TAREA 7: Generar Índices
// ============================================

// TODO: Crear array de índices del 0 al 9
const indices = null; // Implementar

console.log('Tarea 7 - Índices:', indices);
// Esperado: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// ============================================
// TAREA 8: Números Aleatorios
// ============================================

// TODO: Generar 5 números aleatorios entre 1 y 100
const randomNumbers = null; // Implementar

console.log('Tarea 8 - Aleatorios:', randomNumbers);
// Resultado: array de 5 números aleatorios

// ============================================
// TAREA 9: Alfabeto
// ============================================

// TODO: Generar array con letras a-z
// Pista: String.fromCharCode(97) === 'a'
const alphabet = null; // Implementar

console.log('Tarea 9 - Alfabeto:', alphabet);
// Esperado: ['a', 'b', 'c', ..., 'z']

// ============================================
// TAREA 10: Matriz 3x3
// ============================================

// TODO: Crear matriz 3x3 inicializada con ceros
const matrix3x3 = null; // Implementar

console.log('Tarea 10 - Matriz 3x3:');
console.table(matrix3x3);
// Esperado: [[0,0,0], [0,0,0], [0,0,0]]

// ============================================
// TAREA 11: Matriz con Posiciones
// ============================================

// TODO: Crear matriz 3x3 donde cada celda contiene "fila,columna"
const positionMatrix = null; // Implementar

console.log('Tarea 11 - Matriz posiciones:');
console.table(positionMatrix);
// Esperado: [['0,0','0,1','0,2'], ['1,0','1,1','1,2'], ['2,0','2,1','2,2']]

// ============================================
// TAREA 12: Array.of vs Array
// ============================================

// TODO: Demostrar la diferencia
const withArray = null; // Array(5) - ¿qué devuelve?
const withArrayOf = null; // Array.of(5) - ¿qué devuelve?

console.log('Tarea 12 - Array(5):', withArray);
console.log('Tarea 12 - Array.of(5):', withArrayOf);
// Explicar la diferencia en comentarios

// ============================================
// TAREA 13: Convertir Arguments
// ============================================

// TODO: Crear función que sume todos sus argumentos
function sumAll() {
  // Implementar usando Array.from(arguments)
  return null;
}

console.log('Tarea 13 - sumAll(1,2,3,4,5):', sumAll(1, 2, 3, 4, 5));
// Esperado: 15

// ============================================
// TAREA 14: Dividir en Chunks
// ============================================

// TODO: Función que divide un array en subarrays de tamaño n
const chunk = (array, size) => {
  // Implementar
  return null;
};

console.log(
  'Tarea 14 - chunk([1,2,3,4,5,6,7], 3):',
  chunk([1, 2, 3, 4, 5, 6, 7], 3)
);
// Esperado: [[1,2,3], [4,5,6], [7]]

// ============================================
// TAREA 15: Generar IDs Únicos
// ============================================

// TODO: Función que genera n IDs únicos aleatorios
const generateIds = n => {
  // Implementar
  return null;
};

console.log('Tarea 15 - IDs:', generateIds(3));
// Resultado: ['x7f2k9m3n', 'a1b2c3d4e', 'q8w9e0r1t'] (aleatorios)

// ============================================
// BONUS: Crear tabla de multiplicar
// ============================================

// TODO: Función que genera tabla de multiplicar del número n
const multiplicationTable = n => {
  // Implementar
  return null;
};

console.log('Bonus - Tabla del 7:', multiplicationTable(7));
// Esperado: [{ operation: '7 × 1', result: 7 }, { operation: '7 × 2', result: 14 }, ...]
