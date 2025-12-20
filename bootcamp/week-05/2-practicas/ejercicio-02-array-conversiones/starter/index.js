/**
 * EJERCICIO 2: ARRAY.FROM() Y CONVERSIONES
 *
 * Completa las siguientes funciones usando Array.from() y Array.of()
 */

// ============================================
// TAREA 1: Convertir Array-like a Array
// ============================================

const convertArrayLike = arrayLike => {
  // TODO: Convertir objeto array-like a array usando Array.from()
};

// ============================================
// TAREA 2: Array.from() con Mapeo
// ============================================

const mapFromArrayLike = (arrayLike, mapFn) => {
  // TODO: Usar Array.from() con función de mapeo
};

// ============================================
// TAREA 3: Convertir String a Array
// ============================================

const stringToArray = str => {
  // TODO: Convertir string en array de caracteres
};

// ============================================
// TAREA 4: Crear Range
// ============================================

const createRange = (start, end) => {
  // TODO: Crear array de números de start a end
  // Pista: Usa Array.from({ length: end - start + 1 }, ...)
};

// ============================================
// TAREA 5: Array.of() - Seguro
// ============================================

const safeArrayOf = (...elements) => {
  // TODO: Usar Array.of() para crear array seguro
};

// ============================================
// TAREA 6: Procesar Array de Objetos
// ============================================

const processNodeList = nodeArray => {
  // TODO: Convertir a array y extraer IDs de cada objeto
  return Array.from(nodeArray).map(/* TODO */);
};

// ============================================
// TAREA 7: Crear Array de Objetos
// ============================================

const createObjectArray = count => {
  // TODO: Crear array de 'count' objetos vacíos
  // Pista: Array.from({ length: count }, () => ({}))
};

// ============================================
// TAREA 8: Llenar Array
// ============================================

const fillArray = (size, value) => {
  // TODO: Crear array de 'size' elementos con 'value'
};

// ============================================
// TESTS
// ============================================

function runTests() {
  console.log('🧪 Ejecutando tests...\n');

  const tests = [
    {
      name: 'convertArrayLike',
      fn: () => {
        const obj = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
        const result = convertArrayLike(obj);
        return JSON.stringify(result) === JSON.stringify(['a', 'b', 'c']);
      },
    },
    {
      name: 'mapFromArrayLike',
      fn: () => {
        const obj = { 0: 1, 1: 2, 2: 3, length: 3 };
        const result = mapFromArrayLike(obj, x => x * 2);
        return JSON.stringify(result) === JSON.stringify([2, 4, 6]);
      },
    },
    {
      name: 'stringToArray',
      fn: () => {
        const result = stringToArray('hello');
        return (
          JSON.stringify(result) === JSON.stringify(['h', 'e', 'l', 'l', 'o'])
        );
      },
    },
    {
      name: 'createRange',
      fn: () => {
        const result = createRange(1, 5);
        return JSON.stringify(result) === JSON.stringify([1, 2, 3, 4, 5]);
      },
    },
    {
      name: 'safeArrayOf',
      fn: () => {
        const result = safeArrayOf(1, 2, 3);
        return (
          JSON.stringify(result) === JSON.stringify([1, 2, 3]) &&
          JSON.stringify(safeArrayOf(5)) === JSON.stringify([5])
        );
      },
    },
    {
      name: 'createObjectArray',
      fn: () => {
        const result = createObjectArray(2);
        return (
          Array.isArray(result) &&
          result.length === 2 &&
          result.every(item => typeof item === 'object')
        );
      },
    },
    {
      name: 'fillArray',
      fn: () => {
        const result = fillArray(3, 'x');
        return JSON.stringify(result) === JSON.stringify(['x', 'x', 'x']);
      },
    },
  ];

  let passed = 0;
  tests.forEach(test => {
    try {
      if (test.fn()) {
        console.log(`✅ ${test.name}`);
        passed++;
      } else {
        console.log(`❌ ${test.name}`);
      }
    } catch (error) {
      console.log(`❌ ${test.name} - Error: ${error.message}`);
    }
  });

  console.log(`\n📊 Resultados: ${passed}/${tests.length} tests pasados`);
}

if (require.main === module) {
  runTests();
}

module.exports = {
  convertArrayLike,
  mapFromArrayLike,
  stringToArray,
  createRange,
  safeArrayOf,
  processNodeList,
  createObjectArray,
  fillArray,
};
