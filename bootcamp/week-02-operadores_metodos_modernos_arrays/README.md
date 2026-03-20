# 🚀 Semana 2: Operadores y Métodos Modernos de Arrays

## 🎯 Objetivos de Aprendizaje

Al finalizar esta semana, serás capaz de:

- ✅ Utilizar el spread operator para copiar y combinar arrays/objetos
- ✅ Aplicar rest parameters en funciones para argumentos variables
- ✅ Trabajar con default parameters avanzados
- ✅ Dominar métodos de arrays modernos (map, filter, reduce)
- ✅ Usar shorthand properties y methods en objetos
- ✅ Crear computed property names dinámicamente
- ✅ Encadenar métodos de arrays para transformaciones complejas
- ✅ Usar `Array.prototype.at()` para índices negativos (ES2022)
- ✅ Aplicar `Object.hasOwn()` para verificar propiedades propias (ES2022)

---

## 📚 Requisitos Previos

- ✅ Haber completado la Semana 1
- ✅ Dominar let/const, template literals y arrow functions
- ✅ Comprender destructuring básico
- ✅ Conocer la sintaxis de objetos y arrays

---

## 🗂️ Estructura de la Semana

```
week-02-operadores_metodos_modernos_arrays/
├── README.md                    # Este archivo
├── rubrica-evaluacion.md        # Criterios de evaluación
├── 0-assets/                    # Diagramas y recursos visuales
│   ├── 01-spread-operator.svg
│   ├── 02-rest-parameters.svg
│   ├── 03-array-methods.svg
│   ├── 04-map-filter-reduce.svg
│   ├── 05-object-enhancements.svg
│   └── 06-metodos-es2022.svg
├── 1-teoria/                    # Material teórico
│   ├── 01-spread-operator.md
│   ├── 02-rest-parameters.md
│   ├── 03-default-parameters.md
│   ├── 04-array-methods.md
│   ├── 05-object-enhancements.md
│   └── 06-metodos-es2022.md
├── 2-practicas/                 # Ejercicios guiados
│   ├── ejercicio-01-spread-rest/
│   ├── ejercicio-02-array-methods/
│   ├── ejercicio-03-map-filter/
│   ├── ejercicio-04-reduce/
│   └── ejercicio-05-metodos-es2022/
├── 3-proyecto/                  # Proyecto semanal
│   └── gestor-tareas/
├── 4-recursos/                  # Material adicional
│   ├── ebooks-free/
│   ├── videografia/
│   └── webgrafia/
└── 5-glosario/                  # Términos clave
    └── README.md
```

---

## 📝 Contenidos

### 1️⃣ Teoría

#### [01. Spread Operator](1-teoria/01-spread-operator.md)
- Copiar arrays y objetos
- Combinar múltiples arrays/objetos
- Pasar arrays como argumentos
- Casos de uso prácticos

#### [02. Rest Parameters](1-teoria/02-rest-parameters.md)
- Diferencia entre spread y rest
- Funciones con argumentos variables
- Combinar con parámetros normales
- Patrones comunes

#### [03. Default Parameters](1-teoria/03-default-parameters.md)
- Valores por defecto avanzados
- Expresiones como valores por defecto
- Parámetros que dependen de otros
- Mejores prácticas

#### [04. Array Methods](1-teoria/04-array-methods.md)
- map(): Transformar arrays
- filter(): Filtrar elementos
- reduce(): Reducir a un valor
- find(), findIndex(), some(), every()
- Encadenar métodos

#### [05. Object Enhancements](1-teoria/05-object-enhancements.md)
- Property shorthand
- Method shorthand
- Computed property names
- Object.assign()
- Object.keys(), values(), entries()

#### [06. Métodos ES2022](1-teoria/06-metodos-es2022.md)
- `Array.prototype.at()` para índices negativos
- `Object.hasOwn()` vs `hasOwnProperty()`
- Propiedades propias vs heredadas
- Casos de uso prácticos

---

### 2️⃣ Prácticas

#### [Ejercicio 01: Spread y Rest](2-practicas/ejercicio-01-spread-rest/)
Practicar spread operator y rest parameters en diferentes contextos.

#### [Ejercicio 02: Array Methods Básicos](2-practicas/ejercicio-02-array-methods/)
Dominar map(), filter() y métodos de búsqueda.

