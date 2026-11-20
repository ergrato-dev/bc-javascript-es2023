# Lab 05 — `at()` y `Object.hasOwn()`

## Objetivo

Leer elementos desde el final de un array o un texto con `at()` y comprobar si un objeto tiene una propiedad propia con `Object.hasOwn()`, dos métodos de ES2022.

**Tiempo:** 40 min · **Teoría:** [06 - Métodos ES2022](../../1-teoria/06-metodos-es2022.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 8 pasos. En este lab, muchos pasos tienen **más de un bloque comentado**: primero los datos o la función que se usa (por ejemplo `const colors = [...]`) y después, bajo `Descomenta las siguientes líneas:`, el código que la prueba. Descomenta todos los bloques de código del paso; las líneas que explican en español se quedan como comentario. Selecciona el bloque y pulsa `Ctrl+/` (`Cmd+/` en macOS), y ejecuta:

```bash
cd bootcamp/week-02-operadores_metodos_modernos_arrays/2-practicas/lab-05-metodos-es2022
node starter/index.js
```

Las salidas de este README se obtuvieron con Node 24. Los pasos que aún no descomentaste solo imprimen su título. Si te sale `ReferenceError: colors is not defined` (o el nombre que sea), te falta descomentar los datos de ese paso.

---

## Paso 1: `at()`

`colors.at(0)` es el primer elemento, igual que `colors[0]`. La diferencia está en los números negativos: `at(-1)` es el último y `at(-2)` el penúltimo.

```text
--- Paso 1: Introducción a at() ---
Primer color: rojo
Último color: morado
Penúltimo: amarillo
```

## Paso 2: `at()` frente a corchetes

Con corchetes, `nums[-1]` no cuenta desde el final: busca una propiedad llamada `"-1"`, que no existe, y devuelve `undefined`. Antes de `at()`, el último elemento se leía con `nums[nums.length - 1]`.

```text
--- Paso 2: Comparando at() con corchetes ---
nums[-1] con corchetes: undefined
nums.at(-1) con at(): 50

Acceso al último elemento:
Forma antigua: nums[nums.length - 1] = 50
Forma moderna: nums.at(-1) = 50
```

## Paso 3: casos prácticos

`split('.')` parte el texto por cada punto y devuelve un array de trozos; `at(-1)` se queda con el último, que es la extensión. Con `split('/')` se obtiene el nombre del archivo de una ruta. `at()` también funciona con textos: `message.at(-1)` es la última letra.

```text
--- Paso 3: Casos prácticos de at() ---
Extensión de "documento.pdf": pdf
Extensión de "archivo.tar.gz": gz
Extensión de "imagen.min.js": js

Archivo de "/home/user/docs/report.pdf": report.pdf
Archivo de "images/logo.png": logo.png

Primera letra de "JavaScript": J
Última letra de "JavaScript": t
```

## Paso 4: `Object.hasOwn()`

`Object.hasOwn(user, 'name')` devuelve `true` si `user` tiene la propiedad `name` escrita en el propio objeto. Todos los objetos pueden usar métodos como `toString`, pero no son suyos: los **heredan** de `Object.prototype`, un objeto común del que cuelgan todos. Por eso `toString` da `false`.

```text
--- Paso 4: Introducción a Object.hasOwn() ---
¿user tiene "name"? true
¿user tiene "age"? true
¿user tiene "phone"? false
¿user tiene "toString"? false
```

## Paso 5: por qué no `hasOwnProperty`

El método antiguo era `objeto.hasOwnProperty('x')`, que también se hereda. `Object.create(null)` crea un objeto sin herencia (Node lo muestra como `[Object: null prototype]`): no tiene `hasOwnProperty` y llamarlo da error. `try { ... } catch (error) { ... }` ejecuta el código y, si falla, pasa al `catch` en lugar de detener el programa. `Object.hasOwn()` funciona con cualquier objeto.

```text
--- Paso 5: Object.hasOwn() vs hasOwnProperty() ---
Config sin prototype: [Object: null prototype] { debug: true, logLevel: 'info' }
¿tiene "debug"? (hasOwn): true
Error con hasOwnProperty: configSinPrototype.hasOwnProperty is not a function

Forma antigua segura:
Object.prototype.hasOwnProperty.call(config, "debug"): true
```

## Paso 6: propiedades propias y heredadas

`Object.create(animal)` crea `dog` heredando de `animal`: `dog.breathe` existe, pero no es de `dog`. `Object.hasOwn()` solo cuenta las propias; el operador `in` cuenta también las heredadas.

```text
--- Paso 6: Propiedades propias vs heredadas ---
Propiedades de dog:
  dog.bark = true (propia)
  dog.breathe = true (heredada)

Verificando con Object.hasOwn():
  ¿hasOwn(dog, "bark")? true
  ¿hasOwn(dog, "breathe")? false

Verificando con "in" operator:
  ¿"bark" in dog? true
  ¿"breathe" in dog? true
  (nota: "in" incluye propiedades heredadas)
```

## Paso 7: `at()` y `hasOwn()` juntos

`validateLastRecord` toma el último registro con `at(-1)` y devuelve la lista de campos obligatorios que le faltan, con `filter` y `Object.hasOwn()`. Las líneas `//` vacías dentro de la función se pueden quedar o borrar.

```text
--- Paso 7: Combinando at() y Object.hasOwn() ---
Validación con [id, name]: {
  valid: true,
  record: { id: 3, name: 'Item 3', price: 100 },
  missingFields: []
}
Validación con [id, name, description]: {
  valid: false,
  record: { id: 3, name: 'Item 3', price: 100 },
  missingFields: [ 'description' ]
}
```

## Paso 8: historial de navegación

`createBrowserHistory` devuelve un objeto con métodos que comparten el array `history`. `getCurrentPage` usa `at(-1) ?? null` para devolver `null` si aún no hay páginas, y `getMeta`/`hasMeta` usan `Object.hasOwn()`. Dentro de `getStats`, `this` es el propio objeto del historial, así que `this.getCurrentPage()` llama a su método. El valor de `timestamp` es la hora de la ejecución en milisegundos (`Date.now()`), así que el tuyo será otro.

```text
--- Paso 8: Ejercicio integrador ---
Página actual: {
  url: 'https://mdn.io',
  title: 'MDN Web Docs',
  timestamp: 1795142512555,
  id: 3
}
Página anterior: {
  url: 'https://github.com',
  title: 'GitHub',
  timestamp: 1795142512555,
  id: 2
}

¿Tiene sessionId? true
¿Tiene theme? false

Estadísticas: { totalPages: 3, currentPage: 'https://mdn.io', hasSessionId: true }

==================================================
✅ Lab completado
==================================================
```

---

## Comprobación

- [ ] Los 8 pasos descomentados y `node starter/index.js` termina sin errores.
- [ ] Sabes explicar por qué `nums[-1]` devuelve `undefined`.
- [ ] Sabes qué diferencia hay entre `Object.hasOwn(dog, 'breathe')` y `'breathe' in dog`.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 04 — `reduce`](../lab-04-reduce/README.md) | [Proyecto — Gestor de colección de tu dominio](../../3-proyecto/README.md) → |

[↑ Semana 02](../../README.md)
