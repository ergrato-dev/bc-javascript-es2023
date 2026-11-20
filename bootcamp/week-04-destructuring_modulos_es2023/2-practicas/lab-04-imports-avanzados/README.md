# Lab 04 — Imports avanzados

## Objetivo

Cargar módulos mientras el programa ya se está ejecutando con `import()`: desestructurar lo que devuelve, cargar según una condición, cargar varios a la vez y manejar los errores de carga.

**Tiempo:** 55 min · **Teoría:** [05 - Imports dinámicos](../../1-teoria/05-dynamic-imports.md)

## Cómo trabajar

[`starter/app.js`](starter/app.js) tiene 6 pasos y carga los tres módulos de [`starter/features/`](starter/features/): `calculator.js`, `converter.js` y `formatter.js`. Esos tres ya están escritos: cada uno tiene exports con nombre, un `export default` con un objeto que los agrupa y un `console.log('📦 ... module loaded')` que se ejecuta al cargarlo. Descomenta el bloque de cada paso en `app.js` y ejecuta:

```bash
cd bootcamp/week-04-destructuring_modulos_es2023/2-practicas/lab-04-imports-avanzados
node starter/app.js
```

Igual que en el [lab 03](../lab-03-modulos-basicos/README.md), `starter/package.json` con `{ "type": "module" }` le dice a Node que los archivos son módulos ES. Aquí además es obligatorio para el paso 1: `app.js` no tiene ningún `import` estático, y sin `package.json` Node lo trataría como CommonJS y rechazaría el `await` fuera de una función.

Las salidas de este README se obtuvieron con Node 24. Los pasos que aún no descomentaste solo imprimen su título.

---

## Paso 1: `import()` básico

`import('./features/calculator.js')` carga el módulo en ese momento y devuelve una **promesa** que se cumple con el namespace del módulo: un objeto con todos sus exports. `await` espera a la promesa. En un módulo, `await` se puede escribir en el nivel superior, fuera de una función (*top-level await*).

```text
--- Paso 1: import() básico ---
📦 Calculator module loaded
Exports: [ 'add', 'calculate', 'default', 'divide', 'multiply', 'subtract' ]
add(2, 3) = 5
Default: Calculator 1.0.0
```

La línea `📦 Calculator module loaded` sale antes que las demás: es el `console.log` de `calculator.js`, que se ejecuta al cargarlo. El export por defecto está en la propiedad `default`.

## Paso 2: `import()` con destructuring

El namespace es un objeto normal, así que se puede desestructurar en la misma línea del `await`: `const { celsiusToFahrenheit, kmToMiles } = await import(...)`.

```text
--- Paso 2: import() con destructuring ---
📦 Converter module loaded
25 °C = 77 °F
10 km = 6.21 millas
```

## Paso 3: el export por defecto se llama `default`

`default` es una palabra reservada y no puede ser el nombre de una variable, así que se renombra al desestructurar: `{ default: formatter, formatNumber }`. Es el mismo renombrado del lab 02.

```text
--- Paso 3: El default export se llama default ---
📦 Formatter module loaded
Formatter · 3.142
1234,50 €
14 de marzo de 2026
```

`new Date(2026, 2, 14)` es el 14 de marzo: los meses empiezan en 0.

## Paso 4: cargar solo lo que se pide

`loadFeature` busca la ruta en un objeto y la carga con `import()`. La ruta puede salir de una variable: con un `import` estático no se puede, porque la ruta tiene que estar escrita tal cual. Así un programa carga solo lo que el usuario necesita.

```text
--- Paso 4: Cargar solo lo que se pide ---
Cargada converter: Converter
```

No aparece `📦 Converter module loaded`: `converter.js` ya se cargó en el paso 2.

## Paso 5: varios módulos a la vez y caché

`Promise.all` recibe un array de promesas, las espera todas a la vez y devuelve sus resultados en el mismo orden, que aquí se desestructuran en `[calc, conv]`.

```text
--- Paso 5: Varios módulos a la vez y caché ---
Calculator + Converter
Mismo módulo que en el paso 1: true
```

Ningún módulo vuelve a imprimir su `📦`, y `again === calc` es `true`: un módulo se carga y se ejecuta una sola vez, y cada `import()` posterior recibe el mismo namespace desde la caché.

## Paso 6: errores al cargar

Si el archivo no existe, la promesa de `import()` se rechaza y `await` lanza el error, que se captura con `try`/`catch`. `error.code` dice el motivo.

```text
--- Paso 6: Errores al cargar ---
Error: ERR_MODULE_NOT_FOUND

✅ Lab completado.
```

---

## Comprobación

1. En el paso 4, cambia `requested` a `'formatter'`. ¿Qué error sale y por qué, si `formatter.js` existe?
2. Quita el `await` del paso 1 (`const calculator = import(...)`) e imprime `calculator`. ¿Qué es, y por qué falla `calculator.add(2, 3)`?
3. Cambia el orden del `Promise.all` del paso 5 a `[converter, calculator]` sin tocar `[calc, conv]`. ¿Qué imprime la primera línea del paso?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 03 — Módulos básicos](../lab-03-modulos-basicos/README.md) | [Proyecto — Catálogo modular](../../3-proyecto/README.md) → |

[↑ Semana 04](../../README.md)
