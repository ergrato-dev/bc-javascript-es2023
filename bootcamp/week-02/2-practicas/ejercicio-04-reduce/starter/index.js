/**
 * 📘 Ejercicio 04: Reduce Complejo
 * Domina reduce() para transformaciones avanzadas
 */

// Datos de prueba
const numbers = [10, 20, 30, 40, 50];

const products = [
  { id: 1, name: 'Laptop', category: 'electronics', price: 999, quantity: 2 },
  { id: 2, name: 'Mouse', category: 'electronics', price: 25, quantity: 5 },
  { id: 3, name: 'Desk', category: 'furniture', price: 200, quantity: 1 },
  { id: 4, name: 'Chair', category: 'furniture', price: 150, quantity: 4 },
];

const users = [
  { id: 1, name: 'Ana', role: 'admin', points: 100 },
  { id: 2, name: 'Bob', role: 'user', points: 50 },
  { id: 3, name: 'Carlos', role: 'admin', points: 80 },
  { id: 4, name: 'Diana', role: 'user', points: 120 },
];

const fruits = [
  'apple',
  'banana',
  'apple',
  'orange',
  'banana',
  'apple',
  'grape',
];

const nestedArrays = [
  [1, 2],
  [3, 4],
  [5, 6],
];

// ============================================
// PARTE 1: AGREGACIONES BÁSICAS
// ============================================

/**
 * TODO: Suma todos los números
 * @param {number[]} numbers - Array de números
 * @returns {number} - Suma total
 */
const sum = numbers => {
  // TODO: Usa reduce para sumar, initial value = 0
};

/**
 * TODO: Multiplica todos los números
 * @param {number[]} numbers - Array de números
 * @returns {number} - Producto total
 */
const product = numbers => {
  // TODO: Usa reduce para multiplicar, initial value = 1
};

/**
 * TODO: Calcula el promedio
 * @param {number[]} numbers - Array de números
 * @returns {number} - Promedio
 */
const average = numbers => {
  // TODO: Suma con reduce, luego divide por length
};

/**
 * TODO: Concatena strings con separador
 * @param {string[]} strings - Array de strings
 * @param {string} separator - Separador
 * @returns {string} - String concatenado
 */
const joinStrings = (strings, separator = ' ') => {
  // TODO: Usa reduce para concatenar con separador
  // Cuidado: el primero no debe tener separador antes
};

/**
 * TODO: Encuentra el número máximo
 * @param {number[]} numbers - Array de números
 * @returns {number} - Número máximo
 */
const max = numbers => {
  // TODO: Usa reduce comparando acc > current
};

// ============================================
// PARTE 2: TRANSFORMACIONES COMPLEJAS
// ============================================

/**
 * TODO: Agrupa usuarios por role
 * @param {object[]} users - Array de usuarios
 * @returns {object} - { admin: [...], user: [...] }
 */
const groupByRole = users => {
  // TODO: Reduce a objeto, crea array si no existe la key
  // { admin: [user1, user3], user: [user2, user4] }
};

/**
 * TODO: Cuenta ocurrencias de cada fruta
 * @param {string[]} fruits - Array de frutas
 * @returns {object} - { apple: 3, banana: 2, ... }
 */
const countOccurrences = fruits => {
  // TODO: Reduce a objeto, incrementa contador
  // acc[fruit] = (acc[fruit] || 0) + 1
};

/**
 * TODO: Indexa productos por ID
 * @param {object[]} products - Array de productos
 * @returns {object} - { 1: product1, 2: product2, ... }
 */
const indexById = products => {
  // TODO: Reduce a objeto usando id como key
  // { 1: {...}, 2: {...}, 3: {...}, 4: {...} }
};

/**
 * TODO: Aplana array de arrays (flatten)
 * @param {array[]} arrays - Array de arrays
 * @returns {array} - Array aplanado
 */
const flatten = arrays => {
  // TODO: Reduce con concat
  // [[1,2], [3,4]] => [1,2,3,4]
};

/**
 * TODO: Invierte un objeto (keys ↔ values)
 * @param {object} obj - Objeto a invertir
 * @returns {object} - Objeto invertido
 */
const invertObject = obj => {
  // TODO: Usa Object.entries y reduce
  // { a: 1, b: 2 } => { 1: 'a', 2: 'b' }
};

// ============================================
// PARTE 3: CASOS AVANZADOS
// ============================================

/**
 * TODO: Calcula total del carrito (price * quantity)
 * @param {object[]} products - Productos en carrito
 * @returns {number} - Total a pagar
 */