#### [Ejercicio 03: Map y Filter Avanzado](2-practicas/ejercicio-03-map-filter/)
Transformaciones y filtrados complejos de datos.

#### [Ejercicio 04: Reduce Patterns](2-practicas/ejercicio-04-reduce/)
Resolver problemas con reduce y encadenar métodos.

#### [Ejercicio 05: Métodos ES2022](2-practicas/ejercicio-05-metodos-es2022/)
Practicar `at()` y `Object.hasOwn()` en escenarios reales.

---

### 3️⃣ Proyecto: Gestor de Tareas

**[Ver Proyecto Completo](3-proyecto/)**

Aplicación de gestión de tareas que utiliza:
- Spread/Rest para manipulación de datos
- Array methods para filtrado y transformación
- Object enhancements para código limpio
- Default parameters para configuración
- Encadenamiento de métodos

---

## ⏱️ Distribución del Tiempo (8 horas)

| Actividad     | Tiempo | Descripción                        |
| ------------- | ------ | ---------------------------------- |
| **Teoría**    | 2.5h   | Lectura de los 5 archivos teóricos |
| **Prácticas** | 3h     | Completar 4 ejercicios guiados     |
| **Proyecto**  | 2h     | Gestor de tareas interactivo       |
| **Recursos**  | 0.5h   | Revisión de material adicional     |

---

## 📌 Entregables

### 📦 Proyecto (100%)

El **único entregable** para esta semana es el proyecto:

- [ ] **Proyecto "Gestor de Tareas" funcional**
- [ ] Código usando ES2023 correctamente (spread, rest, array methods)
- [ ] README del proyecto documentado
- [ ] Código limpio y bien comentado en inglés
- [ ] Uso correcto de map, filter, reduce
- [ ] Despliegue funcional (opcional)

> **Nota**: Los ejercicios prácticos y la teoría son materiales de aprendizaje para prepararte para el proyecto, pero no se entregan de forma separada. El proyecto debe demostrar tu dominio de todos los conceptos aprendidos.

---

## 🎯 Temas Clave

- **Spread Operator** (`...`): Expandir elementos
- **Rest Parameters**: Agrupar argumentos
- **Default Parameters**: Valores por defecto
- **map()**: Transformar cada elemento
- **filter()**: Seleccionar elementos
- **reduce()**: Reducir a un valor
- **Property Shorthand**: `{ name }` en vez de `{ name: name }`
- **Method Shorthand**: `{ method() {} }` en vez de `{ method: function() {} }`

---

## 📚 Recursos Destacados

### Lectura Esencial
- [MDN - Spread syntax](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [MDN - Rest parameters](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [MDN - Array methods](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)

### Videos Recomendados
- JavaScript Array Methods - Traversy Media
- Spread Operator Explained - Web Dev Simplified
- Reduce Method Tutorial - Fun Fun Function

---

## ✅ Criterios de Éxito

Para completar exitosamente esta semana:

- [ ] Entender la diferencia entre spread y rest
- [ ] Usar array methods con confianza
- [ ] Dominar map, filter, reduce
- [ ] Aplicar object enhancements naturalmente
- [ ] Practicar con los ejercicios guiados (no se entregan)
- [ ] **Entregar el proyecto funcional** ⭐ (único entregable)
- [ ] Alcanzar mínimo 70% en la evaluación del proyecto

---

## 🔗 Navegación

- [← Semana 01: Introducción a ES2023](../week-01-introduccion_javascript_moderno_es2023/README.md)
- [→ Semana 03: Próximamente](#)
- [↑ Volver al inicio del bootcamp](../../README.md)

---

## 💡 Consejos para Esta Semana

1. **Practica con datos reales**: Usa arrays de objetos que simulen datos de API
2. **Encadena métodos**: Combina map, filter y reduce
3. **Consola siempre**: Usa `console.log()` para ver resultados intermedios
4. **Performance**: map/filter son más legibles que bucles for
5. **Immutability**: Spread crea copias, no muta originales

---

## 🎓 Conceptos Avanzados (Opcional)

Si terminas antes, explora:
- Array.from() para crear arrays
- Array.flat() para aplanar arrays anidados
- Object.fromEntries() para convertir entries a objeto
- Composición de funciones con reduce
- Transducers (concepto avanzado)

---

_Semana 2 de 28 - JavaScript Moderno Bootcamp_
