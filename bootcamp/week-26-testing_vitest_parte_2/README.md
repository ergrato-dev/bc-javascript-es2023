# Semana 26 - Testing con Vitest - Parte 2

En la semana 25 probaste funciones puras. Esta semana pruebas las que dependen de algo que no controlas: un cobro, la red, el azar, la consola, la hora. Las cambias por dobles de prueba con `vi.fn`, `vi.spyOn` y `vi.mock`. Escribes tests asíncronos que esperan a su comprobación y usas el reloj falso para probar reintentos y caducidades sin esperar de verdad. Pruebas un cliente contra su servidor de verdad con tests de integración. Escribes una función con TDD, test antes que código. Y juntas las reglas que hacen que unos tests sigan siendo útiles cuando el código cambia.

## Objetivos de aprendizaje

Al terminar la semana podrás:

- Explicar qué es un doble de prueba y diseñar funciones que reciben sus dependencias.
- Crear dobles con `vi.fn`, sustituir lo que no recibes como parámetro con `vi.spyOn`, `vi.stubGlobal` y `vi.mock`, y deshacer cada cambio.
- Escribir tests de promesas con `async`/`await`, `resolves` y `rejects`, sin tests que terminen antes que su comprobación.
- Probar temporizadores y fechas con el reloj falso de Vitest.
- Arrancar un servidor desde los tests y probar un cliente contra él.
- Escribir una función con el ciclo rojo, verde y refactorizar.
- Escribir tests deterministas, rápidos y que prueban el comportamiento.

## Requisitos previos

- La [semana 25](../week-25-testing_vitest_parte_1/README.md) entera: Vitest con pnpm, matchers, `beforeEach`, `it.each` y cobertura.
- Promesas y `async`/`await` de las semanas [13](../week-13-programacion_asincronica_callbacks_promises/README.md) y [14](../week-14-async_await/README.md), y `fetch` de la [semana 15](../week-15-fetch_api/README.md).
- La API REST con `node:http` de la [semana 16](../week-16-apis_rest_crud/README.md).
- `debounce` y las fugas de temporizadores de la [semana 23](../week-23-performance_optimizacion/README.md).
- Node y pnpm en las versiones de [docs/stack-versions.md](../../docs/stack-versions.md):

  ```bash
  node --version
  # v24.19.0 (o superior)
  pnpm --version
  # 12.20.0 (o superior)
  ```

---

## Contenidos

### 1. Teoría (2 h)

| Archivo | Tiempo | Tema |
|---|---|---|
| [01 - Dobles de prueba](1-teoria/01-dobles-de-prueba.md) | 30 min | Qué es un doble, recibir las dependencias, `vi.fn`, `vi.spyOn`, `vi.stubGlobal`, `vi.mock` y lo que un doble no sabe |
| [02 - Tests asíncronos y reloj falso](1-teoria/02-tests-asincronos.md) | 30 min | Tests `async`, `resolves`, `rejects`, el reloj falso y el test que termina antes que su comprobación |
| [03 - Tests de integración](1-teoria/03-tests-de-integracion.md) | 20 min | Arrancar y parar un servidor, datos iniciales en cada test, qué encuentran y cuándo un doble |
| [04 - TDD](1-teoria/04-tdd.md) | 20 min | Rojo, verde y refactorizar, el código mínimo, triangulación y cuándo ayuda |
| [05 - Buenas prácticas](1-teoria/05-buenas-practicas.md) | 20 min | Tests deterministas, comportamiento y no detalles, los dobles justos, dejar todo como estaba, rápidos y legibles |

### 2. Prácticas (3 h 30 min)

| Lab | Tiempo |
|---|---|
| [Lab 01 - Dobles de prueba](2-practicas/lab-01-dobles-de-prueba/README.md) | 50 min |
| [Lab 02 - Tests asíncronos y reloj falso](2-practicas/lab-02-tests-asincronos/README.md) | 55 min |
| [Lab 03 - Tests de integración](2-practicas/lab-03-tests-de-integracion/README.md) | 50 min |
| [Lab 04 - TDD](2-practicas/lab-04-tdd/README.md) | 55 min |

Los cuatro se ejecutan con Node y Vitest, cada uno con su `package.json`.

### 3. Proyecto (2 h)

[Tests del cliente asíncrono](3-proyecto/README.md): `src/logic.js` trae terminadas siete funciones para hablar con la API de un catálogo (peticiones con errores HTTP, reintentos, límite de tiempo, caché con caducidad, `debounce`, el cliente de la API y un sondeo periódico), y `src/server.js`, la API. Tú escribes los tests: unitarios con dobles y reloj falso, y de integración contra el servidor, con las fichas del dominio que te asigna el instructor. `scripts/verificar-semana.sh 26` comprueba que pasan sin esperas de verdad, cubren el 100 % de `logic.js` y fallan cuando las comprobaciones meten un error en cada función.

### 4. Recursos (30 min)

[Ebooks](4-recursos/ebooks-free/README.md) · [Videos](4-recursos/videografia/README.md) · [Web](4-recursos/webgrafia/README.md) · [Glosario](5-glosario/README.md)

---

## Evaluación

| Evidencia | Peso | Qué se evalúa |
|---|---:|---|
| Conocimiento | 30% | Los conceptos de la teoría, explicados con tus propios tests |
| Desempeño | 40% | Los cuatro labs ejecutados y sus preguntas de comprobación |
| Producto | 30% | El proyecto: 20/20 comprobaciones y el catálogo del dominio |

Detalle en la [rúbrica](rubrica-evaluacion.md).

---

## Estructura

```text
week-26-testing_vitest_parte_2/
|-- README.md
|-- rubrica-evaluacion.md
|-- checks.json
|-- 0-assets/                          # 3 diagramas SVG
|-- 1-teoria/                          # 01 a 05
|-- 2-practicas/
|   |-- README.md
|   |-- lab-01-dobles-de-prueba/       # starter/ con package.json, src y tests
|   |-- lab-02-tests-asincronos/       # starter/ con package.json, src y tests
|   |-- lab-03-tests-de-integracion/   # starter/ con un servidor, su cliente y tests
|   `-- lab-04-tdd/                    # starter/ con la función vacía y sus tests
|-- 3-proyecto/
|   |-- README.md
|   `-- starter/                       # package.json, vitest.config.js, src/ y tests/
|-- 4-recursos/
|   |-- ebooks-free/README.md
|   |-- videografia/README.md
|   `-- webgrafia/README.md
`-- 5-glosario/
    `-- README.md
```

---

## Versiones de la semana

Vitest 5.1.0 y `@vitest/coverage-v8` 5.1.0, las mismas de la semana 25, fijadas con versión exacta en cada `package.json` y en su `pnpm-lock.yaml`. Los proyectos piden Node 24 en `engines` y pnpm 12.20.0 en `packageManager`. Las salidas se obtuvieron con Node 24.19.0, pnpm 12.20.0 y Vitest 5.1.0. Las versiones de todo el curso están en [stack-versions](../../docs/stack-versions.md).

---

## Navegación

| ← Semana anterior | Siguiente → |
|---|---|
| [Semana 25 - Testing con Vitest - Parte 1](../week-25-testing_vitest_parte_1/README.md) | Semana 27 - Patrones de Diseño y Clean Code (pendiente) |
