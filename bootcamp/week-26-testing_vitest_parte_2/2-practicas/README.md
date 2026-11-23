# Prácticas — Semana 26

Cuatro labs guiados, todos con Node y Vitest. Cada uno es un proyecto pequeño con su `package.json` y su `pnpm-lock.yaml`. Descomentas un bloque de tests, los ejecutas con `pnpm test` y comparas la salida. Varios pasos tienen un test que falla, o que pasa sin deber, a propósito: lee la salida entera antes de arreglarlo. No se entregan; preparan el [proyecto de la semana](../3-proyecto/README.md).

| Lab | Tema | Duración |
|---|---|---|
| [Lab 01](lab-01-dobles-de-prueba/README.md) | Dobles escritos a mano, `vi.fn`, lo que devuelve un doble, `vi.spyOn` con `restoreAllMocks` y `vi.mock` | 50 min |
| [Lab 02](lab-02-tests-asincronos/README.md) | Tests `async`, `resolves` y `rejects`, el test sin `await`, esperas de verdad y el reloj falso con temporizadores y fechas | 55 min |
| [Lab 03](lab-03-tests-de-integracion/README.md) | Un servidor de verdad en `beforeAll`/`afterAll`, un error que el doble no ve, `beforeEach` con `reset` y errores reales | 50 min |
| [Lab 04](lab-04-tdd/README.md) | Siete ciclos de TDD: rojo, código mínimo, triangulación, refactor y dos ciclos sin guía | 55 min |

**Total:** 3 h 30 min.

## Antes de empezar

Necesitas Node y pnpm en las versiones de [docs/stack-versions.md](../../../docs/stack-versions.md). Cada lab instala Vitest dentro de su carpeta `starter/` con `pnpm install`; si hiciste los labs de la semana 25, pnpm ya tiene los paquetes y no descarga nada.

Los labs muestran salidas reales. Dos líneas cambian en cada ejecución: `Start at`, la hora, y `Duration`, lo que tardó. Los milisegundos de cada test también varían, sobre todo en los tests de integración del lab 03. Todo lo demás debería coincidir.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Teoría — 🧭 Buenas prácticas](../1-teoria/05-buenas-practicas.md) | [Lab 01 — Dobles de prueba](lab-01-dobles-de-prueba/README.md) → |

[↑ Semana 26](../README.md)
