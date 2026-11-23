# Rúbrica de Evaluación - Semana 17

## Evidencias y ponderación

| Tipo de evidencia | Ponderación | Descripción |
|---|---:|---|
| Conocimiento | 30% | El árbol DOM y la selección, crear e insertar nodos, contenido, atributos y clases, plantillas y render |
| Desempeño | 40% | Labs 01 a 04 descomentados y ejecutados en el navegador |
| Producto | 30% | Constructor de fichas: `src/logic.js` completo y datos del dominio asignado |

---

## Criterios por evidencia

## 1) Conocimiento (30%)

### Criterios

- Explica qué es el DOM, por qué una lista tiene más nodos que elementos y qué colecciones se actualizan solas.
- Escribe selectores por clase, id y atributo, busca dentro de un elemento y usa `closest` para llegar a la ficha que contiene un elemento.
- Elige el método de inserción según la posición, sabe que insertar un nodo que ya está en la página lo mueve y cuándo compensa un fragmento.
- Explica un ataque XSS con un ejemplo, por qué `textContent` lo evita y cómo se escapa un texto para meterlo en HTML.
- Distingue el atributo `value` de la propiedad `value` y pinta un estado con `classList.toggle(clase, force)` y `aria-pressed` a partir de un solo dato.
- Explica qué se pierde al rehacer todos los nodos de una lista y cómo lo evita un render por clave.

### Niveles

- **Alto (27-30):** cada respuesta va con un ejemplo propio que se puede ejecutar en la consola de una página.
- **Medio (21-26):** comprende los conceptos con una o dos confusiones menores (por ejemplo, cree que `cloneNode(true)` copia los listeners, o que `innerHTML` es seguro porque no ejecuta etiquetas `<script>`).
- **Bajo (<21):** no distingue `textContent` de `innerHTML` o no sabe qué devuelve `querySelector` cuando no encuentra nada.

---

## 2) Desempeño (40%)

### Criterios

- Lab 01: los 6 pasos descomentados; explica por qué la `NodeList` del paso 3 sigue en 3 y la `HTMLCollection` pasa a 4.
- Lab 02: los 6 pasos; explica por qué el total de `<li>` del paso 3 no cambia al pasar elementos de una lista a otra.
- Lab 03: los 7 pasos; explica por qué el título de la pestaña cambia en el paso 3 aunque el `<img>` se sustituye justo después.
- Lab 04: los 6 pasos; explica por qué el foco se pierde en el paso 4 y se conserva en el paso 5.

En todos, la consola muestra la misma salida que el README del lab, sin errores.

### Niveles

- **Alto (36-40):** los cuatro labs completos y cada pregunta del apartado «Comprobación» respondida con sus palabras.
- **Medio (28-35):** los cuatro labs completos, con alguna explicación copiada de la teoría o incompleta.
- **Bajo (<28):** labs sin terminar o con errores en la consola.

---

## 3) Producto (30%)

### Criterios

- `PROYECTO=... ./scripts/verificar-semana.sh 17` pasa las 16 comprobaciones.
- `TITLE` y las fichas de `src/data.js` describen el dominio asignado: de 8 a 15 fichas coherentes, con categorías que agrupan varias fichas y detalles creíbles.
- La página funciona servida con `node server.js`: las ocho pruebas del paso 10 del proyecto dan el resultado descrito y la consola no muestra errores.
- Las funciones usan lo de la semana donde corresponde: `cardSpec` se escribe con `h` y `classNames`, `toHtml` escapa con `escapeHtml` todos los textos y valores, y ninguna función modifica los arrays que recibe.

### Niveles

- **Alto (27-30):** 16/16, datos propios del dominio y página sin errores.
- **Medio (21-26):** 16/16 con datos poco adaptados (fichas de relleno, una sola categoría útil) o alguna prueba de la página que falla.
- **Bajo (<21):** menos de 16 comprobaciones, o datos del ejemplo Planetario sin cambiar.

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
| ← [Proyecto — Constructor de fichas](3-proyecto/README.md) | [Recursos — ebooks](4-recursos/ebooks-free/README.md) → |

[↑ Semana 17](README.md)
