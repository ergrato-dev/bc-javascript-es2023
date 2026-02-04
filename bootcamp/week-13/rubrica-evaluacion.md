# 📊 Rúbrica de Evaluación - Week 13

## 🎯 Programación Asincrónica: Callbacks y Promises

---

## 📋 Distribución de Evaluación

| Tipo de Evidencia | Peso | Descripción |
|-------------------|------|-------------|
| **🧠 Conocimiento** | 30% | Comprensión teórica de conceptos |
| **💪 Desempeño** | 40% | Ejecución de prácticas guiadas |
| **📦 Producto** | 30% | Proyecto HTTP Simulator |

**Calificación mínima para aprobar**: 70% en cada tipo de evidencia

---

## 🧠 1. Evidencia de Conocimiento (30%)

### Criterios de Evaluación

| Criterio | Excelente (100%) | Satisfactorio (80%) | Básico (70%) | Insuficiente (<70%) |
|----------|------------------|---------------------|--------------|---------------------|
| **Event Loop** | Explica claramente Call Stack, Callback Queue y Microtask Queue con ejemplos | Comprende los conceptos pero con dificultad para explicarlos | Conocimiento superficial del Event Loop | No comprende el Event Loop |
| **Callbacks** | Identifica patrones, ventajas y desventajas (callback hell) | Usa callbacks correctamente | Comprende callbacks básicos | No comprende callbacks |
| **Promises** | Domina estados, métodos y manejo de errores | Usa Promises correctamente | Conocimiento básico de Promises | No comprende Promises |
| **Promise Combinators** | Distingue claramente all/race/allSettled/any y sus casos de uso | Conoce los combinators principales | Conocimiento superficial | No distingue los combinators |

### Métodos de Evaluación

- ✅ Cuestionario teórico (10 preguntas)
- ✅ Explicación verbal de conceptos
- ✅ Análisis de código asíncrono
- ✅ Identificación de errores comunes

### Puntuación: _____ / 30 puntos

---

## 💪 Ejercicios de Práctica (No se entregan)

> **Importante**: Materiales de aprendizaje. **No se entregan de forma separada**.

### Práctica 1: Callbacks y Event Loop (10 puntos)

| Criterio | Puntos | ✓ |
|----------|--------|---|
| Completa todos los pasos del ejercicio | 4 | ☐ |
| Código funcional y sin errores | 3 | ☐ |
| Comprende el orden de ejecución | 2 | ☐ |
| Documenta aprendizajes | 1 | ☐ |

### Práctica 2: Promises Básicas (10 puntos)

| Criterio | Puntos | ✓ |
|----------|--------|---|
| Crea Promises correctamente | 3 | ☐ |
| Usa .then() y .catch() apropiadamente | 3 | ☐ |
| Maneja errores correctamente | 2 | ☐ |
| Código limpio y comentado | 2 | ☐ |

### Práctica 3: Promise Chaining (10 puntos)

| Criterio | Puntos | ✓ |
|----------|--------|---|
| Encadena Promises correctamente | 4 | ☐ |
| Pasa datos entre Promises | 3 | ☐ |
| Maneja errores en la cadena | 2 | ☐ |
| Usa .finally() apropiadamente | 1 | ☐ |

### Práctica 4: Promise Combinators (10 puntos)

| Criterio | Puntos | ✓ |
|----------|--------|---|
| Implementa Promise.all() correctamente | 2 | ☐ |
| Implementa Promise.race() correctamente | 2 | ☐ |
| Implementa Promise.allSettled() correctamente | 2 | ☐ |
| Implementa Promise.any() correctamente | 2 | ☐ |
| Comprende diferencias entre combinators | 2 | ☐ |

### Puntuación: _____ / 40 puntos

---

## 📦 3. Evidencia de Producto (30%)

### Proyecto: HTTP Simulator

#### Funcionalidad (15 puntos)

