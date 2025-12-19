# 📖 Glosario - Week 04: Destructuring y Módulos ES6

Términos clave ordenados alfabéticamente.

---

## A

### Alias (Destructuring)
Asignar un nombre diferente a una propiedad al desestructurar.
```javascript
const { name: userName } = user;
// 'name' se asigna a 'userName'
```

### Array Destructuring
Extraer valores de un array asignándolos a variables individuales.
```javascript
const [first, second] = [1, 2, 3];
```

---

## B

### Barrel File
Archivo `index.js` que re-exporta módulos de una carpeta para imports más limpios.
```javascript
// utils/index.js
export * from './validators.js';
export * from './formatters.js';

// Uso
import { validate, format } from './utils/index.js';
```

### Bundler
Herramienta que empaqueta módulos JavaScript (Webpack, Rollup, Vite).

---

## C

### Code Splitting
Dividir código en chunks que se cargan bajo demanda usando dynamic imports.
```javascript
const module = await import('./heavy-feature.js');
```

### CommonJS
Sistema de módulos usado en Node.js (`require`, `module.exports`). Anterior a ES6.

### Computed Property Names
Usar expresiones como nombres de propiedades en destructuring.
```javascript
const key = 'name';
const { [key]: value } = user;
```

---

## D

### Default Export
Exportar un solo valor como exportación predeterminada de un módulo.
```javascript
// math.js
export default class Calculator { }

// app.js
import Calculator from './math.js';
```

### Default Values (Destructuring)
Asignar valores predeterminados si la propiedad no existe.
```javascript
const { name = 'Anónimo' } = user;
```

### Destructuring Assignment
Sintaxis para extraer valores de arrays u objetos en variables individuales.

### Dynamic Import
Cargar módulos dinámicamente usando `import()` como función.
```javascript
const module = await import('./module.js');
```

---

## E

### ES Modules (ESM)
Sistema de módulos estándar de JavaScript (ES6+) con `import`/`export`.

### Export
Palabra clave para exportar valores desde un módulo.
```javascript
export const PI = 3.14159;
export function add(a, b) { return a + b; }
```

---

## I

### Import
Palabra clave para importar valores desde otros módulos.
```javascript
import { PI, add } from './math.js';
```

### Import Map
Especificar alias para rutas de módulos (experimental).
```html
<script type="importmap">
{
  "imports": {
    "lodash": "/node_modules/lodash/lodash.js"
  }
}
</script>
```

---

## L

### Lazy Loading
Cargar código solo cuando se necesita (con dynamic imports).
```javascript
button.addEventListener('click', async () => {
  const { render } = await import('./view.js');
  render();
});
```

---

## M

### Module
Archivo JavaScript que exporta e importa código de forma aislada.

### Module Scope
Ámbito privado de un módulo; las variables no son globales por defecto.

---

## N

### Named Export
Exportar múltiples valores con nombres específicos.
```javascript
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

### Named Import
Importar valores específicos por nombre.
```javascript
import { add, subtract } from './math.js';
```

### Namespace Import
Importar todos los exports como un objeto.
```javascript
import * as math from './math.js';
math.add(2, 3);
```

### Nested Destructuring
Desestructurar objetos o arrays anidados.
```javascript
const { user: { address: { city } } } = data;
```

---

## O

### Object Destructuring
Extraer propiedades de un objeto.
```javascript
const { name, age } = user;
```

---

## P

### Parameter Destructuring
Desestructurar directamente en parámetros de función.
```javascript
const greet = ({ name, age }) => {
  console.log(`${name} has ${age} years`);
};
```

---

## R

### Re-export
Exportar módulos importados (común en barrel files).
```javascript
// index.js
export { User } from './User.js';
export { Post } from './Post.js';
```

### Rest Operator (Destructuring)
Capturar elementos restantes en un array u objeto.
```javascript
const [first, ...rest] = [1, 2, 3, 4];
// first = 1, rest = [2, 3, 4]

const { name, ...otherProps } = user;
// name = 'John', otherProps = { age: 30, email: '...' }
```

---

## S

### Side Effect Import
Importar un módulo solo por sus efectos secundarios, sin valores.
```javascript
import './polyfills.js';
```

### Skipping Values (Array Destructuring)
Omitir elementos usando comas.
```javascript
const [first, , third] = [1, 2, 3];
// first = 1, third = 3
```

### Swap (Destructuring)
Intercambiar valores de variables usando destructuring.
```javascript
[a, b] = [b, a];
```

---

## T

### Tree Shaking
Eliminación de código no usado en el bundle final (dead code elimination).

### Type Module
Atributo HTML para usar ES Modules en el navegador.
```html
<script type="module" src="app.js"></script>
```

---

## Ejemplos Completos por Concepto

### Destructuring Básico

```javascript
// Arrays
const colors = ['red', 'green', 'blue'];
const [primary, secondary] = colors;

