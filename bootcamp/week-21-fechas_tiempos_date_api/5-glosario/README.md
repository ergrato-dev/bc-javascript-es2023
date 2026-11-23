# 📖 Glosario - Semana 21: Fechas y Tiempos (Date API)

Términos clave de esta semana ordenados alfabéticamente.

---

## C

### Clave AAAA-MM-DD
Texto con el año, el mes y el día de una fecha local, con ceros a la izquierda (`'2026-03-07'`). Sirve para agrupar por día y para ordenar como texto, porque ese orden coincide con el cronológico.

## D

### Desbordamiento
Lo que hace `Date` con un componente fuera de rango: lo pasa al mes o al año siguiente. `new Date(2026, 1, 30)` es el 2 de marzo. Sirve para sumar días con `setDate`, y obliga a comprobar los componentes para validar una fecha.

### Desfase (offset)
La diferencia entre una hora local y UTC, como `GMT-5` o `+01:00`. Cambia a lo largo del año en las zonas con horario de verano, por eso no se guarda en lugar de la zona.

### Día de calendario
Un día contado en el calendario, sin mirar la hora: del viernes a las 21:00 al sábado a las 8:00 hay 1 día de calendario, aunque pasen 11 horas.

## E

### Epoch
El origen de los timestamps: el 1 de enero de 1970 a las 00:00 UTC. `new Date(0)` es el epoch.

## F

### Fecha de calendario
Una fecha que es la misma en todas las zonas, como un cumpleaños o un festivo. Se guarda como texto `AAAA-MM-DD` o con `Temporal.PlainDate`.

### formatToParts
Método de `Intl.DateTimeFormat` que devuelve el texto formateado en piezas `{ type, value }` (`weekday`, `day`, `month`, `literal`...), para colocarlas por separado.

## H

### Horario de verano
Cambio de hora que hacen algunas zonas en primavera y en otoño. El día del cambio dura 23 o 25 horas, y hay horas locales que no existen o que se repiten.

## I

### IANA (base de datos de zonas)
La lista de zonas horarias del mundo, con sus nombres (`America/Bogota`, `Europe/Madrid`) y sus reglas a lo largo de la historia. La usan los navegadores, Node y los sistemas operativos.

### Instante
Un momento concreto, igual en todo el mundo aunque cada zona lo lea con otra hora. Un `Date` es siempre un instante.

### Intl.DateTimeFormat
Formateador de fechas para personas: recibe un locale y opciones, y su método `format` devuelve el texto.

### Intl.RelativeTimeFormat
Formateador de tiempos relativos: convierte un número y una unidad en «mañana», «hace 2 horas» o «dentro de 3 días». No calcula la diferencia.

### ISO 8601
El formato estándar de fechas en texto: `2026-03-27T19:30:00.000Z`. La `T` separa fecha y hora, y la `Z` indica UTC.

## L

### Locale
La etiqueta de idioma y región (`'es-CO'`, `'es-ES'`, `'en-US'`) que decide el orden, las palabras y el reloj de 12 o 24 horas de un texto de `Intl`.

## T

### Temporal
La API de fechas que se diseñó para sustituir a `Date`: tipos inmutables distintos para instantes (`Instant`), fechas de calendario (`PlainDate`), fechas con zona (`ZonedDateTime`) y duraciones (`Duration`). Ya está en Chrome, Edge y Firefox; Node 24 no la trae.

### Timestamp
El número que guarda un `Date`: milisegundos desde el epoch. Lo devuelven `getTime()` y `Date.now()`.

## U

### UTC
Tiempo Universal Coordinado: la hora de referencia mundial, sin horario de verano. Los métodos `getUTC...` y `toISOString()` leen el instante en UTC.

## Z

### Zona horaria
Una región que comparte la misma hora local y las mismas reglas de cambio de hora, identificada por un nombre IANA. Se indica a `Intl` con la opción `timeZone`.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Recursos — web](../4-recursos/webgrafia/README.md) | [📁 Semana 22: Trabajo con Archivos](../../week-22-trabajo_archivos/README.md) → |

[↑ Semana 21](../README.md)
