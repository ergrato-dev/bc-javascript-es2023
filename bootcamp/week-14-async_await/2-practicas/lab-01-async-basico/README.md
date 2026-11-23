# Lab 01 — Funciones async y await

## Objetivo

Declarar funciones `async`, esperar promesas con `await`, reescribir una cadena de `.then()` con `async`/`await` y entender en qué orden se ejecuta el código que rodea a un `await`.

**Tiempo:** 50 min · **Teoría:** [01 - Funciones async](../../1-teoria/01-async-functions.md) y [02 - await](../../1-teoria/02-await-keyword.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 7 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-14-async_await/2-practicas/lab-01-async-basico
node starter/index.js
```

El archivo usa `await` fuera de cualquier función (*top-level await*). Node solo lo permite en módulos ES y, al encontrarlo, trata el archivo como módulo sin que tengas que configurar nada. `wait` y `slowValue` simulan operaciones que tardan: son promesas con un `setTimeout`, como en la [semana 13](../../../week-13-programacion_asincronica_callbacks_promises/README.md). Las salidas de este README se obtuvieron con Node 24.

---

## Paso 1: una función async devuelve una promesa

La palabra `async` delante de una función hace que **siempre** devuelva una promesa. Lo que pongas en el `return` es el valor con el que esa promesa se cumple. Para leer el valor, usa `await` (o `.then()`).

```text
--- Paso 1: async devuelve una promesa ---
greet() devuelve: Promise { 'Bienvenido al planetario' }
¿Es una Promise? true
Valor: Bienvenido al planetario
```

El diagrama [`01-async-function-return.svg`](../../0-assets/01-async-function-return.svg) muestra cómo `async` envuelve el valor.

## Paso 2: cuatro formas de escribir una función async

`async` va delante de `function`, delante de los parámetros de una arrow function o delante del nombre de un método. Las cuatro funciones del paso se comportan igual.

```text
--- Paso 2: Sintaxis ---
declaración
expresión
arrow function
método de objeto
```

## Paso 3: `await` espera a que la promesa termine

Dentro de una función `async`, `await promesa` pausa **esa función** hasta que la promesa se cumple y devuelve su valor. Cada `await` del paso tarda 100 ms, y el siguiente no empieza hasta que termina el anterior.

```text
--- Paso 3: await ---
Pidiendo la sesión...
Sesión recibida: Viaje a Saturno
Butacas libres: 42
Resultado: Viaje a Saturno (42 butacas)
```

## Paso 4: de `.then()` a `async`/`await`

`withThen` y `withAwait` hacen lo mismo: piden la sesión, le añaden la sala y montan un texto. La versión con `await` guarda cada resultado en una constante y se lee de arriba abajo, como el código síncrono.

```text
--- Paso 4: De .then() a await ---
then:  Nebulosas en Cúpula A
await: Nebulosas en Cúpula A
```

## Paso 5: el código de fuera no espera

`await` pausa solo la función en la que está. Quien llama a `task()` recibe una promesa pendiente al llegar al primer `await` y sigue con su código: por eso la línea `3` sale antes que la `4`. El `await pending` final es lo que hace esperar al módulo.

```text
--- Paso 5: Orden de ejecución ---
1. Antes de llamar a task
2. Empieza task
3. Después de llamar a task (no ha esperado)
4. task sigue tras el await
5. Ya terminó task
```

## Paso 6: `await` con valores que no son promesas

`await` acepta cualquier valor: si no es una promesa, lo devuelve tal cual. Y si una función `async` devuelve una promesa, el resultado no es una promesa dentro de otra: `await nested()` da directamente el valor de dentro.

```text
--- Paso 6: await con cualquier valor ---
Número: 42
Texto: sin promesa
Promise.resolve: ya resuelta
Promesa devuelta: valor interior
```

## Paso 7: olvidar el `await`

Es el error más común de la semana. Sin `await`, la constante guarda la promesa, no el array, y `length` vale `undefined`. No hay error que avise: el fallo aparece más tarde, donde se usa el valor.

```text
--- Paso 7: Olvidar el await ---
Sin await: Promise { <pending> }
¿length? undefined
Con await: [ 'Ana', 'Luis', 'Marta' ]
¿length? 3

✅ Lab completado.
```

---

## Comprobación

1. En el paso 5, quita el `await` de `await pending` y ejecuta. ¿Dónde aparece ahora la línea `4` y por qué?
2. En el paso 3, la función tarda unos 200 ms. ¿Cuánto tardaría si las dos esperas fueran independientes y se lanzaran a la vez? Lo verás en el [lab 03](../lab-03-parallel-vs-sequential/README.md).
3. Reescribe con `async`/`await` esta función de la semana 13 y comprueba que imprime `Cúpula A`:

   ```javascript
   const roomOf = (id) => getShow(id).then(getRoom).then((show) => show.room);
   ```

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Índice de labs](../README.md) | [Lab 02 — Errores con async/await](../lab-02-error-handling/README.md) → |

[↑ Semana 14](../../README.md)
