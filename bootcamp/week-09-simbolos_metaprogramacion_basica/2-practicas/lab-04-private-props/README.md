# Lab 04 — Ocultar propiedades con símbolos

## Objetivo

Usar claves simbólicas para ocultar datos de las enumeraciones, comprobar que siguen siendo accesibles y compararlas con la convención `_nombre` y los campos privados `#` (ES2022).

**Tiempo:** 55 min · **Teoría:** [04 - Símbolos como claves](../../1-teoria/04-symbols-as-keys.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 7 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-09-simbolos_metaprogramacion_basica/2-practicas/lab-04-private-props
node starter/index.js
```

Las salidas de este README se obtuvieron con Node 24. Los pasos que aún no descomentaste solo imprimen su título.

---

## Paso 1: ocultar una propiedad

`[_password]` no aparece en `Object.keys` ni en `JSON.stringify`: un objeto así se puede enviar o registrar sin que la contraseña salga en el texto.

```text
--- Paso 1: Ocultar Propiedades ---
Object.keys: [ 'name', 'email' ]
JSON.stringify: {"name":"Alice","email":"alice@test.com"}
El password está oculto de las enumeraciones normales
```

## Paso 2: pero no es privada

Cualquiera con el objeto puede pedir `Object.getOwnPropertySymbols` y leer el valor. Un símbolo oculta la clave, no protege el dato.

```text
--- Paso 2: Pero NO es Privado ---
Símbolos encontrados: [ Symbol(secret) ]
Secret accedido: información sensible
⚠️ Los símbolos se pueden descubrir
Todas las claves: [ 'visible', Symbol(secret) ]
```

## Paso 3: el símbolo como llave del módulo

Si el símbolo no se exporta, el código de fuera no lo tiene a mano y la forma normal de leer `account[_balance]` desaparece. Los métodos `deposit`, `withdraw` y `getBalance` sí lo tienen, porque se escribieron en el mismo archivo.

```text
--- Paso 3: Patrón de Módulo ---
Balance: 150
Object.keys: [ 'deposit', 'withdraw', 'getBalance' ]
El balance interno está oculto
```

## Paso 4: tres formas de ocultar

`_secret` es solo una convención: la clave es de texto y se ve. Un símbolo la oculta de las enumeraciones, pero se descubre. Un campo `#secret` es privado de verdad: fuera de la clase, `obj.#secret` es un error de sintaxis. Lo viste en la semana 03.

```text
--- Paso 4: Comparativa ---
| Método      | Oculto | Privado |
|-------------|--------|---------|
| underscore  | ❌     | ❌      |
| Symbol      | ✅     | ❌      |
| #private    | ✅     | ✅      |

Underscore visible: [ '_secret' ]
Symbol oculto: []
Symbol descubrible: true
```

## Paso 5: las copias también copian símbolos

Spread (`{ ...original }`) y `Object.assign` copian las claves simbólicas. Quien reciba la copia tiene los mismos datos ocultos.

```text
--- Paso 5: Copiar con Símbolos ---
Original tiene símbolo: datos internos
Spread copia símbolo: datos internos
Assign copia símbolo: datos internos
Símbolos en copia: [ Symbol(internal) ]
```

## Paso 6: símbolos en una clase

`Entity` guarda su id con una clave simbólica, y el contador de ids es un campo estático con otra clave simbólica (`static [_nextId] = 1`). `Object.keys` y `JSON.stringify` solo ven los datos públicos; `Reflect.ownKeys` cuenta 3 claves: `name`, `value` y el id.

```text
--- Paso 6: Uso en Clases ---
ID: 1
Claves públicas: [ 'name', 'value' ]
JSON: {"name":"Test","value":42}
Todas las claves: 3
```

## Paso 7: una configuración con claves ocultas

Las dos claves guardan sus valores con símbolos: no salen en `Object.keys` ni en JSON, que da `{}` porque `JSON.stringify` también se salta las funciones. `getApiKey` solo devuelve la clave a quien le pase el mismo símbolo: otro `Symbol('apiKey')` es un símbolo distinto.

```text
--- Paso 7: Configuración con claves ocultas ---
¿Tiene API Key? true
Claves visibles: [ 'hasApiKey', 'hasSecretToken', 'getApiKey' ]
JSON: {}
Con el símbolo: key-123
Con otro símbolo: Acceso denegado

✅ Lab completado.
```

---

## Comprobación

1. En el paso 3, ¿cómo leerías el balance desde fuera sin usar `getBalance`? (Pista: paso 2.)
2. En el paso 6, crea una segunda `Entity`. ¿Qué id recibe?
3. En el paso 7, ¿qué devuelve `config.hasSecretToken()` si creas la configuración con `createSecureConfig('key-123', '')`?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 03 — Well-known symbols](../lab-03-well-known/README.md) | [Proyecto — Fichas con notas reservadas](../../3-proyecto/README.md) → |

[↑ Semana 09](../../README.md)
