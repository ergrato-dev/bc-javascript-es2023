# Rúbrica de Evaluación - Semana 12

## Evidencias y ponderación

| Tipo de evidencia | Ponderación | Descripción |
|---|---:|---|
| Conocimiento | 30% | Cómo encajan en el proyecto las clases, los módulos, `Map`, `Set`, iteradores, generadores, métodos que no modifican y errores propios |
| Desempeño | 40% | Labs 01 a 04 descomentados y ejecutados |
| Producto | 30% | Gestor de colección: `src/logic.js` completo y datos del dominio asignado |

---

## Criterios por evidencia

## 1) Conocimiento (30%)

### Criterios

- Explica qué responsabilidad tiene cada archivo del proyecto y por qué `logic.js` no toca el DOM.
- Explica qué protege un campo privado y por qué `add` y `remove` son la única forma de cambiar la colección.
- Explica el patrón observer: qué guarda el `Set`, cuándo se llama a los suscriptores y para qué sirve la función que devuelve `subscribe`.
- Explica qué hace iterable a `Collection` y en qué se diferencia un generador de una función que devuelve un array.
- Dice qué semana enseña cada concepto que usa el proyecto, con un ejemplo propio.

### Niveles

- **Alto (27-30):** cada respuesta va con un ejemplo propio que se puede ejecutar.
- **Medio (21-26):** comprende los conceptos con una o dos confusiones menores (por ejemplo, entre `Map` y objeto, o entre `sort` y `toSorted`).
- **Bajo (<21):** no relaciona el proyecto con las semanas anteriores o no sabe explicar el flujo de un cambio hasta la página.

---

## 2) Desempeño (40%)

### Criterios

- Lab 01: los 6 pasos descomentados; explica por qué `JSON.stringify` no ve los campos privados y qué cambia `toJSON` en el paso 4.
- Lab 02: los 4 pasos; explica por qué un `Set` evita suscriptores duplicados y qué devuelve `subscribe` en el paso 3.
- Lab 03: los 5 pasos; explica la diferencia entre export con nombre y por defecto, y por qué `report.js` se evalúa entre `Antes` y `Después` en el paso 5.
- Lab 04: los 6 pasos; explica en qué orden recorre un `Map` y por qué cambiar el objeto que devuelve `get` cambia lo guardado (paso 6).

En todos, `node starter/index.js` termina sin errores y la salida coincide con la del README del lab.

### Niveles

- **Alto (36-40):** los cuatro labs completos y cada pregunta del apartado «Comprobación» respondida con sus palabras.
- **Medio (28-35):** los cuatro labs completos, con alguna explicación copiada de la teoría o incompleta.
- **Bajo (<28):** labs sin terminar o con errores al ejecutar.

---

## 3) Producto (30%)

### Criterios

- `PROYECTO=... ./scripts/verificar-semana.sh 12` pasa las 15 comprobaciones.
- `TITLE`, `ID_PREFIX`, `ROOMS` y las piezas de `src/data.js` describen el dominio asignado, con 5 a 12 piezas coherentes y valores creíbles.
- La página funciona servida con `pnpm dlx serve .`: añade piezas, explica los datos inválidos y pone el cursor en el campo, busca, filtra, ordena, pasa de página y borra, y la cabecera se actualiza sola, sin errores en la consola.
- El código se lee bien: nombres que dicen qué guardan, sin `TODO`, sin `var`, sin código comentado ni `console.log` de prueba, y cada función usa lo de su semana (`toSorted` y no `sort`, `Map` y `Set` donde guardan datos, `yield` en `paginate`).

### Niveles

- **Alto (27-30):** 15/15, datos propios del dominio, página sin errores y código limpio.
- **Medio (21-26):** 15/15 con datos poco adaptados (piezas de relleno), alguna acción de la página que falla o código difícil de seguir.
- **Bajo (<21):** menos de 15 comprobaciones, o datos del ejemplo Planetario sin cambiar.

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
| ← [Proyecto — Gestor de colección](3-proyecto/README.md) | [Recursos — ebooks](4-recursos/ebooks-free/README.md) → |

[↑ Semana 12](README.md)
