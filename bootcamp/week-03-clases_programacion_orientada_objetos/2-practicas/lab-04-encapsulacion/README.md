# Lab 04 — Encapsulación

## Objetivo

Proteger el estado de un objeto: campos y métodos privados con `#`, getters para leerlo, setters que validan antes de cambiarlo y campos estáticos privados compartidos por toda la clase.

**Tiempo:** 45 min · **Teoría:** [04 - Getters y setters](../../1-teoria/04-getters-setters.md) y [05 - Campos privados](../../1-teoria/05-campos-privados.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 6 pasos. En cada uno, descomenta el código del paso (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-03-clases_programacion_orientada_objetos/2-practicas/lab-04-encapsulacion
node starter/index.js
```

Las salidas de este README se obtuvieron con Node 24. Los pasos que aún no descomentaste solo imprimen su título.

Cada paso va entre llaves `{ }`, que ya están sin comentar. Un bloque crea su propio ámbito: lo que declares dentro (`class`, `const`) solo existe ahí. Por eso cada paso puede volver a declarar la misma clase con más métodos sin que Node diga `Identifier 'BankAccount' has already been declared`.

---

## Paso 1: campos privados

`#password` es un campo privado: se declara al principio de la clase y solo el código de dentro de la clase puede usarlo. `user.username` se lee desde fuera; la contraseña no, solo se comprueba con `checkPassword`. La línea `user.#password` sigue comentada a propósito: si la descomentas, el archivo entero no llega a ejecutarse (`SyntaxError`).

```text
--- Paso 1: Campos Privados ---
Username: john_doe
Password correcto: true
Password incorrecto: false
```

## Paso 2: getters

`get balance() { ... }` se lee como una propiedad, sin paréntesis: `account.balance`. Así la clase decide qué enseña y cómo: el número de cuenta sale enmascarado (`slice(-4)` toma los 4 últimos caracteres) y el saldo con formato (`toFixed(2)`), mientras `#balance` sigue siendo un número.

```text
--- Paso 2: Getters ---
Cuenta: ****7890
Balance: $1500.50
Balance numérico: 1500.5
```

## Paso 3: setters con validación

`set price(value) { ... }` se ejecuta al asignar: `product.price = 899`. Si el valor no es válido, el setter lanza un error y el precio no cambia. El `try`/`catch` del paso captura ese error para imprimir su mensaje sin parar el programa.

```text
--- Paso 3: Setters con Validación ---
Precio inicial: 999
Precio actualizado: 899
Error esperado: Precio debe ser un número positivo
```

## Paso 4: métodos privados

`#validateAmount` y `#recordTransaction` son métodos de ayuda que solo usan `deposit` y `withdraw`. Al ser privados, nadie de fuera puede registrar una transacción falsa ni saltarse la validación.

```text
--- Paso 4: Métodos Privados ---
Estado de cuenta:
INITIAL: +1000 → 1000
DEPOSIT: +500 → 1500
WITHDRAW: -200 → 1300
```

## Paso 5: campos estáticos privados

`static #totalAccounts` y `static #allBalances` pertenecen a la clase, no a cada cuenta: cada `new BankAccount(...)` los incrementa, y solo se leen con los métodos estáticos `BankAccount.getTotalAccounts()` y `BankAccount.getTotalDeposits()`.

```text
--- Paso 5: Propiedades Estáticas Privadas ---
Cuenta 1: ACC-00001 - Balance: 1000
Cuenta 2: ACC-00002 - Balance: 2500
Cuenta 3: ACC-00003 - Balance: 500
Total de cuentas: 3
Balance total: 4000
```

## Paso 6: todo junto

`SecureAccount` combina lo anterior: el PIN y el contador de intentos son privados, `#verifyPin` lanza un error con cada PIN incorrecto y bloquea la cuenta al tercer intento (`static #MAX_ATTEMPTS = 3`), e `isLocked` es un getter de solo lectura.

```text
--- Paso 6: Sistema de Autenticación ---
Balance: 5000
PIN incorrecto. Intentos: 1/3
PIN incorrecto. Intentos: 2/3
Cuenta bloqueada por múltiples intentos fallidos
¿Bloqueada? true
Cuenta desbloqueada
Balance después de desbloquear: 5000

🎉 ¡Excelente! Has completado el lab de encapsulación.
Revisa cada paso y experimenta con los campos privados.
```

---

## Comprobación

1. En el paso 2, escribe `account.balance = 1000000;` y vuelve a imprimir `account.balance`. ¿Cambió? ¿Por qué?
2. En el paso 3, ¿qué pasa con `product.price = -5`? ¿Y con `product.price = '100'`?
3. ¿Qué diferencia hay entre `#password` y una propiedad `_password` (con guion bajo), que es la convención que se usaba antes de ES2022?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 03 — Herencia](../lab-03-herencia/README.md) | [Lab 05 — Static blocks](../lab-05-static-blocks/README.md) → |

[↑ Semana 03](../../README.md)
