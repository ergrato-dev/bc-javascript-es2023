# Proyecto Semana 14 — Explorador de catálogo

## Descripción

Una página que pide las fichas del catálogo de tu dominio (las obras de una colección, los productos de una tienda, las rutas de un parque...) a un servidor simulado. Cada ficha tarda unos milisegundos en llegar, y algunas peticiones fallan porque la ficha no existe o porque el servidor está ocupado. La página las pide de seis formas, y cada una usa una herramienta de la semana: en orden con un `await` detrás de otro, todas a la vez con `Promise.all`, solo las que existan con `Promise.allSettled`, con reintentos, por páginas con un generador asíncrono y buscando por nombre con un `for await` que se detiene al encontrar la ficha.

La página ya está montada. Tu trabajo es escribir las siete funciones de `src/logic.js` y cambiar las fichas de ejemplo por las de tu dominio. Esta semana todo se escribe con `async`/`await`: las comprobaciones no admiten `.then()` en `src/logic.js`.

**Tiempo:** 2 h.

## Punto de partida

```bash
mkdir -p ~/js-proyecto-semana-14
cp -r bootcamp/week-14-async_await/3-proyecto/starter/. ~/js-proyecto-semana-14/
cd ~/js-proyecto-semana-14
```

Ejecuta el `cp` desde la carpeta del bootcamp. Quedan estos archivos:

| Archivo | Qué contiene | ¿Lo editas? |
|---|---|---|
| `index.html` | El formulario, el registro y la lista de fichas; carga `src/main.js` | No |
| `styles.css` | Los estilos | Si quieres |
| `src/data.js` | El título y las fichas de ejemplo | Sí: paso 2 |
| `src/logic.js` | `wait`, ya hecha, y siete funciones con `TODO` | Sí: es el proyecto |
| `src/main.js` | El código que conecta la página con `logic.js` | No |

- **Qué:** `getItem` es la única función que simula el servidor: busca la ficha y espera su `delay`. Las demás piden fichas a través de `getItem` o recorren `pages`.
- **Para qué:** cada modo de la página cambia solo cómo se combinan las peticiones, no cómo se hace una. Si mañana las fichas vinieran de un servidor real (lo verás en la [semana 15](../../week-15-fetch_api/README.md)), solo cambiaría `getItem`.
- **Impacto:** `logic.js` no toca el DOM, así `scripts/verificar-semana.sh` la prueba desde Node sin navegador. Más detalles en [docs/autograding.md](../../../docs/autograding.md).

---

## Paso 1: ver la página (10 min)

```bash
pnpm dlx serve .
```

```text
 INFO  Accepting connections at http://localhost:3000
```

Abre `http://localhost:3000`. Con el starter, la página muestra las seis fichas de ejemplo, pero ningún modo funciona. **Pedir** en el modo **En orden** muestra `✖ Cannot read properties of undefined (reading 'map')`, porque `getInSequence` todavía no devuelve nada. **Por páginas** termina con `✔ 0 páginas de 2 fichas` y **Buscar por nombre** no encuentra nada: el generador aún no entrega páginas.

Cada modo empieza a funcionar al terminar su paso. Mientras tanto, comprueba cada función con el comando `node` de su paso. Deja el servidor abierto en esa terminal y usa otra para el resto.

Los comandos de los pasos 3 a 9 miden el tiempo con `start` y `ms()`, que lo redondea a la centena porque cada ejecución varía unos pocos milisegundos.

## Paso 2: tus datos (15 min)

En `src/data.js` están los datos del dominio Planetario, que es solo un ejemplo. Cámbialos por los de **tu dominio** (el que te asignó el instructor):

- `TITLE`: el título de la página, con un emoji.
- El export por defecto: de 4 a 8 fichas de tu dominio, cada una con `id` (un entero positivo sin repetir), `name` (3 caracteres o más, sin repetir), `detail` (una línea de descripción) y `delay` (un entero de 50 a 2000: los milisegundos que tarda en llegar).

Usa retrasos distintos entre sí: así se nota la diferencia entre pedir en orden y a la vez. Las salidas de los pasos siguientes son las de los datos de ejemplo; con los tuyos verás tus fichas, tus ids y tus tiempos.