// Objetos
const user = { name: 'Ana', age: 25 };
const { name, age } = user;
```

### Destructuring con Defaults

```javascript
const { name = 'Anónimo', role = 'user' } = person;
const [first = 0, second = 0] = values;
```

### Destructuring con Rest

```javascript
const { id, ...userData } = user;
const [head, ...tail] = array;
```

### Destructuring Anidado

```javascript
const {
  user: {
    profile: {
      avatar
    }
  }
} = response;
```

### Named Exports/Imports

```javascript
// math.js
export const PI = 3.14159;
export const E = 2.71828;
export const add = (a, b) => a + b;

// app.js
import { PI, add } from './math.js';
```

### Default Export/Import

```javascript
// User.js
export default class User {
  constructor(name) {
    this.name = name;
  }
}

// app.js
import User from './User.js';
```

### Mixed Exports

```javascript
// api.js
export const BASE_URL = 'https://api.example.com';
export default class API {
  // ...
}

// app.js
import API, { BASE_URL } from './api.js';
```

### Re-exports (Barrel File)

```javascript
// models/index.js
export { User } from './User.js';
export { Post } from './Post.js';
export { Comment } from './Comment.js';

// app.js
import { User, Post, Comment } from './models/index.js';
```

### Dynamic Import

```javascript
// Condicional
if (feature.enabled) {
  const module = await import('./feature.js');
  module.init();
}

// Lazy loading
button.addEventListener('click', async () => {
  const { renderChart } = await import('./chart.js');
  renderChart(data);
});
```

### Namespace Import

```javascript
// utils/index.js
export const format = str => str.toUpperCase();
export const validate = str => str.length > 0;

// app.js
import * as utils from './utils/index.js';
utils.format('hello');
utils.validate('test');
```

---

## Combinaciones Comunes

### API Response Destructuring

```javascript
const fetchUser = async id => {
  const response = await fetch(`/api/users/${id}`);
  const { data: { user } } = await response.json();
  return user;
};
```

### Function Parameters

```javascript
const createUser = ({
  name,
  email,
  role = 'user',
  active = true
}) => {
  return { name, email, role, active };
};
```

### Array Methods con Destructuring

```javascript
const users = [
  { name: 'Ana', age: 25 },
  { name: 'Luis', age: 30 }
];

const names = users.map(({ name }) => name);
const adults = users.filter(({ age }) => age >= 18);
```

### Module Pattern

```javascript
// services/taskService.js
import { Task } from '../models/index.js';
import { save, load } from './storage.js';

export const createTask = data => {
  const task = new Task(data);
  save('tasks', task);
  return task;
};

export const getAllTasks = () => {
  return load('tasks') || [];
};
```

---

## Errores Comunes

### ❌ Desestructurar undefined

```javascript
const { name } = undefined; // TypeError
// Solución: usar defaults
const { name } = user || {};
const { name } = user ?? {};
```

### ❌ Usar var en destructuring

```javascript
var { name } = user; // Evitar var
// Usar const o let
const { name } = user;
```

### ❌ Olvidar .js en imports

```javascript
import { add } from './math'; // Error en navegadores
// Incluir extensión
import { add } from './math.js';
```

### ❌ Circular dependencies

```javascript
// a.js imports b.js
// b.js imports a.js
// Reorganizar código para evitar ciclos
```

---

## Referencias Rápidas

### Sintaxis de Destructuring

| Tipo           | Sintaxis       | Ejemplo                           |
| -------------- | -------------- | --------------------------------- |
| Array básico   | `[a, b]`       | `const [x, y] = [1, 2]`           |
| Array con rest | `[a, ...rest]` | `const [first, ...others] = arr`  |
| Array skip     | `[a, , c]`     | `const [x, , z] = [1, 2, 3]`      |
| Object básico  | `{a, b}`       | `const {name, age} = user`        |
| Object alias   | `{a: b}`       | `const {name: userName} = user`   |
| Object rest    | `{a, ...rest}` | `const {id, ...data} = obj`       |
| Defaults       | `{a = val}`    | `const {name = 'Unknown'} = user` |

### Sintaxis de Módulos

| Operación        | Sintaxis          | Ejemplo                              |
| ---------------- | ----------------- | ------------------------------------ |
| Named export     | `export const`    | `export const PI = 3.14`             |
| Default export   | `export default`  | `export default class User {}`       |
| Named import     | `import { }`      | `import { add } from './math.js'`    |
| Default import   | `import name`     | `import User from './User.js'`       |
| Namespace import | `import * as`     | `import * as math from './math.js'`  |
| Re-export        | `export { } from` | `export { User } from './User.js'`   |
| Dynamic import   | `await import()`  | `const m = await import('./mod.js')` |

---

**📌 Nota**: Este glosario cubre los términos esenciales de Week-04. Consulta la documentación de MDN para detalles técnicos adicionales.
