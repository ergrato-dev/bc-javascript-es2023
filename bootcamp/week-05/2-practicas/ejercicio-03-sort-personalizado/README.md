# 🔽 Ejercicio 3: Sort Personalizado

## 📌 Descripción

Dominarás la función comparadora de `sort()`, trabajarás con diferentes tipos de datos, implementarás ordenamientos con múltiples criterios.

## 🎯 Objetivos

- ✅ Sort numérico correcto
- ✅ Sort de strings con localeCompare
- ✅ Sort de objetos complejos
- ✅ Múltiples criterios de ordenamiento

## 📝 Tareas

### Tarea 1: Sort Numérico Ascendente
```javascript
sortAscending([10, 5, 40, 25, 1000, 1]);
// Esperado: [1, 5, 10, 25, 40, 1000]
```

### Tarea 2: Sort Numérico Descendente
```javascript
sortDescending([10, 5, 40, 25, 1000, 1]);
// Esperado: [1000, 40, 25, 10, 5, 1]
```

### Tarea 3: Sort de Strings (Case-Insensitive)
```javascript
sortStrings(['Zebra', 'apple', 'Banana']);
// Esperado: ['apple', 'Banana', 'Zebra']
```

### Tarea 4: Sort de Objetos por Propiedad Numérica
```javascript
sortByAge([
  { name: 'Ana', age: 28 },
  { name: 'Bob', age: 25 }
]);
// Esperado: [{ name: 'Bob', age: 25 }, { name: 'Ana', age: 28 }]
```

### Tarea 5: Sort por Múltiples Criterios
```javascript
sortMultiCriteria([
  { dept: 'IT', salary: 5000 },
  { dept: 'HR', salary: 4000 },
  { dept: 'IT', salary: 4500 }
]);
// Ordenar por dept, luego por salary descendente
```

## 📁 Archivos

- [starter/index.js](starter/index.js)
- [solution/index.js](solution/index.js)

---

**Tiempo estimado**: 45 minutos | **Dificultad**: ⭐⭐ Intermedio
