# Lab 02 — Paginación, filtros y orden

## Objetivo

Pedir una colección grande por partes: leer los metadatos de una página, recorrer todas, filtrar y ordenar en el servidor, seguir la cabecera `Link`, tratar las páginas que no existen, pedir las páginas solo cuando hacen falta con un generador asíncrono y comparar la paginación por número de página con la paginación por cursor.

**Tiempo:** 55 min · **Teoría:** [02 - Paginación, filtros y orden](../../1-teoria/02-paginacion-filtros.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 8 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-16-apis_rest_crud/2-practicas/lab-02-paginacion
node starter/index.js
```

El lab usa la [API de prácticas](../lab-01-diseno-rest/README.md#la-api-de-prácticas) del lab 01, que vuelve a sus 12 especies en cada ejecución. Las salidas de este README se obtuvieron con Node 24 y todos los pasos descomentados.

`getJson(path, params)`, ya hecha, monta la URL con `URL` y `searchParams` (semana 15), cuenta las peticiones en la variable `requests` y lanza un `Error` si el estado no es `2xx`.

---

## Paso 1: una página y sus metadatos

`GET /species` no devuelve un array, sino un **sobre** (*envelope*) con dos claves: `data`, las especies de esta página, y `meta`, lo que hace falta para pintar la paginación (`page`, `perPage`, `total` y `totalPages`). `perPage` dice cuántas especies caben en una página; si no lo envías, el servidor usa 5.

```text
--- Paso 1: Una página ---
meta: { page: 1, perPage: 4, total: 12, totalPages: 3 }
data: Pez payaso, Tiburón ballena, Piraña roja, Pez cirujano
```

## Paso 2: recorrer todas las páginas

El bucle no sabe al principio cuántas páginas hay: empieza suponiendo una y actualiza `totalPages` con la primera respuesta. 12 especies de 5 en 5 son 3 páginas, y la última solo tiene 2.

```text
--- Paso 2: Todas las páginas ---
Página 1 de 3: Pez payaso, Tiburón ballena, Piraña roja, Pez cirujano, Manta raya
Página 2 de 3: Pez ángel, Arapaima, Atún rojo, Caballito de mar, Pez disco
Página 3 de 3: Pez luna, Pez león
```

## Paso 3: filtrar y ordenar en el servidor

Los filtros (`habitat`, `search`) y el orden (`sort`) también van en la URL, y el servidor los aplica **antes** de paginar: `total` y `totalPages` cuentan solo lo que pasa el filtro. `sort=-name` ordena por nombre al revés; el `-` delante es una convención muy extendida para el orden descendente.

```text
--- Paso 3: Filtros y orden ---
Arrecife, de la Z a la A: Pez payaso, Pez león, Pez cirujano, Pez ángel, Caballito de mar
"pez" por nombre: 6 en total, 2 páginas
Primera página: Pez ángel, Pez cirujano, Pez disco
```

Si el cliente filtrara una página ya recibida, la página 1 de `search=pez` tendría menos especies que `perPage` y faltarían las que están en otras páginas.

## Paso 4: la cabecera `Link`

Algunas API (GitHub, por ejemplo) dan en la cabecera `Link` las URL de la página anterior (`rel="prev"`) y la siguiente (`rel="next"`). `parseLinks` las saca con una expresión regular y `matchAll` (semana 06). La última página no tiene `next`: así sabe el cliente que ha terminado sin hacer cuentas.

```text
--- Paso 4: Link ---
Link: </species?page=1&perPage=5>; rel="prev", </species?page=3&perPage=5>; rel="next"
{
  prev: '/species?page=1&perPage=5',
  next: '/species?page=3&perPage=5'
}
Última página: { prev: '/species?page=2&perPage=5' }
```

## Paso 5: páginas que no existen

Pedir una página después de la última no es un error: hay respuesta, solo que vacía, y `meta` sigue diciendo cuántas hay. `page=0` sí lo es, porque no tiene sentido; el servidor responde `400`.

```text
--- Paso 5: Fuera de rango ---
page=9 → [] { page: 9, perPage: 5, total: 12, totalPages: 3 }
page=0 → 400: page debe ser un entero mayor que 0
```

## Paso 6: un generador que pide las páginas cuando hacen falta

`allSpecies` es un generador asíncrono (semana 14): `yield*` entrega una a una las especies de cada página y solo pide la siguiente cuando alguien quiere más. `Array.fromAsync` las quiere todas y hace 3 peticiones. El `for await` con `break` para en cuanto encuentra la primera especie que empieza por C, y en orden alfabético está en la primera página: una sola petición.

```text
--- Paso 6: Generador de páginas ---
12 especies · peticiones: 3
Primera con C: Caballito de mar · peticiones: 1
```

## Paso 7: una página se descoloca si cambian los datos

La página 2 de `sort=name&perPage=4` son «las especies de la 5.ª a la 8.ª por orden alfabético». Si entre las dos peticiones alguien crea «Anguila», que va la primera, todo se corre un puesto: Manta raya sale en las dos páginas. Si se borrara una, otra especie no saldría en ninguna.

```text
--- Paso 7: Offset y datos nuevos ---
Página 1: Arapaima, Atún rojo, Caballito de mar, Manta raya
(otra persona crea «Anguila» mientras tanto)
Página 2: Manta raya, Pez ángel, Pez cirujano, Pez disco
```

## Paso 8: paginación por cursor

`/feedings` pagina de otra forma: cada respuesta trae `nextCursor`, una marca de dónde seguir, y la siguiente petición la envía como `cursor`. El servidor continúa desde ese elemento, así que lo que se cree antes no descoloca nada. `nextCursor: null` indica el final. El bucle `do...while` hace la primera petición antes de comprobar la condición.

```text
--- Paso 8: Cursor ---
08:00 Arrecife · 08:30 Río · 09:00 Océano → nextCursor: f4
13:00 Arrecife · 13:30 Río · 14:00 Océano → nextCursor: f7
19:00 Arrecife → nextCursor: null

✅ Lab completado.
```

La contrapartida: con un cursor no se puede saltar a la página 5 ni saber cuántas hay. Encaja en listas infinitas («cargar más»); los números de página, en tablas con paginación.

---

## Comprobación

1. En el paso 2, cambia `perPage: 5` por `perPage: 20` y después por `perPage: 21`. ¿Qué pasa en cada caso y por qué?
2. Usa `allSpecies` del paso 6 para contar cuántas especies del hábitat 2 hay sin `Array.fromAsync`, con un `for await`. ¿Cuántas peticiones hace? ¿Por qué no son 3?
3. En el paso 8, haz la primera petición con `{ cursor: 'f9' }`. ¿Qué responde el servidor? ¿Qué debería hacer una página que lo recibe?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 01 — Diseño de una API REST](../lab-01-diseno-rest/README.md) | [Lab 03 — Autenticación con token](../lab-03-autenticacion/README.md) → |

[↑ Semana 16](../../README.md)
