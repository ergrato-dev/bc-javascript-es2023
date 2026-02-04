# 📅 Semana 12: Proyecto Integrador - Fundamentos

## 🎯 Objetivos de Aprendizaje

Al finalizar esta semana, serás capaz de:

- ✅ Aplicar todos los conceptos de ES2023 aprendidos en semanas 1-11
- ✅ Diseñar la arquitectura de una aplicación modular
- ✅ Implementar un sistema completo con múltiples componentes
- ✅ Aplicar principios de clean code y buenas prácticas
- ✅ Integrar clases, módulos, iteradores, proxies y manejo de errores
- ✅ Construir una aplicación funcional de principio a fin

---

## 📚 Requisitos Previos

Esta semana integra **todos los conceptos** de las semanas anteriores:

| Semana | Tema | Aplicación en Proyecto |
|--------|------|----------------------|
| 01 | Variables, Arrow Functions | Base de todo el código |
| 02 | Spread, Rest, Array Methods | Manipulación de productos/carrito |
| 03 | Clases y POO | Models (Product, User, Cart) |
| 04 | Destructuring, Módulos | Arquitectura modular |
| 05 | Arrays Avanzados | Filtrado, ordenamiento, búsqueda |
| 06 | Strings y RegExp | Validación de inputs |
| 07 | Sets y Maps | Catálogo de productos únicos |
| 08 | Iteradores y Generadores | Paginación de productos |
| 09 | Símbolos | Propiedades privadas |
| 10 | Proxies y Reflect | Validación reactiva |
| 11 | Manejo de Errores | Sistema robusto |

---

## 🗂️ Estructura de la Semana

```
week-12/
├── README.md                    # Este archivo
├── rubrica-evaluacion.md        # Criterios de evaluación
├── 0-assets/                    # Diagramas y recursos visuales
├── 1-teoria/                    # Revisión de conceptos
│   ├── 01-revision-conceptos.md
│   ├── 02-arquitectura-aplicacion.md
│   └── 03-clean-code.md
├── 3-proyecto/                  # Proyecto E-commerce
│   └── ecommerce-app/
│       ├── README.md
│       ├── index.html
│       ├── styles.css
│       ├── starter/             # Tu código
│       │   └── js/
│       └── solution/            # Solución completa
│           └── js/
├── 4-recursos/                  # Recursos adicionales
└── 5-glosario/                  # Términos clave
```

> **Nota**: Esta semana no tiene carpeta `2-practicas/` porque todo el tiempo está dedicado al proyecto integrador.

---

## 📝 Contenido

### 1️⃣ Teoría (0.5 horas)

| # | Tema | Archivo | Duración |
|---|------|---------|----------|
| 01 | Revisión de Conceptos ES2023 | [01-revision-conceptos.md](./1-teoria/01-revision-conceptos.md) | 15 min |
| 02 | Arquitectura de Aplicación | [02-arquitectura-aplicacion.md](./1-teoria/02-arquitectura-aplicacion.md) | 10 min |
| 03 | Clean Code y Refactoring | [03-clean-code.md](./1-teoria/03-clean-code.md) | 5 min |

### 2️⃣ Planning (1.5 horas)

Antes de codificar:
1. **Analiza los requisitos** del proyecto
2. **Diseña la arquitectura** de módulos
3. **Planifica las clases** y sus relaciones
4. **Identifica los datos** y su flujo

### 3️⃣ Proyecto (5.5 horas)

| Proyecto | Descripción | Enlace |
|----------|-------------|--------|
| 🛒 E-commerce App | Aplicación completa de tienda online | [3-proyecto/ecommerce-app](./3-proyecto/ecommerce-app/) |

**Características del proyecto**:
- Catálogo de productos con filtros y búsqueda
- Carrito de compras con operaciones CRUD
- Sistema de usuarios con autenticación simulada
- Persistencia en localStorage
- UI interactiva y responsive

---

## ⏱️ Distribución del Tiempo

| Actividad | Tiempo | Descripción |
|-----------|--------|-------------|
| Teoría | 0.5h | Revisión rápida de conceptos |
| Planning | 1.5h | Análisis y diseño |
| Desarrollo | 5.5h | Implementación del proyecto |
| Recursos | 0.5h | Material complementario |
| **Total** | **8h** | |

### Sugerencia de Desarrollo (5.5h)

| Fase | Tiempo | Tarea |
|------|--------|-------|
| 1 | 1h | Crear clases base (Product, User, Cart) |
| 2 | 1h | Implementar servicios (Storage, Auth) |
| 3 | 1.5h | Desarrollar UI del catálogo |
| 4 | 1h | Implementar carrito de compras |
| 5 | 1h | Integrar todo + testing manual |

---

## 📌 Entregables

### 📦 Proyecto (100%)

El **único entregable** para esta semana es el proyecto:

- [ ] **Proyecto E-commerce funcional** con:
  - [ ] Módulos ES6 correctamente estructurados
  - [ ] Clases para Product, User y Cart
  - [ ] Catálogo con filtros y búsqueda
  - [ ] Carrito de compras operativo
  - [ ] Persistencia en localStorage
  - [ ] Manejo de errores implementado

> **Nota**: Los ejercicios prácticos son materiales de aprendizaje. No se entregan de forma separada.

### Extras Opcionales (Bonus)

- [ ] Sistema de favoritos/wishlist
- [ ] Historial de compras
- [ ] Comparador de productos
- [ ] Dark/Light mode
- [ ] Animaciones CSS

---

## 🎓 Conceptos Clave Aplicados

### De Semanas Anteriores

```javascript
// Week 01-02: Variables, arrow functions, spread, array methods
const products = [...initialProducts];
const filtered = products.filter(p => p.price < 100);

// Week 03: Clases
class Product {
  #id;
  constructor(name, price) { ... }
}

// Week 04: Módulos
import { ProductService } from './services/ProductService.js';
export { Cart };

// Week 05: Arrays avanzados
const categories = [...new Set(products.map(p => p.category))];

// Week 06: Strings y RegExp
const isValidEmail = /^[\w.-]+@[\w.-]+\.\w+$/.test(email);

// Week 07: Maps
const cartItems = new Map();

// Week 08: Iteradores
*paginateProducts(products, pageSize) { ... }

// Week 09: Símbolos
const SECRET_KEY = Symbol('secretKey');

// Week 10: Proxies
const reactiveCart = new Proxy(cart, { ... });

// Week 11: Manejo de errores
class ProductNotFoundError extends AppError { ... }
```

---

## 🔗 Navegación

| ⬅️ Semana 11 | 🏠 Inicio | ➡️ Semana 13 |
|:-------------|:---------:|-------------:|
| [Manejo de Errores](../week-11/) | [Bootcamp](../README.md) | [Callbacks y Promises](../week-13/) |

---

## 📖 Recursos Adicionales

- [4-recursos/](./4-recursos/) - Material complementario
- [5-glosario/](./5-glosario/) - Términos clave de arquitectura

---

## 🏆 Criterios de Éxito

Esta semana marca el **fin de la Etapa 1: Fundamentos Modernos**.

Para aprobar, debes demostrar dominio de:

| Área | Peso |
|------|------|
| Uso correcto de ES2023 | 25% |
| Arquitectura modular | 25% |
| Funcionalidad completa | 30% |
| Clean code | 20% |

¡Es tu oportunidad de consolidar todo lo aprendido! 🚀
