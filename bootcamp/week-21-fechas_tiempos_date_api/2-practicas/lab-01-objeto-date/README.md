# Lab 01 — El objeto Date

## Objetivo

Crear fechas de las cuatro formas, leer sus componentes en hora local y en UTC, caer en la trampa de la fecha sin hora, detectar fechas inválidas y desbordadas, y copiar, comparar y guardar un `Date` en JSON.

**Tiempo:** 50 min · **Teoría:** [01 - El objeto Date](../../1-teoria/01-objeto-date.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 6 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-21-fechas_tiempos_date_api/2-practicas/lab-01-objeto-date
node starter/index.js
```

La primera línea del archivo es `process.env.TZ = 'America/Bogota'`:

- **Qué:** fija la zona horaria del proceso de Node en la de Bogotá (UTC−5), antes de crear ninguna fecha.
- **Para qué:** las horas locales dependen de la zona del equipo. Con la zona fija, tu salida coincide con la del README, estés donde estés.
- **Impacto:** solo afecta a este proceso, no a tu sistema. Al terminar, bórrala y ejecuta otra vez: las líneas en hora local cambiarán si tu zona no es UTC−5, y las de UTC (las que acaban en `Z`) no.

Las salidas de este README se obtuvieron con Node 24.19.0.

---

## Paso 1: Un Date es un instante

`getTime()` es el número que guarda el `Date`: milisegundos desde el epoch. `toISOString()` lo escribe en UTC. `new Date()` y `Date.now()` dependen del momento en que ejecutes, así que el paso solo comprueba su tipo y su año.

```text
--- Paso 1: Un instante ---
  getTime(): 1774657800000
  toISOString(): 2026-03-28T00:30:00.000Z
  epoch: 1970-01-01T00:00:00.000Z
  ¿Date.now() es un número? true
  ¿new Date() es de este siglo? true
```

Las 19:30 de Bogotá del 27 son las 00:30 UTC del 28: el mismo instante, leído en dos zonas.

## Paso 2: Cuatro formas de crear un Date

Un timestamp, un texto ISO sin zona, componentes (con el mes desde 0) y dos textos ISO con zona. `Object.entries` recorre las cinco fechas con su nombre.

```text
--- Paso 2: Crear fechas ---
  fromTimestamp  2026-03-28T00:30:00.000Z
  fromIso        2026-03-28T00:30:00.000Z
  fromParts      2026-03-28T00:30:00.000Z
  fromUtc        2026-03-27T19:30:00.000Z
  fromMadrid     2026-03-27T18:30:00.000Z
  ¿fromIso y fromParts son el mismo instante? true
```

Las tres primeras son el mismo instante. `fromUtc` lleva `Z` y `fromMadrid`, `+01:00`: el texto dice en qué zona está la hora, así que la zona del equipo no influye.

## Paso 3: Leer los componentes

`DAYS[session.getDay()]` traduce el número del día de la semana a su nombre (la [teoría 02](../../1-teoria/02-formatear-intl.md) lo hace sin array, con `Intl`).

```text
--- Paso 3: Componentes ---
  getFullYear: 2026
  getMonth: 2 → mes 3
  getDate: 27
  getDay: 5 → viernes
  getHours:getMinutes: 19:30
  En UTC: día 28 a las 0
```

`getMonth()` da 2 para marzo. `getMinutes()` da un número: si fueran las 19:05 verías `19:5`. La teoría 02 resuelve eso con `padStart`.

## Paso 4: La trampa de la fecha sin hora

El texto que da un `<input type="date">`, leído de dos formas:

```text
--- Paso 4: Fecha sin hora ---
  new Date(texto): 2026-03-27T00:00:00.000Z → getDate() 26
  con T00:00:      2026-03-27T05:00:00.000Z → getDate() 27
```

Sin hora, el texto es la medianoche **UTC**, que en Bogotá es el 26 a las 19:00. Con `T00:00`, es la medianoche **local**.

## Paso 5: Fechas inválidas y desbordadas

`isValidDate` comprueba que el timestamp no sea `NaN`. El mes 13 no existe y el texto da una fecha inválida; con componentes, en cambio, el 30 de febrero y el mes 12 se desbordan sin avisar.

```text
--- Paso 5: Inválidas y desbordadas ---
  "2026-03-27T19:30" → 2026-03-28T00:30:00.000Z
  "27/03/2026" → Invalid Date
  "mañana" → Invalid Date
  "2026-13-01" → Invalid Date
  30 de febrero → 2 del mes 3
  mes 12 → 2027 mes 1
  toISOString de una fecha inválida: RangeError: Invalid time value
```

`'27/03/2026'` da `Invalid Date` en Node; otros motores lo leen como el 3 de un mes 27 o lo rechazan. Por eso solo se usa el formato ISO.

## Paso 6: Copiar, comparar y guardar

`alias` no es una copia: apunta al mismo objeto que `start`. `copy` sí lo es.

```text
--- Paso 6: Copiar, comparar y guardar ---
  start: 19:45 · copy: 21:30
  start === same: false · getTime iguales: true
  start < copy: true
  JSON: {"title":"Noche de estrellas","start":"2026-03-28T00:45:00.000Z"}
  typeof restored.start: string
  ¿mismo instante? true

✅ Lab completado.
```

- `alias.setMinutes(45)` cambió `start`: los dos nombres son el mismo `Date`.
- `copy.setHours(21)` no tocó `start`; la copia se hizo antes del cambio de minutos, por eso conserva las 19:30 de origen y queda en 21:30.
- `===` compara objetos; `getTime()`, instantes. `<` sí compara instantes.
- `JSON.parse` devuelve el texto ISO: hay que volver a crear el `Date`.

---

## Comprobación

1. Borra la línea `process.env.TZ` y ejecuta. ¿Qué líneas cambian y cuáles no? ¿Por qué `fromUtc` es igual en cualquier zona?
2. En el paso 4, cambia la zona a `'Asia/Tokyo'` (UTC+9). ¿Qué da ahora `getDate()` en las dos líneas? ¿En qué zonas no se nota la trampa?
3. Escribe una función `isRealDate(year, month, day)`, con el mes de 1 a 12, que devuelva `false` para el 30 de febrero de 2026 y `true` para el 29 de febrero de 2028. Pista: crea el `Date` y comprueba que el día y el mes no cambiaron.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Índice de labs](../README.md) | [Lab 02 — Formatear fechas con Intl](../lab-02-formatear-intl/README.md) → |

[↑ Semana 21](../../README.md)
