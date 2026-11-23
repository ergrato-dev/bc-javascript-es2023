# 🧪 Por qué escribir tests

## 🎯 Objetivos

- Explicar qué es un test automático y qué problema resuelve frente a probar a mano.
- Comprobar resultados con `node:assert` y conocer sus límites.
- Distinguir tests unitarios, de integración y de extremo a extremo.
- Reconocer qué código es fácil de probar y por qué el bootcamp separa `logic.js` de `main.js` desde la semana 05.
- Describir las cualidades de un buen test.

Hasta ahora has comprobado tu código ejecutándolo y mirando la consola o la página, y `scripts/verificar-semana.sh` comprobaba tus proyectos por ti. Esta semana escribes tú esas comprobaciones, para tu propio código.

---

## 📋 Contenido

### 1. Qué es un test

Un **test** es un trozo de código que ejecuta otro con unos datos concretos y compara lo que devuelve con lo que debería devolver. Si coinciden, pasa; si no, falla y te dice en qué.

```js
// El código que se prueba
const lineTotal = (line) => line.price * line.quantity;

// El test: con estos datos, el resultado debe ser 25
if (lineTotal({ price: 12.5, quantity: 2 }) !== 25) throw new Error('lineTotal falla');
```

- **Qué:** un programa que comprueba otro programa.
- **Para qué:** saber, en segundos y sin mirar nada, si el código hace lo que debe.
- **Impacto:** puedes cambiar el código (arreglar un error, hacerlo más rápido como en la semana 23, reorganizarlo) y saber al momento si has roto algo.

### 2. Probar a mano no basta

Probar a mano es ejecutar el código y mirar. Funciona la primera vez, pero tiene tres problemas:

1. **Es lento.** Cada prueba es abrir la página, escribir en el formulario, pulsar, mirar.
2. **Se olvida.** Tras un cambio pruebas lo que acabas de tocar, no lo de hace un mes.
3. **Depende de tus ojos.** `0.30000000000000004` y `0.3` se parecen mucho en una consola llena de líneas.

El error más típico es la **regresión**: algo que funcionaba deja de funcionar por un cambio en otra parte. Un test escrito una vez se ejecuta en cada cambio, para siempre, y no se cansa.

### 3. node:assert: comprobar sin herramientas

Node trae el módulo `node:assert`, que lanza un error cuando una comprobación no se cumple:

```js
import assert from 'node:assert/strict';

assert.equal(lineTotal({ price: 12.5, quantity: 2 }), 25); // no hace nada: coinciden
assert.deepEqual(['a', 'b'], ['a', 'b']);                   // compara arrays y objetos por dentro
assert.throws(() => JSON.parse('{'));                       // pasa si la función lanza un error
```

Si no coinciden, `assert.equal` lanza un `AssertionError` con los dos valores. Así lo muestra el [lab 01](../2-practicas/lab-01-primer-test/README.md#paso-2-que-lo-compruebe-el-programa):

```text
AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:

90 !== 80
```

Es lo que usaban los `checks.json` de las semanas anteriores. Para unas pocas comprobaciones basta, pero se queda corto:

- La primera comprobación que falla detiene el programa, y las de después no se ejecutan.
- No hay nombres ni grupos: no sabes qué comportamiento se ha roto, solo en qué línea.
- No hay resumen de cuántas pasan, ni filtro para ejecutar solo unas pocas.

Un **framework de tests** como Vitest resuelve todo eso ([teoría 02](02-vitest.md)).

### 4. Qué tipos de tests hay

| Tipo | Qué prueba | Ejemplo | Velocidad |
|---|---|---|---|
| **Unitario** | Una función o un módulo, solo | `paginate` devuelve la página 2 | Milisegundos |
| **De integración** | Varias piezas juntas | `requestJson` contra el `server.js` de la semana 24 | Décimas de segundo |
| **De extremo a extremo** (*e2e*) | La aplicación entera, como la usa una persona | Abrir la página, buscar y ver los resultados | Segundos |

Lo habitual es tener muchos unitarios, bastantes de integración y pocos de extremo a extremo. Los unitarios son rápidos y dicen exactamente qué falla; los de extremo a extremo prueban lo que la persona ve, pero son lentos y, cuando fallan, no dicen por qué. Esta semana es de tests unitarios; la semana 26 añade tests de integración y asíncronos.

### 5. Qué código es fácil de probar

Una **función pura** es la más fácil de probar: con los mismos argumentos devuelve siempre lo mismo y no cambia nada de fuera. Basta con llamarla y mirar lo que devuelve.

```js
// Fácil: entra un array, sale un número
export const cartTotal = (lines) => lines.reduce((sum, line) => sum + line.price * line.quantity, 0);

// Difícil: lee del DOM, escribe en el DOM y no devuelve nada
const showTotal = () => {
  const lines = JSON.parse(document.querySelector('#cart').dataset.lines);
  document.querySelector('#total').textContent = cartTotal(lines);
};
```

Por eso, desde la [semana 05](../../week-05-arrays_avanzados/README.md), cada proyecto separa `src/logic.js` (funciones puras, sin DOM) de `src/main.js` (DOM y eventos). `logic.js` se puede importar desde Node y probar con valores concretos; `main.js` es una capa fina que solo une la lógica con la página. Cuando algo es difícil de probar, suele ser una señal para separar la lógica de lo que la rodea.

### 6. Cómo es un buen test

- **Rápido:** milisegundos. Si los tests tardan, nadie los ejecuta.
- **Independiente:** no depende de que otro test se ejecute antes ([teoría 04](04-organizar-tests.md#3-cada-test-empieza-de-cero)).
- **Repetible:** da lo mismo cada vez. Nada de `Math.random()` ni de la hora real sin fijarla, como en los labs de la semana 21.
- **Concreto:** prueba un comportamiento, y su nombre lo dice: «un carrito vacío vale 0», no «test 3».
- **Que pueda fallar:** un test que pasa aunque el código esté mal no protege nada ([teoría 05](05-cobertura.md#5-lo-que-la-cobertura-no-mide)).

Los tests también son **documentación que se ejecuta**: quien lea `it('un carrito vacío vale 0')` sabe qué hace `cartTotal` con un array vacío, y sabe que es verdad, porque si dejara de serlo el test fallaría.

Un consejo para empezar: cuando encuentres un error, escribe primero el test que lo reproduce y comprueba que falla. Después arregla el código. Ese test impide que el error vuelva.

---

## 🧪 Pruébalo

Los pasos 1 y 2 del [lab 01](../2-practicas/lab-01-primer-test/README.md) prueban un carrito mirando la consola y con `node:assert`; los pasos siguientes, con Vitest.

## ✅ Checklist de aprendizaje

- [ ] Explico qué es un test y qué es una regresión.
- [ ] Escribo comprobaciones con `assert.equal`, `assert.deepEqual` y `assert.throws`, y sé qué les falta.
- [ ] Distingo un test unitario, uno de integración y uno de extremo a extremo.
- [ ] Explico por qué una función pura es fácil de probar y por qué `logic.js` no usa el DOM.
- [ ] Nombro las cualidades de un buen test.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Semana 25 - Testing con Vitest - Parte 1](../README.md) | [Teoría — ⚡ Vitest](02-vitest.md) → |

[↑ Semana 25](../README.md)
