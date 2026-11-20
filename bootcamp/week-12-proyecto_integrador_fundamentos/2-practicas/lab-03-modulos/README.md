# Lab 03 — Módulos ES

## Objetivo

Repasar los módulos de la [semana 04](../../../week-04-destructuring_modulos_es2023/README.md) con archivos reales: exports con nombre y por defecto, renombrar al importar, importar un módulo entero, reunir una carpeta en un `index.js` y cargar un módulo solo cuando hace falta con `import()`.

**Tiempo:** 40 min · **Teoría:** [02 - Arquitectura del proyecto](../../1-teoria/02-arquitectura-aplicacion.md)

## Cómo trabajar

La carpeta [`starter/`](starter/) ya trae los módulos que vas a importar. No hace falta cambiarlos, pero léelos antes de empezar:

```text
starter/
|-- index.js            # el archivo del lab: aquí descomentas
|-- utils/format.js     # exports con nombre (y una función sin export)
|-- models/
|   |-- Product.js      # export por defecto + export con nombre
|   |-- User.js         # export con nombre
|   `-- index.js        # re-exporta Product y User
`-- services/report.js  # se carga con import() en el paso 5
```

[`starter/index.js`](starter/index.js) tiene 5 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-12-proyecto_integrador_fundamentos/2-practicas/lab-03-modulos
node starter/index.js
```

No hay `package.json`: Node trata los archivos como módulos ES porque usan `import` y `export`. Cada paso funciona solo, sin los anteriores. Las salidas de este README se obtuvieron con Node 24.

---

## Paso 1: exports con nombre

`import { ... } from './utils/format.js'` trae los exports por su nombre exacto. La ruta empieza por `./` (relativa al archivo que importa) y lleva la extensión `.js`.

Aunque los `import` estén en mitad del archivo, Node los resuelve antes de ejecutar la primera línea: si el módulo o el nombre no existen, el programa falla antes de imprimir nada.

```text
--- Paso 1: Exports con nombre ---
APP_NAME = Mi App
formatPrice(99.99) = $99.99
validateEmail('ana@mail.com') = true
```

## Paso 2: renombrar e importar el módulo entero

`formatPrice as toDollars` usa otro nombre local para el mismo export. `import * as format` reúne todos los exports en un objeto: sus claves son los cuatro exports, y `pad` no aparece porque no lleva `export`.

```text
--- Paso 2: Renombrar y namespace ---
toDollars(5) = $5.00
Exports de format.js: [ 'APP_NAME', 'badge', 'formatPrice', 'validateEmail' ]
format.badge('nuevo') = [ nuevo ]
¿Se ve pad? false
```

## Paso 3: export por defecto

`Product.js` exporta la clase con `export default` y además `MAX_PRICE` con nombre. El default se importa sin llaves y con el nombre que quieras; los exports con nombre, entre llaves en la misma línea.

```text
--- Paso 3: Export por defecto ---
Product { name: 'Lámpara', price: 45 }
¿Supera 10000? false
```

## Paso 4: un punto de entrada por carpeta

`models/index.js` no define nada: re-exporta lo de `Product.js` y `User.js` (`export { default as Product } from './Product.js'`). Quien usa la carpeta importa de un solo sitio y no necesita saber en qué archivo vive cada clase. Aquí además se renombra `Product` a `Item` al importar.

```text
--- Paso 4: Re-exportación con index.js ---
Ana compra Escritorio
```

## Paso 5: `import()` dinámico

`import('./services/report.js')` carga el módulo cuando el programa llega a esa línea y devuelve una promesa con sus exports. `await` espera a que llegue. La línea de `report.js` sale entre `Antes` y `Después`: el módulo no se evaluó hasta que se pidió.

```text
--- Paso 5: import() dinámico ---
Antes de import()
  (report.js se está evaluando)
Después de import()
Total: $275.00

✅ Lab completado.
```

---

## Comprobación

1. Añade al paso 1 `import { pad } from './utils/format.js';` y ejecuta. El programa falla sin imprimir nada:

   ```text
   SyntaxError: The requested module './utils/format.js' does not provide an export named 'pad'
   ```

   ¿Por qué falla antes de imprimir `--- Paso 1`, si el `import` está debajo?
2. En el paso 4, cambia `'./models/index.js'` por `'./models'`. Node responde con `Error [ERR_UNSUPPORTED_DIR_IMPORT]: Directory import '.../starter/models' is not supported resolving ES modules`. ¿Qué te dice sobre cómo busca Node los módulos?
3. ¿Cuándo conviene `import()` en lugar de un `import` normal? Piensa en una parte de una página que casi nadie usa.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 02 — Patrón observer](../lab-02-observer/README.md) | [Lab 04 — Map para colecciones](../lab-04-map/README.md) → |

[↑ Semana 12](../../README.md)
