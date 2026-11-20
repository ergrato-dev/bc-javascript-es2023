# Prácticas — Semana 09

Cuatro labs guiados que siguen el orden de la teoría. Cada lab trae en `starter/index.js` el código comentado: lo descomentas paso a paso, lo ejecutas con Node y comparas con la salida esperada del README. No se entregan; preparan el [proyecto de la semana](../3-proyecto/README.md).

| Lab | Tema | Duración |
|---|---|---|
| [Lab 01](lab-01-symbols-basics/README.md) | `Symbol()`, unicidad, claves simbólicas, `Object.getOwnPropertySymbols` y `Reflect.ownKeys` | 50 min |
| [Lab 02](lab-02-symbol-registry/README.md) | Registro global: `Symbol.for()` y `Symbol.keyFor()` | 50 min |
| [Lab 03](lab-03-well-known/README.md) | `Symbol.toStringTag`, `Symbol.toPrimitive`, `Symbol.iterator` y `Symbol.hasInstance` | 55 min |
| [Lab 04](lab-04-private-props/README.md) | Ocultar propiedades con símbolos frente a `_nombre` y campos `#` | 55 min |

**Total:** 3 h 30 min.

## Antes de empezar

Comprueba que tienes Node instalado (versión en [docs/stack-versions.md](../../../docs/stack-versions.md)):

```bash
node --version
# v24.19.0 (o superior)
```

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Teoría — 🔎 Object.getOwnPropertySymbols](../1-teoria/05-get-own-property-symbols.md) | [Lab 01 — Crear y usar símbolos](lab-01-symbols-basics/README.md) → |

[↑ Semana 09](../README.md)
