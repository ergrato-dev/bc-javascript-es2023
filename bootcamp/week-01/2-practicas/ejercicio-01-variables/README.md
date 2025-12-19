# 🔒 Ejercicio 01: Variables Modernas

## 🎯 Objetivos

- Dominar el uso de `const` y `let`
- Comprender block scope
- Evitar el uso de `var`
- Aplicar mejores prácticas modernas

---

## 📋 Descripción

En este ejercicio trabajarás con variables modernas, aprenderás cuándo usar `const` vs `let`, y comprenderás el concepto de block scope.

---

## 📝 Instrucciones

### Parte 1: Conversión de var a const/let

Convierte el siguiente código que usa `var` a código moderno con `const` y `let`:

```javascript
var appName = 'MyApp';
var version = '1.0.0';
var maxUsers = 100;

var counter = 0;
counter = counter + 1;
counter = counter + 1;

var user = {
  name: 'Ana',
  age: 25
};
user.age = 26;
```

### Parte 2: Block Scope

Completa el código para demostrar block scope:

```javascript
// TODO: Declarar variable global
const globalMessage = 'I am global';

if (true) {
  // TODO: Declarar variable de bloque
  // TODO: Mostrar ambas variables (global y bloque)
}

// TODO: Intentar acceder a la variable de bloque aquí (¿qué pasa?)
```

### Parte 3: Contador

Crea un sistema de contador que:
- Inicie en 0
- Se incremente 5 veces
- Muestre el valor final

```javascript
// TODO: Declarar contador
// TODO: Incrementar 5 veces
// TODO: Mostrar resultado
```

### Parte 4: Configuración

Crea un objeto de configuración que:
- Use `const` para el objeto
- Tenga propiedades: apiUrl, timeout, maxRetries
- Modifica solo las propiedades necesarias

```javascript
// TODO: Crear objeto config con const
// TODO: Modificar propiedades
// TODO: Intentar reasignar el objeto (¿qué pasa?)
```

### Parte 5: Loop con let

Crea un loop que muestre números del 1 al 5, explicando por qué se usa `let`:

```javascript
// TODO: Loop con let
// TODO: Comentar por qué se usa let y no const
```

---

## ✅ Criterios de Éxito

- [ ] Usar `const` por defecto
- [ ] Usar `let` solo cuando sea necesario reasignar
- [ ] No usar `var` en ningún lugar
- [ ] Código sin errores en consola
- [ ] Comentarios explicativos en inglés

---

## 🚀 Ejecución

```bash
# Navegar a la carpeta starter
cd starter

# Ejecutar el código
node index.js
```

---

## 💡 Pistas

<details>
<summary>Pista 1: ¿Cuándo usar const?</summary>

Usa `const` cuando el valor NO se reasignará:
```javascript
const PI = 3.14159;
const userName = 'Ana';
const config = { timeout: 5000 };
```
</details>

<details>
<summary>Pista 2: ¿Cuándo usar let?</summary>

Usa `let` cuando el valor SÍ cambiará:
```javascript
let counter = 0;
counter++;  // Reasignación necesaria

for (let i = 0; i < 5; i++) {  // i cambia en cada iteración
  console.log(i);
}
```
</details>

<details>
<summary>Pista 3: const con objetos</summary>

`const` evita reasignar la referencia, pero permite modificar el contenido:
```javascript
const user = { name: 'Ana' };
user.age = 25;  // ✅ OK
user = {};      // ❌ Error
```
</details>

---

## 📚 Recursos

- [Teoría: let y const](../../1-teoria/02-let-const.md)
- [MDN: const](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/const)
- [MDN: let](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/let)

---

## 🎓 Conceptos Clave

- **const**: Variable que no se puede reasignar
- **let**: Variable que sí se puede reasignar
- **Block Scope**: Alcance limitado al bloque `{}`
- **Reasignación**: Cambiar completamente el valor
- **Mutación**: Cambiar propiedades de un objeto

---

<p align="center">
  <strong>🔒 Buena suerte con el ejercicio</strong><br>
  <em>Recuerda: const por defecto, let cuando sea necesario</em>
</p>
