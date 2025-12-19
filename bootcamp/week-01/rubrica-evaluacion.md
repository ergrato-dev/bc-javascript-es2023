# 📊 Rúbrica de Evaluación - Semana 1

## 🎯 Criterios Generales de Aprobación

- **Calificación mínima**: 70% en cada tipo de evidencia
- **Entrega puntual**: Penalización del 10% por día de retraso
- **Código funcional**: El código debe ejecutarse sin errores críticos
- **Buenas prácticas**: Seguir convenciones de ES6+ establecidas

---

## 📋 Distribución de Evidencias

| Tipo de Evidencia | Ponderación | Descripción           |
| ----------------- | ----------- | --------------------- |
| 🧠 Conocimiento    | 30%         | Evaluaciones teóricas |
| 💪 Desempeño       | 40%         | Ejercicios prácticos  |
| 📦 Producto        | 30%         | Proyecto final        |

---

## 🧠 Evidencia de Conocimiento (30%)

### Componentes

1. **Cuestionario Teórico** (20%)
   - 10 preguntas de opción múltiple
   - Temas: ES6+, let/const, template literals, arrow functions, destructuring

2. **Análisis de Código** (10%)
   - Identificar errores en código
   - Proponer mejoras usando ES6+

### Criterios de Evaluación

| Criterio                      | Excelente (100%)                                  | Satisfactorio (80%)               | Aceptable (70%)                    | Insuficiente (<70%)          |
| ----------------------------- | ------------------------------------------------- | --------------------------------- | ---------------------------------- | ---------------------------- |
| **Comprensión conceptual**    | Explica conceptos con ejemplos propios            | Explica conceptos correctamente   | Comprende pero con errores menores | No comprende conceptos       |
| **Identificación de errores** | Identifica todos los errores y propone soluciones | Identifica la mayoría de errores  | Identifica algunos errores         | No identifica errores        |
| **Terminología técnica**      | Usa términos técnicos correctamente               | Usa términos con pequeños errores | Usa términos básicos               | No usa terminología adecuada |

### Preguntas Ejemplo

```markdown
1. ¿Cuál es la diferencia principal entre `let` y `const`?
   a) let es para strings, const para números
   b) let permite reasignación, const no
   c) No hay diferencia
   d) const es más rápido

2. ¿Qué salida produce este código?
   const name = 'Juan';
   console.log(`Hola ${name}`);
   a) Hola ${name}
   b) Hola Juan
   c) Error de sintaxis
   d) undefined
```

---

## 💪 Evidencia de Desempeño (40%)

### Ejercicios Prácticos (10% cada uno)

#### Ejercicio 1: Variables Modernas
- [ ] Usa `const` por defecto
- [ ] Usa `let` solo cuando sea necesario reasignar
- [ ] No usa `var` en ningún caso
- [ ] Respeta block scope correctamente

#### Ejercicio 2: Template Literals
- [ ] Implementa interpolación de variables
- [ ] Usa strings multilínea cuando sea apropiado
- [ ] Evita concatenación con `+`
- [ ] Código limpio y legible

#### Ejercicio 3: Arrow Functions
- [ ] Convierte funciones tradicionales a arrow functions
- [ ] Usa sintaxis concisa cuando sea posible
- [ ] Comprende el retorno implícito
- [ ] Identifica cuándo usar `return` explícito

#### Ejercicio 4: Destructuring
- [ ] Extrae valores de arrays
- [ ] Extrae propiedades de objetos
- [ ] Usa nombres de variables descriptivos
- [ ] Aplica valores por defecto

### Criterios de Evaluación

| Criterio          | Excelente (100%)                               | Satisfactorio (80%)                       | Aceptable (70%)                    | Insuficiente (<70%)            |
| ----------------- | ---------------------------------------------- | ----------------------------------------- | ---------------------------------- | ------------------------------ |
| **Funcionalidad** | Funciona perfectamente                         | Funciona con bugs menores                 | Funciona parcialmente              | No funciona                    |
| **Sintaxis ES6+** | Usa todas las características modernas         | Usa la mayoría correctamente              | Usa algunas características        | No usa ES6+                    |
| **Código limpio** | Código impecable y bien estructurado           | Código ordenado con mejoras menores       | Código funcional pero desordenado  | Código difícil de leer         |
| **Nomenclatura**  | Nombres en inglés, descriptivos y consistentes | Nombres descriptivos con pequeños errores | Nombres básicos pero comprensibles | Nombres pobres o en español    |
| **Comentarios**   | Comentarios educativos en inglés               | Comentarios básicos correctos             | Pocos comentarios pero útiles      | Sin comentarios o irrelevantes |

---

## 📦 Evidencia de Producto (30%)

### Proyecto: Tarjeta de Presentación Interactiva

#### Requisitos Funcionales (60% del producto)

- [ ] **Variables (10%)**: Usa `const` y `let` apropiadamente
- [ ] **Datos dinámicos (15%)**: Template literals para mostrar información
- [ ] **Interactividad (20%)**: Arrow functions en event listeners
- [ ] **Estructura de datos (15%)**: Destructuring para datos del usuario

#### Requisitos No Funcionales (40% del producto)

- [ ] **Código limpio (10%)**: Indentación, espaciado, estructura
- [ ] **Nomenclatura (10%)**: Variables/funciones en inglés, descriptivas
- [ ] **Comentarios (5%)**: Explicaciones en inglés, claros
- [ ] **README (5%)**: Instrucciones de instalación y uso
- [ ] **Sin errores (10%)**: Código ejecuta sin errores en consola

### Rúbrica Detallada del Proyecto

