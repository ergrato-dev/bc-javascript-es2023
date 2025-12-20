# 📋 Rúbrica de Evaluación - Week 05: Arrays Avanzados

## 📊 Estructura de Evaluación

La evaluación de esta semana se divide en **tres componentes**:

| Componente         | Ponderación | Descripción                           |
| ------------------ | ----------- | ------------------------------------- |
| 🧠 **Conocimiento** | 30%         | Evaluaciones teóricas y cuestionarios |
| 💪 **Desempeño**    | 40%         | Ejercicios prácticos en clase         |
| 📦 **Producto**     | 30%         | Proyecto entregable funcional         |

**Nota Mínima de Aprobación**: 70% en cada componente

---

## 🧠 CONOCIMIENTO (30%)

### Cuestionario Teórico (15 puntos)

Evalúa la comprensión de conceptos clave mediante preguntas de opción múltiple y respuesta corta.

**Temas a evaluar:**
- ✓ Diferencia entre `flat()` y `flatMap()`
- ✓ Parámetro de profundidad en `flat()`
- ✓ Casos de uso de `Array.from()`
- ✓ Diferencia entre `Array.from()` y `Array.of()`
- ✓ Función comparadora en `sort()`
- ✓ Ordenamiento estable vs inestable
- ✓ Patrones de chaining
- ✓ Array-like objects

**Criterios de calificación:**

| Puntuación | Criterio                                     |
| ---------- | -------------------------------------------- |
| **13-15**  | Respuestas correctas en 90-100% de preguntas |
| **11-12**  | Respuestas correctas en 75-89% de preguntas  |
| **9-10**   | Respuestas correctas en 60-74% de preguntas  |
| **<9**     | No aprueba este componente                   |

### Conceptual Understanding (10 puntos)

Demuestra comprensión profunda de los conceptos mediante pequeños ejercicios de codificación mental.

**Criterios:**

| Puntuación | Descripción                                           |
| ---------- | ----------------------------------------------------- |
| **9-10**   | Explica claramente 4+ conceptos complejos sin errores |
| **7-8**    | Explica 3-4 conceptos con mínimos errores             |
| **5-6**    | Explica 2-3 conceptos con algunos errores             |
| **3-4**    | Explica 1-2 conceptos con errores significativos      |
| **<3**     | Comprensión insuficiente                              |

**Nota de Conocimiento**: (Cuestionario + Conceptual) / 2

---

## 💪 DESEMPEÑO (40%)

### Ejercicio 1: Flat y FlatMap (10 puntos)

**Requisitos:**
- [ ] Implementar `flat()` correctamente en múltiples niveles
- [ ] Usar `flatMap()` para transformación + aplanamiento
- [ ] Manejar casos edge (arrays vacíos, null, undefined)
- [ ] Código limpio y bien comentado

**Rúbrica:**

| Nivel            | Puntuación | Criterios                                           |
| ---------------- | ---------- | --------------------------------------------------- |
| **Completo**     | 9-10       | Todos los requisitos cumplidos, código elegante     |
| **Competente**   | 7-8        | Requisitos principales cumplidos, algún error menor |
| **Parcial**      | 5-6        | 50-75% de requisitos cumplidos                      |
| **Insuficiente** | <5         | Menos del 50% de requisitos cumplidos               |

### Ejercicio 2: Array.from() y Conversiones (10 puntos)

**Requisitos:**
- [ ] Convertir NodeList a array correctamente
- [ ] Usar Array.from() con función de mapeo
- [ ] Implementar Array.of() apropiadamente
- [ ] Manejo de diferentes tipos de array-like objects

**Rúbrica:**

| Nivel            | Puntuación | Criterios                                  |
| ---------------- | ---------- | ------------------------------------------ |
| **Completo**     | 9-10       | Todos los requisitos cumplidos, optimizado |
| **Competente**   | 7-8        | Requisitos principales cumplidos           |
| **Parcial**      | 5-6        | 50-75% de requisitos cumplidos             |
| **Insuficiente** | <5         | Menos del 50% de requisitos cumplidos      |

### Ejercicio 3: Sort Personalizado (10 puntos)

