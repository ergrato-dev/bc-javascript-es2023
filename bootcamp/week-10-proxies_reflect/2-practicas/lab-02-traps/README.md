# Lab 02 — Traps avanzados

## Objetivo

Usar los traps `set`, `get`, `has`, `deleteProperty` y `ownKeys` para validar datos, ocultar propiedades privadas, proteger claves, registrar cada operación y avisar de los cambios.

**Tiempo:** 55 min · **Teoría:** [02 - Traps básicos](../../1-teoria/02-traps-basicos.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 7 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-10-proxies_reflect/2-practicas/lab-02-traps
node starter/index.js
```

Las salidas de este README se obtuvieron con Node 24. Los pasos que aún no descomentaste solo imprimen su título.

---

## Paso 1: Validar con `set`

Antes de guardar, el trap comprueba el tipo del valor. Si `age` no es un número, lanza un `TypeError` y el valor no se guarda.

```text
--- Paso 1: Validación con set ---
User created: Alice, 25
Age updated: 26
Validation error caught: age must be a number
```

## Paso 2: Propiedades privadas con `get`

Por convención, las propiedades que empiezan por `_` son privadas. El trap `get` lanza un error si alguien intenta leerlas.

```text
--- Paso 2: Propiedades Privadas ---
Name: Alice
Email: alice@test.com
Private access blocked!
```

## Paso 3: El operador `in` con `has`

El trap `has` responde al operador `in`. Devuelve `false` para las propiedades con `_`, así que desde fuera parecen no existir.

```text
--- Paso 3: Operador in (has) ---
'name' in user: true
'_password' in user: false (hidden)
'email' in user: true
```

## Paso 4: Proteger propiedades con `deleteProperty`

El trap `deleteProperty` decide si `delete` puede borrar la propiedad. Para `id` devuelve `false` y la propiedad sigue ahí.

```text
--- Paso 4: Proteger deleteProperty ---
Deleted 'temporary': true
Cannot delete protected: id
Delete 'id' result: false
Remaining: id, name, createdAt
```

## Paso 5: Filtrar claves con `ownKeys`

El trap `ownKeys` decide qué claves ven `Object.keys()`, `for...in` y `JSON.stringify()`. Aquí oculta las que empiezan por `_`.

```text
--- Paso 5: Filtrar ownKeys ---
All keys (internal): name, email, _password, _token
Visible keys: name, email
```

## Paso 6: Registrar todas las operaciones

Un mismo handler con `get`, `set` y `deleteProperty` deja rastro de cada operación. `JSON.stringify()` también lee a través del proxy: primero pide `toJSON` y luego cada propiedad.

```text
--- Paso 6: Logging Completo ---
[GET] name → "Alice"
[SET] score: undefined → 100
[SET] score: 100 → 150
[DELETE] score
[GET] toJSON → undefined
[GET] name → "Alice"
Final state: {"name":"Alice"}
```

## Paso 7: Avisar de los cambios

El trap `set` compara el valor anterior con el nuevo y llama a una función observadora solo cuando cambian.

```text
--- Paso 7: Notificación de Cambios ---
[Observer] status: offline → online
[Observer] users: 0 → 5
Status changed to: online
Users count: 5

✅ Lab completado.
```

---

## Comprobación

1. En el paso 1, ¿qué pasa si asignas `user.age = '26'`? ¿Y `user.name = 42`?
2. En el paso 5, ¿qué imprime `JSON.stringify(secureUser)`?
3. En el paso 3, borra el trap `has`. ¿Qué imprime ahora `'_password' in user`?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 01 — Proxy básico](../lab-01-proxy-basics/README.md) | [Lab 03 — La API Reflect](../lab-03-reflect/README.md) → |

[↑ Semana 10](../../README.md)
