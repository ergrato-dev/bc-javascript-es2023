# 📖 Glosario - Week 04

Términos clave y conceptos importantes de la semana 4, ordenados alfabéticamente.

---

## A

### **Alias (Destructuring)**
Nombre alternativo asignado a una variable durante el destructuring.

```javascript
const { name: userName, age: userAge } = user;
// userName = user.name, userAge = user.age
```

---

### **Array Destructuring**
Sintaxis que permite extraer elementos de un array en variables individuales.

```javascript
const [first, second, ...rest] = [1, 2, 3, 4, 5];
// first = 1, second = 2, rest = [3, 4, 5]
```

---

## B

### **Barrel Export**
Patrón de re-exportar múltiples módulos desde un único archivo `index.js`.

```javascript
// models/index.js
export { default as Product } from './Product.js';
export { default as Category } from './Category.js';
```

---

### **Bundle**
Archivo único que combina múltiples módulos JavaScript, creado por herramientas como Webpack o Rollup.

---

## C

### **Circular Dependency**
Dependencia circular. Cuando el módulo A importa B, y B importa A (directa o indirectamente).

```javascript
// Evitar: puede causar errores
// a.js imports b.js
// b.js imports a.js
```

---

### **Code Splitting**
Técnica para dividir el código en chunks más pequeños que se cargan bajo demanda.

```javascript
// Cada import() crea un chunk separado
const module = await import('./feature.js');
```

---

## D

### **Default Export**
Exportación por defecto de un módulo. Solo puede haber uno por archivo.

```javascript
// math.js
export default function add(a, b) {
  return a + b;
}

// main.js
import add from './math.js';
```

---

### **Default Value (Destructuring)**
Valor asignado cuando la propiedad extraída es `undefined`.

```javascript
const { name = 'Anonymous', age = 0 } = user;
const [first = 0, second = 0] = numbers;
```

---

### **Destructuring**
Sintaxis ES2023 que permite extraer valores de arrays u objetos en variables separadas.

```javascript
const { name, age } = user;      // Object destructuring
const [a, b] = [1, 2];           // Array destructuring
```

---

### **Destructuring Assignment**
Asignación por destructuring. Extracción de valores en una sola expresión.

```javascript
let a, b;
[a, b] = [1, 2];              // Array
({ a, b } = { a: 1, b: 2 });  // Object (requiere paréntesis)
```

---

### **Dynamic Import**
Función `import()` que carga módulos de forma asíncrona en tiempo de ejecución.

```javascript
const module = await import('./feature.js');
// o con .then()
import('./feature.js').then(module => { ... });
```

---

## E

### **ES Modules (ESM)**
Sistema de módulos nativo de JavaScript introducido en ES2023 (ES2015).

```javascript
import { something } from './module.js';
export const value = 42;
```

---

### **Export**
Declaración que hace disponible código de un módulo para otros módulos.

```javascript
export const PI = 3.14159;           // Named export
export default function() { }        // Default export
export { a, b, c };                  // Export list
```

---

## I

### **Import**
Declaración que trae código de otros módulos al módulo actual.

```javascript
import defaultExport from './module.js';
import { named } from './module.js';
import * as all from './module.js';
```

---

### **Import Specifier**
Identificador utilizado en la declaración import para referirse a una exportación.

```javascript
import { originalName as alias } from './module.js';
//       ↑ import specifier
```

---

## L

### **Lazy Loading**
Carga diferida. Técnica de cargar recursos solo cuando son necesarios.

```javascript
button.addEventListener('click', async () => {
  const { heavyFunction } = await import('./heavy.js');
  heavyFunction();
});
```

---

### **Live Binding**
Enlace vivo. Las exportaciones en ES Modules son referencias en vivo, no copias.

```javascript
// counter.js
export let count = 0;
export const increment = () => count++;

// main.js
import { count, increment } from './counter.js';
increment();
console.log(count); // 1 (refleja el cambio)
```

---

## M

