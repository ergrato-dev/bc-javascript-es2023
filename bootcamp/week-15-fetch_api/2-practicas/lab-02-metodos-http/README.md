# Lab 02 — Métodos HTTP

## Objetivo

Enviar datos con `fetch`: crear con `POST`, reemplazar con `PUT`, cambiar un campo con `PATCH` y borrar con `DELETE`. Mandar el cuerpo en JSON con su cabecera `Content-Type`, tratar una respuesta sin cuerpo (`204`), leer el mensaje de error del servidor y reunir todo en una función.

**Tiempo:** 55 min · **Teoría:** [01 - Fetch básico](../../1-teoria/01-fetch-basics.md) y [03 - Headers y configuración](../../1-teoria/03-headers-config.md), sección 1

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 7 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-15-fetch_api/2-practicas/lab-02-metodos-http
node starter/index.js
```

El lab usa la [API de prácticas](../lab-01-primera-peticion/README.md#la-api-de-prácticas) del lab 01, que vuelve a sus datos iniciales en cada ejecución. Los pasos 3 y 5 trabajan con el planeta que crea el paso 1: descomenta los pasos en orden. Las salidas de este README se obtuvieron con Node 24.

---

## Paso 1: `POST` para crear

El segundo argumento de `fetch` es un objeto de opciones. Para crear un recurso:

- `method: 'POST'`: sin él, `fetch` hace un `GET`.
- `headers`: `Content-Type: application/json` avisa al servidor de que el cuerpo va en JSON.
- `body`: el cuerpo es **texto**, así que el objeto se convierte con `JSON.stringify`.

El servidor responde `201 Created`, le pone un `id` al planeta nuevo e indica en la cabecera `Location` dónde consultarlo.

```text
--- Paso 1: POST ---
status: 201 Created
Location: /planets/9
{ name: 'Plutón', type: 'enano', moons: 5, id: 9 }
```

## Paso 2: olvidar `JSON.stringify`

Si `body` recibe un objeto, `fetch` lo convierte en texto con `String()`, que da `[object Object]`. El servidor no puede leerlo y contesta `400 Bad Request`. No hay ningún error en tu código: el fallo solo se ve en la respuesta.

```text
--- Paso 2: Sin JSON.stringify ---
status: 400
{ error: 'El cuerpo no es JSON válido: [object Object]' }
```

## Paso 3: `PUT` para reemplazar

`PUT` sustituye el recurso entero por el cuerpo que envías. Plutón pierde `type` y `moons` porque el cuerpo nuevo solo trae `name`.

```text
--- Paso 3: PUT ---
status: 200
{ name: 'Plutón', id: 9 }
```

## Paso 4: `PATCH` para cambiar solo un campo

`PATCH` envía solo los campos que cambian; el resto se conserva.

```text
--- Paso 4: PATCH ---
status: 200
{ id: 4, name: 'Marte', type: 'rocoso', moons: 3 }
```

## Paso 5: `DELETE` y una respuesta sin cuerpo

`DELETE` no necesita cuerpo ni cabeceras. El servidor contesta `204 No Content`: todo ha ido bien y no hay nada que leer. `text()` da una cadena vacía, y `json()` fallaría con un `SyntaxError` porque una cadena vacía no es JSON. Por eso conviene mirar el estado antes de leer.

```text
--- Paso 5: DELETE ---
status: 204 No Content
Cuerpo: ""
Después, GET /planets/9 → 404
```

## Paso 6: leer el error que manda el servidor

Muchas API explican en el cuerpo por qué rechazan una petición. Cuando `ok` es falso, el cuerpo sigue ahí y se lee igual que el de una respuesta correcta.

```text
--- Paso 6: 400 ---
❌ 400: Falta el campo name
```

## Paso 7: una función para todos los métodos

`request(method, path, data)` añade las cabeceras y el `JSON.stringify` solo cuando hay datos, convierte los errores HTTP en excepciones con el mensaje del servidor y devuelve `null` para las respuestas `204`.

```text
--- Paso 7: request ---
Creado: { name: 'Eris', type: 'enano', moons: 1, id: 10 }
Cambiado: { name: 'Eris', type: 'enano', moons: 2, id: 10 }
Borrado: null
❌ 404: No existe el planeta 10

✅ Lab completado.
```

---

## Comprobación

1. En el paso 1, quita la línea de `headers`. ¿Qué estado devuelve el servidor y qué mensaje? ¿Por qué hace falta la cabecera si el cuerpo ya es JSON?
2. En el paso 5, cambia `await deleted.text()` por `await deleted.json()`. Copia el error que sale y explica de dónde viene.
3. Usa `request` del paso 7 para cambiar Saturno (id 6) a 150 lunas con `PATCH` y, después, para reemplazarlo con `PUT` por `{ name: 'Saturno' }`. ¿Qué campos tiene Saturno al final?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 01 — Tu primera petición](../lab-01-primera-peticion/README.md) | [Lab 03 — Cabeceras y configuración](../lab-03-headers-config/README.md) → |

[↑ Semana 15](../../README.md)
