# Prácticas — Semana 15

Cuatro labs guiados. Cada lab trae en `starter/` el código comentado: lo descomentas paso a paso, lo ejecutas con Node y comparas con la salida esperada del README. Antes de ejecutar, intenta predecir qué estado y qué cuerpo devolverá cada petición. No se entregan; preparan el [proyecto de la semana](../3-proyecto/README.md).

| Lab | Tema | Duración |
|---|---|---|
| [Lab 01](lab-01-primera-peticion/README.md) | `fetch` y `Response`: estado, `ok`, `json()`, `text()`, parámetros en la URL y varias peticiones a la vez | 50 min |
| [Lab 02](lab-02-metodos-http/README.md) | `POST`, `PUT`, `PATCH` y `DELETE` con cuerpo JSON, respuestas `204` y errores del servidor | 55 min |
| [Lab 03](lab-03-headers-config/README.md) | Cabeceras, `Headers`, `Authorization`, `Request`, `clone()` y cancelación con `AbortController` | 55 min |
| [Lab 04](lab-04-error-handling/README.md) | Errores de red, de estado y de JSON, tiempo agotado, reintentos y mensajes para el usuario | 50 min |

**Total:** 3 h 30 min.

## Antes de empezar

Comprueba que tienes Node instalado (versión en [docs/stack-versions.md](../../../docs/stack-versions.md)). `fetch` viene incluido en Node desde la versión 18: no hay que instalar nada.

```bash
node --version
# v24.19.0 (o superior)
```

Los labs no necesitan internet: cada uno arranca la API de prácticas de [`shared/server.js`](shared/server.js) en tu equipo. Lo explica el [lab 01](lab-01-primera-peticion/README.md#la-api-de-prácticas).

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Teoría — 🛡️ Manejo de Errores en Fetch](../1-teoria/04-error-handling.md) | [Lab 01 — Tu primera petición](lab-01-primera-peticion/README.md) → |

[↑ Semana 15](../README.md)
