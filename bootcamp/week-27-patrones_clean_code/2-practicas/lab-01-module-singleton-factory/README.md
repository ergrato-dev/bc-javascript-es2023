# Lab 01 — Module, Singleton y Factory

## Objetivo

Ver con un inventario de tienda los tres patrones que deciden cómo se crean los objetos: un módulo con su parte privada, la instancia única que comparten todos los que lo importan, lo que esa instancia no te deja hacer, y dos fábricas: una que crea objetos independientes y otra que elige qué objeto crear.

**Tiempo:** 50 min · **Teoría:** [01 - Module, Singleton y Factory](../../1-teoria/01-module-singleton-factory.md)

## Cómo trabajar

En [`starter/src/`](starter/src/) hay cuatro módulos ya escritos: `inventory.js` (un inventario como módulo), `restock.js` (otro módulo que lo usa), `create-inventory.js` (una fábrica de inventarios) y `create-notifier.js` (una fábrica de avisadores). Léelos antes de cada paso. [`starter/index.js`](starter/index.js) tiene un bloque por paso: descomenta el bloque y ejecuta desde la carpeta `starter`:

```bash
cd bootcamp/week-27-patrones_clean_code/2-practicas/lab-01-module-singleton-factory/starter
node index.js
```

No necesita instalar nada. Los pasos van en orden: cada uno usa variables de los anteriores, así que deja descomentados los que ya hiciste. Las salidas se obtuvieron con Node 24.19.0. En cada paso se muestran solo las líneas nuevas.

---

## Paso 1: Un módulo

```text
--- Paso 1: un módulo ---
  lápices: 5
  cambios: 2
  lo que exporta: [ 'add', 'changeCount', 'unitsOf' ]
  inventory.units: undefined
  inventory.record: undefined
```

`import * as inventory` junta en un objeto todo lo que exporta el módulo. Solo hay tres funciones: `units`, `changes` y `record` existen dentro de `inventory.js`, pero no salen de él. Es el patrón Module, que con los módulos ES no hay que escribir: cada archivo ya lo es.

La única forma de cambiar las unidades es `add`, que además cuenta el cambio. Nadie puede tocar `units` y olvidarse de `changes`.

Fíjate en que los `import` del bloque están en mitad del archivo y funcionan igual: JavaScript los ejecuta **antes** que el resto del código, estén donde estén. Por eso se suelen escribir todos arriba.

## Paso 2: Una sola instancia

```text
--- Paso 2: una sola instancia ---
  lápices tras reponer desde otro módulo: 15
  ¿el mismo módulo? true
  cambios: 3
```

- `restock.js` importa `add` de `inventory.js` y repone 10 lápices. `index.js` los ve: 5 + 10 = 15.
- `await import('./src/inventory.js')` carga el módulo otra vez, en mitad del programa ([semana 4](../../../week-04-destructuring_modulos_es2023/1-teoria/05-dynamic-imports.md)). Devuelve **el mismo objeto** (`true`), con los mismos datos: 3 cambios.

Node ejecuta cada módulo una sola vez, la primera vez que alguien lo importa, y guarda el resultado. Por eso un módulo con estado es un **Singleton**: una única instancia que comparten todos sus `import`. `await` funciona fuera de una función `async` porque `index.js` es un módulo ES.

## Paso 3: Lo que no puedes hacer con una sola instancia

```text
--- Paso 3: dos almacenes ---
  gomas en la tienda 1: 4
  ¿empieza vacío? false
```

La segunda tienda importa el mismo módulo para su inventario, y sus 4 gomas aparecen en la primera. No hay forma de crear un segundo inventario: el módulo solo exporta `add`, `unitsOf` y `changeCount`.

Y un test que necesitara un inventario vacío no lo tendría: los lápices de los pasos anteriores siguen ahí. Es el estado compartido entre tests de la [semana 25](../../../week-25-testing_vitest_parte_1/2-practicas/lab-03-organizar-tests/README.md#paso-2-tests-que-dependen-unos-de-otros), con un módulo en lugar de una variable.

## Paso 4: Una fábrica

```text
--- Paso 4: una fábrica ---
  norte: 2 lápices, 1 cambio
  sur: 7 lápices, 2 cambios
  lo que tiene cada uno: [ 'add', 'unitsOf', 'changeCount' ]
  north.units: undefined
  ¿el mismo add? false
```

`createInventory` es una **función fábrica**: el mismo código que `inventory.js`, dentro de una función que devuelve las tres funciones públicas.

- Cada llamada crea variables `units` y `changes` nuevas, y las funciones devueltas recuerdan las suyas (un *closure*). Norte y sur no se mezclan.
- `units` sigue siendo privado: no es una propiedad del objeto devuelto.
- Cada inventario tiene sus propias funciones (`north.add === south.add` es `false`), porque cada una recuerda un `units` distinto.

## Paso 5: Una fábrica que elige qué crear

```text
--- Paso 5: elegir el tipo ---
  email    Correo a ana@tienda.test: Quedan 2 lápices
  sms      SMS a 600 000 000: Quedan 2 lápices
  console  [aviso] Quedan 2 lápices
  error: No hay avisadores de tipo «paloma»
```

`createNotifier(tipo, opciones)` busca el tipo en `BUILDERS` y llama a la función que construye ese avisador. Los tres tienen el método `send`, así que el bucle los usa sin preguntar de qué tipo es cada uno. Un tipo que no existe da un error al crear el avisador, con un mensaje que dice qué falló.

```text
✅ Lab completado.
```

---

## Comprobación

1. Añade un cuarto tipo de avisador, `'push'`, que escriba `Push: <texto>`. ¿Qué archivo cambias? ¿Cambia el bucle del paso 5?
2. En el paso 4, ¿por qué `north.add === south.add` es `false` y en el paso 2 `again === inventory` es `true`?
3. Escribe una clase `Inventory` con `#units` que haga lo mismo que `createInventory`. Saca su método con `const { add } = new Inventory()` y llámalo. ¿Qué pasa? ¿Y con el `add` de la fábrica?
4. Piensa en tres cosas de una aplicación que deban ser únicas (un Singleton) y tres que no. ¿Qué tienen en común las primeras?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Índice de labs](../README.md) | [Lab 02 — Observer y Strategy](../lab-02-observer-strategy/README.md) → |

[↑ Semana 27](../../README.md)
