# 📊 Rúbrica de Evaluación - Semana 5

## 🎯 Arrays Avanzados

---

## 📋 Información General

| Aspecto | Detalle |
|---------|---------|
| **Semana** | 5 |
| **Tema** | Arrays Avanzados |
| **Duración** | 8 horas |
| **Fecha límite** | Final de la semana 5 |

## 🎯 Distribución de Evidencias

| Tipo de Evidencia | Peso     | Puntaje Mínimo |
| ----------------- | -------- | -------------- |
| 📦 Producto       | 100%     | 70/100 (70%)   |
| **TOTAL**         | **100%** | **70/100**     |

> **Nota**: Los ejercicios prácticos son materiales de aprendizaje. No se entregan de forma separada.

---

## 🧠 Material de Conocimiento (No se entrega)

> **Importante**: Criterios de autoevaluación. Tu comprensión se evalúa en el proyecto.

### Autoevaluación Teórica

| Criterio | Excelente (100%) | Bueno (75%) | Suficiente (50%) | Insuficiente (0%) |
|----------|------------------|-------------|------------------|-------------------|
| **flat() y flatMap()** | Explica con precisión ambos métodos, sus diferencias, y cuándo usar cada uno | Comprende ambos métodos con ejemplos correctos | Conoce los métodos pero confunde casos de uso | No comprende los métodos |
| **Array.from() y Array.of()** | Domina la creación de arrays desde cualquier iterable y la función de mapeo | Comprende la creación básica desde iterables | Conoce la sintaxis pero no los casos de uso | No comprende la creación de arrays |
| **Chaining** | Diseña cadenas complejas optimizadas y explica el flujo | Encadena métodos correctamente | Encadena métodos básicos con errores | No comprende el concepto |
| **Transformaciones** | Aplica patrones de transformación complejos y optimizados | Transforma datos correctamente | Realiza transformaciones básicas | No puede transformar datos |
| **Sort personalizado** | Implementa comparadores multi-criterio y entiende estabilidad | Implementa comparadores correctos | Ordena con comparadores simples | No comprende sort |

### Puntuación Mínima: 70%

---

## 💪 Ejercicios de Práctica (No se entregan)

> **Importante**: Materiales de aprendizaje guiados. **No se entregan de forma separada**.

### Ejercicios Guiados

#### Ejercicio 1: flat y flatMap (Práctica)

| Criterio | Puntos | Descripción |
|----------|--------|-------------|
| Aplanar arrays | 3 | Usa `flat()` con diferentes niveles de profundidad |
| flatMap correcto | 3 | Aplica `flatMap()` para mapear y aplanar |
| Casos edge | 2 | Maneja arrays vacíos y valores `null` |
| Código limpio | 2 | Sintaxis ES2023, nombres descriptivos |

#### Ejercicio 2: Array.from y Array.of (10%)

| Criterio | Puntos | Descripción |
|----------|--------|-------------|
| Array.from básico | 2 | Crea arrays desde strings, Sets, Maps |
| Función de mapeo | 3 | Usa el segundo argumento de `Array.from()` |
| Array.of correcto | 2 | Diferencia `Array.of()` de `Array()` |
| Iterables custom | 3 | Crea arrays desde NodeList y argumentos |

#### Ejercicio 3: Chaining Complejo (10%)

| Criterio | Puntos | Descripción |
|----------|--------|-------------|
| Cadenas correctas | 3 | Encadena múltiples métodos sin errores |
| Orden óptimo | 3 | Ordena métodos para mejor rendimiento |
| Transformaciones | 2 | Logra transformaciones complejas |
| Legibilidad | 2 | Código bien formateado e indentado |

#### Ejercicio 4: Sort y Transformaciones (10%)

| Criterio | Puntos | Descripción |
|----------|--------|-------------|
| Sort numérico | 2 | Ordena números correctamente |
| Sort alfabético | 2 | Ordena strings con locale |
| Multi-criterio | 3 | Ordena por múltiples campos |
| Transformación completa | 3 | Pipeline de transformación funcional |

### Puntuación Mínima: 70%

---

## 📦 Evidencia de Producto (30%)

### Proyecto: Dashboard de Análisis de Datos

