# 🔁 Repaso de las semanas 25 a 27

## 🎯 Objetivos

- Recordar qué aporta al proyecto final cada semana de la etapa Avanzado.
- Saber dónde está explicada cada idea, para volver a ella cuando la necesites.
- Ver cómo encajan con lo de las etapas anteriores.

El proyecto final no trae nada nuevo. Junta en una aplicación lo de todo el bootcamp, y le añade lo que hace que otra persona se fíe de ella: tests, cobertura, patrones con nombre y reglas que se comprueban solas. Este repaso va semana a semana y enlaza dónde se explica cada idea. Lo de las etapas anteriores está repasado en la [semana 12](../../week-12-proyecto_integrador_fundamentos/README.md) y en la [semana 24](../../week-24-proyecto_integrador_intermedio/1-teoria/01-repaso-semanas-13-23.md).

---

## 📋 Contenido

### 1. Semana 25 — Tests con Vitest

| Idea | Dónde la usa el proyecto | Dónde se explica |
|---|---|---|
| `describe`, `it`, `expect` y leer un fallo | Los tres archivos de `tests/` | [02 - Vitest](../../week-25-testing_vitest_parte_1/1-teoria/02-vitest.md) |
| `toBe` frente a `toEqual`, `toThrow`, `toMatchObject` | Comparar fichas, estados y errores | [03 - Matchers](../../week-25-testing_vitest_parte_1/1-teoria/03-matchers.md) |
| Preparar, actuar, comprobar; casos límite | Cada test de `logic.test.js` | [04 - Organizar los tests](../../week-25-testing_vitest_parte_1/1-teoria/04-organizar-tests.md) |
| Cobertura y umbrales | `vitest.config.js` pide un 90 % | [05 - Cobertura](../../week-25-testing_vitest_parte_1/1-teoria/05-cobertura.md) |

Un test que compara un estado con `toBe` falla aunque tenga los mismos datos, porque `reduce` devuelve un objeto nuevo. `toEqual` compara el contenido. Y al revés: cuando la especificación dice «el mismo objeto», lo que se comprueba es `toBe`.

```js
expect(reduce(state, { type: 'page', page: 2 })).toEqual({ ...state, page: 2 }); // mismo contenido
expect(reduce(state, { type: 'zoom' })).toBe(state); // el mismo objeto
```

Los casos límite son los que más fallos encuentran: una lista vacía, una página fuera de rango, un campo vacío, un texto con tildes. La cobertura dice qué líneas no ha ejecutado ningún test, pero no si los tests comprueban algo: un test sin `expect` también cubre.

### 2. Semana 26 — Dobles de prueba, asincronía e integración

| Idea | Dónde la usa el proyecto | Dónde se explica |
|---|---|---|
| Recibir las dependencias y `vi.fn` | `createApi({ baseUrl, fetchFn })` y sus tests con un `fetch` falso | [01 - Dobles de prueba](../../week-26-testing_vitest_parte_2/1-teoria/01-dobles-de-prueba.md) |
| `await`, `resolves` y `rejects` | Todos los tests de `api.test.js` | [02 - Tests asíncronos](../../week-26-testing_vitest_parte_2/1-teoria/02-tests-asincronos.md) |
| Un servidor de verdad en `beforeAll`/`afterAll` | El test de integración contra `server.js` | [03 - Tests de integración](../../week-26-testing_vitest_parte_2/1-teoria/03-tests-de-integracion.md) |
| Rojo, verde, refactorizar | Una forma de escribir cada función del proyecto | [04 - TDD](../../week-26-testing_vitest_parte_2/1-teoria/04-tdd.md) |

`createApi` nunca usa el `fetch` global: lo recibe. En la página, `main.js` le pasa el de verdad; en los tests, un `vi.fn` que devuelve un `Response` preparado. Así un test puede pedir un 422 o un cuerpo que no es JSON sin montar ningún servidor:

```js
const fetchFn = vi.fn(async () => new Response('Bad Gateway', { status: 502 }));
const api = createApi({ baseUrl: '', fetchFn });
await expect(api.list()).rejects.toMatchObject({ status: 502, message: 'Error 502' });
```

