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
| 07 | 5 · 249–491 | 4 ejercicio | 19 | 17 TODO | — |
| 08 | 5 · 343–591 | 4 ejercicio | 11 | 29 TODO | — |
| 09 | 5 · 339–443 | 4 ejercicio | 17 | 28 TODO | Enlace roto `hint` en `3-proyecto/README.md` |
| 10 | 5 · 439–588 | 4 ejercicio | 32 | 18 TODO | — |
| 11 | 5 · 517–728 | 4 ejercicio | 38 | 43 TODO | — |
| 12 | 3 · 216–347 | 4 ejercicio | 28 | 170 TODO | Integradora: la teoría debe ser solo repaso enlazado, sin conceptos nuevos. Starter enorme |
| 13 | 4 · 380–629 | 4 practica | 29 | 23 TODO | — |
| 14 | 4 · 279–469 | 4 practica | 13 | 17 TODO | — |
| 15 | 4 · 288–500 | 4 practica | 34 | 30 TODO | Labs dependen de `jsonplaceholder.typicode.com` y `httpstat.us` (servicio inestable): valorar un servidor local con `pnpm dlx` o Docker |
| 16 | 4 · 79–86 | 4 practica | 33 | 14 PENDIENTE | **Teoría delgada** (un tercio de S01–S15): reescribir |
| 17 | 4 · 73–82 | 4 practica | 18 | 9 PENDIENTE | **Teoría delgada.** Starter del proyecto ya resuelto bajo los "PENDIENTE" |
| 18 | 4 · 69–88 | 4 practica | 9 | 1 TODO | **Teoría delgada.** Starter del proyecto = solución completa |
| 19 | 4 · 55–65 | 4 practica | 7 | 2 TODO | **Teoría delgada.** Starter = solución completa. Glosario corto |
| 20 | 4 · 45–55 | 4 practica | 7 | 1 TODO | **Teoría delgada.** Starter = solución completa. Glosario corto |
| 21 | 4 · 38–43 | 4 practica | 8 | 5 TODO | **Teoría delgada.** Starter = solución completa. Valorar `Temporal` (ya en Chrome y Firefox) junto a `Date` e `Intl` |
| 22 | 5 · 78–98 | 4 practica | 20 | 13 TODO | **Teoría delgada** |

**Conclusión**: S01–S15 necesitan migración estructural. S16–S22 necesitan además reescritura de teoría y labs, y un proyecto nuevo cuyo starter no traiga la solución.

## Plan de trabajo

Un bloque de 5 semanas por sesión, commit y push por semana terminada:

| Sesión | Semanas | Trabajo |
|---|---|---|
| 1 | S01–S05 | migración ✅ |
| 2 | S06–S10 | migración |
| 3 | S11–S15 | migración |
| 4 | S16–S20 | migración + reescritura de teoría, labs y proyecto |
| 5 | S21–S25 | S21–S22 como la sesión 4; escribir S23 Performance, S24 Integrador intermedio, S25 Vitest I |
| 6 | S26–S28 | escribir S26 Vitest II, S27 Patrones y Clean Code, S28 Proyecto final |

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Inicio del bootcamp](README.md) | [Índice del bootcamp](bootcamp/README.md) → |
