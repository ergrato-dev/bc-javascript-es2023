# 🧱 SOLID

## 🎯 Objetivos

- Explicar los cinco principios SOLID con ejemplos en JavaScript, con funciones y objetos.
- Reconocer cuándo una función tiene más de una razón para cambiar.
- Añadir comportamiento sin cambiar el código que ya funciona.
- Recibir las dependencias en lugar de importarlas, y relacionarlo con los dobles de prueba.

**SOLID** son cinco principios de diseño reunidos por Robert C. Martin a principios de los 2000, con la inicial de cada uno. Nacieron para lenguajes con clases, como Java, pero las ideas valen para funciones y módulos. Ninguno es una ley: son preguntas para hacerse cuando un cambio pequeño obliga a tocar muchos sitios.

---

## 📋 Contenido

### 1. S: una sola responsabilidad

> Un módulo debe tener una sola razón para cambiar (*Single Responsibility Principle*).

«Razón para cambiar» quiere decir quién pide el cambio. Una función que calcula un informe y además lo escribe como texto cambia cuando Ventas pide otro cálculo y cuando Diseño pide otro formato:

```js
// Dos responsabilidades: calcular y escribir.
const report = (items) => {
  const total = items.reduce((sum, item) => sum + item.visitors, 0);
  return `Visitantes: ${total.toLocaleString('es-ES')}`;
};

// Una cada una.
const totalVisitors = (items) => items.reduce((sum, item) => sum + item.visitors, 0);
const formatTotal = (total) => `Visitantes: ${total.toLocaleString('es-ES')}`;
```

