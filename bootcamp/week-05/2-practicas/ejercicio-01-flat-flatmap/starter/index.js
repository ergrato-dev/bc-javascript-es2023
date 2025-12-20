/**
 * EJERCICIO 1: FLAT Y FLATMAP
 * 
 * Completa las siguientes funciones usando flat() y flatMap()
 * Sigue las instrucciones en README.md
 */

// ============================================
// TAREA 1: Aplanar Arrays Simples
// ============================================

/**
 * Recibe un array anidado y retorna un array plano
 * @param {Array} array - Array con elementos anidados
 * @returns {Array} Array completamente aplanado
 */
const flattenSimple = (array) => {
  // TODO: Implementar usando flat()
};

// ============================================
// TAREA 2: Aplanar con Profundidad
// ============================================

/**
 * Recibe un array y una profundidad, retorna aplanado a esa profundidad
 * @param {Array} array - Array anidado
 * @param {number} depth - Profundidad de aplanamiento
 * @returns {Array} Array aplanado a la profundidad especificada
 */
const flattenByDepth = (array, depth) => {
  // TODO: Implementar usando flat(depth)
};

// ============================================
// TAREA 3: FlatMap - Duplicar Elementos
// ============================================

/**
 * Usa flatMap() para duplicar cada elemento
 * @param {Array} array - Array de elementos
 * @returns {Array} Array con elementos duplicados
 */
const flatMapDuplicate = (array) => {
  // TODO: Implementar usando flatMap()
  // Pista: Para cada elemento, retorna [elemento, elemento]
};

// ============================================
// TAREA 4: FlatMap - Expandir Rangos
// ============================================

/**
 * Recibe array de números y expande cada número en rango 1 a ese número
 * @param {Array} array - Array de números
 * @returns {Array} Array con rangos expandidos
 */
const expandRanges = (array) => {
  // TODO: Implementar usando flatMap()
  // Pista: Para cada número n, crea array [1, 2, ..., n]
  // Puedes usar Array.from({ length: n }, (_, i) => i + 1)
};

// ============================================
// TAREA 5: FlatMap - Filtrar y Transformar
// ============================================

/**
 * Recibe array de objetos con tags, extrae todos los tags únicos
 * @param {Array} data - Array de objetos con propiedad 'tags'
 * @returns {Array} Array único de tags en mayúsculas
 */
const flatMapFilter = (data) => {
  // TODO: Implementar usando flatMap()
  // 1. Usar flatMap() para extraer todos los tags
  // 2. Eliminar duplicados (usar Set)
  // 3. Convertir a mayúsculas
  // Pista: flatMap(obj => obj.tags).map(tag => tag.toUpperCase())
  // Luego convertir a Set y de vuelta a Array para uniques
};

// ============================================
// TAREA 6: Aplanar Completamente
// ============================================

/**
 * Recibe array profundamente anidado y retorna completamente aplanado
 * @param {Array} array - Array anidado a cualquier profundidad
 * @returns {Array} Array completamente aplanado
 */
const flattenComplex = (array) => {
  // TODO: Implementar usando flat()
  // Pista: Usa flat(Infinity) para aplanar completamente
};

// ============================================
// TAREA 7: FlatMap con Objetos
// ============================================

/**
 * Recibe usuarios con sus órdenes, extrae todas las órdenes
 * @param {Array} users - Array de usuarios con propiedad 'orders'
 * @returns {Array} Array de todas las órdenes
 */
const flatMapUsers = (users) => {
  // TODO: Implementar usando flatMap()
  // Extrae la propiedad 'orders' de cada usuario
};

// ============================================
// TAREA 8: Eliminar Valores Falsy
// ============================================

/**
 * Recibe array anidado y retorna aplanado sin valores falsy
 * @param {Array} array - Array que puede contener valores falsy
 * @returns {Array} Array aplanado solo con valores truthy
 */
const flatMapClean = (array) => {
  // TODO: Implementar usando flatMap()
  // Pista: flatMap puede retornar array vacío [] para filtrar
  // flatMap(item => item ? [item] : [])
};

// ============================================
// TESTS - No modificar
// ============================================

function runTests() {
  console.log('🧪 Ejecutando tests...\n');

  const tests = [
    {
      name: 'flattenSimple',
      fn: () => flattenSimple([1, [2, 3], 4]).join(',') === '1,2,3,4'
    },
    {
      name: 'flattenByDepth (depth=1)',
      fn: () => flattenByDepth([1, [2, [3, 4]]], 1).join(',') === '1,2,3,4'
    },
    {
      name: 'flattenByDepth (depth=2)',
      fn: () => flattenByDepth([1, [2, [3, [4]]]], 2).join(',') === '1,2,3,4'
    },
    {
      name: 'flatMapDuplicate',
      fn: () => flatMapDuplicate(['a', 'b']).join(',') === 'a,a,b,b'
    },
    {
      name: 'expandRanges',
      fn: () => expandRanges([1, 2]).join(',') === '1,1,2'
    },
    {
      name: 'flattenComplex',
      fn: () => flattenComplex([1, [2, [3, [4, [5]]]]]).join(',') === '1,2,3,4,5'
    }
  ];

  tests.forEach(test => {
    try {
      const passed = test.fn();
      console.log(`${passed ? '✅' : '❌'} ${test.name}`);
    } catch (error) {
      console.log(`❌ ${test.name} - Error: ${error.message}`);
    }
  });

  console.log('\n✅ Tests completados');
}

// Ejecutar tests al correr el archivo
if (require.main === module) {
  runTests();
}

module.exports = {
  flattenSimple,
  flattenByDepth,
  flatMapDuplicate,
  expandRanges,
  flatMapFilter,
  flattenComplex,
  flatMapUsers,
  flatMapClean
};
