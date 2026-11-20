# Repaso de las semanas 1 a 11

## Objetivo

Repasar, sin conceptos nuevos, lo que el proyecto de esta semana necesita de cada semana anterior. Cada bloque recuerda la idea con un ejemplo corto y enlaza la semana donde se explica a fondo. Si un ejemplo no te resulta familiar, vuelve a esa semana antes de empezar el proyecto.

---

## Qué usa el proyecto de cada semana

| Semana | Concepto | Dónde aparece en el proyecto |
|---|---|---|
| [01](../../week-01-introduccion_javascript_moderno_es2023/README.md) | `const`/`let`, arrow functions, template literals | Todo `logic.js`; los ids `` `${prefix}-001` `` |
| [02](../../week-02-operadores_metodos_modernos_arrays/README.md) | Spread, `??`, `filter`, `map`, `reduce` | `{ id, ...clean }`, `search`, `summarize` |
| [03](../../week-03-clases_programacion_orientada_objetos/README.md) | Clases, `extends`, campos y métodos privados, getters | `ValidationError`, `Collection`, `get size()`, `#notify()` |
| [04](../../week-04-destructuring_modulos_es2023/README.md) | Desestructuración con valores por defecto, módulos | `search(pieces, { text = '', ... } = {})`, `import`/`export` |
| [05](../../week-05-arrays_avanzados/README.md) | `toSorted` y comparadores | `search` ordena sin tocar la lista original |
| [06](../../week-06-strings_regexp_modernos/README.md) | `trim`, `toLowerCase`, `includes`, `padStart` | Validar el nombre, buscar por texto, numerar los ids |
| [07](../../week-07-sets_maps/README.md) | `Map` y `Set` | Las piezas por id, los suscriptores, el resumen por sala |
| [08](../../week-08-iteradores_generadores/README.md) | Generadores, `yield`, `yield*` | `paginate` y el iterador de `Collection` |
| [09](../../week-09-simbolos_metaprogramacion_basica/README.md) | `Symbol.iterator` | `for...of` y `[...collection]` |
| [11](../../week-11-manejo_errores_moderno/README.md) | Errores propios, `try...catch`, `instanceof` | `ValidationError` y el formulario de `main.js` |

La [semana 10](../../week-10-proxies_reflect/README.md) (Proxy y Reflect) no aparece: la colección ya controla quién cambia sus datos con campos privados, que es más sencillo.

---

## Clases con estado privado (semana 03)

Un campo con `#` solo existe dentro de la clase. Desde fuera, el estado se lee y se cambia a través de los métodos que la clase decida ofrecer:

```javascript
class Counter {
  #count = 0;

  get count() {
    return this.#count;
  }

  increment() {
    this.#count += 1;
  }
}

const counter = new Counter();
counter.increment();
console.log(counter.count, Object.keys(counter));
// 1 []
```

Practícalo en el [lab 01](../2-practicas/lab-01-clases/README.md).

## Map y Set (semana 07)

Un `Map` guarda pares clave → valor, encuentra un valor por su clave sin recorrer nada y recuerda el orden en que entraron las claves. Un `Set` guarda valores sin repetir:

```javascript
const rooms = new Map();
rooms.set('Cúpula', 2).set('Vestíbulo', 1);
rooms.set('Cúpula', rooms.get('Cúpula') + 1);
console.log(rooms.get('Cúpula'), rooms.has('Patio'), [...rooms.keys()]);
// 3 false [ 'Cúpula', 'Vestíbulo' ]

const listeners = new Set();
const log = () => {};
listeners.add(log).add(log);
console.log(listeners.size);
// 1
```

Practícalo en el [lab 04](../2-practicas/lab-04-map/README.md).

## Iteradores y generadores (semanas 08 y 09)

Una función con `*` es un generador: cada `yield` entrega un valor y la función se detiene hasta el siguiente `next()`. Si un objeto tiene un método `[Symbol.iterator]` que devuelve un iterador, funciona con `for...of` y con el spread:

```javascript
class Shelf {
  #books = ['Atlas', 'Bestiario'];

  *[Symbol.iterator]() {
    yield* this.#books;
  }
}

function* countTo(limit) {
  for (let n = 1; n <= limit; n += 1) yield n;
}

console.log([...new Shelf()], [...countTo(3)]);
// [ 'Atlas', 'Bestiario' ] [ 1, 2, 3 ]
```

`yield*` entrega uno a uno los valores de otro iterable.

## Métodos que no modifican el original (semanas 02 y 05)

`filter`, `map` y `toSorted` devuelven un array nuevo. `sort` ordena el mismo array y cambia el original, así que en el proyecto se usa `toSorted`:

```javascript
const values = [30, 10, 20];
const sorted = values.toSorted((a, b) => a - b);
console.log(sorted, values);
// [ 10, 20, 30 ] [ 30, 10, 20 ]
```

## Errores propios (semana 11)

Una clase que hereda de `Error` añade los datos que necesita quien captura el error. Con `instanceof`, el `catch` distingue un dato malo, que se explica a la persona, de un fallo del programa, que se relanza:

```javascript
class ValidationError extends Error {
  constructor(field, message) {
    super(message);
    this.name = 'ValidationError';
    this.field = field;
  }
}

try {
  throw new ValidationError('name', 'Campo obligatorio');
} catch (error) {
  if (!(error instanceof ValidationError)) throw error;
  console.log(`${error.field}: ${error.message}`);
}
// name: Campo obligatorio
```

## Módulos (semana 04)

Cada archivo es un módulo con su propio ámbito: solo sale lo que lleva `export`, y solo entra lo que se pide con `import`. La ruta empieza por `./` y lleva la extensión `.js`. Practícalo en el [lab 03](../2-practicas/lab-03-modulos/README.md).

---

Todas las salidas de este documento se obtuvieron con Node 24.19.0.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Semana 12 - Proyecto Integrador - Fundamentos](../README.md) | [Teoría — Arquitectura del proyecto](02-arquitectura-aplicacion.md) → |

[↑ Semana 12](../README.md)
