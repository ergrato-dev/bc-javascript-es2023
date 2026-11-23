# Rúbrica de Evaluación - Semana 24

## Evidencias y ponderación

| Tipo de evidencia | Ponderación | Descripción |
|---|---:|---|
| Conocimiento | 30% | Cómo encajan los conceptos de las semanas 13 a 23 en una aplicación asíncrona |
| Desempeño | 40% | Labs 01 y 02 ejecutados con Node y lab 03 en el navegador |
| Producto | 30% | Catálogo conectado: `src/logic.js` completo, catálogo del dominio asignado y página que funciona |

---

## Criterios por evidencia

## 1) Conocimiento (30%)

### Criterios

- Explica qué hace cada archivo del proyecto (`data.js`, `logic.js`, `main.js`, `server.js`), cuál usa el DOM y cuál se prueba con Node, y por qué `logic.js` recibe `fetchFn`, `storage` y `now` como argumentos.
- Sigue el camino de un evento (escribir en el buscador, guardar una ficha) desde el listener hasta la red, `reduce` y `render`.
- Explica por qué una respuesta vieja puede tapar a una nueva y cómo lo evitan un contador y `AbortController`; distingue `AbortError` de `TimeoutError`.
- Explica por qué `fetch` no rechaza con un 404 y qué hace `requestJson` con un 422.
- Describe los cinco estados de la lista y `savedAt`, qué enseña la página en cada uno y por qué no se vacía la lista mientras carga.
- Explica qué puede fallar al leer y al guardar la copia local, y para qué sirven la versión y la caducidad.
- Explica por qué se escapa todo texto ajeno, por qué los clics se escuchan en la lista y por qué la validación ocurre en la página y en el servidor.

### Niveles

- **Alto (27-30):** cada respuesta va con un ejemplo propio sacado de su proyecto, con el archivo y la función donde ocurre.
- **Medio (21-26):** comprende las piezas con una o dos confusiones menores (por ejemplo, cree que `fetch` rechaza con un 404, o no sabe por qué `load` conserva las fichas).
- **Bajo (<21):** no sabe qué archivo hace qué, ni seguir un evento hasta la pantalla.

---

## 2) Desempeño (40%)

### Criterios

- Lab 01: los 6 pasos con la salida del README; explica por qué en el paso 1 queda en pantalla la búsqueda vieja y por qué no se reintenta un 404.
- Lab 02: los 6 pasos con la salida del README; explica qué pierde un `Date` o un `Map` al pasar por JSON y por qué `save` no lanza cuando la cuota está llena.
- Lab 03: los 6 pasos en el navegador; explica por qué los listeners por botón dejan de funcionar al repintar y por qué el botón se reactiva en un `finally`.

En los tres labs la salida coincide con la del README (en el lab 03, salvo el aviso de la imagen que no existe, que cada navegador escribe a su manera).

### Niveles

- **Alto (36-40):** los tres labs completos y cada pregunta del apartado «Comprobación» respondida con sus palabras y, cuando lo pide, con el cambio probado.
- **Medio (28-35):** los tres labs completos, con alguna explicación copiada de la teoría o incompleta.
- **Bajo (<28):** labs sin terminar o con errores.

---

## 3) Producto (30%)

### Criterios

- `PROYECTO=... ./scripts/verificar-semana.sh 24` pasa las 14 comprobaciones.
- `APP`, `FIELDS` y `SEED` de `src/data.js` describen un catálogo creíble del dominio asignado: campos que alguien querría ver y buscar, reglas con sentido (obligatorios, longitudes, rangos de números reales) y fichas reales, no las del ejemplo.
- La página funciona servida con `node server.js`: las pruebas del paso 10 del proyecto dan el resultado descrito con su catálogo (páginas, búsqueda, errores del formulario, 409, crear, editar y borrar, copia local con la API lenta y bloqueada), se puede usar solo con el teclado y la consola no muestra errores de su código.
- Las funciones usan lo de la etapa donde corresponde: `requestJson` combina `timeout` y `signal` con `AbortSignal.any`, `reduce` no modifica el estado que recibe, `statusText` usa `Intl.RelativeTimeFormat`, `cardHtml` escapa todos los valores, `validate` devuelve los mismos mensajes que el servidor, `createCache` no lanza nunca, y ninguna función usa el DOM.

### Niveles

- **Alto (27-30):** 14/14, catálogo bien adaptado, página sin errores y funciones claras.
- **Medio (21-26):** 14/14 con un catálogo poco adaptado (campos genéricos, reglas sin sentido) o alguna prueba de la página que falla.
- **Bajo (<21):** menos de 14 comprobaciones, o el catálogo del ejemplo Planetario sin cambiar.

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
| ← [Proyecto — Catálogo conectado](3-proyecto/README.md) | [Recursos — ebooks](4-recursos/ebooks-free/README.md) → |

[↑ Semana 24](README.md)
