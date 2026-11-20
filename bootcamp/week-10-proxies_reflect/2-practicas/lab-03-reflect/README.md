# Lab 03 — La API Reflect

## Objetivo

Usar los métodos de `Reflect` (`get`, `set`, `has`, `deleteProperty`, `ownKeys`), entender el parámetro `receiver` y escribir traps que delegan en `Reflect` en lugar de tocar el target a mano.

**Tiempo:** 50 min · **Teoría:** [03 - API Reflect](../../1-teoria/03-reflect-api.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 7 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-10-proxies_reflect/2-practicas/lab-03-reflect
node starter/index.js
```

Las salidas de este README se obtuvieron con Node 24. Los pasos que aún no descomentaste solo imprimen su título.

---

## Paso 1: `Reflect.get` frente al acceso directo

`Reflect.get(obj, 'name')` hace lo mismo que `obj.name`, pero como función. Esa forma es la que encaja dentro de un trap.

```text
--- Paso 1: Reflect.get vs Acceso Directo ---
Direct access: Alice
Reflect.get: Alice
Both are equal: true
```

## Paso 2: `Reflect.set` devuelve un booleano

Una asignación normal sobre un objeto congelado falla en silencio. `Reflect.set` devuelve `false` y así puedes saber que no se guardó.

```text
--- Paso 2: Reflect.set Retorno Boolean ---
Set on normal object: true
Set on frozen object: false
Frozen value unchanged: 42
```

## Paso 3: El parámetro `receiver`

El tercer argumento de `Reflect.get` es el `this` que usa un getter. Sin él, `this` es `parent`, cuyo `multiplier` es `undefined`, y `undefined * 10` da `NaN`. Con `child` como receiver, el getter usa `multiplier: 5`.

```text
--- Paso 3: El Parámetro receiver ---
Sin receiver (this=parent): NaN
Con receiver (this=child): 50
Getter usa this.multiplier del receiver
```

## Paso 4: `Reflect` dentro de un trap

El trap pasa `receiver` a `Reflect.get`. Así el getter `fullName` lee `firstName` y `lastName` a través del proxy, y esas lecturas también quedan registradas.

```text
--- Paso 4: Reflect en Traps ---
[Proxy GET] fullName
[Proxy GET] firstName
[Proxy GET] lastName
Full name: John Doe
```

## Paso 5: `Reflect.has` y `Reflect.deleteProperty`

Son las versiones en forma de función del operador `in` y de `delete`. `deleteProperty` devuelve `true` si pudo borrar.

```text
--- Paso 5: has y deleteProperty ---
Has 'name': true
Has 'age': false
Delete 'temp': true
Object after delete: { name: 'Alice' }
```

## Paso 6: `Reflect.ownKeys`

A diferencia de `Object.keys()`, `Reflect.ownKeys()` devuelve todas las claves propias, también las simbólicas.

```text
--- Paso 6: Reflect.ownKeys ---
Object.keys: name, age
Reflect.ownKeys: name, age, Symbol(id)
Symbols included!
```

## Paso 7: Proxy completo con `Reflect`

Cada trap registra la operación y delega en el método de `Reflect` con el mismo nombre y los mismos argumentos. El comportamiento normal se mantiene.

```text
--- Paso 7: Proxy + Reflect Completo ---
[GET] name
[SET] score = 100
[HAS] name
[DELETE] score
[GET] name
Name: Alice
[HAS] name
Has name: true
[GET] toJSON
[GET] name
Final: {"name":"Alice"}

✅ Lab completado.
```

---

## Comprobación

1. En el paso 3, cambia `multiplier: undefined` por `multiplier: 2` en `parent`. ¿Qué imprime ahora la primera línea?
2. En el paso 4, cambia `Reflect.get(target, property, receiver)` por `target[property]`. ¿Qué líneas `[Proxy GET]` desaparecen y por qué?
3. En el paso 6, ¿qué imprime `Object.getOwnPropertySymbols(obj)`?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 02 — Traps avanzados](../lab-02-traps/README.md) | [Lab 04 — Validación reactiva](../lab-04-reactive-validation/README.md) → |

[↑ Semana 10](../../README.md)
