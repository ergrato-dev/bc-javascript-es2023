# Instrucciones para asistentes de código — bc-javascript-es2023

La fuente única de reglas del proyecto es [`CLAUDE.md`](../CLAUDE.md). Léelo entero antes de crear o modificar contenido; este archivo no repite sus reglas para que no se contradigan.

Resumen de lo que más se olvida:

- Español con **tuteo**, nunca voseo; código, archivos y propiedades en inglés `camelCase`.
- JavaScript moderno: `const`/`let`, módulos ES, métodos ES2023 inmutables; nunca `var`, `require` ni jQuery.
- Siempre **pnpm** (`pnpm dlx` en lugar de `npx`); nunca npm, npx ni yarn. Base de datos, si aparece, PostgreSQL.
- Estructura de semana, SVG, navegación y checklist de cierre: secciones homónimas de `CLAUDE.md`.
- Versiones: [`docs/stack-versions.md`](../docs/stack-versions.md). Autograding: [`docs/autograding.md`](../docs/autograding.md).
- Sin soluciones en el repo ni catálogo de dominios: ambos viven en repos privados del instructor.
