# 🚀 Semana 4: Destructuring y Módulos ES2023

## 🎯 Objetivos de Aprendizaje

Al finalizar esta semana, serás capaz de:

- ✅ Aplicar destructuring en arrays para extraer valores
- ✅ Usar destructuring en objetos con alias y valores por defecto
- ✅ Trabajar con destructuring anidado en estructuras complejas
- ✅ Crear módulos ES2023 con `import` y `export`
- ✅ Diferenciar entre named exports y default exports
- ✅ Implementar dynamic imports para carga bajo demanda
- ✅ Organizar proyectos con arquitectura modular

---

## 📚 Requisitos Previos

- ✅ Haber completado las Semanas 1, 2 y 3
- ✅ Dominar clases ES2023 y herencia
- ✅ Comprender spread operator y rest parameters
- ✅ Conocer arrow functions y métodos de arrays

---

## 🗂️ Estructura de la Semana

```
week-04-destructuring_modulos_es2023/
├── README.md                    # Este archivo
├── rubrica-evaluacion.md        # Criterios de evaluación
├── 0-assets/                    # Diagramas y recursos visuales
│   ├── 01-destructuring-arrays.svg
│   ├── 02-destructuring-objetos.svg
│   ├── 03-modulos-es6.svg
│   ├── 04-named-default-exports.svg
│   ├── 05-dynamic-imports.svg
│   └── README.md
├── 1-teoria/                    # Material teórico
│   ├── 01-destructuring-arrays.md
│   ├── 02-destructuring-objetos.md
│   ├── 03-modulos-es6.md
│   ├── 04-named-default-exports.md
│   └── 05-dynamic-imports.md
├── 2-practicas/                 # Ejercicios guiados
│   ├── ejercicio-01-destructuring-arrays/
│   ├── ejercicio-02-destructuring-objetos/
│   ├── ejercicio-03-modulos-basicos/
│   └── ejercicio-04-imports-avanzados/
├── 3-proyecto/                  # Proyecto semanal
│   └── inventario-modular/
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
| [Destructuring de Arrays](1-teoria/01-destructuring-arrays.md) | 25 min | Extracción de valores, skip, rest |
| [Destructuring de Objetos](1-teoria/02-destructuring-objetos.md) | 30 min | Alias, defaults, anidado |
| [Módulos ES2023](1-teoria/03-modulos-es6.md) | 35 min | import/export, organización |
| [Named vs Default Exports](1-teoria/04-named-default-exports.md) | 25 min | Cuándo usar cada tipo |
| [Dynamic Imports](1-teoria/05-dynamic-imports.md) | 25 min | Carga bajo demanda, code splitting |

### 2️⃣ Prácticas (3 horas)

| Ejercicio | Duración | Nivel | Objetivo |
|-----------|----------|-------|----------|
| Destructuring Arrays | 40 min | Básico | Extraer y manipular arrays |
| Destructuring Objetos | 45 min | Básico | Trabajar con objetos complejos |
| Módulos Básicos | 50 min | Intermedio | Crear arquitectura modular |
| Imports Avanzados | 45 min | Intermedio | Dynamic imports y re-exports |

### 3️⃣ Proyecto (2 horas)

**Sistema de Gestión de Inventario Modular**

Aplicación completa con arquitectura modular que incluye:
- Módulos para productos, categorías y reportes
- Destructuring en parámetros de funciones
- Dynamic imports para cargar funcionalidades
- Patrón barrel exports para organización

---

## ⏱️ Distribución del Tiempo

| Actividad | Tiempo | Porcentaje |
|-----------|--------|------------|
| 📖 Teoría | 2.5 horas | 31% |
| 💻 Prácticas | 3 horas | 38% |
| 🏗️ Proyecto | 2 horas | 25% |
| 📚 Recursos | 0.5 horas | 6% |
| **Total** | **8 horas** | **100%** |

---

## 📌 Entregables

### 📦 Proyecto (100%)

El **único entregable** para esta semana es el proyecto:

- [ ] **Proyecto "Sistema de Inventario Modular" funcional**
- [ ] Uso avanzado de destructuring en arrays y objetos
- [ ] Arquitectura modular con import/export correctos
- [ ] Implementación de dynamic imports (lazy loading)
- [ ] Código limpio y bien comentado en inglés
- [ ] README del proyecto documentado

> **Nota**: Los ejercicios prácticos y la teoría son materiales de aprendizaje para prepararte para el proyecto, pero no se entregan de forma separada. El proyecto debe demostrar tu dominio de destructuring y módulos ES2023.

### Extras Opcionales
- Extender el proyecto con localStorage
- Implementar lazy loading de módulos adicionales
- Crear documentación de módulos con JSDoc

---

## 🎯 Competencias a Desarrollar

| Competencia | Nivel |
|-------------|-------|
| Destructuring de datos | ⭐⭐⭐ Intermedio |
| Arquitectura modular | ⭐⭐⭐ Intermedio |
| Organización de código | ⭐⭐⭐ Intermedio |
| Optimización de carga | ⭐⭐ Básico |

---

## 💡 Consejos para esta Semana

1. **Practica destructuring** en cada oportunidad - parámetros de funciones, retornos, etc.
2. **Planifica la estructura de módulos** antes de codificar
3. **Usa un servidor local** para probar módulos ES2023 (no funcionan con `file://`)
4. **Nombra exports de forma descriptiva** para mejor legibilidad

---

## 🔗 Navegación

| ⬅️ Anterior | 🏠 Inicio | ➡️ Siguiente |
|-------------|-----------|--------------|
| [Semana 3: Clases y POO](../week-03-clases_programacion_orientada_objetos/README.md) | [Bootcamp](../README.md) | [Semana 5: Arrays Avanzados](../week-05-arrays_avanzados/README.md) |

---

## 📖 Referencias Rápidas

```javascript
// Destructuring de array
const [first, second, ...rest] = [1, 2, 3, 4, 5];

// Destructuring de objeto
const { name, age = 18 } = user;
const { address: { city } } = person;

// Named exports
export const sum = (a, b) => a + b;
export { sum, multiply };

// Default export
export default class Calculator { }

// Imports
import Calculator from './calculator.js';
import { sum, multiply } from './math.js';

// Dynamic import
const module = await import('./module.js');
```

---

_Semana 4 de 28 | Etapa 1: Fundamentos Modernos_
