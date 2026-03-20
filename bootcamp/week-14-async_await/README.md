# 📘 Semana 14: Async/Await

## 🎯 Objetivos de Aprendizaje

Al finalizar esta semana, serás capaz de:

- ✅ Comprender y utilizar funciones `async`
- ✅ Aplicar `await` para manejar operaciones asíncronas
- ✅ Implementar manejo de errores con `try/catch` en código asíncrono
- ✅ Distinguir entre ejecución secuencial y paralela
- ✅ Usar `for await...of` para iterables asíncronos
- ✅ Aplicar top-level await en módulos ES (ES2022)

---

## 📚 Requisitos Previos

Antes de iniciar esta semana, debes dominar:

- ✅ Promises (semana 13)
- ✅ Promise chaining y combinadores
- ✅ Manejo de errores con `.catch()`
- ✅ Módulos ES (`import`/`export`)

---

## 🗂️ Estructura de la Semana

```
week-14-async_await/
├── README.md                          # Este archivo
├── RETO-SEMANAL.md                    # Reto adicional (opcional)
├── rubrica-evaluacion.md              # Criterios de evaluación
├── 0-assets/                          # Diagramas y recursos visuales
├── 1-teoria/                          # Material teórico
│   ├── 01-async-functions.md          # Funciones async
│   ├── 02-await-keyword.md            # Palabra clave await
│   ├── 03-error-handling.md           # Manejo de errores
│   └── 04-advanced-patterns.md        # Patrones avanzados
├── 2-practicas/                       # Ejercicios guiados
│   ├── practica-01-async-basico/      # Sintaxis básica
│   ├── practica-02-error-handling/    # Manejo de errores
│   ├── practica-03-parallel-vs-sequential/  # Ejecución paralela
│   └── practica-04-async-iteration/   # Iteración asíncrona
├── 3-proyecto/                        # Proyecto semanal
│   ├── README.md                      # Instrucciones del proyecto
│   ├── index.html                     # Interfaz
│   ├── styles.css                     # Estilos
│   ├── starter/                       # Código inicial
│   └── solution/                      # Solución de referencia
├── 4-recursos/                        # Recursos adicionales
│   ├── ebooks-free/
│   ├── videografia/
│   └── webgrafia/
└── 5-glosario/                        # Términos clave
    └── README.md
```

---

## 📝 Contenidos

### 1️⃣ Teoría (2.5 horas)

| Archivo | Tema | Duración |
|---------|------|----------|
| [01-async-functions.md](1-teoria/01-async-functions.md) | Funciones async y su comportamiento | 40 min |
| [02-await-keyword.md](1-teoria/02-await-keyword.md) | Palabra clave await y flujo de ejecución | 40 min |
| [03-error-handling.md](1-teoria/03-error-handling.md) | Manejo de errores con try/catch | 35 min |
| [04-advanced-patterns.md](1-teoria/04-advanced-patterns.md) | Patrones avanzados y top-level await | 35 min |

### 2️⃣ Prácticas (3 horas)

| Práctica | Tema | Duración |
|----------|------|----------|
| [Práctica 01](2-practicas/practica-01-async-basico/) | Sintaxis básica de async/await | 45 min |
| [Práctica 02](2-practicas/practica-02-error-handling/) | Manejo de errores en async/await | 45 min |
| [Práctica 03](2-practicas/practica-03-parallel-vs-sequential/) | Ejecución paralela vs secuencial | 45 min |
| [Práctica 04](2-practicas/practica-04-async-iteration/) | for await...of y generadores async | 45 min |

### 3️⃣ Proyecto (2 horas)

| Proyecto | Descripción |
|----------|-------------|
| [Sistema de Carga de Datos](3-proyecto/) | Aplicación que carga datos de múltiples fuentes de forma asíncrona |

---

## ⏱️ Distribución del Tiempo (8 horas)

| Actividad | Tiempo | Porcentaje |
|-----------|--------|------------|
| 📖 Teoría | 2.5h | 31% |
| 💻 Prácticas | 3h | 38% |
| 🏗️ Proyecto | 2h | 25% |
| 📚 Recursos | 0.5h | 6% |
| **Total** | **8h** | **100%** |

---

## 📌 Entregables

> **🎯 ÚNICO ENTREGABLE**: El proyecto semanal es el **único entregable obligatorio**.

El proyecto debe demostrar:

1. ✅ Uso correcto de `async/await`
2. ✅ Manejo de errores con `try/catch`
3. ✅ Ejecución paralela cuando sea apropiado
4. ✅ Adaptación al dominio asignado

---

## 🔗 Navegación

| ⬅️ Anterior | 🏠 Inicio | Siguiente ➡️ |
|-------------|-----------|--------------|
| [Semana 13: Promises](../week-13-programacion_asincronica_callbacks_promises/README.md) | [Bootcamp](../README.md) | [Semana 15: Fetch API](../week-15-fetch_api/README.md) |

---

## 💡 Tips de la Semana

> **💡 Tip #1**: `async/await` es azúcar sintáctico sobre Promises. Todo lo que aprendiste en la semana 13 sigue siendo válido.

> **💡 Tip #2**: Usa `Promise.all()` con `await` cuando necesites ejecutar operaciones en paralelo: `const [a, b] = await Promise.all([fetchA(), fetchB()])`.

> **💡 Tip #3**: El error más común es olvidar `await` antes de una Promise. El código se ejecutará, pero no esperará el resultado.

---

_Semana 14 de 28 · Etapa 2: Intermedio · Programación Asincrónica_
