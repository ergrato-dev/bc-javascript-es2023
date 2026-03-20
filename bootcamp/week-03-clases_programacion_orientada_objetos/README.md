# 🚀 Semana 3: Clases y Programación Orientada a Objetos

## 🎯 Objetivos de Aprendizaje

Al finalizar esta semana, serás capaz de:

- ✅ Crear clases ES2023 con constructores y propiedades
- ✅ Definir métodos de instancia y métodos estáticos
- ✅ Implementar herencia con `extends` y `super`
- ✅ Utilizar getters y setters para encapsulación
- ✅ Trabajar con campos privados (`#`) para datos protegidos
- ✅ Usar static blocks para inicialización compleja (ES2022)
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
week-03-clases_programacion_orientada_objetos/
├── README.md                    # Este archivo
├── rubrica-evaluacion.md        # Criterios de evaluación
├── 0-assets/                    # Diagramas y recursos visuales
│   ├── 01-clases-basicas.svg
│   ├── 02-metodos-estaticos.svg
│   ├── 03-herencia.svg
│   ├── 04-getters-setters.svg
│   ├── 05-campos-privados.svg
│   └── 06-static-blocks.svg
├── 1-teoria/                    # Material teórico
│   ├── 01-clases-basicas.md
│   ├── 02-metodos-estaticos.md
│   ├── 03-herencia.md
│   ├── 04-getters-setters.md
│   ├── 05-campos-privados.md
│   └── 06-static-blocks.md
├── 2-practicas/                 # Ejercicios guiados
│   ├── ejercicio-01-clases-basicas/
│   ├── ejercicio-02-metodos-estaticos/
│   ├── ejercicio-03-herencia/
│   ├── ejercicio-04-encapsulacion/
│   └── ejercicio-05-static-blocks/
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
| [Clases Básicas](1-teoria/01-clases-basicas.md) | 25 min | Sintaxis class, constructor y métodos |
| [Métodos Estáticos](1-teoria/02-metodos-estaticos.md) | 25 min | Métodos de clase vs instancia |
| [Herencia](1-teoria/03-herencia.md) | 30 min | extends, super y polimorfismo |
| [Getters y Setters](1-teoria/04-getters-setters.md) | 25 min | Propiedades computadas |
| [Campos Privados](1-teoria/05-campos-privados.md) | 25 min | Encapsulación con # |
| [Static Blocks](1-teoria/06-static-blocks.md) | 25 min | Bloques de inicialización (ES2022) |

### 2️⃣ Prácticas (3 horas)

| Ejercicio | Duración | Nivel | Objetivo |
|-----------|----------|-------|---------|
| Clases Básicas | 35 min | Básico | Crear clases con constructor y métodos |
| Métodos Estáticos | 35 min | Básico | Factory methods y utilidades |
| Herencia | 40 min | Intermedio | Extender clases y usar super |
| Encapsulación | 35 min | Intermedio | Getters, setters y campos privados |
| Static Blocks | 35 min | Intermedio | Inicialización estática avanzada |

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

### 📦 Proyecto (100%)

El **único entregable** para esta semana es el proyecto:

- [ ] **Proyecto "Sistema de Gestión de Biblioteca" funcional**
- [ ] Clases con constructor, métodos y propiedades
- [ ] Implementación de herencia con extends y super
- [ ] Uso de getters, setters y campos privados (#)
- [ ] Código limpio y bien comentado en inglés
- [ ] README del proyecto documentado

> **Nota**: Los ejercicios prácticos y la teoría son materiales de aprendizaje para prepararte para el proyecto, pero no se entregan de forma separada. El proyecto debe demostrar tu dominio de todos los conceptos de POO aprendidos.

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
| [Semana 2: Operadores y Arrays](../week-02-operadores_metodos_modernos_arrays/README.md) | [Bootcamp](../README.md) | [Semana 4: Destructuring y Módulos](../week-04-destructuring_modulos_es2023/README.md) |

---

## 📚 Recursos Adicionales

- [MDN: Classes](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes)
- [JavaScript.info: Classes](https://javascript.info/class)
- [MDN: Private class features](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields)
