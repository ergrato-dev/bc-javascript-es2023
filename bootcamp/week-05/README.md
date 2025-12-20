# 📊 Week 05: Arrays Avanzados

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![Duración](https://img.shields.io/badge/Duración-8_horas-blue)](.)
[![Nivel](https://img.shields.io/badge/Nivel-Intermedio-orange)](.)

## 📋 Descripción

Esta semana te sumergirás en el mundo de los **arrays avanzados** de JavaScript ES6+. Irás más allá de `map`, `filter` y `reduce` para dominar métodos especializados como `flatMap`, `flat`, `from`, `of`, y técnicas de chaining complejo. Aprenderás a trabajar con transformaciones de datos complejas, ordenamientos personalizados y patrones funcionales que te permitirán escribir código más elegante y expresivo.

## 🎯 Objetivos de Aprendizaje

Al finalizar esta semana, serás capaz de:

- ✅ Aplicar métodos avanzados como `flatMap()` y `flat()` para manipular arrays anidados
- ✅ Utilizar `Array.from()` y `Array.of()` para crear y convertir arrays
- ✅ Implementar chaining complejo con múltiples métodos encadenados
- ✅ Dominar `sort()` con criterios personalizados y casos de uso complejo
- ✅ Transformar datos complejos usando patrones funcionales avanzados
- ✅ Trabajar con arrays-like objects (NodeList, arguments)
- ✅ Crear soluciones elegantes y eficientes para problemas de manipulación de datos

## 📚 Requisitos Previos

Para aprovechar al máximo esta semana, deberías estar familiarizado con:

- Variables (let/const) y tipos de datos
- Array methods básicos (map, filter, reduce)
- Arrow functions
- Destructuring de arrays
- Funciones de orden superior (higher-order functions)
- Conceptos básicos de programación funcional

## 🗂️ Estructura de la Semana

```
week-05/
├── README.md                          # Esta guía
├── rubrica-evaluacion.md              # Criterios de evaluación
├── 0-assets/                          # Recursos visuales
│   ├── README.md                      # Índice de assets
│   ├── 01-flatmap-diagram.svg         # Diagrama flatMap
│   ├── 02-flat-comparison.svg         # Comparación flat vs métodos
│   ├── 03-sort-patterns.svg           # Patrones de ordenamiento
│   └── 04-data-transformation.svg     # Transformaciones complejas
├── 1-teoria/                          # Material teórico
│   ├── 01-flat-flatmap.md             # Métodos flat y flatMap
│   ├── 02-array-from-of.md            # Array.from() y Array.of()
│   ├── 03-sort-avanzado.md            # Ordenamiento personalizado
│   ├── 04-chaining-complejo.md        # Encadenamiento de métodos
│   └── 05-transformaciones-datos.md   # Patrones de transformación
├── 2-practicas/                       # Ejercicios prácticos
│   ├── ejercicio-01-flat-flatmap/
│   ├── ejercicio-02-array-conversiones/
│   ├── ejercicio-03-sort-personalizado/
│   └── ejercicio-04-chaining-avanzado/
├── 3-proyecto/                        # Proyecto integrador
│   ├── README.md                      # Instrucciones del proyecto
│   ├── starter/                       # Código inicial
│   └── solution/                      # Solución completa
├── 4-recursos/                        # Recursos adicionales
│   ├── README.md                      # Índice de recursos
│   ├── ebooks-free/                   # Libros gratuitos
│   ├── videografia/                   # Videos recomendados
│   └── webgrafia/                     # Enlaces útiles
└── 5-glosario/                        # Glosario de términos
    └── README.md                      # Términos clave A-Z
```

## 📝 Contenidos

### 1️⃣ Flat y FlatMap

**Archivo**: [1-teoria/01-flat-flatmap.md](1-teoria/01-flat-flatmap.md)

- Método `flat()` para aplanar arrays anidados
- Profundidad de aplanamiento
- Método `flatMap()` como combinación de map + flat
- Diferencias y casos de uso
- Eliminación de valores null/undefined

```javascript
// Ejemplo rápido
const nested = [[1, 2], [3, 4], [5, 6]];
const flat = nested.flat();
// [1, 2, 3, 4, 5, 6]

const numbers = [1, 2, 3, 4];
const doubled = numbers.flatMap(n => [n, n * 2]);
// [1, 2, 2, 4, 3, 6, 4, 8]
```

### 2️⃣ Array.from() y Array.of()

**Archivo**: [1-teoria/02-array-from-of.md](1-teoria/02-array-from-of.md)

- Crear arrays desde array-like objects
- Convertir NodeList, arguments, strings
- Método `Array.of()` para valores específicos
- Mapping durante la conversión
- Casos de uso en DOM manipulation

```javascript
// Ejemplo rápido
const nodeList = document.querySelectorAll('div');
const array = Array.from(nodeList);

const numbers = Array.of(1, 2, 3);
// [1, 2, 3]

const doubled = Array.from([1, 2, 3], x => x * 2);
// [2, 4, 6]
```

### 3️⃣ Sort Avanzado

**Archivo**: [1-teoria/03-sort-avanzado.md](1-teoria/03-sort-avanzado.md)

- Función comparadora personalizada
- Ordenamiento numérico vs lexicográfico
- Ordenamiento de objetos complejos
- Ordenamiento estable (stable sort)
- Inversión de orden

```javascript
// Ejemplo rápido
const numbers = [10, 5, 40, 25];
numbers.sort((a, b) => a - b);
// [5, 10, 25, 40]

const users = [
  { name: 'Ana', age: 28 },
  { name: 'Bob', age: 25 }
];
users.sort((a, b) => a.age - b.age);
```

### 4️⃣ Chaining Complejo

**Archivo**: [1-teoria/04-chaining-complejo.md](1-teoria/04-chaining-complejo.md)

- Encadenamiento de múltiples métodos
- Legibilidad vs rendimiento
- Debugging de chains
- Casos de uso prácticos
- Patrones de composición

```javascript
// Ejemplo rápido
const result = data
  .filter(item => item.active)
  .map(item => ({ ...item, score: item.score * 2 }))
  .sort((a, b) => b.score - a.score)
  .slice(0, 10)
  .map(item => item.name);
```

### 5️⃣ Transformaciones de Datos

**Archivo**: [1-teoria/05-transformaciones-datos.md](1-teoria/05-transformaciones-datos.md)

- Patrones de transformación complejos
- Datos anidados y estructurados
- Normalización vs desnormalización
- Agrupamiento de datos
- Pivoting y transposición de datos

```javascript
// Ejemplo rápido - agrupamiento
const grouped = data.reduce((acc, item) => {
  const category = item.category;
  acc[category] = [...(acc[category] || []), item];
  return acc;
}, {});
```

## 💻 Ejercicios Prácticos

### Ejercicio 1: Flat y FlatMap
**Carpeta**: [2-practicas/ejercicio-01-flat-flatmap/](2-practicas/ejercicio-01-flat-flatmap/)
- Aplanamiento de arrays anidados
- Casos de uso con flatMap
- Eliminación de valores vacíos

### Ejercicio 2: Array.from() y conversiones
**Carpeta**: [2-practicas/ejercicio-02-array-conversiones/](2-practicas/ejercicio-02-array-conversiones/)
- Convertir array-like objects
- Trabajar con NodeList
- Crear arrays con patrones

### Ejercicio 3: Sort personalizado
**Carpeta**: [2-practicas/ejercicio-03-sort-personalizado/](2-practicas/ejercicio-03-sort-personalizado/)
- Ordenamiento de números
- Ordenamiento de objetos
- Múltiples criterios

### Ejercicio 4: Chaining avanzado
**Carpeta**: [2-practicas/ejercicio-04-chaining-avanzado/](2-practicas/ejercicio-04-chaining-avanzado/)
- Chains de 5+ métodos
- Transformaciones complejas
- Casos del mundo real

## 🚀 Proyecto Integrador

**Nombre**: Dashboard de Análisis de Datos

**Carpeta**: [3-proyecto/](3-proyecto/)

**Descripción**: Construirás un dashboard interactivo que procesa y visualiza datos complejos usando técnicas avanzadas de manipulación de arrays. El proyecto incluirá filtrado, ordenamiento, agrupamiento y transformaciones de datos en tiempo real.

**Características**:
- Carga y parsing de datos CSV
- Filtrado por múltiples criterios
- Ordenamiento customizado
- Cálculos y agregaciones
- Visualización de resultados
- Búsqueda y paginación

**Entregable**: Aplicación funcional con interfaz interactiva

## ⏱️ Distribución del Tiempo (8 horas)

| Actividad                   | Duración | Acumulado |
| --------------------------- | -------- | --------- |
| **Teoría**                  |          |           |
| - Flat y FlatMap            | 30 min   | 0.5h      |
| - Array.from() y Array.of() | 30 min   | 1h        |
| - Sort Avanzado             | 40 min   | 1.67h     |
| - Chaining Complejo         | 30 min   | 2.17h     |
| - Transformaciones          | 23 min   | 2.5h      |
| **Prácticas**               |          |           |
| - Ejercicio 1               | 30 min   | 3h        |
| - Ejercicio 2               | 40 min   | 3.67h     |
| - Ejercicio 3               | 45 min   | 4.42h     |
| - Ejercicio 4               | 1h       | 5.42h     |
| **Proyecto**                |          |           |
| - Setup e instalación       | 30 min   | 6h        |
| - Implementación            | 1.5h     | 7.5h      |
| **Recursos**                |          |           |
| - Revisión y consolidación  | 30 min   | 8h        |

## 📌 Entregables

### Evaluación de Conocimiento 🧠 (30%)

- Cuestionario sobre métodos array avanzados
- Conceptos de flat, flatMap y transformaciones
- Diferencias entre patrones de ordenamiento
- Identificación de mejores prácticas

### Evaluación de Desempeño 💪 (40%)

- Ejercicios prácticos completados (4)
- Uso correcto de métodos avanzados
- Implementación de chains efectivos
- Aplicación de patrones funcionales

### Evaluación de Producto 📦 (30%)

- Dashboard de datos funcional
- Procesamiento de datos complejo
- Interfaz interactiva y responsive
- Código limpio y bien documentado

## 🎓 Evaluación

Para aprobar la semana necesitas:

- ✅ Mínimo **70%** en cada tipo de evidencia
- ✅ Completar los 4 ejercicios prácticos
- ✅ Entregar el dashboard funcional
- ✅ Código que siga las mejores prácticas

Ver [rubrica-evaluacion.md](rubrica-evaluacion.md) para criterios detallados.

## 📚 Recursos Adicionales

### Libros Gratuitos
- [4-recursos/ebooks-free/](4-recursos/ebooks-free/) - Colección curada de ebooks

### Videos
- [4-recursos/videografia/](4-recursos/videografia/) - Tutoriales en video

### Documentación
- [4-recursos/webgrafia/](4-recursos/webgrafia/) - MDN, artículos y guías

## 🔍 Glosario

Ver [5-glosario/README.md](5-glosario/README.md) para definiciones de todos los términos técnicos utilizados esta semana.

## 🔗 Navegación

- [← Week 04: Destructuring y Módulos](../week-04/README.md)
- [Week 06: Strings y RegExp Modernos →](../week-06/README.md)
- [📑 Índice General](../../README.md)

## 💡 Consejos de Estudio

1. **Experimenta con chains** - Prueba combinar métodos de diferentes formas
2. **Entiende la profundidad** - `flat()` tiene un parámetro de profundidad importante
3. **Debugging de chains** - Aprende a insertar `console.log()` entre métodos
4. **Performance matters** - Compara rendimiento de diferentes enfoques
5. **Casos reales** - Busca ejemplos en librerías populares (lodash, underscore)

## ⚠️ Errores Comunes a Evitar

- ❌ Olvidar que `sort()` muta el array original
- ❌ Crear chains excesivamente largos sin break
- ❌ No considerar el rendimiento de transformaciones múltiples
- ❌ Usar `Array.from()` sin necesidad (los iterables ya son útiles)
- ❌ Ignorar casos edge (arrays vacíos, valores falsy, etc.)

## 🌟 Palabras Clave

`flat` • `flatMap` • `Array.from()` • `Array.of()` • `sort()` • `comparator` • `chaining` • `higher-order functions` • `array-like objects` • `transformation` • `functional programming` • `immutability` • `composition`

---

**Tiempo total estimado**: 8 horas
**Nivel de dificultad**: ⭐⭐⭐ (Intermedio)

¡Domina la manipulación avanzada de arrays! 🚀

---

<p align="center">
  <a href="1-teoria/01-flat-flatmap.md">📖 Comenzar con Teoría</a> •
  <a href="2-practicas/">💻 Ir a Prácticas</a> •
  <a href="3-proyecto/">🚀 Ver Proyecto</a>
</p>
