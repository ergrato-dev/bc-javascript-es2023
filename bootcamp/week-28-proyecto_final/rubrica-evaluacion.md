# Rúbrica de Evaluación - Semana 28

## Evidencias y ponderación

| Tipo de evidencia | Ponderación | Descripción |
|---|---:|---|
| Conocimiento | 30% | La presentación de 5 minutos y las preguntas del instructor sobre la arquitectura y las decisiones del proyecto |
| Desempeño | 40% | Los dos labs ejecutados y sus preguntas de comprobación |
| Producto | 30% | Catálogo completo: `src/logic.js`, `src/store.js`, `src/api.js` y sus tests, con las fichas del dominio asignado |

---

## Criterios por evidencia

## 1) Conocimiento (30%)

### Criterios

- Enseña la aplicación funcionando con su catálogo: buscar, ordenar en los dos sentidos, paginar, validar, crear y borrar.
- Explica qué hace cada módulo y sigue el camino de una acción: evento, `dispatch`, `reduce`, aviso del almacén y `render` con `selectPage`.
- Explica dos decisiones con su porqué: un patrón (Strategy, Observer, Factory), la inyección de `fetch`, una función que dividió por ESLint, un caso límite que encontró un test, o dónde se busca y pagina.
- Responde a preguntas del tipo «¿qué pasaría si...?» (una API lenta, 100 000 fichas, ordenar por dos campos) diciendo qué parte del código cambiaría.
- Distingue qué prueba un test unitario, uno con un doble y uno de integración, y qué no garantiza la cobertura.

### Niveles

- **Alto (27-30):** presentación en 5 minutos con las cuatro partes, decisiones explicadas con su propio código y respuestas que señalan la función o el módulo exacto que cambiaría.
- **Medio (21-26):** presentación completa con alguna explicación genérica o copiada de la teoría, o que se pasa de tiempo.
- **Bajo (<21):** no consigue enseñar la aplicación funcionando, o no sabe explicar qué hace alguno de los módulos que escribió.

---

## 2) Desempeño (40%)

### Criterios

- Lab 01: los 5 pasos, con los tres fallos del almacén del paso 4 explicados y el arreglo de (b) y (c) escrito en la pregunta 2.
- Lab 02: los 6 pasos, con la cobertura del paso 4 leída, los dos errores de ESLint arreglados a mano y `pnpm check` sin errores.

En los dos labs la salida coincide con la del README, salvo `Start at`, `Duration`, los milisegundos y las rutas absolutas.

### Niveles

- **Alto (36-40):** los dos labs completos y cada pregunta del apartado «Comprobación» respondida con sus palabras y, cuando lo pide, con el código escrito y ejecutado.
- **Medio (28-35):** los dos labs completos, con alguna explicación copiada de la teoría o incompleta.
- **Bajo (<28):** labs sin terminar, o con tests, cobertura o ESLint fallando.

---

## 3) Producto (30%)

### Criterios

- `PROYECTO=... ./scripts/verificar-semana.sh 28` pasa las 21 comprobaciones: cada función cumple su especificación, `createApi` funciona contra el servidor con los datos del dominio, los tests pasan y cubren el 90 %, y ESLint y Prettier no encuentran nada.
- `src/data.js` describe un catálogo creíble del dominio asignado: campos propios del dominio, al menos uno `number` con valores variados, y fichas reales.
- Los tests se leen bien: cada título dice qué comprueba, usan datos pequeños escritos en el test y prueban los casos límite y los errores, no solo el caso normal.
- La página funciona con el catálogo del dominio en los seis puntos del paso 11 del proyecto.

### Niveles

- **Alto (27-30):** 21/21, catálogo bien adaptado, tests que se entienden por sus títulos y página que funciona en los seis puntos.
- **Medio (21-26):** 21/21 con un catálogo poco adaptado, tests con títulos poco claros o que comprueban poco aunque cubran, o algún punto de la página que falla.
- **Bajo (<21):** menos de 21 comprobaciones, o el catálogo del ejemplo Planetario sin cambiar.

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
| ← [Proyecto — Proyecto final — Catálogo completo](3-proyecto/README.md) | [Recursos — ebooks](4-recursos/ebooks-free/README.md) → |

[↑ Semana 28](README.md)
