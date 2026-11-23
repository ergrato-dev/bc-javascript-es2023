# Prácticas — Semana 25

Cuatro labs guiados, todos con Node y Vitest. Cada uno es un proyecto pequeño con su `package.json`, salvo el lab 01, donde lo creas tú. Descomentas un bloque de tests, los ejecutas con `pnpm test` y comparas la salida. Muchos pasos tienen un test que falla a propósito: lee el fallo entero antes de arreglarlo. No se entregan; preparan el [proyecto de la semana](../3-proyecto/README.md).

| Lab | Tema | Duración |
|---|---|---|
| [Lab 01](lab-01-primer-test/README.md) | Probar a mano y con `node:assert`, crear el `package.json`, instalar Vitest, el primer test, leer un fallo y encontrar un error | 50 min |
| [Lab 02](lab-02-matchers/README.md) | `toBe`, `toEqual`, `toStrictEqual`, `toBeCloseTo`, textos y arrays, `toThrow`, `not` y partes de un objeto | 55 min |
| [Lab 03](lab-03-organizar-tests/README.md) | Preparar, actuar y comprobar, `beforeEach`, `describe` anidados, `it.each`, casos límite, `todo`, `skip`, `only` y `-t` | 50 min |
| [Lab 04](lab-04-cobertura/README.md) | El informe de cobertura, `include`, cubrir ramas, umbrales y cobertura sin comprobaciones | 55 min |

**Total:** 3 h 30 min.

## Antes de empezar

Necesitas Node y pnpm en las versiones de [docs/stack-versions.md](../../../docs/stack-versions.md). Cada lab instala Vitest dentro de su carpeta `starter/` (en `node_modules/`, que no se sube a git). pnpm guarda los paquetes una sola vez en tu equipo, así que la segunda instalación ya no descarga nada.

Los labs muestran salidas reales. Dos líneas cambian en cada ejecución: `Start at`, la hora, y `Duration`, lo que tardó. Los milisegundos de cada test también varían. Todo lo demás debería coincidir.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Teoría — 📊 Cobertura](../1-teoria/05-cobertura.md) | [Lab 01 — Tu primer test](lab-01-primer-test/README.md) → |

[↑ Semana 25](../README.md)