### **Module**
Archivo JavaScript que utiliza `import`/`export` para compartir código.

---

### **Module Scope**
Ámbito de módulo. Las variables declaradas en un módulo son privadas por defecto.

```javascript
// private.js
const secret = 'hidden';      // Solo accesible dentro del módulo
export const public = 'visible';
```

---

### **Module Specifier**
Cadena que identifica el módulo a importar (ruta o nombre de paquete).

```javascript
import { x } from './local.js';      // Ruta relativa
import { y } from '/absolute.js';    // Ruta absoluta
import { z } from 'package-name';    // Bare specifier (npm)
```

---

## N

### **Named Export**
Exportación con nombre específico. Puede haber múltiples por módulo.

```javascript
export const PI = 3.14159;
export function sum(a, b) { return a + b; }
export class Calculator { }
```

---

### **Namespace Import**
Importar todas las exportaciones de un módulo como un objeto.

```javascript
import * as math from './math.js';
math.sum(1, 2);
math.PI;
```

---

### **Nested Destructuring**
Destructuring de estructuras anidadas (objetos dentro de objetos o arrays).

```javascript
const { address: { city, country } } = user;
const [[a, b], [c, d]] = matrix;
```

---

## O

### **Object Destructuring**
Extracción de propiedades de un objeto en variables.

```javascript
const { name, age, email } = user;
```

---

## P

### **Parameter Destructuring**
Destructuring directamente en los parámetros de una función.

```javascript
const greet = ({ name, age }) => `${name} is ${age}`;
const sum = ([a, b]) => a + b;
```

---

## R

### **Re-export**
Exportar algo que fue importado de otro módulo.

```javascript
export { default as Product } from './Product.js';
export * from './utils.js';
```

---

### **Rest Pattern (Destructuring)**
Usar `...` para capturar elementos restantes en destructuring.

```javascript
const [first, ...others] = [1, 2, 3, 4];
const { name, ...rest } = user;
```

---

## S

### **Side Effect Import**
Importar un módulo solo por sus efectos secundarios, sin usar sus exportaciones.

```javascript
import './polyfills.js';
import './styles.css';
```

---

### **Static Import**
Declaración `import` estática que se analiza en tiempo de compilación.

```javascript
import { something } from './module.js';  // Static
// vs
const mod = await import('./module.js');  // Dynamic
```

---

### **Swapping Variables**
Intercambiar valores de variables usando destructuring.

```javascript
let a = 1, b = 2;
[a, b] = [b, a];
// a = 2, b = 1
```

---

## T

### **Top-level await**
Uso de `await` en el nivel superior de un módulo ES.

```javascript
// config.js (ES Module)
const response = await fetch('/config.json');
export const config = await response.json();
```

---

### **Tree Shaking**
Eliminación de código no utilizado durante el proceso de bundling.

```javascript
// Solo 'used' se incluye en el bundle final
import { used } from './utils.js';
// 'unused' se elimina automáticamente
```

---

## Índice Rápido

| Término | Categoría |
|---------|-----------|
| Alias | Destructuring |
| Array Destructuring | Destructuring |
| Barrel Export | Modules |
| Code Splitting | Modules |
| Default Export | Modules |
| Default Value | Destructuring |
| Dynamic Import | Modules |
| ES Modules | Modules |
| Lazy Loading | Modules |
| Live Binding | Modules |
| Named Export | Modules |
| Namespace Import | Modules |
| Nested Destructuring | Destructuring |
| Object Destructuring | Destructuring |
| Parameter Destructuring | Destructuring |
| Re-export | Modules |
| Rest Pattern | Destructuring |
| Static Import | Modules |
| Swapping | Destructuring |
| Top-level await | Modules |
| Tree Shaking | Modules |

---

## 🔗 Referencias

- [MDN - Destructuring](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [MDN - JavaScript Modules](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Modules)
- [JavaScript.info - Modules](https://javascript.info/modules)

---

**Última actualización**: Diciembre 2024
