# 📚 Transformaciones de Datos

## 🎯 Objetivos

- Dominar patrones de transformación de datos con arrays
- Aplicar técnicas de normalización y desnormalización
- Implementar agrupación, pivoteo y agregación
- Transformar entre diferentes estructuras de datos

---

## 📖 Introducción

La **transformación de datos** es una de las tareas más comunes en JavaScript. Convertir datos de una estructura a otra, normalizar formatos, agrupar información y calcular agregados son operaciones fundamentales.

```javascript
// Datos crudos de API
const rawData = [
  { id: 1, name: 'Ana', department: 'IT', salary: 5000 },
  { id: 2, name: 'Luis', department: 'HR', salary: 4000 },
  { id: 3, name: 'María', department: 'IT', salary: 5500 }
];

// Transformar a: { IT: [...], HR: [...] }
```

---

## 1️⃣ Normalización de Datos

### De Array a Objeto Indexado (Normalizar)

```javascript
const users = [
  { id: 1, name: 'Ana', email: 'ana@mail.com' },
  { id: 2, name: 'Luis', email: 'luis@mail.com' },
  { id: 3, name: 'María', email: 'maria@mail.com' }
];

// Normalizar: indexar por ID para acceso O(1)
const usersById = users.reduce((acc, user) => {
  acc[user.id] = user;
  return acc;
}, {});

console.log(usersById);
// {
//   1: { id: 1, name: 'Ana', email: 'ana@mail.com' },
//   2: { id: 2, name: 'Luis', email: 'luis@mail.com' },
//   3: { id: 3, name: 'María', email: 'maria@mail.com' }
// }

// Acceso rápido
console.log(usersById[2].name); // 'Luis'
```

### De Objeto a Array (Desnormalizar)

```javascript
const usersById = {
  1: { id: 1, name: 'Ana' },
  2: { id: 2, name: 'Luis' },
  3: { id: 3, name: 'María' }
};

// Desnormalizar: convertir a array
const usersArray = Object.values(usersById);

console.log(usersArray);
// [
//   { id: 1, name: 'Ana' },
//   { id: 2, name: 'Luis' },
//   { id: 3, name: 'María' }
// ]

// Con Object.entries si necesitas las keys
const withKeys = Object.entries(usersById).map(([id, user]) => ({
  ...user,
  stringId: id
}));
```

### Normalización de Estructura Anidada

```javascript
// Datos anidados (común en APIs)
const orders = [
  {
    id: 1,
    customer: { id: 101, name: 'Ana' },
    items: [
      { productId: 'P1', qty: 2 },
      { productId: 'P2', qty: 1 }
    ]
  },
  {
    id: 2,
    customer: { id: 102, name: 'Luis' },
    items: [
      { productId: 'P1', qty: 1 }
    ]
  }
];

// Normalizar a estructura plana
const normalized = {
  orders: {},
  customers: {},
  orderItems: []
};

orders.forEach(order => {
  // Normalizar customer
  normalized.customers[order.customer.id] = order.customer;

  // Normalizar order (sin anidamiento)
  normalized.orders[order.id] = {
    id: order.id,
    customerId: order.customer.id
  };

  // Normalizar items
  order.items.forEach(item => {
    normalized.orderItems.push({
      orderId: order.id,
      ...item
    });
  });
});

console.log(normalized);
```

---

## 2️⃣ Agrupación (Group By)

### Agrupar por Propiedad

```javascript
const employees = [
  { name: 'Ana', department: 'IT', salary: 5000 },
  { name: 'Luis', department: 'HR', salary: 4000 },
  { name: 'María', department: 'IT', salary: 5500 },
  { name: 'Carlos', department: 'HR', salary: 4200 }
];

// Agrupar por departamento
const byDepartment = employees.reduce((groups, employee) => {
  const dept = employee.department;
  groups[dept] = groups[dept] || [];
  groups[dept].push(employee);
  return groups;
}, {});

console.log(byDepartment);
// {
//   IT: [
//     { name: 'Ana', department: 'IT', salary: 5000 },
//     { name: 'María', department: 'IT', salary: 5500 }
//   ],
//   HR: [
//     { name: 'Luis', department: 'HR', salary: 4000 },
//     { name: 'Carlos', department: 'HR', salary: 4200 }
//   ]
// }
```

