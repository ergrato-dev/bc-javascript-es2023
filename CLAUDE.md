# CLAUDE.md — bc-javascript-es2023

Instrucciones de proyecto para Claude Code. Este archivo se carga automáticamente en cada sesión.

---

## Identidad del proyecto

- **Tipo:** bootcamp de JavaScript moderno (ES2023) Zero to Hero, orientado a la práctica
- **Duración:** 28 semanas × 8 h = 224 h, en 3 etapas: Fundamentos (S01–S12), Intermedio (S13–S24) y Avanzado (S25–S28). Plan completo en [docs/plan-estudios.md](docs/plan-estudios.md)
- **Versiones:** única fuente en [docs/stack-versions.md](docs/stack-versions.md)
- **Estado de cada semana:** [bootcamp/README.md](bootcamp/README.md); hallazgos pendientes en [AUDIT.md](AUDIT.md)
- **Estructura de referencia:** ergrato-dev/bc-ssh y ergrato-dev/bc-testing

## Audiencia objetivo

Personas que empiezan con JavaScript o que lo usan sin conocer la sintaxis moderna. Se asume terminal básica y saber abrir un navegador con sus DevTools. **No se asume nada de JavaScript**: cada sintaxis, API o comando nuevo se explica la primera vez que aparece.

## Reglas obligatorias de contenido

- **Idioma:** documentación en español, **siempre tuteo, nunca voseo** (`ejecuta`, `revisa`; nunca `ejecutá`, `revisá`, `vos`). Nomenclatura técnica en inglés: variables, funciones, archivos y propiedades en `camelCase` inglés.
- **JavaScript moderno:** `const`/`let` (nunca `var`), arrow functions, módulos ES (`import`/`export`), métodos ES2023 inmutables (`toSorted`, `toReversed`, `with`, `findLast`). Nada de jQuery ni CommonJS (`require`).
- **Herramientas:** siempre **pnpm** (`pnpm dlx` en lugar de `npx`; nunca npm, npx ni yarn). Base de datos, si aparece, siempre PostgreSQL. Docker siempre que haga falta un servicio.
- **Paso a paso, nunca asumir:** pasos numerados, el comando o código exacto y la salida esperada comentada debajo. Nunca "configura X" sin decir cómo.
- **Qué / Para qué / Impacto:** documenta así cada decisión o configuración relevante, en prosa o en comentarios. Explícala una vez y enlaza.
- **Ejecuciones reales:** las salidas que aparecen en la documentación salen de ejecutar el código con la versión de Node de `docs/stack-versions.md`, nunca se inventan.
- **Dominios anticopia:** cada aprendiz adapta el proyecto a un dominio que asigna el instructor. El catálogo vive fuera de este repo (privado); los ejemplos del bootcamp usan solo Planetario, Museo, Acuario o Archivo histórico, que no se asignan.
- **Sin soluciones en el repo:** los labs no tienen `solution/`. La solución del proyecto semanal se escribe en el repo privado `ergrato-dev/bc-instructor`, en `bc-javascript-es2023/week-NN-slug/3-proyecto/solution/`, y nunca en este repo (ni ignorada por git).

## Distribución de tiempo por semana (8 h)

| Sección | Tiempo | Descripción |
|---|---|---|
| 1-teoria | 2 h | 2–5 archivos, un concepto por archivo |
| 2-practicas | 3.5 h | 3–5 labs guiados (`lab-NN-slug`) con `starter/` |
| 3-proyecto | 2 h | Proyecto de la semana adaptado al dominio |
| 4-recursos | 0.5 h | Ebooks, videos y web |

Las semanas integradoras (S12, S24, S28) no tienen teoría nueva: dedican ese tiempo al proyecto.

## Estructura de carpetas por semana

```
week-NN-slug_con_guiones_bajos/
├── README.md                  # objetivos, contenidos, tiempos, navegación entre semanas
├── rubrica-evaluacion.md      # Conocimiento 30 / Desempeño 40 / Producto 30
├── checks.json                # autograding (docs/autograding.md)
├── 0-assets/                  # solo SVG, cada uno enlazado desde 1-teoria
├── 1-teoria/                  # 01-tema.md ...
├── 2-practicas/
│   ├── README.md              # índice de labs con duración
│   └── lab-NN-slug-con-guiones/
│       ├── README.md          # objetivo, pasos con código comentado, salida esperada
│       └── starter/           # index.js (o index.html + main.js) para descomentar
├── 3-proyecto/
│   ├── README.md              # paso a paso + "✅ Requisitos verificables" (copia de checks.json)
│   └── starter/               # index.html, styles.css, src/logic.js (funciones puras), src/main.js (DOM)
├── 4-recursos/{ebooks-free,videografia,webgrafia}/README.md
└── 5-glosario/README.md
```

- Los labs son **guiados**: el README explica cada paso y el `starter/` trae el código comentado que el aprendiz descomenta y ejecuta. Si un lab pide escribir código, el README da el resultado esperado, no la solución.
- El `3-proyecto/starter/` trae `TODO` en `src/logic.js`; con él, `./scripts/verificar-semana.sh NN` falla.
- La rúbrica no puede depender de código que falta en el repo: la evidencia de Producto es lo que pasa `checks.json` más la adaptación al dominio.

## Diagramas SVG (0-assets/)

- **Cuántos:** los que la teoría de esa semana necesite, ni uno más ni uno menos.
- **Colores:** tema dark con fondo `#0d1117`, cajas `#161b22`, bordes `#30363d` y texto `#c9d1d9`. Acentos `#58a6ff`, `#3fb950`, `#f85149`, `#d29922` y el amarillo de JavaScript `#F7DF1E`.
- **Sin degradados:** `linearGradient` y `radialGradient` prohibidos. Fuente `sans-serif`; `monospace` solo para código.
- **Validación:** `node scripts/validate-svg.js` sin errores; cada SVG enlazado desde al menos un `.md`.

## Navegación

- Cada documento de la semana termina con la tabla `| Anterior | Siguiente |` generada por `scripts/generar-navegacion.sh NN` (orden: teoría → labs → proyecto → rúbrica → recursos → glosario). No se escribe a mano.
- El README de la semana lleva su propia tabla de navegación entre semanas.
- Los documentos de `docs/` llevan la misma tabla.

## Antes de dar una semana por terminada

1. `ENTREGA=solution ./scripts/verificar-semana.sh NN` pasa (solución en `bc-instructor`) y `./scripts/verificar-semana.sh NN` (starter) falla.
2. Cada lab corre con el comando de su README y las salidas documentadas coinciden con las reales.
3. `./scripts/generar-navegacion.sh NN`, `./scripts/verificar-enlaces.sh` y `node scripts/validate-svg.js` terminan sin errores.
4. La semana queda con ✅ en `bootcamp/README.md` y en la tabla de progreso de `docs/plan-estudios.md`, y sus hallazgos cerrados en `AUDIT.md`.
5. Commit y push del bootcamp y, por separado, de `bc-instructor` (solo la carpeta `bc-javascript-es2023`).
