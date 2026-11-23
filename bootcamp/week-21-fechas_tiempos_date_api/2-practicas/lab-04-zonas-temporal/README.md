# Lab 04 — Zonas horarias y Temporal

## Objetivo

Mostrar un instante en varias zonas, leer desfases antes y después de un cambio de hora, aplicar la regla «guardar en UTC, mostrar en la zona de quien lee», repetir con `Temporal` las operaciones del lab 03 y montar un reloj mundial en la página.

**Tiempo:** 55 min · **Teoría:** [04 - Zonas horarias y Temporal](../../1-teoria/04-zonas-horarias-temporal.md)

## Cómo trabajar

Este lab es una página, porque `Temporal` existe en los navegadores actuales y Node 24 todavía no lo trae. [`starter/index.html`](starter/index.html) tiene una lista vacía para el reloj del paso 6, y [`starter/main.js`](starter/main.js), 6 pasos. Arriba están `launch`, el instante fijo del 28 de marzo de 2026 a las 00:30 UTC, y `ZONES`, cinco zonas.

1. Abre `starter/index.html` en el navegador, por ejemplo con doble clic.
2. Abre la consola de las DevTools con `F12` (o `Cmd+Option+I` en macOS).
3. En cada paso, descomenta el código del paso (`Ctrl+/` o `Cmd+/`), guarda y recarga con `F5`.

En el navegador no se puede fijar la zona como en Node. Por eso todos los pasos escriben la zona con la opción `timeZone`, y tu salida coincide con la del README estés donde estés. Solo cambian la primera línea del paso 1 (tu zona) y las horas del reloj del paso 6. Las salidas se obtuvieron en Chromium 156. Los pasos 4 y 5 necesitan Chrome, Edge o Firefox actuales: en un navegador sin `Temporal`, el paso 4 lo avisa y el 5 no escribe nada.

---

## Paso 1: Tu zona y el mismo instante en varias

`inZone` escribe el día de la semana, el día y la hora de un instante en la zona que le pases.

```text
--- Paso 1: Un instante, cinco zonas ---
  Tu zona: America/Bogota
  America/Bogota       vie 27, 19:30
  America/Mexico_City  vie 27, 18:30
  Europe/Madrid        sáb 28, 01:30
  Asia/Tokyo           sáb 28, 09:30
  UTC                  sáb 28, 00:30
  Zona inventada: RangeError
```

La primera línea es la zona de tu equipo; las cinco siguientes son iguales para todo el mundo. Con un instante fijo y una zona escrita, el resultado no depende de dónde se ejecute.

## Paso 2: El desfase depende de la fecha

`offsetOf` saca el desfase con `formatToParts` y `timeZoneName: 'shortOffset'`. Se pide en inglés (`'en'`) para que salga siempre como `GMT-5`. Cada columna es una fecha: 15 de enero, 28 y 29 de marzo y 15 de julio de 2026.

```text
--- Paso 2: Desfases ---
  America/Bogota    GMT-5  GMT-5  GMT-5  GMT-5
  Europe/Madrid     GMT+1  GMT+1  GMT+2  GMT+2
  America/New_York  GMT-5  GMT-4  GMT-4  GMT-4
```

Bogotá no cambia. Madrid pasa al horario de verano el 29 de marzo, y Nueva York ya lo había hecho el 8 de marzo: cada zona tiene sus reglas. Por eso se guarda el nombre de la zona, no un desfase.

## Paso 3: Guardar en UTC, mostrar en la zona de quien lee

Un eclipse retransmitido en directo desde Madrid, guardado como texto JSON con su instante en UTC y su zona de origen.

```text
--- Paso 3: Las tres capas ---
  Guardado: 2026-08-12T17:30:00.000Z
  En Europe/Madrid: 12 ago 2026, 19:30 (GMT+2)
  Quien lo ve en America/Bogota: 12 ago 2026, 12:30
  Quien lo ve en America/Mexico_City: 12 ago 2026, 11:30
```

Un solo dato guardado, tres textos. En una página real, la zona de quien lee sería la de su equipo, sin `timeZone`; aquí se escriben dos para ver la diferencia.

## Paso 4: Temporal con fechas de calendario

Las operaciones del [lab 03](../lab-03-operaciones/README.md), con `Temporal.PlainDate`.

```text
--- Paso 4: Temporal.PlainDate ---
  day: 2026-03-27 · mes 3 · día de la semana 5 · días del mes 31
  +5 días: 2026-04-01 · 31 ene + 1 mes: 2026-02-28
  días hasta el 2 de abril: 6
  ¿day cambió? 2026-03-27
  30 de febrero: RangeError
  ordenadas: 2026-03-05 2026-03-27 2026-10-02
```

- El mes empieza en 1 y `dayOfWeek` va de 1 (lunes) a 7 (domingo): el viernes es 5.
- Sumar un mes al 31 de enero da el 28 de febrero, y el 30 de febrero lanza un error en lugar de desbordarse.
- `add` no cambia `day`. `Temporal.PlainDate.compare` sirve directamente como función de orden de `toSorted`.

## Paso 5: Temporal con zonas

```text
--- Paso 5: Temporal.ZonedDateTime ---
  talk: 2026-03-27T19:30:00+01:00[Europe/Madrid]
  instante: 2026-03-27T18:30:00Z
  en Bogotá: 2026-03-27T13:30:00
  +1 día:   2026-03-29T12:00:00
  +24 h:    2026-03-29T13:00:00
  termina: 21:00:00 · PT1H30M = 90 min
  Date → Temporal: 2026-03-28T00:30:00Z
```

- `talk` son las 19:30 **de Madrid**, algo que `Date` no sabe crear si tu equipo está en otra zona.
- `withTimeZone` cambia la zona de lectura sin cambiar el instante, como `timeZone` en `Intl`.
- El día del cambio de hora, `days: 1` mantiene las 12:00 y `hours: 24` llega a las 13:00: la misma diferencia que `addDays` y sumar milisegundos en el lab 03.
- `toTemporalInstant()` convierte un `Date` en un `Temporal.Instant`.

## Paso 6: Un reloj mundial

El paso crea un elemento `<li>` por zona, con un `<time>`, y `tick` actualiza las cinco horas cada segundo con `setInterval`.

```text
--- Paso 6: Reloj mundial ---
  Relojes en la página: 5

✅ Lab completado.
```

En la página aparecen cinco filas, de `Bogota` a `UTC`, con el día de la semana y la hora de **este momento** en cada zona, por ejemplo `lun, 01:22:16`, y los segundos avanzan. Los nombres van sin tilde porque salen del nombre de la zona (`America/Bogota`). El atributo `dateTime` de cada `<time>` guarda el instante en ISO para los lectores de pantalla y los buscadores.

---

## Comprobación

1. Añade `'Asia/Kolkata'` y `'Australia/Adelaide'` a `ZONES` y al paso 2. ¿Qué tienen de raro sus desfases? ¿Por qué un desfase no se puede guardar como un número entero de horas?
2. En el paso 3, ¿qué verías si el servidor hubiera guardado `'2026-08-12T19:30'` sin zona ni `Z`, y la página lo leyera en Bogotá con `new Date`?
3. Con `Temporal`, escribe la hora de inicio en Bogotá de una charla que empieza a las 10:00 de Tokio el 1 de junio de 2026. Compruébalo con el paso 1: ¿cuántas horas hay de diferencia?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 03 — Operaciones con fechas](../lab-03-operaciones/README.md) | [Proyecto — Agenda de actividades](../../3-proyecto/README.md) → |

[↑ Semana 21](../../README.md)
