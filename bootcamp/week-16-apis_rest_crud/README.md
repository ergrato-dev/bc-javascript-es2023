# Semana 16 - APIs REST y CRUD

En la semana 15 aprendiste a hablar con una API con `fetch`: cada método HTTP, las cabeceras, la cancelación y los errores. Esta semana miras la API entera y lo que pasa alrededor de cada petición: por qué sus rutas, métodos y códigos de estado son los que son, cómo se pide una colección grande por páginas, cómo se inicia y se cierra una sesión con token y cómo muestra la página que algo está cargando, vacío o ha fallado, sin contradecirse cuando dos respuestas llegan en otro orden.

## Objetivos de aprendizaje

Al terminar la semana podrás:

- Leer el diseño de una API REST: colecciones, elementos y recursos anidados, métodos seguros e idempotentes y el código de estado adecuado para cada caso (`201`, `204`, `401`, `403`, `404`, `405`, `409`, `422`).
- Pedir colecciones filtradas, ordenadas y paginadas, leer sus metadatos y recorrerlas por número de página o por cursor.
- Iniciar sesión con un token, enviarlo en `Authorization: Bearer`, reaccionar a su caducidad y elegir dónde guardarlo.
- Representar el estado de una petición con `idle`, `loading`, `success`, `empty` y `error`, calcularlo con un reductor y evitar envíos dobles y condiciones de carrera.
- Hacer un CRUD completo con borrado optimista que vuelve atrás si la API falla.

## Requisitos previos

- La [semana 15](../week-15-fetch_api/README.md): `fetch`, métodos HTTP, `Authorization`, `AbortController` y `HttpError`.
- Los generadores asíncronos y `for await` de la [semana 14](../week-14-async_await/README.md) y la desestructuración con `...` de la [semana 04](../week-04-destructuring_modulos_es2023/README.md).
- Node y pnpm en las versiones de [docs/stack-versions.md](../../docs/stack-versions.md):

  ```bash
  node --version
  # v24.19.0 (o superior)
  pnpm --version
  # 12.20.0 (o superior)
  ```

---

## Contenidos

### 1. Teoría (2 h)

| Archivo | Tiempo | Tema |
|---|---|---|
| [01 - Diseño REST](1-teoria/01-diseno-rest.md) | 30 min | Recursos y URLs, métodos seguros e idempotentes, códigos de estado y errores con forma estable |
| [02 - Paginación, filtros y orden](1-teoria/02-paginacion-filtros.md) | 30 min | Parámetros de consulta, paginación por página, metadatos, generadores de páginas y cursor |
| [03 - Autenticación con token](1-teoria/03-autenticacion.md) | 30 min | `401` y `403`, sesión con token, JWT, otras formas de autenticarse y dónde guardar el token |
| [04 - Estados de carga](1-teoria/04-estados-carga.md) | 30 min | Estados frente a booleanos, reductores, envíos dobles, condiciones de carrera y actualizaciones optimistas |

### 2. Prácticas (3 h 30 min)

| Lab | Tiempo |
|---|---|
| [Lab 01 - Diseño de una API REST](2-practicas/lab-01-diseno-rest/README.md) | 50 min |
| [Lab 02 - Paginación, filtros y orden](2-practicas/lab-02-paginacion/README.md) | 55 min |
| [Lab 03 - Autenticación con token](2-practicas/lab-03-autenticacion/README.md) | 55 min |
| [Lab 04 - Estados de carga](2-practicas/lab-04-estados-carga/README.md) | 50 min |

Los labs no necesitan internet: hacen peticiones a la API de un acuario que arrancan en tu equipo.

### 3. Proyecto (2 h)

[Panel de la colección](3-proyecto/README.md): completas las funciones de `src/logic.js` que inician sesión, piden las fichas de tu dominio por páginas, las crean, editan y borran con token, y calculan el estado de la lista, y adaptas `src/data.js` al dominio que te asigna el instructor. `scripts/verificar-semana.sh 16` comprueba las funciones.

### 4. Recursos (30 min)

[Ebooks](4-recursos/ebooks-free/README.md) · [Videos](4-recursos/videografia/README.md) · [Web](4-recursos/webgrafia/README.md) · [Glosario](5-glosario/README.md)

---

## Evaluación

| Evidencia | Peso | Qué se evalúa |
|---|---:|---|
| Conocimiento | 30% | Los conceptos de la teoría, con ejemplos propios |
| Desempeño | 40% | Los cuatro labs ejecutados y sus preguntas de comprobación |
| Producto | 30% | El proyecto: 18/18 comprobaciones y datos del dominio |

Detalle en la [rúbrica](rubrica-evaluacion.md).

---

## Estructura

```text
week-16-apis_rest_crud/
|-- README.md
|-- rubrica-evaluacion.md
|-- checks.json
|-- 0-assets/                  # 4 diagramas SVG
|-- 1-teoria/                  # 01 a 04
|-- 2-practicas/
|   |-- README.md
|   |-- shared/server.js       # la API del acuario que arrancan los labs
|   |-- lab-01-diseno-rest/
|   |-- lab-02-paginacion/
|   |-- lab-03-autenticacion/
|   `-- lab-04-estados-carga/
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

Node para ejecutar los labs y el servidor del proyecto. `Array.fromAsync` (lab 02) necesita Node 22 o superior y el `server.js` del proyecto usa `import.meta.main`, que necesita Node 24.2 o superior. El proyecto se abre con `node server.js`, sin `pnpm dlx serve`, porque el mismo servidor sirve la página y la API. Las salidas de este material se obtuvieron con Node 24.19.0. Las versiones de todo el curso están en [stack-versions](../../docs/stack-versions.md).

---

## Navegación

| ← Semana anterior | Siguiente → |
|---|---|
| [Semana 15 - Fetch API](../week-15-fetch_api/README.md) | [Semana 17 - DOM Manipulation Moderna](../week-17-dom_manipulation_moderna/README.md) |
