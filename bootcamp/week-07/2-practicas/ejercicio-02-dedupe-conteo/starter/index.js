/**
 * 🗺️ Ejercicio 2: Mapeo y Conteo con Map - Starter
 */

// Tarea 1: Contar Palabras
export const wordCount = text => {
  // TODO: Convierte el texto a minúsculas y separa en palabras
  // Pista: text.toLowerCase().split(/\s+/)
  // TODO: Crea un Map para contar frecuencias
  // Para cada palabra: map.set(word, (map.get(word) || 0) + 1)
};

// Tarea 2: Agrupar por Categoría
export const groupByCategory = products => {
  // TODO: Crea un Map vacío
  // TODO: Para cada producto, agrupa por category
  // Si la categoría no existe: map.set(category, [])
  // Luego: map.get(category).push(product.name)
};

// Tarea 3: Top N Elementos
export const topN = (items, n) => {
  // TODO: Usa un Map para contar frecuencias de cada item
  // TODO: Convierte el Map a array de pares [item, count]
  // Pista: [...map.entries()]
  // TODO: Ordena por count descendente
  // Pista: .sort((a, b) => b[1] - a[1])
  // TODO: Toma los primeros n elementos y extrae solo los items
  // Pista: .slice(0, n).map(([item]) => item)
};

// Tarea 4: Crear Índice Bidireccional
export const createBidirectionalMap = pairs => {
  // TODO: Crea dos Maps: forward y reverse
  // TODO: Para cada par [key, value]:
  // forward.set(key, value)
  // reverse.set(value, key)
  // TODO: Retorna { forward, reverse }
};

// Tarea 5: Contar Caracteres Únicos
export const uniqueChars = str => {
  // TODO: Crea un Map para contar cada carácter
  // TODO: Itera sobre cada carácter del string
  // Para cada char: map.set(char, (map.get(char) || 0) + 1)
};

// Tarea 6: Fusionar Maps
export const mergeMaps = (map1, map2) => {
  // TODO: Crea un nuevo Map copiando map1
  // Pista: new Map(map1)
  // TODO: Itera sobre map2 y añade/sobreescribe entradas
  // for (const [key, value] of map2) { result.set(key, value) }
};

// ========================================
// 🧪 TESTS
// ========================================

console.log('🧪 Ejecutando tests...\n');

// Test 1
console.log('Test 1: wordCount');
try {
  const counts = wordCount('Hola mundo hola');
  console.assert(counts.get('hola') === 2, '❌ wordCount falla');
  console.assert(counts.get('mundo') === 1, '❌ wordCount falla');
  console.log('✅ wordCount pasa');
} catch (e) {
  console.log('❌ wordCount:', e.message);
}

// Test 2
console.log('\nTest 2: groupByCategory');
try {
  const products = [
    { name: 'Laptop', category: 'Electronics' },
    { name: 'Mouse', category: 'Electronics' },
  ];
  const grouped = groupByCategory(products);
  console.assert(
    grouped.get('Electronics').length === 2,
    '❌ groupByCategory falla'
  );
  console.log('✅ groupByCategory pasa');
} catch (e) {
  console.log('❌ groupByCategory:', e.message);
}

// Test 3
console.log('\nTest 3: topN');
try {
  const top = topN(['a', 'b', 'a', 'c', 'a', 'b'], 2);
  console.assert(top[0] === 'a' && top[1] === 'b', '❌ topN falla');
  console.log('✅ topN pasa');
} catch (e) {
  console.log('❌ topN:', e.message);
}

// Test 4
console.log('\nTest 4: createBidirectionalMap');
try {
  const { forward, reverse } = createBidirectionalMap([['es', 'España']]);
  console.assert(forward.get('es') === 'España', '❌ forward falla');
  console.assert(reverse.get('España') === 'es', '❌ reverse falla');
  console.log('✅ createBidirectionalMap pasa');
} catch (e) {
  console.log('❌ createBidirectionalMap:', e.message);
}

console.log('\n✨ Tests completados');
