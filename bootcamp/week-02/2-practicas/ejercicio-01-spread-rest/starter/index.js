/**
 * 📘 Ejercicio 01: Spread & Rest Operators
 * Completa las funciones siguiendo las instrucciones
 */

// ============================================
// PARTE 1: SPREAD CON ARRAYS
// ============================================

/**
 * TODO: Combina dos arrays de frutas en uno nuevo
 * @param {string[]} fruits1 - Primer array de frutas
 * @param {string[]} fruits2 - Segundo array de frutas
 * @returns {string[]} - Array combinado
 */
const combineFruits = (fruits1, fruits2) => {
  // TODO: Usa spread operator para combinar ambos arrays
};

/**
 * TODO: Encuentra el número mayor de un array
 * @param {number[]} numbers - Array de números
 * @returns {number} - El número mayor
 */
const findMax = (numbers) => {
  // TODO: Usa Math.max con spread operator
};

/**
 * TODO: Inserta elementos en medio de un array
 * @param {any[]} array - Array original
 * @param {number} position - Posición donde insertar
 * @param {any[]} elements - Elementos a insertar
 * @returns {any[]} - Nuevo array con elementos insertados
 */
const insertElements = (array, position, elements) => {
  // TODO: Usa slice y spread para insertar sin mutar
  // Pista: [...array.slice(0, position), ...elements, ...array.slice(position)]
};

// ============================================
// PARTE 2: SPREAD CON OBJETOS
// ============================================

/**
 * TODO: Combina configuración por defecto con personalizada
 * @param {object} defaults - Configuración por defecto
 * @param {object} custom - Configuración personalizada
 * @returns {object} - Configuración final
 */
const mergeConfig = (defaults, custom) => {
  // TODO: Usa spread operator, custom debe sobreescribir defaults
};

/**
 * TODO: Actualiza el precio de un producto
 * @param {object} product - Objeto producto
 * @param {number} newPrice - Nuevo precio
 * @returns {object} - Nuevo objeto con precio actualizado
 */
const updatePrice = (product, newPrice) => {
  // TODO: Crea nuevo objeto con spread, actualiza price
};

/**
 * TODO: Remueve propiedades sensibles de un usuario
 * @param {object} user - Objeto usuario
 * @returns {object} - Usuario sin password ni ssn
 */
const sanitizeUser = (user) => {
  // TODO: Usa destructuring con rest para remover password y ssn
  // Pista: const { password, ssn, ...safeUser } = user
};

// ============================================
// PARTE 3: REST PARAMETERS
// ============================================

/**
 * TODO: Suma cualquier cantidad de números
 * @param {...number} numbers - Números a sumar
 * @returns {number} - Suma total
 */
const sum = (...numbers) => {
  // TODO: Usa reduce para sumar todos los números
};

/**
 * TODO: Logger flexible con nivel y mensajes variables
 * @param {string} level - Nivel del log (INFO, ERROR, etc)
 * @param {...string} messages - Mensajes a loggear
 * @returns {string} - String formateado
 */
const log = (level, ...messages) => {
  // TODO: Retorna string con formato: "[LEVEL] message1 message2 ..."
};

/**
 * TODO: Combina el primer número con la suma del resto
 * @param {number} first - Primer número
 * @param {...number} rest - Resto de números
 * @returns {number} - Primer número + suma del resto
 */
const combineFirstAndRest = (first, ...rest) => {
  // TODO: Suma el primer número con la suma de todos los demás
};

// ============================================
// PARTE 4: REST EN DESTRUCTURING
// ============================================

/**
 * TODO: Extrae primeros dos elementos y agrupa el resto
 * @param {any[]} array - Array de elementos
 * @returns {object} - { first, second, rest }
 */
const extractFirstTwo = (array) => {
  // TODO: Usa destructuring: const [first, second, ...rest] = array
};

/**
 * TODO: Separa id y name del resto de propiedades
 * @param {object} obj - Objeto con propiedades
 * @returns {object} - { id, name, others }
 */
const separateMainProps = (obj) => {
  // TODO: Usa destructuring: const { id, name, ...others } = obj
};

/**
 * TODO: Remueve múltiples propiedades de un objeto
 * @param {object} obj - Objeto original
 * @param {string[]} propsToRemove - Propiedades a remover
 * @returns {object} - Objeto sin las propiedades especificadas
 */
const removeProperties = (obj, propsToRemove) => {
  // TODO: Usa Object.entries, filter, y Object.fromEntries
  // Filtra las propiedades que NO están en propsToRemove
};

// ============================================
// PRUEBAS - NO MODIFICAR
// ============================================

console.log('=== PARTE 1: SPREAD CON ARRAYS ===\n');

const fruits1 = ['apple', 'banana'];
const fruits2 = ['orange', 'grape'];
console.log('Combined fruits:', combineFruits(fruits1, fruits2));
// Expected: ['apple', 'banana', 'orange', 'grape']

const numbers = [10, 5, 30, 15, 25];
console.log('Max number:', findMax(numbers));
// Expected: 30

const letters = ['a', 'b', 'e', 'f'];
console.log('Insert [c,d] at position 2:', insertElements(letters, 2, ['c', 'd']));
// Expected: ['a', 'b', 'c', 'd', 'e', 'f']

console.log('\n=== PARTE 2: SPREAD CON OBJETOS ===\n');

const defaultConfig = { theme: 'dark', fontSize: 14, notifications: true };
const userConfig = { fontSize: 16, language: 'es' };
console.log('Merged config:', mergeConfig(defaultConfig, userConfig));
// Expected: { theme: 'dark', fontSize: 16, notifications: true, language: 'es' }

const product = { id: 1, name: 'Laptop', price: 999, stock: 5 };
console.log('Updated product:', updatePrice(product, 899));
// Expected: { id: 1, name: 'Laptop', price: 899, stock: 5 }

const user = { id: 1, name: 'Ana', email: 'ana@example.com', password: 'secret', ssn: '123-45-6789' };
console.log('Sanitized user:', sanitizeUser(user));
// Expected: { id: 1, name: 'Ana', email: 'ana@example.com' }

console.log('\n=== PARTE 3: REST PARAMETERS ===\n');

console.log('Sum(1,2,3,4,5):', sum(1, 2, 3, 4, 5));
// Expected: 15

console.log('Log:', log('ERROR', 'Database connection failed', 'Retrying in 5s'));
// Expected: '[ERROR] Database connection failed Retrying in 5s'

console.log('Combine first and rest:', combineFirstAndRest(10, 1, 2, 3, 4));
// Expected: 20 (10 + 1+2+3+4)

console.log('\n=== PARTE 4: REST EN DESTRUCTURING ===\n');

const items = ['a', 'b', 'c', 'd', 'e'];
console.log('Extract first two:', extractFirstTwo(items));
// Expected: { first: 'a', second: 'b', rest: ['c', 'd', 'e'] }

const person = { id: 1, name: 'Bob', age: 30, city: 'Madrid', country: 'Spain' };
console.log('Separate main props:', separateMainProps(person));
// Expected: { id: 1, name: 'Bob', others: { age: 30, city: 'Madrid', country: 'Spain' } }

const data = { id: 1, name: 'Test', password: 'secret', apiKey: '12345', email: 'test@example.com' };
console.log('Remove password & apiKey:', removeProperties(data, ['password', 'apiKey']));
// Expected: { id: 1, name: 'Test', email: 'test@example.com' }
