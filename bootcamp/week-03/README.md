# 🚀 Semana 3: Clases y Programación Orientada a Objetos

## 🎯 Objetivos de Aprendizaje

Al finalizar esta semana, serás capaz de:

- ✅ Crear clases ES6 con constructores y propiedades
- ✅ Definir métodos de instancia y métodos estáticos
- ✅ Implementar herencia con `extends` y `super`
- ✅ Utilizar getters y setters para encapsulación
- ✅ Trabajar con campos privados (`#`) para datos protegidos
- ✅ Aplicar patrones de POO en aplicaciones reales
- ✅ Diferenciar entre clases y funciones constructoras

---

## 📚 Requisitos Previos

- ✅ Haber completado la Semana 1 y 2
- ✅ Dominar arrow functions y métodos de arrays
- ✅ Comprender destructuring y spread operator
- ✅ Conocer objetos literales y sus métodos

---

## 🗂️ Estructura de la Semana

```
week-03/
├── README.md                    # Este archivo
├── rubrica-evaluacion.md        # Criterios de evaluación
├── 0-assets/                    # Diagramas y recursos visuales
│   └── README.md
├── 1-teoria/                    # Material teórico
│   ├── 01-clases-basicas.md
│   ├── 02-metodos-estaticos.md
│   ├── 03-herencia.md
│   ├── 04-getters-setters.md
│   └── 05-campos-privados.md
├── 2-practicas/                 # Ejercicios guiados
│   ├── ejercicio-01-clases-basicas/
│   ├── ejercicio-02-metodos-estaticos/
│   ├── ejercicio-03-herencia/
│   └── ejercicio-04-encapsulacion/
├── 3-proyecto/                  # Proyecto semanal
│   └── biblioteca/
├── 4-recursos/                  # Material adicional
│   ├── ebooks-free/
│   ├── videografia/
│   └── webgrafia/
└── 5-glosario/                  # Términos clave
    └── README.md
```

---

## 📝 Contenidos

### 1️⃣ Teoría (2.5 horas)

| Tema | Duración | Descripción |
|------|----------|-------------|
| [Clases Básicas](1-teoria/01-clases-basicas.md) | 30 min | Sintaxis class, constructor y métodos |
| [Métodos Estáticos](1-teoria/02-metodos-estaticos.md) | 25 min | Métodos de clase vs instancia |
| [Herencia](1-teoria/03-herencia.md) | 35 min | extends, super y polimorfismo |
| [Getters y Setters](1-teoria/04-getters-setters.md) | 30 min | Propiedades computadas |
| [Campos Privados](1-teoria/05-campos-privados.md) | 30 min | Encapsulación con # |

### 2️⃣ Prácticas (3 horas)

| Ejercicio | Duración | Nivel | Objetivo |
|-----------|----------|-------|----------|
| Clases Básicas | 45 min | Básico | Crear clases con constructor y métodos |
| Métodos Estáticos | 40 min | Básico | Factory methods y utilidades |
| Herencia | 50 min | Intermedio | Extender clases y usar super |
| Encapsulación | 45 min | Intermedio | Getters, setters y campos privados |

### 3️⃣ Proyecto (2 horas)

**Sistema de Gestión de Biblioteca**

Crear un sistema completo de biblioteca utilizando:
- Clase `Book` con propiedades y métodos
- Clase `User` para gestionar usuarios
- Clase `Library` que hereda y compone
- Getters/setters para validación
- Campos privados para datos sensibles

---

## ⏱️ Distribución del Tiempo (8 horas)

```
📖 Teoría:           2.5h (31%)
💻 Prácticas:        3h   (37.5%)
🚀 Proyecto:         2h   (25%)
📚 Recursos:         0.5h (6.5%)
```

### Cronograma Sugerido

| Día | Actividad | Tiempo |
|-----|-----------|--------|
| Día 1 | Teoría: Clases básicas + Métodos estáticos | 1h |
| Día 1 | Práctica: Ejercicios 1-2 | 1.5h |
| Día 2 | Teoría: Herencia | 35 min |
| Día 2 | Práctica: Ejercicio 3 | 50 min |
| Día 3 | Teoría: Getters/Setters + Campos privados | 1h |
| Día 3 | Práctica: Ejercicio 4 | 45 min |
| Día 4 | Proyecto: Sistema de Biblioteca | 2h |
| Día 4 | Recursos adicionales y repaso | 30 min |

---

## 📌 Entregables

1. **Ejercicios completados** - Los 4 ejercicios prácticos funcionando
2. **Proyecto de biblioteca** - Sistema completo con todas las clases
3. **Autoevaluación** - Reflexión sobre conceptos de POO

---

## 💡 Conceptos Clave de la Semana

```javascript
// Clase básica
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getInfo() {
    return `${this.name}: $${this.price}`;
  }
}

// Herencia
class DigitalProduct extends Product {
  constructor(name, price, downloadUrl) {
    super(name, price);
    this.downloadUrl = downloadUrl;
  }
}

// Campos privados
class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  get balance() {
    return this.#balance;
  }
}
```

---

## 🔗 Navegación

| ⬅️ Anterior | 🏠 Inicio | Siguiente ➡️ |
|-------------|-----------|--------------|
| [Semana 2: Operadores y Arrays](../week-02/README.md) | [Bootcamp](../README.md) | [Semana 4: Destructuring y Módulos](../week-04/README.md) |

---

## 📚 Recursos Adicionales

- [MDN: Classes](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes)
- [JavaScript.info: Classes](https://javascript.info/class)
- [MDN: Private class features](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields)
