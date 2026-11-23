# Rúbrica de Evaluación - Semana 21

## Evidencias y ponderación

| Tipo de evidencia | Ponderación | Descripción |
|---|---:|---|
| Conocimiento | 30% | El objeto `Date`, formatear con `Intl`, operaciones con fechas, zonas horarias y `Temporal` |
| Desempeño | 40% | Labs 01 a 03 ejecutados con Node y lab 04 en el navegador |
| Producto | 30% | Agenda de actividades: `src/logic.js` completo y agenda del dominio asignado |

---

## Criterios por evidencia

## 1) Conocimiento (30%)

### Criterios

- Explica qué número guarda un `Date`, qué significa la `Z` de un texto ISO y por qué el mes empieza en 0.
- Explica por qué `new Date('2026-03-27')` puede caer en el día 26 y cómo se lee una fecha de formulario en hora local.
- Detecta fechas inválidas con `getTime()` y fechas desbordadas comprobando los componentes.
- Formatea con `Intl.DateTimeFormat` eligiendo locale, estilos o componentes, saca piezas con `formatToParts` y escribe tiempos relativos con `RelativeTimeFormat`.
- Distingue el texto para personas (`Intl`) del texto para máquinas (ISO en UTC y claves `AAAA-MM-DD` locales).
- Suma días con `setDate` sobre una copia y cuenta días de calendario sin que el horario de verano lo estropee.
- Distingue un instante de una fecha de calendario, guarda zonas por su nombre IANA y explica qué tipo de `Temporal` usaría en cada caso.

### Niveles

- **Alto (27-30):** cada respuesta va con un ejemplo propio que se puede ejecutar con Node o en la consola del navegador, con la zona escrita.
- **Medio (21-26):** comprende los conceptos con una o dos confusiones menores (por ejemplo, usa `toISOString().slice(0, 10)` como día local, o guarda un desfase en lugar de la zona).
- **Bajo (<21):** construye las fechas para mostrar a mano, suma días con `24 * 60 * 60 * 1000` o compara fechas con `===`.

---

## 2) Desempeño (40%)

### Criterios

- Lab 01: los 6 pasos descomentados; explica por qué `fromUtc` es igual en cualquier zona y por qué `alias.setMinutes` cambia `start`.
- Lab 02: los 6 pasos; explica por qué las claves `AAAA-MM-DD` se ordenan bien como texto y los textos de `toLocaleDateString` no.
- Lab 03: los 6 pasos; explica por qué sumar 24 horas en milisegundos no es sumar un día en Madrid el 29 de marzo de 2026.
- Lab 04: los 6 pasos en un navegador con `Temporal`; explica la diferencia entre `add({ days: 1 })` y `add({ hours: 24 })`.

En todos, la salida coincide con la del README del lab (salvo la zona propia del lab 04 y algún separador de `Intl` que dependa de la versión), sin errores.

### Niveles

- **Alto (36-40):** los cuatro labs completos y cada pregunta del apartado «Comprobación» respondida con sus palabras.
- **Medio (28-35):** los cuatro labs completos, con alguna explicación copiada de la teoría o incompleta.
- **Bajo (<28):** labs sin terminar o con errores.

---

## 3) Producto (30%)

### Criterios

- `PROYECTO=... ./scripts/verificar-semana.sh 21` pasa las 14 comprobaciones.
- `APP` y `EVENTS` de `src/data.js` describen una agenda creíble del dominio asignado: actividades que ese dominio organizaría, duraciones razonables, un locale adecuado a su público y zonas con sentido para quien sigue las actividades desde fuera.
- La página funciona servida con `node server.js`: las pruebas del paso 10 del proyecto dan el resultado descrito y la consola no muestra errores.
- Las funciones usan lo de la semana donde corresponde: `parseLocal` crea la fecha con componentes y comprueba que no cambiaron, `addDays` copia antes de `setDate`, `daysBetween` compara inicios de día y redondea, `relativeLabel` se apoya en `daysBetween`, `formatWhen` usa `formatToParts` para el desfase, y ninguna función lee la hora actual ni usa el DOM.

### Niveles

- **Alto (27-30):** 14/14, agenda bien adaptada, página sin errores y funciones claras.
- **Medio (21-26):** 14/14 con una agenda poco adaptada (actividades genéricas, duraciones sin sentido) o alguna prueba de la página que falla.
- **Bajo (<21):** menos de 14 comprobaciones, o la agenda del ejemplo Planetario sin cambiar.

---

## Calificación

| Evidencia | Peso | Mínimo para aprobar |
|---|---:|---:|
| Conocimiento | 30% | 21 |
| Desempeño | 40% | 28 |
| Producto | 30% | 21 |

La semana se aprueba con un 70% en total y el mínimo de cada evidencia.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Proyecto — Agenda de actividades](3-proyecto/README.md) | [Recursos — ebooks](4-recursos/ebooks-free/README.md) → |

[↑ Semana 21](README.md)
