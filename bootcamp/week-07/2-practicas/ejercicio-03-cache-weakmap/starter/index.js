/**
 * 🔒 Ejercicio 3: Cache con WeakMap - Starter
 */

// Tarea 1: Cache de Resultados
export const createResultCache = () => {
  // TODO: Crea un WeakMap privado

  return {
    set: (obj, result) => {
      // TODO: Almacena result asociado a obj
      // Pista: weakMap.set(obj, result)
    },
    get: obj => {
      // TODO: Retorna el resultado cacheado
      // Pista: weakMap.get(obj)
    },
  };
};

// Tarea 2: Memoización
export const memoize = fn => {
  // TODO: Crea un WeakMap para cachear resultados

  return obj => {
    // TODO: Si obj ya está en cache, retorna resultado cacheado
    // Pista: if (cache.has(obj)) return cache.get(obj)
    // TODO: Si no, ejecuta fn(obj), guarda en cache y retorna
    // const result = fn(obj); cache.set(obj, result); return result;
  };
};

// Tarea 3: Metadata Store
export const createMetadataStore = () => {
  // TODO: Crea WeakMap interno

  return {
    set: (obj, metadata) => {
      // TODO: Almacena metadata
    },
    get: obj => {
      // TODO: Retorna metadata
    },
    has: obj => {
      // TODO: Verifica si obj tiene metadata
    },
  };
};

// Tarea 4: Get or Initialize
export const getOrInit = (weakMap, obj, initFn) => {
  // TODO: Si weakMap.has(obj), retorna weakMap.get(obj)
  // TODO: Si no, ejecuta initFn(), guarda en weakMap y retorna
};

// ========================================
// 🧪 TESTS
// ========================================

console.log('🧪 Ejecutando tests...\n');

console.log('Test 1: createResultCache');
try {
  const cache = createResultCache();
  const obj = { id: 1 };
  cache.set(obj, 'cached-result');
  console.assert(cache.get(obj) === 'cached-result', '❌ Falla');
  console.log('✅ createResultCache pasa\n');
} catch (e) {
  console.log('❌ createResultCache:', e.message, '\n');
}

console.log('Test 2: memoize');
try {
  let callCount = 0;
  const expensive = obj => {
    callCount++;
    return obj.value * 2;
  };
  const memoized = memoize(expensive);
  const obj = { value: 5 };

  console.assert(memoized(obj) === 10, '❌ Resultado incorrecto');
  console.assert(memoized(obj) === 10, '❌ Resultado incorrecto');
  console.assert(callCount === 1, '❌ Debe memoizar (callCount debería ser 1)');
  console.log('✅ memoize pasa\n');
} catch (e) {
  console.log('❌ memoize:', e.message, '\n');
}

console.log('Test 3: createMetadataStore');
try {
  const store = createMetadataStore();
  const obj = {};
  store.set(obj, { created: Date.now() });
  console.assert(store.has(obj), '❌ Falla has');
  console.assert(store.get(obj).created, '❌ Falla get');
  console.log('✅ createMetadataStore pasa\n');
} catch (e) {
  console.log('❌ createMetadataStore:', e.message, '\n');
}

console.log('Test 4: getOrInit');
try {
  const map = new WeakMap();
  const obj = {};
  const result = getOrInit(map, obj, () => ({ initialized: true }));
  console.assert(result.initialized === true, '❌ Falla');
  console.log('✅ getOrInit pasa\n');
} catch (e) {
  console.log('❌ getOrInit:', e.message, '\n');
}

console.log('✨ Tests completados');
