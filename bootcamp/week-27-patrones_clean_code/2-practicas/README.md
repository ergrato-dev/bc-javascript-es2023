# Prácticas — Semana 27

Cuatro labs guiados, todos con Node. Los dos primeros no instalan nada: descomentas un bloque de `index.js`, lo ejecutas con `node index.js` y comparas la salida. Los dos últimos tienen su `package.json` y su `pnpm-lock.yaml`: en el lab 03 cambias una función paso a paso con sus tests en verde, y en el lab 04 arreglas lo que encuentran ESLint y Prettier. No se entregan; preparan el [proyecto de la semana](../3-proyecto/README.md).

| Lab | Tema | Duración |
|---|---|---|
| [Lab 01](lab-01-module-singleton-factory/README.md) | Un módulo con su parte privada, la instancia única que comparten sus `import`, una fábrica de objetos independientes y una fábrica que elige qué crear | 50 min |
| [Lab 02](lab-02-observer-strategy/README.md) | Un emisor de eventos con `on`, `emit` y `once`, un almacén que avisa sin saber a quién, `EventTarget` y estrategias en lugar de un `switch` | 50 min |
| [Lab 03](lab-03-refactorizar-con-tests/README.md) | Tests de caracterización y seis pasos de refactor: nombres, funciones, cláusulas de guarda, constantes, estrategias y un booleano que pasa a dos funciones | 55 min |
| [Lab 04](lab-04-eslint-prettier/README.md) | ESLint y Prettier con pnpm: errores de verdad, `--fix`, límites de complejidad, formato y un script que lo comprueba todo | 55 min |

**Total:** 3 h 30 min.

## Antes de empezar

Necesitas Node y pnpm en las versiones de [docs/stack-versions.md](../../../docs/stack-versions.md). El lab 03 instala Vitest 5.1.0, el de las semanas 25 y 26. El lab 04 instala ESLint 10.14.0 y Prettier 3.10.0, las mismas que usa el proyecto.

Los labs muestran salidas reales. En los labs 03 y 04 cambian los milisegundos, `Start at` y `Duration`. Todo lo demás debería coincidir.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Teoría — 🔧 Code smells, refactorizar y herramientas](../1-teoria/05-refactorizar-y-herramientas.md) | [Lab 01 — Module, Singleton y Factory](lab-01-module-singleton-factory/README.md) → |

[↑ Semana 27](../README.md)