Es la regla de «funciones que hacen una cosa» de la [teoría 03](03-clean-code.md#2-funciones-que-hacen-una-cosa), aplicada a módulos enteros: `logic.js` cambia cuando cambian las reglas, `main.js` cuando cambia la página.

### 2. O: abierto a añadir, cerrado a cambiar

> Debe poder añadirse comportamiento sin modificar el código que ya funciona (*Open/Closed Principle*).

El `switch` del envío de la [teoría 02](02-observer-strategy.md#4-strategy-un-objeto-en-lugar-de-un-switch) está cerrado a añadir: un método nuevo obliga a abrir la función. Con estrategias está abierto:

```js
SHIPPING.pickup = () => 0; // un método nuevo
shippingCost('pickup', 2); // shippingCost no ha cambiado
```

El Observer hace lo mismo con los interesados en un evento: uno nuevo se suscribe sin tocar al emisor. Las dos herramientas habituales en JavaScript son un **objeto de funciones** y **funciones que reciben funciones** (como `toSorted(compare)`).

### 3. L: lo que sustituye, cumple lo mismo

> Un objeto debe poder cambiarse por otro del mismo tipo sin que el programa falle (*Liskov Substitution Principle*).

En JavaScript no hace falta heredar de nada: «del mismo tipo» quiere decir con la misma forma y el mismo comportamiento. Los avisadores de la fábrica de la [teoría 01](01-module-singleton-factory.md#4-factory-que-elige-qué-crear) se pueden usar unos por otros porque todos tienen `send(text)` y todos devuelven un texto. Uno que no cumpliera la promesa rompería el bucle que los usa:

```js
// Rompe la sustitución: send devuelve una promesa en lugar de un texto, y lanza con textos largos.
const push = {
  kind: 'push',
  send: async (text) => {
    if (text.length > 100) throw new Error('Demasiado largo');
    return `Push: ${text}`;
  },
};
```

El bucle no falla al llamar a `push.send`, pero escribiría `Promise { ... }` en lugar del texto. Al escribir un objeto que va a sustituir a otro (una estrategia nueva, un doble de prueba), comprueba que acepta lo mismo y devuelve lo mismo.

### 4. I: interfaces pequeñas

> Nadie debe depender de métodos que no usa (*Interface Segregation Principle*).

Si una función solo necesita leer, no le pases un objeto con veinte métodos para leer, escribir y borrar: dale lo que usa.

```js
// Depende de todo el almacén, aunque solo lee.
const lowItems = (stock) => stock.list().filter((item) => item.units < 3);

// Depende solo de una lista.
const lowItemsOf = (items) => items.filter((item) => item.units < 3);
```

La segunda se prueba con un array de dos elementos, sin crear un almacén ni un doble con veinte métodos. Es el principio que hay detrás de los dobles «tan simples como pueden» de la [semana 26](../../week-26-testing_vitest_parte_2/1-teoria/05-buenas-practicas.md#3-los-dobles-justos).

### 5. D: depender de lo que recibes, no de lo que importas

> Los módulos de alto nivel no deben depender de los detalles: los dos dependen de una interfaz (*Dependency Inversion Principle*).

Un cliente que importa `fetch` directamente queda atado a la red. Uno que lo **recibe** depende solo de «algo que se llama como `fetch` y devuelve una respuesta»:

```js
// Atado a la red de verdad.
const loadProduct = async (id) => (await fetch(`/api/products/${id}`)).json();

// Recibe la dependencia, con la de verdad por defecto.
const loadProduct = async (id, { fetchFn = globalThis.fetch } = {}) =>
  (await fetchFn(`/api/products/${id}`)).json();
```

- **Qué:** la función recibe lo que necesita para hablar con el exterior, en lugar de buscarlo ella. A esto se le llama **inyección de dependencias**.
- **Para qué:** en los tests recibe un doble ([semana 26](../../week-26-testing_vitest_parte_2/1-teoria/01-dobles-de-prueba.md)); en la aplicación, el de verdad. El mismo código funciona con un servidor, con una caché o con datos en memoria.
- **Impacto:** el reportero del proyecto de esta semana recibe su emisor: `createReporter({ emitter })`. Si no lo recibe, crea uno. Las dos cosas a la vez, recibir la dependencia y tener un valor por defecto, dan funciones fáciles de probar y de usar.

### 6. Los cinco en una tabla

| Principio | Pregunta que hace | Herramienta en JavaScript |
|---|---|---|
| S | ¿Cuántos motivos distintos tiene esto para cambiar? | Funciones y módulos pequeños |
| O | ¿Puedo añadir un caso sin abrir esta función? | Objetos de estrategias, *callbacks*, eventos |
| L | ¿Puedo cambiar este objeto por otro del mismo tipo sin sorpresas? | La misma forma y el mismo comportamiento |
| I | ¿Recibe esta función más de lo que usa? | Pasar solo los datos o métodos que hacen falta |
| D | ¿Busca esta función sus dependencias o las recibe? | Parámetros con valor por defecto |

Aplicar SOLID en un programa de cincuenta líneas lo complica sin ganar nada. Los principios pagan cuando el código crece y cambia; úsalos para decidir **dónde** cortar cuando una función o un módulo se ha vuelto difícil de cambiar.

---

## 🧪 Pruébalo

El [proyecto](../3-proyecto/README.md) los usa todos: `validateItem` con una lista de reglas (S), `SORTERS` abierto a criterios nuevos (O, L), funciones que reciben solo lo que usan (I) y `createReporter` que recibe su emisor (D).

## ✅ Checklist de aprendizaje

- [ ] Explico cada letra de SOLID con un ejemplo en JavaScript, sin clases.
- [ ] Reconozco una función con más de una razón para cambiar y la divido.
- [ ] Añado un caso a un objeto de estrategias sin cambiar la función que lo usa.
- [ ] Compruebo que un objeto que sustituye a otro acepta y devuelve lo mismo.
- [ ] Escribo funciones que reciben sus dependencias, con la de verdad por defecto.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Teoría — ✨ Clean code](03-clean-code.md) | [Teoría — 🔧 Code smells, refactorizar y herramientas](05-refactorizar-y-herramientas.md) → |

[↑ Semana 27](../README.md)
