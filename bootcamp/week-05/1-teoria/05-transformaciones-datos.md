# 🔄 Transformaciones de Datos: Patrones Avanzados

## 🎯 Objetivos

En esta lección aprenderás a:
- ✅ Implementar patrones complejos de transformación
- ✅ Agrupar datos eficientemente
- ✅ Normalizar y desnormalizar estructuras
- ✅ Pivotar y transponer datos
- ✅ Trabajar con datos anidados complejos

![Transformaciones Avanzadas](../0-assets/05-transformations.svg)

## 📋 Contenido

### 1. Agrupamiento de Datos

#### Agrupar por Propiedad

**Patrón básico:**
```javascript
const groupBy = (array, key) => {
  return array.reduce((acc, item) => {
    const group = item[key];
    acc[group] = [...(acc[group] || []), item];
    return acc;
  }, {});
};
```

**Ejemplo:**
```javascript
const employees = [
  { name: 'Ana', department: 'IT', salary: 5000 },
  { name: 'Bob', department: 'HR', salary: 4000 },
  { name: 'Carlos', department: 'IT', salary: 4500 },
  { name: 'Diana', department: 'HR', salary: 4200 }
];

const byDepartment = employees.reduce((acc, emp) => {
  const dept = emp.department;
  acc[dept] = [...(acc[dept] || []), emp];
  return acc;
}, {});

console.log(byDepartment);
// {
//   IT: [
//     { name: 'Ana', ... },
//     { name: 'Carlos', ... }
//   ],
//   HR: [
//     { name: 'Bob', ... },
//     { name: 'Diana', ... }
//   ]
// }
```

#### Agrupar por Múltiples Criterios

```javascript
const groupByMultiple = (array, ...keys) => {
  return array.reduce((acc, item) => {
    // Construir clave compuesta
    const groupKey = keys.map(key => item[key]).join('_');
    acc[groupKey] = [...(acc[groupKey] || []), item];
    return acc;
  }, {});
};

const sales = [
  { product: 'Laptop', region: 'North', amount: 1000 },
  { product: 'Mouse', region: 'North', amount: 50 },
  { product: 'Laptop', region: 'South', amount: 900 }
];

const grouped = groupByMultiple(sales, 'product', 'region');
console.log(grouped);
// {
//   'Laptop_North': [...],
//   'Mouse_North': [...],
//   'Laptop_South': [...]
// }
```

#### Agrupar y Contar

```javascript
const groupAndCount = (array, key) => {
  return array.reduce((acc, item) => {
    const group = item[key];
    acc[group] = (acc[group] || 0) + 1;
    return acc;
  }, {});
};

const orders = [
  { status: 'completed', amount: 100 },
  { status: 'pending', amount: 50 },
  { status: 'completed', amount: 200 }
];

const statusCount = groupAndCount(orders, 'status');
console.log(statusCount);
// { completed: 2, pending: 1 }
```

### 2. Agregación de Datos

#### Suma por Grupo

```javascript
const sumByGroup = (array, groupKey, sumKey) => {
  return array.reduce((acc, item) => {
    const group = item[groupKey];
    if (!acc[group]) {
      acc[group] = 0;
    }
    acc[group] += item[sumKey];
    return acc;
  }, {});
};

const transactions = [
  { category: 'Food', amount: 25 },
  { category: 'Transport', amount: 50 },
  { category: 'Food', amount: 30 }
];

const totalByCategory = sumByGroup(transactions, 'category', 'amount');
console.log(totalByCategory);
// { Food: 55, Transport: 50 }
```

#### Estadísticas por Grupo

```javascript
const statistics = (array, groupKey, valueKey) => {
  return array.reduce((acc, item) => {
    const group = item[groupKey];
    const value = item[valueKey];

    if (!acc[group]) {
      acc[group] = { sum: 0, count: 0, values: [] };
    }

    acc[group].sum += value;
    acc[group].count += 1;
    acc[group].values.push(value);

    return acc;
  }, ({}));
};

// Luego calcular promedios, min, max
const stats = statistics(transactions, 'category', 'amount');
const enriched = Object.entries(stats).reduce((acc, [key, stat]) => {
  acc[key] = {
    ...stat,
    average: stat.sum / stat.count,
    min: Math.min(...stat.values),
    max: Math.max(...stat.values)
  };
  return acc;
}, {});

console.log(enriched);
// {
//   Food: { sum: 55, count: 2, average: 27.5, min: 25, max: 30, ... },
//   Transport: { sum: 50, count: 1, average: 50, min: 50, max: 50, ... }
// }
```

