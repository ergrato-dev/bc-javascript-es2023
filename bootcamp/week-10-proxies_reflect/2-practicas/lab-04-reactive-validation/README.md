# Lab 04 — Validación reactiva

## Objetivo

Construir validadores reutilizables, aplicarlos con el trap `set`, avisar de cada cambio con el patrón Observer y combinarlo todo en un formulario que valida, guarda los errores y notifica.

**Tiempo:** 55 min · **Teoría:** [04 - Validación reactiva](../../1-teoria/04-validacion-reactiva.md) y [05 - Patrón Observer con Proxies](../../1-teoria/05-observadores.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 7 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-10-proxies_reflect/2-practicas/lab-04-reactive-validation
node starter/index.js
```

Las salidas de este README se obtuvieron con Node 24. Los pasos que aún no descomentaste solo imprimen su título.

---

## Paso 1: Validador simple

El trap `set` comprueba cada campo antes de guardarlo y lanza un error si el valor no es válido.

```text
--- Paso 1: Validador Simple ---
User created with valid data
Validation error: age must be a number
```

## Paso 2: Fábrica de validadores

Funciones como `validators.number(min, max)` devuelven un validador ya configurado. El esquema asocia cada propiedad con su validador.

```text
--- Paso 2: Fábrica de Validadores ---
Product created: Laptop, $999
Price error: price must be at most 10000
```

## Paso 3: Componer validadores

Una contraseña debe cumplir varias reglas. El validador compuesto las prueba en orden y devuelve el primer error que encuentra.

```text
--- Paso 3: Componer Validadores ---
Password set successfully
Password error: password must contain uppercase
```

## Paso 4: Observable básico

`observable()` envuelve un objeto y avisa a los suscriptores con el nombre de la propiedad, el valor anterior y el nuevo.

```text
--- Paso 4: Observable Básico ---
[Change] count: 0 → 1
[Change] count: 1 → 5
Final count: 5
```

## Paso 5: Store reactivo

El store admite suscripciones a una sola clave (`theme`) y suscripciones globales que reciben todos los cambios.

```text
--- Paso 5: Store Reactivo ---
[theme] light → dark
[Global] theme: light → dark
[Global] language: en → es
Theme: dark, Language: es
```

## Paso 6: Propiedades calculadas

`subtotal`, `tax` y `total` no se guardan: el trap `get` las calcula al leerlas a partir de los productos del carrito.

```text
--- Paso 6: Propiedades Computadas ---
Subtotal: $45
Tax (21%): $9.45
Total: $54.45
```

## Paso 7: Formulario completo

Los métodos (`onChange`, `isValid`...) se definen en el objeto original. Si se asignaran a través del proxy, el trap `set` los trataría como campos. Los valores inválidos no se guardan: se apuntan en `errors`.

```text
--- Paso 7: Sistema Completo ---
[Validated] name = Alice
[Validated] email = alice@test.com
[Error] age: age must be a positive number
Form valid: false
Errors: age

✅ Lab completado.
```

---

## Comprobación

1. En el paso 2, ¿qué ocurre si asignas `product.price = -1`?
2. En el paso 7, añade `form.age = 30;` antes de los `console.log`. ¿Qué imprimen ahora `Form valid` y `Errors`?
3. En el paso 7, registra `form.onError((prop, error) => console.log('Aviso:', prop));` antes de las asignaciones. ¿Cuántas veces se ejecuta?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 03 — La API Reflect](../lab-03-reflect/README.md) | [Proyecto — Fichas validadas en vivo](../../3-proyecto/README.md) → |

[↑ Semana 10](../../README.md)
