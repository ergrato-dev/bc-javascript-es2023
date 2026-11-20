# Rúbrica de Evaluación - Semana 10

## Evidencias y ponderación

| Tipo de evidencia | Ponderación | Descripción |
|---|---:|---|
| Conocimiento | 30% | `Proxy`, traps, `Reflect` y el parámetro `receiver`, validación y patrón Observer con proxies |
| Desempeño | 40% | Labs 01 a 04 descomentados y ejecutados |
| Producto | 30% | Fichas validadas en vivo: `src/logic.js` completo y datos del dominio asignado |

---

## Criterios por evidencia

## 1) Conocimiento (30%)

### Criterios

- Explica qué son el target, el handler y el proxy, y qué pasa con un handler vacío.
- Dice qué operación intercepta cada trap visto en la semana (`get`, `set`, `has`, `deleteProperty`, `ownKeys`) y qué debe devolver.
- Explica qué ocurre cuando `set` o `deleteProperty` devuelven `false`, en un script normal y en un módulo (modo estricto).
- Explica para qué sirve `Reflect` dentro de un trap y qué cambia el parámetro `receiver` con un getter.
- Distingue una propiedad guardada de una calculada en el trap `get`, y explica cómo un proxy avisa de los cambios a quien se suscribe.

### Niveles

- **Alto (27-30):** cada respuesta va con un ejemplo propio que se puede ejecutar.
- **Medio (21-26):** comprende los conceptos con una o dos confusiones menores (por ejemplo, sobre cuándo un trap que devuelve `false` lanza error).
- **Bajo (<21):** no distingue el target del proxy, o cree que `Reflect` es necesario para crear un proxy.

---

## 2) Desempeño (40%)

### Criterios

- Lab 01: los 7 pasos descomentados; explica por qué el paso 1 cambia también `user` y por qué el paso 7 necesita `Number(property)`.
- Lab 02: los 7 pasos; explica qué hace cada trap con las propiedades que empiezan por `_` y por qué el paso 6 registra una lectura de `toJSON`.
- Lab 03: los 7 pasos; explica por qué la primera línea del paso 3 da `NaN` y qué lecturas registra el paso 4 gracias a `receiver`.
- Lab 04: los 7 pasos; explica por qué los métodos del formulario del paso 7 están en el objeto original y no se asignan a través del proxy.

En todos, `node starter/index.js` termina sin errores y la salida coincide con la del README del lab.

### Niveles

- **Alto (36-40):** los cuatro labs completos y cada pregunta del apartado «Comprobación» respondida con sus palabras.
- **Medio (28-35):** los cuatro labs completos, con alguna explicación copiada de la teoría o incompleta.
- **Bajo (<28):** labs sin terminar o con errores al ejecutar.

---

## 3) Producto (30%)

### Criterios

- `PROYECTO=... ./scripts/verificar-semana.sh 10` pasa las 14 comprobaciones.
- `TITLE`, `ID_PREFIX`, `ROOMS`, `SCHEMA` y las piezas de `src/data.js` describen el dominio asignado, con 5 a 12 piezas coherentes, valores creíbles y reglas que tengan sentido en ese dominio.
- La página funciona servida con `pnpm dlx serve .`: cada campo se marca y muestra su error mientras escribes, **Últimos cambios** apunta cada tecla, **Añadir** solo se activa con todo válido, una pieza nueva recibe el siguiente id, ✏️ muestra el error del proxy de solo lectura y un id borrado no se reutiliza, sin errores en la consola.
- Las funciones usan lo de la semana donde corresponde: los validadores son funciones que devuelven funciones; `createForm` valida y avisa en el trap `set`, calcula `errors` e `isValid` en el trap `get` y delega en `Reflect.set` y `Reflect.get`; `readOnly` rechaza los cambios con los traps `set` y `deleteProperty`.

### Niveles

- **Alto (27-30):** 14/14, datos propios del dominio y página sin errores.
- **Medio (21-26):** 14/14 con datos poco adaptados (piezas de relleno, reglas sin cambiar) o alguna acción de la página que falla.
- **Bajo (<21):** menos de 14 comprobaciones, o datos del ejemplo Planetario sin cambiar.

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
| ← [Proyecto — Fichas validadas en vivo](3-proyecto/README.md) | [Recursos — ebooks](4-recursos/ebooks-free/README.md) → |

[↑ Semana 10](README.md)
