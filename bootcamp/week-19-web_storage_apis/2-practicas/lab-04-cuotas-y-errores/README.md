# Lab 04 — Cuotas, errores y caducidad

## Objetivo

Comprobar si el almacenamiento se puede usar, medir lo que ocupan tus claves, llenar `localStorage` hasta `QuotaExceededError`, guardar con una función que devuelve un resultado en lugar de romper la página, hacer que un dato caduque y consultar la cuota del origen con `navigator.storage`.

**Tiempo:** 50 min · **Teoría:** [04 - Cuotas, errores y caducidad](../../1-teoria/04-cuotas-y-errores.md)

## Cómo trabajar

[`starter/main.js`](starter/main.js) tiene 6 pasos dentro de la función `async` `main`. Arriba está `removeByPrefix`, que borra las claves que empiezan por un prefijo, y la página la usa al empezar para borrar todas las claves `lab19:`.

1. Abre `starter/index.html` en el navegador, por ejemplo con doble clic.
2. Abre la consola de las DevTools con `F12` (o `Cmd+Option+I` en macOS) y la pestaña **Application** → **Local storage**.
3. En cada paso, descomenta el código del paso (`Ctrl+/` o `Cmd+/`), guarda y recarga con `F5`.

Los pasos no dependen unos de otros, salvo el 4, que necesita el almacenamiento lleno que deja el paso 3. Las salidas de este README se obtuvieron en Chromium con todos los pasos descomentados.

---

## Paso 1: ¿Se puede usar el almacenamiento?

`canUse` recibe una función que devuelve el almacenamiento, escribe una clave de prueba y la borra. Si algo lanza un error (el acceso, `setItem` o `removeItem`), devuelve `false`. Recibir una función, y no el almacenamiento, permite capturar también el error que lanza el simple acceso a `localStorage` cuando la persona ha bloqueado los datos de los sitios. `blocked` simula ese caso.

```text
--- Paso 1: Comprobar antes de usar ---
localStorage: true
sessionStorage: true
  No disponible: SecurityError
Bloqueado: false
```

Si quieres ver el caso real, bloquea los datos de los sitios en la configuración del navegador y recarga: `localStorage: false`. Vuelve a permitirlos después.

## Paso 2: Cuánto ocupa lo que guardas

Cuenta la clave y el valor. `sizeOf` suma las longitudes de las claves que empiezan por el prefijo. JavaScript guarda el texto en UTF-16: cada carácter ocupa 2 bytes, y un emoji como 🐙 ocupa 2 caracteres.

```text
--- Paso 2: Medir ---
Caracteres (clave + valor): 83 · en UTF-16: 166 bytes
Longitud de «🐙»: 2
```

## Paso 3: Llenar hasta `QuotaExceededError`

El bucle guarda trozos de 256 Ki caracteres hasta que `setItem` lanza un error. Se comprueba que es de cuota con `error instanceof DOMException && error.name === 'QuotaExceededError'`: el `name` es igual en todos los navegadores; el mensaje, no.

```text
--- Paso 3: Hasta dónde cabe ---
QuotaExceededError · ¿es de cuota? true
Cupieron 4.75 Mi caracteres de relleno
```

En Chromium caben unos 5 Mi caracteres por origen, contando todas las claves. Otros navegadores dan otra cifra. Mira **Application**: las claves `lab19:fill:` llenan la lista.

## Paso 4: Un guardado que no rompe la página

`save` envuelve `setItem` en `try/catch`. Con un error de cuota devuelve `{ ok: false, reason: 'quota' }`; cualquier otro error lo relanza, porque no sabe tratarlo. Con el almacenamiento lleno del paso 3, la visita no cabe. Al borrar el relleno, sí.

```text
--- Paso 4: save con resultado ---
Con el almacenamiento lleno: {"ok":false,"reason":"quota"}
Tras liberar espacio: {"ok":true}
```

Quien llama a `save` decide qué hacer con el resultado: el proyecto de la semana avisa en la página y sigue con los datos en memoria.

## Paso 5: Datos que caducan

`setWithExpiry` guarda el valor junto a su hora de caducidad, `expiresAt`. `getWithExpiry` la compara con la hora que recibe: si ya pasó, borra la clave y devuelve `null`. La hora es un parámetro para poder probar con horas fijas: el horario se guarda a las 9:00 (UTC) y dura 2 horas.

```text
--- Paso 5: Caducidad ---
A las 10:00: ["10:00 alimentación","12:00 charla"]
A las 11:00: null
¿Sigue la clave? null
```

En una página real pasarías `Date.now()`.

## Paso 6: Lo que dice el navegador y la limpieza

`navigator.storage.estimate()` devuelve la cuota y el uso del origen en bytes. En Chromium, `usage` no cuenta Web Storage: por eso sale 0 aunque haya claves guardadas. `persisted()` dice si el navegador ha prometido no borrar los datos del origen cuando falte espacio. Al final se borran todas las claves `lab19:`.

```text
--- Paso 6: navigator.storage y limpiar ---
Cuota del origen: 10.0 GiB · en uso: 0 bytes
¿Persistente? false
Claves lab19 antes: 3
Claves lab19 después: 0

✅ Lab completado.
```

La cuota depende del disco de cada equipo, así que la tuya será otra.

---

## Comprobación

1. En el paso 3, cambia el trozo a `'ñ'.repeat(256 * 1024)`. ¿Caben los mismos caracteres? ¿Y con `'🐙'.repeat(...)`? Explica el resultado con lo que viste en el paso 2.
2. En el paso 4, lanza un error que no sea de cuota (por ejemplo, guardando `{ visits: 10n }`). ¿Qué hace `save`? ¿Por qué no devuelve `{ ok: false }`?
3. En el paso 5, ¿qué devuelve `getWithExpiry` exactamente a las 11:00:00.000? ¿Y un milisegundo antes?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 03 — IndexedDB](../lab-03-indexeddb/README.md) | [Proyecto — Cuaderno persistente](../../3-proyecto/README.md) → |

[↑ Semana 19](../../README.md)
