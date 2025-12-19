# 📘 Week 03: Clases y Programación Orientada a Objetos

¡Bienvenido a la semana 3 del bootcamp! Esta semana nos sumergimos en la **Programación Orientada a Objetos (OOP)** con clases ES6+, uno de los paradigmas más importantes del desarrollo moderno.

---

## 🎯 Objetivos de Aprendizaje

Al finalizar esta semana, serás capaz de:

- ✅ Crear y usar clases ES6 con sintaxis moderna
- ✅ Implementar constructores y métodos de instancia
- ✅ Aplicar herencia con `extends` y `super`
- ✅ Usar getters y setters para encapsulación
- ✅ Trabajar con métodos y propiedades estáticas
- ✅ Implementar private fields con `#`
- ✅ Diseñar sistemas orientados a objetos

---

## 📋 Requisitos Previos

Antes de comenzar, debes dominar:

- ✅ Variables (let/const) y tipos de datos
- ✅ Arrow functions y template literals
- ✅ Array methods (map, filter, reduce)
- ✅ Destructuring y spread operator
- ✅ Object enhancements

---

## 🗂️ Estructura de la Semana

```
week-03/
├── README.md                 # Este archivo
├── rubrica-evaluacion.md     # Criterios de evaluación
├── 0-assets/                 # Diagramas SVG
│   ├── 01-clases-basicas.svg
│   ├── 02-herencia.svg
│   ├── 03-getters-setters.svg
│   ├── 04-metodos-estaticos.svg
│   └── 05-private-fields.svg
├── 1-teoria/                 # Material teórico
│   ├── 01-clases-basicas.md
│   ├── 02-herencia.md
│   ├── 03-getters-setters.md
│   ├── 04-metodos-estaticos.md
│   └── 05-private-fields.md
├── 2-practicas/              # Ejercicios prácticos
│   ├── ejercicio-01-clases-basicas/
│   ├── ejercicio-02-herencia/
│   ├── ejercicio-03-getters-setters/
│   └── ejercicio-04-sistema-completo/
├── 3-proyecto/               # Proyecto integrador
│   └── sistema-biblioteca/
├── 4-recursos/               # Recursos adicionales
│   ├── ebooks-free/
│   ├── videografia/
│   └── webgrafia/
└── 5-glosario/               # Glosario de términos
```

---

## 📚 Contenidos

### 1️⃣ Teoría

| Tema                                                      | Descripción                                         | Tiempo |
| --------------------------------------------------------- | --------------------------------------------------- | ------ |
| [01. Clases Básicas](1-teoria/01-clases-basicas.md)       | class, constructor, métodos de instancia            | 30 min |
| [02. Herencia](1-teoria/02-herencia.md)                   | extends, super, method overriding                   | 30 min |
| [03. Getters y Setters](1-teoria/03-getters-setters.md)   | get, set, validación, computed properties           | 30 min |
| [04. Métodos Estáticos](1-teoria/04-metodos-estaticos.md) | static methods, static properties, factory patterns | 30 min |
| [05. Private Fields](1-teoria/05-private-fields.md)       | # private fields, encapsulación real                | 30 min |

**Tiempo total de teoría**: ~2.5 horas

---

### 2️⃣ Prácticas

| Ejercicio                                                          | Descripción                          | Dificultad |
| ------------------------------------------------------------------ | ------------------------------------ | ---------- |
| [01. Clases Básicas](2-practicas/ejercicio-01-clases-basicas/)     | Crear clases, instancias, métodos    | ⭐⭐         |
| [02. Herencia](2-practicas/ejercicio-02-herencia/)                 | Implementar jerarquías de clases     | ⭐⭐⭐        |
| [03. Getters y Setters](2-practicas/ejercicio-03-getters-setters/) | Validación y propiedades computadas  | ⭐⭐⭐        |
| [04. Sistema Completo](2-practicas/ejercicio-04-sistema-completo/) | OOP avanzado con todos los conceptos | ⭐⭐⭐⭐       |

**Tiempo total de práctica**: ~3 horas

---

### 3️⃣ Proyecto Integrador

**[Sistema de Gestión de Biblioteca](3-proyecto/sistema-biblioteca/)**

