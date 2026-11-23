# Lab 02 — Formatear fechas con Intl

## Objetivo

Formatear la misma fecha en varios locales, comparar los estilos con los componentes sueltos, montar una tarjeta con `formatToParts`, escribir tiempos relativos y construir claves `AAAA-MM-DD` para ordenar y agrupar.

**Tiempo:** 50 min · **Teoría:** [02 - Formatear fechas con Intl](../../1-teoria/02-formatear-intl.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 6 pasos. En cada uno, descomenta el código del paso (`Ctrl+/` o `Cmd+/`) y ejecuta:

```bash
cd bootcamp/week-21-fechas_tiempos_date_api/2-practicas/lab-02-formatear-intl
node starter/index.js
```

Como en el [lab 01](../lab-01-objeto-date/README.md), la primera línea fija la zona de Bogotá. Todos los pasos usan `session`, el viernes 27 de marzo de 2026 a las 19:30. Las salidas se obtuvieron con Node 24.19.0, que trae los datos de idioma completos (ICU). Con otra versión de Node o en un navegador, algún separador o abreviatura puede cambiar: es lo esperado en un texto para personas.

---

## Paso 1: toLocaleDateString y compañía

```text
--- Paso 1: toLocale ---
  es-CO  27/3/2026 · 7:30:00 p. m.
  es-ES  27/3/2026 · 19:30:00
  es-MX  27/3/2026 · 7:30:00 p.m.
  en-US  3/27/2026 · 7:30:00 PM
  de-DE  27.3.2026 · 19:30:00
  ja-JP  2026/3/27 · 19:30:00
  Sin locale: 3/27/2026
```

La misma fecha, seis formas de escribirla. Colombia y México usan el reloj de 12 horas, con `p. m.` escrito distinto. La última línea depende de tu sistema: aquí no había ningún idioma configurado y Node usó `en-US`. Por eso se escribe siempre el locale.

## Paso 2: Estilos de fecha y hora

```text
--- Paso 2: dateStyle y timeStyle ---
  full   viernes, 27 de marzo de 2026 · 19:30:00 (hora estándar de Colombia)
  long   27 de marzo de 2026 · 19:30:00 GMT-5
  medium 27 mar 2026 · 19:30:00
  short  27/3/26 · 19:30
  es-CO long + short: 27 de marzo de 2026 a las 7:30 p. m.
```

`timeStyle: 'full'` y `'long'` añaden la zona. Con `'es-CO'`, la fecha y la hora se unen con «a las» y el reloj es de 12 horas: el locale decide las palabras de enlace.

## Paso 3: Componentes sueltos

`formats` reúne cinco combinaciones de opciones con un nombre: la etiqueta de una ficha, la cabecera de un calendario, dos relojes y una fecha numérica.

```text
--- Paso 3: Componentes ---
  chip     vie, 27 mar
  header   marzo de 2026
  clock24  19:30
  clock12  7:30 p. m.
  numeric  27/03/2026
  Mezclar estilo y componentes: TypeError
```

`'2-digit'` rellena con cero (`03`). Un estilo y un componente juntos lanzan `TypeError`: o uno o lo otro.

## Paso 4: formatToParts

`toCard` pide las piezas y las busca por su `type` con `find`, para poder colocarlas por separado en una tarjeta.

```text
--- Paso 4: formatToParts ---
  types: day literal month literal year
  es: { weekday: 'viernes', day: '27', month: 'mar' }
  en: { weekday: 'Friday', day: '27', month: 'Mar' }
```

La primera línea muestra los `type` de `'27 mar 2026'`: los `literal` son los espacios. En inglés el orden de las piezas cambia («Friday, Mar 27»), pero `toCard` las encuentra igual porque no depende de la posición.

## Paso 5: Tiempo relativo

```text
--- Paso 5: RelativeTimeFormat ---
  -2 días: anteayer         | hace 2 días
  -1 días: ayer             | hace 1 día
   0 días: hoy              | dentro de 0 días
   1 días: mañana           | dentro de 1 día
   2 días: pasado mañana    | dentro de 2 días
   7 días: dentro de 7 días | dentro de 7 días
   hace 3 horas · dentro de 45 minutos · la próxima semana
```

Con `numeric: 'auto'` (columna izquierda) salen las palabras que existen en español; sin él, siempre el número. `RelativeTimeFormat` no sabe qué hora es: escribe el número que le pasas.

## Paso 6: Texto para máquinas

`toDateKey` construye la clave con los componentes locales y `padStart`.

```text
--- Paso 6: Claves AAAA-MM-DD ---
  toDateKey: 2026-03-27 · toISOString().slice(0, 10): 2026-03-28
  claves ordenadas: [ '2026-03-27', '2026-03-27', '2026-10-02', '2026-11-15' ]
  textos ordenados: [ '15/11/2026', '2/10/2026', '27/3/2026', '27/3/2026' ]
  sesiones por día: 2026-10-02 (1), 2026-03-27 (2), 2026-11-15 (1)

✅ Lab completado.
```

- `toISOString().slice(0, 10)` da el 28: es el día en UTC, no el local.
- Las claves ordenadas como texto quedan en orden cronológico. Los textos de `toLocaleDateString`, no: `'15/11'` va antes que `'2/10'` porque `'1'` va antes que `'2'`.
- `Object.groupBy` ([semana 5](../../../week-05-arrays_avanzados/README.md)) agrupa las sesiones por día con la clave como nombre de grupo. Los grupos salen en el orden en que aparecen; para un calendario, ordena las claves.

---

## Comprobación

1. Añade `'ar-EG'` a la lista del paso 1. ¿Qué cifras usa? ¿Podrías ordenar o comparar ese texto?
2. En el paso 3, crea un formato `compact` que dé `27/03 19:30`. ¿Qué opciones necesitas? ¿Quién pone el espacio entre la fecha y la hora?
3. Escribe `relativeDays(days)` que use `auto` hasta 6 días en cualquier sentido y, a partir de 7, semanas redondeadas (`'dentro de 2 semanas'` para 14). ¿Qué devuelve para 10?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 01 — El objeto Date](../lab-01-objeto-date/README.md) | [Lab 03 — Operaciones con fechas](../lab-03-operaciones/README.md) → |

[↑ Semana 21](../../README.md)
