# Ejercicio 01: Clases y Encapsulación

## 🎯 Objetivo

Practicar la creación de clases con campos privados, getters y métodos estáticos - los fundamentos de los modelos del proyecto.

---

## 📋 Conceptos a Practicar

- Campos privados con `#`
- Getters para valores computados
- Métodos estáticos de fábrica
- Método `toJSON()` para serialización

---

## 🏋️ Ejercicio

Vas a crear una clase `Book` que represente un libro en una biblioteca.

### Paso 1: Estructura Básica

Define la clase con campos privados:

```javascript
class Book {
  #id;
  #title;
  #author;
  #price;
  #available;
}
```

**Abre `starter/index.js`** y descomenta la sección del Paso 1.

---

### Paso 2: Constructor

Implementa el constructor usando destructuring:

```javascript
constructor({ id, title, author, price, available = true }) {
  this.#id = id;
  this.#title = title;
  this.#author = author;
  this.#price = price;
  this.#available = available;
}
```

**Descomenta** la sección del Paso 2.

---

### Paso 3: Getters Básicos

Añade getters para acceder a los campos privados:

```javascript
get id() { return this.#id; }
get title() { return this.#title; }
get author() { return this.#author; }
get price() { return this.#price; }
get available() { return this.#available; }
```

**Descomenta** la sección del Paso 3.

---

### Paso 4: Getter Computado

Crea un getter que formatee el precio:

```javascript
get formattedPrice() {
  return `$${this.#price.toFixed(2)}`;
}
```

**Descomenta** la sección del Paso 4.

---

### Paso 5: Métodos de Instancia

Añade métodos para cambiar disponibilidad:

```javascript
checkout() {
  if (!this.#available) {
    throw new Error('Book is not available');
  }
  this.#available = false;
}

return() {
  this.#available = true;
}
```

**Descomenta** la sección del Paso 5.

---

### Paso 6: Método toJSON()

Implementa serialización:

```javascript
toJSON() {
  return {
    id: this.#id,
    title: this.#title,
    author: this.#author,
    price: this.#price,
    available: this.#available
  };
}
```

**Descomenta** la sección del Paso 6.

---

### Paso 7: Método Estático

Crea un factory method:

```javascript
static create(data) {
  return new Book({
    id: crypto.randomUUID(),
    ...data
  });
}
```

**Descomenta** la sección del Paso 7.

---

## ✅ Resultado Esperado

```
--- Paso 3: Getters Básicos ---
Libro: Clean Code por Robert C. Martin
Precio: 45.99
Disponible: true

--- Paso 4: Getter Computado ---
Precio formateado: $45.99

--- Paso 5: Métodos de Instancia ---
Después de checkout: false
Después de return: true

--- Paso 6: toJSON ---
JSON: {"id":"1","title":"Clean Code","author":"Robert C. Martin","price":45.99,"available":true}

--- Paso 7: Método Estático ---
Nuevo libro creado: The Pragmatic Programmer
ID generado: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

---

## 🔗 Navegación

| ⬅️ Lista | Siguiente ➡️ |
|:---------|-------------:|
| [Ejercicios](../README.md) | [Ejercicio 02](../ejercicio-02-observer/README.md) |
