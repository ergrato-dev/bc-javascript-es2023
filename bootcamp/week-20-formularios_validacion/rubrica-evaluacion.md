# Rúbrica de Evaluación - Semana 20

## Evidencias y ponderación

| Tipo de evidencia | Ponderación | Descripción |
|---|---:|---|
| Conocimiento | 30% | Formularios y `FormData`, validación con atributos, la API de validación, validación propia y envío |
| Desempeño | 40% | Labs 01 a 04 descomentados y ejecutados en el navegador |
| Producto | 30% | Formulario de inscripción: `src/logic.js` completo y formulario del dominio asignado |

---

## Criterios por evidencia

## 1) Conocimiento (30%)

### Criterios

- Explica para qué sirven `name` y `<label>`, por qué `value` es siempre texto y cómo se lee una casilla.
- Atiende el envío con `submit` y `preventDefault()`, y explica la diferencia entre `requestSubmit()` y `submit()`.
- Explica qué entra en un `FormData` (casillas sin marcar, campos `disabled`, botones) y cuándo usar `getAll` en lugar de `get` u `Object.fromEntries`.
- Elige los atributos de validación adecuados para cada dato y explica qué deja pasar cada uno (vacío sin `required`, `minlength` con valores puestos desde código, `pattern` anclado).
- Explica la diferencia entre `:invalid` y `:user-invalid`, y qué cambia con `novalidate`.
- Lee `validity`, usa `checkValidity()`, `reportValidity()` y `setCustomValidity()`, y explica por qué el evento `invalid` se escucha en captura.
- Describe cuándo debe aparecer un error, cómo se enlaza con su campo de forma accesible y cómo se evita un envío doble.

### Niveles

- **Alto (27-30):** cada respuesta va con un ejemplo propio que se puede ejecutar en la consola de una página con un formulario.
- **Medio (21-26):** comprende los conceptos con una o dos confusiones menores (por ejemplo, cree que `FormData` incluye las casillas sin marcar, o que un error de `setCustomValidity` se quita solo).
- **Bajo (<21):** lee los campos uno a uno sin `FormData`, convierte un campo vacío en `0` o cree que la validación del navegador basta y el servidor no tiene que validar.

---

## 2) Desempeño (40%)

### Criterios

- Lab 01: los 6 pasos descomentados; explica por qué `get("guide")` da `null` y por qué `Object.fromEntries` pierde una zona.
- Lab 02: los 6 pasos; explica por qué `"A"` es válido desde código con `minlength="2"` y cuántos campos son `:user-invalid` antes y después de enviar.
- Lab 03: los 6 pasos; explica por qué el campo de confirmación sigue inválido después de corregirlo en el paso 4.
- Lab 04: los 6 pasos; explica por qué el botón desactivado no basta para evitar el envío doble y por qué se escribe el mensaje antes de `form.reset()`.

En todos, la consola muestra la misma salida que el README del lab (salvo los mensajes del navegador, que dependen del navegador y su idioma), sin errores.

### Niveles

- **Alto (36-40):** los cuatro labs completos y cada pregunta del apartado «Comprobación» respondida con sus palabras.
- **Medio (28-35):** los cuatro labs completos, con alguna explicación copiada de la teoría o incompleta.
- **Bajo (<28):** labs sin terminar o con errores en la consola.

---

## 3) Producto (30%)

### Criterios

- `PROYECTO=... ./scripts/verificar-semana.sh 20` pasa las 15 comprobaciones.
- `APP`, `FIELDS` y `TAKEN_EMAILS` de `src/data.js` describen un formulario creíble del dominio asignado: campos que ese dominio pediría de verdad, reglas razonables (límites de edad, formatos de carné o código) y mensajes de `pattern` que explican el formato.
- La página funciona servida con `node server.js`: las diez pruebas del paso 10 del proyecto dan el resultado descrito y la consola no muestra errores.
- Las funciones usan lo de la semana donde corresponde: `readValues` usa `get`, `getAll` y `has` según el tipo, `checkField` sale antes con un campo opcional vacío y ancla `pattern`, `validate` se apoya en `checkField`, `createSubmitter` se apoya en `fromServer` y libera el envío en un `finally`, y ninguna función usa el DOM.

### Niveles

- **Alto (27-30):** 15/15, formulario bien adaptado, página sin errores y funciones claras.
- **Medio (21-26):** 15/15 con un formulario poco adaptado (campos genéricos, reglas sin sentido para el dominio) o alguna prueba de la página que falla.
- **Bajo (<21):** menos de 15 comprobaciones, o el formulario del ejemplo Planetario sin cambiar.

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
| ← [Proyecto — Formulario de inscripción](3-proyecto/README.md) | [Recursos — ebooks](4-recursos/ebooks-free/README.md) → |

[↑ Semana 20](README.md)
