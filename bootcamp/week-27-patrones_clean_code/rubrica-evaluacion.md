# Rúbrica de Evaluación - Semana 27

## Evidencias y ponderación

| Tipo de evidencia | Ponderación | Descripción |
|---|---:|---|
| Conocimiento | 30% | Module, Singleton, Factory, Observer y Strategy, clean code, SOLID, code smells, refactor y herramientas |
| Desempeño | 40% | Los cuatro labs ejecutados y sus preguntas de comprobación |
| Producto | 30% | Refactorización de código legacy: `src/logic.js` con las fichas del dominio asignado |

---

## Criterios por evidencia

## 1) Conocimiento (30%)

### Criterios

- Explica qué es un patrón de diseño y cuándo usar Module, Singleton, Factory, Observer y Strategy, y cuándo un `if` o un objeto normal son mejores.
- Explica por qué un módulo con estado es un Singleton y qué problemas da en los tests, y cómo una fábrica guarda datos privados en un closure.
- Explica por qué el emisor del Observer no conoce a sus oyentes y por qué hay que dejar de escuchar.
- Aplica las reglas de clean code: nombres, funciones que hacen una cosa, objetos de opciones, cláusulas de guarda, constantes con nombre, efectos separados y comentarios que dicen por qué.
- Explica cada principio SOLID con un ejemplo en JavaScript y relaciona la D con los dobles de prueba de la semana 26.
- Explica qué es refactorizar, por qué no se mezcla con arreglar errores y para qué sirven los tests de caracterización.
- Distingue el trabajo de ESLint del de Prettier.

### Niveles

- **Alto (27-30):** cada respuesta va con un ejemplo de sus labs o de su proyecto: una estrategia que añadió sin tocar la función, una regla de ESLint que le obligó a dividir, un test de caracterización que le paró un refactor.
- **Medio (21-26):** comprende los conceptos con una o dos confusiones menores (por ejemplo, cree que refactorizar incluye arreglar errores, o que Prettier encuentra errores).
- **Bajo (<21):** no sabe escribir una función fábrica ni un emisor de eventos, o no distingue refactorizar de reescribir.

---

## 2) Desempeño (40%)

### Criterios

- Lab 01: los 5 pasos, con la instancia compartida del paso 2 y el problema del paso 3 explicados.
- Lab 02: los 5 pasos, con `once` y la función que deja de escuchar entendidas, y la estrategia nueva del paso 5 añadida sin cambiar `shippingCost`.
- Lab 03: los 6 pasos con los tests en verde después de cada uno, y el fallo del paso 5 leído y arreglado.
- Lab 04: los 6 pasos, con los errores de verdad arreglados a mano, `--fix`, el refactor de `stockStatus` y `label`, Prettier y `pnpm check` sin errores.

En los cuatro labs la salida coincide con la del README, salvo `Start at`, `Duration`, los milisegundos y las rutas absolutas.

### Niveles

- **Alto (36-40):** los cuatro labs completos y cada pregunta del apartado «Comprobación» respondida con sus palabras y, cuando lo pide, con el código escrito y ejecutado.
- **Medio (28-35):** los cuatro labs completos, con alguna explicación copiada de la teoría o incompleta.
- **Bajo (<28):** labs sin terminar, o con tests o ESLint fallando.

---

## 3) Producto (30%)

### Criterios

- `PROYECTO=... ./scripts/verificar-semana.sh 27` pasa las 18 comprobaciones: cada función hace lo que dice su especificación, el informe es idéntico al original, ESLint no encuentra nada y Prettier no cambiaría nada.
- `SEED` de `src/data.js` describe un catálogo creíble del dominio asignado, con fichas reales, tipos propios del dominio y valoraciones y cifras variadas.
- `src/logic.js` se lee bien: nombres que dicen qué es cada cosa, funciones cortas, constantes con nombre, estrategias en `SORTERS`, sin código copiado del original y sin comentarios que repiten el código.

### Niveles

- **Alto (27-30):** 18/18, catálogo bien adaptado y un `logic.js` que se entiende leyendo solo los nombres de sus funciones.
- **Medio (21-26):** 18/18 con un catálogo poco adaptado, o con funciones que cumplen ESLint pero con nombres poco claros o partes del original copiadas con otro formato.
- **Bajo (<21):** menos de 18 comprobaciones, o el catálogo del ejemplo Planetario sin cambiar.

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
| ← [Proyecto — Proyecto — Refactorización de código legacy](3-proyecto/README.md) | [Recursos — ebooks](4-recursos/ebooks-free/README.md) → |

[↑ Semana 27](README.md)
