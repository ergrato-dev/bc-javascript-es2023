# Lab 03 — Autenticación con token

## Objetivo

Recorrer el ciclo de una sesión con token: ver el `401` de una ruta protegida, iniciar sesión con `POST /login`, enviar el token en `Authorization: Bearer`, distinguir `401` de `403`, ver cómo caduca un token y reunir todo en un cliente que guarda la sesión y reacciona cuando deja de valer.

**Tiempo:** 55 min · **Teoría:** [03 - Autenticación con token](../../1-teoria/03-autenticacion.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 7 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-16-apis_rest_crud/2-practicas/lab-03-autenticacion
node starter/index.js
```

El lab usa la [API de prácticas](../lab-01-diseno-rest/README.md#la-api-de-prácticas) del lab 01. Tiene dos cuentas: `ana` (contraseña `coral`, rol `keeper`) y `luis` (contraseña `marea`, rol `admin`). Las rutas `/me`, `/notes` y `/logout` piden token; el resto son públicas. Los pasos 3 a 5 usan el token que consigue el paso 2: descomenta en orden. Las salidas se obtuvieron con Node 24.

`call(method, path, { data, token, baseUrl })`, ya hecha, añade `Authorization: Bearer <token>` cuando le pasas un `token`.

> Las contraseñas de este lab están en el código del servidor porque es una API de prácticas. En una aplicación real nunca van en el código ni en el repositorio, y se guardan cifradas con un *hash*.

---

## Paso 1: sin token, `401`

`401 Unauthorized` significa «no sé quién eres». La cabecera `WWW-Authenticate: Bearer` dice qué tipo de credencial espera el servidor. Las rutas públicas responden igual que siempre.

```text
--- Paso 1: Sin token ---
GET /me → 401 { error: 'Falta el token' }
WWW-Authenticate: Bearer
GET /habitats/1 → 200 (ruta pública)
```

## Paso 2: iniciar sesión

`POST /login` recibe el usuario y la contraseña en el cuerpo, nunca en la URL: las URL se guardan en el historial del navegador y en los registros de los servidores. Con una contraseña mala da `401` sin decir cuál de los dos datos falla, para no dar pistas a quien prueba contraseñas. Con la buena devuelve el token, el rol y `expiresIn`, los segundos que vale.

```text
--- Paso 2: POST /login ---
Contraseña mal → 401 { error: 'Usuario o contraseña incorrectos' }
Contraseña bien → 200 { token: 'tok-1-ana', user: 'ana', role: 'keeper', expiresIn: 60 }
```

Los tokens de esta API son legibles para que la salida sea fácil de seguir. Los de una API real son largos y aleatorios, o JWT firmados, y no se pueden adivinar.

## Paso 3: el token en la cabecera `Authorization`

Desde ahora, cada petición lleva `Authorization: Bearer tok-1-ana`. El servidor no recuerda a nadie entre peticiones: sabe quién eres porque lo dice el token de **cada** petición. Por eso la nota nueva sale con `author: 'ana'` sin enviarlo.

```text
--- Paso 3: Authorization ---
GET /me → 200 { user: 'ana', role: 'keeper' }
POST /notes → 201 { id: 2, text: 'Limpiar el filtro del arrecife', author: 'ana' }
```

## Paso 4: `401` no es lo mismo que `403`

`403 Forbidden` significa «sé quién eres, pero no puedes hacer esto». Volver a iniciar sesión no lo arregla: ana tiene el rol `keeper` y borrar notas es cosa de `admin`. Con el token de luis, la misma petición da `204`.

```text
--- Paso 4: 401 y 403 ---
ana borra la nota 1 → 403 { error: 'El rol keeper no puede borrar notas' }
luis (admin) borra la nota 1 → 204
```

## Paso 5: cabeceras mal escritas

El formato es exacto: la palabra `Bearer`, un espacio y el token. Sin `Bearer ` el servidor no reconoce la credencial; con un token que no emitió, la rechaza. Los dos dan `401`, con mensajes distintos que ayudan a depurar.

```text
--- Paso 5: Cabecera mal escrita ---
Sin "Bearer " → 401 { error: 'Falta el token' }
Token inventado → 401 { error: 'Token no válido' }
```

## Paso 6: los tokens caducan

Un token que vale para siempre es peligroso si alguien lo roba. Este paso arranca otra API, `shortServer`, cuyos tokens duran 100 ms: enseguida funciona y a los 150 ms da `401` con `Token caducado`. La reacción del cliente es la misma que sin token: pedir que inicie sesión otra vez.

```text
--- Paso 6: Caducidad ---
expiresIn: 0.1 s
Enseguida → 200
A los 150 ms → 401 { error: 'Token caducado' }
```

## Paso 7: un cliente que guarda la sesión

`createClient` guarda el token en `let token`, una variable local. Las funciones que devuelve (`login`, `logout`, `request`) la siguen viendo después de que `createClient` termine; eso se llama **clausura** (*closure*). Nadie fuera del cliente puede leer ni cambiar el token. `request` lo añade a cada petición y, ante un `401`, olvida el token y llama a `onUnauthorized`, que en una página mostraría el formulario de inicio de sesión. `logout` avisa al servidor con `POST /logout`, que invalida el token: aunque alguien lo hubiera copiado, ya no sirve.

```text
--- Paso 7: Cliente con sesión ---
Sesión de luis · isLoggedIn: true
Notas: [ 'Limpiar el filtro del arrecife' ]
Después de logout · isLoggedIn: false
El token viejo → 401
  (onUnauthorized: Falta el token; vuelve a pedir el inicio de sesión)
❌ 401: Falta el token

✅ Lab completado.
```

---

## Comprobación

1. En el paso 4, borra la nota 2 con el token de luis y después vuelve a borrarla. ¿Qué estado sale la segunda vez? ¿Por qué el servidor comprueba el rol antes que si la nota existe?
2. En el paso 7, haz `client.request('DELETE', '/notes/2')` después de `client.login('ana', 'coral')`. ¿Se llama a `onUnauthorized`? ¿Debería?
3. En el paso 6, cambia `tokenTtlMs: 100` por `tokenTtlMs: 1000`. ¿Qué imprime ahora la última línea del paso? ¿Qué valor da `expiresIn`?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 02 — Paginación, filtros y orden](../lab-02-paginacion/README.md) | [Lab 04 — Estados de carga](../lab-04-estados-carga/README.md) → |

[↑ Semana 16](../../README.md)
