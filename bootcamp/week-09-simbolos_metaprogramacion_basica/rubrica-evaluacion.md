# Rúbrica de Evaluación - Semana 09

## Evidencias y ponderación

| Tipo de evidencia | Ponderación | Descripción |
|---|---:|---|
| Conocimiento | 30% | `Symbol()`, registro global, claves simbólicas, well-known symbols e introspección con `Object.getOwnPropertySymbols` y `Reflect.ownKeys` |
| Desempeño | 40% | Labs 01 a 04 descomentados y ejecutados |
| Producto | 30% | Fichas con notas reservadas: `src/logic.js` completo y datos del dominio asignado |

---

## Criterios por evidencia

## 1) Conocimiento (30%)

### Criterios

- Explica por qué dos `Symbol('id')` son distintos y para qué sirve la descripción.
- Distingue `Symbol()` de `Symbol.for()` y dice cuándo conviene cada uno, y qué devuelve `Symbol.keyFor()` en cada caso.
- Explica qué métodos ignoran las claves simbólicas (`Object.keys`, `for...in`, `JSON.stringify`) y cuáles las encuentran (`Object.getOwnPropertySymbols`, `Reflect.ownKeys`, spread).
- Distingue una clave simbólica de un campo privado `#`: cuál oculta y cuál protege.
- Explica qué símbolo del lenguaje consulta JavaScript en `Object.prototype.toString`, en `+obj` o `` `${obj}` ``, en `for...of` y en `instanceof`, y qué `hint` recibe `Symbol.toPrimitive` en cada conversión.

### Niveles

- **Alto (27-30):** cada respuesta va con un ejemplo propio que se puede ejecutar.
- **Medio (21-26):** comprende los conceptos con una o dos confusiones menores (por ejemplo, entre oculto y privado).
- **Bajo (<21):** no distingue `Symbol()` de `Symbol.for()`, o cree que una clave simbólica no se puede leer desde fuera.

---

## 2) Desempeño (40%)

### Criterios

- Lab 01: los 7 pasos descomentados; explica por qué `user.ID` da `undefined` en el paso 3 y cómo el paso 5 encuentra las claves ocultas.
- Lab 02: los 8 pasos; explica por qué los dos «módulos» del paso 4 obtienen el mismo símbolo sin exportarlo y por qué conviene un prefijo en las claves del registro.
- Lab 03: los 6 pasos; explica qué `hint` recibe `toPrimitive` en cada línea del paso 2 y por qué `42 instanceof Numeric` da `true` en el paso 4.
- Lab 04: los 7 pasos; explica por qué el secreto del paso 2 no es privado, qué copian el spread y `Object.assign` en el paso 5 y por qué el JSON del paso 7 sale `{}`.

En todos, `node starter/index.js` termina sin errores y la salida coincide con la del README del lab.

### Niveles

- **Alto (36-40):** los cuatro labs completos y cada pregunta del apartado «Comprobación» respondida con sus palabras.
- **Medio (28-35):** los cuatro labs completos, con alguna explicación copiada de la teoría o incompleta.
- **Bajo (<28):** labs sin terminar o con errores al ejecutar.

---

## 3) Producto (30%)

### Criterios

- `PROYECTO=... ./scripts/verificar-semana.sh 09` pasa las 13 comprobaciones.
- `TITLE`, `ID_PREFIX` y las piezas de `src/data.js` describen el dominio asignado, con 5 a 12 piezas coherentes, valores creíbles y notas que tenga sentido reservar.
- La página funciona servida con `pnpm dlx serve .`: la casilla enseña y oculta las notas, la vista pública nunca las incluye, la cabecera suma el valor, los cuatro errores del formulario aparecen y desaparecen, una pieza nueva recibe el siguiente id y un id borrado no se reutiliza, sin errores en la consola.
- Las funciones usan lo de la semana donde corresponde: `NOTES` es un `Symbol()` local; `createPiece` guarda la nota con `[NOTES]` y define `Symbol.toStringTag` y `Symbol.toPrimitive`; `Piece` usa `Symbol.hasInstance`; `totalValue` suma las piezas sin leer `value`; `hiddenKeys` usa `Object.getOwnPropertySymbols`.

### Niveles

- **Alto (27-30):** 13/13, datos propios del dominio y página sin errores.
- **Medio (21-26):** 13/13 con datos poco adaptados (piezas de relleno, notas genéricas) o alguna acción de la página que falla.
- **Bajo (<21):** menos de 13 comprobaciones, o datos del ejemplo Planetario sin cambiar.

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
| ← [Proyecto — Fichas con notas reservadas](3-proyecto/README.md) | [Recursos — ebooks](4-recursos/ebooks-free/README.md) → |

[↑ Semana 09](README.md)
