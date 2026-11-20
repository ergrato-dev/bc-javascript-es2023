# Lab 03 — Módulos básicos

## Objetivo

Repartir el código en varios archivos con `export` e `import`: exports con nombre, un barrel que los reúne, un export por defecto y nombres cambiados al importar.

**Tiempo:** 55 min · **Teoría:** [03 - Módulos ES](../../1-teoria/03-modulos-es6.md) y [04 - Named y default exports](../../1-teoria/04-named-default-exports.md)

## Cómo trabajar

El lab tiene cinco archivos en `starter/`:

| Archivo | Paso |
|---|---|
| [`utils/math.js`](starter/utils/math.js) | 1 |
| [`utils/strings.js`](starter/utils/strings.js) | 2 |
| [`utils/index.js`](starter/utils/index.js) | 3 |
| [`config.js`](starter/config.js) | 4 |
| [`main.js`](starter/main.js) | Todos: el punto de entrada |

En cada paso descomenta tres cosas: los `export` del módulo de ese paso, su `import` al principio de `main.js` y el bloque de prueba del paso en `main.js`. Después ejecuta:

```bash
cd bootcamp/week-04-destructuring_modulos_es2023/2-practicas/lab-03-modulos-basicos
node starter/main.js
```

- **Qué:** `starter/package.json` solo contiene `{ "type": "module" }`.
- **Para qué:** le dice a Node que los `.js` de esa carpeta son módulos ES, los que usan `import` y `export`. Es lo mismo que hace `<script type="module">` en el navegador.
- **Impacto:** sin él, Node trataría como CommonJS (el sistema antiguo, con `require`) los archivos que aún no tienen ningún `export`.

Las salidas de este README se obtuvieron con Node 24. Los pasos que aún no descomentaste solo imprimen su título.

---

## Paso 1: exports con nombre

En `utils/math.js`, cada `export const` publica una constante o una función con su nombre. En `main.js`, `import { PI, sum, multiply, divide, power } from './utils/math.js';` las trae por ese mismo nombre, entre llaves. La ruta empieza por `./` (relativa a `main.js`) y lleva la extensión `.js`: en módulos ES no se puede omitir.

```text
--- Paso 1: Named exports (math.js) ---
PI = 3.14159
sum(5, 3) = 8
multiply(4, 7) = 28
divide(10, 4) = 2.5 · divide(1, 0) = null
power(2, 10) = 1024
```

## Paso 2: otro módulo

`utils/strings.js` publica cuatro funciones de texto. Cada módulo tiene su propio ámbito: una variable que no lleva `export` no se ve desde fuera.

```text
--- Paso 2: Named exports (strings.js) ---
Planeta
oiriS
Nebulosa...
gran-mancha-roja
```

Fíjate en que `truncate('Nebulosa de Orión', 8)` corta en el carácter 8 y añade `...`.

## Paso 3: barrel e `import * as`

`utils/index.js` no tiene código propio: `export * from './math.js'` reexporta todo lo de `math.js`, y lo mismo con `strings.js`. Ahora `main.js` puede importar desde un solo archivo. `import * as utils` trae todos los exports juntos en un objeto, el **namespace** del módulo, y se usan con `utils.sum(...)`.

```text
--- Paso 3: Barrel e import * as ---
El barrel exporta: [
  'PI',       'capitalize',
  'divide',   'multiply',
  'power',    'reverse',
  'slugify',  'sum',
  'truncate'
]
utils.sum(2, 2) = 4
Mismas funciones: true
```

`utils.sum === sum` es `true`: el barrel no copia las funciones, publica las mismas. Un módulo se ejecuta una sola vez aunque se importe desde varios sitios.

## Paso 4: export por defecto

`config.js` termina con `export default config;`. Un módulo puede tener como mucho un `export default`, y se importa **sin llaves** y con el nombre que elija quien importa: `import config` e `import settings` traen el mismo objeto.

```text
--- Paso 4: Default export ---
Lab de módulos v1.0.0
API: https://api.example.com (5000 ms)
Mismo objeto con otro nombre: true
```

## Paso 5: renombrar al importar

`import { sum as add, capitalize as upperFirst }` importa los exports con nombre pero los usa con otro nombre en este archivo. Sirve cuando dos módulos exportan el mismo nombre o cuando otro nombre se entiende mejor aquí.

```text
--- Paso 5: Renombrar al importar ---
add(1, 2) = 3
Júpiter

✅ Lab completado.
```

---

## Comprobación

1. Vuelve a comentar `export const power` en `utils/math.js` y ejecuta. ¿Qué error sale, y en qué línea de `main.js` dice que está el problema?
2. Cambia el import del paso 4 a `import { config } from './config.js';`. ¿Por qué falla, si `config.js` tiene una variable llamada `config`?
3. Quita el `.js` de la ruta del paso 1 (`'./utils/math'`). ¿Qué código de error da Node?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 02 — Destructuring de objetos](../lab-02-destructuring-objetos/README.md) | [Lab 04 — Imports avanzados](../lab-04-imports-avanzados/README.md) → |

[↑ Semana 04](../../README.md)
