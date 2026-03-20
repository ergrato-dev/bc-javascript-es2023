# 📊 Rúbrica de Evaluación - Semana 02

## 🎯 Distribución de Evidencias

| Tipo de Evidencia | Peso     | Puntaje Mínimo |
| ----------------- | -------- | -------------- |
| 📦 Producto       | 100%     | 70/100 (70%)   |
| **TOTAL**         | **100%** | **70/100**     |

> **Nota Importante**: Los ejercicios prácticos y la teoría son materiales de aprendizaje que te preparan para el proyecto, pero **no se entregan de forma separada**. El proyecto debe demostrar tu dominio de todos los conceptos aprendidos en teoría y practicados en los ejercicios.

---

## 🧠 Material de Conocimiento (No se entrega)

> **Importante**: Esta sección describe material de estudio y autoevaluación. No se entrega de forma separada. Tu comprensión de estos conceptos se evalúa a través del proyecto final.

### Componentes de Estudio

| Criterio            | Excelente<br>(9-10)                                                  | Bueno<br>(7-8)                                                   | Suficiente<br>(5-6)                                           | Insuficiente<br>(0-4)       |
| ------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------- | --------------------------- |
| **Spread Operator** | Explica perfectamente cuándo y cómo usar spread, con ejemplos claros | Comprende el uso básico de spread en arrays y objetos            | Identifica spread pero tiene dudas en su aplicación           | No comprende el concepto    |
| **Rest Parameters** | Diferencia claramente rest de spread, explica casos de uso           | Entiende rest parameters pero confunde ocasionalmente con spread | Conoce la sintaxis pero no domina aplicaciones                | No distingue rest de spread |
| **Array Methods**   | Domina map, filter, reduce y explica cuándo usar cada uno            | Usa correctamente map y filter, tiene dudas con reduce           | Conoce los métodos básicamente pero no sabe cuándo aplicarlos | No comprende los métodos    |

> Usa estos criterios para autoevaluación antes de comenzar el proyecto.

---

## 💪 Ejercicios de Práctica (No se entregan)

> **Importante**: Los ejercicios prácticos son materiales de aprendizaje guiados que te preparan para el proyecto. **No se entregan de forma separada**. Úsalos para practicar antes de hacer el proyecto.

### Ejercicios Guiados (Práctica)

#### Ejercicio 01: Spread y Rest (Práctica)

| Criterio            | Puntos | Descripción                                             |
| ------------------- | ------ | ------------------------------------------------------- |
| **Funcionalidad**   | 0-4    | Todas las operaciones de spread funcionan correctamente |
| **Rest Parameters** | 0-3    | Implementa correctamente funciones con rest             |
| **Código Limpio**   | 0-2    | Código legible, bien estructurado                       |
| **Casos Edge**      | 0-1    | Maneja casos especiales (arrays vacíos, undefined)      |

#### Ejercicio 02: Array Methods Básicos (10 puntos)

| Criterio              | Puntos | Descripción                             |
| --------------------- | ------ | --------------------------------------- |
| **map() correcto**    | 0-3    | Transforma arrays correctamente con map |
| **filter() correcto** | 0-3    | Filtra elementos adecuadamente          |
| **find/some/every**   | 0-2    | Usa métodos de búsqueda apropiadamente  |
| **Código Limpio**     | 0-2    | Arrow functions, nombres descriptivos   |

#### Ejercicio 03: Map y Filter Avanzado (10 puntos)

| Criterio              | Puntos | Descripción                                |
| --------------------- | ------ | ------------------------------------------ |
| **Transformaciones**  | 0-4    | Transforma objetos complejos correctamente |
| **Filtros Complejos** | 0-3    | Combina múltiples condiciones de filtrado  |
| **Encadenamiento**    | 0-2    | Encadena métodos de forma eficiente        |
| **Performance**       | 0-1    | No hace operaciones redundantes            |

#### Ejercicio 04: Reduce Patterns (10 puntos)

| Criterio            | Puntos | Descripción                                  |
| ------------------- | ------ | -------------------------------------------- |
| **Reduce básico**   | 0-3    | Suma, cuenta, agrupa con reduce              |
| **Reduce complejo** | 0-4    | Transforma estructuras de datos complejas    |
| **Valor inicial**   | 0-2    | Usa valores iniciales apropiados             |
| **Alternativas**    | 0-1    | Reconoce cuándo usar reduce vs otros métodos |

**Total Desempeño: ___ / 40 puntos**

---

## 📦 Proyecto: Gestor de Tareas (100%)

> **Único Entregable**: Este proyecto es la única entrega requerida para aprobar la semana. Debe demostrar tu dominio de todos los conceptos aprendidos.

### Evaluación del Proyecto

