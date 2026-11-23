# Lab 01 — Diseño de una API REST

## Objetivo

Leer una API REST como la lee un cliente: distinguir colecciones, elementos y recursos anidados, seguir la cabecera `Location` de un `201`, separar un `422` de un `409`, comprobar qué métodos son idempotentes y decidir qué hace la página con cada código de estado.

**Tiempo:** 50 min · **Teoría:** [01 - Diseño REST](../../1-teoria/01-diseno-rest.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 7 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-16-apis_rest_crud/2-practicas/lab-01-diseno-rest
node starter/index.js
```

## La API de prácticas

Los cuatro labs de la semana usan la API de un acuario que vive en [`shared/server.js`](../shared/server.js). Cada lab la arranca al empezar con `startServer()`, en un puerto libre de tu equipo, y la para al terminar con `server.close()`. No necesitas internet ni dejar nada abierto en otra terminal. La cabecera del archivo describe todas las rutas.

Cada ejecución parte de los mismos datos, pero dentro de una ejecución los cambios se acumulan: el paso 4 cuenta las especies que creó el paso 2. Descomenta los pasos en orden; las salidas de este README suponen que los anteriores también están descomentados. Se obtuvieron con Node 24.

`call(method, path, data)`, ya hecha al principio del archivo, hace la petición y devuelve `{ status, headers, body }` sin lanzar errores, para que veas también las respuestas de error.

---

## Paso 1: colecciones, elementos y recursos anidados

En REST, cada URL nombra un **recurso**. `/habitats` es la colección; `/habitats/1`, un elemento de ella; `/habitats/1/species`, las especies que pertenecen a ese hábitat. Las rutas usan sustantivos en plural y el método dice qué se hace con ellos. Un hábitat que no existe da `404` aunque se pidan sus especies.

```text
--- Paso 1: Recursos ---
GET /habitats → 200 [ 'Arrecife de coral', 'Océano abierto', 'Río amazónico' ]
GET /habitats/1 → 200 { id: 1, name: 'Arrecife de coral' }
GET /habitats/1/species → 200 5 especies
GET /habitats/9/species → 404 { error: 'No existe el hábitat 9' }
```

## Paso 2: crear devuelve `201` y `Location`

`POST` a la colección crea un elemento. El servidor responde `201 Created`, devuelve el recurso con el `id` que le ha dado y dice en la cabecera `Location` cuál es su URL. El cliente no tiene que construirla: la sigue.

```text
--- Paso 2: 201 y Location ---
POST /species → 201 { id: 13, name: 'Pulpo común', habitatId: 1 }
Location: /species/13
GET /species/13 → 200 Pulpo común
```

## Paso 3: `422` y `409`, dos errores distintos

Los dos rechazan la petición, pero piden cosas distintas a quien usa la página:

- `422 Unprocessable Content`: los datos no son válidos. El cuerpo trae `fields`, un error por campo, para marcar cada campo del formulario.
- `409 Conflict`: los datos son válidos, pero chocan con el estado del servidor (ya hay una especie con ese nombre, sin distinguir mayúsculas).

```text
--- Paso 3: 422 y 409 ---
Datos incompletos → 422 {
  error: 'Datos no válidos',
  fields: { name: 'Obligatorio', habitatId: 'No existe el hábitat 9' }
}
Nombre repetido → 409 { error: 'Ya existe la especie Pez payaso' }
```

## Paso 4: `PUT` es idempotente; `POST` no

Un método es **idempotente** si repetir la petición deja el servidor igual que hacerla una vez. Dos `PUT` iguales dejan Pez luna con el mismo nombre y el mismo total de especies; dos `POST` iguales crean dos especies. Por eso un `PUT` se puede reintentar sin miedo cuando la red falla y un `POST` no.

```text
--- Paso 4: Idempotencia ---
Al empezar: 13 especies
PUT intento 1 → 200 { id: 11, name: 'Pez luna gigante', habitatId: 2 }
PUT intento 2 → 200 { id: 11, name: 'Pez luna gigante', habitatId: 2 }
Después de dos PUT: 13 especies
POST intento 1 → 201 id 14
POST intento 2 → 201 id 15
Después de dos POST: 15 especies
```

## Paso 5: `DELETE` dos veces

`DELETE` también es idempotente: después de la segunda petición, la especie 12 sigue sin existir, igual que después de la primera. Lo que cambia es la **respuesta**: `204` la primera vez y `404` la segunda. Idempotente habla del estado del servidor, no de que la respuesta sea la misma.

```text
--- Paso 5: DELETE repetido ---
DELETE /species/12 → 204 null
DELETE /species/12 → 404 { error: 'No existe la especie 12' }
```

## Paso 6: `405` y la cabecera `Allow`

`/species/1` existe, pero no admite `POST`: se crea en la colección, no en un elemento. El servidor responde `405 Method Not Allowed` y lista en `Allow` los métodos que sí acepta. Una ruta que no existe da `404`.

```text
--- Paso 6: 405 ---
POST /species/1 → 405 { error: 'Método no permitido: POST' }
Allow: GET, PUT, PATCH, DELETE
GET /fishes → 404 { error: 'Ruta desconocida: GET /fishes' }
```

## Paso 7: qué hace el cliente con cada estado

`reactTo` decide qué mostrar según el estado. El orden de los `if` importa: el `201` va antes que el resto de los `2xx`. `?fail` hace que la API conteste `503`, como un servidor caído.

```text
--- Paso 7: Una reacción por estado ---
GET /species/1 → 200: Mostrar los datos
POST /species → 201: Mostrar la ficha nueva
POST /species → 409: Pedir otro valor: Ya existe la especie Morena
PATCH /species/1 → 422: Marcar los campos: name, habitatId
GET /species/99 → 404: Avisar de que no existe
GET /species/1?fail → 503: Reintentar más tarde

✅ Lab completado.
```

---

## Comprobación

1. En el paso 4, cambia los dos `PUT` por dos `PATCH` con `{ name: 'Pez luna gigante' }`. ¿Es `PATCH` idempotente en este caso? Piensa en un `PATCH` que no lo sea (pista: «suma una unidad»).
2. En el paso 3, envía `{ name: 'Pez payaso', habitatId: 9 }`. ¿Qué estado sale, `422` o `409`? ¿Por qué tiene sentido que el servidor compruebe los campos antes que el nombre repetido?
3. Añade a `cases`, en el paso 7, un `DELETE` de `/species/13` y otro de `/species/1?fail`. Antes de ejecutar, escribe qué mensaje dará `reactTo` en cada uno.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Índice de labs](../README.md) | [Lab 02 — Paginación, filtros y orden](../lab-02-paginacion/README.md) → |

[↑ Semana 16](../../README.md)
