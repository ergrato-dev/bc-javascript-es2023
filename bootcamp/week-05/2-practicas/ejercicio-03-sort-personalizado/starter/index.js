/**
 * EJERCICIO 3: SORT PERSONALIZADO
 */

const sortAscending = numbers => {
  // TODO: Sort de números en orden ascendente
};

const sortDescending = numbers => {
  // TODO: Sort de números en orden descendente
};

const sortStrings = strings => {
  // TODO: Sort de strings case-insensitive
};

const sortByAge = people => {
  // TODO: Sort por propiedad age
};

const sortMultiCriteria = items => {
  // TODO: Sort por dept (asc), luego salary (desc)
};

const sortByDate = events => {
  // TODO: Sort por fecha (date property)
};

function runTests() {
  console.log('🧪 Ejecutando tests...\n');

  const tests = [
    {
      name: 'sortAscending',
      fn: () =>
        JSON.stringify(sortAscending([10, 5, 40])) ===
        JSON.stringify([5, 10, 40]),
    },
    {
      name: 'sortDescending',
      fn: () =>
        JSON.stringify(sortDescending([10, 5, 40])) ===
        JSON.stringify([40, 10, 5]),
    },
    {
      name: 'sortByAge',
      fn: () => {
        const result = sortByAge([{ age: 28 }, { age: 25 }]);
        return result[0].age === 25;
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
  sortAscending,
  sortDescending,
  sortStrings,
  sortByAge,
  sortMultiCriteria,
  sortByDate,
};
