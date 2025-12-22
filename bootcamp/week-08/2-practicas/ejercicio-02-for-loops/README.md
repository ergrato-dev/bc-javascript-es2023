# Ejercicio 02: for...of y for...in

## 🎯 Objetivo

Dominar las diferencias entre `for...of` y `for...in`, sabiendo cuándo usar cada uno correctamente.

---

## 📖 Conceptos Clave

### for...of vs for...in

| Aspecto | for...of | for...in |
|---------|----------|----------|
| Itera sobre | **Valores** | **Claves** |
| Funciona con | Iterables (arrays, strings, Map, Set) | Objetos |
| Arrays | ✅ Recomendado | ❌ No recomendado |
| Objetos planos | ❌ No funciona | ✅ Recomendado |

```javascript
const arr = ['a', 'b', 'c'];

// for...of → valores
for (const value of arr) {
  console.log(value); // 'a', 'b', 'c'
}

// for...in → índices (como strings)
for (const index in arr) {
  console.log(index); // '0', '1', '2'
}
```

---

## 🚀 Instrucciones

1. Abre `starter/index.js`
2. Lee cada sección y descomenta el código
3. Ejecuta con `node index.js`
4. Observa las diferencias en los resultados

---

## 📝 Pasos del Ejercicio

### Paso 1: for...of con Arrays

Itera sobre los valores de un array.

### Paso 2: for...in con Arrays (problemas)

Descubre por qué no se recomienda for...in con arrays.

### Paso 3: for...of con Strings

Itera sobre caracteres de un string.

### Paso 4: for...in con Objetos

Usa for...in para iterar propiedades de objetos.

### Paso 5: for...of con Map y Set

Itera sobre colecciones ES6.

### Paso 6: Object.entries() con for...of

La forma moderna de iterar objetos.

---

## ✅ Resultado Esperado

```
--- Paso 1: for...of con Arrays ---
Fruta: apple
Fruta: banana
Fruta: cherry
Con índice: 0 → apple
Con índice: 1 → banana
Con índice: 2 → cherry

--- Paso 2: for...in con Arrays (problemas) ---
Índice (tipo string): 0 (string)
Índice (tipo string): 1 (string)
Índice (tipo string): 2 (string)
⚠️ Propiedad extra: customProp

--- Paso 3: for...of con Strings ---
Letra: J
Letra: a
Letra: v
Letra: a
Emoji chars: 👨
(más caracteres del emoji)

--- Paso 4: for...in con Objetos ---
Propiedad: name = Alice
Propiedad: age = 25
Propiedad: city = NYC

--- Paso 5: for...of con Map y Set ---
Map entry: name → JavaScript
Map entry: year → 1995
Set value: ES6
Set value: ES7
Set value: ES8

--- Paso 6: Object.entries() con for...of ---
Config: theme = dark
Config: language = es
Config: debug = false
```

---

## 💡 Tips

- **Regla simple**: `of` para valores, `in` para claves
- **Arrays**: Siempre usa `for...of`
- **Objetos**: Usa `Object.entries()` + `for...of` o `for...in`
- `for...in` incluye propiedades heredadas del prototype

---

## 📚 Recursos

- [MDN: for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
- [MDN: for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
