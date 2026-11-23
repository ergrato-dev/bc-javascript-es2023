# Rúbrica de Evaluación - Semana 26

## Evidencias y ponderación

| Tipo de evidencia | Ponderación | Descripción |
|---|---:|---|
| Conocimiento | 30% | Dobles de prueba, tests asíncronos y reloj falso, tests de integración, TDD y buenas prácticas |
| Desempeño | 40% | Los cuatro labs ejecutados con Vitest y sus preguntas de comprobación |
| Producto | 30% | Tests del cliente asíncrono: los tests unitarios y de integración de `src/logic.js` con las fichas del dominio asignado |

---

## Criterios por evidencia

## 1) Conocimiento (30%)

### Criterios

- Explica qué es un doble de prueba, sus dos trabajos (responder y apuntar) y por qué una función que recibe sus dependencias es más fácil de probar.
- Elige entre `vi.fn`, `vi.spyOn`, `vi.stubGlobal` y `vi.mock`, y explica por qué cada cambio se deshace en un `afterEach`.
- Explica por qué un test asíncrono necesita `await`, qué pasa si falta, y para qué sirven `resolves` y `rejects`.
- Explica por qué un test no debe esperar de verdad a un temporizador, y cuándo usar las versiones `Async` del reloj falso.
- Explica qué encuentra un test de integración que no encuentra uno unitario, y al revés, y por qué el servidor se arranca en `beforeAll` y sus datos se reinician en `beforeEach`.
- Explica el ciclo rojo, verde y refactorizar, por qué hay que ver el rojo y por qué solo se refactoriza en verde.
- Reconoce un test inestable y su causa (hora, azar, red, esperas, orden), y la diferencia entre probar el comportamiento y probar los detalles.

### Niveles

- **Alto (27-30):** cada respuesta va con un ejemplo de sus labs o de su proyecto: un doble que deshizo, un rojo que vio, un mutante que solo detecta su test con el reloj falso.
- **Medio (21-26):** comprende los conceptos con una o dos confusiones menores (por ejemplo, cree que `vi.spyOn` siempre cambia el método, o que los tests de integración hacen innecesarios los unitarios).
- **Bajo (<21):** no sabe crear un doble ni escribir un test asíncrono que espere a su comprobación.

---

## 2) Desempeño (40%)

### Criterios

- Lab 01: los 5 pasos, con el fallo del paso 2 leído y arreglado, el `afterEach` con `vi.restoreAllMocks` del paso 4 y el `vi.mock` del paso 5.
- Lab 02: los 6 pasos, con el test del paso 2 arreglado con `async`/`await`, el límite de 5 s del paso 3 explicado y los tests de los pasos 4 a 6 con el reloj falso.
- Lab 03: los 4 pasos, con la cabecera arreglada en el cliente y en el test unitario, y el `beforeEach` con `server.reset()`.
- Lab 04: los 7 ciclos, viendo el rojo de cada uno, con el refactor del ciclo 5 y los ciclos 6 y 7 resueltos sin guía.

En los cuatro labs la salida coincide con la del README, salvo `Start at`, `Duration` y los milisegundos de cada test.

### Niveles

- **Alto (36-40):** los cuatro labs completos y cada pregunta del apartado «Comprobación» respondida con sus palabras y, cuando lo pide, con el test escrito y ejecutado.
- **Medio (28-35):** los cuatro labs completos, con alguna explicación copiada de la teoría o incompleta.
- **Bajo (<28):** labs sin terminar o con tests que fallan.

---

## 3) Producto (30%)

### Criterios

- `PROYECTO=... ./scripts/verificar-semana.sh 26` pasa las 20 comprobaciones: los tests pasan sin esperas de verdad, cubren el 100 % de `src/logic.js`, los de integración no usan dobles y detectan los ocho mutantes.
- `SEED` de `src/data.js` describe un catálogo creíble del dominio asignado, con fichas reales y campos propios del dominio.
- Los tests de integración usan esas fichas en las búsquedas, y los unitarios las usan como datos donde tiene sentido.
- Los tests están bien escritos: dobles solo en los bordes y tan simples como pueden, `await` en cada promesa, reloj falso en todo lo que espera, un `afterEach` común y ningún test que dependa de otro.

### Niveles

- **Alto (27-30):** 20/20, catálogo bien adaptado y tests claros que comprueban los tiempos y los límites con el valor exacto.
- **Medio (21-26):** 20/20 con un catálogo poco adaptado, o con dobles más complicados de lo necesario, o con tests que comprueban detalles internos.
- **Bajo (<21):** menos de 20 comprobaciones, o el catálogo del ejemplo Planetario sin cambiar.

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
| ← [Proyecto — Proyecto — Tests del cliente asíncrono](3-proyecto/README.md) | [Recursos — ebooks](4-recursos/ebooks-free/README.md) → |

[↑ Semana 26](README.md)
