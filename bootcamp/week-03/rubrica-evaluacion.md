# 📊 Rúbrica de Evaluación - Semana 3

## Clases y Programación Orientada a Objetos

---

## 🎯 Distribución de Evidencias

| Tipo de Evidencia | Peso     | Puntaje Mínimo |
| ----------------- | -------- | -------------- |
| 📦 Producto       | 100%     | 70/100 (70%)   |
| **TOTAL**         | **100%** | **70/100**     |

> **Nota Importante**: Los ejercicios prácticos y la teoría son materiales de aprendizaje que te preparan para el proyecto, pero **no se entregan de forma separada**. El proyecto debe demostrar tu dominio de todos los conceptos aprendidos.

---

## 🧠 Material de Conocimiento (No se entrega)

> **Importante**: Esta sección describe criterios de autoevaluación. Tu comprensión se evalúa a través del proyecto final.

### Criterios de Autoevaluación

| Criterio | Excelente (100%) | Bueno (80%) | Suficiente (70%) | Insuficiente (<70%) |
|----------|------------------|-------------|------------------|---------------------|
| **Conceptos de clases** | Explica correctamente class, constructor, métodos y la diferencia con objetos literales | Comprende la mayoría de conceptos con pequeñas confusiones | Conocimiento básico de clases | No comprende la sintaxis de clases |
| **Herencia** | Domina extends, super y comprende la cadena de prototipos | Usa herencia correctamente con dudas menores | Implementa herencia básica | No logra implementar herencia |
| **Encapsulación** | Entiende y aplica getters, setters y campos privados correctamente | Usa encapsulación con pequeños errores | Conocimiento parcial de encapsulación | No comprende encapsulación |

## 💪 Ejercicios de Práctica (No se entregan)

> **Importante**: Los ejercicios prácticos son materiales de aprendizaje guiados. **No se entregan de forma separada**.

### Criterios para Autoevaluación de Prácticas

| Criterio | Excelente (100%) | Bueno (80%) | Suficiente (70%) | Insuficiente (<70%) |
|----------|------------------|-------------|------------------|---------------------|
| **Ejercicio 1: Clases básicas** | Crea clases funcionales con constructor y múltiples métodos | Clases correctas con errores menores | Implementación básica funcional | No completa el ejercicio |
| **Ejercicio 2: Métodos estáticos** | Implementa factory methods y utilidades estáticas correctamente | Usa métodos estáticos con pequeños errores | Implementación parcial | No comprende métodos estáticos |
| **Ejercicio 3: Herencia** | Extiende clases correctamente usando super y sobrescribiendo métodos | Herencia funcional con dudas | Herencia básica sin sobrescritura | No logra implementar herencia |
| **Ejercicio 4: Encapsulación** | Usa getters, setters y # fields de forma profesional | Encapsulación correcta con errores menores | Implementación parcial | No aplica encapsulación |

## 📦 Proyecto: Sistema de Biblioteca (100%)

> **Único Entregable**: Este proyecto es la única entrega requerida para aprobar la semana. Debe demostrar tu dominio de todos los conceptos de POO aprendidos.

### Evaluación General del Proyecto

| Criterio | Excelente (100%) | Bueno (80%) | Suficiente (70%) | Insuficiente (<70%) |
|----------|------------------|-------------|------------------|---------------------|
| **Clase Book** | Implementa todas las propiedades, getters/setters y métodos requeridos | Implementación casi completa | Implementación básica funcional | Incompleta o no funcional |
| **Clase User** | Usuario con historial de préstamos y métodos de gestión | Implementación buena con detalles menores | Funcionalidad básica | No funcional |
| **Clase Library** | Sistema completo con búsqueda, préstamos y devoluciones | Mayoría de funcionalidades | Sistema básico operativo | No cumple requisitos |
| **Calidad del código** | Código limpio, bien documentado y siguiendo buenas prácticas | Código organizado con mejoras posibles | Código funcional pero mejorable | Código desordenado o difícil de leer |

---

## 📝 Rúbrica Detallada del Proyecto