Aplicación completa que implementa:
- 📚 Clases: Book, User, Library
- 🔄 Herencia: FictionBook, NonFictionBook, PremiumUser
- 🔒 Encapsulación con private fields
- ✨ Métodos estáticos y factory patterns
- 🎯 Sistema CRUD completo

**Tiempo estimado**: ~2 horas

---

## ⏱️ Distribución del Tiempo (8 horas)

| Actividad    | Tiempo    | Detalle                             |
| ------------ | --------- | ----------------------------------- |
| **Teoría**   | 2.5 hrs   | 5 temas × 30 min                    |
| **Práctica** | 3 hrs     | 4 ejercicios (30-50 min cada uno)   |
| **Proyecto** | 2 hrs     | Sistema de biblioteca completo      |
| **Recursos** | 0.5 hrs   | Lectura adicional, videos, glosario |
| **Total**    | **8 hrs** |                                     |

---

## 📝 Conceptos Clave

### Clases ES6

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hi, I'm ${this.name}`;
  }
}

const person = new Person('Ana', 25);
console.log(person.greet()); // "Hi, I'm Ana"
```

### Herencia

```javascript
class Employee extends Person {
  constructor(name, age, position) {
    super(name, age); // Llamar al constructor padre
    this.position = position;
  }

  work() {
    return `${this.name} is working as ${this.position}`;
  }
}
```

### Getters y Setters

```javascript
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get area() {
    return this._width * this._height;
  }

  set width(value) {
    if (value <= 0) throw new Error('Width must be positive');
    this._width = value;
  }
}
```

### Private Fields

```javascript
class BankAccount {
  #balance = 0; // Private field

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}
```

---

## 📌 Entregables

### Evidencias de Conocimiento (30%)
- Cuestionario sobre clases, herencia y encapsulación
- Conceptos de OOP y su aplicación en JavaScript

### Evidencias de Desempeño (40%)
- ✅ Ejercicio 01: Clases Básicas (10 pts)
- ✅ Ejercicio 02: Herencia (10 pts)
- ✅ Ejercicio 03: Getters y Setters (10 pts)
- ✅ Ejercicio 04: Sistema Completo (10 pts)

### Evidencias de Producto (30%)
- 📦 **Proyecto**: Sistema de Gestión de Biblioteca (30 pts)
  - Sistema funcional con clases bien diseñadas
  - Herencia implementada correctamente
  - Encapsulación con private fields
  - Código limpio y documentado

---

## 🎓 Criterios de Evaluación

Ver [rubrica-evaluacion.md](rubrica-evaluacion.md) para detalles completos.

**Criterio de aprobación**: Mínimo 70% en cada categoría

---

## 🔗 Navegación

- [← Semana 02: Operadores Avanzados y Array Methods](../week-02/README.md)
- [🏠 Inicio del Bootcamp](../../README.md)
- [→ Semana 04: Destructuring y Módulos ES6](../week-04/README.md)

---

## 📚 Recursos Adicionales

- **eBooks**: [4-recursos/ebooks-free/](4-recursos/ebooks-free/)
- **Videos**: [4-recursos/videografia/](4-recursos/videografia/)
- **Web**: [4-recursos/webgrafia/](4-recursos/webgrafia/)
- **Glosario**: [5-glosario/](5-glosario/)

---

## 💡 Consejos para esta Semana

1. 🎯 **Practica la sintaxis**: Las clases ES6 son diferentes de las funciones constructoras
2. 🔄 **Piensa en objetos**: Identifica entidades y sus relaciones
3. 🔒 **Usa encapsulación**: Los private fields (#) son clave para código robusto
4. 📐 **Diseña antes de codear**: Dibuja diagramas de clases antes de implementar
5. ✅ **Prueba constantemente**: Crea instancias y verifica el comportamiento

---

## ✅ Checklist de la Semana

- [ ] Leer los 5 archivos de teoría
- [ ] Completar los 4 ejercicios prácticos
- [ ] Implementar el proyecto de biblioteca
- [ ] Revisar el glosario de términos
- [ ] Explorar recursos adicionales
- [ ] Autoevaluarse con la rúbrica

---

**¡Éxito en tu semana de Programación Orientada a Objetos! 🚀**

_Última actualización: Diciembre 2024_