## Paso 3: `getItem` (15 min)

Una función `async` ([lab 01](../2-practicas/lab-01-async-basico/README.md)). Busca con `find` la ficha cuyo `id` coincide, espera con `await wait(...)` su `delay` (o 100 ms si no existe) y entonces devuelve la ficha o lanza `new Error(...)` con el mensaje `` `No existe la ficha ${id}` ``. Dentro de una función `async`, `throw` rechaza la promesa que devuelve.

```bash
node --input-type=module -e "import items from './src/data.js'; import { getItem } from './src/logic.js'; let start = performance.now(); const ms = () => Math.round((performance.now() - start) / 100) * 100 + ' ms'; const item = await getItem(items, 5); console.log(ms(), item.name); start = performance.now(); try { await getItem(items, 42); } catch (error) { console.log(ms(), '❌', error.message); }"
```

```text
300 ms Eclipses
100 ms ❌ No existe la ficha 42
```

## Paso 4: `getInSequence` (15 min)

Un `for...of` sobre `ids` con `await getItem(...)` dentro, que va añadiendo cada ficha a un array ([lab 03](../2-practicas/lab-03-parallel-vs-sequential/README.md), paso 6). Cada petición empieza cuando acaba la anterior, así que el tiempo total es la suma de los retrasos. Si una falla, el `await` lanza el error, el bucle se corta y las fichas siguientes no se piden: no hace falta ningún `try`.

```bash
node --input-type=module -e "import items from './src/data.js'; import { getInSequence } from './src/logic.js'; let start = performance.now(); const ms = () => Math.round((performance.now() - start) / 100) * 100 + ' ms'; const found = await getInSequence(items, [1, 2, 3]); console.log(ms(), found.map(({ name }) => name)); start = performance.now(); try { await getInSequence(items, [5, 9, 1]); } catch (error) { console.log(ms(), '❌', error.message); }"
```

```text
1900 ms [ 'Viaje a Saturno', 'Nebulosas', 'Taller de cohetes' ]
400 ms ❌ No existe la ficha 9
```

400 + 900 + 600 = 1900 ms. En el segundo caso, 300 ms de la ficha 5 y 100 ms de la 9; la 1 ya no se pide.

## Paso 5: `getInParallel` (10 min)

Convierte cada id en la promesa de su ficha con `ids.map(...)` y espera todas con `Promise.all` ([lab 03](../2-practicas/lab-03-parallel-vs-sequential/README.md), paso 2). Todas empiezan a la vez: el total es lo que tarda la más lenta.

```bash
node --input-type=module -e "import items from './src/data.js'; import { getInParallel } from './src/logic.js'; let start = performance.now(); const ms = () => Math.round((performance.now() - start) / 100) * 100 + ' ms'; const found = await getInParallel(items, [1, 2, 3]); console.log(ms(), found.map(({ name }) => name)); start = performance.now(); try { await getInParallel(items, [2, 9]); } catch (error) { console.log(ms(), '❌', error.message); }"
```

```text
900 ms [ 'Viaje a Saturno', 'Nebulosas', 'Taller de cohetes' ]
100 ms ❌ No existe la ficha 9
```

Las mismas fichas que en el paso 4, en el mismo orden, en 900 ms en lugar de 1900. Y el error llega a los 100 ms, sin esperar a la ficha 2.

## Paso 6: `getAvailable` (15 min)

`await Promise.allSettled(...)` con las mismas promesas que el paso 5 da un array de resultados `{ status, value }` o `{ status, reason }`, uno por id y en su orden ([lab 03](../2-practicas/lab-03-parallel-vs-sequential/README.md), paso 5). Con `filter` y `map` saca dos arrays: `found`, los `value` de los cumplidos, y `missing`, los ids cuyo resultado está `'rejected'` (el segundo parámetro de `filter` es la posición).

```bash
node --input-type=module -e "import items from './src/data.js'; import { getAvailable } from './src/logic.js'; const start = performance.now(); const ms = () => Math.round((performance.now() - start) / 100) * 100 + ' ms'; const { found, missing } = await getAvailable(items, [1, 9, 5, 12]); console.log(ms(), found.map(({ name }) => name), missing);"
```