| Criterio | Excelente (100%) | Bueno (75%) | Suficiente (50%) | Insuficiente (0%) |
|----------|------------------|-------------|------------------|-------------------|
| **Procesamiento de datos** (25%) | Pipeline completo con múltiples transformaciones optimizadas | Pipeline funcional con transformaciones correctas | Transformaciones básicas funcionando | No procesa datos |
| **Chaining aplicado** (25%) | Chaining complejo, legible y optimizado | Chaining correcto y funcional | Chaining básico | No usa chaining |
| **Ordenamiento** (20%) | Sort multi-criterio con opciones de dirección | Sort por múltiples criterios | Sort básico funcional | No ordena datos |
| **Agregaciones** (15%) | Estadísticas completas (suma, promedio, min, max, conteo) | Agregaciones principales funcionando | Agregaciones básicas | No agrega datos |
| **Interfaz** (15%) | UI profesional, responsive, con feedback visual | UI funcional y clara | UI básica pero usable | UI no funcional |

### Características Mínimas Requeridas

- [ ] Cargar y procesar dataset de ejemplo
- [ ] Filtrar datos por múltiples criterios
- [ ] Ordenar por al menos 3 campos diferentes
- [ ] Mostrar estadísticas agregadas
- [ ] Exportar datos transformados
- [ ] Tabla HTML con los resultados

### Puntuación Mínima: 70%

---

## 📈 Rúbrica de Calidad de Código

| Aspecto | Excelente | Bueno | Suficiente | Insuficiente |
|---------|-----------|-------|------------|--------------|
| **Sintaxis ES2023** | Uso consistente de ES2023 en todo el código | Mayormente ES2023 con pocas excepciones | Mezcla de sintaxis | Sintaxis antigua |
| **Inmutabilidad** | No muta arrays originales, usa métodos puros | Mayoría de operaciones inmutables | Algunas mutaciones innecesarias | Muta datos constantemente |
| **Funciones puras** | Todas las funciones son puras y predecibles | Mayoría de funciones puras | Algunas funciones con efectos secundarios | Funciones con muchos efectos |
| **Nombrado** | Nombres descriptivos y consistentes | Buenos nombres en general | Nombres aceptables | Nombres confusos |
| **Documentación** | Comentarios claros donde son necesarios | Algunos comentarios útiles | Pocos comentarios | Sin comentarios |

---

## 🎯 Matriz de Competencias

| Competencia | Nivel Esperado | Indicador |
|-------------|----------------|-----------|
| Manipulación de arrays | Intermedio-Alto | Usa métodos avanzados con fluidez |
| Transformación de datos | Intermedio | Transforma datasets complejos |
| Pensamiento funcional | Intermedio | Aplica paradigma funcional |
| Resolución de problemas | Intermedio | Soluciona problemas con arrays eficientemente |
| Código limpio | Intermedio | Escribe código mantenible |

---

## 📝 Checklist de Entrega

### Ejercicios Prácticos
- [ ] Ejercicio 1: flat y flatMap completo
- [ ] Ejercicio 2: Array.from y Array.of completo
- [ ] Ejercicio 3: Chaining completo
- [ ] Ejercicio 4: Sort y transformaciones completo
- [ ] Todos los tests pasan (si aplica)

### Proyecto
- [ ] README.md con instrucciones
- [ ] Código fuente completo en `starter/`
- [ ] Dataset de ejemplo incluido
- [ ] Interfaz HTML funcional
- [ ] Sin errores en consola

### Documentación
- [ ] Código comentado donde sea necesario
- [ ] Nombres de variables descriptivos
- [ ] Estructura de archivos clara

---

## 📊 Cálculo de Calificación Final

```
Calificación = (Conocimiento × 0.30) + (Desempeño × 0.40) + (Producto × 0.30)
```

### Escala de Calificación

| Rango | Calificación | Descripción |
|-------|--------------|-------------|
| 90-100% | Excelente | Dominio completo de arrays avanzados |
| 80-89% | Muy Bueno | Sólido conocimiento con pequeñas áreas de mejora |
| 70-79% | Bueno | Cumple requisitos mínimos satisfactoriamente |
| 60-69% | Suficiente | Necesita refuerzo en algunos temas |
| < 60% | Insuficiente | Requiere repetir la semana |

---

## 🚀 Criterios de Excelencia (Bonus)

Puntos adicionales por:

- ✨ Implementar método `groupBy()` personalizado
- ✨ Crear utilidades de array reutilizables
- ✨ Optimizar rendimiento con mediciones
- ✨ Implementar búsqueda binaria
- ✨ Documentación excepcional
- ✨ Tests unitarios para funciones de transformación

---

*Rúbrica versión 1.0 - Semana 5*