**Requisitos:**
- [ ] Implementar comparadores para números
- [ ] Implementar comparadores para objetos
- [ ] Sort con múltiples criterios
- [ ] Comprender mutabilidad de sort()

**Rúbrica:**

| Nivel            | Puntuación | Criterios                                           |
| ---------------- | ---------- | --------------------------------------------------- |
| **Completo**     | 9-10       | Todos los requisitos cumplidos, casos edge tratados |
| **Competente**   | 7-8        | Requisitos principales cumplidos                    |
| **Parcial**      | 5-6        | 50-75% de requisitos cumplidos                      |
| **Insuficiente** | <5         | Menos del 50% de requisitos cumplidos               |

### Ejercicio 4: Chaining Avanzado (10 puntos)

**Requisitos:**
- [ ] Implementar chains de 4+ métodos
- [ ] Código legible y bien indentado
- [ ] Casos de uso realistas
- [ ] Debugging efectivo de chains

**Rúbrica:**

| Nivel            | Puntuación | Criterios                                    |
| ---------------- | ---------- | -------------------------------------------- |
| **Completo**     | 9-10       | Chains complejos y elegantes, muy legible    |
| **Competente**   | 7-8        | Chains funcionales, legibilidad adecuada     |
| **Parcial**      | 5-6        | Chains con algunas funcionalidades faltantes |
| **Insuficiente** | <5         | Chains no funcionales                        |

**Nota de Desempeño**: Promedio de los 4 ejercicios

---

## 📦 PRODUCTO (30%)

### Proyecto: Dashboard de Análisis de Datos

#### 1. Funcionalidad (40% del producto)

**Criterios:**

| Puntuación | Descripción                                                           |
| ---------- | --------------------------------------------------------------------- |
| **9-10**   | ✅ Todas las características implementadas y funcionando perfectamente |
| **7-8**    | ✅ Características principales implementadas, 1-2 bugs menores         |
| **5-6**    | ✅ 70% de características implementadas                                |
| **3-4**    | ⚠️ 50% de características implementadas                                |
| **<3**     | ❌ Menos del 50% de características implementadas                      |

**Características esperadas:**
- [ ] Carga y parsing de datos
- [ ] Filtrado funcional
- [ ] Ordenamiento personalizado
- [ ] Cálculos y agregaciones
- [ ] Visualización de resultados
- [ ] Búsqueda interactiva
- [ ] Paginación

#### 2. Calidad de Código (30% del producto)

**Criterios:**

| Puntuación | Descripción                                                           |
| ---------- | --------------------------------------------------------------------- |
| **9-10**   | ✅ Código muy limpio, nombrado adecuadamente, estructurado lógicamente |
| **7-8**    | ✅ Código limpio con mínimas mejoras posibles                          |
| **5-6**    | ⚠️ Código funcional pero con problemas de organización                 |
| **3-4**    | ⚠️ Código con mala organización y nombrado poco claro                  |
| **<3**     | ❌ Código difícil de entender y mantener                               |