```text
400 ms [ 'Viaje a Saturno', 'Eclipses' ] [ 9, 12 ]
```

## Paso 7: `retry` (20 min)

El reintento del [lab 02](../2-practicas/lab-02-error-handling/README.md), paso 7, con dos cambios:

- Guarda el último error en una variable declarada antes del bucle y, si fallan todos los intentos, lanza `new Error(message, { cause: lastError })` con el mensaje `` `Falló tras ${attempts} intentos` ``.
- Espera `delayMs` solo entre un intento y el siguiente: tras el último fallo, lanza el error sin esperar.

Usa `return await task()` dentro del `try`: sin el `await`, el error no pasaría por el `catch` (lab 02, paso 6).

```bash
node --input-type=module -e "import { retry } from './src/logic.js'; let start = performance.now(); const ms = () => Math.round((performance.now() - start) / 100) * 100 + ' ms'; let calls = 0; const unstable = async () => { calls += 1; console.log(ms(), 'llamada', calls); if (calls < 3) throw new Error('Servidor ocupado ' + calls); return 'Respuesta en la llamada ' + calls; }; console.log('✅', await retry(unstable, 5, 200)); calls = 0; start = performance.now(); try { await retry(unstable, 2, 200); } catch (error) { console.log('❌', error.message, '· cause:', error.cause.message); }"
```

```text
0 ms llamada 1
200 ms llamada 2
400 ms llamada 3
✅ Respuesta en la llamada 3
0 ms llamada 1
200 ms llamada 2
❌ Falló tras 2 intentos · cause: Servidor ocupado 2
```

En la página, el modo **Con reintentos** simula un servidor que falla las primeras veces (el campo **Fallos del servidor**) y permite 3 intentos separados por 300 ms.

## Paso 8: `pages` (15 min)

Un generador asíncrono ([lab 04](../2-practicas/lab-04-async-iteration/README.md), pasos 2 y 3): un `for` que avanza de `size` en `size` por `items`, espera 100 ms con `await wait(100)` y entrega con `yield` el trozo `items.slice(index, index + size)`.

```bash
node --input-type=module -e "import items from './src/data.js'; import { pages } from './src/logic.js'; const start = performance.now(); const ms = () => Math.round((performance.now() - start) / 100) * 100 + ' ms'; for await (const page of pages(items, 4)) { console.log(ms(), page.map(({ name }) => name)); }"
```

```text
100 ms [
  'Viaje a Saturno',
  'Nebulosas',
  'Taller de cohetes',
  'Cielo de invierno'
]
200 ms [ 'Eclipses', 'Telescopio solar' ]
```

Cada página sale 100 ms después de la anterior: el generador no pide la siguiente hasta que el bucle le pide otro valor.

## Paso 9: `findFirst` (10 min)

Recorre `pages(items, size)` con `for await` y busca en cada página, con `find`, la ficha cuyo `name` en minúsculas contiene `text` en minúsculas (`toLowerCase` e `includes`). Si la encuentra, `return` sale del bucle y cierra el generador: no se piden más páginas ([lab 04](../2-practicas/lab-04-async-iteration/README.md), paso 5). Si el bucle termina sin encontrarla, devuelve `null`.

```bash
node --input-type=module -e "import items from './src/data.js'; import { findFirst } from './src/logic.js'; let start = performance.now(); const ms = () => Math.round((performance.now() - start) / 100) * 100 + ' ms'; const found = await findFirst(items, 2, 'TALLER'); console.log(ms(), found.name); start = performance.now(); const none = await findFirst(items, 2, 'plutón'); console.log(ms(), none);"
```

```text
200 ms Taller de cohetes
300 ms null
```

`Taller de cohetes` está en la página 2, así que la búsqueda tarda 200 ms y la página 3 no se pide. Sin resultado, recorre las 3 páginas.

## Paso 10: probar la página y comprobar (20 min)

Recarga la página. Ahora funcionan los seis modos (con los datos de ejemplo):