| Aspecto                  | Excelente (100%)                     | Satisfactorio (80%)               | Aceptable (70%)             | Insuficiente (<70%)          |
| ------------------------ | ------------------------------------ | --------------------------------- | --------------------------- | ---------------------------- |
| **Uso de `let`/`const`** | Usa correctamente en todos los casos | Pequeños errores de uso           | Confunde ocasionalmente     | No usa correctamente         |
| **Template literals**    | Implementación perfecta y creativa   | Implementación correcta básica    | Usa pero con errores        | No usa o usa mal             |
| **Arrow functions**      | Sintaxis moderna en todos los casos  | Usa en mayoría de casos           | Uso básico correcto         | No usa o sintaxis incorrecta |
| **Destructuring**        | Aplica en múltiples lugares          | Aplica en casos básicos           | Implementación mínima       | No usa                       |
| **Diseño UI**            | Interfaz atractiva y profesional     | Interfaz funcional y clara        | Interfaz básica pero usable | Interfaz pobre               |
| **Interactividad**       | Múltiples interacciones fluidas      | Interacciones básicas funcionales | Interactividad mínima       | No hay interactividad        |
| **Código limpio**        | Código ejemplar                      | Código ordenado                   | Código aceptable            | Código desorganizado         |
| **Documentación**        | README completo con ejemplos         | README básico pero útil           | README mínimo               | Sin README o incompleto      |
| **Creatividad**          | Solución innovadora                  | Solución correcta estándar        | Solución básica             | Copia de ejemplos            |

---

## 📈 Cálculo de Calificación Final

### Fórmula

```
Calificación Final = (Conocimiento × 0.30) + (Desempeño × 0.40) + (Producto × 0.30)
```

### Ejemplo

```
Conocimiento: 85%
Desempeño:    90%
Producto:     80%

Calificación = (85 × 0.30) + (90 × 0.40) + (80 × 0.30)
             = 25.5 + 36 + 24
             = 85.5% ✅ APROBADO
```

---

## ✅ Checklist de Autoevaluación

Antes de entregar, verifica:

### Código
- [ ] No hay errores en la consola del navegador
- [ ] Todas las funciones están en inglés
- [ ] Los comentarios están en inglés
- [ ] Se usa `const` por defecto, `let` solo cuando es necesario
- [ ] No se usa `var` en ningún lugar
- [ ] Template literals en lugar de concatenación con `+`
- [ ] Arrow functions en lugar de `function` tradicional
- [ ] Destructuring aplicado donde sea apropiado

### Documentación
- [ ] README incluye instrucciones de instalación
- [ ] README explica cómo ejecutar el proyecto
- [ ] Código tiene comentarios explicativos
- [ ] Variables y funciones tienen nombres descriptivos

### Buenas Prácticas
- [ ] Código indentado correctamente (2 espacios)
- [ ] Sin código comentado (dead code)
- [ ] Sin `console.log` de debugging
- [ ] Archivos organizados lógicamente

---

## 🎯 Criterios de Aprobación

### Para Aprobar la Semana

- ✅ Mínimo **70%** en Conocimiento
- ✅ Mínimo **70%** en Desempeño
- ✅ Mínimo **70%** en Producto
- ✅ Entrega puntual o con penalización máxima del 20%

### Para Excelencia

- 🌟 Mínimo **90%** en todas las evidencias
- 🌟 Código sin errores ni warnings
- 🌟 Implementación creativa del proyecto
- 🌟 Documentación completa y profesional

---

## 📝 Formato de Entrega

### Estructura de Carpetas

```
apellido-nombre-week01/
├── README.md
├── ejercicios/
│   ├── ejercicio-01/
│   ├── ejercicio-02/
│   ├── ejercicio-03/
│   └── ejercicio-04/
└── proyecto/
    ├── index.html
    ├── script.js
    ├── style.css
    └── README.md
```

### Información del README Principal

```markdown
# Semana 1 - [Tu Nombre]

## 📋 Información del Estudiante
- **Nombre**: [Tu nombre completo]
- **Fecha de entrega**: [DD/MM/YYYY]
- **Semana**: 01 - Introducción a JavaScript Moderno

## 📚 Contenido
- [Enlace a ejercicios](./ejercicios/)
- [Enlace a proyecto](./proyecto/)

## 🎯 Autoevaluación
- Conocimiento: [X]%
- Desempeño: [X]%
- Producto: [X]%
```

---

## 🔄 Retroalimentación

### Plazos

- **Entrega**: Viernes de la semana correspondiente
- **Retroalimentación**: Dentro de 3 días hábiles
- **Reentrega** (si aplica): Dentro de 5 días de recibir feedback

### Formato de Feedback

El instructor proporcionará:

1. **Calificación numérica** por cada evidencia
2. **Comentarios específicos** sobre áreas de mejora
3. **Aspectos destacados** del trabajo realizado
4. **Recursos adicionales** para reforzar conceptos débiles

---

## ❓ Preguntas Frecuentes

**¿Puedo usar bibliotecas externas?**
❌ No. Esta semana se enfoca en JavaScript puro ES6+.

**¿Qué pasa si no alcanzo el 70%?**
Tendrás una oportunidad de reentrega con feedback específico.

**¿Los comentarios deben estar en inglés?**
✅ Sí. Toda la nomenclatura técnica debe estar en inglés.

**¿Puedo entregar antes de tiempo?**
✅ Sí. Las entregas anticipadas son bienvenidas.

**¿Cómo se evalúa la creatividad?**
Se valora la solución de problemas de manera innovadora, no solo seguir el ejemplo.

---

<p align="center">
  <strong>📊 Rúbrica de Evaluación - Semana 1</strong><br>
  <em>Criterios claros para el éxito</em>
</p>