Sin `await`, el test termina antes de que la promesa se rechace y puede pasar aunque el código esté mal. Y los dobles no sustituyen del todo al servidor: el test de integración es el que demuestra que el cliente y la API se entienden.

### 3. Semana 27 — Patrones y clean code

| Idea | Dónde la usa el proyecto | Dónde se explica |
|---|---|---|
| Module y Factory: lo privado en un closure | `createStore` y `createApi` guardan su estado dentro | [01 - Module, Singleton y Factory](../../week-27-patrones_clean_code/1-teoria/01-module-singleton-factory.md) |
| Observer y Strategy | `subscribe` en el almacén; `SORTERS` y el objeto de acciones de `reduce` | [02 - Observer y Strategy](../../week-27-patrones_clean_code/1-teoria/02-observer-strategy.md) |
| Nombres, funciones cortas, objetos de opciones, constantes con nombre | Todo `src/`: ESLint lo exige | [03 - Clean code](../../week-27-patrones_clean_code/1-teoria/03-clean-code.md) |
| Una responsabilidad por módulo; inyección de dependencias | `logic.js`, `store.js`, `api.js`, `view.js` y `main.js` | [04 - SOLID](../../week-27-patrones_clean_code/1-teoria/04-solid.md) |
| ESLint, Prettier y un script que lo comprueba todo | `pnpm check` | [05 - Refactorizar y herramientas](../../week-27-patrones_clean_code/1-teoria/05-refactorizar-y-herramientas.md) |

El proyecto usa la configuración de ESLint de la semana 27, con los mismos límites: complejidad 4, dos parámetros, 15 líneas por función y sin números mágicos. Un `switch` de ocho casos no cabe en `reduce`; un objeto con una función por acción, sí:

```js
const HANDLERS = {
  page: (state, { page }) => ({ ...state, page }),
  // ...una línea por acción
};
```

Cuando una función no cabe en los límites, no busques cómo saltarte la regla: divídela en funciones con nombre. Las comprobaciones rechazan `eslint-disable`, `prettier-ignore` y los comentarios que esconden líneas a la cobertura.

### 4. Lo que viene de antes

El proyecto también usa, sin volver a explicarlo:

- Métodos de array inmutables (`toSorted`, `map`, `filter`) y desestructuración, de las semanas [2](../../week-02-operadores_metodos_modernos_arrays/README.md) y [4](../../week-04-destructuring_modulos_es2023/README.md).
- `normalize('NFD')` y las clases de Unicode para buscar sin tildes, de la [semana 6](../../week-06-strings_regexp_modernos/README.md).
- `fetch`, códigos HTTP y errores con su `status`, de las semanas [15](../../week-15-fetch_api/README.md) y [16](../../week-16-apis_rest_crud/README.md).
- El reductor puro y el estado en un solo objeto, de la [semana 16](../../week-16-apis_rest_crud/README.md).
- Crear HTML seguro desde datos y la delegación de eventos, de las semanas [17](../../week-17-dom_manipulation_moderna/README.md) y [18](../../week-18-event_handling_avanzado/README.md).
- El formulario construido desde `FIELDS` y la validación, de la [semana 20](../../week-20-formularios_validacion/README.md).
- El `debounce` del buscador, de la [semana 23](../../week-23-performance_optimizacion/README.md).

---

## ✅ Resumen

- La semana 25 da los tests y la cobertura; la 26, los dobles de prueba y el test de integración; la 27, los patrones, los límites de clean code y las herramientas que los comprueban.
- `toEqual` compara el contenido y `toBe` comprueba que es el mismo objeto: usa cada uno cuando la especificación lo pida.
- `createApi` recibe `fetch` para que los tests le pasen uno falso, y un test contra `server.js` comprueba que cliente y servidor se entienden.
- Si ESLint se queja, divide la función; no desactives la regla.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Semana 28 - Proyecto Final](../README.md) | [Teoría — 🏗️ Arquitectura de la aplicación final](02-arquitectura-final.md) → |

[↑ Semana 28](../README.md)