### Función `groupBy` Reutilizable

```javascript
const groupBy = (array, keyFn) =>
  array.reduce((groups, item) => {
    const key = typeof keyFn === 'function' ? keyFn(item) : item[keyFn];
    groups[key] = groups[key] || [];
    groups[key].push(item);
    return groups;
  }, {});

// Uso con string (nombre de propiedad)
const byDept = groupBy(employees, 'department');

// Uso con función (para lógica compleja)
const bySalaryRange = groupBy(employees, emp =>
  emp.salary >= 5000 ? 'high' : 'low'
);

console.log(bySalaryRange);
// {
//   high: [{ name: 'Ana', ... }, { name: 'María', ... }],
//   low: [{ name: 'Luis', ... }, { name: 'Carlos', ... }]
// }
```

### Object.groupBy() (ES2024)

```javascript
// Nueva API nativa (ES2024)
const byDepartment = Object.groupBy(employees, emp => emp.department);

// Equivalente a nuestra función groupBy
console.log(byDepartment);
```

---

## 3️⃣ Agregaciones

### Totales y Promedios

```javascript
const sales = [
  { product: 'A', amount: 100, qty: 2 },
  { product: 'B', amount: 200, qty: 1 },
  { product: 'A', amount: 150, qty: 3 },
  { product: 'B', amount: 180, qty: 2 }
];

// Estadísticas generales
const stats = sales.reduce((acc, sale) => ({
  totalAmount: acc.totalAmount + sale.amount,
  totalQty: acc.totalQty + sale.qty,
  count: acc.count + 1
}), { totalAmount: 0, totalQty: 0, count: 0 });

stats.avgAmount = stats.totalAmount / stats.count;

console.log(stats);
// { totalAmount: 630, totalQty: 8, count: 4, avgAmount: 157.5 }
```

### Agregaciones por Grupo

```javascript
// Totales por producto
const salesByProduct = sales.reduce((acc, sale) => {
  if (!acc[sale.product]) {
    acc[sale.product] = {
      product: sale.product,
      totalAmount: 0,
      totalQty: 0,
      count: 0
    };
  }
  acc[sale.product].totalAmount += sale.amount;
  acc[sale.product].totalQty += sale.qty;
  acc[sale.product].count += 1;
  return acc;
}, {});

console.log(Object.values(salesByProduct));
// [
//   { product: 'A', totalAmount: 250, totalQty: 5, count: 2 },
//   { product: 'B', totalAmount: 380, totalQty: 3, count: 2 }
// ]
```

### Función de Agregación Genérica

```javascript
const aggregate = (array, groupKey, aggregations) => {
  const grouped = array.reduce((acc, item) => {
    const key = item[groupKey];
    if (!acc[key]) {
      acc[key] = { [groupKey]: key, _items: [] };
    }
    acc[key]._items.push(item);
    return acc;
  }, {});

  // Aplicar agregaciones
  return Object.values(grouped).map(group => {
    const result = { [groupKey]: group[groupKey] };

    for (const [name, fn] of Object.entries(aggregations)) {
      result[name] = fn(group._items);
    }

    return result;
  });
};

// Uso
const summary = aggregate(sales, 'product', {
  totalAmount: items => items.reduce((s, i) => s + i.amount, 0),
  avgAmount: items => items.reduce((s, i) => s + i.amount, 0) / items.length,
  maxAmount: items => Math.max(...items.map(i => i.amount)),
  count: items => items.length
});

console.log(summary);
// [
//   { product: 'A', totalAmount: 250, avgAmount: 125, maxAmount: 150, count: 2 },
//   { product: 'B', totalAmount: 380, avgAmount: 190, maxAmount: 200, count: 2 }
// ]
```