**Aspectos evaluados:**
- Nomenclatura clara (camelCase, nombres descriptivos)
- Funciones pequeñas con responsabilidad única
- Comentarios útiles en secciones complejas
- Uso correcto de ES6+ features
- DRY (Don't Repeat Yourself)
- Modularización lógica

#### 3. Documentación (20% del producto)

**Criterios:**

| Puntuación | Descripción                                              |
| ---------- | -------------------------------------------------------- |
| **9-10**   | ✅ README completo, instrucciones claras, ejemplos de uso |
| **7-8**    | ✅ README adecuado con instrucciones principales          |
| **5-6**    | ⚠️ README básico con información incompleta               |
| **3-4**    | ⚠️ README muy básico                                      |
| **<3**     | ❌ Documentación prácticamente inexistente                |

**Contenido esperado en README:**
- Descripción del proyecto
- Instrucciones de instalación/setup
- Cómo usar la aplicación
- Características principales
- Requisitos del sistema
- Autor y fecha

#### 4. Interfaz y UX (10% del producto)

**Criterios:**

| Puntuación | Descripción                                             |
| ---------- | ------------------------------------------------------- |
| **9-10**   | ✅ Interfaz intuitiva, responsive, agradable visualmente |
| **7-8**    | ✅ Interfaz clara y funcional                            |
| **5-6**    | ⚠️ Interfaz básica pero usable                           |
| **3-4**    | ⚠️ Interfaz poco intuitiva                               |
| **<3**     | ❌ Interfaz confusa o deficiente                         |

**Aspectos evaluados:**
- Responsividad (mobile + desktop)
- Accesibilidad básica
- Coherencia visual
- Feedback visual al usuario

---

## 📈 Cálculo Final de Nota

```
Nota Final = (Conocimiento × 0.30) + (Desempeño × 0.40) + (Producto × 0.30)

Ejemplo:
- Conocimiento: 85% (25.5 puntos)
- Desempeño: 90% (36 puntos)
- Producto: 88% (26.4 puntos)

Nota Final = (85 × 0.30) + (90 × 0.40) + (88 × 0.30) = 25.5 + 36 + 26.4 = 88%
```

**Requisitos para Aprobar:**
- ✅ Mínimo **70%** en Conocimiento
- ✅ Mínimo **70%** en Desempeño
- ✅ Mínimo **70%** en Producto
- ✅ Nota Final ≥ **70%**

---

## 🎯 Niveles de Desempeño

### 🌟 Excelente (90-100%)
- Comprensión profunda de todos los conceptos
- Código de alta calidad, elegante y eficiente
- Proyecto con todas las características implementadas
- Casos edge considerados
- Documentación completa

### ⭐ Bueno (80-89%)
- Comprensión sólida de conceptos
- Código limpio y funcional
- Proyecto con características principales
- Mínimos problemas menores
- Documentación adecuada

### ✓ Satisfactorio (70-79%)
- Comprensión básica adecuada
- Código funcional
- Proyecto con funcionalidad básica
- Algunos problemas a resolver
- Documentación básica

### ✗ No Aprobado (<70%)
- Comprensión insuficiente
- Código con errores significativos
- Proyecto incompleto
- Documentación deficiente

---

## 📝 Instrucciones de Entrega

### Formato de Entrega

1. **Código fuente**
   - Subir a GitHub en rama `week-05-solution`
   - Incluir `.gitignore` apropiado
   - Commits significativos con mensajes claros

2. **Proyecto**
   - Carpeta `3-proyecto/solution/` con código completo
   - `README.md` con instrucciones
   - `package.json` si aplica

3. **Ejercicios**
   - Carpeta `2-practicas/` con los 4 ejercicios
   - Cada ejercicio en su propia carpeta
   - Código funcional y comentado

### Fechas

- **Entrega de ejercicios**: Fin de la semana
- **Entrega de proyecto**: Fin de la semana
- **Evaluación**: La semana siguiente

---

## ✅ Checklist de Autoevaluación

Antes de entregar, asegúrate de:

- [ ] Todos los ejercicios funcionan correctamente
- [ ] El proyecto ejecuta sin errores
- [ ] El código sigue convenciones ES6+
- [ ] Hay comentarios en secciones complejas
- [ ] El README está completo
- [ ] La interfaz es responsive
- [ ] Has probado con diferentes datos
- [ ] Has manejado casos edge
- [ ] El código está subido a GitHub
- [ ] Las ramas están limpias (sin archivos temporales)

---

## 🤔 Preguntas Frecuentes

**P: ¿Qué pasa si mi nota es 69%?**
R: Lamentablemente no aprueba la semana. Debes revisar y mejorar los componentes débiles.

**P: ¿Puedo reentrega?**
R: Sí, contacta al instructor dentro de 3 días para una reentrega.

**P: ¿Qué es un caso edge?**
R: Situaciones inusuales (arrays vacíos, null, undefined, valores inesperados, etc.)

**P: ¿Debo hacer el proyecto en vanilla JS?**
R: Sí, sin frameworks. Solo HTML, CSS y JavaScript puro.

---

**Última actualización**: Diciembre 2025
**Versión**: 1.0
