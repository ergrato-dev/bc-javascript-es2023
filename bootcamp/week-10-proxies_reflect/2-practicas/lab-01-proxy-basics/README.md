# Lab 01 — Proxy básico

## Objetivo

Crear un `Proxy` a partir de un objeto (el *target*) y un *handler*, interceptar lecturas con `get` y escrituras con `set`, y usarlos para valores por defecto, propiedades calculadas, proxies revocables e índices negativos en arrays.

**Tiempo:** 50 min · **Teoría:** [01 - Introducción a Proxy](../../1-teoria/01-proxy-intro.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 7 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-10-proxies_reflect/2-practicas/lab-01-proxy-basics
node starter/index.js
```

Las salidas de este README se obtuvieron con Node 24. Los pasos que aún no descomentaste solo imprimen su título.

---

## Paso 1: Proxy transparente

Con un handler vacío `{}`, el proxy no intercepta nada: cada operación llega tal cual al target. Por eso cambiar `age` en el proxy cambia también `user`.

```text
--- Paso 1: Proxy Transparente ---
Proxy name: Alice
Target también cambió: 26
```

## Paso 2: Interceptar lecturas con `get`

El trap `get(target, property)` se ejecuta en cada lectura. Lo que devuelve es el valor que recibe quien lee. Aquí registra el nombre de la propiedad antes de devolverla.

```text
--- Paso 2: Interceptar Lectura ---
[GET] name
Alice
[GET] age
25
```

## Paso 3: Interceptar escrituras con `set`

El trap `set(target, property, value)` se ejecuta en cada asignación. Debe guardar el valor y devolver `true` para indicar que la escritura tuvo éxito.

```text
--- Paso 3: Interceptar Escritura ---
[SET] score = 100
[SET] score = 200
Score: 200
```

## Paso 4: Valores por defecto

Si la propiedad no está en el target, `get` busca en `defaults`. `theme` existe en `config`; `language` y `timeout` salen de los valores por defecto.

```text
--- Paso 4: Valores por Defecto ---
Theme: dark
Language: es (default)
Timeout: 5000 (default)
```

## Paso 5: Propiedades calculadas

`fullName` y `area` no existen en el objeto: el trap `get` las calcula al leerlas a partir de otras propiedades.

```text
--- Paso 5: Propiedades Computadas ---
First: John
Last: Doe
Full: John Doe
Area: 50
```

## Paso 6: Proxy revocable

`Proxy.revocable()` devuelve el proxy y una función `revoke`. Después de llamarla, cualquier operación sobre el proxy lanza un `TypeError`, cuyo mensaje imprime el `catch`.

```text
--- Paso 6: Proxy Revocable ---
Before revoke: secret123
Error: Cannot perform 'get' on a proxy that has been revoked
```

## Paso 7: Proxy sobre un array

Las claves de un array llegan al trap como strings (`'-1'`). `Number(property)` las convierte y, si el número es negativo, el trap cuenta desde el final.

```text
--- Paso 7: Proxy con Arrays ---
First: 10
Last (arr[-1]): 50
Second to last (arr[-2]): 40

✅ Lab completado.
```

---

## Comprobación

1. En el paso 3, quita el `return true;` del trap `set`. ¿Sigue cambiando `score`? Añade `'use strict';` como primera línea del archivo y ejecuta otra vez: ¿qué error aparece?
2. En el paso 4, ¿qué imprime `configWithDefaults.colors`? ¿Por qué no lanza error?
3. En el paso 7, ¿qué imprime `pythonArray[-10]`?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Índice de labs](../README.md) | [Lab 02 — Traps avanzados](../lab-02-traps/README.md) → |

[↑ Semana 10](../../README.md)
