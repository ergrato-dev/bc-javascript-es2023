# 🛠️ Iterables Personalizados

## 🎯 Objetivos

- Crear clases y objetos iterables
- Implementar Symbol.iterator de diferentes formas
- Diseñar estructuras de datos iterables
- Combinar clases con generadores

---

## 📖 ¿Por qué Iterables Personalizados?

Crear iterables personalizados permite:

- ✅ Usar `for...of` con tus propias estructuras
- ✅ Aplicar spread operator `[...obj]`
- ✅ Usar destructuring `const [a, b] = obj`
- ✅ Compatibilidad con `Array.from()`, `Map`, `Set`, etc.

---

## 🔧 Métodos de Implementación

### 1. Objeto con Symbol.iterator Manual

```javascript
const countdown = {
  from: 5,
  to: 1,

  [Symbol.iterator]() {
    let current = this.from;
    const end = this.to;

    return {
      next() {
        if (current >= end) {
          return { value: current--, done: false };
        }
        return { done: true };
      }
    };
  }
};

console.log([...countdown]); // [5, 4, 3, 2, 1]
```

### 2. Objeto con Generador

```javascript
const countdown = {
  from: 5,
  to: 1,

  *[Symbol.iterator]() {
    for (let i = this.from; i >= this.to; i--) {
      yield i;
    }
  }
};

console.log([...countdown]); // [5, 4, 3, 2, 1]
```

### 3. Clase con Iterator Manual

```javascript
class Range {
  constructor(start, end, step = 1) {
    this.start = start;
    this.end = end;
    this.step = step;
  }

  [Symbol.iterator]() {
    let current = this.start;
    const end = this.end;
    const step = this.step;

    return {
      next() {
        if (current <= end) {
          const value = current;
          current += step;
          return { value, done: false };
        }
        return { done: true };
      }
    };
  }
}

const range = new Range(1, 5);
console.log([...range]); // [1, 2, 3, 4, 5]

const evens = new Range(0, 10, 2);
console.log([...evens]); // [0, 2, 4, 6, 8, 10]
```

### 4. Clase con Generador

```javascript
class Range {
  constructor(start, end, step = 1) {
    this.start = start;
    this.end = end;
    this.step = step;
  }

  *[Symbol.iterator]() {
    for (let i = this.start; i <= this.end; i += this.step) {
      yield i;
    }
  }
}

const range = new Range(1, 5);
console.log([...range]); // [1, 2, 3, 4, 5]
```

---

## 🏗️ Estructuras de Datos Iterables

### LinkedList Iterable

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  *[Symbol.iterator]() {
    let current = this.head;

    while (current) {
      yield current.value;
      current = current.next;
    }
  }
}

const list = new LinkedList();
list.append(1).append(2).append(3);

console.log([...list]);      // [1, 2, 3]

for (const val of list) {
  console.log(val);          // 1, 2, 3
}
```

### Stack Iterable (LIFO)

```javascript
class Stack {
  #items = [];

  push(item) {
    this.#items.push(item);
    return this;
  }

  pop() {
    return this.#items.pop();
  }

  peek() {
    return this.#items[this.#items.length - 1];
  }

  get size() {
    return this.#items.length;
  }

  // Iterar desde el top (último agregado primero)
  *[Symbol.iterator]() {
    for (let i = this.#items.length - 1; i >= 0; i--) {
      yield this.#items[i];
    }
  }
}

const stack = new Stack();
stack.push('first').push('second').push('third');

console.log([...stack]); // ['third', 'second', 'first']
```

### Queue Iterable (FIFO)

```javascript
class Queue {
  #items = [];

  enqueue(item) {
    this.#items.push(item);
    return this;
  }

  dequeue() {
    return this.#items.shift();
  }

  get size() {
    return this.#items.length;
  }

  *[Symbol.iterator]() {
    yield* this.#items;
  }
}

const queue = new Queue();
queue.enqueue('first').enqueue('second').enqueue('third');

console.log([...queue]); // ['first', 'second', 'third']
```

---

## 🎮 Iterables con Múltiples Formas

Una clase puede ofrecer diferentes formas de iteración:

```javascript
class Matrix {
  constructor(rows) {
    this.data = rows;
    this.rows = rows.length;
    this.cols = rows[0]?.length || 0;
  }

  // Iteración por defecto: fila por fila
  *[Symbol.iterator]() {
    for (const row of this.data) {
      yield* row;
    }
  }

  // Iterar por filas
  *byRows() {
    for (const row of this.data) {
      yield row;
    }
  }

  // Iterar por columnas
  *byColumns() {
    for (let col = 0; col < this.cols; col++) {
      const column = [];
      for (let row = 0; row < this.rows; row++) {
        column.push(this.data[row][col]);
      }
      yield column;
    }
  }

  // Iterar diagonal
  *diagonal() {
    const min = Math.min(this.rows, this.cols);
    for (let i = 0; i < min; i++) {
      yield this.data[i][i];
    }
  }
}

const matrix = new Matrix([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]);

console.log([...matrix]);          // [1,2,3,4,5,6,7,8,9]
console.log([...matrix.byRows()]); // [[1,2,3],[4,5,6],[7,8,9]]
console.log([...matrix.byColumns()]); // [[1,4,7],[2,5,8],[3,6,9]]
console.log([...matrix.diagonal()]);  // [1, 5, 9]
```

---

## 🔄 Iterables Infinitos

```javascript
class InfiniteSequence {
  constructor(generatorFn) {
    this.generatorFn = generatorFn;
  }

