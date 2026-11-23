# Prácticas — Semana 16

Cuatro labs guiados. Cada lab trae en `starter/` el código comentado: lo descomentas paso a paso, lo ejecutas con Node y comparas con la salida esperada del README. Antes de ejecutar, intenta predecir qué estado y qué cuerpo devolverá cada petición. No se entregan; preparan el [proyecto de la semana](../3-proyecto/README.md).

| Lab | Tema | Duración |
|---|---|---|
| [Lab 01](lab-01-diseno-rest/README.md) | Recursos y rutas, `201` con `Location`, `422` frente a `409`, idempotencia, `405` y una reacción por estado | 50 min |
| [Lab 02](lab-02-paginacion/README.md) | Páginas con `data` y `meta`, filtros y orden, cabecera `Link`, generador de páginas y cursor | 55 min |
| [Lab 03](lab-03-autenticacion/README.md) | `POST /login`, `Authorization: Bearer`, `401` frente a `403`, caducidad y un cliente con sesión | 55 min |
| [Lab 04](lab-04-estados-carga/README.md) | Estados `idle`, `loading`, `success`, `empty` y `error`, doble clic, condiciones de carrera y borrado optimista | 50 min |

**Total:** 3 h 30 min.

## Antes de empezar

Comprueba que tienes Node instalado (versión en [docs/stack-versions.md](../../../docs/stack-versions.md)):

```bash
node --version
# v24.19.0 (o superior)
```

Los labs no necesitan internet: cada uno arranca la API de un acuario, en [`shared/server.js`](shared/server.js), en tu equipo. Lo explica el [lab 01](lab-01-diseno-rest/README.md#la-api-de-prácticas).

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Teoría — ⏳ Estados de carga](../1-teoria/04-estados-carga.md) | [Lab 01 — Diseño de una API REST](lab-01-diseno-rest/README.md) → |

[↑ Semana 16](../README.md)
