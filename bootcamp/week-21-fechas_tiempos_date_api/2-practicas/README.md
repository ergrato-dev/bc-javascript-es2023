# Prácticas — Semana 21

Cuatro labs guiados. Los tres primeros se ejecutan con Node: descomentas paso a paso `starter/index.js`, ejecutas `node starter/index.js` y comparas la salida con la del README. El cuarto es una página, porque usa `Temporal`, que Node 24 todavía no trae. Antes de ejecutar, intenta predecir qué saldrá. No se entregan; preparan el [proyecto de la semana](../3-proyecto/README.md).

| Lab | Tema | Duración |
|---|---|---|
| [Lab 01](lab-01-objeto-date/README.md) | Crear un `Date` de cuatro formas, componentes locales y UTC, la fecha sin hora, fechas inválidas y desbordadas, copiar, comparar y JSON | 50 min |
| [Lab 02](lab-02-formatear-intl/README.md) | `toLocaleDateString`, `Intl.DateTimeFormat` con estilos y componentes, `formatToParts`, `RelativeTimeFormat` y claves `AAAA-MM-DD` | 50 min |
| [Lab 03](lab-03-operaciones/README.md) | Leer fechas locales, sumar días y meses, días de calendario, el horario de verano, una lista de sesiones y un mes en la terminal | 55 min |
| [Lab 04](lab-04-zonas-temporal/README.md) | Un instante en varias zonas, desfases, guardar en UTC y mostrar en local, `Temporal.PlainDate`, `Temporal.ZonedDateTime` y un reloj mundial | 55 min |

**Total:** 3 h 30 min.

## Antes de empezar

Para los labs 01 a 03 necesitas Node en la versión de [docs/stack-versions.md](../../../docs/stack-versions.md); para el 04, Chrome, Edge o Firefox actuales con sus DevTools.

Las horas locales dependen de la zona horaria del equipo. Para que tu salida coincida con la del README, los labs de Node fijan la zona de Bogotá en su primera línea (`process.env.TZ`), y el lab 04 escribe la zona en cada formato. Al terminar cada lab, prueba a quitar la zona y mira qué cambia: es la mejor forma de entender qué depende de dónde se ejecuta el código.

Los textos de `Intl` (nombres de meses, separadores, `p. m.`) salen de los datos de idioma de Node o del navegador. Con otra versión puede cambiar alguna abreviatura o un espacio; los números y el orden de las fechas no.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Teoría — 🌍 Zonas horarias y Temporal](../1-teoria/04-zonas-horarias-temporal.md) | [Lab 01 — El objeto Date](lab-01-objeto-date/README.md) → |

[↑ Semana 21](../README.md)
