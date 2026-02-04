# 🚀 Semana 5: Arrays Avanzados

## 🎯 Objetivos de Aprendizaje

Al finalizar esta semana, serás capaz de:

- ✅ Usar métodos avanzados como `flatMap()`, `flat()`, `Array.from()` y `Array.of()`
- ✅ Dominar `findLast()` y `findLastIndex()` para buscar desde el final (ES2023)
- ✅ Aplicar métodos inmutables: `toSorted()`, `toReversed()`, `toSpliced()`, `with()` (ES2023)
- ✅ Aplicar chaining complejo para transformaciones de datos
- ✅ Realizar transformaciones de datos complejas
- ✅ Implementar ordenamiento personalizado con `sort()` vs `toSorted()`
- ✅ Combinar múltiples métodos para resolver problemas reales

---

## 📚 Requisitos Previos

- ✅ Haber completado las Semanas 1-4
- ✅ Dominar destructuring de arrays y objetos
- ✅ Conocer métodos básicos: `map()`, `filter()`, `reduce()`
- ✅ Comprender módulos ES6 (import/export)

---

## 🗂️ Estructura de la Semana

```
week-05/
├── README.md                    # Este archivo
├── rubrica-evaluacion.md        # Criterios de evaluación
├── 0-assets/                    # Diagramas y recursos visuales
│   ├── 01-flat-flatmap.svg
│   ├── 02-flatmap.svg
│   ├── 03-array-from-of.svg
│   ├── 04-chaining-pipeline.svg
│   ├── 05-sort-compare.svg
│   ├── 06-findlast-findlastindex.svg
│   └── README.md
├── 1-teoria/                    # Material teórico
│   ├── 01-flat-flatmap.md
│   ├── 02-array-from-of.md
│   ├── 03-chaining-avanzado.md
│   ├── 04-transformaciones-datos.md
│   ├── 05-sort-personalizado.md
│   └── 06-findLast-findLastIndex.md    # ES2023
├── 2-practicas/                 # Ejercicios guiados
│   ├── ejercicio-01-flat-flatmap/
│   ├── ejercicio-02-array-from-of/
│   ├── ejercicio-03-chaining/
│   ├── ejercicio-04-sort-transform/
│   └── ejercicio-05-findlast/          # ES2023
├── 3-proyecto/                  # Proyecto semanal
│   └── dashboard-datos/
├── 4-recursos/                  # Material adicional
│   ├── ebooks-free/
│   ├── videografia/
│   └── webgrafia/
└── 5-glosario/                  # Términos clave
    └── README.md
```

---

## 📝 Contenidos

### 1️⃣ Teoría (2.5 horas)

| Tema | Duración | Descripción |
|------|----------|-------------|
| [flat() y flatMap()](1-teoria/01-flat-flatmap.md) | 25 min | Aplanar arrays anidados |
| [Array.from() y Array.of()](1-teoria/02-array-from-of.md) | 25 min | Crear arrays desde iterables |
| [Chaining Avanzado](1-teoria/03-chaining-avanzado.md) | 30 min | Encadenar métodos eficientemente |
| [Transformaciones de Datos](1-teoria/04-transformaciones-datos.md) | 25 min | Patrones de transformación |
| [Sort Personalizado + toSorted()](1-teoria/05-sort-personalizado.md) | 30 min | Ordenamiento mutable vs inmutable (ES2023) |
| [findLast() y findLastIndex()](1-teoria/06-findLast-findLastIndex.md) | 25 min | Buscar desde el final (ES2023) |

### 2️⃣ Prácticas (3 horas)

| Ejercicio | Duración | Nivel | Objetivo |
|-----------|----------|-------|----------|
| flat y flatMap | 35 min | Básico | Aplanar estructuras anidadas |
| Array.from y Array.of | 35 min | Básico | Crear arrays desde diferentes fuentes |
| Chaining Complejo | 40 min | Intermedio | Transformaciones encadenadas |
| Sort y Transformaciones | 35 min | Intermedio | Ordenamiento y procesamiento avanzado |
| findLast (ES2023) | 35 min | Intermedio | Buscar desde el final del array |

### 3️⃣ Proyecto (2 horas)

**Dashboard de Análisis de Datos**

Aplicación de análisis que incluye:
- Procesamiento de datasets con chaining
- Transformaciones complejas de datos
- Ordenamiento personalizado multi-criterio
- Búsqueda del último registro con `findLast()` (ES2023)
- Visualización de resultados en tabla HTML

---

## ⏱️ Distribución del Tiempo

| Actividad | Tiempo | Porcentaje |
|-----------|--------|------------|
| 📖 Teoría | 2.5 horas | 31% |
| 💻 Prácticas | 3 horas | 38% |
| 🏗️ Proyecto | 2 horas | 25% |
| 📚 Recursos | 0.5 horas | 6% |

---

## 📌 Entregables

### 📦 Proyecto (100%)

El **único entregable** para esta semana es el proyecto:

- [ ] **Proyecto "Dashboard de Análisis de Datos" funcional**
- [ ] Uso correcto de métodos avanzados de arrays (flatMap, at, findLast, etc.)
- [ ] Implementación de sorting y slicing inmutables (toSorted, toReversed, with)
- [ ] Código limpio y bien comentado en inglés
- [ ] README del proyecto documentado

> **Nota**: Los ejercicios prácticos son materiales de aprendizaje para prepararte para el proyecto, pero no se entregan de forma separada.

---

## 🎓 Criterios de Evaluación

| Criterio | Peso | Descripción |
|----------|------|-------------|
| Proyecto | 100% | Calidad del proyecto final (mínimo 70% para aprobar) |

> **Nota**: Los ejercicios prácticos y teoría no se evalúan por separado. Son material de preparación.

Ver [rúbrica completa](rubrica-evaluacion.md) para más detalles.

---

## 💡 Consejos de Estudio

1. **Experimenta en consola**: Prueba cada método con datos simples primero
2. **Visualiza el flujo**: Dibuja cómo los datos se transforman en cada paso
3. **Practica chaining**: Combina métodos progresivamente
4. **Compara rendimiento**: Aprende cuándo usar cada método
5. **Resuelve problemas reales**: Aplica lo aprendido a datasets reales

---

## 🔗 Navegación

| ⬅️ Anterior | 🏠 Inicio | ➡️ Siguiente |
|-------------|-----------|--------------|
| [Semana 4: Destructuring y Módulos](../week-04/README.md) | [Bootcamp](../../README.md) | [Semana 6: Strings y RegExp](../week-06/README.md) |

---

## 📚 Recursos Rápidos

- 📖 [MDN - Array](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)
- 📖 [JavaScript.info - Array methods](https://javascript.info/array-methods)
- 🎥 [JavaScript Array Methods](https://www.youtube.com/results?search_query=javascript+array+methods+es6)

---

*Última actualización: Diciembre 2025*
