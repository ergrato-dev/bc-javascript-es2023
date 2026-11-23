# Auditoría del repositorio — bc-javascript-es2023

**Fecha**: 2026-11-19
**Alcance**: S01–S22 publicadas (de 28 planificadas), configuración raíz, docs y scripts.
**Referencia**: estándar de los bootcamps cerrados en 2026-11 (`bc-ssh`, `bc-testing`) y [`CLAUDE.md`](CLAUDE.md).

Este archivo es la lista de trabajo de la migración: cada semana migrada cierra su fila.

---

## Metodología

1. Comparación de la estructura raíz y de una semana tipo contra `bc-ssh` y `bc-testing`.
2. `./scripts/verificar-enlaces.sh` (copiado de `bc-testing`) sobre todo el repo.
3. Métricas por semana con `grep`/`wc`: líneas por archivo de teoría, términos de glosario, nombre de las carpetas de práctica, `TODO`/`PENDIENTE` en `3-proyecto/starter/`, menciones a `solution/`, `var` y `require(` en el código.
4. Lectura de muestras en las semanas con métricas anómalas (S16–S22).

---

## Hallazgos globales

| Hallazgo | Estado |
|---|---|
| Sin `CLAUDE.md`; `.github/copilot-instructions.md` (778 líneas) y `docs/guia-desarrollo-contenidos.md` contradecían las reglas: `yarn` permitido, SQLite, `solution/` en ejercicios | ✅ `CLAUDE.md` nuevo como fuente única; `copilot-instructions.md` reducido a puntero; guía retirada |
| Lista de dominios anticopia dentro del repo (guía de desarrollo) | ✅ Retirada; catálogo en el repo privado de dominios |
| Sin índice de semanas (`bootcamp/README.md`) | ✅ Creado: S01–S22 🟡, S23–S28 ⬜ |
| Sin autograding: ni `checks.json` ni `scripts/verificar-semana.sh` | ✅ Script y contrato ([docs/autograding.md](docs/autograding.md)); los `checks.json` llegan con cada semana migrada |
| Sin generador de navegación ni verificador de enlaces | ✅ `scripts/generar-navegacion.sh` y `scripts/verificar-enlaces.sh` |
| Versiones repartidas por los README (Node 24, Jest 30+, ESLint 9+, Live Server) | ✅ Única fuente en [docs/stack-versions.md](docs/stack-versions.md) |
| `npm`/`npx`/`yarn` en `SECURITY.md`, `export-pdf.sh`, S01 (pasos de tests y solución inexistentes), S04 y S10 (`npx serve`) | ✅ `pnpm`/`pnpm dlx`; pasos rotos de S01 retirados |
| Jest en S25–S26 y en los README raíz | ✅ Vitest (decisión: ESM nativo, sin transpilar) |
| `scripts/autocommit.sh` + cron cada 5 min, contrario al commit por semana terminada | ✅ Retirados |
| `docs/plan-estudios.md` decía "Completado 2/28" | ✅ Estado delegado a `bootcamp/README.md` |
| Sin carpeta de la solución de referencia en `bc-instructor` | ✅ Creada con S01 |
| `verificar-semana.sh` pasaba los `cmd` con las `\` duplicadas (`jq @tsv` + `read -r`): fallaba cualquier check con comillas escapadas o `\n` | ✅ Se deshace el escape antes de ejecutar |

## Hallazgos comunes a S01–S22 (se corrigen al migrar cada semana)

- Prácticas en `ejercicio-NN-*` (S01–S12) o `practica-NN-*` (S13–S22): renombrar a `lab-NN-*`.
- `RETO-SEMANAL.md` en todas: integrarlo en `3-proyecto/README.md` y borrarlo.
- `3-proyecto/index.html` y `styles.css` fuera de `starter/`; la lógica mezcla DOM y datos en un solo `script.js`. Separar en `starter/src/logic.js` (funciones puras, verificables) y `starter/src/main.js` (DOM).
- `0-assets/README.md` en todas: la carpeta solo admite SVG. Borrarlo.
- Sin `checks.json` ni sección "✅ Requisitos verificables".
- Navegación escrita a mano: regenerar con `scripts/generar-navegacion.sh NN`.
- Menciones a `solution/` en READMEs de prácticas o proyecto (54 archivos): retirarlas; los labs son guiados y la solución del proyecto vive fuera del repo.
- `4-recursos/README.md` suelto en S02–S22: el estándar es `ebooks-free/`, `videografia/` y `webgrafia/`, cada una con su `README.md`.
- Sin `var` ni `require(` en el código de ninguna semana. Sin voseo.

## Hallazgos por semana

Teoría: número de archivos y rango de líneas. Glosario: términos.

| S | Teoría | Prácticas | Glosario | Proyecto starter | Hallazgos específicos |
|---|---|---|---|---|---|
| 01 | ✅ | ✅ lab | — | ✅ | **Migrada.** Labs 03 y 04 daban `SyntaxError` al descomentarlos enteros (identificadores repetidos): corregido. SVG 06 enlazado. Proyecto nuevo: ficha con `logic.js`/`main.js` y 12 checks |
| 02 | ✅ | ✅ lab | — | ✅ | **Migrada.** El CSS del proyecto usaba clases `task-*` y el HTML `item-*` (la página salía sin estilos): alineado. Lab 05 tenía datos comentados fuera del bloque «Descomenta»: el README lo explica. SVG 06 enlazado. Proyecto nuevo: gestor con 8 funciones puras inmutables (721 líneas y 49 TODO antes) y 12 checks con datos congelados |
| 03 | ✅ | ✅ lab | — | ✅ | **Migrada.** Labs 01, 03 y 04 daban `SyntaxError` al descomentarlos enteros (cada paso redeclara la clase): cada paso va en su propio bloque `{ }`. Lab 05 tenía las clases comentadas fuera del bloque «Descomenta»: marcador movido encima de cada clase. `0-assets/README.md` retirado. Proyecto nuevo: `Item` y `Collection` con campos privados y tipos del dominio en `types.js` (734 líneas y 56 TODO antes), 12 checks |
| 04 | ✅ | ✅ lab | — | ✅ | **Migrada.** Labs 03 y 04 eran páginas con botones: pasan a Node (`node starter/main.js`, `node starter/app.js`) con `package.json` `{ "type": "module" }`. Lab 04 sin `loader.js` (reimplementaba la caché nativa de módulos); el paso 5 la muestra. Teoría 03: `var` del ejemplo y «con npx» corregidos; navegaciones manuales sustituidas. `RETO-SEMANAL.md`, `0-assets/README.md` y `4-recursos/README.md` retirados. Proyecto nuevo: catálogo en 4 módulos (`data.js`, `logic.js`, `stats.js` con `import()`, `main.js`), 1068 líneas y 108 TODO antes, 12 checks |
| 05 | ✅ | ✅ lab | — | ✅ | **Migrada.** `06-findlast-findlastindex.svg` sin degradado (fondo `#0d1117`). Lab 02: comentario `[empty × 3]` (salida del navegador) cambiado por la de Node. Lab 05: cabecera alineada y bloque «RESUMEN» retirado (repetía la teoría). Navegaciones manuales y «Volver» sustituidas. `RETO-SEMANAL.md`, `0-assets/README.md` y `4-recursos/README.md` retirados. Proyecto nuevo: explorador de colección con 5 funciones puras (`getAllTags`, `sortItems`, `queryItems`, `groupByCategory`, `findLastAdded`), 499 líneas y 10 TODO antes, 12 checks con datos congelados |
| 06 | ✅ | ✅ lab | — | ✅ | **Migrada.** Labs 02, 03 y 04 daban `SyntaxError` al descomentarlos enteros (`name`, `price`, `text`, `regex` y `matches` repetidos): renombrados. Lab 04: `reverse()` del paso 8 cambiado por `toReversed()`, paso 10 nuevo con el flag `d` (lo prometían los objetivos y no había práctica), y enlace roto `url` retirado. Lab 02: salida de moneda con su espacio no separable real. Navegaciones manuales sustituidas. `RETO-SEMANAL.md`, `0-assets/README.md` y `4-recursos/README.md` retirados. Proyecto nuevo: registro de fichas con 7 funciones puras (`normalizeText`, `formatCode`, `isValidCode`, `isValidEmail`, `formatDate`, `extractTags`, `safeHtml`), 491 líneas y 22 TODO antes, 12 checks |
| 07 | ✅ | ✅ lab | — | ✅ | **Migrada.** Los labs se pueden descomentar enteros sin errores, salvo el lab 04, que daba `SyntaxError` por `user` repetido (paso 6 renombrado a `alice`). Lab 04: `substr` obsoleto y el id aleatorio cambiados por un id fijo, y paso 1 con claves Symbol y `Symbol.for()` (ES2023: lo prometían los objetivos y no había práctica). Lab 02: «Full-stack (unión)» corregido a «Todos» y paso 7 nuevo con los métodos nativos de `Set` (ES2025, ya en la teoría). Lab 01: `clear()` añadido (lo citaba el índice). Navegaciones manuales sustituidas. `RETO-SEMANAL.md`, `0-assets/README.md` y `4-recursos/README.md` retirados. Proyecto nuevo: mapa de la colección con 7 funciones puras (`uniqueTags`, `indexById`, `groupByRoom`, `countTags`, `toggleTag`, `filterByTags`, `getSummary` con `WeakMap`), 576 líneas y 17 TODO antes, 12 checks con datos congelados |
| 08 | ✅ | ✅ lab | — | ✅ | **Migrada.** Los cuatro labs terminaban con un «DESAFÍO EXTRA» incompleto: el lab 01 daba `TypeError` al descomentarlo entero (`next()` vacío), el 04 también (`Stack` sin `push`) y el 02 y el 03 imprimían resultados vacíos. Cada desafío pasa a ser el último paso, con el código completo. Lab 03: `take` pedía un valor de más al iterable (comprobaba la cuenta antes del `yield`): corregido. Lab 02: el comentario «maneja correctamente emojis compuestos» era falso (`for...of` recorre puntos de código): corregido, y el paso lo muestra con `length`. Lab 04: `Stack` itera con `toReversed()`. Ningún SVG estaba enlazado desde la teoría: enlazados. Navegaciones manuales sustituidas. `RETO-SEMANAL.md`, `0-assets/README.md` y `4-recursos/README.md` retirados. Proyecto nuevo: catálogo por páginas con 4 generadores (`createIdGenerator`, `take`, `skip`, `filterBy`) y 3 funciones (`countPages`, `getPage`, `createCatalog`), 298 líneas y 29 TODO antes, 12 checks |
| 09 | ✅ | ✅ lab | — | ✅ | **Migrada.** El último paso de los cuatro labs era un «ejercicio práctico» a medias (producto sin claves simbólicas, `Temperature` sin `toStringTag` ni `toPrimitive`, `SecureConfig` con métodos vacíos que devolvían `undefined`): completados. Lab 04: `Entity` generaba el id con `Math.random().toString(36).substr(2, 9)` (salida distinta en cada ejecución y `substr` obsoleto): ahora usa un contador estático con clave simbólica, y sobra su `toJSON`. Lab 03: `isNaN` pasa a `Number.isNaN`. `RETO-SEMANAL.md`, `0-assets/README.md` y `4-recursos/README.md` retirados; navegaciones manuales sustituidas. Proyecto nuevo: fichas con notas reservadas (`NOTES`, `createPiece` con `toStringTag` y `toPrimitive`, `typeOf`, `Piece` con `hasInstance`, `totalValue`, `toPublic`, `hiddenKeys`), 648 líneas y 28 TODO antes, 13 checks. El enlace roto `hint` desaparece con el README nuevo |
| 10 | ✅ | ✅ lab | — | ✅ | **Migrada.** Lab 04, paso 7: los métodos del formulario (`onChange`, `isValid`...) se asignaban a través del proxy y pasaban por el trap `set` como campos (`[Validated] onChange = ...`); ahora están en el objeto original. `isNaN` cambiado por `Number.isNaN` (labs 01 y 04); el paso 6 del lab 01 imprime el mensaje real del `TypeError` del proxy revocado. Navegaciones manuales y pies «Week 10» sustituidos. `RETO-SEMANAL.md`, `0-assets/README.md` y `4-recursos/README.md` retirados. Proyecto nuevo: fichas validadas en vivo con 7 funciones (`readOnly`, `required`, `minLength`, `between`, `oneOf`, `firstError`, `createForm`), 357 líneas y 18 TODO antes, 14 checks |
| 11 | ✅ | ✅ lab | — | ✅ | **Migrada.** Lab 02 no corría con todos los pasos descomentados: los pasos 3 y 7 declaraban `const errors` (el 7 pasa a `apiErrors`); el paso 5 serializaba el `stack` y ahora enseña por qué `JSON.stringify` de un `Error` da `{}`. Lab 01: el paso 2 imprimía 200 caracteres del `stack` con rutas de cada equipo; el paso 7 relanza con `cause` (ES2022). Los «Desafío extra» con `// Tu código aquí` pasan a «Comprobación» con la salida esperada. Navegaciones manuales sustituidas. `RETO-SEMANAL.md`, `0-assets/README.md` y `4-recursos/README.md` retirados. Proyecto nuevo: importador de fichas con 4 clases de error y 5 funciones (`parseJson`, `validateItem`, `importItems`, `retry`, `userMessage`), 520 líneas y 43 TODO antes, 14 checks |
| 12 | ✅ | ✅ lab | — | ✅ | **Migrada.** Teoría reescrita como repaso enlazado a las semanas 01-11, sin conceptos nuevos; la arquitectura explica el proyecto nuevo con dos SVG nuevos (paleta del curso) y el SVG del observer mostraba `{'{'}` literal: corregido. Lab 03 solo imprimía texto sobre módulos (y decía que `./models` funciona sin `index.js`, falso en ESM): ahora usa módulos reales con `import()`. Lab 02 imprimía «Listener suscrito» duplicado. El e-commerce de 13 archivos y 170 TODO pasa a «Gestor de colección» con `logic.js` (15 checks). Glosario y recursos sin referencias al e-commerce. |
| 13 | ✅ | ✅ lab | — | ✅ | **Migrada.** Los cuatro labs imprimían la salida de cada paso mezclada con la de los siguientes (temporizadores sin esperar): cada paso termina con `await`. Las salidas dependían de `Math.random()` (labs 02 y 03): ahora cada paso ejecuta el caso bueno y el malo. Retrasos de 1 a 5 s reducidos a 50–300 ms. Lab 01 gana el paso 7 (aplanar con funciones con nombre), lab 02 el paso 6 (una promesa se resuelve una vez), lab 03 el paso 5 (`return` olvidado) y lab 04 el `AggregateError` de `any`. Teoría 01: `require('fs')` pasa a `import` de `node:fs/promises`; navegaciones manuales sustituidas. `RETO-SEMANAL.md`, `0-assets/README.md` y `4-recursos/README.md` retirados. El simulador HTTP (3 archivos, 23 TODO, con `index.html` fuera de `starter/`) pasa a «Panel de servicios» con `logic.js` sin `async`/`await` (13 checks, entre ellos tiempos de secuencia y paralelo). |
| 14 | ✅ | ✅ lab | — | ✅ | **Migrada.** Los labs imprimían la salida de cada paso mezclada con la siguiente (promesas sin esperar): cada paso termina con su `await`. Lab 03 imprime los tiempos redondeados a la centena para que la salida sea estable; gana el paso 6 (`forEach` no espera) y el 7 (concurrencia limitada). Lab 02 gana `return` frente a `return await` y un reintento; lab 04, la salida temprana del generador, sus errores y `Array.fromAsync`. Teoría: navegaciones manuales retiradas, dos títulos con caracteres rotos y `fns.reverse()` (mutaba los argumentos) cambiado por `toReversed()`. `RETO-SEMANAL.md`, `0-assets/README.md` y `4-recursos/README.md` retirados; el enlace a exploringjs.com da 404 y se quita también de S13. El «Sistema de carga de datos» (`script.js` con 17 TODO y `Math.random()`, `index.html` fuera de `starter/`) pasa a «Explorador de catálogo»: 7 funciones con `async`/`await` y sin `.then()` (13 checks, entre ellos tiempos en orden y en paralelo y la salida temprana de `findFirst`) |
| 15 | ✅ | ✅ lab | — | ✅ | **Migrada.** Los labs dependían de `jsonplaceholder.typicode.com` y `httpstat.us`: ahora arrancan una API local (`2-practicas/shared/server.js`, `node:http`) dentro del propio lab, sin internet y con salida estable. Labs reescritos (GET y `Response`, métodos HTTP, cabeceras y cancelación con `AbortSignal.timeout()`, errores y reintentos). El «Explorador de API REST» de 570 líneas pasa a «Cliente del catálogo» con `server.js` propio y `logic.js` (17 checks, que arrancan su propio servidor con fichas de prueba). Teoría: el ejemplo de reintentos con timeout reintentaba también los 4xx; añadido `AbortSignal.timeout()`. Glosario sin JSONPlaceholder. |
| 16 | ✅ | ✅ lab | — | ✅ | **Migrada y reescrita.** La teoría repetía S15 (métodos HTTP, `Authorization`, CRUD con `fetch`) en un tercio de su extensión: cuatro archivos nuevos sobre diseño REST (recursos, idempotencia, elección del código de estado), paginación (página, cursor, `Link`, generadores), autenticación con token (401/403, caducidad, JWT, dónde guardar el token) y estados de carga (reductor, envíos dobles, condiciones de carrera, actualización optimista). Los cuatro labs nuevos arrancan una API local de un acuario (`2-practicas/shared/server.js`) con paginación, sesiones y `?delay`/`?fail`. Cinco SVG con otra paleta, uno con `localStorage` para el token, sustituidos por cuatro nuevos. `RETO-SEMANAL.md`, `0-assets/README.md` y `4-recursos/README.md` retirados; recursos sin enlaces inventados ni JSONPlaceholder. El proyecto (`index.html` fuera de `starter/`, 14 PENDIENTE) pasa a «Panel de la colección» con `server.js` paginado y con login, y `logic.js` con 8 funciones (18 checks, que arrancan su propio servidor) |
| 17 | ✅ | ✅ lab | — | ✅ | **Migrada y reescrita.** Teoría delgada (selectores, `appendChild`, `classList`, plantillas) sustituida por cuatro archivos: el árbol y la selección (nodos frente a elementos, colecciones vivas, `closest`, `dataset`, `defer`), crear e insertar (posiciones, mover, `cloneNode`, `replaceChildren`, fragmentos), contenido, atributos y clases (XSS con `innerHTML`, escapado, atributo frente a propiedad, `toggle` con `force`, `aria-pressed`, variables CSS) y plantillas y render (render desde los datos, render por clave que conserva el foco, describir la interfaz con objetos). Los cuatro labs pasan a páginas del navegador (`index.html` + `main.js` con `defer`, sin servidor), con salidas obtenidas en Chromium. Cinco SVG con otra paleta, sustituidos por cuatro nuevos. `RETO-SEMANAL.md`, `0-assets/README.md` y `4-recursos/README.md` retirados. El proyecto (`index.html` fuera de `starter/`, starter ya resuelto) pasa a «Constructor de fichas» con `server.js` estático y `logic.js` con 8 funciones puras (`h`, `toHtml`, `cardSpec`, `diffKeys`...; 16 checks) que `main.js` monta en el DOM con render por clave |
| 18 | ✅ | ✅ lab | — | ✅ | **Migrada y reescrita.** Teoría delgada (69–88 líneas por archivo) sustituida por cuatro archivos: escuchar eventos (objeto evento, teclado, quitar listeners con `AbortController`, `currentTarget`), propagación (fases, `stopPropagation` y sus riesgos, eventos que no suben), delegación (`closest` y `contains`, `data-action`, teclado) y acciones por defecto y eventos propios (`preventDefault`, `passive`, `CustomEvent`, vetos, `EventTarget`). Cuatro labs nuevos de navegador con salidas reales de Chromium. Cinco SVG con otra paleta sustituidos por tres nuevos. `RETO-SEMANAL.md`, `0-assets/README.md` y `4-recursos/README.md` retirados; recursos con enlaces reales en lugar de títulos sueltos. El proyecto (starter = solución completa, `index.html` fuera de `starter/`) pasa a «Centro de avisos» con `server.js` y `logic.js` de 8 funciones (15 checks) |
| 19 | ✅ | ✅ lab | — | ✅ | **Migrada y reescrita.** Teoría delgada (55–65 líneas por archivo) sustituida por cuatro archivos: localStorage y sessionStorage (solo texto, `null` y valores por defecto, origen, prefijos, evento `storage`), serialización (lo que pierde JSON, *reviver*, `Map` y `Set`, leer con desconfianza, sobre con versión y migración), IndexedDB (`upgradeneeded`, peticiones como promesas, transacciones, índices, abort) y cuotas, errores y caducidad (`QuotaExceededError`, almacenamiento bloqueado, `expiresAt`, `navigator.storage`). Cuatro labs nuevos de navegador con salidas reales de Chromium (también con recarga y dos pestañas). Cinco SVG con otra paleta sustituidos por tres nuevos. `RETO-SEMANAL.md`, `0-assets/README.md` y `4-recursos/README.md` retirados; recursos con enlaces verificados. El proyecto (starter = solución completa, `index.html` fuera de `starter/`) pasa a «Cuaderno persistente» con `server.js` y `logic.js` de 8 funciones que reciben el almacenamiento como parámetro (15 checks con un almacenamiento falso) |
| 20 | 4 · 45–55 | 4 practica | 7 | 1 TODO | **Teoría delgada.** Starter = solución completa. Glosario corto |
| 21 | 4 · 38–43 | 4 practica | 8 | 5 TODO | **Teoría delgada.** Starter = solución completa. Valorar `Temporal` (ya en Chrome y Firefox) junto a `Date` e `Intl` |
| 22 | 5 · 78–98 | 4 practica | 20 | 13 TODO | **Teoría delgada** |

**Conclusión**: S01–S15 necesitan migración estructural. S16–S22 necesitan además reescritura de teoría y labs, y un proyecto nuevo cuyo starter no traiga la solución.

## Plan de trabajo

Un bloque de 5 semanas por sesión, commit y push por semana terminada:

| Sesión | Semanas | Trabajo |
|---|---|---|
| 1 | S01–S05 | migración ✅ |
| 2 | S06–S10 | migración ✅ |
| 3 | S11–S15 | migración ✅ |
| 4 | S16–S20 | migración + reescritura de teoría, labs y proyecto |
| 5 | S21–S25 | S21–S22 como la sesión 4; escribir S23 Performance, S24 Integrador intermedio, S25 Vitest I |
| 6 | S26–S28 | escribir S26 Vitest II, S27 Patrones y Clean Code, S28 Proyecto final |

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Inicio del bootcamp](README.md) | [Índice del bootcamp](bootcamp/README.md) → |
