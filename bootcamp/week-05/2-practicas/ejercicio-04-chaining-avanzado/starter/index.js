/**
 * EJERCICIO 4: CHAINING AVANZADO
 */

const filterAndTransform = numbers => {
  // TODO: Filter pares, map *2, sort asc, slice top 3
};

const processUsers = users => {
  // TODO: Filter activos, map {name, email}, sort alfabeticamente
};

const flatMapProcessing = data => {
  // TODO: flatMap tags, filter length > 3, map uppercase, unique
};

const analyzeData = salesData => {
  // TODO: Análisis complejo de datos
  // Filter por mes, agrupar por región, calcular totales
};

function runTests() {
  console.log('🧪 Ejecutando tests...\n');

  const tests = [
    {
      name: 'filterAndTransform',
      fn: () => {
        const result = filterAndTransform([1, 2, 3, 4, 5, 6]);
        return Array.isArray(result) && result.length <= 3;
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

  console.log(`\n📊 ${passed}/${tests.length} tests pasados`);
}

if (require.main === module) runTests();

module.exports = {
  filterAndTransform,
  processUsers,
  flatMapProcessing,
  analyzeData,
};