| Criterio          | Excelente<br>(9-10)                                                              | Bueno<br>(7-8)                                               | Suficiente<br>(5-6)                                     | Insuficiente<br>(0-4)                       |
| ----------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------- | ------------------------------------------- |
| **Funcionalidad** | Todas las features funcionan perfectamente (agregar, eliminar, filtrar, ordenar) | La mayoría de features funcionan, bugs menores               | Funcionalidad básica presente pero con errores          | No funciona o features incompletas          |
| **Uso de ES2023**   | Usa spread, rest, array methods naturalmente en todo el código                   | Usa ES2023 en la mayoría del código, algunos patrones antiguos | Mezcla ES2023 con código antiguo inconsistentemente       | Código principalmente ES5 o mal uso de ES2023 |
| **Código Limpio** | Código muy legible, bien organizado, nombres descriptivos, comentarios útiles    | Código legible en general, organización adecuada             | Código funciona pero difícil de leer, mala organización | Código difícil de entender, sin estructura  |

**Desglose Detallado del Proyecto:**

| Feature                 | Puntos | Criterios de Evaluación                            |
| ----------------------- | ------ | -------------------------------------------------- |
| **Agregar Tareas**      | 0-5    | Usa spread para inmutabilidad, genera IDs únicos   |
| **Eliminar Tareas**     | 0-3    | Usa filter() para eliminar, no muta array original |
| **Filtrar Tareas**      | 0-5    | Filtros por estado, prioridad, búsqueda por texto  |
| **Ordenar Tareas**      | 0-3    | Ordena por fecha, prioridad, alfabético            |
| **Estadísticas**        | 0-4    | Usa reduce() para contar completadas, pendientes   |
| **Object Enhancements** | 0-3    | Property/method shorthand, computed properties     |
| **Default Params**      | 0-2    | Usa defaults para configuración y opciones         |
| **Código Limpio**       | 0-5    | Estructura clara, funciones pequeñas, comentarios  |

**Total Producto: ___ / 30 puntos**

---

## 🎯 Criterios Generales de Calidad

### Código ES2023 (Todos los ejercicios)

- ✅ **Obligatorio usar**:
  - `const` por defecto, `let` solo si se reasigna
  - Arrow functions para callbacks
  - Template literals para strings
  - Spread operator para copiar arrays/objetos
  - Array methods (map, filter, reduce) en vez de bucles for

- ❌ **Penalizaciones**:
  - Usar `var`: -2 puntos por ejercicio
  - Usar bucles `for` cuando hay método de array apropiado: -1 punto
  - Mutar arrays/objetos originales: -2 puntos
  - Concatenación con `+` en vez de template literals: -0.5 puntos

### Mejores Prácticas

- ✅ **Bonus** (+5 puntos máximo):
  - Validación de inputs
  - Manejo de errores
  - Tests manuales documentados
  - README bien documentado
  - Uso de JSDoc comments

---

## 📝 Formato de Entrega

### Archivos Requeridos

```
week-02-entregas/
├── ejercicios/
│   ├── 01-spread-rest/
│   │   └── index.js
│   ├── 02-array-methods/
│   │   └── index.js
│   ├── 03-map-filter/
│   │   └── index.js
│   └── 04-reduce/
│       └── index.js
└── proyecto/
    ├── index.html
    ├── styles.css
    ├── script.js
    └── README.md
```

### Checklist de Entrega

- [ ] Todos los ejercicios ejecutan sin errores
- [ ] Proyecto funciona en navegador
- [ ] Código usa solo ES2023
- [ ] README del proyecto incluye:
  - [ ] Descripción de features
  - [ ] Instrucciones de uso
  - [ ] Tecnologías utilizadas
  - [ ] Conceptos ES2023 aplicados
- [ ] Comentarios explicando lógica compleja
- [ ] Nombres de variables/funciones descriptivos

---

## 🏆 Niveles de Logro

| Puntaje | Nivel          | Descripción                                                          |
| ------- | -------------- | -------------------------------------------------------------------- |
| 90-100  | 🌟 Excelente    | Dominio completo de spread, rest y array methods. Código profesional |
| 80-89   | 🎯 Muy Bueno    | Buen entendimiento, aplica conceptos correctamente                   |
| 70-79   | ✅ Bueno        | Comprende los conceptos básicos, algunas dudas                       |
| 60-69   | ⚠️ Suficiente   | Conocimiento básico, necesita más práctica                           |
| 0-59    | ❌ Insuficiente | No alcanza los objetivos mínimos                                     |

---

## 💡 Consejos para Maximizar Puntaje

1. **Lee bien las instrucciones**: Cada TODO tiene requisitos específicos
2. **Prueba tu código**: Verifica que funciona con diferentes inputs
3. **Usa console.log()**: Demuestra que entiendes el flujo de datos
4. **Código limpio**: Más importante que código complejo
5. **Pregunta dudas**: Mejor preguntar que entregar mal
6. **Revisa rúbrica antes**: Saber qué se evalúa te guía

---

## 📅 Fechas Importantes

- **Inicio**: Semana 2 del bootcamp
- **Entrega ejercicios**: Final de la semana
- **Entrega proyecto**: Final de la semana
- **Retroalimentación**: Dentro de 3 días hábiles

---

## 🔗 Referencias

- [Semana 02 - README](README.md)
- [Teoría de la Semana](1-teoria/)
- [Ejercicios Prácticos](2-practicas/)
- [Proyecto](3-proyecto/)

---

_Última actualización: Diciembre 2024_
