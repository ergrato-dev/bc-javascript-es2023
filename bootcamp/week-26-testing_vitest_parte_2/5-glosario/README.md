# 📖 Glosario - Semana 26: Testing con Vitest - Parte 2

Términos clave de esta semana ordenados alfabéticamente.

---

## A

### afterAll / beforeAll
Funciones que Vitest ejecuta una vez después del último test (`afterAll`) o antes del primero (`beforeAll`) de un `describe`. Se usan para lo caro, como arrancar y parar un servidor.

## D

### Determinista
Test que da el mismo resultado cada vez que se ejecuta con el mismo código, sin depender de la hora, el azar, la red ni el orden de los tests.

### Doble de prueba
Pieza falsa que ocupa el lugar de una de verdad durante un test: responde algo fijo y apunta cómo la llamaron. En inglés, *test double*; Vitest los llama *mocks*.

## I

### Inyección de dependencias
Diseño en el que una función recibe sus dependencias (un `fetch`, un cobro, un reloj) como parámetros en lugar de buscarlas ella. Permite pasarle un doble en los tests.

### Integración (test de)
Test que prueba varias piezas juntas, de verdad y sin dobles entre ellas, como un cliente contra su servidor.

## M

### mock.calls
Array en el que un doble de Vitest guarda los argumentos de cada llamada: `[['A1'], ['A2']]` son dos llamadas con un argumento cada una.

### mockResolvedValue / mockRejectedValue
Métodos de un `vi.fn()` para que devuelva una promesa que se cumple con un valor o se rechaza con un error. Sirven para doblar funciones `async`, como `fetch`.

### mockReturnValue / mockImplementation
Métodos de un `vi.fn()` para decidir qué devuelve (`mockReturnValue`) o qué hace (`mockImplementation`). Con `Once` al final, solo en la siguiente llamada.

## P

### Puerto 0
Puerto que se pide al sistema para que asigne uno libre. Los servidores de los tests lo usan para no chocar con otros programas.

## R

### Refactorizar
Cambiar cómo está escrito el código sin cambiar lo que hace. En TDD se hace solo con los tests en verde.

### rejects / resolves
Modificadores de `expect` que esperan a una promesa: `resolves` aplica el matcher a su valor y `rejects` a su error. Llevan `await` delante.

### Reloj falso
Sustituto de `setTimeout`, `setInterval` y `Date` que se activa con `vi.useFakeTimers()`. El tiempo solo avanza cuando el test lo adelanta, sin esperar de verdad.

### Rojo, verde, refactorizar
Las tres fases de cada ciclo de TDD: un test que falla, el código mínimo para que pase y la mejora del código con todo en verde.

## T

### TDD
*Test-Driven Development*, desarrollo guiado por tests: escribir cada test antes del código que lo hace pasar, en ciclos cortos.

### Test inestable
Test que pasa unas veces y falla otras sin cambiar el código. En inglés, *flaky*. Suele depender de la hora, el azar, la red, esperas de verdad o el orden de los tests.

### Triangulación
Llegar a la solución general con varios ejemplos: cada test nuevo descarta una solución falsa, como un valor fijo.

## V

### vi.fn
Crea un doble: una función que devuelve `undefined`, salvo que se configure, y apunta cada llamada.

### vi.mock
Sustituye un módulo entero por el que devuelve su fábrica, para todo el archivo de test. Vitest lo sube por encima de los `import`.

### vi.spyOn
Pone un espía en el lugar de un método de un objeto (`Math.random`, `console.warn`). Sin más configuración, llama al método de verdad y apunta las llamadas. Se deshace con `vi.restoreAllMocks()`.

### vi.stubGlobal
Sustituye una variable global, como `fetch`. Se deshace con `vi.unstubAllGlobals()`.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Recursos — web](../4-recursos/webgrafia/README.md) | [Semana 27 - Patrones de Diseño y Clean Code](../../week-27-patrones_clean_code/README.md) → |

[↑ Semana 26](../README.md)