### 3. Normalización de Datos

#### Plataforma Anidada → Flat

```javascript
// Datos anidados complejos
const data = [
  {
    id: 1,
    name: 'Proyecto A',
    tasks: [
      { id: 101, title: 'Tarea 1', subtasks: [{ id: 1001, name: 'Sub 1' }] },
      { id: 102, title: 'Tarea 2', subtasks: [] }
    ]
  }
];

// Normalizar: crear arrays planos para cada entidad
const normalize = (data) => {
  const projects = [];
  const tasks = [];
  const subtasks = [];

  data.forEach(project => {
    projects.push({ id: project.id, name: project.name });

    project.tasks.forEach(task => {
      tasks.push({ id: task.id, title: task.title, projectId: project.id });

      task.subtasks.forEach(subtask => {
        subtasks.push({ ...subtask, taskId: task.id });
      });
    });
  });

  return { projects, tasks, subtasks };
};

const normalized = normalize(data);
console.log(normalized);
// {
//   projects: [{ id: 1, name: 'Proyecto A' }],
//   tasks: [
//     { id: 101, title: 'Tarea 1', projectId: 1 },
//     { id: 102, title: 'Tarea 2', projectId: 1 }
//   ],
//   subtasks: [
//     { id: 1001, name: 'Sub 1', taskId: 101 }
//   ]
// }
```

#### Flat → Desnormalized (Reconstruir)

```javascript
const denormalize = ({ projects, tasks, subtasks }) => {
  return projects.map(project => ({
    ...project,
    tasks: tasks
      .filter(t => t.projectId === project.id)
      .map(task => ({
        ...task,
        subtasks: subtasks.filter(st => st.taskId === task.id)
      }))
  }));
};

const denormalized = denormalize(normalized);
```

### 4. Pivotar Datos (Transposición)

#### Filas a Columnas

```javascript
// Datos en formato fila
const data = [
  { date: '2025-01-01', product: 'A', sales: 100 },
  { date: '2025-01-01', product: 'B', sales: 150 },
  { date: '2025-01-02', product: 'A', sales: 120 },
  { date: '2025-01-02', product: 'B', sales: 130 }
];

// Transformar a formato pivot (matriz)
const pivot = (data, rowKey, colKey, valueKey) => {
  const rows = [...new Set(data.map(d => d[rowKey]))];
  const cols = [...new Set(data.map(d => d[colKey]))];

  const matrix = {};
  rows.forEach(row => {
    matrix[row] = {};
    cols.forEach(col => {
      const item = data.find(d => d[rowKey] === row && d[colKey] === col);
      matrix[row][col] = item ? item[valueKey] : 0;
    });
  });

  return { rows, cols, matrix };
};

const result = pivot(data, 'date', 'product', 'sales');
console.log(result.matrix);
// {
//   '2025-01-01': { A: 100, B: 150 },
//   '2025-01-02': { A: 120, B: 130 }
// }
```

### 5. Transformaciones Condicionales

#### Mapeo Condicional

```javascript
// Transformar según condiciones
const processOrder = (orders) => {
  return orders.map(order => {
    let status = 'pending';
    let discount = 0;

    if (order.amount > 1000) {
      discount = 0.15;
      status = 'premium';
    } else if (order.amount > 500) {
      discount = 0.10;
      status = 'VIP';
    } else if (order.customer.isRegular) {
      discount = 0.05;
    }

    return {
      ...order,
      finalAmount: order.amount * (1 - discount),
      discount,
      status
    };
  });
};
```

#### Transformación con Validación

