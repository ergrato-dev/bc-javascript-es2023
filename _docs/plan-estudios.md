# 📅 Plan de Estudios - Bootcamp JavaScript ES2023

**Duración Total**: 28 semanas (7 meses)
**Horas Semanales**: 8 horas
**Horas Totales**: 224 horas

---

## 🚀 Características ES2023 Cubiertas

Este bootcamp cubre todas las características modernas de JavaScript hasta ES2023:

### ES2023 (lo más reciente)
- `Array.prototype.findLast()` y `findLastIndex()`
- `Array.prototype.toSorted()`, `toReversed()`, `toSpliced()`, `with()` (Change Array by Copy)
- Symbols como claves de WeakMap

### ES2022
- `Array.prototype.at()` - Índices negativos
- `Object.hasOwn()` - Reemplazo moderno de `hasOwnProperty`
- Error cause (`new Error('msg', { cause })`)
- Class fields: private (`#`), static blocks
- Top-level await en módulos
- Regex `/d` flag (indices)

### ES2021
- `String.prototype.replaceAll()`
- `Promise.any()` y `AggregateError`
- Logical assignment operators (`||=`, `&&=`, `??=`)
- Numeric separators (`1_000_000`)

### ES2020
- Optional chaining (`?.`)
- Nullish coalescing (`??`)
- `Promise.allSettled()`
- Dynamic `import()`
- `BigInt`
- `globalThis`

### ES2019
- `Array.prototype.flat()` y `flatMap()`
- `Object.fromEntries()`
- `String.prototype.trimStart()`, `trimEnd()`
- Optional catch binding

---

## 🎯 Distribución por Etapas

### 📘 Etapa 1: Fundamentos Modernos (Semanas 1-12)
**96 horas totales** | JavaScript ES2023 desde cero

### 📗 Etapa 2: Intermedio (Semanas 13-24)
**96 horas totales** | Programación asincrónica y manipulación del DOM

### 📕 Etapa 3: Avanzado (Semanas 25-28)
**32 horas totales** | Testing, patrones y mejores prácticas

---

## 📚 Contenido Semanal Detallado

### 🟦 ETAPA 1: FUNDAMENTOS MODERNOS (Semanas 1-12)

#### ✅ **Week 01: Introducción a JavaScript Moderno**
**Estado**: Completada
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- Configuración del entorno (VS Code, Node.js, Git)
- Variables (let, const) y tipos de datos
- Template literals
- Arrow functions básicas
- Operadores modernos (optional chaining `?.`, nullish coalescing `??`)
- Logical assignment operators (`??=`, `||=`, `&&=`)
- Numeric separators (`1_000_000`)

**Proyecto**: Calculadora moderna con ES2023

---

#### ✅ **Week 02: Operadores Avanzados y Array Methods**
**Estado**: Completada
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- Spread operator (`...`)
- Rest parameters
- Default parameters
- Array methods (map, filter, reduce, find, some, every)
- `Array.prototype.at()` para índices negativos (ES2022)
- Object enhancements (shorthand, computed properties)
- `Object.hasOwn()` (ES2022)

**Proyecto**: Gestor de Tareas (Task Manager)

---

#### **Week 03: Clases y Programación Orientada a Objetos**
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- Clases modernas (class, constructor)
- Métodos de instancia y estáticos
- Herencia (extends, super)
- Getters y Setters
- Private fields (`#`) y private methods (ES2022)
- Static blocks (ES2022)

**Proyecto**: Sistema de gestión de biblioteca (clases Book, Library, User)

---

#### **Week 04: Destructuring y Módulos ES2023**
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- Destructuring de arrays
- Destructuring de objetos (alias, valores por defecto, anidado)
- Módulos ES (import/export)
- Named exports vs Default exports
- Dynamic imports (`import()`)
- Top-level await en módulos (ES2022)

**Proyecto**: Aplicación modular de gestión de inventario

---

#### **Week 05: Arrays Avanzados**
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- Métodos avanzados (flatMap, flat, from, of)
- `findLast()` y `findLastIndex()` (ES2023)
- Métodos inmutables: `toSorted()`, `toReversed()`, `toSpliced()`, `with()` (ES2023)
- Chaining complejo y transformaciones de datos
- Ordenamiento personalizado (sort vs toSorted)

**Proyecto**: Dashboard de análisis de datos

---

#### **Week 06: Strings y RegExp Modernos**
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- String methods modernos (includes, startsWith, endsWith, repeat)
- `replaceAll()` (ES2021)
- `trimStart()`, `trimEnd()` (ES2019)
- Template literals avanzados (tagged templates)
- Regular Expressions básicas y `matchAll()`
- Regex `/d` flag para índices (ES2022)

**Proyecto**: Validador de formularios con RegExp

---

