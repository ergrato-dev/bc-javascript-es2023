# Semana 15 - Fetch API

Las semanas 13 y 14 trabajaron con operaciones asíncronas simuladas con `setTimeout`. Esta semana las peticiones son reales: `fetch` habla con un servidor por HTTP, y el código de `async`/`await` y `try`/`catch` que ya conoces sirve para leer sus respuestas. Verás cómo pedir y enviar datos con cada método HTTP, qué cabeceras viajan en cada petición, cómo cancelar una que tarda demasiado y por qué un `404` no rechaza la promesa de `fetch`.

## Objetivos de aprendizaje

Al terminar la semana podrás:

- Hacer peticiones con `fetch` y leer la `Response`: `status`, `ok`, cabeceras y cuerpo con `json()` o `text()`, sabiendo que el cuerpo se lee una sola vez.
- Construir URLs con parámetros usando `URL` y `URLSearchParams`.
- Crear, reemplazar, cambiar y borrar recursos con `POST`, `PUT`, `PATCH` y `DELETE`, enviando el cuerpo en JSON con su `Content-Type` y tratando las respuestas `204`.
- Configurar peticiones con `Headers`, `Authorization` y `Request`, y cancelarlas con `AbortController` y `AbortSignal.timeout()`.
- Distinguir errores de red, de estado HTTP, de JSON y de tiempo agotado, convertir los estados en errores propios, reintentar solo lo que puede salir bien y mostrar a cada error un mensaje claro.

## Requisitos previos

- La [semana 14](../week-14-async_await/README.md): `async`/`await`, `try`/`catch`, `Promise.all` y reintentos.
- Los errores propios con `class ... extends Error` de la [semana 11](../week-11-manejo_errores_moderno/README.md) y `JSON.parse`/`JSON.stringify`.
- Node y pnpm en las versiones de [docs/stack-versions.md](../../docs/stack-versions.md):

  ```bash
  node --version
  # v24.19.0 (o superior)
  pnpm --version
  # 12.21.0 (o superior)
  ```

---

## Contenidos

### 1. Teoría (2 h)

| Archivo | Tiempo | Tema |
|---|---|---|
| [01 - Fetch básico](1-teoria/01-fetch-basics.md) | 30 min | Qué es `fetch`, anatomía de una petición, métodos para leer el cuerpo y parámetros en la URL |
| [02 - Request y Response](1-teoria/02-request-response.md) | 30 min | Propiedades de `Response`, cabeceras, `Request`, `clone()` y tipos de respuesta |
| [03 - Headers y configuración](1-teoria/03-headers-config.md) | 30 min | Opciones de `fetch`, cabeceras habituales, autenticación, CORS, caché y cancelación |
| [04 - Manejo de errores](1-teoria/04-error-handling.md) | 30 min | Tipos de error, `response.ok`, errores propios, wrappers, reintentos y manejo centralizado |

### 2. Prácticas (3 h 30 min)

| Lab | Tiempo |
|---|---|
| [Lab 01 - Tu primera petición](2-practicas/lab-01-primera-peticion/README.md) | 50 min |
| [Lab 02 - Métodos HTTP](2-practicas/lab-02-metodos-http/README.md) | 55 min |
| [Lab 03 - Cabeceras y configuración](2-practicas/lab-03-headers-config/README.md) | 55 min |
| [Lab 04 - Errores con fetch](2-practicas/lab-04-error-handling/README.md) | 50 min |

Los labs no necesitan internet: hacen peticiones a una API que arrancan en tu equipo.

### 3. Proyecto (2 h)

[Cliente del catálogo](3-proyecto/README.md): completas las funciones de `src/logic.js` que buscan, abren, crean, editan y borran las fichas de tu dominio en una API REST que sirve `server.js`, con un tiempo máximo por petición y un mensaje para cada error, y adaptas `src/data.js` al dominio que te asigna el instructor. `scripts/verificar-semana.sh 15` comprueba las funciones.

### 4. Recursos (30 min)

[Ebooks](4-recursos/ebooks-free/README.md) · [Videos](4-recursos/videografia/README.md) · [Web](4-recursos/webgrafia/README.md) · [Glosario](5-glosario/README.md)

---

## Evaluación

| Evidencia | Peso | Qué se evalúa |
|---|---:|---|
| Conocimiento | 30% | Los conceptos de la teoría, con ejemplos propios |
| Desempeño | 40% | Los cuatro labs ejecutados y sus preguntas de comprobación |
| Producto | 30% | El proyecto: 17/17 comprobaciones y datos del dominio |

Detalle en la [rúbrica](rubrica-evaluacion.md).

---

## Estructura

```text
week-15-fetch_api/
|-- README.md
|-- rubrica-evaluacion.md
|-- checks.json
|-- 0-assets/                  # 3 diagramas SVG
|-- 1-teoria/                  # 01 a 04
|-- 2-practicas/
|   |-- README.md
|   |-- shared/server.js       # la API de prácticas que arrancan los labs
|   |-- lab-01-primera-peticion/
|   |-- lab-02-metodos-http/
|   |-- lab-03-headers-config/
|   `-- lab-04-error-handling/
|-- 3-proyecto/
|   |-- README.md
|   `-- starter/               # server.js, index.html, styles.css, src/data.js, src/logic.js, src/main.js
|-- 4-recursos/
|   |-- ebooks-free/README.md
|   |-- videografia/README.md
|   `-- webgrafia/README.md
`-- 5-glosario/
    `-- README.md
```

---

## Versiones de la semana

Node para ejecutar los labs y el servidor del proyecto. `fetch` está incluido en Node desde la versión 18 y `AbortSignal.timeout()` desde la 17.3; el `server.js` del proyecto usa `import.meta.main`, que necesita Node 24.2 o superior. El proyecto se abre con `node server.js`, sin `pnpm dlx serve`, porque el mismo servidor sirve la página y la API. Las salidas de este material se obtuvieron con Node 24.19.0. Las versiones de todo el curso están en [stack-versions](../../docs/stack-versions.md).

---

## Navegación

| ← Semana anterior | Siguiente → |
|---|---|
| [Semana 14 - Async/Await](../week-14-async_await/README.md) | [Semana 16 - APIs REST y CRUD](../week-16-apis_rest_crud/README.md) |
