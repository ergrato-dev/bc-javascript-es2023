# Ejercicio 03: Generadores y yield

## 🎯 Objetivo

Dominar las funciones generadoras usando `function*` y `yield` para crear secuencias de valores controladas.

---

## 📖 Conceptos Clave

### Generadores

Un generador es una función especial que puede pausar su ejecución y reanudarla después:

```javascript
function* myGenerator() {
  yield 1;  // Pausa aquí, retorna 1
  yield 2;  // Pausa aquí, retorna 2
  yield 3;  // Pausa aquí, retorna 3
}

const gen = myGenerator();
gen.next(); // { value: 1, done: false }
gen.next(); // { value: 2, done: false }
gen.next(); // { value: 3, done: false }
gen.next(); // { value: undefined, done: true }
```

### yield vs yield*

- `yield`: Produce un solo valor
- `yield*`: Delega a otro iterable (produce todos sus valores)

```javascript
function* combined() {
  yield 1;
  yield* [2, 3, 4];  // Delega al array
  yield 5;
}
// Produce: 1, 2, 3, 4, 5
```

---

## 🚀 Instrucciones

1. Abre `starter/index.js`
2. Lee cada sección y descomenta el código
3. Ejecuta con `node index.js`
4. Experimenta modificando los generadores

---

## 📝 Pasos del Ejercicio

### Paso 1: Generador Básico

Crea tu primer generador con `function*` y `yield`.

### Paso 2: Generador con Estado

Generadores que mantienen estado entre yields.

### Paso 3: yield* Delegación

Delega la iteración a otros iterables.

### Paso 4: Generador Infinito

Secuencias que nunca terminan (lazy evaluation).

### Paso 5: Pasar Valores a Generadores

Comunicación bidireccional con `next(value)`.

### Paso 6: Generadores Prácticos

Casos de uso del mundo real.

---

## ✅ Resultado Esperado

```
--- Paso 1: Generador Básico ---
Primer valor: 1
Todos los valores: [ 1, 2, 3 ]
Con for...of: uno dos tres

--- Paso 2: Generador con Estado ---
ID: user-1
ID: user-2
ID: user-3

--- Paso 3: yield* Delegación ---
Combinado: [ 1, 2, 3, 'a', 'b', 'c' ]
Flatten: [ 1, 2, 3, 4, 5 ]

--- Paso 4: Generador Infinito ---
Primeros 5 naturales: [ 0, 1, 2, 3, 4 ]
Fibonacci: [ 1, 1, 2, 3, 5, 8, 13, 21 ]

--- Paso 5: Pasar Valores ---
Pregunta: ¿Tu nombre?
Respuesta: Hola, Ana

--- Paso 6: Generadores Prácticos ---
Rango: [ 1, 2, 3, 4, 5 ]
Pares: [ 0, 2, 4, 6, 8 ]
Chunks: [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
```

---

## 💡 Tips

- Los generadores son **lazy**: no ejecutan hasta que llamas `next()`
- El asterisco `*` puede ir junto a `function` o al nombre
- `yield*` es útil para componer generadores
- Usa `return` para terminar un generador con un valor final

---

## 📚 Recursos

- [MDN: function*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)
- [MDN: yield](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield)
