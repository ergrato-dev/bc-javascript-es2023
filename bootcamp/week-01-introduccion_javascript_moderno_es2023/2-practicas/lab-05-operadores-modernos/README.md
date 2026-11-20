# Lab 05 — Operadores modernos

## Objetivo

Leer datos que pueden faltar sin que el programa falle, con optional chaining (`?.`) y nullish coalescing (`??`); asignar valores por defecto con `??=`, `||=` y `&&=`, y escribir números grandes legibles con `_`.

**Tiempo:** 40 min · **Teoría:** [06 - Operadores modernos](../../1-teoria/06-operadores-modernos.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 8 pasos. En cada uno, descomenta el código de debajo de `Descomenta las siguientes líneas:`; en algunos pasos hay dos bloques separados por un comentario, descomenta los dos (selecciona y pulsa `Ctrl+/`, o `Cmd+/` en macOS). Después ejecuta:

```bash
cd bootcamp/week-01-introduccion_javascript_moderno_es2023/2-practicas/lab-05-operadores-modernos
node starter/index.js
```

Las salidas de este README se obtuvieron con Node 24. Los pasos que aún no descomentaste solo imprimen su título.

---

## Paso 1: optional chaining

`user.address.street` lanza `TypeError: Cannot read properties of undefined (reading 'street')` porque `address` no existe. `user?.address?.street` se detiene en cuanto encuentra `undefined` o `null` y devuelve `undefined`.

```text
--- Paso 1: Optional Chaining Básico ---
Email: ana@email.com
Phone: undefined
Street: undefined
```

## Paso 2: `?.` con arrays y funciones

Funciona también con posiciones de array (`users?.[9]?.name`) y con métodos que puede que no existan (`users?.[0]?.process?.()`).

```text
--- Paso 2: Optional Chaining con Arrays/Funciones ---
Primer usuario: Ana
Usuario inexistente: undefined
Método ejecutado: Procesado!
```

## Paso 3: `??` frente a `||`

`||` usa el valor por defecto con cualquier valor *falsy*: `0`, `''`, `false`, `null` y `undefined`. `??` solo con `null` y `undefined`, así que respeta un `0` o un texto vacío que son valores válidos.

```text
--- Paso 3: Nullish Coalescing vs OR ---
Con || : 0 → default, '' → default
Con ?? : 0 → 0, '' → (vacío)
```

## Paso 4: `?.` y `??` juntos

La combinación habitual: lee una configuración que puede venir incompleta y pon un defecto solo donde falta. `Font Size: 0` demuestra que el `0` se respeta.

```text
--- Paso 4: Combinando ?. y ?? ---
Theme: dark
Font Size: 0
Language: es
```

## Paso 5: `??=`

`options.timeout ??= 3000` asigna solo si `timeout` es `null` o `undefined`. En `options`, vacío, se asignan los dos valores; en `options2`, `timeout` vale `0` y no se toca.

```text
--- Paso 5: Logical Assignment ??= ---
Options: { timeout: 3000, retries: 3 }
Options2 (timeout era 0): { timeout: 0 }
```

## Paso 6: `||=` y `&&=`

`name ||= 'Anonymous'` asigna si `name` es *falsy* (aquí, el texto vacío). `userObj &&= {...}` asigna solo si `userObj` tiene un valor *truthy*; el `{ ...userObj, active: true }` copia el objeto y añade `active` (el operador `...` en objetos se ve en la semana 2).

```text
--- Paso 6: Logical Assignment ||= y &&= ---
Name después de ||=: Anonymous
User después de &&=: { name: 'Ana', active: true }
```

## Paso 7: separadores numéricos

`1_000_000_000` es el mismo número que `1000000000`: el `_` solo ayuda a leerlo y no aparece al imprimir. También vale en binario (`0b`) y hexadecimal (`0x`).

```text
--- Paso 7: Numeric Separators ---
Billion: 1000000000
Price: 1299.99
Binary: 161
Hex: 16777215
```

## Paso 8: caso práctico

Una respuesta de API con un perfil incompleto: cada dato se lee con `?.` y se completa con `??`. `followers` vale `0` y se mantiene.

```text
--- Paso 8: Caso Práctico - API Response ---
Nombre: Carlos
Followers: 0
Bio: Sin biografía
Avatar: /default-avatar.png

✅ Lab completado
```

---

## Comprobación

- [ ] Los 8 pasos descomentados y `node starter/index.js` termina sin errores.
- [ ] Sabes elegir entre `||` y `??` cuando el valor puede ser `0`.
- [ ] Sabes qué devuelve `?.` cuando la cadena se corta.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 04 — Destructuring](../lab-04-destructuring/README.md) | [Proyecto — Ficha interactiva de tu dominio](../../3-proyecto/README.md) → |

[↑ Semana 01](../../README.md)