const calculateCartTotal = products => {
  // TODO: Reduce sumando (price * quantity)
};

/**
 * TODO: Crea estadísticas de puntos por rol
 * @param {object[]} users - Array de usuarios
 * @returns {object} - { admin: { total, avg, count }, user: {...} }
 */
const getPointsStatsByRole = users => {
  // TODO: Reduce agrupando y calculando total, avg, count
  // Resultado: { admin: { total: 180, avg: 90, count: 2 }, user: {...} }
};

/**
 * TODO: Filtra y suma en un solo reduce
 * @param {number[]} numbers - Array de números
 * @param {number} threshold - Umbral
 * @returns {number} - Suma de números > threshold
 */
const sumAboveThreshold = (numbers, threshold) => {
  // TODO: Reduce sumando solo si current > threshold
};

/**
 * TODO: Transforma array de objetos a Map
 * @param {object[]} items - Array de items con id
 * @returns {Map} - Map con id como key
 */
const arrayToMap = items => {
  // TODO: Reduce creando un Map
  // Initial value: new Map()
  // acc.set(item.id, item)
};

/**
 * TODO: Valida que todos los campos estén completos
 * @param {object[]} fields - Array de campos
 * @returns {object} - { valid: boolean, errors: [] }
 */
const validateFields = fields => {
  // TODO: Reduce acumulando errores
  // Cada field debe tener value no vacío
  // Resultado: { valid: true/false, errors: [...] }
};

/**
 * TODO: Pipeline de transformaciones con reduce
 * @param {number[]} numbers - Array de números
 * @returns {number} - Resultado final
 */
const pipeline = numbers => {
  // TODO: Usa reduce para aplicar transformaciones:
  // 1. Filtrar pares
  // 2. Multiplicar por 2
  // 3. Sumar todos
  // Hazlo en un solo reduce sin usar filter/map
};

// ============================================
// PRUEBAS - NO MODIFICAR
// ============================================

console.log('=== PARTE 1: AGREGACIONES BÁSICAS ===\n');

console.log('Sum [10,20,30,40,50]:', sum(numbers));
// Expected: 150

console.log('Product [1,2,3,4,5]:', product([1, 2, 3, 4, 5]));
// Expected: 120

console.log('Average [10,20,30,40,50]:', average(numbers));
// Expected: 30

console.log(
  'Join ["Hello", "from", "reduce"]:',
  joinStrings(['Hello', 'from', 'reduce'])
);
// Expected: 'Hello from reduce'

console.log('Max [10,5,30,15,25]:', max([10, 5, 30, 15, 25]));
// Expected: 30

console.log('\n=== PARTE 2: TRANSFORMACIONES COMPLEJAS ===\n');

console.log('Group by role:', groupByRole(users));
// Expected: { admin: [Ana, Carlos], user: [Bob, Diana] }

console.log('Count occurrences:', countOccurrences(fruits));
// Expected: { apple: 3, banana: 2, orange: 1, grape: 1 }

console.log('Index by ID:', indexById(products));
// Expected: { 1: {...}, 2: {...}, 3: {...}, 4: {...} }

console.log('Flatten [[1,2], [3,4], [5,6]]:', flatten(nestedArrays));
// Expected: [1, 2, 3, 4, 5, 6]

console.log('Invert { a: 1, b: 2, c: 3 }:', invertObject({ a: 1, b: 2, c: 3 }));
// Expected: { 1: 'a', 2: 'b', 3: 'c' }

console.log('\n=== PARTE 3: CASOS AVANZADOS ===\n');

console.log('Cart total:', calculateCartTotal(products));
// Expected: 3123 (999*2 + 25*5 + 200*1 + 150*4)

console.log('Points stats by role:', getPointsStatsByRole(users));
// Expected: { admin: { total: 180, avg: 90, count: 2 }, user: { total: 170, avg: 85, count: 2 } }

console.log(
  'Sum above 25 in [10,20,30,40,50]:',
  sumAboveThreshold(numbers, 25)
);
// Expected: 120 (30+40+50)

console.log('Array to Map:', arrayToMap(users));
// Expected: Map(4) { 1 => {...}, 2 => {...}, ... }

console.log(
  'Validate fields:',
  validateFields([
    { name: 'email', value: 'test@example.com' },
    { name: 'password', value: '' },
    { name: 'name', value: 'John' },
  ])
);
// Expected: { valid: false, errors: ['password is required'] }

console.log('Pipeline [1,2,3,4,5,6]:', pipeline([1, 2, 3, 4, 5, 6]));
// Expected: 24 (pares: 2,4,6 → *2: 4,8,12 → suma: 24)
