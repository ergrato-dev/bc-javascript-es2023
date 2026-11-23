# 📖 Glosario - Semana 27: Patrones de Diseño y Clean Code

Términos clave de esta semana ordenados alfabéticamente.

---

## C

### Cláusula de guarda
`if` al principio de una función que trata un caso especial y sale con `return`. Evita anidar el resto de la función dentro de un `else`.

### Clean code
Código fácil de leer y de cambiar por alguien que no lo escribió: nombres claros, funciones cortas que hacen una cosa, sin números mágicos ni efectos escondidos.

### Closure
Una función que recuerda las variables de la función que la creó, aunque esa ya haya terminado. Es lo que hace privados los datos de una función fábrica.

### Code smell
Señal en el código de que algo puede estar mal diseñado, aunque funcione: una función larga, muchos parámetros, código duplicado, anidamiento profundo.

### Complejidad ciclomática
Número de caminos distintos que puede seguir una función: uno de base más uno por cada `if`, bucle, `&&`, `||`, `??`, `?.`, operador ternario o valor por defecto. ESLint la limita con la regla `complexity`.

## D

### DRY
*Don't Repeat Yourself*: cada idea escrita en un solo sitio. No quiere decir juntar todo el código que se parece, sino el que representa la misma regla.

## E

### Emisor de eventos
Objeto con `on` para suscribirse a un evento y `emit` para avisar a los suscritos. Es la forma habitual de escribir el patrón Observer en JavaScript.

### ESLint
*Linter* de JavaScript: lee el código sin ejecutarlo y avisa de lo que incumple las reglas de `eslint.config.js`.

## F

### Factory (función fábrica)
Función que crea y devuelve un objeto nuevo en cada llamada, como `createInventory()`. En su sentido clásico, la que elige qué tipo de objeto crear según un dato.

## I

### Inyección de dependencias
Pasar a una función o a una fábrica lo que necesita para hablar con el exterior (`fetch`, un emisor, el reloj) en lugar de que lo importe ella. Es la D de SOLID.

## L

### Linter
Herramienta que analiza el código sin ejecutarlo para encontrar errores probables y saltos de las reglas del proyecto.

## M

### Module (patrón)
Unidad de código que agrupa un tema y decide qué se ve desde fuera. En JavaScript moderno, cada archivo con `export` lo es.

### Número mágico
Valor escrito en el código sin nombre que diga qué significa, como `4.95` o `0.1`. Se cambia por una constante con nombre.

## O

### Objeto de opciones
Un objeto como último parámetro en lugar de varios parámetros posicionales: `orderTotal(lines, { coupon })`. Se lee sin abrir la función y el orden no importa.

### Observer
Patrón en el que un objeto emite eventos y otros se suscriben a ellos, sin que el emisor sepa quién escucha. `addEventListener` es un Observer.

## P

### Patrón de diseño
Solución conocida, con nombre, a un problema que se repite al diseñar programas. No es código para copiar, sino una forma de organizarlo.

### Prettier
Formateador de código: reescribe sangría, comillas, punto y coma y saltos de línea con un formato fijo, sin cambiar lo que hace el código.

## R

### Refactorizar
Cambiar la estructura del código sin cambiar lo que hace: mismas entradas, mismas salidas, mismos efectos. Se hace en pasos pequeños, con los tests en verde después de cada uno.

## S

### Singleton
Objeto del que solo existe una instancia en todo el programa. En JavaScript, un módulo con estado lo es: se ejecuta una sola vez y todos sus `import` reciben el mismo.

### SOLID
Cinco principios de diseño: una sola responsabilidad, abierto a añadir y cerrado a cambiar, sustitución de Liskov, interfaces pequeñas e inversión de dependencias.

### Strategy
Patrón en el que cada forma de hacer algo es una función, y se elige una por un dato, normalmente con un objeto: un objeto `SHIPPING` con una función por método de envío, en lugar de un `switch`.

## T

### Test de caracterización
Test que apunta lo que el código hace hoy, también lo que parece un error, para poder refactorizarlo sabiendo si algo cambia.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Recursos — web](../4-recursos/webgrafia/README.md) | — |

[↑ Semana 27](../README.md)
