# Lab 03 — Operaciones con fechas

## Objetivo

Leer fechas de un formulario y rechazar las que no existen, sumar días y meses sin cambiar el original, contar días de calendario, ver qué pasa el día del cambio de hora en Madrid, trabajar con una lista de sesiones y dibujar un mes en la terminal.

**Tiempo:** 55 min · **Teoría:** [03 - Operaciones con fechas](../../1-teoria/03-operaciones.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 6 pasos. En cada uno, descomenta el código del paso (`Ctrl+/` o `Cmd+/`) y ejecuta:

```bash
cd bootcamp/week-21-fechas_tiempos_date_api/2-practicas/lab-03-operaciones
node starter/index.js
```

Los pasos van en orden: cada uno usa las funciones de los anteriores, así que descomenta del 1 en adelante. Arriba del archivo están la zona de Bogotá, la constante `DAY` (los milisegundos de 24 horas) y `show`, que escribe una fecha como `2026-03-27 19:30` en hora local (o `null`). Las salidas se obtuvieron con Node 24.19.0.

---

## Paso 1: Leer una fecha local

`parseLocal` convierte los textos de un `<input type="date">` y un `<input type="time">` en un `Date` local, o `null` si la fecha no existe.

```text
--- Paso 1: parseLocal ---
  2026-03-27 19:30 → 2026-03-27 19:30
  2026-03-27 (sin hora) → 2026-03-27 00:00
  2026-02-30 10:00 → null
  2028-02-29 10:00 → 2028-02-29 10:00
  2026-04-31 09:00 → null
  2026-03-27 24:00 → null
```

2028 es bisiesto, 2026 no. Abril tiene 30 días. `24:00` se desbordaría a las 00:00 del día siguiente: la hora deja de coincidir y la función lo rechaza.

## Paso 2: Sumar días y meses

```text
--- Paso 2: addDays y addMonths ---
  +1 día:   2026-03-28 19:30
  +7 días:  2026-04-03 19:30
  −30 días: 2026-02-25 19:30
  start sigue en: 2026-03-27 19:30
  31 ene + 1 mes: 2026-03-03 00:00
  31 mar + 1 mes: 2026-05-01 00:00
```

`setDate` pasa de mes y de año sola. `start` no cambia porque las dos funciones copian antes. Al sumar meses, los días que no existen (31 de febrero, 31 de abril) se desbordan al mes siguiente.

## Paso 3: Restar fechas

Desde las 21:00 del viernes 27, cuánto falta para cuatro momentos, en minutos, en horas y en días de calendario. `parseLocal(...target.split(' '))` separa el texto por el espacio y pasa la fecha y la hora como dos argumentos.

```text
--- Paso 3: Diferencias ---
  2026-03-27 22:15: 75 min · 1.3 h · 0 días de calendario
  2026-03-28 08:00: 660 min · 11.0 h · 1 días de calendario
  2026-03-30 08:00: 3540 min · 59.0 h · 3 días de calendario
  2026-03-20 10:00: -10740 min · -179.0 h · -7 días de calendario
```

El sábado a las 8:00 está a 11 horas, menos de un día de reloj, pero es «mañana»: 1 día de calendario. Las fechas pasadas dan números negativos.

## Paso 4: El horario de verano (Madrid)

El paso cambia la zona a Madrid, donde el 29 de marzo de 2026 dura 23 horas, y al final la devuelve a Bogotá.

```text
--- Paso 4: Horario de verano ---
  horas entre los dos mediodías: 23
  sábado + 24 h: 2026-03-29 13:00
  addDays(sábado, 1): 2026-03-29 12:00
  sábado → lunes: 1.9583333333333333 · floor: 1 · daysBetween: 2
  2026-03-29 02:30 → null
```

- Sumar 24 horas en milisegundos llega a las 13:00; `addDays` mantiene las 12:00.
- Entre los inicios del sábado y del lunes hay 47 horas, 1,96 «días». `Math.floor` diría 1; `daysBetween` redondea y dice 2.
- Las 2:30 de ese domingo no existen en Madrid, y `parseLocal` lo detecta.

## Paso 5: Ordenar, filtrar y comparar

Cuatro sesiones de un planetario con su inicio y su duración. `endOf` calcula cuándo termina cada una; `clock` es «ahora»: el viernes 27 a las 20:00.

```text
--- Paso 5: Una lista de sesiones ---
  ordenadas: Constelaciones · Noche de estrellas · La Luna · Planetas gigantes
  hoy: 2
  en curso: Noche de estrellas
  próxima: La Luna
  última que terminó: Constelaciones
  el array original sigue igual: Planetas gigantes
```

«Noche de estrellas» empezó a las 19:30 y dura 90 minutos: a las 20:00 está en curso. `toSorted` deja el array original como estaba, y `findLast` busca desde el final de la lista ordenada.

## Paso 6: Un mes en la terminal

`printMonth` calcula en qué columna cae el día 1 (con la semana empezando en lunes), rellena esas columnas vacías y marca con `*` los días con sesión.

```text
--- Paso 6: Calendario ---
  días de febrero 2026, febrero 2028: 28 29
  marzo de 2026
  lu ma mi ju vi sá do
                     1
   2  3  4  5  6  7  8
   9 10 11 12 13 14 15
  16 17 18 19 20 21 22
  23 24 25 26  *  * 29
  30 31

✅ Lab completado.
```

El 1 de marzo de 2026 es domingo: seis huecos antes. El 27 y el 28 tienen sesión. Es la cuadrícula que construye el proyecto de la semana con `monthGrid`.

---

## Comprobación

1. En el paso 3, cambia `Math.round` por `Math.floor` en `daysBetween` y ejecuta con la zona de Madrid y las fechas del paso 4. ¿Qué día de calendario cuenta mal?
2. Escribe `addMonthsClamped(date, months)` que, si el día no existe en el mes de destino, se quede en el último día (31 de enero + 1 mes = 28 de febrero). Pista: `daysInMonth` del paso 6 y `Math.min`.
3. En el paso 5, añade una sesión que empiece justo cuando termina «Noche de estrellas» (21:00). Con `clock` a las 21:00, ¿cuál está en curso? ¿Por qué el final se compara con `<` y no con `<=`?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 02 — Formatear fechas con Intl](../lab-02-formatear-intl/README.md) | [Lab 04 — Zonas horarias y Temporal](../lab-04-zonas-temporal/README.md) → |

[↑ Semana 21](../../README.md)
