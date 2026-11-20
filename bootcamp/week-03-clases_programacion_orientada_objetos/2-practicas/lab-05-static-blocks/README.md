# Lab 05 — Static blocks

## Objetivo

Inicializar la parte estática de una clase con bloques `static { }` (ES2022): valores que dependen de condiciones, secretos privados, el orden de ejecución, un *singleton* y un registro de plugins.

**Tiempo:** 35 min · **Teoría:** [06 - Static blocks](../../1-teoria/06-static-blocks.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 7 pasos. En cada uno, descomenta todo el código que hay debajo de `Descomenta todo el código del paso`: la clase y las pruebas (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-03-clases_programacion_orientada_objetos/2-practicas/lab-05-static-blocks
node starter/index.js
```

Las salidas de este README se obtuvieron con Node 24. Los pasos que aún no descomentaste solo imprimen su título.

---

## Paso 1: el primer static block

`static { ... }` se ejecuta **una sola vez**, en el momento en que se define la clase, antes de crear ningún objeto. Dentro, `this` es la clase: `this.prefix = 'CNT'` da valor a `Counter.prefix`. Por eso `Static block ejecutado!` sale antes que el resto.

```text
--- Paso 1: Introducción a Static Blocks ---
Static block ejecutado!
Counter.count: 0
Counter.prefix: CNT
Primer ID: CNT-1
Segundo ID: CNT-2
```

## Paso 2: inicialización con condiciones

Un campo estático con `=` solo admite una expresión. Un static block admite cualquier código: aquí lee `process.env.NODE_ENV` (una variable de entorno; si no existe, usa `'development'`) y con un `if` elige la URL de la API y si hay depuración.

```text
--- Paso 2: Inicialización Condicional ---
AppMode.environment: development
AppMode.apiUrl: http://localhost:3000
AppMode.debug: true
[DEVELOPMENT] This is a debug message
```

Prueba: ejecuta `NODE_ENV=production node starter/index.js` y mira cómo cambian los valores del paso 2.

## Paso 3: campos privados desde el static block

El static block está dentro de la clase, así que puede dar valor a campos estáticos privados (`static #apiKey`) y llamar a métodos privados (`#generateKey`). La clave se genera con `Math.random()`, así que la tuya será distinta.

```text
--- Paso 3: Acceso a Campos Privados ---
SecureConfig initialized with private values
SecureConfig.initialized: true
API Key (masked): API_****mz9e
Full API Key: API_czhhmz9e
```

## Paso 4: varios static blocks

Los campos estáticos y los static blocks se ejecutan en el orden en que aparecen en la clase. Por eso el primer bloque ve `step2 = undefined`: `step2` se declara después.

```text
--- Paso 4: Múltiples Static Blocks ---
  1. Primer static block
     step1 = initialized inline
     step2 = undefined
  2. Segundo static block
     step2 = also inline
  3. Tercer static block
     step3 = set in static block
Orden de inicialización completado
Valores finales: initialized inline also inline set in static block
```

## Paso 5: singleton

Un *singleton* es una clase de la que solo existe un objeto. El static block crea la instancia al definir la clase y la guarda en `static #instance`; `Logger.getInstance()` devuelve siempre esa, así que `logger1 === logger2`.

```text
--- Paso 5: Patrón Singleton ---
Logger singleton initialized
Same instance? true
[APP] [INFO] First message
[APP] [DEBUG] Second message
All logs: [ '[APP] [INFO] First message', '[APP] [DEBUG] Second message' ]
```

## Paso 6: registro de plugins

El static block registra los plugins por defecto al definir la clase; `register` añade más después. `JSON.stringify(data, null, 2)` convierte el objeto en texto con sangría de 2 espacios, que es lo que hace el plugin `formatter`.

```text
--- Paso 6: Registro de Plugins ---
PluginManager initialized with default plugins
Is initialized? true
Default plugins: [
  { id: 'formatter', name: 'JSON Formatter' },
  { id: 'validator', name: 'Basic Validator' }
]
Formatted: {
  "name": "Test",
  "value": 42
}
After adding logger: [
  { id: 'formatter', name: 'JSON Formatter' },
  { id: 'validator', name: 'Basic Validator' },
  { id: 'logger', name: 'Console Logger' }
]
[PLUGIN] Hello from plugin!
```

## Paso 7: integrador

`AppConfig` reparte la inicialización en tres static blocks (configuración base, entorno y secretos) y marca la clase como lista al final. La API key se genera al azar: la tuya será distinta.

```text
--- Paso 7: Integrador ---
AppConfig: Loading base config...
AppConfig: Environment configured...
AppConfig: Secrets generated...
AppConfig: Ready!

App Status: {
  ready: true,
  environment: 'development',
  debug: true,
  hasSecrets: true
}
Full Config: {
  appName: 'MyAwesomeApp',
  version: '1.0.0',
  theme: 'dark',
  environment: 'development',
  debug: true,
  apiUrl: 'http://localhost:3000/api'
}
API URL: http://localhost:3000/api
API Key (first 10 chars): sk_dtsc3zl...
New theme: light

==================================================
✅ Lab completado
==================================================
```

---

## Comprobación

1. En el paso 1, ¿cuántas veces se imprime `Static block ejecutado!` si creas tres objetos con `new Counter()`? ¿Por qué?
2. En el paso 4, mueve `static step2 = 'also inline';` encima del primer static block. ¿Qué cambia en la salida?
3. En el paso 3, añade `console.log(SecureConfig.#apiKey);` fuera de la clase. ¿Qué error sale? ¿Qué método de la clase sí te deja ver la clave?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 04 — Encapsulación](../lab-04-encapsulacion/README.md) | [Proyecto — Catálogo con clases](../../3-proyecto/README.md) → |

[↑ Semana 03](../../README.md)
