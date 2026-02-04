# 📅 Semana 13: Programación Asincrónica - Callbacks y Promises

> **🎉 Bienvenido a la Etapa 2: Intermedio**
> Esta semana marca el inicio de una nueva etapa donde aprenderás a manejar operaciones asíncronas, una habilidad fundamental en el desarrollo JavaScript moderno.

---

## 🎯 Objetivos de Aprendizaje

Al finalizar esta semana, serás capaz de:

- ✅ Comprender la naturaleza asincrónica de JavaScript
- ✅ Identificar y resolver el problema del "callback hell"
- ✅ Crear y utilizar Promises para operaciones asíncronas
- ✅ Encadenar Promises con `.then()` y `.catch()`
- ✅ Manejar múltiples Promises con `Promise.all()`, `Promise.race()`, `Promise.allSettled()` y `Promise.any()`
- ✅ Implementar manejo de errores robusto en código asíncrono
- ✅ Construir aplicaciones que simulan operaciones asíncronas

---

## 📚 Requisitos Previos

Para aprovechar al máximo esta semana, debes estar cómodo con:

- **Week 01-02**: Arrow functions, template literals, destructuring
- **Week 03**: Clases y métodos
- **Week 11**: Manejo de errores con try/catch
- **Conceptos básicos**: Funciones de orden superior, callbacks

---

## 🗂️ Estructura de la Semana

```
week-13/
├── README.md                           # Este archivo
├── RETO-SEMANAL.md                     # Desafío adicional opcional
├── rubrica-evaluacion.md               # Criterios de evaluación
├── 0-assets/                           # Recursos visuales
│   └── README.md
├── 1-teoria/                           # Material teórico
│   ├── 01-introduccion-asincronia.md
│   ├── 02-callbacks-problemas.md
│   ├── 03-promises-fundamentos.md
│   └── 04-promise-methods.md
├── 2-practicas/                        # Ejercicios guiados
│   ├── practica-01-callbacks/
│   ├── practica-02-promises-basicas/
│   ├── practica-03-promise-chaining/
│   └── practica-04-promise-combinators/
├── 3-proyecto/                         # Proyecto integrador
│   └── http-simulator/
│       ├── README.md
│       ├── index.html
│       ├── styles.css
│       ├── starter/
│       └── solution/
├── 4-recursos/                         # Recursos adicionales
│   ├── ebooks-free/
│   ├── videografia/
│   └── webgrafia/
└── 5-glosario/                         # Glosario de términos
    └── README.md
```

---

## 📝 Contenido

### 1️⃣ Teoría (2.5 horas)

| # | Tema | Archivo | Duración |
|---|------|---------|----------|
| 01 | Introducción a la Asincronía | [01-introduccion-asincronia.md](./1-teoria/01-introduccion-asincronia.md) | 40 min |
| 02 | Callbacks y sus Problemas | [02-callbacks-problemas.md](./1-teoria/02-callbacks-problemas.md) | 35 min |
| 03 | Promises: Fundamentos | [03-promises-fundamentos.md](./1-teoria/03-promises-fundamentos.md) | 45 min |
| 04 | Métodos de Promise (all, race, etc.) | [04-promise-methods.md](./1-teoria/04-promise-methods.md) | 30 min |

### 2️⃣ Prácticas (3 horas)

| # | Práctica | Descripción | Duración |
|---|----------|-------------|----------|
| 01 | [Callbacks](./2-practicas/practica-01-callbacks/) | Trabajar con callbacks y event loop | 40 min |
| 02 | [Promises Básicas](./2-practicas/practica-02-promises-basicas/) | Crear y consumir Promises | 45 min |
| 03 | [Promise Chaining](./2-practicas/practica-03-promise-chaining/) | Encadenar operaciones asíncronas | 50 min |
| 04 | [Promise Combinators](./2-practicas/practica-04-promise-combinators/) | Promise.all, race, allSettled, any | 45 min |

### 3️⃣ Proyecto (2 horas)

| Proyecto | Descripción | Enlace |
|----------|-------------|--------|
| 🌐 HTTP Simulator | Simulador de solicitudes HTTP con Promises | [3-proyecto/http-simulator](./3-proyecto/http-simulator/) |

**Características del proyecto**:
- Simulación realista de peticiones HTTP
- Sistema de estados (pending, fulfilled, rejected)
- Manejo de timeouts y errores
- Combinación de múltiples requests
- UI interactiva con feedback visual

---

## ⏱️ Distribución del Tiempo

| Actividad | Tiempo | Descripción |
|-----------|--------|-------------|
| 📖 **Teoría** | 2.5h | Leer material teórico y estudiar ejemplos |
| 💻 **Prácticas** | 3h | Completar los 4 ejercicios guiados |
| 🚀 **Proyecto** | 2h | Desarrollar el simulador HTTP |
| 📚 **Recursos** | 0.5h | Revisar documentación y recursos adicionales |
| **TOTAL** | **8h** | Tiempo estimado semanal |

---

## 📌 Entregables

### 📦 Proyecto (100%)

El **único entregable** para esta semana es el proyecto:

- [ ] **Proyecto "HTTP Simulator" funcional**
- [ ] Código funcional y completo
- [ ] Manejo correcto de Promises
- [ ] UI interactiva implementada
- [ ] Sistema de errores robusto
- [ ] Uso de Promise methods (all, race, allSettled, any)

> **Nota**: Los ejercicios prácticos son materiales de aprendizaje. No se entregan de forma separada.

### 4. Reto Semanal (Opcional - Bonus)
- [ ] Completar el desafío en [RETO-SEMANAL.md](./RETO-SEMANAL.md)

---

## 🎓 Conceptos Clave

Esta semana trabajarás con:

- **Event Loop**: Modelo de concurrencia de JavaScript
- **Call Stack**: Pila de ejecución
- **Callback Queue**: Cola de callbacks
- **Microtask Queue**: Cola de microtareas (Promises)
- **Promise**: Objeto que representa el resultado de una operación asíncrona
- **Promise States**: pending, fulfilled, rejected
- **Promise Chaining**: Encadenar operaciones asíncronas
- **Promise Combinators**: all, race, allSettled, any

---

## 💡 Consejos de Estudio

1. **Visualiza el Event Loop**: Usa herramientas como [Loupe](http://latentflip.com/loupe/) para entender el flujo de ejecución
2. **Practica el encadenamiento**: Las Promises se vuelven más fáciles con la práctica
3. **Maneja siempre los errores**: Usa `.catch()` en todas tus Promises
4. **Experimenta con los combinators**: Entiende cuándo usar each uno
5. **No tengas miedo de los errores**: Son parte del aprendizaje asíncrono

---

## 🔗 Navegación

- **⬅️ Anterior**: [Week 12 - Proyecto Integrador Fundamentos](../week-12/README.md)
- **➡️ Siguiente**: [Week 14 - Async/Await](../week-14/README.md)
- **🏠 Inicio**: [Volver al Bootcamp](../../README.md)

---

## 📖 Recursos Adicionales

Visita la carpeta [4-recursos](./4-recursos/) para encontrar:
- 📚 Libros recomendados sobre asincronía en JavaScript
- 🎥 Videos explicativos del Event Loop
- 🔗 Artículos y documentación oficial
- 🛠️ Herramientas de visualización

---

**¡Buena suerte! 🚀 Esta semana es el inicio de tu dominio de la programación asíncrona.**