### Sistema de Gestión de Biblioteca

#### Clase Book (25 puntos)

| Aspecto | Puntos | Descripción |
|---------|--------|-------------|
| Constructor | 5 | Recibe y asigna título, autor, ISBN, año |
| Campo privado #available | 3 | Implementa disponibilidad como campo privado |
| Getter/Setter available | 5 | Acceso controlado a disponibilidad |
| Método getInfo() | 4 | Retorna información formateada del libro |
| Método estático fromJSON() | 4 | Factory method para crear desde JSON |
| Validaciones | 4 | Valida ISBN, año y datos obligatorios |

#### Clase User (25 puntos)

| Aspecto | Puntos | Descripción |
|---------|--------|-------------|
| Constructor | 5 | ID, nombre, email, fecha de registro |
| Campo privado #borrowedBooks | 4 | Array de libros prestados |
| Método borrowBook() | 5 | Añade libro al historial |
| Método returnBook() | 5 | Remueve libro del historial |
| Getter borrowedBooks | 3 | Retorna copia del array (inmutabilidad) |
| Método estático validateEmail() | 3 | Validación básica de email |

#### Clase Library (35 puntos)

| Aspecto | Puntos | Descripción |
|---------|--------|-------------|
| Constructor | 5 | Inicializa colecciones de libros y usuarios |
| Método addBook() | 5 | Añade libros a la colección |
| Método registerUser() | 5 | Registra nuevos usuarios |
| Método lendBook() | 8 | Gestiona préstamo (validaciones incluidas) |
| Método returnBook() | 7 | Gestiona devolución |
| Método searchBooks() | 5 | Búsqueda por título, autor o ISBN |

#### Calidad General (15 puntos)

| Aspecto | Puntos | Descripción |
|---------|--------|-------------|
| Código limpio | 5 | Nomenclatura clara, sin código duplicado |
| Documentación | 5 | Comentarios útiles y README completo |
| Manejo de errores | 5 | Validaciones y mensajes descriptivos |

---

## 🏆 Escala de Calificación

| Rango | Calificación | Descripción |
|-------|--------------|-------------|
| 95-100% | A+ | Excepcional, supera expectativas |
| 90-94% | A | Excelente dominio de POO |
| 85-89% | B+ | Muy buen trabajo |
| 80-84% | B | Buen desempeño |
| 75-79% | C+ | Cumple requisitos |
| 70-74% | C | Mínimo aprobatorio |
| <70% | F | No aprobado |

---

## ✅ Checklist de Autoevaluación

Antes de entregar, verifica:

### Conocimientos
- [ ] Puedo explicar la diferencia entre class y function constructor
- [ ] Entiendo cuándo usar métodos de instancia vs estáticos
- [ ] Comprendo cómo funciona la herencia con extends
- [ ] Sé cuándo usar getters/setters vs propiedades directas
- [ ] Entiendo el propósito de los campos privados (#)

### Ejercicios
- [ ] Ejercicio 1: Clases básicas completado y funcionando
- [ ] Ejercicio 2: Métodos estáticos implementados correctamente
- [ ] Ejercicio 3: Herencia con super y métodos sobrescritos
- [ ] Ejercicio 4: Encapsulación con getters, setters y #

### Proyecto
- [ ] Clase Book con todas las propiedades y métodos
- [ ] Clase User con gestión de préstamos
- [ ] Clase Library con funcionalidad completa
- [ ] Validaciones implementadas
- [ ] Código documentado y limpio
- [ ] README del proyecto actualizado

---

## 📅 Fecha de Entrega

**Fecha límite**: Final de la Semana 3
**Formato de entrega**: Repositorio Git con commits descriptivos
**Rama**: `week-03-classes` o directamente en `main`

---

## 💬 Retroalimentación

Espacio para comentarios del instructor:

```
Fortalezas:
_________________________________________________
_________________________________________________

Áreas de mejora:
_________________________________________________
_________________________________________________

Recomendaciones:
_________________________________________________
_________________________________________________

Calificación final: _______ / 100
```
