# Rúbrica de Evaluación - Semana 18

## Evidencias y ponderación

| Tipo de evidencia | Ponderación | Descripción |
|---|---:|---|
| Conocimiento | 30% | Escuchar eventos, propagación, delegación, acciones por defecto y eventos propios |
| Desempeño | 40% | Labs 01 a 04 descomentados y ejecutados en el navegador |
| Producto | 30% | Centro de avisos: `src/logic.js` completo y datos del dominio asignado |

---

## Criterios por evidencia

## 1) Conocimiento (30%)

### Criterios

- Explica cuándo se ejecuta un listener, lee del objeto evento el tipo, el destino e `isTrusted`, y distingue `key` de `code`.
- Quita listeners con la misma función, con `once` y con un `AbortController`, y explica por qué una flecha nueva no quita nada.
- Describe el camino de un clic en captura, destino y burbuja, y distingue `target` de `currentTarget` en un listener de un antepasado.
- Explica qué rompe `stopPropagation` con un ejemplo y qué eventos no suben.
- Escribe un listener delegado con `closest` y `contains` y explica por qué hacen falta los dos.
- Explica cuándo se puede cancelar una acción por defecto y cómo un evento propio cancelable permite vetar una acción.

### Niveles

- **Alto (27-30):** cada respuesta va con un ejemplo propio que se puede ejecutar en la consola de una página.
- **Medio (21-26):** comprende los conceptos con una o dos confusiones menores (por ejemplo, cree que `stopPropagation` cancela la acción por defecto, o que un evento creado con `new Event` sube sin pedirlo).
- **Bajo (<21):** no distingue `target` de `currentTarget` o no sabe por qué un botón creado después no responde a un listener añadido antes.

---

## 2) Desempeño (40%)

### Criterios

- Lab 01: los 7 pasos descomentados; explica por qué el paso 3 sigue sumando tras el primer `removeEventListener`.
- Lab 02: los 6 pasos; explica por qué `document` no oye el clic en el paso 4 y por qué el `focus` en burbuja del paso 6 no aparece.
- Lab 03: los 6 pasos; explica por qué el paso 4 sin `list.contains` encuentra `toggle-panel`.
- Lab 04: los 6 pasos; explica por qué la casilla del paso 2 está marcada dentro del listener y desmarcada después.

En todos, la consola muestra la misma salida que el README del lab, sin errores.

### Niveles

- **Alto (36-40):** los cuatro labs completos y cada pregunta del apartado «Comprobación» respondida con sus palabras.
- **Medio (28-35):** los cuatro labs completos, con alguna explicación copiada de la teoría o incompleta.
- **Bajo (<28):** labs sin terminar o con errores en la consola.

---

## 3) Producto (30%)

### Criterios

- `PROYECTO=... ./scripts/verificar-semana.sh 18` pasa las 15 comprobaciones.
- `TITLE` y los avisos de `src/data.js` describen el dominio asignado: de 6 a 12 avisos creíbles, con niveles que encajan con su texto (un corte de agua es urgente; un cambio de horario, no).
- La página funciona servida con `node server.js`: las ocho pruebas del paso 10 del proyecto dan el resultado descrito y la consola no muestra errores.
- Las funciones usan lo de la semana donde corresponde: `createBus` se apoya en `createNoticeEvent` y en un `AbortController` por listener, `shortcutFor` y `parseAction` no ejecutan nada que no esté en su lista de acciones, y `applyAction` no modifica la lista ni los avisos que recibe.

### Niveles

- **Alto (27-30):** 15/15, datos bien adaptados, página sin errores y funciones claras.
- **Medio (21-26):** 15/15 con datos poco adaptados (avisos de relleno, niveles al azar) o alguna prueba de la página que falla.
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
| ← [Proyecto — Centro de avisos](3-proyecto/README.md) | [Recursos — ebooks](4-recursos/ebooks-free/README.md) → |

[↑ Semana 18](README.md)
