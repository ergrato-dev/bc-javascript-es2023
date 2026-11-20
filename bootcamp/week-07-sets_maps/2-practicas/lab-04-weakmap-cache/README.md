# Lab 04 — WeakMap, WeakSet y caché

## Objetivo

Asociar datos a objetos con `WeakMap` sin impedir que se liberen de la memoria, conocer qué claves acepta (objetos y, desde ES2023, Symbols no registrados) y qué no puede hacer, y usarlo para datos privados y cachés. Marcar objetos ya visitados con `WeakSet` y combinar los dos en un sistema de sesiones.

**Tiempo:** 60 min · **Teoría:** [05 - WeakSet y WeakMap](../../1-teoria/05-weak-collections.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 6 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-07-sets_maps/2-practicas/lab-04-weakmap-cache
node starter/index.js
```

Las salidas de este README se obtuvieron con Node 24. Los pasos que aún no descomentaste solo imprimen su título.

La idea de fondo: un `Map` mantiene vivas sus claves mientras exista el Map. Un `WeakMap` las sujeta de forma «débil»: si el objeto clave ya no se usa en ningún otro sitio, el recolector de basura (*garbage collector*, la parte del motor que libera la memoria que nadie usa) puede borrarlo, y su entrada desaparece del WeakMap. No se puede observar ese momento desde el código, así que el lab muestra las reglas que se derivan de él.

---

## Paso 1: qué claves acepta

Un objeto vale como clave. Un string no: lanza un `TypeError` cuyo mensaje imprime el `catch`. Desde ES2023 también vale un Symbol creado con `Symbol()`, porque es único y puede liberarse. Uno creado con `Symbol.for()` no, porque vive en un registro global y nunca se libera.

```text
--- Paso 1: Map vs WeakMap ---
WeakMap creado con éxito
Valor obtenido: datos asociados
Clave primitiva: Invalid value used as weak map key
Valor con clave Symbol: datos de la sesión
Symbol.for(): Invalid value used as weak map key
```

## Paso 2: lo que no tiene

Como las entradas pueden desaparecer en cualquier momento, un WeakMap no tiene `size` ni se puede recorrer: solo `set`, `get`, `has` y `delete`. Las seis líneas con `wm` no imprimen nada; están para que veas los cuatro métodos.

```text
--- Paso 2: Limitaciones de WeakMap ---
WeakMap no tiene: size, keys(), values(), entries(), clear()
Métodos disponibles: set, get, has, delete
```

## Paso 3: datos privados

Antes de que existieran los campos `#privados` (semana 03), este era el patrón para esconder datos: un WeakMap fuera de la clase con `this` como clave. `Object.keys(account)` solo ve `owner`. Hoy, para una clase tuya, usa `#balance`; el WeakMap sigue sirviendo para colgar datos de objetos que no creaste tú.

```text
--- Paso 3: Datos Privados ---
Cuenta creada para Alice
Balance (con PIN correcto): 1000
Balance (PIN incorrecto): Error - PIN inválido
Propiedades públicas: owner
¿balance es accesible directamente? undefined
```

## Paso 4: una caché que no retiene

Es la caché del lab 03, pero con el objeto como clave. Si `data` dejara de usarse (por ejemplo, si fuera un `let` y le asignaras `null`), su resultado guardado también podría liberarse. Con un `Map`, la caché lo mantendría en memoria para siempre: eso es una fuga de memoria (*memory leak*).

```text
--- Paso 4: Caché sin Memory Leak ---
Primera llamada: { id: 1, processed: true }
Segunda llamada: { id: 1, processed: true }
Lecturas del caché: 1
```

## Paso 5: WeakSet para marcar

Un WeakSet guarda objetos sin valor asociado: solo responde si un objeto «está marcado». Los tres nodos forman un ciclo (`node3.next` vuelve a `node1`); sin `visited`, `processNode` se llamaría a sí misma sin fin.

```text
--- Paso 5: WeakSet para Marcar Objetos ---
Procesando: node1
Procesando: node2
Procesando: node3
node1 ya fue visitado (evitando ciclo)
```

## Paso 6: sesiones

`userData` (WeakMap) guarda los datos de cada usuario y `activeSessions` (WeakSet) marca quién tiene la sesión abierta. Un segundo `login` seguido lanza un error; después de `logout` se puede volver a entrar.

```text
--- Paso 6: Sistema Completo ---
Usuario creado: user_alice
Sesión iniciada para: Alice
Intentando iniciar otra sesión...
Error: Usuario ya tiene sesión activa
Sesión cerrada para: Alice
Sesión iniciada para: Alice

✅ Lab completado.
```

---

## Comprobación

1. En el paso 1, prueba `weakMap.set(42, 'x')` y `weakMap.set(null, 'x')`. ¿Qué pasa?
2. En el paso 2, ¿qué imprime `wm.size`? ¿Por qué no da error?
3. En el paso 6, ¿por qué `activeSessions` es un WeakSet y no un Set? Piensa en qué pasa cuando un usuario deja de existir.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 03 — Map básico](../lab-03-map-basics/README.md) | [Proyecto — Mapa de la colección](../../3-proyecto/README.md) → |

[↑ Semana 07](../../README.md)
