# Proyecto Semana 21 — Agenda de actividades

## Descripción

La agenda de las actividades de tu dominio: las sesiones de un planetario, las visitas guiadas de un museo... Un calendario mensual marca los días con actividades y el día de hoy. Debajo, cada actividad del mes aparece con su fecha completa, su hora, cuánto falta («mañana», «dentro de 4 días») y su estado: terminada, en curso, pronto o próxima. Un selector muestra las horas en otra zona horaria, y un formulario añade actividades nuevas y rechaza las fechas que no existen.

La página, el servidor y `main.js` ya están hechos. Tu trabajo es escribir las funciones de fechas de `src/logic.js` y describir en `src/data.js` la agenda de tu dominio.

**Tiempo:** 2 h.

## Punto de partida

```bash
mkdir -p ~/js-proyecto-semana-21
cp -r bootcamp/week-21-fechas_tiempos_date_api/3-proyecto/starter/. ~/js-proyecto-semana-21/
cd ~/js-proyecto-semana-21
```

Ejecuta el `cp` desde la carpeta del bootcamp. Quedan estos archivos:

| Archivo | Qué contiene | ¿Lo editas? |
|---|---|---|
| `server.js` | Un servidor de archivos: sirve la página por `http://` | No |
| `index.html` | El calendario vacío, el selector de zona, la lista y el formulario; carga `src/main.js` | No |
| `styles.css` | Los estilos | Si quieres |
| `src/data.js` | El título, el locale, las zonas del selector y las actividades | Sí: paso 2 |
| `src/logic.js` | Ocho funciones con `TODO` | Sí: es el proyecto |
| `src/main.js` | Lee «ahora», pinta el calendario y la lista, y atiende los botones, el selector y el formulario | No, pero léelo |

- **Qué:** `logic.js` lee fechas (`parseLocal`), calcula con ellas (`toDateKey`, `addDays`, `daysBetween`, `monthGrid`, `getStatus`) y prepara los textos (`relativeLabel`, `formatWhen`). Ninguna función usa el DOM **ni la hora actual**: «ahora» llega como parámetro `now`.
- **Para qué:** una función que lee el reloj da un resultado distinto cada vez y no se puede probar. Con `now` como parámetro, la misma llamada da siempre lo mismo, y la página puede simular cualquier fecha con `?hoy=` (paso 10).
- **Impacto:** `scripts/verificar-semana.sh` prueba cada función con Node en varias zonas horarias, también en la de Madrid el día del cambio de hora. Más detalles en [docs/autograding.md](../../../docs/autograding.md).

Lee `src/main.js` mientras trabajas, porque aplica la teoría de la semana:

