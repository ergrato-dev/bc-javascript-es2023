# Lab 02 — Serialización con JSON

## Objetivo

Guardar objetos en `localStorage` convirtiéndolos a texto con JSON, ver qué valores no sobreviven al viaje, recuperar fechas con un *reviver*, guardar `Map` y `Set`, leer sin romper la página cuando el texto falta o está roto, comprobar la forma de lo leído y migrar un formato antiguo con un sobre con versión.

**Tiempo:** 50 min · **Teoría:** [02 - Serialización con JSON](../../1-teoria/02-serializacion.md)

## Cómo trabajar

[`starter/main.js`](starter/main.js) tiene 6 pasos; [`starter/index.html`](starter/index.html) solo lo carga.

1. Abre `starter/index.html` en el navegador, por ejemplo con doble clic.
2. Abre la consola de las DevTools con `F12` (o `Cmd+Option+I` en macOS) y la pestaña **Application** → **Local storage**.
3. En cada paso, descomenta el código del paso (`Ctrl+/` o `Cmd+/`), guarda y recarga con `F5`.

Los pasos no dependen unos de otros. Al empezar, `main.js` borra las claves `lab19:demo:`. Las salidas de este README se obtuvieron en Chromium con todos los pasos descomentados.

---

## Paso 1: Ida y vuelta, y lo que se pierde

`JSON.stringify(objeto)` da un texto que `setItem` guarda tal cual, y `JSON.parse(texto)` reconstruye el objeto. El objeto leído tiene los mismos datos, pero es otro objeto. Los valores que JSON no conoce se pierden o se convierten en `null`, y un `BigInt` lanza un error.

```text
--- Paso 1: JSON.stringify y JSON.parse ---
Guardado: {"id":7,"holder":"Lucía","adults":2,"kids":0,"active":true,"tanks":["Arrecife","Medusas"]}
Leído: Lucía, 2 adultos, tanques 2 · ¿mismo objeto? false
Con valores raros: {"ratio":null,"top":null,"list":[null,null]}
BigInt: TypeError: Do not know how to serialize a BigInt
```

De `tricky` desaparecen `note` (`undefined`) y `greet` (una función). `NaN` e `Infinity` se guardan como `null`. Dentro de un array no pueden desaparecer sin mover las posiciones, así que también se guardan como `null`.

## Paso 2: Las fechas vuelven como texto

Un `Date` se guarda como texto ISO. `JSON.parse` no sabe que era una fecha y devuelve el texto, que no tiene los métodos de `Date`. El segundo argumento de `JSON.parse`, el *reviver*, recibe cada clave con su valor y devuelve el valor que quieres guardar en el objeto.

```text
--- Paso 2: Date y reviver ---
Texto: {"id":7,"expires":"2026-12-31T10:00:00.000Z"}
Sin reviver: string · ¿tiene getFullYear? undefined
Con reviver: true · año 2026
```

## Paso 3: `Map` y `Set` no se guardan solos

`JSON.stringify` guarda un `Map` y un `Set` como `{}`: sus datos no son propiedades del objeto. `[...map]` da un array de parejas `[clave, valor]` y `[...set]` un array de valores, que sí se guardan. `new Map(array)` y `new Set(array)` los reconstruyen.

```text
--- Paso 3: Map y Set ---
Tal cual: {"capacity":{},"favorites":{}}
Como arrays: {"capacity":[["Arrecife",40],["Medusas",15]],"favorites":["Medusas"]}
Recuperados: Medusas → 15 · ¿favorito Arrecife? false
```

## Paso 4: Datos rotos o que no existen

El paso guarda un JSON cortado a medias, como el que podría quedar si alguien lo edita a mano. `JSON.parse` lanza `SyntaxError`. En cambio, `JSON.parse(null)` no falla: convierte `null` en el texto `"null"` y devuelve `null`. `readJSON` trata los dos casos y devuelve el valor por defecto.

```text
--- Paso 4: JSON corrupto y null ---
SyntaxError: Unexpected end of JSON input
JSON.parse(null): null
«lab19:demo:broken» no es JSON válido: se usa el valor por defecto
readJSON de la rota: []
readJSON de la que no existe: []
```

El aviso sale en amarillo porque usa `console.warn`. El mensaje del `SyntaxError` cambia de un navegador a otro; el nombre, no.

## Paso 5: Comprobar la forma de lo que lees

Un JSON válido puede no tener la forma que espera tu código. `isPass` comprueba lo que va a usar: que sea un objeto (y no `null`), con `id` y `adults` enteros y `holder` de texto.

```text
--- Paso 5: Validar lo leído ---
{"id":7,"holder":"Lucía","adults":2} → true
{"id":"7","holder":"Lucía"}          → false
[1,2,3]                              → false
null                                 → false
42                                   → false
```

`typeof null` es `'object'`, por eso hace falta `value !== null`. Un array también es un objeto, pero no tiene `id`.

## Paso 6: Versionar lo que guardas

La versión 1 de una página guardaba solo un array de nombres. La versión 2 guarda un **sobre** `{ version, passes }` con objetos. `migrate` reconoce los dos formatos y devuelve siempre el de la versión 2; con una versión que no conoce, lanza un error. Después de migrar, se guarda en el formato nuevo.

```text
--- Paso 6: Un sobre con versión ---
Migrado y guardado: {"version":2,"passes":[{"id":1,"holder":"Lucía","adults":1},{"id":2,"holder":"Omar","adults":1}]}
Ya en la versión 2: 2 abonos
Versión desconocida: 3

✅ Lab completado.
```

La versión 1 no tenía número de versión: se reconoce porque es un array. A partir de la 2, el número va siempre dentro del sobre.

---

## Comprobación

1. En el paso 2, guarda también una fecha dentro de un array (`dates: [new Date()]`). ¿Recupera el *reviver* esa fecha? ¿Qué clave recibe para cada elemento del array?
2. En el paso 4, ¿qué devuelve `readJSON` si la clave guarda el texto `"null"`? ¿Es el valor por defecto?
3. En el paso 6, añade una versión 3 en la que cada abono lleve también `kids: 0`. ¿Qué cambia en `migrate` para que siga leyendo las versiones 1 y 2?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 01 — localStorage y sessionStorage](../lab-01-local-session-storage/README.md) | [Lab 03 — IndexedDB](../lab-03-indexeddb/README.md) → |

[↑ Semana 19](../../README.md)