---

## 4️⃣ Pivoteo de Datos

### De Filas a Columnas

```javascript
const monthlyData = [
  { month: 'Jan', product: 'A', sales: 100 },
  { month: 'Jan', product: 'B', sales: 150 },
  { month: 'Feb', product: 'A', sales: 120 },
  { month: 'Feb', product: 'B', sales: 180 }
];

// Pivotar: productos como columnas
const pivoted = monthlyData.reduce((acc, item) => {
  const existing = acc.find(row => row.month === item.month);

  if (existing) {
    existing[item.product] = item.sales;
  } else {
    acc.push({
      month: item.month,
      [item.product]: item.sales
    });
  }

  return acc;
}, []);

console.log(pivoted);
// [
//   { month: 'Jan', A: 100, B: 150 },
//   { month: 'Feb', A: 120, B: 180 }
// ]
```

### De Columnas a Filas (Unpivot)

```javascript
const pivotedData = [
  { month: 'Jan', A: 100, B: 150 },
  { month: 'Feb', A: 120, B: 180 }
];

// Unpivot: volver a formato largo
const unpivoted = pivotedData.flatMap(row => {
  const { month, ...products } = row;
  return Object.entries(products).map(([product, sales]) => ({
    month,
    product,
    sales
  }));
});

console.log(unpivoted);
// [
//   { month: 'Jan', product: 'A', sales: 100 },
//   { month: 'Jan', product: 'B', sales: 150 },
//   { month: 'Feb', product: 'A', sales: 120 },
//   { month: 'Feb', product: 'B', sales: 180 }
// ]
```

---

## 5️⃣ Transformaciones Complejas

### Pipeline de Transformación

```javascript
const rawUsers = [
  { first_name: 'ana', last_name: 'garcia', birth_date: '1990-05-15', status: 'A' },
  { first_name: 'luis', last_name: 'martinez', birth_date: '1985-10-22', status: 'I' },
  { first_name: 'maria', last_name: 'lopez', birth_date: '1995-03-08', status: 'A' }
];

// Funciones de transformación
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

const calculateAge = birthDate => {
  const birth = new Date(birthDate);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
};

const statusMap = { A: 'Active', I: 'Inactive' };

// Pipeline completo
const transformedUsers = rawUsers
  .filter(u => u.status === 'A')
  .map(u => ({
    fullName: `${capitalize(u.first_name)} ${capitalize(u.last_name)}`,
    age: calculateAge(u.birth_date),
    status: statusMap[u.status],
    isAdult: calculateAge(u.birth_date) >= 18
  }))
  .sort((a, b) => a.fullName.localeCompare(b.fullName));

console.log(transformedUsers);
// [
//   { fullName: 'Ana Garcia', age: 34, status: 'Active', isAdult: true },
//   { fullName: 'Maria Lopez', age: 29, status: 'Active', isAdult: true }
// ]
```

### Merge de Arrays

```javascript
const users = [
  { id: 1, name: 'Ana' },
  { id: 2, name: 'Luis' },
  { id: 3, name: 'María' }
];

const orders = [
  { userId: 1, product: 'Laptop', amount: 1000 },
  { userId: 1, product: 'Mouse', amount: 25 },
  { userId: 2, product: 'Keyboard', amount: 75 }
];

// Merge: usuarios con sus órdenes
const usersWithOrders = users.map(user => ({
  ...user,
  orders: orders.filter(order => order.userId === user.id),
  totalSpent: orders
    .filter(order => order.userId === user.id)
    .reduce((sum, order) => sum + order.amount, 0)
}));

console.log(usersWithOrders);
// [
//   { id: 1, name: 'Ana', orders: [...], totalSpent: 1025 },
//   { id: 2, name: 'Luis', orders: [...], totalSpent: 75 },
//   { id: 3, name: 'María', orders: [], totalSpent: 0 }
// ]
```