- `readNow` usa la hora real o la de `?hoy=AAAA-MM-DDTHH:mm`, leída con tu `parseLocal`.
- La cabecera de los días de la semana sale de `Intl` con una semana cualquiera que empieza en lunes, así que cambia con el locale ([teoría 02](../1-teoria/02-formatear-intl.md#2-intldatetimeformat-un-formateador-con-opciones)).
- `Object.groupBy` cuenta las actividades de cada día por su clave `AAAA-MM-DD`, y la lista se ordena con `toSorted((a, b) => startOf(a) - startOf(b))` ([teoría 03](../1-teoria/03-operaciones.md#5-ordenar-filtrar-y-comparar)).
- Cada hora va en un `<time>` con `dateTime` en ISO, el texto para máquinas, y el texto de `formatWhen` para personas.
- El selector de zona solo cambia cómo se **muestran** las horas; el estado y el «dentro de» no cambian, porque el instante es el mismo ([teoría 04](../1-teoria/04-zonas-horarias-temporal.md#4-la-regla-de-las-tres-capas)).

Los comandos de los pasos 3 a 9 empiezan con `process.env.TZ = 'America/Bogota'` para que tu salida coincida con la del README. Las salidas se obtuvieron con Node 24.19.0.

---

## Paso 1: arrancar el servidor y ver la página (5 min)

```bash
node server.js
```

```text
🚀 Página en http://localhost:3000 (Ctrl+C para pararlo)
```

**Qué:** `server.js` sirve los archivos de la carpeta. **Para qué:** `index.html` carga `src/main.js` como módulo, y el navegador no carga módulos desde un archivo abierto con doble clic. **Impacto:** abre siempre `http://localhost:3000`, no el archivo.

Con el starter solo se ven el título, la introducción y el formulario vacío. La consola de las DevTools muestra `Uncaught TypeError: Cannot read properties of undefined (reading 'day')`: `formatWhen` todavía devuelve `undefined` y `main.js` intenta leer su `day`.

Deja el servidor abierto y usa otra terminal, en la misma carpeta, para los comandos de los pasos 3 a 9. El servidor lee los archivos en cada petición: basta con recargar la página.

## Paso 2: tus datos (15 min)

Abre `src/data.js` y describe la agenda de tu dominio:

- `APP`: `title`, `intro` (una frase), `locale` (el de tu público, como `'es-CO'`, `'es-MX'` o `'es-ES'`) y `zones`, de 1 a 4 zonas IANA para el selector (por ejemplo, las ciudades desde donde siguen tus actividades en línea).
- `EVENTS`: de 6 a 20 actividades. Cada una con `id` (sin repetir), `title`, `place`, `date` (`'AAAA-MM-DD'`), `time` (`'HH:mm'`, con ceros: `'09:00'`) y `minutes` (un entero de 15 a 600).
- Reparte las actividades en al menos dos meses y pon dos o más el mismo día. Las fechas y horas tienen que existir: nada de 30 de febrero ni `24:00`.

```js
{ id: 'noche', title: 'Noche de estrellas', date: '2026-03-27', time: '19:30', minutes: 90, place: 'Cúpula' },
```

Las fechas se guardan como texto, no como `Date`: son fechas de calendario, y como texto `AAAA-MM-DD` se leen, se comparan y se agrupan sin depender de la zona ([teoría 04](../1-teoria/04-zonas-horarias-temporal.md#1-instantes-y-fechas-de-calendario)).

## Paso 3: `parseLocal` (15 min)

`parseLocal(dateText, timeText)` convierte los textos de una actividad, o de un `<input type="date">` y un `<input type="time">`, en un `Date` local. Devuelve `null` si el formato no es exactamente `AAAA-MM-DD` y `HH:mm`, o si la fecha u hora no existe. Es la función de la [teoría 03](../1-teoria/03-operaciones.md#1-leer-una-fecha-local) más una comprobación del formato con dos expresiones regulares ([semana 6](../../week-06-strings_regexp_modernos/README.md)).

```bash
node --input-type=module -e "process.env.TZ = 'America/Bogota'; import { parseLocal } from './src/logic.js'; for (const [date, time] of [['2026-03-27', '19:30'], ['2026-03-27'], ['2026-02-30', '10:00'], ['2026-03-27', '24:00'], ['27/03/2026', '10:00']]) console.log(date, time ?? '(sin hora)', '→', String(parseLocal(date, time)));"
```

```text
2026-03-27 19:30 → Fri Mar 27 2026 19:30:00 GMT-0500 (Colombia Standard Time)
2026-03-27 (sin hora) → Fri Mar 27 2026 00:00:00 GMT-0500 (Colombia Standard Time)
2026-02-30 10:00 → null
2026-03-27 24:00 → null
27/03/2026 10:00 → null
```

Las comprobaciones también la prueban en Madrid: el 29 de marzo de 2026 a las 02:30 no existe allí y tiene que dar `null`.

## Paso 4: `toDateKey` y `addDays` (10 min)

`toDateKey(date)` es la clave `AAAA-MM-DD` del día **local**, con `padStart` ([teoría 02](../1-teoria/02-formatear-intl.md#5-texto-para-personas-texto-para-máquinas)). `addDays(date, days)` devuelve un `Date` nuevo con `setDate` sobre una copia ([teoría 03](../1-teoria/03-operaciones.md#2-sumar-días-y-meses)).

```bash
node --input-type=module -e "process.env.TZ = 'America/Bogota'; import { toDateKey, addDays } from './src/logic.js'; const start = new Date(2026, 2, 27, 19, 30); console.log(toDateKey(start), toDateKey(addDays(start, 7)), toDateKey(addDays(start, -30))); console.log(start.toISOString().slice(0, 10), start.getDate());"
```

```text
2026-03-27 2026-04-03 2026-02-25
2026-03-28 27
```

La segunda línea es la trampa: `toISOString().slice(0, 10)` da el día en UTC. `start` sigue en el 27, porque `addDays` no lo cambia.

## Paso 5: `daysBetween` (10 min)

`daysBetween(from, to)` cuenta días de calendario: compara los inicios de los dos días y redondea, para que el cambio de hora no lo estropee ([teoría 03](../1-teoria/03-operaciones.md#4-el-horario-de-verano)).

```bash
node --input-type=module -e "process.env.TZ = 'America/Bogota'; import { daysBetween } from './src/logic.js'; const now = new Date(2026, 2, 27, 21, 0); for (const target of [new Date(2026, 2, 27, 23, 0), new Date(2026, 2, 28, 8, 0), new Date(2026, 2, 30, 8, 0), new Date(2026, 2, 20, 10, 0)]) console.log(target.toLocaleString('es-CO'), '→', daysBetween(now, target));"
```

```text
27/3/2026, 11:00:00 p. m. → 0
28/3/2026, 8:00:00 a. m. → 1
30/3/2026, 8:00:00 a. m. → 3
20/3/2026, 10:00:00 a. m. → -7
```

## Paso 6: `monthGrid` (15 min)

`monthGrid(year, monthIndex)` devuelve la cuadrícula de un mes, con `monthIndex` de 0 a 11 como en `Date`: un array de semanas, cada una con 7 elementos, de lunes a domingo. Cada elemento es el número del día o `null` en los huecos de antes del 1 y de después del último día. La última semana también se rellena con `null` hasta 7. Usa el desplazamiento `(getDay() + 6) % 7` y el día 0 del mes siguiente ([teoría 03](../1-teoria/03-operaciones.md#6-duraciones-intervalos-y-meses)), como `printMonth` del [lab 03](../2-practicas/lab-03-operaciones/README.md#paso-6-un-mes-en-la-terminal).

```bash
node --input-type=module -e "import { monthGrid } from './src/logic.js'; for (const week of monthGrid(2026, 2)) console.log(week.map((day) => String(day ?? '·').padStart(2)).join(' '));"
```

```text
 ·  ·  ·  ·  ·  ·  1
 2  3  4  5  6  7  8
 9 10 11 12 13 14 15
16 17 18 19 20 21 22
23 24 25 26 27 28 29
30 31  ·  ·  ·  ·  ·
```

El comando escribe `·` donde hay `null`. Febrero de 2027 empieza en lunes y tiene 28 días: exactamente 4 semanas.

## Paso 7: `getStatus` (10 min)

`getStatus(event, now)` devuelve el estado de una actividad en el instante `now`. El inicio sale de `parseLocal(event.date, event.time)` y el final, de sumarle `event.minutes` en milisegundos:

| Estado | Cuándo |
|---|---|
| `'past'` | `now` es igual o posterior al final |
| `'ongoing'` | `now` es igual o posterior al inicio (y anterior al final) |
| `'soon'` | Empieza dentro de 24 horas o menos |
| `'upcoming'` | Empieza dentro de más de 24 horas |

```bash
node --input-type=module -e "process.env.TZ = 'America/Bogota'; import { getStatus } from './src/logic.js'; import { EVENTS } from './src/data.js'; const now = new Date(2026, 2, 27, 20, 0); for (const event of EVENTS.slice(0, 6)) console.log(event.date, event.time, event.title.padEnd(24), getStatus(event, now));"
```

```text
2026-03-05 18:00 Constelaciones de marzo  past
2026-03-27 11:00 Cuentos bajo la cúpula   past
2026-03-27 19:30 Noche de estrellas       ongoing
2026-03-28 10:00 La Luna de cerca         soon
2026-03-31 20:00 Observación de Júpiter   upcoming
2026-04-02 18:00 Planetas gigantes        upcoming
```

La salida es la de los datos de ejemplo; con los tuyos, cambia. El inicio cuenta como «en curso» y el final como «terminada», igual que en el [lab 03](../2-practicas/lab-03-operaciones/README.md#paso-5-ordenar-filtrar-y-comparar).

## Paso 8: `relativeLabel` (15 min)

`relativeLabel(date, now, locale)` escribe cuánto falta o cuánto hace con `Intl.RelativeTimeFormat(locale, { numeric: 'auto' })` ([teoría 02](../1-teoria/02-formatear-intl.md#4-intlrelativetimeformat-mañana-hace-2-horas)). Tú eliges la unidad:

1. Calcula los minutos con `Math.round((date - now) / MINUTE)`. Si su valor absoluto es menor que 60, escribe minutos.
2. Si no, las horas son `Math.round(minutos / 60)`. Si su valor absoluto es menor que 24, escribe horas.
3. Si no, escribe los días de calendario de `daysBetween(now, date)`.

```bash
node --input-type=module -e "process.env.TZ = 'America/Bogota'; import { relativeLabel, parseLocal } from './src/logic.js'; import { EVENTS } from './src/data.js'; const now = new Date(2026, 2, 27, 20, 0); for (const event of EVENTS) console.log(event.title.padEnd(24), relativeLabel(parseLocal(event.date, event.time), now, 'es'));"
```

```text
Constelaciones de marzo  hace 22 días
Cuentos bajo la cúpula   hace 9 horas
Noche de estrellas       hace 30 minutos
La Luna de cerca         dentro de 14 horas
Observación de Júpiter   dentro de 4 días
Planetas gigantes        dentro de 6 días
Charla: ¿vida en Marte?  dentro de 19 días
Lluvia de estrellas      dentro de 43 días
```

«La Luna de cerca» empieza mañana, pero a menos de 24 horas: sale en horas. Un evento de pasado mañana a las 21:00 diría `pasado mañana`.

## Paso 9: `formatWhen` (10 min)

`formatWhen(date, locale, timeZone)` devuelve los tres textos de la tarjeta, cada uno con su `Intl.DateTimeFormat` y la zona `timeZone` (si es `undefined`, la del equipo): `day` con `dateStyle: 'full'`, `time` con `timeStyle: 'short'` y `offset`, la pieza `timeZoneName` de `formatToParts` con `timeZoneName: 'shortOffset'` ([teoría 04](../1-teoria/04-zonas-horarias-temporal.md#3-el-desfase-cambia-con-la-fecha)).

```bash
node --input-type=module -e "process.env.TZ = 'America/Bogota'; import { formatWhen } from './src/logic.js'; const date = new Date(2026, 2, 27, 19, 30); console.log(formatWhen(date, 'es-CO')); console.log(formatWhen(date, 'es-ES', 'Europe/Madrid')); console.log(formatWhen(date, 'en-US', 'Asia/Tokyo'));"
```

```text
{
  day: 'viernes, 27 de marzo de 2026',
  time: '7:30 p. m.',
  offset: 'GMT-5'
}
{ day: 'sábado, 28 de marzo de 2026', time: '1:30', offset: 'GMT+1' }
{ day: 'Saturday, March 28, 2026', time: '9:30 AM', offset: 'GMT+9' }
```

En Madrid y en Tokio ya es sábado: por eso la tarjeta muestra el día junto a la hora.

## Paso 10: probar la página y comprobar (15 min)

Abre `http://localhost:3000/?hoy=2026-03-27T20:00`. `main.js` toma esa fecha como «ahora». Con los datos de ejemplo:

1. Arriba dice `Hoy es viernes, 27 de marzo de 2026.` y el calendario muestra **Marzo de 2026**, con la semana de `lun` a `dom`, el 1 en la columna del domingo y el 27 recuadrado en amarillo.
2. Los días 5, 27, 28 y 31 son botones con el número de actividades debajo (el 27 tiene 2).
3. Debajo: `En los próximos 7 días: 3 actividades.` La lista tiene 5 actividades en orden, de «Constelaciones de marzo» (`Terminada`, `hace 22 días`) a «Observación de Júpiter» (`Próxima`, `dentro de 4 días`). «Noche de estrellas» está `En curso` y «La Luna de cerca», `Pronto`.
4. Cada actividad muestra la hora con el desfase de tu zona: `7:30 p. m. (GMT-5)` en Bogotá.
5. Elige **Europe/Madrid** en **Ver horas en**: «Noche de estrellas» pasa a `sábado, 28 de marzo de 2026 · 1:30 a. m. (GMT+1)` y «Observación de Júpiter», a `miércoles, 1 de abril de 2026 · 3:00 a. m. (GMT+2)`: Madrid ya tiene el horario de verano. El estado y el «hace» no cambian. Vuelve a elegir **Tu zona**.
6. Pulsa el 27: la lista muestra solo sus 2 actividades y el título dice `Actividades del viernes, 27 de marzo de 2026`. Púlsalo otra vez: vuelve el mes entero.
7. Pulsa **›**: **Abril de 2026**, con «Planetas gigantes» y «Charla: ¿vida en Marte?». Pulsa **›** otra vez: **Mayo de 2026**, con «Lluvia de estrellas». Una vez más: `No hay actividades este mes.`
8. Añade una actividad el 10 de junio de 2026 a las 18:00: el calendario salta a **Junio de 2026**, el 10 es un botón y la lista muestra solo esa actividad, `Próxima` y `dentro de 75 días`.
9. Abre `http://localhost:3000/` sin `?hoy=`: la agenda usa la fecha y la hora reales.

Si tu equipo está en una zona con horario de verano, prueba también el formulario con una hora que tu reloj se salta (en Madrid, el 29 de marzo de 2026 a las 02:30): aparece `Esa fecha u hora no existe en tu zona horaria.`

La consola de las DevTools no debe mostrar ningún error. Después, haz lo mismo con tus datos, con un `?hoy=` que caiga en uno de tus días con actividades.

Repasa `src/logic.js` antes de entregar: borra los `TODO` que queden y comprueba que no usas `var`. Desde la carpeta del bootcamp:

```bash
PROYECTO=~/js-proyecto-semana-21 ./scripts/verificar-semana.sh 21
# Semana 21 — Fechas y Tiempos (Date API)
#   ✅ src/data.js, src/logic.js y src/main.js son módulos ES válidos
#   ...
# 14/14 comprobaciones superadas.
```

Cada ❌ trae una pista con el paso que lo arregla.

---

## ✅ Requisitos verificables

Las comprobaciones de [`checks.json`](../checks.json):

| Comprobación | Qué pide |
|---|---|
| `sintaxis` | `src/data.js`, `src/logic.js` y `src/main.js` son módulos ES válidos |
| `sin-todo` | `src/logic.js` no tiene ningún `TODO` |
| `sin-var` | Ningún archivo de `src/` usa `var` |
| `datos-exports` | `data.js` exporta `APP` (`title`, `intro`, un `locale` válido y de 1 a 4 `zones` IANA válidas) y de 6 a 20 `EVENTS` con `id` sin repetir, `title`, `place`, `date` `AAAA-MM-DD` y `time` `HH:mm` que existen, y `minutes` entero de 15 a 600, en al menos 2 meses y con algún día de 2 o más actividades |
| `datos-dominio` | El título y las actividades no son los del ejemplo Planetario |
| `leer` | `parseLocal` convierte `'AAAA-MM-DD'` y `'HH:mm'` (por defecto `'00:00'`) en un `Date` local y devuelve `null` si el formato no es exacto o la fecha u hora no existe |
| `leer-verano` | `parseLocal` devuelve `null` para una hora que no existe por el cambio al horario de verano (Madrid, 29 de marzo de 2026 a las 02:30) |
| `clave` | `toDateKey` devuelve `'AAAA-MM-DD'` del día local, con ceros a la izquierda |
| `sumar` | `addDays` devuelve un `Date` nuevo `days` días de calendario después o antes, a la misma hora local, sin cambiar el original, también en el cambio de hora |
| `dias` | `daysBetween` cuenta días de calendario sin mirar la hora, negativos hacia el pasado y correctos con el cambio de hora |
| `calendario` | `monthGrid` devuelve las semanas del mes empezando en lunes, de 7 elementos cada una, con el número del día o `null` en los huecos |
| `estado` | `getStatus` devuelve `'past'` desde el final (inicio + `minutes`), `'ongoing'` desde el inicio, `'soon'` si empieza dentro de 24 horas o menos y `'upcoming'` si falta más |
| `relativo` | `relativeLabel` usa `RelativeTimeFormat` con `numeric: 'auto'`: minutos si faltan o pasaron menos de 60, horas si menos de 24 y si no días de calendario |
| `formato` | `formatWhen` devuelve `{ day, time, offset }` con `dateStyle: 'full'`, `timeStyle: 'short'` y la pieza `timeZoneName` de `shortOffset`, en el locale y la zona indicados (o la del equipo) |

Que los datos sean de tu dominio, que la página funcione y que el código se lea bien lo revisa el instructor con la [rúbrica](../rubrica-evaluacion.md).

## Entrega

La carpeta `~/js-proyecto-semana-21` con tus datos en `src/data.js` y `src/logic.js` completo, por el canal que indique el instructor.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 04 — Zonas horarias y Temporal](../2-practicas/lab-04-zonas-temporal/README.md) | [Rúbrica de evaluación](../rubrica-evaluacion.md) → |

[↑ Semana 21](../README.md)
