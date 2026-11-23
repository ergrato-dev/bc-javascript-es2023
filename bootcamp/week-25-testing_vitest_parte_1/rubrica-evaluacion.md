# Rúbrica de Evaluación - Semana 25

## Evidencias y ponderación

| Tipo de evidencia | Ponderación | Descripción |
|---|---:|---|
| Conocimiento | 30% | Qué es un test, Vitest, matchers, cómo organizar los tests y qué mide la cobertura |
| Desempeño | 40% | Los cuatro labs ejecutados con Vitest y sus preguntas de comprobación |
| Producto | 30% | Tests del catálogo: los tests de `src/logic.js` con los datos del dominio asignado |

---

## Criterios por evidencia

## 1) Conocimiento (30%)

### Criterios

- Explica qué es un test y una regresión, qué le falta a `node:assert` frente a Vitest y en qué se diferencian los tests unitarios, de integración y de extremo a extremo.
- Explica por qué una función pura es fácil de probar y qué gana el proyecto con separar `logic.js` de `main.js`.
- Explica qué guardan `package.json`, `node_modules/` y `pnpm-lock.yaml`, cuál se sube a git, y por qué Vitest va en `devDependencies` con una versión exacta.
- Lee un fallo de Vitest (qué test, qué salió, qué se esperaba, dónde) y decide si el error está en el test o en el código.
- Elige el matcher adecuado y explica por qué `toBe` falla con dos objetos iguales, por qué `0.1 + 0.2` necesita `toBeCloseTo` y por qué `toThrow` necesita una función.
- Explica por qué los tests no deben depender unos de otros, para qué sirve `beforeEach` y qué casos límite tiene una función.
- Explica las cuatro medidas de la cobertura, por qué un 100 % no garantiza buenos tests y qué es un mutante.

### Niveles

- **Alto (27-30):** cada respuesta va con un ejemplo de sus labs o de su proyecto: un fallo que leyó, un caso límite que encontró, un mutante que sus tests detectan.
- **Medio (21-26):** comprende los conceptos con una o dos confusiones menores (por ejemplo, cree que `toEqual` y `toStrictEqual` son iguales, o que el 100 % de cobertura significa que no hay errores).
- **Bajo (<21):** no sabe leer un fallo ni elegir entre `toBe` y `toEqual`.

---

## 2) Desempeño (40%)

### Criterios

- Lab 01: crea el `package.json`, instala Vitest 5.1.0 con `--save-exact`, ejecuta los 6 pasos y arregla el test del paso 5 y el código del paso 6.
- Lab 02: los 6 pasos, cada test marcado con ❌ arreglado con el matcher adecuado y explicado.
- Lab 03: los 6 pasos, con el `beforeEach` del paso 2 y el arreglo de `shippingCost` del paso 5; usa `-t` y explica por qué `only` y `skip` no se quedan en el código.
- Lab 04: los 6 pasos, con `include` y umbrales en `vitest.config.js`, y los dos tests del paso 6 que detectan los errores con un 100 % de cobertura.

En los cuatro labs la salida coincide con la del README, salvo `Start at`, `Duration` y los milisegundos de cada test.

### Niveles

- **Alto (36-40):** los cuatro labs completos y cada pregunta del apartado «Comprobación» respondida con sus palabras y, cuando lo pide, con el test escrito y ejecutado.
- **Medio (28-35):** los cuatro labs completos, con alguna explicación copiada de la teoría o incompleta.
- **Bajo (<28):** labs sin terminar o con tests que fallan.

---

## 3) Producto (30%)

### Criterios

- `PROYECTO=... ./scripts/verificar-semana.sh 25` pasa las 17 comprobaciones: los tests pasan, cubren el 100 % de `src/logic.js` y detectan los siete mutantes.
- `FIELDS` y `SEED` de `src/data.js` describen un catálogo creíble del dominio asignado, con reglas con sentido y fichas reales, no las del ejemplo.
- Los tests usan los datos del catálogo donde tiene sentido (`search`, `sortBy`, `validate`, `summarize`, `data.js`) y datos escritos en el propio test para los casos raros.
- Los tests están bien escritos: un comportamiento por caso, el matcher más concreto (`toEqual` con objetos, `toBeCloseTo` con decimales, `toThrow` con su clase o su mensaje), los límites exactos y ningún test sin `expect`.

### Niveles

- **Alto (27-30):** 17/17, catálogo bien adaptado y tests claros que prueban los límites con el valor exacto.
- **Medio (21-26):** 17/17 con un catálogo poco adaptado, o con tests que repiten código que un `it.each` evitaría, o con matchers poco concretos (`toBeTruthy` donde cabía `toBe`).
- **Bajo (<21):** menos de 17 comprobaciones, o el catálogo del ejemplo Planetario sin cambiar.

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
| ← [Proyecto — Proyecto — Tests del catálogo](3-proyecto/README.md) | [Recursos — ebooks](4-recursos/ebooks-free/README.md) → |

[↑ Semana 25](README.md)
