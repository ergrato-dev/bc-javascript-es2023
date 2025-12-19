# 📊 Rúbrica de Evaluación - Week 03

**Semana**: 03 - Clases y Programación Orientada a Objetos
**Ponderación Total**: 100 puntos
**Criterio de Aprobación**: Mínimo 70% en cada categoría

---

## 📋 Distribución de Puntos

| Categoría          | Puntos  | Porcentaje |
| ------------------ | ------- | ---------- |
| **Conocimiento** 🧠 | 30      | 30%        |
| **Desempeño** 💪    | 40      | 40%        |
| **Producto** 📦     | 30      | 30%        |
| **TOTAL**          | **100** | **100%**   |

---

## 🧠 1. Evidencias de Conocimiento (30 puntos)

### 1.1 Evaluación Teórica (20 pts)

| Criterio                   | Excelente<br>(4 pts)       | Bueno<br>(3 pts)            | Regular<br>(2 pts)          | Insuficiente<br>(0-1 pts) |
| -------------------------- | -------------------------- | --------------------------- | --------------------------- | ------------------------- |
| **Sintaxis de clases ES6** | Domina completamente       | Conoce la mayoría           | Conocimiento parcial        | No comprende              |
| **Herencia y super**       | Explica claramente         | Explica con errores menores | Confusión parcial           | No comprende              |
| **Getters/Setters**        | Uso correcto y justificado | Uso básico                  | Confunde conceptos          | No comprende              |
| **Métodos estáticos**      | Domina cuándo usar         | Conoce la sintaxis          | Uso incorrecto              | No comprende              |
| **Private fields**         | Explica encapsulación      | Conoce sintaxis             | Confunde con otras técnicas | No comprende              |

### 1.2 Conceptos de OOP (10 pts)

| Criterio          | Puntos | Descripción                             |
| ----------------- | ------ | --------------------------------------- |
| **Encapsulación** | 0-3    | Comprende y explica el concepto         |
| **Herencia**      | 0-3    | Identifica cuándo y cómo usar herencia  |
| **Polimorfismo**  | 0-2    | Reconoce method overriding              |
| **Abstracción**   | 0-2    | Diseña clases con responsabilidad única |

**Mínimo para aprobar conocimiento**: 21/30 puntos (70%)

---

## 💪 2. Evidencias de Desempeño (40 puntos)

### 2.1 Ejercicio 01: Clases Básicas (10 pts)

| Criterio                 | Puntos | Descripción                                  |
| ------------------------ | ------ | -------------------------------------------- |
| **Creación de clases**   | 0-3    | Sintaxis correcta, constructor bien definido |
| **Métodos de instancia** | 0-3    | Funcionan correctamente, usan `this`         |
| **Instanciación**        | 0-2    | Crea y usa objetos correctamente             |
| **Código limpio**        | 0-2    | Nombres descriptivos, indentación, ES6+      |

### 2.2 Ejercicio 02: Herencia (10 pts)

| Criterio                        | Puntos | Descripción                               |
| ------------------------------- | ------ | ----------------------------------------- |
| **extends correctamente**       | 0-3    | Herencia implementada sin errores         |
| **super() usado correctamente** | 0-3    | Llama al constructor padre apropiadamente |
| **Method overriding**           | 0-2    | Sobrescribe métodos cuando es necesario   |
| **Jerarquía de clases**         | 0-2    | Diseño lógico y bien estructurado         |

### 2.3 Ejercicio 03: Getters y Setters (10 pts)

| Criterio                   | Puntos | Descripción                            |
| -------------------------- | ------ | -------------------------------------- |
| **get implementado**       | 0-3    | Getters funcionan correctamente        |
| **set con validación**     | 0-3    | Setters validan entrada apropiadamente |
| **Propiedades computadas** | 0-2    | Usa getters para valores derivados     |
| **Encapsulación**          | 0-2    | Protege propiedades con _ o #          |

### 2.4 Ejercicio 04: Sistema Completo (10 pts)

| Criterio                     | Puntos | Descripción                                 |
| ---------------------------- | ------ | ------------------------------------------- |
| **Uso de private fields**    | 0-3    | Implementa # correctamente                  |
| **Métodos estáticos**        | 0-2    | Usa static apropiadamente                   |
| **Combinación de conceptos** | 0-3    | Integra clases, herencia, getters/setters   |
| **Funcionalidad completa**   | 0-2    | Todas las funciones del ejercicio funcionan |

**Mínimo para aprobar desempeño**: 28/40 puntos (70%)

---

## 📦 3. Evidencias de Producto (30 puntos)

### Proyecto: Sistema de Gestión de Biblioteca

#### 3.1 Funcionalidad (12 pts)

| Criterio                 | Puntos | Descripción                                  |
| ------------------------ | ------ | -------------------------------------------- |
| **CRUD de libros**       | 0-4    | Agregar, buscar, actualizar, eliminar libros |
| **CRUD de usuarios**     | 0-4    | Gestión completa de usuarios                 |
| **Sistema de préstamos** | 0-4    | Prestar, devolver, verificar disponibilidad  |

#### 3.2 Implementación de Clases (10 pts)

| Criterio                  | Puntos | Descripción                                   |
| ------------------------- | ------ | --------------------------------------------- |
| **Clases bien diseñadas** | 0-3    | Book, User, Library con responsabilidad clara |
| **Herencia implementada** | 0-3    | FictionBook, NonFictionBook o similar         |
| **Private fields usados** | 0-2    | Encapsula datos sensibles con #               |
| **Métodos estáticos**     | 0-2    | Factory methods o helpers estáticos           |

