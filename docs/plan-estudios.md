# 📅 Plan de Estudios - Bootcamp JavaScript ES2023

**Duración Total**: 28 semanas (7 meses)
**Horas Semanales**: 8 horas
**Horas Totales**: 224 horas
**Estado**: semanas 1-22 publicadas con la estructura anterior (en migración); semanas 23-28 pendientes. Estado al día en [bootcamp/README.md](../bootcamp/README.md)

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

### 📗 Etapa 2: Intermedio (Semanas 13-24) — semanas 23-24 ⏳ pendientes
**96 horas totales** | Programación asincrónica y manipulación del DOM

### 📕 Etapa 3: Avanzado (Semanas 25-28) — ⏳ pendiente
**32 horas totales** | Testing, patrones y mejores prácticas

---

## 📚 Contenido Semanal Detallado

### 🟦 ETAPA 1: FUNDAMENTOS MODERNOS (Semanas 1-12)

#### **Week 01: Introducción a JavaScript Moderno**
**Estado**: ✅ Migrada
**Horas**: 8h (2h teoría + 3.5h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- Configuración del entorno (VS Code, Node.js, Git)
- Variables (let, const) y tipos de datos
- Template literals
- Arrow functions básicas
- Operadores modernos (optional chaining `?.`, nullish coalescing `??`)
- Logical assignment operators (`??=`, `||=`, `&&=`)
- Numeric separators (`1_000_000`)

**Proyecto**: Ficha interactiva del dominio (funciones puras en `logic.js`)

---

#### **Week 02: Operadores y Métodos Modernos de Arrays**
**Estado**: ✅ Migrada
**Horas**: 8h (2h teoría + 3.5h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- Spread operator (`...`)
- Rest parameters
- Default parameters
- Array methods (map, filter, reduce, find, some, every)
- `Array.prototype.at()` para índices negativos (ES2022)
- Object enhancements (shorthand, computed properties)
- `Object.hasOwn()` (ES2022)

**Proyecto**: Gestor de colección del dominio (CRUD inmutable en `logic.js`)

---

#### **Week 03: Clases y Programación Orientada a Objetos**
**Estado**: ✅ Migrada
**Horas**: 8h (2h teoría + 3.5h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- Clases modernas (class, constructor)
- Métodos de instancia y estáticos
- Herencia (extends, super)
- Getters y Setters
- Private fields (`#`) y private methods (ES2022)
- Static blocks (ES2022)

**Proyecto**: Catálogo con clases (`Item` y `Collection` en `logic.js`, tipos del dominio con `extends` en `types.js`)

---

#### **Week 04: Destructuring y Módulos ES2023**
**Estado**: ✅ Migrada
**Horas**: 8h (2h teoría + 3.5h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- Destructuring de arrays
- Destructuring de objetos (alias, valores por defecto, anidado)
- Módulos ES (import/export)
- Named exports vs Default exports
- Dynamic imports (`import()`)
- Top-level await en módulos (ES2022)

**Proyecto**: Catálogo modular (`data.js`, `logic.js` con destructuring y `stats.js` cargado con `import()`)

---

#### **Week 05: Arrays Avanzados**
**Estado**: ✅ Migrada
**Horas**: 8h (2h teoría + 3.5h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- Métodos avanzados (flatMap, flat, from, of)
- `findLast()` y `findLastIndex()` (ES2023)
- Métodos inmutables: `toSorted()`, `toReversed()`, `toSpliced()`, `with()` (ES2023)
- Chaining complejo y transformaciones de datos
- Ordenamiento personalizado (sort vs toSorted)

**Proyecto**: Explorador de colección (`logic.js` con `flatMap`, `Array.from`, `toSorted`, agrupar con `reduce` y `findLast`)

---

#### **Week 06: Strings y RegExp Modernos**
**Estado**: ✅ Migrada
**Horas**: 8h (2h teoría + 3.5h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- String methods modernos (includes, startsWith, endsWith, repeat)
- `replaceAll()` (ES2021)
- `trimStart()`, `trimEnd()` (ES2019)
- Template literals avanzados (tagged templates)
- Regular Expressions básicas y `matchAll()`
- Regex `/d` flag para índices (ES2022)

**Proyecto**: Registro de fichas (`logic.js` con `padStart`, `new RegExp` y `String.raw`, grupos con nombre, `matchAll` con el flag `u` y una función tag que escapa HTML)

---

#### **Week 07: Sets y Maps**
**Estado**: ✅ Migrada
**Horas**: 8h (2h teoría + 3.5h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- Set (agregar, eliminar, verificar existencia)
- Map (claves de cualquier tipo)
- WeakSet y WeakMap
- Symbols como claves de WeakMap (ES2023)
- Operaciones de conjuntos a mano y con los métodos nativos de `Set` (ES2025)
- Casos de uso prácticos
- Conversión entre estructuras y `Object.fromEntries()` (ES2019)

**Proyecto**: Mapa de la colección (`logic.js` con `Set`, `Map` para indexar, agrupar y contar, una copia inmutable del Set de etiquetas marcadas, `isSubsetOf` y un resumen guardado en un `WeakMap`)

---

#### **Week 08: Iteradores y Generadores**
**Estado**: ✅ Migrada
**Horas**: 8h (2h teoría + 3.5h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- Protocolo de iteración (`Symbol.iterator`, `next()`)
- for...of vs for...in, `Object.entries()`, `keys()` y `values()`
- Generadores (function*), `next(value)` y secuencias infinitas
- yield y delegación de generadores (`yield*`)
- Iterables personalizados

**Proyecto**: Catálogo por páginas: ids con un generador infinito, `take`, `skip`, `filterBy`, `getPage` y un catálogo iterable ordenado por nombre

---

#### **Week 09: Símbolos y Metaprogramación Básica**
**Estado**: ✅ Migrada
**Horas**: 8h (2h teoría + 3.5h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- Símbolos (`Symbol()`), unicidad y claves simbólicas
- Registro global: `Symbol.for()` y `Symbol.keyFor()`
- Well-known symbols (`Symbol.toStringTag`, `Symbol.toPrimitive`, `Symbol.iterator`, `Symbol.hasInstance`)
- `Object.getOwnPropertySymbols()` y `Reflect.ownKeys()`
- Ocultar propiedades con símbolos frente a campos privados `#`

**Proyecto**: Fichas con notas reservadas: la nota va en una clave simbólica, las piezas se convierten con `Symbol.toPrimitive`, se identifican con `Symbol.toStringTag` e `instanceof`, y la vista pública sale sin claves simbólicas

---

#### **Week 10: Proxies y Reflect**
**Estado**: ✅ Migrada
**Horas**: 8h (2h teoría + 3.5h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- `Proxy`: target, handler y `Proxy.revocable()`
- Traps `get`, `set`, `has`, `deleteProperty` y `ownKeys`
- API `Reflect` y el parámetro `receiver`
- Validación al asignar y propiedades calculadas al leer
- Patrón Observer con proxies

**Proyecto**: Fichas validadas en vivo: un borrador de formulario que valida cada campo en el trap `set`, calcula `errors` e `isValid` en el trap `get` y avisa a la página, y piezas guardadas tras un proxy de solo lectura

---

#### **Week 11: Manejo de Errores Moderno**
**Estado**: ✅ Migrada
**Horas**: 8h (2h teoría + 3.5h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- `try`/`catch`/`finally` y errores nativos (`SyntaxError`, `TypeError`, `RangeError`)
- Optional catch binding (ES2019)
- Errores personalizados (`extends Error`), códigos y jerarquías
- Error cause (ES2022): `new Error('msg', { cause })`
- Errores asíncronos: `.catch()`, `async`/`await`, `Promise.allSettled()` y timeouts
- Patrones: respaldo, reintentos, error boundaries y patrón Result

**Proyecto**: Importador de fichas: valida cada pieza de un JSON con errores propios sin que una mala detenga el resto, encadena el `SyntaxError` con `cause`, reintenta los fallos pasajeros de un servidor simulado y traduce cada error a un mensaje para el usuario

---

#### **Week 12: Proyecto Integrador - Fundamentos**
**Estado**: ✅ Migrada
**Horas**: 8h (0.5h repaso + 3h práctica + 4h proyecto + 0.5h recursos)

**Temas** (repaso, sin conceptos nuevos):
- Qué usa el proyecto de cada semana 1-11, con enlaces
- Arquitectura: datos, lógica sin DOM y página; un dueño del estado
- Patrón observer con un `Set` de suscriptores
- Módulos reales: exports con nombre y por defecto, `index.js` de carpeta, `import()`
- Clean code

**Proyecto**: Gestor de colección: una clase `Collection` con campos privados, un `Map` y suscriptores, iterable con `Symbol.iterator`; búsqueda y orden con `toSorted`, páginas con un generador, resumen por sala con un `Map` y un `ValidationError` para los datos del formulario

---

### 🟩 ETAPA 2: INTERMEDIO (Semanas 13-24)

#### **Week 13: Programación Asincrónica - Callbacks y Promises**
**Estado**: ✅ Migrada
**Horas**: 8h (2h teoría + 3.5h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- Event loop: pila de llamadas, microtareas y macrotareas
- Callbacks *error-first* y callback hell
- Promises (then, catch, finally)
- Promise chaining
- `Promise.all()`, `Promise.race()`, `Promise.allSettled()` (ES2020)
- `Promise.any()` y `AggregateError` (ES2021)
- Error handling en promises

**Proyecto**: Panel de servicios: consultar servicios simulados del dominio con un callback *error-first*, envolverlo en una promesa y combinar las consultas en orden (cadena de `.then()` con `reduce`), con `Promise.all`, `allSettled`, `any` (con el `AggregateError` como `cause`) y un tiempo límite con `race`, sin `async`/`await`

---

#### **Week 14: Async/Await**
**Estado**: ✅ Migrada
**Horas**: 8h (2h teoría + 3.5h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- async functions
- await keyword
- Error handling con try/catch/finally, `cause` y reintentos
- Parallel vs Sequential execution y concurrencia limitada
- Top-level await (ES2022)
- `for await...of`, generadores asíncronos y `Array.fromAsync` (ES2024)

**Proyecto**: Explorador de catálogo: pedir las fichas del dominio a un servidor simulado en orden (`await` en un `for...of`), a la vez (`Promise.all`), solo las que existan (`allSettled`), con reintentos (`cause` con el último error), por páginas con un generador asíncrono y buscando por nombre con un `for await` que se detiene al encontrarla, sin `.then()`

---

#### **Week 15: Fetch API**
**Estado**: ✅ Migrada
**Horas**: 8h (2h teoría + 3.5h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- Fetch API básica: `Response`, `status`/`ok`, `json()`/`text()` y `URLSearchParams`
- Request y Response objects, `clone()`
- Métodos HTTP con cuerpo JSON (`POST`, `PUT`, `PATCH`, `DELETE`) y respuestas `204`
- Headers, `Authorization` y cancelación con `AbortController` y `AbortSignal.timeout()`
- Error handling en fetch: red, estado HTTP, JSON inválido, tiempo agotado y reintentos

**Proyecto**: Cliente del catálogo: buscar, abrir, crear, editar y borrar las fichas del dominio en una API REST local (`node server.js`) con una sola función `requestJson` que concentra las cabeceras, el JSON, el tiempo máximo y la conversión a `HttpError`, más un mensaje para cada tipo de error

---

#### **Week 16: APIs REST y CRUD**
**Estado**: ✅ Migrada
**Horas**: 8h (2h teoría + 3.5h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- Diseño REST: recursos y URLs, métodos seguros e idempotentes, códigos de estado (`201`, `401`, `403`, `405`, `409`, `422`) y errores con forma estable
- Paginación por página y por cursor, filtros, orden, cabecera `Link` y generadores de páginas
- Autenticación con token: `POST /login`, `Authorization: Bearer`, caducidad, JWT, autenticación básica y dónde guardar el token
- Estados de carga (`idle`, `loading`, `success`, `empty`, `error`) con un reductor, envíos dobles, condiciones de carrera y actualizaciones optimistas

**Proyecto**: Panel de la colección: CRUD de las fichas del dominio en una API local paginada y con inicio de sesión (`node server.js`), con `createApi` (token, `401` y `HttpError` con `fields`), `listPage`, `saveItem`, `deleteItem`, `pageInfo`, un reductor de estado y `createLatest` para cancelar las búsquedas viejas

---

#### **Week 17: DOM Manipulation Moderna**
**Estado**: ✅ Migrada
**Horas**: 8h (2h teoría + 3.5h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- El árbol DOM: nodos y elementos, `querySelector` y `querySelectorAll`, colecciones estáticas y vivas, `closest`, `matches` y `dataset`
- Crear, insertar, mover, copiar y quitar nodos: `createElement`, `append`, `before`, `after`, `cloneNode`, `remove`, `replaceChildren` y `DocumentFragment`
- `textContent` frente a `innerHTML`, XSS y escapado, atributos frente a propiedades, `classList.toggle` con `force`, `hidden`, `aria-pressed` y variables CSS
- `<template>`, render a partir de los datos y render por clave que conserva el foco

**Proyecto**: Constructor de fichas: las fichas del dominio descritas con objetos (`h`, `cardSpec`), convertidas en HTML escapado (`escapeHtml`, `toHtml`), filtradas (`visibleItems`, `categoriesOf`) y montadas en el DOM con un render por clave (`diffKeys`), servidas con `node server.js`

---

#### **Week 18: Event Handling Avanzado**
**Estado**: ✅ Migrada
**Horas**: 8h (2h teoría + 3.5h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- `addEventListener`, el objeto evento y el teclado (`key`, `code`, modificadores); quitar listeners con `removeEventListener`, `once` y `AbortController`; `this` y `currentTarget`
- Propagación: captura, destino y burbuja, `target` frente a `currentTarget`, `stopPropagation` y sus riesgos, eventos que no suben y `focusin`
- Delegación en el contenedor con `closest`, `contains` y `data-action`, y qué eventos se delegan
- Acciones por defecto con `preventDefault`, `cancelable` y `passive`; `Event`, `CustomEvent` y `dispatchEvent`, eventos propios que se pueden vetar y `EventTarget` como bus

**Proyecto**: Centro de avisos: acciones de botones y atajos de teclado interpretadas con funciones puras (`parseAction`, `shortcutFor`, `nextIndex`), lista de avisos inmutable (`applyAction`, `summarize`, `sortNotices`) y bus de eventos propios cancelables (`createNoticeEvent`, `createBus`), con delegación en `main.js`, servido con `node server.js`

---

#### **Week 19: Web Storage APIs**
**Estado**: ✅ Migrada
**Horas**: 8h (2h teoría + 3.5h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- `localStorage` y `sessionStorage`: `setItem`, `getItem` y `removeItem`, todo como texto, `null` y valores por defecto, cuánto dura y quién lo ve (origen), prefijos y el evento `storage` entre pestañas
- Serialización con `JSON.stringify` y `JSON.parse`: lo que se pierde (`Date`, `Map`, `Set`, `undefined`, `NaN`), *reviver*, leer con `try/catch` y validación, sobre con versión y migración
- IndexedDB básico: `open` y `upgradeneeded`, peticiones como promesas, transacciones `readonly` y `readwrite`, `add`, `put`, `get`, `getAll`, índices, `IDBKeyRange`, abort y `versionchange`
- Cuotas, errores y caducidad: almacenamiento bloqueado, cuánto cabe, `QuotaExceededError`, guardar con resultado, `expiresAt` y `navigator.storage`

**Proyecto**: Cuaderno persistente: lista guardada con versión (`serialize`, `deserialize`, `isValidEntry`, `migrate`), almacén que no rompe la página (`createStore`, `isStorageAvailable`), borrador con caducidad en `sessionStorage` (`createDraft`) y sincronización entre pestañas (`fromStorageEvent`), servido con `node server.js`

---

#### **Week 20: Formularios y Validación**
**Estado**: ✅ Migrada
**Horas**: 8h (2h teoría + 3.5h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- Formularios y `FormData`: `name` y `<label>`, `form.elements`, `value` y `checked`, el evento `submit`, `requestSubmit()` y `submitter`, qué entra en `FormData`, `get`, `getAll` y `has`, y conversión a un objeto con tipos
- Validación con atributos: `required`, `type`, `min`, `max`, `step`, `minlength`, `maxlength` y `pattern`, cuándo valida el navegador, `:invalid` y `:user-invalid`, `novalidate` y validación en el servidor
- La API de validación: `validity` y sus indicadores, `checkValidity()` y `reportValidity()`, el evento `invalid` en captura, `setCustomValidity()` y mensajes propios
- Validación propia y envío: reglas como datos y funciones puras, errores accesibles con `aria-invalid` y `aria-describedby`, campos tocados, envío sin duplicados y errores del servidor por campo

**Proyecto**: Formulario de inscripción construido desde `FIELDS`: lectura con tipos (`readValues`), reglas y mensajes propios (`checkField`, `validate`), atributos HTML generados (`toAttributes`), errores al salir del campo y al enviar (`createFormState`, `summarize`) y envío sin duplicados con errores del servidor (`createSubmitter`, `fromServer`), servido con `node server.js`

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

#### **Week 23: Performance y Optimización** ⏳ _pendiente_
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- Debounce y Throttle
- Lazy loading
- Performance API
- Memory leaks
- Best practices

**Proyecto**: Optimización de aplicación existente

---

#### **Week 24: Proyecto Integrador - Intermedio** ⏳ _pendiente_
**Horas**: 8h (0.5h teoría + 1.5h planning + 5.5h desarrollo + 0.5h recursos)

**Temas**:
- Integración de conceptos de semanas 13-23
- Arquitectura de aplicación asíncrona
- UX y manejo de estados de carga

**Proyecto**: Aplicación web completa con API, DOM, Storage y optimización

---

### 🟥 ETAPA 3: AVANZADO (Semanas 25-28)

#### **Week 25: Testing con Vitest - Parte 1** ⏳ _pendiente_
**Horas**: 8h (2.5h teoría + 3.5h práctica + 1.5h proyecto + 0.5h recursos)

**Temas**:
- Introducción a testing
- Vitest setup con pnpm (ESM nativo, API compatible con Jest)
- Unit tests
- Matchers (expect, toBe, toEqual)
- Test coverage

**Proyecto**: Testing de funciones utilitarias

---

#### **Week 26: Testing con Vitest - Parte 2** ⏳ _pendiente_
**Horas**: 8h (2.5h teoría + 3.5h práctica + 1.5h proyecto + 0.5h recursos)

**Temas**:
- Mocking
- Async testing
- Integration tests
- TDD (Test-Driven Development)
- Best practices

**Proyecto**: Testing de módulos asíncronos

---

#### **Week 27: Patrones de Diseño y Clean Code** ⏳ _pendiente_
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- Patrones: Module, Singleton, Factory, Observer
- SOLID principles
- Clean code principles
- Code smells y refactoring
- ESLint y Prettier (con `pnpm`)

**Proyecto**: Refactorización de código legacy

---

#### **Week 28: Proyecto Final - Bootcamp** ⏳ _pendiente_
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
- Testing con Vitest (Week 25-26)
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
✅ **Escribir tests automatizados** con Vitest
✅ **Aplicar patrones de diseño** y clean code
✅ **Optimizar rendimiento** de aplicaciones JavaScript
✅ **Trabajar con Git** y metodologías colaborativas

**Nivel de salida**: Desarrollador JavaScript Junior

---

## 📈 Progreso Actual

El estado de cada semana se lleva en un solo sitio: [bootcamp/README.md](../bootcamp/README.md). Los hallazgos pendientes de la migración están en [AUDIT.md](../AUDIT.md).

---

## 📝 Notas

- Cada semana sigue la misma estructura de carpetas
- Los proyectos son acumulativos en complejidad
- Se recomienda completar las semanas en orden
- Las evaluaciones son 30% conocimiento + 40% desempeño + 30% producto
- Mínimo 70% de aprobación por semana

---

**Última actualización**: Noviembre 2026
**Versión**: 1.2

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Inicio del bootcamp](../README.md) | [Versiones del stack](stack-versions.md) → |
