# Lab 02 — Métodos estáticos

## Objetivo

Escribir métodos y propiedades que pertenecen a la **clase** y no a cada objeto (`static`), y usarlos para utilidades, contadores compartidos y métodos que crean objetos (*factory*).

**Tiempo:** 40 min · **Teoría:** [02 - Métodos estáticos](../../1-teoria/02-metodos-estaticos.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 6 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-03-clases_programacion_orientada_objetos/2-practicas/lab-02-metodos-estaticos
node starter/index.js
```

Las salidas de este README se obtuvieron con Node 24. Los pasos que aún no descomentaste solo imprimen su título.

---

## Paso 1: métodos estáticos

Un método `static` se llama sobre la clase, sin `new`: `MathUtils.add(5, 3)`. Sirve para funciones que no necesitan datos de un objeto concreto, solo sus argumentos.

```text
--- Paso 1: Métodos Estáticos Básicos ---
5 + 3 = 8
4 × 7 = 28
10 es par: true
7 es par: false
```

## Paso 2: una clase de utilidades

`Validator` agrupa comprobaciones relacionadas, todas `static` y todas devuelven `true` o `false`. Nadie crea un `Validator` con `new`: la clase solo sirve de espacio de nombres.

```text
--- Paso 2: Clase Validator ---
Email válido: true
Email inválido: false
URL válida: true
Password fuerte: true
Password débil: false
String vacío: true
Array vacío: true
```

## Paso 3: propiedades estáticas privadas

`static #counter = 0` es un único contador para toda la clase, y la `#` lo hace privado: desde fuera de la clase no se puede leer ni cambiar, solo a través de `sequential()`, `reset()` y `getCount()`. `padStart(5, '0')` rellena con ceros por la izquierda hasta 5 caracteres. Los campos privados se ven a fondo en la [teoría 05](../../1-teoria/05-campos-privados.md).

```text
--- Paso 3: Propiedades Estáticas Privadas ---
ID 1: ID-00001
ID 2: ID-00002
ID 3: ID-00003
UUID: 739bc46d-88a1-4f0b-a218-a39ad1f48de6
Contador: 3
Después de reset: ID-00001
```

El UUID se genera con `Math.random()`: el tuyo será distinto.

## Paso 4: utilidades de fechas

`DateUtils` trabaja con objetos `Date`. `getMonth()` cuenta los meses desde 0, por eso el código suma 1. `addDays` devuelve una fecha nueva, y `daysBetween` resta dos fechas (la resta da milisegundos) y divide entre los milisegundos de un día.

```text
--- Paso 4: Clase DateUtils ---
Hoy formateado: 2026-11-19
Hoy formato largo: 19/11/2026
¿Es hoy?: true
Próxima semana: 2026-11-26
¿Es futuro?: true
Días entre fechas: 7
```

Las fechas son las del día en que lo ejecutes.

## Paso 5: un contador por categoría

`static #counters = new Map()` guarda un contador por cada categoría. Un `Map` es una colección de pares clave-valor; `get` lee, `set` escribe. Cada categoría lleva su propia numeración.

```text
--- Paso 5: Contador por Categoría ---
USER-0001
USER-0002
ORDER-0001
ORDER-0002
PRODUCT-0001
Todos los contadores: { user: 2, order: 2, product: 1 }
```

## Paso 6: métodos factory

`User.createAdmin(...)`, `User.createGuest()` y `User.fromJSON(...)` son métodos estáticos que hacen el `new User(...)` por ti con valores ya preparados. El nombre dice qué tipo de usuario sale, y el constructor no se llena de condiciones.

```text
--- Paso 6: Factory Pattern ---
Admin: María (admin) - maria@admin.com
Guest: Guest (guest) - guest@temp.com
From JSON: Carlos (user) - carlos@mail.com

🎉 ¡Excelente! Has completado el lab de métodos estáticos.
Revisa cada paso y experimenta modificando los valores.
```

---

## Comprobación

1. En el paso 1, crea un objeto con `const utils = new MathUtils();` y llama a `utils.add(1, 2)`. ¿Qué error sale y por qué?
2. En el paso 3, añade `console.log(IdGenerator.#counter);` fuera de la clase. ¿Qué pasa antes incluso de ejecutar nada?
3. ¿Qué ventaja tiene `User.createGuest()` frente a escribir `new User('Guest', 'guest@temp.com', 'guest', new Date())` cada vez?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 01 — Clases básicas](../lab-01-clases-basicas/README.md) | [Lab 03 — Herencia](../lab-03-herencia/README.md) → |

[↑ Semana 03](../../README.md)