### Diferencias y Uniones

```javascript
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

// Unión (sin duplicados)
const union = [...new Set([...array1, ...array2])];
console.log(union); // [1, 2, 3, 4, 5, 6, 7, 8]

// Intersección
const intersection = array1.filter(x => array2.includes(x));
console.log(intersection); // [4, 5]

// Diferencia (en array1 pero no en array2)
const difference = array1.filter(x => !array2.includes(x));
console.log(difference); // [1, 2, 3]

// Diferencia simétrica (en uno u otro, pero no ambos)
const symmetricDiff = [
  ...array1.filter(x => !array2.includes(x)),
  ...array2.filter(x => !array1.includes(x))
];
console.log(symmetricDiff); // [1, 2, 3, 6, 7, 8]
```

---

## 6️⃣ Utilidades Reutilizables

### Colección de Funciones de Transformación

```javascript
const transforms = {
  // Agrupar por clave
  groupBy: (arr, key) => arr.reduce((acc, item) => {
    const k = typeof key === 'function' ? key(item) : item[key];
    (acc[k] = acc[k] || []).push(item);
    return acc;
  }, {}),

  // Indexar por clave
  keyBy: (arr, key) => arr.reduce((acc, item) => {
    acc[item[key]] = item;
    return acc;
  }, {}),

  // Contar ocurrencias
  countBy: (arr, key) => arr.reduce((acc, item) => {
    const k = typeof key === 'function' ? key(item) : item[key];
    acc[k] = (acc[k] || 0) + 1;
    return acc;
  }, {}),

  // Sumar por clave
  sumBy: (arr, key) => arr.reduce((sum, item) =>
    sum + (typeof key === 'function' ? key(item) : item[key]), 0
  ),

  // Único por clave
  uniqBy: (arr, key) => {
    const seen = new Set();
    return arr.filter(item => {
      const k = typeof key === 'function' ? key(item) : item[key];
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    });
  },

  // Ordenar por múltiples claves
  sortBy: (arr, ...keys) => [...arr].sort((a, b) => {
    for (const key of keys) {
      const aVal = a[key];
      const bVal = b[key];
      if (aVal < bVal) return -1;
      if (aVal > bVal) return 1;
    }
    return 0;
  })
};

// Uso
const data = [
  { name: 'Ana', dept: 'IT', salary: 5000 },
  { name: 'Luis', dept: 'HR', salary: 4000 },
  { name: 'María', dept: 'IT', salary: 5500 }
];

console.log(transforms.groupBy(data, 'dept'));
console.log(transforms.sumBy(data, 'salary')); // 14500
console.log(transforms.countBy(data, 'dept')); // { IT: 2, HR: 1 }
```

---

## 📋 Diagrama Visual

![Diagrama Transformaciones](../0-assets/04-transformaciones.svg)

---

## ✅ Checklist de Verificación

Antes de continuar, asegúrate de poder:

- [ ] Normalizar datos de array a objeto indexado
- [ ] Desnormalizar de objeto a array
- [ ] Agrupar datos por una propiedad
- [ ] Calcular agregaciones (sum, avg, count, max, min)
- [ ] Pivotar datos de filas a columnas
- [ ] Hacer merge de múltiples arrays
- [ ] Calcular unión, intersección y diferencia
- [ ] Crear funciones de transformación reutilizables

---

## 🔗 Recursos Adicionales

- 📖 [MDN - Array.prototype.reduce()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- 📖 [JavaScript.info - Array methods](https://javascript.info/array-methods)

---

## 🧭 Navegación

| ⬅️ Anterior | 🏠 Índice | ➡️ Siguiente |
|-------------|-----------|--------------|
| [Chaining Avanzado](03-chaining-avanzado.md) | [Teoría](.) | [Sort Personalizado](05-sort-personalizado.md) |