```javascript
const validate = (schema) => (data) => {
  const errors = [];
  const validated = {};

  Object.entries(schema).forEach(([key, validator]) => {
    const value = data[key];
    const result = validator(value);

    if (result.valid) {
      validated[key] = result.value;
    } else {
      errors.push({ key, error: result.error });
    }
  });

  return {
    data: validated,
    errors,
    isValid: errors.length === 0
  };
};

// Uso
const userSchema = {
  name: (v) => {
    const valid = typeof v === 'string' && v.length > 0;
    return { valid, value: v, error: 'Nombre requerido' };
  },
  age: (v) => {
    const valid = typeof v === 'number' && v > 0;
    return { valid, value: v, error: 'Edad válida requerida' };
  }
};

const result = validate(userSchema)({ name: 'Ana', age: 28 });
```

### 6. Enriquecimiento de Datos

#### Agregar Propiedades Calculadas

```javascript
const enrichUsers = (users, orders) => {
  return users.map(user => ({
    ...user,
    orderCount: orders.filter(o => o.userId === user.id).length,
    totalSpent: orders
      .filter(o => o.userId === user.id)
      .reduce((sum, o) => sum + o.amount, 0),
    isRegular: orders.filter(o => o.userId === user.id).length > 5
  }));
};
```

#### Agregar Metadata

```javascript
const addMetadata = (items) => {
  return items.map((item, index) => ({
    ...item,
    index,
    totalCount: items.length,
    isFirst: index === 0,
    isLast: index === items.length - 1,
    position: `${index + 1}/${items.length}`
  }));
};
```

### 7. Desestructuración Avanzada en Transformaciones

```javascript
// Extraer solo campos necesarios y renombrar
const extractFields = (users) => {
  return users.map(({ firstName, lastName, email, ...rest }) => ({
    name: `${firstName} ${lastName}`,
    email,
    otherData: rest
  }));
};

// Actualizar campos específicos
const updateFields = (items, updates) => {
  return items.map(item => ({
    ...item,
    ...updates(item)
  }));
};

// Uso
const updated = updateFields(users, (user) => ({
  name: user.name.toUpperCase(),
  verified: true
}));
```

### 8. Pipeline de Transformación

#### Patrón: Función Helper

```javascript
// Crear pipeline que encadena transformaciones
const pipe = (...fns) => (data) => {
  return fns.reduce((acc, fn) => fn(acc), data);
};

// Transformaciones individuales
const filterActive = (users) => users.filter(u => u.active);
const sortByName = (users) => users.sort((a, b) => a.name.localeCompare(b.name));
const extractNames = (users) => users.map(u => u.name);

// Usar pipeline
const result = pipe(
  filterActive,
  sortByName,
  extractNames
)(users);
```

#### Compose Pattern (Orden Inverso)

```javascript
const compose = (...fns) => (data) => {
  return fns.reduceRight((acc, fn) => fn(acc), data);
};

// Mismo resultado, orden inverso
const result = compose(
  extractNames,
  sortByName,
  filterActive
)(users);
```

## ✅ Checklist de Verificación

Antes de continuar, asegúrate de:

- [ ] Agrupar datos con `reduce()`
- [ ] Calcular agregaciones (suma, promedio, min, max)
- [ ] Normalizar datos anidados
- [ ] Desnormalizar datos planos
- [ ] Pivotar datos de fila a columna
- [ ] Aplicar transformaciones condicionales
- [ ] Enriquecer datos con propiedades calculadas
- [ ] Usar patrones de pipeline

## 🔗 Recursos Adicionales

- [MDN: reduce()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [JavaScript.info: Array reduce](https://javascript.info/array-methods#reduce-reduceright)
- [Functional Programming in JavaScript](https://eloquentjavascript.net/)

## 💡 Tips y Trucos

1. **reduce() es tu mejor amigo** para transformaciones complejas
2. **Mantener inmutabilidad** usando spread operator
3. **Testear transformaciones** por separado antes de combinarlas
4. **Performance**: Considerar si necesitas normalización o no
5. **Debugging**: Usar `console.table()` para visualizar datos transformados

---

**Fin de la teoría - ¡Ahora a practicar!**