#### **Week 07: Sets y Maps**
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- Set (agregar, eliminar, verificar existencia)
- Map (claves de cualquier tipo)
- WeakSet y WeakMap
- Symbols como claves de WeakMap (ES2023)
- Casos de uso prácticos
- Conversión entre estructuras y `Object.fromEntries()` (ES2019)

**Proyecto**: Sistema de gestión de usuarios únicos

---

#### **Week 08: Iteradores y Generadores**
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- Protocol de iteración
- for...of vs for...in
- Generadores (function*)
- yield y delegación de generadores
- Iterables personalizados

**Proyecto**: Paginador personalizado con generadores

---

#### **Week 09: Símbolos y Metaprogramación Básica**
**Horas**: 8h (2h teoría + 3h práctica + 2.5h proyecto + 0.5h recursos)

**Temas**:
- Símbolos (Symbol)
- Well-known symbols (Symbol.iterator, Symbol.toStringTag)
- Object.getOwnPropertySymbols()
- Uso de símbolos como claves privadas

**Proyecto**: Creación de objetos con propiedades "privadas"

---

#### **Week 10: Proxies y Reflect**
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- Proxy object
- Traps (get, set, has, deleteProperty)
- Reflect API
- Validación reactiva
- Observadores de cambios

**Proyecto**: Sistema de validación reactivo

---

#### **Week 11: Manejo de Errores Moderno**
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- try...catch...finally
- Optional catch binding (ES2019)
- Crear errores personalizados (extends Error)
- Error cause (ES2022): `new Error('msg', { cause })`
- Manejo de errores asincrónicos
- Mejores prácticas
- Mejores prácticas

**Proyecto**: Sistema robusto con manejo de errores completo

---

#### **Week 12: Proyecto Integrador - Fundamentos**
**Horas**: 8h (0.5h teoría + 1.5h planning + 5.5h desarrollo + 0.5h recursos)

**Temas**:
- Revisión de todos los conceptos de semanas 1-11
- Arquitectura de aplicación
- Clean code y refactoring

**Proyecto**: Aplicación completa de E-commerce (carrito, productos, usuarios)

---

### 🟩 ETAPA 2: INTERMEDIO (Semanas 13-24)

#### **Week 13: Programación Asincrónica - Callbacks y Promises**
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- Callback hell y sus problemas
- Promises (then, catch, finally)
- Promise chaining
- `Promise.all()`, `Promise.race()`, `Promise.allSettled()` (ES2020)
- `Promise.any()` y `AggregateError` (ES2021)
- Error handling en promises

**Proyecto**: Simulador de solicitudes HTTP con promises

---

#### **Week 14: Async/Await**
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- async functions
- await keyword
- Error handling con try/catch
- Parallel vs Sequential execution
- Top-level await (ES2022)
- `for await...of` para iterables asíncronos

**Proyecto**: Sistema de carga de datos asíncrono

---

#### **Week 15: Fetch API**
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- Fetch API básica
- Request y Response objects
- Headers y configuración
- Manejo de JSON
- Error handling en fetch

**Proyecto**: Consumidor de API REST pública

---

#### **Week 16: APIs REST y CRUD**
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- Métodos HTTP (GET, POST, PUT, DELETE, PATCH)
- RESTful APIs
- CRUD completo
- Autenticación básica (headers, tokens)
- Manejo de estados de carga

**Proyecto**: Aplicación CRUD completa con API

---

#### **Week 17: DOM Manipulation Moderna**
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- querySelector y querySelectorAll
- createElement, appendChild, removeChild
- classList API
- textContent vs innerHTML
- Template elements

**Proyecto**: Constructor de UI dinámico

---

#### **Week 18: Event Handling Avanzado**
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- addEventListener y removeEventListener
- Event bubbling y capturing
- Event delegation
- Eventos personalizados (CustomEvent)
- preventDefault y stopPropagation

**Proyecto**: Sistema de notificaciones interactivas

---

#### **Week 19: Web Storage APIs**
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- localStorage
- sessionStorage
- IndexedDB básico
- Serialización (JSON.stringify/parse)
- Manejo de cuotas y límites

**Proyecto**: Aplicación con persistencia de datos local

---

#### **Week 20: Formularios y Validación**
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- FormData API
- Validación HTML5
- Constraint Validation API
- Validación personalizada
- Submit handling

**Proyecto**: Sistema de registro y login con validación

---

#### **Week 21: Fechas y Tiempos (Date API)**
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- Date object
- Formateo de fechas
- Operaciones con fechas
- Timezones
- Introducción a Temporal API

**Proyecto**: Calendario y agenda personal

---

#### **Week 22: Trabajo con Archivos**
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- File API
- FileReader
- Blob y URL.createObjectURL
- Drag and Drop
- Download de archivos

**Proyecto**: Lector y procesador de archivos

---

