/**
 * 🗄️ Ejercicio 4: Registros Ordenados - Starter
 */

// Tarea 1: Registro Ordenado
export const createOrderedRegistry = () => {
  // TODO: Crea un Map para almacenar items por ID

  return {
    add: item => {
      // TODO: Almacena item usando item.id como clave
      // Pista: map.set(item.id, item)
    },
    getById: id => {
      // TODO: Retorna item por ID
      // Pista: map.get(id)
    },
    getAll: () => {
      // TODO: Retorna array de todos los items en orden
      // Pista: [...map.values()]
    },
  };
};

// Tarea 2: Índice de Tags
export const createTagIndex = () => {
  // TODO: Crea Map donde clave=tag, valor=Set de itemIds

  return {
    add: (itemId, tags) => {
      // TODO: Para cada tag, añade itemId al Set correspondiente
      // Si el tag no existe: index.set(tag, new Set())
      // Luego: index.get(tag).add(itemId)
    },
    getByTag: tag => {
      // TODO: Retorna Set de itemIds para ese tag
      // Pista: index.get(tag) || new Set()
    },
  };
};

// Tarea 3: Registro con Timestamps
export const createTimestampedRegistry = () => {
  // TODO: Crea Map para items con { data, timestamp }

  return {
    add: (id, data) => {
      // TODO: Almacena { data, timestamp: Date.now() }
    },
    getRecent: n => {
      // TODO: Convierte Map a array, ordena por timestamp desc, toma n primeros
      // Pista: [...map.entries()].sort((a, b) => b[1].timestamp - a[1].timestamp).slice(0, n)
    },
  };
};

// Tarea 4: Set Operations
export const setOperations = (setA, setB) => {
  // TODO: Calcula union: new Set([...setA, ...setB])

  // TODO: Calcula intersection: [...setA].filter(x => setB.has(x))

  // TODO: Calcula difference (A - B): [...setA].filter(x => !setB.has(x))

  return {
    union: null, // TODO
    intersection: null, // TODO
    difference: null, // TODO
  };
};

// Tarea 5: Multi-Index Store
export const createMultiIndexStore = () => {
  // TODO: Crea:
  // - Map para items por ID
  // - Map para items por categoría (category → Set de IDs)
  // - Map para items por tag (tag → Set de IDs)

  return {
    add: item => {
      // TODO: Almacena en índice principal
      // TODO: Añade a índice de categorías
      // TODO: Añade a índice de tags (para cada tag)
    },
    findByCategory: category => {
      // TODO: Obtén Set de IDs de esa categoría
      // TODO: Mapea IDs a items completos
    },
    findByTag: tag => {
      // TODO: Obtén Set de IDs con ese tag
      // TODO: Mapea IDs a items completos
    },
  };
};

// ========================================
// 🧪 TESTS
// ========================================

console.log('🧪 Ejecutando tests...\n');

console.log('Test 1: createOrderedRegistry');
try {
  const reg = createOrderedRegistry();
  reg.add({ id: 1, name: 'Alice' });
  reg.add({ id: 2, name: 'Bob' });
  console.assert(reg.getById(1).name === 'Alice', '❌ Falla');
  console.assert(reg.getAll().length === 2, '❌ Falla');
  console.log('✅ createOrderedRegistry pasa\n');
} catch (e) {
  console.log('❌ createOrderedRegistry:', e.message, '\n');
}

console.log('Test 2: createTagIndex');
try {
  const index = createTagIndex();
  index.add('article-1', ['js', 'tutorial']);
  index.add('article-2', ['js', 'advanced']);
  const jsArticles = index.getByTag('js');
  console.assert(jsArticles.size === 2, '❌ Falla');
  console.log('✅ createTagIndex pasa\n');
} catch (e) {
  console.log('❌ createTagIndex:', e.message, '\n');
}

console.log('Test 3: setOperations');
try {
  const ops = setOperations(new Set([1, 2, 3]), new Set([2, 3, 4]));
  console.assert(ops.union.size === 4, '❌ Union falla');
  console.assert(ops.intersection.size === 2, '❌ Intersection falla');
  console.assert(ops.difference.size === 1, '❌ Difference falla');
  console.log('✅ setOperations pasa\n');
} catch (e) {
  console.log('❌ setOperations:', e.message, '\n');
}

console.log('✨ Tests completados');
