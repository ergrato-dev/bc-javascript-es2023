# Rúbrica de Evaluación - Semana 03

## Evidencias y ponderación

| Tipo de evidencia | Ponderación | Descripción |
|---|---:|---|
| Conocimiento | 30% | Clases, `static`, herencia con `extends` y `super`, getters y setters, campos privados y static blocks |
| Desempeño | 40% | Labs 01 a 05 descomentados y ejecutados |
| Producto | 30% | Catálogo con clases: `src/logic.js` completo y tipos del dominio asignado en `src/types.js` |

---

## Criterios por evidencia

## 1) Conocimiento (30%)

### Criterios

- Explica qué hace `new` y qué es `this` dentro del constructor y de un método.
- Distingue un método de instancia de uno estático y pone un ejemplo de cuándo usar cada uno.
- Explica por qué una clase hija tiene que llamar a `super()` antes de usar `this`, y qué hace `super.metodo()`.
- Escribe un getter calculado y un setter que valida.
- Explica qué diferencia hay entre `#campo` y una propiedad con guion bajo (`_campo`).
- Explica cuándo se ejecuta un static block y qué puede hacer que no puede un campo estático con `=`.

### Niveles

- **Alto (27-30):** cada respuesta va con un ejemplo propio que se puede ejecutar.
- **Medio (21-26):** comprende los conceptos con una o dos confusiones menores (por ejemplo, entre método estático y de instancia).
- **Bajo (<21):** no distingue clase de objeto, o cree que los campos privados se pueden leer desde fuera.

---

## 2) Desempeño (40%)

### Criterios

- Lab 01: los 6 pasos descomentados; explica qué pasa al quitar el `return this` del paso 3.
- Lab 02: los 6 pasos; explica por qué `new MathUtils().add(1, 2)` da error.
- Lab 03: los 6 pasos; explica qué error sale si se usa `this` antes de `super()`.
- Lab 04: los 6 pasos; explica qué pasa al asignar a una propiedad que solo tiene getter.
- Lab 05: los 7 pasos; explica el orden de ejecución del paso 4.

En todos, `node starter/index.js` termina sin errores y la salida coincide con la del README del lab (salvo los valores que dependen de la fecha o de `Math.random()`, que el README señala).

### Niveles

- **Alto (36-40):** los cinco labs completos y cada pregunta del apartado «Comprobación» respondida con sus palabras.
- **Medio (28-35):** los cinco labs completos, con alguna explicación copiada de la teoría o incompleta.
- **Bajo (<28):** labs sin terminar o con errores al ejecutar.

---

## 3) Producto (30%)

### Criterios

- `PROYECTO=... ./scripts/verificar-semana.sh 03` pasa las 12 comprobaciones.
- `src/types.js` tiene de 2 a 4 tipos del dominio asignado, cada uno con un dato propio coherente con ese tipo, y de 4 a 6 elementos de ejemplo.
- La página funciona servida con `pnpm dlx serve .`: crear un elemento de cada tipo, rechazar un nombre vacío, editar, marcar como inactivo, eliminar, filtrar y buscar, sin errores en la consola.
- Las clases usan lo de la semana donde corresponde: contador `static #` para el id, `#name` con getter y setter, `#items` en la colección, `Collection.from` como método estático y `super.describe()` en cada tipo.

### Niveles

- **Alto (27-30):** 12/12, tipos propios del dominio y página sin errores.
- **Medio (21-26):** 12/12 con tipos poco adaptados (datos propios genéricos, ejemplos de relleno) o alguna acción de la página que falla.
- **Bajo (<21):** menos de 12 comprobaciones.

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
| ← [Proyecto — Catálogo con clases](3-proyecto/README.md) | [Recursos — ebooks](4-recursos/ebooks-free/README.md) → |

[↑ Semana 03](README.md)