#### **Week 23: Performance y Optimización**
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- Debounce y Throttle
- Lazy loading
- Performance API
- Memory leaks
- Best practices

**Proyecto**: Optimización de aplicación existente

---

#### **Week 24: Proyecto Integrador - Intermedio**
**Horas**: 8h (0.5h teoría + 1.5h planning + 5.5h desarrollo + 0.5h recursos)

**Temas**:
- Integración de conceptos de semanas 13-23
- Arquitectura de aplicación asíncrona
- UX y manejo de estados de carga

**Proyecto**: Aplicación web completa con API, DOM, Storage y optimización

---

### 🟥 ETAPA 3: AVANZADO (Semanas 25-28)

#### **Week 25: Testing con Jest - Parte 1**
**Horas**: 8h (2.5h teoría + 3.5h práctica + 1.5h proyecto + 0.5h recursos)

**Temas**:
- Introducción a testing
- Jest setup
- Unit tests
- Matchers (expect, toBe, toEqual)
- Test coverage

**Proyecto**: Testing de funciones utilitarias

---

#### **Week 26: Testing con Jest - Parte 2**
**Horas**: 8h (2.5h teoría + 3.5h práctica + 1.5h proyecto + 0.5h recursos)

**Temas**:
- Mocking
- Async testing
- Integration tests
- TDD (Test-Driven Development)
- Best practices

**Proyecto**: Testing de módulos asíncronos

---

#### **Week 27: Patrones de Diseño y Clean Code**
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- Patrones: Module, Singleton, Factory, Observer
- SOLID principles
- Clean code principles
- Code smells y refactoring
- ESLint y Prettier

**Proyecto**: Refactorización de código legacy

---

#### **Week 28: Proyecto Final - Bootcamp**
**Horas**: 8h (0h teoría + 2h planning + 5.5h desarrollo + 0.5h presentación)

**Temas**:
- Consolidación de TODO lo aprendido
- Arquitectura completa
- Testing, Clean Code, Performance

**Proyecto**: Aplicación web completa de nivel profesional (a elección: CRM, Blog, Dashboard, Social Network, etc.)

---

## 📊 Resumen por Competencias

### JavaScript Core
- Variables, tipos, operadores (Week 1-2)
- Funciones y scope (Week 1-2)
- Clases y OOP (Week 3)
- Arrays y objetos (Week 2, 5, 7)
- Strings y RegExp (Week 6)

### JavaScript Avanzado
- Módulos ES2023 (Week 4)
- Destructuring (Week 4)
- Sets/Maps (Week 7)
- Iteradores/Generadores (Week 8)
- Símbolos/Proxies (Week 9-10)
- Manejo de errores (Week 11)

### Programación Asincrónica
- Promises (Week 13)
- Async/Await (Week 14)
- Fetch API (Week 15)
- APIs REST (Week 16)

### DOM y Browser APIs
- DOM Manipulation (Week 17)
- Event Handling (Week 18)
- Web Storage (Week 19)
- Forms (Week 20)
- Files (Week 22)

### Calidad y Testing
- Performance (Week 23)
- Jest Testing (Week 25-26)
- Patrones (Week 27)
- Clean Code (Week 27)

### Proyectos Integradores
- Fundamentos (Week 12)
- Intermedio (Week 24)
- Final (Week 28)

---

## 🎯 Objetivos de Salida

Al completar las 28 semanas, el estudiante será capaz de:

✅ **Programar con JavaScript ES2023** usando todas las características modernas
✅ **Crear aplicaciones web completas** con arquitectura limpia
✅ **Consumir APIs REST** y manejar datos asíncronos
✅ **Manipular el DOM** de forma eficiente y reactiva
✅ **Escribir tests automatizados** con Jest
✅ **Aplicar patrones de diseño** y clean code
✅ **Optimizar rendimiento** de aplicaciones JavaScript
✅ **Trabajar con Git** y metodologías colaborativas

**Nivel de salida**: Desarrollador JavaScript Junior

---

## 📈 Progreso Actual

- ✅ **Week 01**: Introducción a JavaScript Moderno - COMPLETADA
- ✅ **Week 02**: Operadores y Array Methods - COMPLETADA
- ⏸️ **Week 03**: Clases y OOP - PENDIENTE
- ⏸️ **Week 04-28**: PENDIENTE

**Completado**: 2/28 semanas (7.14%)
**Horas completadas**: 16/224 horas (7.14%)

---

## 📝 Notas

- Cada semana sigue la misma estructura de carpetas
- Los proyectos son acumulativos en complejidad
- Se recomienda completar las semanas en orden
- Las evaluaciones son 30% conocimiento + 40% desempeño + 30% producto
- Mínimo 70% de aprobación por semana

---

**Última actualización**: Diciembre 2024
**Versión**: 1.0