#### 3.3 Calidad de Código (8 pts)

| Criterio                        | Puntos | Descripción                                    |
| ------------------------------- | ------ | ---------------------------------------------- |
| **Clean code**                  | 0-3    | Nombres claros, funciones pequeñas, DRY        |
| **Comentarios y documentación** | 0-2    | Código documentado apropiadamente              |
| **Manejo de errores**           | 0-2    | Validaciones y throw errors cuando corresponde |
| **ES6+ consistente**            | 0-1    | const/let, arrow functions, template literals  |

**Mínimo para aprobar producto**: 21/30 puntos (70%)

---

## 🎯 Criterios Generales

### ✅ Aspectos Positivos (Bonus: +5 pts máximo)

- **+2 pts**: Implementa características adicionales (ej: sistema de multas, categorías)
- **+2 pts**: Tests unitarios con código de ejemplo
- **+1 pt**: README del proyecto con instrucciones claras
- **+1 pt**: Diagramas UML de las clases
- **+1 pt**: Persistencia de datos (LocalStorage o similar)

### ❌ Penalizaciones

- **-5 pts**: No usar sintaxis ES6+ (usar `var`, `function` en lugar de arrow functions)
- **-3 pts**: No usar clases (implementar con funciones constructoras)
- **-2 pts**: Plagio o código copiado sin entender
- **-2 pts**: Entrega fuera de tiempo (por día de retraso)
- **-1 pt**: Código no ejecutable o con errores de sintaxis
- **-1 pt**: No seguir convenciones de nombres (camelCase, PascalCase)

---

## 📊 Escala de Calificación

| Puntos | Calificación | Nivel                     |
| ------ | ------------ | ------------------------- |
| 90-100 | A+           | Excelente                 |
| 80-89  | A            | Muy bueno                 |
| 70-79  | B            | Bueno (aprobado)          |
| 60-69  | C            | Regular (necesita mejora) |
| 0-59   | F            | Insuficiente (reprueba)   |

---

## 📝 Ejemplo de Evaluación

### Estudiante: Juan Pérez

| Categoría          | Puntos Obtenidos | Puntos Máximos | Porcentaje |
| ------------------ | ---------------- | -------------- | ---------- |
| **Conocimiento** 🧠 | 26               | 30             | 86.7%      |
| **Desempeño** 💪    | 35               | 40             | 87.5%      |
| **Producto** 📦     | 24               | 30             | 80%        |
| **Bonus**          | +3               | +5             | -          |
| **TOTAL**          | **88**           | 100            | **88%**    |

**Calificación Final**: A - Muy bueno ✅

---

## 🎓 Rúbrica Detallada por Ejercicio

### Ejercicio 01: Clases Básicas

**Clase Person**:
- ✅ Constructor con name, age (1 pt)
- ✅ Método greet() que retorna string (1 pt)
- ✅ Método getInfo() (1 pt)

**Clase Product**:
- ✅ Constructor con name, price, stock (1.5 pts)
- ✅ Métodos sell(), restock() (1.5 pts)
- ✅ Validaciones básicas (1 pt)

**Instanciación y pruebas**:
- ✅ Crea instancias y las usa (1 pt)
- ✅ Código limpio y comentado (2 pts)

---

### Ejercicio 02: Herencia

**Clase Animal (base)**:
- ✅ Constructor correcto (1 pt)
- ✅ Método makeSound() (1 pt)

**Clases heredadas (Dog, Cat)**:
- ✅ extends Animal (1 pt)
- ✅ super() llamado correctamente (2 pts)
- ✅ Sobrescribe makeSound() (2 pts)
- ✅ Métodos específicos de cada subclase (2 pts)

**Uso correcto**:
- ✅ Crea instancias y demuestra polimorfismo (1 pt)

---

### Ejercicio 03: Getters y Setters

**Clase con getters**:
- ✅ get implementado correctamente (2 pts)
- ✅ Propiedades computadas (1 pt)

**Clase con setters**:
- ✅ set con validación (2 pts)
- ✅ Throw error cuando validación falla (1 pt)

**Encapsulación**:
- ✅ Usa _ o # para propiedades privadas (2 pts)
- ✅ API pública bien diseñada (2 pts)

---

### Ejercicio 04: Sistema Completo

**Private fields**:
- ✅ Al menos 2 campos privados con # (3 pts)

**Métodos estáticos**:
- ✅ Al menos 1 método estático útil (2 pts)

**Integración**:
- ✅ Usa clases, herencia, getters/setters (3 pts)
- ✅ Funcionalidad completa y sin errores (2 pts)

---

## 📤 Formato de Entrega

### Estructura de Carpeta

```
week-03-entregas/
├── ejercicio-01/
│   └── index.js
├── ejercicio-02/
│   └── index.js
├── ejercicio-03/
│   └── index.js
├── ejercicio-04/
│   └── index.js
└── proyecto-biblioteca/
    ├── README.md
    ├── classes/
    │   ├── Book.js
    │   ├── User.js
    │   └── Library.js
    └── index.js
```

### Checklist de Entrega

- [ ] Todos los archivos usan sintaxis ES6+
- [ ] Código ejecutable sin errores
- [ ] Nombres de variables/funciones en inglés
- [ ] Comentarios en español explicando lógica compleja
- [ ] README.md en el proyecto con instrucciones
- [ ] Cada ejercicio tiene ejemplos de uso (console.log)

---

## 💬 Comentarios del Instructor

_Espacio reservado para feedback personalizado_

---

**Última actualización**: Diciembre 2024