  [Symbol.iterator]() {
    return this.generatorFn();
  }

  take(n) {
    const self = this;
    return {
      *[Symbol.iterator]() {
        let count = 0;
        for (const value of self) {
          if (count >= n) return;
          yield value;
          count++;
        }
      }
    };
  }

  skip(n) {
    const self = this;
    return new InfiniteSequence(function* () {
      let count = 0;
      for (const value of self) {
        if (count >= n) yield value;
        count++;
      }
    });
  }
}

// Números naturales
const naturals = new InfiniteSequence(function* () {
  let n = 1;
  while (true) yield n++;
});

console.log([...naturals.take(5)]);        // [1, 2, 3, 4, 5]
console.log([...naturals.skip(5).take(5)]); // [6, 7, 8, 9, 10]
```

---

## 📦 Colección con Filtrado

```javascript
class Collection {
  constructor(items = []) {
    this.items = [...items];
  }

  add(item) {
    this.items.push(item);
    return this;
  }

  *[Symbol.iterator]() {
    yield* this.items;
  }

  *filter(predicate) {
    for (const item of this.items) {
      if (predicate(item)) yield item;
    }
  }

  *map(transform) {
    for (const item of this.items) {
      yield transform(item);
    }
  }

  where(predicate) {
    return new Collection(this.filter(predicate));
  }

  select(transform) {
    return new Collection(this.map(transform));
  }
}

const users = new Collection([
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
]);

// Filtrado lazy con generadores
for (const user of users.filter(u => u.age > 25)) {
  console.log(user.name); // 'Bob', 'Charlie'
}

// Encadenamiento
const names = users
  .where(u => u.age >= 30)
  .select(u => u.name);

console.log([...names]); // ['Bob', 'Charlie']
```

---

## 🌳 Árbol Iterable

```javascript
class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    const child = new TreeNode(value);
    this.children.push(child);
    return child;
  }

  // Depth-First (Pre-order)
  *[Symbol.iterator]() {
    yield this.value;
    for (const child of this.children) {
      yield* child;
    }
  }

  // Breadth-First
  *breadthFirst() {
    const queue = [this];

    while (queue.length > 0) {
      const node = queue.shift();
      yield node.value;
      queue.push(...node.children);
    }
  }

  // Solo hojas (nodos sin hijos)
  *leaves() {
    if (this.children.length === 0) {
      yield this.value;
    } else {
      for (const child of this.children) {
        yield* child.leaves();
      }
    }
  }
}

const root = new TreeNode('A');
const b = root.addChild('B');
const c = root.addChild('C');
b.addChild('D');
b.addChild('E');
c.addChild('F');

//       A
//      / \
//     B   C
//    / \   \
//   D   E   F

console.log([...root]);              // ['A','B','D','E','C','F']
console.log([...root.breadthFirst()]); // ['A','B','C','D','E','F']
console.log([...root.leaves()]);     // ['D', 'E', 'F']
```

---

## 🎯 Patrón Iterable Completo

```javascript
class Playlist {
  #songs = [];
  #currentIndex = 0;

  constructor(name) {
    this.name = name;
  }

  addSong(song) {
    this.#songs.push(song);
    return this;
  }

  get length() {
    return this.#songs.length;
  }

  // Iteración normal
  *[Symbol.iterator]() {
    yield* this.#songs;
  }

  // Iteración infinita (loop)
  *loop() {
    while (true) {
      yield* this.#songs;
    }
  }

  // Shuffle
  *shuffle() {
    const shuffled = [...this.#songs].sort(() => Math.random() - 0.5);
    yield* shuffled;
  }

  // Reverse
  *reverse() {
    for (let i = this.#songs.length - 1; i >= 0; i--) {
      yield this.#songs[i];
    }
  }
}

const playlist = new Playlist('My Favorites');
playlist
  .addSong('Song A')
  .addSong('Song B')
  .addSong('Song C');

console.log([...playlist]);         // ['Song A', 'Song B', 'Song C']
console.log([...playlist.reverse()]); // ['Song C', 'Song B', 'Song A']

// Tomar 7 canciones del loop infinito
const looped = playlist.loop();
const sevenSongs = [];
for (let i = 0; i < 7; i++) {
  sevenSongs.push(looped.next().value);
}
console.log(sevenSongs);
// ['Song A','Song B','Song C','Song A','Song B','Song C','Song A']
```

---

## 🎯 Resumen

```javascript
// 1. Objeto simple con generador
const obj = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
  }
};

// 2. Clase con generador
class MyClass {
  *[Symbol.iterator]() {
    yield* this.data;
  }
}

// 3. Múltiples iteradores
class Multi {
  *[Symbol.iterator]() { /* default */ }
  *byX() { /* alternativa */ }
  *byY() { /* otra alternativa */ }
}

// 4. Beneficios:
// - Compatible con for...of
// - Compatible con spread [...]
// - Compatible con destructuring
// - Compatible con Array.from()
```

---

## 📚 Recursos

- [MDN: Symbol.iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)
- [JavaScript.info: Iterables](https://javascript.info/iterable)

---

[⬅️ yield y Delegación](04-yield-delegation.md) | [Volver al README ➡️](../README.md)
