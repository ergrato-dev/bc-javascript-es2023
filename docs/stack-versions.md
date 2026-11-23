# Versiones del stack

Fuente única de versiones del bootcamp. Cuando una versión cambia, se actualiza **esta tabla**; ningún otro documento copia las versiones.

"Se fija en SXX" significa que la versión exacta se elige y se verifica con ejecuciones reales al construir esa semana.

Comprobado el 2026-11-22 contra `nodejs.org/dist/index.json` y el registro de pnpm (`pnpm view <paquete> version`).

Criterio: nunca la última versión publicada ni una con menos de 7 días, por riesgo de CVE y de paquetes comprometidos. pnpm 12.20.0 se publicó el 2026-11-12; Node 24.19.0, el 2026-08-03.

## Herramientas del estudiante

| Componente | Versión | Dónde se fija | Por qué |
|---|---|---|---|
| Node.js | 26 LTS (mínimo 24) | equipo del estudiante; `engines` de cada `package.json` desde S25 | LTS activa. La 24 basta para todo el temario (ES2023 completo, `Object.groupBy`, `Array.fromAsync`) |
| pnpm | 12.20.0 | equipo del estudiante; `packageManager` desde S25 | Único gestor de paquetes del curso: nunca npm, npx ni yarn (`pnpm dlx` en lugar de `npx`) |
| jq | 1.6 o posterior | equipo del estudiante | Lo necesita `scripts/verificar-semana.sh` para leer `checks.json` |
| Navegador | Chrome/Edge 120+, Firefox 121+, Safari 17+ | — | Soportan ES2023 sin transpilar (`toSorted`, `toSpliced`, `with`, `findLast`) |
| Servidor estático | `pnpm dlx serve` | — | Los módulos ES (`<script type="module">`) no cargan desde `file://`; se sirven por HTTP |

## Dependencias de los proyectos

| Componente | Versión | Dónde se fija | Por qué |
|---|---|---|---|
| Vitest y @vitest/coverage-v8 | 5.1.0 (publicada el 2026-11-02; la 5.1.1 tenía menos de 7 días al fijarla) | `devDependencies` con versión exacta y `pnpm-lock.yaml`, desde S25 | Testing de S25–S28: ESM nativo, sin transpilar, API compatible con Jest. Las dos en la misma versión |

Hasta S24 los proyectos no tienen dependencias: JavaScript del navegador y de Node, sin `package.json`.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Plan de estudios](plan-estudios.md) | [Autograding](autograding.md) → |
