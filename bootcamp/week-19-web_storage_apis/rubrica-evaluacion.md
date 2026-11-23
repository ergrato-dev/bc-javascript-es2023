# Rúbrica de Evaluación - Semana 19

## Evidencias y ponderación

| Tipo de evidencia | Ponderación | Descripción |
|---|---:|---|
| Conocimiento | 30% | Web Storage, serialización con JSON, IndexedDB, cuotas, errores y caducidad |
| Desempeño | 40% | Labs 01 a 04 descomentados y ejecutados en el navegador |
| Producto | 30% | Cuaderno persistente: `src/logic.js` completo y datos del dominio asignado |

---

## Criterios por evidencia

## 1) Conocimiento (30%)

### Criterios

- Guarda, lee y borra con `localStorage`, explica qué devuelve una clave que no existe y qué guarda `setItem` con un número, un booleano o un objeto.
- Elige entre `localStorage` y `sessionStorage` según cuánto debe durar un dato y quién debe verlo, y explica qué es el origen.
- Sincroniza dos pestañas con el evento `storage` y explica por qué la pestaña que cambia el dato no lo recibe.
- Explica qué pierde `JSON.stringify` (fechas, `Map`, `Set`, `undefined`, `NaN`) y cómo recuperarlo, y lee datos guardados con `try/catch`, validación y un valor por defecto.
- Explica para qué sirve guardar con una versión y cómo se migra un formato antiguo.
- Describe cuándo compensa IndexedDB, qué ocurre en `upgradeneeded` y qué pasa con las peticiones de una transacción cuando una falla.
- Captura `QuotaExceededError` por su `name` y explica qué hacer si el almacenamiento está bloqueado.

### Niveles

- **Alto (27-30):** cada respuesta va con un ejemplo propio que se puede ejecutar en la consola de una página.
- **Medio (21-26):** comprende los conceptos con una o dos confusiones menores (por ejemplo, cree que `sessionStorage` se borra al recargar, o que `JSON.parse` devuelve un `Date` para una fecha).
- **Bajo (<21):** guarda objetos sin `JSON.stringify` o no sabe por qué `'false'` cuenta como verdadero.

---

## 2) Desempeño (40%)

### Criterios

- Lab 01: los 6 pasos descomentados; compara `localStorage` y `sessionStorage` en dos pestañas y ve el evento `storage` en la primera.
- Lab 02: los 6 pasos; explica por qué `JSON.parse(null)` no falla y por qué la versión 1 se reconoce sin número de versión.
- Lab 03: los 6 pasos; explica por qué Perla no se guarda en el paso 5 aunque su `add` funcionó.
- Lab 04: los 6 pasos; explica por qué el paso 4 devuelve `{ ok: false }` y no lanza, y por qué `usage` sale 0 en el paso 6.

En todos, la consola muestra la misma salida que el README del lab (salvo los contadores de visitas y la cuota, que dependen de cada equipo), sin errores.

### Niveles

- **Alto (36-40):** los cuatro labs completos y cada pregunta del apartado «Comprobación» respondida con sus palabras.
- **Medio (28-35):** los cuatro labs completos, con alguna explicación copiada de la teoría o incompleta.
- **Bajo (<28):** labs sin terminar o con errores en la consola.

---

## 3) Producto (30%)

### Criterios

- `PROYECTO=... ./scripts/verificar-semana.sh 19` pasa las 15 comprobaciones.
- `APP`, `CATEGORIES` y `SEED` de `src/data.js` describen el dominio asignado: un prefijo propio, categorías que encajan con el dominio y de 4 a 12 entradas creíbles con fechas razonables.
- La página funciona servida con `node server.js`: las diez pruebas del paso 10 del proyecto dan el resultado descrito y la consola no muestra errores.
- Las funciones usan lo de la semana donde corresponde: `deserialize` se apoya en `migrate` e `isValidEntry` y no lanza nunca, `createStore` se apoya en `serialize` y `deserialize`, `save` distingue el error de cuota por su `name` y relanza los demás, y ninguna función usa `localStorage` directamente.

### Niveles

- **Alto (27-30):** 15/15, datos bien adaptados, página sin errores y funciones claras.
- **Medio (21-26):** 15/15 con datos poco adaptados (entradas de relleno, categorías genéricas) o alguna prueba de la página que falla.
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
| ← [Proyecto — Cuaderno persistente](3-proyecto/README.md) | [Recursos — ebooks](4-recursos/ebooks-free/README.md) → |

[↑ Semana 19](README.md)
