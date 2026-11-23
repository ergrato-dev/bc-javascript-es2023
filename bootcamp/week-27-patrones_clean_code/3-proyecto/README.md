# Proyecto — Refactorización de código legacy

## Objetivo

Heredas `report()`, la función que escribe el informe del catálogo. Funciona, pero tiene casi todos los olores de la [teoría 05](../1-teoria/05-refactorizar-y-herramientas.md#1-code-smells): seis parámetros posicionales, nombres de una letra, `var`, `==`, todo en una función de más de 40 líneas y un *callback* para avisar del resumen. Tu trabajo es **escribir la versión limpia** en `src/logic.js`: funciones pequeñas con nombre, estrategias de orden, un emisor de eventos y una fábrica que lo junta todo. Con las fichas del dominio que te asigna el instructor.

La regla del refactor: **el informe no cambia**. Ni un espacio, ni un decimal, ni el orden de dos fichas empatadas.

**Tiempo:** 2 h

Al terminar:

- Los 60 tests de caracterización pasan: tu `createReporter().build` escribe el mismo texto que `report()` y emite el mismo resumen.
- ESLint no encuentra nada en `src/` con la configuración del starter, que limita la complejidad, el anidamiento, los parámetros, el largo de las funciones y los números mágicos.
- Prettier no cambiaría nada.

## Qué hay en el starter

```text
starter/
├── package.json                    # eslint 10.14.0, prettier 3.10.0, vitest 5.1.0; scripts start, test, lint, format y check
├── pnpm-lock.yaml
├── eslint.config.js                # las reglas que tiene que cumplir logic.js: no se cambia
├── .prettierrc.json                # comillas simples y 100 caracteres por línea: no se cambia
├── .prettierignore                 # deja fuera legacy.js: no se cambia
├── src/
│   ├── legacy.js                   # report(), el código heredado: no se cambia
│   ├── data.js                     # SEED del ejemplo Planetario: lo cambias por tu dominio
│   ├── logic.js                    # las funciones de la versión limpia, con TODO: tu trabajo
│   └── main.js                     # escribe el informe de SEED con tu versión o con la original
└── tests/
    └── characterization.test.js    # compara tu versión con la original: no se cambia
```

---

## Paso 1: Preparar el proyecto

Copia el starter a una carpeta tuya fuera del repositorio, instala y ejecuta los tests:

```bash
cp -r bootcamp/week-27-patrones_clean_code/3-proyecto/starter ~/js-proyecto-semana-27
cd ~/js-proyecto-semana-27
pnpm install
pnpm test
```

```text
 Test Files  1 failed (1)
      Tests  60 failed (60)
```

Fallan todos: `src/logic.js` aún no tiene nada. Mira el informe de la versión original:

```bash
pnpm start --legacy
```

```text
Informe: 10 de 10 fichas
1. Construye tu planisferio (taller) · ★ 4.9 · 320 visitantes
2. El cielo de esta noche (en directo) · ★ 4.8 · 23.100 visitantes
3. Cohetes de agua (taller) · ★ 4.7 · 410 visitantes
4. Viaje a Marte (documental) · ★ 4.6 · 1840 visitantes
5. Orión en invierno (en directo) · ★ 4.6 · 8700 visitantes
6. Astronautas en la Luna (infantil) · ★ 4.5 · 15.300 visitantes
7. Agujeros negros (documental) · ★ 4.4 · 960 visitantes
8. Las estrellas de Lúa (infantil) · ★ 4.2 · 12.750 visitantes
9. El Sol, nuestra estrella (documental) · ★ 4.0 · 6400 visitantes
10. Eclipses (documental) · ★ 3.9 · 11.000 visitantes
Media: 4.5 · Visitantes: 80.780 · Tipo más frecuente: documental
```

Es `report(SEED, '', 'rating', true)`: todas las fichas, por valoración, de mayor a menor. Dos rarezas que tu versión tiene que mantener:

- `1840` sin punto y `23.100` con punto: `toLocaleString('es-ES')` no separa los miles en los números de cuatro cifras ([semana 21](../../week-21-fechas_tiempos_date_api/README.md)).
- Viaje a Marte y Orión en invierno empatan a 4.6. El original desempata por nombre (Orión antes que Viaje) y **después** da la vuelta a toda la lista, así que en orden descendente sale primero Viaje.

## Paso 2: Tus fichas en data.js

Cambia `SEED` de `src/data.js` por fichas de tu dominio, con los mismos cinco campos:

| Campo | Qué es | Regla |
|---|---|---|
| `id` | Identificador | Un texto distinto en cada ficha |
| `name` | Nombre de la ficha | Un texto no vacío |
| `type` | La categoría | Un texto no vacío; al menos 3 tipos distintos en `SEED` |
| `rating` | Valoración media | Un número de 0 a 5 |
| `visitors` | Visitantes, usuarios, préstamos… lo que se cuente en tu dominio | Un entero de 0 o más |

Pon 8 fichas o más, con valoraciones variadas y alguna repetida (para ver los desempates), y números de visitantes de cuatro y de cinco cifras. Comprueba que el original las acepta todas: `pnpm start --legacy` no debe terminar con «Fichas con errores».

Los tests de caracterización usan tu `SEED`, y le añaden fichas con errores y fichas empatadas.

## Paso 3: Leer el código heredado

Lee `src/legacy.js` con calma y apunta, para cada bloque, qué hace y qué olor tiene. Es una función que hace seis cosas:

1. Valida cada ficha y separa las correctas de las que tienen errores.
2. Filtra las correctas por tipo y por valoración mínima.
3. Las ordena por un criterio, y les da la vuelta si se pide.
4. Calcula el resumen: número de fichas, media, visitantes y tipo más frecuente.
5. Escribe el texto del informe.
6. Llama a `cb` con el resumen.

Cada una será una o varias funciones de `src/logic.js`. Lee después `tests/characterization.test.js`: para 4 grupos de fichas y 15 combinaciones de opciones, llama a las dos versiones y compara el texto y el resumen. Esos 60 tests son tu red durante todo el proyecto.

Lee por último `eslint.config.js`. Las reglas de límites son las que decidirán cuánto tienes que dividir:

| Regla | Límite | Qué te obliga a hacer |
|---|---|---|
| `complexity` | 4 | Funciones con pocos caminos: estrategias y cláusulas de guarda |
| `max-depth` | 2 | Nada de `if` dentro de `if` dentro de un bucle |
| `max-params` | 2 | Más de dos datos, un objeto de opciones |
| `max-lines-per-function` | 15 | Funciones que caben en pantalla |
| `no-magic-numbers` | solo -1, 0 y 1 | Constantes con nombre para el 5 de la valoración máxima o el 10 del redondeo |
| `id-length` | 2 letras, salvo `a` y `b` | Nombres que dicen qué son |

## Paso 4: Validar

Escribe `validateItem` y `splitValid`. El comentario encima de cada función de `logic.js` es su especificación.

Para `validateItem`, piensa en las cuatro comprobaciones del original como una lista de reglas, cada una con su comprobación y su mensaje. Recorrer la lista y quedarte con los mensajes de las que fallan es más corto que cuatro `if`, y una regla nueva es una entrada más. Ojo con las comprobaciones del original: `x.rating != x.rating` es una forma antigua de preguntar si es `NaN`, y `x.visitors % 1 != 0` pregunta si no es entero (`Infinity % 1` es `NaN`, así que también falla). `Number.isInteger` hace las dos cosas.

`splitValid` devuelve `{ valid, invalid }`. Cada ficha con errores es `{ id, errors }`, con `'?'` si no tiene `id` (`??` es más corto que `== undefined`).

## Paso 5: Filtrar

`filterItems(items, { type, minRating })` devuelve las fichas que cumplen las dos condiciones. Sin `type` (o con `''`), todos los tipos; sin `minRating`, todas las valoraciones. Una sola llamada a `filter` basta. Nunca cambia el array que recibe.

## Paso 6: Ordenar con estrategias

El original elige el orden con tres `if` y una función de comparación en cada uno: es un `switch` con otra forma. Escribe `SORTERS`, un objeto con una función de comparación por criterio (`name`, `rating`, `visitors`), y `sortItems(items, { by, desc })`, que busca la estrategia en `SORTERS` ([teoría 02](../1-teoria/02-observer-strategy.md#4-strategy-un-objeto-en-lugar-de-un-switch)).

- Las tres desempatan por nombre con `localeCompare(…, 'es')`, como el original. Extrae esa comparación a una función con nombre y úsala en las tres.
- Con un criterio que no está en `SORTERS` (o sin criterio), las fichas quedan en su orden.
- `desc` da la vuelta a la lista entera, después de ordenar.
- `sortItems` devuelve una copia: `toSorted` y `toReversed` en lugar de `sort` y `reverse`.

Las comprobaciones añaden una estrategia nueva a `SORTERS` y esperan que `sortItems` la use sin cambiarla: el principio abierto/cerrado de la [teoría 04](../1-teoria/04-solid.md#2-o-abierto-a-añadir-cerrado-a-cambiar).

## Paso 7: El resumen

`summarize(items)` devuelve `{ count, averageRating, totalVisitors, topType }`, como el objeto que el original pasa a `cb`:

- `averageRating` redondeado a un decimal con `Math.round`, y 0 si no hay fichas.
- `topType` es el tipo con más fichas. Si empatan, gana el primero comparando con `<`, como el original: `'Zeta'` gana a `'alfa'`, porque las mayúsculas van antes en el código de caracteres. Sin fichas, `'—'`.

El bucle del original que busca el tipo más frecuente tiene dos condiciones con `||` y `&&`: es fácil pasarse de `complexity`. Divide: una función que cuenta por tipo (un `Map`) y otra que elige el ganador.

## Paso 8: El texto

`formatLine(item, position)` escribe una línea de ficha y `formatReport({ items, total, summary, invalid })` el informe entero, línea a línea como el original: la cabecera, las fichas (o `Sin fichas que mostrar.`), el resumen y, si hay fichas con errores, su sección. Usa plantillas de texto en lugar de `+`, y extrae el formato del resumen y el de la sección de errores a sus propias funciones.

## Paso 9: El emisor

El original avisa con un *callback*: un solo interesado, que hay que pasar como sexto parámetro. Escribe `createEmitter()`, un Observer con `on(nombre, función)`, que devuelve la función que deja de escuchar, y `emit(nombre, datos)` ([teoría 02](../1-teoria/02-observer-strategy.md#2-observer-emitir-sin-saber-quién-escucha)). Es el del [lab 02](../2-practicas/lab-02-observer-strategy/README.md), sin `once`.

## Paso 10: La fábrica

`createReporter({ emitter })` es una fábrica que recibe su dependencia ([teoría 04](../1-teoria/04-solid.md#5-d-depender-de-lo-que-recibes-no-de-lo-que-importas)): si no recibe emisor, crea uno. Devuelve `{ build, on }`:

- `build(items, { type, minRating, sort, desc })` junta las piezas: separa, filtra, ordena, resume, emite `'report'` con el resumen y devuelve el texto.
- `on` es el `on` de su emisor, para suscribirse sin conocerlo.

Ejecuta los tests:

```bash
pnpm test
```

```text
 Test Files  1 passed (1)
      Tests  60 passed (60)
```

Si alguno falla, el nombre dice con qué fichas y qué opciones: ejecuta solo ese con `-t`, y compara las dos salidas que muestra Vitest. Cuando pasen todos, `pnpm start` escribe el informe con tu versión y `pnpm start --legacy` con la original: deben ser iguales, salvo la línea `Resumen emitido`.

## Paso 11: ESLint, Prettier y repaso final

```bash
pnpm lint
pnpm format
pnpm check
```

`pnpm lint` dirá qué funciones se pasan de algún límite. Arréglalas con lo de la [teoría 03](../1-teoria/03-clean-code.md): extrae funciones, sal pronto, nombra los números. Después de cada cambio, `pnpm test`: un refactor que rompe un test se deshace. `pnpm format` reescribe el formato, y `pnpm check` ejecuta ESLint, Prettier y los tests, en ese orden.

No vale desactivar una regla con un comentario `eslint-disable` ni dejar `logic.js` sin formato con `prettier-ignore`: las comprobaciones lo buscan.

Para terminar, comprueba tu proyecto:

```bash
PROYECTO=~/js-proyecto-semana-27 ./scripts/verificar-semana.sh 27
```

Y repasa `src/logic.js` entero como si fuera código de otra persona: ¿se entiende cada función por su nombre? ¿Queda algún comentario que repite lo que dice el código?

---

## ✅ Requisitos verificables

`PROYECTO=~/js-proyecto-semana-27 ./scripts/verificar-semana.sh 27` comprueba (con `pnpm install` hecho):

1. `src/` y `tests/` son módulos ES válidos.
2. `package.json` es un módulo ES con `eslint` 10.x, `prettier` 3.x y `vitest` 5.x en versión exacta, los scripts `test` y `lint`, y hay `pnpm-lock.yaml`.
3. `src/legacy.js`, los tests de caracterización y la configuración de ESLint y Prettier son los del starter.
4. `src/logic.js` no tiene ningún `TODO`.
5. `src/logic.js` no importa `src/legacy.js` ni desactiva reglas de ESLint o de Prettier.
6. `SEED` tiene 8 fichas o más, con `id` distintos, de 3 tipos o más, y todas correctas.
7. `SEED` es de tu dominio, no el del ejemplo Planetario.
8. `validateItem` devuelve los errores de una ficha con los textos y el orden del original.
9. `splitValid` separa las fichas correctas, en su orden, de las que tienen errores, con `id` `'?'` si falta.
10. `filterItems` filtra por tipo y por valoración mínima sin cambiar el array.
11. `sortItems` ordena una copia con `SORTERS`, desempata por nombre, y acepta estrategias nuevas sin cambiarla.
12. `summarize` calcula el resumen: número de fichas, media a un decimal, visitantes y tipo más frecuente.
13. `formatLine` y `formatReport` escriben las líneas del informe como el original.
14. `createEmitter` avisa a cada oyente de su evento, en orden, y `on` devuelve la función que deja de escuchar.
15. `createReporter().build` escribe el mismo informe que `report()` con otras fichas y opciones, y emite el resumen en el emisor que recibe.
16. Los tests de caracterización pasan: tu versión hace lo mismo que la original.
17. ESLint no encuentra ningún problema en `src/` con la configuración del starter.
18. `src/` tiene el formato de Prettier.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 04 — ESLint y Prettier](../2-practicas/lab-04-eslint-prettier/README.md) | [Rúbrica de evaluación](../rubrica-evaluacion.md) → |

[↑ Semana 27](../README.md)
