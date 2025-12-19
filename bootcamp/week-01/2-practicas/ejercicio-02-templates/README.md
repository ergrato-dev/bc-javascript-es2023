# 📝 Ejercicio 02: Template Literals

## 🎯 Objetivos

- Dominar template literals con backticks
- Crear strings con interpolación de variables
- Usar strings multilínea
- Generar HTML dinámico

---

## 📋 Descripción

En este ejercicio trabajarás con template literals para crear strings dinámicos, eliminando la concatenación con `+` y usando interpolación moderna.

---

## 📝 Instrucciones

### Parte 1: Conversión de Concatenación

Convierte estos strings que usan concatenación a template literals:

```javascript
const firstName = 'Ana';
const lastName = 'García';
const age = 25;

const greeting = 'Hello, my name is ' + firstName + ' ' + lastName;
const info = 'I am ' + age + ' years old';
```

### Parte 2: Expresiones en Templates

Crea templates que incluyan:
- Operaciones matemáticas
- Llamadas a funciones
- Operador ternario
- Métodos de string

### Parte 3: Strings Multilínea

Crea un mensaje de bienvenida multilínea con formato.

### Parte 4: HTML Dinámico

Genera una tarjeta de usuario en HTML usando template literals.

### Parte 5: URLs Dinámicas

Crea URLs con parámetros dinámicos.

---

## ✅ Criterios de Éxito

- [ ] Usar backticks en lugar de comillas
- [ ] Interpolación con `${}`
- [ ] Sin concatenación con `+`
- [ ] Código limpio y legible
- [ ] Comentarios en inglés

---

## 🚀 Ejecución

```bash
cd starter
node index.js
```

---

## 💡 Pistas

<details>
<summary>Pista 1: Sintaxis básica</summary>

```javascript
const name = 'Carlos';
const greeting = `Hello ${name}!`;
```
</details>

<details>
<summary>Pista 2: Expresiones</summary>

```javascript
const price = 100;
const total = `Total: €${price * 1.21}`;
```
</details>

<details>
<summary>Pista 3: Multilínea</summary>

```javascript
const poem = `Line 1
Line 2
Line 3`;
```
</details>

---

## 📚 Recursos

- [Teoría: Template Literals](../../1-teoria/03-template-literals.md)
- [MDN: Template Literals](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals)

---

<p align="center">
  <strong>📝 Buena suerte</strong><br>
  <em>Adiós concatenación, hola interpolación</em>
</p>