1. **En orden** con los ids `1, 2, 3`: `✔ 3 fichas, una detrás de otra` hacia los 1900 ms. Con `1, 9, 3` sale `✖ No existe la ficha 9` y la ficha 3 queda sin resultado.
2. **Todas a la vez** con `1, 2, 3`: las mismas fichas hacia los 900 ms.
3. **Las que existan** con `1, 9, 5`: `✔ 2 encontradas, 1 sin ficha (9)`.
4. **Con reintentos** y 2 fallos: el registro apunta 3 intentos y termina con `✔ 1 ficha en el intento 3` si pides un solo id. Con 3 fallos sale `✖ Falló tras 3 intentos`, y la consola de las DevTools muestra el error con su `cause`.
5. **Por páginas**: las tarjetas pasan a ✅ de dos en dos, cada 100 ms, y sale `✔ 3 páginas de 2 fichas`.
6. **Buscar por nombre** con `sol`: `✔ Primera ficha con «sol»: Telescopio solar`. Con un texto que no está, `✔ Ninguna ficha contiene «...»`.

Repasa `src/logic.js` antes de entregar. Borra los `TODO` que queden y comprueba que no usas `var` ni `.then()`. Desde la carpeta del bootcamp:

```bash
PROYECTO=~/js-proyecto-semana-14 ./scripts/verificar-semana.sh 14
# Semana 14 — Async/Await
#   ✅ src/data.js, src/logic.js y src/main.js son módulos ES válidos
#   ...
# 13/13 comprobaciones superadas.
```

Cada ❌ trae una pista con el paso que lo arregla.

---

## ✅ Requisitos verificables

Las comprobaciones de [`checks.json`](../checks.json):

| Comprobación | Qué pide |
|---|---|
| `sintaxis` | `src/data.js`, `src/logic.js` y `src/main.js` son módulos ES válidos |
| `sin-todo` | `src/logic.js` no tiene ningún `TODO` |
| `sin-var` | Ningún archivo de `src/` usa `var` |
| `sin-then` | `src/logic.js` no usa `.then()` fuera de los comentarios y recorre las páginas con `for await` |
| `datos-exports` | `data.js` exporta `TITLE` y por defecto de 4 a 8 fichas con `id` entero positivo sin repetir, `name` de 3 o más caracteres sin repetir, `detail` de texto y `delay` entero de 50 a 2000 |
| `datos-dominio` | El título y las fichas no son los del ejemplo Planetario |
| `ficha` | `getItem` devuelve una promesa que, pasados `delay` ms, da la ficha o se rechaza con «No existe la ficha `<id>`» |
| `secuencia` | `getInSequence` pide las fichas una detrás de otra, las devuelve en el orden de `ids`, se detiene en la primera que falla sin pedir las siguientes y con `[]` devuelve `[]` |
| `paralelo` | `getInParallel` pide todas a la vez, con las fichas en el orden de `ids`, o se rechaza con el primer error |
| `disponibles` | `getAvailable` pide todas a la vez y devuelve `{ found, missing }` en el orden de `ids`, sin lanzar |
| `reintento` | `retry` repite `task` hasta `attempts` veces, espera `delayMs` entre intentos (no después del último) y al rendirse lanza «Falló tras `<n>` intentos» con el último error como `cause` |
| `paginas` | `pages` es un generador asíncrono que entrega páginas de `size` fichas, esperando 100 ms antes de cada una |
| `buscar` | `findFirst` devuelve la primera ficha cuyo nombre contiene el texto (sin distinguir mayúsculas), deja de pedir páginas al encontrarla y devuelve `null` si no hay ninguna |

Que los datos sean de tu dominio, que la página funcione y que el código se lea bien lo revisa el instructor con la [rúbrica](../rubrica-evaluacion.md).

## Entrega

La carpeta `~/js-proyecto-semana-14` con tus datos en `src/data.js` y `src/logic.js` completo, por el canal que indique el instructor.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 04 — Iteración asíncrona](../2-practicas/lab-04-async-iteration/README.md) | [Rúbrica de evaluación](../rubrica-evaluacion.md) → |

[↑ Semana 14](../README.md)