| Criterio | Puntos | ✓ |
|----------|--------|---|
| **Módulo HTTP (http.js)** | | |
| - Función `simulateRequest()` funcional | 2 | ☐ |
| - Métodos HTTP (GET/POST/PUT/DELETE) implementados | 2 | ☐ |
| - Timeout con Promise.race() implementado | 2 | ☐ |
| - Combinators (all/race/allSettled) funcionan | 3 | ☐ |
| **Módulo UI (ui.js)** | | |
| - Muestra resultados correctamente | 2 | ☐ |
| - Maneja estados (loading/success/error) | 2 | ☐ |
| - Actualiza estadísticas correctamente | 2 | ☐ |

#### Calidad del Código (10 puntos)

| Criterio | Puntos | ✓ |
|----------|--------|---|
| Nomenclatura clara y consistente | 2 | ☐ |
| Código modular y bien organizado | 2 | ☐ |
| Manejo robusto de errores | 2 | ☐ |
| Comentarios útiles en código complejo | 2 | ☐ |
| Uso correcto de sintaxis ES2023 | 2 | ☐ |

#### Mejores Prácticas (5 puntos)

| Criterio | Puntos | ✓ |
|----------|--------|---|
| Usa const/let apropiadamente | 1 | ☐ |
| Arrow functions donde corresponde | 1 | ☐ |
| Destructuring cuando es útil | 1 | ☐ |
| Evita código repetitivo (DRY) | 1 | ☐ |
| Interface de usuario responsiva | 1 | ☐ |

### Puntuación: _____ / 30 puntos

---

## 📊 Resumen de Calificación

| Evidencia | Puntos Obtenidos | Puntos Máximos | Porcentaje |
|-----------|------------------|----------------|------------|
| 🧠 Conocimiento | _____ | 30 | _____% |
| 💪 Desempeño | _____ | 40 | _____% |
| 📦 Producto | _____ | 30 | _____% |
| **TOTAL** | **_____** | **100** | **_____%** |

---

## 🎓 Escala de Calificación

| Rango | Calificación | Nivel |
|-------|--------------|-------|
| 90-100% | **Excelente** | Dominio completo de conceptos asíncronos |
| 80-89% | **Muy Bueno** | Buen manejo de Promises y callbacks |
| 70-79% | **Satisfactorio** | Comprensión básica suficiente |
| 60-69% | **Insuficiente** | Requiere refuerzo |
| <60% | **No Aprobado** | Debe repetir la semana |

---

## ✅ Criterios Adicionales de Aprobación

Para aprobar la Week 13, el estudiante debe:

- [ ] Obtener mínimo 70% en CADA tipo de evidencia
- [ ] Entregar el proyecto HTTP Simulator funcional
- [ ] Completar las 4 prácticas guiadas
- [ ] Demostrar comprensión del Event Loop
- [ ] Usar Promises correctamente en código real
- [ ] Manejar errores asíncronos apropiadamente

---

## 📝 Comentarios del Instructor

```
_______________________________________________________________

_______________________________________________________________

_______________________________________________________________

_______________________________________________________________
```

---

## 🚀 Recomendaciones de Mejora

**Para estudiantes que obtuvieron 70-79%:**
- Revisar material teórico sobre Event Loop
- Practicar más con Promise chaining
- Reforzar manejo de errores asíncronos

**Para estudiantes que obtuvieron 80-89%:**
- Profundizar en Promise combinators
- Experimentar con APIs públicas
- Optimizar código del proyecto

**Para estudiantes que obtuvieron 90-100%:**
- Investigar async/await (próxima semana)
- Resolver el Reto Semanal
- Ayudar a compañeros con dudas

---

## 📅 Información de Entrega

- **Fecha de entrega**: ____ / ____ / ____
- **Hora límite**: ____ : ____
- **Método de entrega**: GitHub / Plataforma LMS
- **Formato requerido**: Código fuente + README con instrucciones

---

_Última actualización: Diciembre 2024_
