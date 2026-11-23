# Lab 02 — La copia local

## Objetivo

Guardar una copia de lo que trae la red para enseñar algo enseguida al volver a la página, y ver todo lo que puede salir mal: datos que JSON no devuelve igual, copias demasiado grandes, la red caída, el almacén lleno o bloqueado y copias de una versión anterior del código. Es el repaso de las semanas 19, 21 y 22 que necesita la copia local del proyecto.

**Tiempo:** 50 min · **Repaso:** [teoría 01](../../1-teoria/01-repaso-semanas-13-23.md#guardar-y-formatear-semanas-19-a-22) y [serialización (semana 19)](../../../week-19-web_storage_apis/1-teoria/02-serializacion.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 6 pasos. En cada uno, descomenta el código del paso (`Ctrl+/` o `Cmd+/`) y ejecuta:

```bash
cd bootcamp/week-24-proyecto_integrador_intermedio/2-practicas/lab-02-copia-local
node starter/index.js
```

Node no tiene `localStorage`, así que arriba del archivo están las ayudas:

- **`createStorage(limit)`** crea un almacén con los métodos de `localStorage` (`getItem`, `setItem`, `removeItem`) y un máximo de `limit` caracteres. Al pasarse, `setItem` lanza un `QuotaExceededError`, como el navegador.
- **`NOW`** es la hora «actual», siempre la misma (15 de enero de 2026, 10:00 UTC), para que la salida no cambie. `MINUTE` son los milisegundos de un minuto.
- **`PAGE`** son tres fichas de ejemplo.

Los pasos van en orden: el 4 usa la función `open` del 3, y el 5 usa el catálogo del 2. Las salidas se obtuvieron con Node 24.19.0, y deberían coincidir con las tuyas.

---

## Paso 1: Lo que JSON no devuelve igual

```text
--- Paso 1: Ida y vuelta por JSON ---
  savedAt: string 2026-01-15T10:00:00.000Z
  tags: {}
  items iguales: true
  savedAt como número: 1768471200000 → 2026-01-15T10:00:00.000Z
  tags como array: 2
```

`localStorage` solo guarda texto, así que todo pasa por `JSON.stringify` al guardar y por `JSON.parse` al leer ([semana 19](../../../week-19-web_storage_apis/README.md)). Un `Date` vuelve como **texto**, y un `Map` vuelve como un objeto **vacío**: sus datos se pierden sin ningún error. Los objetos y arrays de datos simples, como las fichas, vuelven iguales.

La solución más sencilla es guardar solo lo que JSON entiende: la fecha como milisegundos (`NOW`, un número que `new Date()` convierte de vuelta) y el `Map` como array de pares (`[...map]`, que `new Map()` reconstruye). Por eso la copia del proyecto guarda `savedAt` como número.

## Paso 2: Cuánto ocupa lo que guardas

```text
--- Paso 2: Una página o el catálogo entero ---
  una página (3 fichas): 172 caracteres, 173 bytes en UTF-8
  el catálogo (2000 fichas): 117821 caracteres, 119821 bytes en UTF-8
  «Orión»: 5 caracteres, 6 bytes
```

`json.length` cuenta caracteres; `new Blob([json]).size` cuenta los bytes que ocupa en UTF-8 ([semana 22](../../../week-22-trabajo_archivos/README.md)), donde una letra con tilde ocupa 2. Los navegadores limitan `localStorage` a unos 5 millones de caracteres por origen, para todas las claves juntas. 2000 fichas caben, pero cada vez que guardas, `JSON.stringify` recorre todo, y eso bloquea la página ([semana 23](../../../week-23-performance_optimizacion/README.md)).

Por eso el proyecto guarda solo la **primera página sin búsqueda**: es lo que la persona ve al abrir, y ocupa poco.

## Paso 3: Primero la copia, después la red

```text
--- Paso 3: Enseñar algo enseguida ---
  no hay copia: pinto «Cargando…»
  pinto la red: 4 fichas, y guardo la copia
  pinto la copia guardada hace 5 minutos: 3 fichas
  pinto la red: 4 fichas, y guardo la copia
  otros textos: este minuto · hace 1 minuto · hace 90 minutos
```

`open` lee la copia de forma síncrona y la pinta antes de pedir nada a la red. Cuando llega la respuesta, la pinta encima y guarda la copia nueva. En la primera visita no hay copia y se ve «Cargando…»; en la segunda, la persona ve las fichas al instante, con un aviso de cuándo se guardaron, mientras se actualizan.

`Intl.RelativeTimeFormat` ([semana 21](../../../week-21-fechas_tiempos_date_api/README.md)) escribe la edad de la copia. Fíjate en los otros textos: con `numeric: 'auto'`, cero minutos es «este minuto», y 90 minutos se queda en minutos porque `ago` solo usa esa unidad. `statusText` del proyecto lo resuelve de otra forma: «hace un momento» por debajo del minuto, y horas o días cuando toca.

## Paso 4: La red falla

```text
--- Paso 4: La red falla ---
  no hay copia: pinto «Cargando…»
  la red falla (fetch failed): solo puedo enseñar el error
  pinto la copia guardada hace 3 minutos: 3 fichas
  la red falla (fetch failed): la copia se queda en pantalla
```

Sin red y sin copia, la página solo puede enseñar el error. Con copia, la persona sigue viendo las fichas, con un aviso de que son de hace 3 minutos y de que la red ha fallado. Por eso el estado del proyecto **no borra** las fichas cuando llega un error: `reduce` con `failed` cambia `status` y `error`, y conserva lo demás.

## Paso 5: Cuando guardar falla

```text
--- Paso 5: Cuota llena y almacenamiento bloqueado ---
  3 fichas: guardada
  2000 fichas: no se guarda (QuotaExceededError), la página sigue
  sin almacén: no se guarda (TypeError), la página sigue
```

Guardar puede fallar: el almacén está lleno (`QuotaExceededError`), o no existe porque el navegador lo bloquea. En algunos navegadores, con las cookies bloqueadas, solo leer `localStorage` ya lanza un error ([semana 19](../../../week-19-web_storage_apis/1-teoria/04-cuotas-y-errores.md)). La copia es una ayuda, no una obligación: si no se puede guardar, la página sigue funcionando con la red. Por eso `createCache` del proyecto nunca lanza.

## Paso 6: Una copia de otra versión

```text
--- Paso 6: Los datos cambiaron de forma ---
  sin comprobar: TypeError: Cannot read properties of undefined (reading 'toUpperCase')
  con versión: null
  con versión 2: 3 fichas

✅ Lab completado.
```

La copia sobrevive a los cambios del código. Una versión anterior de la página guardó las fichas con `nombre`; el código nuevo lee `name` y se rompe al abrir la página, antes incluso de pedir nada a la red. Guardar un número de `version` junto a los datos permite reconocer una copia vieja y descartarla (o convertirla) en lugar de fiarse de ella. Una copia sin `version` también se descarta.

---

## Comprobación

1. En el paso 1, ¿qué devuelve `JSON.parse(JSON.stringify({ a: undefined, b: NaN }))`? Compruébalo y explica por qué importa al guardar fichas con campos vacíos. (El proyecto usa `null` para los vacíos.)
2. En el paso 3, cambia `ago` para que use horas cuando pasan de 60 minutos. ¿Qué escribe con 90 minutos? ¿Y con `numeric: 'always'`?
3. En el paso 5, ¿por qué no conviene que `save` enseñe un error a la persona cuando la copia no cabe? ¿Cuándo sí lo enseñarías?
4. En el paso 6, sube `VERSION` a 3 sin cambiar nada más. ¿Qué pasa con la copia de versión 2? ¿Cuándo subirías la versión en el proyecto?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 01 — Peticiones que se cruzan](../lab-01-peticiones-cruzadas/README.md) | [Lab 03 — Estados en la página](../lab-03-estados-pagina/README.md) → |

[↑ Semana 24](../../README.md)
