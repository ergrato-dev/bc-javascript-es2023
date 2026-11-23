# Lab 03 — IndexedDB

## Objetivo

Abrir una base de IndexedDB, crear un almacén con un índice, guardar y leer objetos en transacciones, buscar por índice y por rango de claves, comprobar que una transacción con un error se deshace entera y subir la base de versión.

**Tiempo:** 55 min · **Teoría:** [03 - IndexedDB](../../1-teoria/03-indexeddb.md)

## Cómo trabajar

[`starter/main.js`](starter/main.js) tiene 6 pasos dentro de una función `async`, `main`, para poder usar `await`. Arriba están `done` y `finished`, que convierten una petición y una transacción de IndexedDB en promesas.

1. Abre `starter/index.html` en el navegador, por ejemplo con doble clic.
2. Abre la consola de las DevTools con `F12` (o `Cmd+Option+I` en macOS) y la pestaña **Application** → **IndexedDB** (en Firefox, **Almacenamiento** → **Indexed DB**).
3. En cada paso, descomenta el código del paso (`Ctrl+/` o `Cmd+/`), guarda y recarga con `F5`.

Los pasos van en orden: del 2 en adelante usan la base `db` que abre el paso 1, y cada uno usa los datos que deja el anterior. Al empezar, `main` borra la base `lab19-acuario`, para que cada recarga empiece igual. Las salidas de este README se obtuvieron en Chromium con todos los pasos descomentados.

> Si la recarga se queda parada sin escribir nada, cierra las demás pestañas que tengan abierta esta página: una conexión abierta en otra pestaña puede bloquear el borrado de la base.

---

## Paso 1: Abrir la base y crear el almacén

`indexedDB.open(nombre, versión)` devuelve una petición. Como la base no existe, antes de `success` llega `upgradeneeded`, con `oldVersion` 0. Ahí, y solo ahí, se crean los almacenes y los índices: `animals` guarda objetos cuya clave es su `id`, y el índice `byTank` permite buscar por la propiedad `tank`.

```text
--- Paso 1: open y upgradeneeded ---
upgradeneeded: versión 0 → 1
Abierta: lab19-acuario v1 · almacenes: animals
```

En **Application** → **IndexedDB** aparece `lab19-acuario` con el almacén `animals`. Si no lo ves, pulsa el botón de recargar de ese panel.

## Paso 2: Escribir en una transacción

Para escribir hace falta una transacción `'readwrite'`. Cada `add` es una petición; no hace falta esperar a cada una. `finished(writeTx)` espera a que la transacción termine (`complete`): en ese momento los cuatro animales están guardados.

```text
--- Paso 2: add en una transacción readwrite ---
Guardados 4 animales
```

En el panel de IndexedDB, abre `animals`: verás los cuatro objetos, con `arrived` como fecha.

## Paso 3: Leer por clave y leer todo

Una transacción sin modo es de solo lectura. `get(clave)` devuelve el objeto o `undefined` si no existe; `getAll()`, todos ordenados por clave; `count()`, cuántos hay. IndexedDB guarda los objetos sin pasar por JSON, así que `arrived` sigue siendo un `Date`.

```text
--- Paso 3: get, getAll y count ---
get(2): Luna · arrived es Date: true (2026-04-15)
get(99): undefined
getAll: Coral, Luna, Brisa, Toto
count: 4
```

Las cuatro peticiones usan la misma transacción. Funciona porque entre una y otra solo hay `await` de esas peticiones: si esperaras otra cosa (un `setTimeout`, un `fetch`), la transacción ya se habría cerrado.

## Paso 4: Buscar con un índice y con un rango

`index('byTank').getAll('Arrecife')` devuelve los animales con `tank` igual a `'Arrecife'`, sin recorrer los demás. `IDBKeyRange.bound(2, 3)` es el rango de claves de 2 a 3, ambas incluidas.

```text
--- Paso 4: index y IDBKeyRange ---
En Arrecife: Coral, Brisa
ids 2 a 3: Luna, Brisa
```

## Paso 5: `put`, `delete` y una transacción que falla

`put` sustituye el objeto con esa clave (Toto cambia de tanque) y `delete` borra uno (Brisa). Después, `badTx` añade a Perla y luego otro animal con el `id` 1, que ya existe: ese `add` falla con `ConstraintError`. Como nadie gestiona el error, la transacción se aborta y **deshace también el `add` de Perla**.

```text
--- Paso 5: put, delete y abort ---
Tras put y delete: 3 animales
La transacción se deshace: ConstraintError
¿Está Perla (id 5)? undefined
Siguen: 3 animales
```

## Paso 6: Subir de versión

Para añadir el índice `bySpecies` hay que abrir con la versión 2. Antes de abrir, el paso pone un listener de `versionchange` en la conexión de la versión 1: cuando otra conexión pide subir de versión, esta tiene que cerrarse o la subida espera. En `upgradeneeded`, el almacén ya existe: se toma de `upgrade.transaction` y se le añade el índice. Los datos se conservan.

```text
--- Paso 6: Versión 2 y versionchange ---
versionchange: cierro la conexión de la versión 1
upgradeneeded: versión 1 → 2
v2 · índices: bySpecies, byTank · animales: 3

✅ Lab completado.
```

Ese listener es el que necesitas en una página real: con dos pestañas abiertas, la que tiene el código viejo debe cerrar su conexión para que la nueva pueda subir de versión.

---

## Comprobación

1. En el paso 2, cambia el `add` por `put` y añade a la lista otro animal con el `id` 1. ¿Cuántos animales se guardan? ¿Y con `add`?
2. En el paso 5, añade `event.preventDefault()` en un `onerror` de la segunda petición (`const request = ...add(...)`; `request.onerror = (event) => event.preventDefault()`). ¿Se guarda Perla? ¿Por qué?
3. En el paso 6, quita el listener de `versionchange`. Abre la página en dos pestañas: ¿qué pasa en la segunda?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 02 — Serialización con JSON](../lab-02-serializacion/README.md) | [Lab 04 — Cuotas, errores y caducidad](../lab-04-cuotas-y-errores/README.md) → |

[↑ Semana 19](../../README.md)
