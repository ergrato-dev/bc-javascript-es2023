# 🏋️ Ejercicio 02: Métodos Estáticos

## 🎯 Objetivo

Aprender a crear y utilizar métodos estáticos, propiedades estáticas y patrones factory en clases ES6.

---

## 📋 Descripción

Crearás clases de utilidad con métodos estáticos para validación, conversión y generación de datos.

---

## 🚀 Instrucciones

### Parte 1: Clase Validator

Crea una clase `Validator` con métodos estáticos para validación:

1. **Métodos estáticos**:
   - `isEmail(value)`: valida formato de email
   - `isURL(value)`: valida formato de URL
   - `isPhone(value, country)`: valida teléfono por país ('US', 'MX', 'ES')
   - `isStrongPassword(value)`: mínimo 8 chars, mayúscula, minúscula, número, especial
   - `isInRange(value, min, max)`: valida rango numérico
   - `isEmpty(value)`: verifica si es null, undefined, '' o array vacío

### Parte 2: Clase IdGenerator

Crea una clase `IdGenerator` para generar identificadores:

1. **Propiedades estáticas**:
   - Contador interno por categoría

2. **Métodos estáticos**:
   - `sequential(category)`: genera ID secuencial por categoría (ej: "USER-0001")
   - `uuid()`: genera UUID
   - `short()`: genera ID corto basado en timestamp
   - `slug(text)`: genera slug desde texto
   - `reset(category)`: resetea contador de categoría

### Parte 3: Clase DateUtils

Crea una clase `DateUtils` con utilidades para fechas:

1. **Métodos estáticos**:
   - `format(date, pattern)`: formatea fecha ('YYYY-MM-DD', 'DD/MM/YYYY', etc.)
   - `isToday(date)`: verifica si es hoy
   - `isPast(date)`: verifica si es fecha pasada
   - `isFuture(date)`: verifica si es fecha futura
   - `daysBetween(date1, date2)`: días entre dos fechas
   - `addDays(date, days)`: suma días a una fecha
   - `getRelative(date)`: retorna texto relativo ('hace 2 días', 'en 3 horas')

### Parte 4: Clase ArrayUtils

Crea una clase `ArrayUtils` con utilidades para arrays:

1. **Métodos estáticos**:
   - `sum(array)`: suma de elementos
   - `average(array)`: promedio
   - `unique(array)`: elementos únicos
   - `groupBy(array, key)`: agrupa por propiedad
   - `chunk(array, size)`: divide en grupos de tamaño fijo
   - `shuffle(array)`: mezcla aleatoriamente

---

## 📝 Código Starter

```javascript
// ============================================
// EJERCICIO 02: Métodos Estáticos
// ============================================

// TODO: Implementa la clase Validator
class Validator {
  static isEmail(value) {
    // Tu código aquí
  }

  static isURL(value) {
    // Tu código aquí
  }

  static isPhone(value, country = 'US') {
    // Tu código aquí
  }

  static isStrongPassword(value) {
    // Tu código aquí
  }

  static isInRange(value, min, max) {
    // Tu código aquí
  }

  static isEmpty(value) {
    // Tu código aquí
  }
}

// TODO: Implementa la clase IdGenerator
class IdGenerator {
  static #counters = new Map();

  static sequential(category = 'default') {
    // Tu código aquí
  }

  static uuid() {
    // Tu código aquí
  }

  static short() {
    // Tu código aquí
  }

  static slug(text) {
    // Tu código aquí
  }

  static reset(category = 'default') {
    // Tu código aquí
  }
}

// TODO: Implementa la clase DateUtils
class DateUtils {
  static format(date, pattern = 'YYYY-MM-DD') {
    // Tu código aquí
  }

  static isToday(date) {
    // Tu código aquí
  }

  static isPast(date) {
    // Tu código aquí
  }

  static isFuture(date) {
    // Tu código aquí
  }

  static daysBetween(date1, date2) {
    // Tu código aquí
  }

  static addDays(date, days) {
    // Tu código aquí
  }

  static getRelative(date) {
    // Tu código aquí
  }
}

// TODO: Implementa la clase ArrayUtils
class ArrayUtils {
  static sum(array) {
    // Tu código aquí
  }

  static average(array) {
    // Tu código aquí
  }

  static unique(array) {
    // Tu código aquí
  }

  static groupBy(array, key) {
    // Tu código aquí
  }

  static chunk(array, size) {
    // Tu código aquí
  }

  static shuffle(array) {
    // Tu código aquí
  }
}

// ============================================
// PRUEBAS
// ============================================

console.log('=== Validator ===');
console.log('Email válido:', Validator.isEmail('test@email.com'));
console.log('Email inválido:', Validator.isEmail('invalid-email'));
console.log('URL válida:', Validator.isURL('https://google.com'));
console.log('Password fuerte:', Validator.isStrongPassword('Abc123!@'));
console.log('Password débil:', Validator.isStrongPassword('123456'));
console.log('En rango:', Validator.isInRange(5, 1, 10));
console.log('Está vacío:', Validator.isEmpty(''));

console.log('\n=== IdGenerator ===');
console.log('Secuencial:', IdGenerator.sequential('user'));
console.log('Secuencial:', IdGenerator.sequential('user'));
console.log('Secuencial:', IdGenerator.sequential('product'));
console.log('UUID:', IdGenerator.uuid());
console.log('Short:', IdGenerator.short());
console.log('Slug:', IdGenerator.slug('Hola Mundo! ¿Cómo estás?'));

console.log('\n=== DateUtils ===');
const today = new Date();
const yesterday = DateUtils.addDays(new Date(), -1);
const nextWeek = DateUtils.addDays(new Date(), 7);

console.log('Formato:', DateUtils.format(today, 'DD/MM/YYYY'));
console.log('¿Es hoy?:', DateUtils.isToday(today));
console.log('¿Es pasado?:', DateUtils.isPast(yesterday));
console.log('¿Es futuro?:', DateUtils.isFuture(nextWeek));
console.log('Días entre:', DateUtils.daysBetween(today, nextWeek));
console.log('Relativo:', DateUtils.getRelative(yesterday));

console.log('\n=== ArrayUtils ===');
const numbers = [1, 2, 3, 4, 5, 5, 3, 2, 1];
console.log('Suma:', ArrayUtils.sum(numbers));
console.log('Promedio:', ArrayUtils.average(numbers));
console.log('Únicos:', ArrayUtils.unique(numbers));

const users = [
  { name: 'Ana', role: 'admin' },
  { name: 'Carlos', role: 'user' },
  { name: 'María', role: 'admin' }
];
console.log('Agrupados:', ArrayUtils.groupBy(users, 'role'));
console.log('Chunks:', ArrayUtils.chunk([1,2,3,4,5,6,7], 3));
console.log('Shuffle:', ArrayUtils.shuffle([1,2,3,4,5]));
```

---

## ✅ Resultado Esperado

```
=== Validator ===
Email válido: true
Email inválido: false
URL válida: true
Password fuerte: true
Password débil: false
En rango: true
Está vacío: true

=== IdGenerator ===
Secuencial: USER-0001
Secuencial: USER-0002
Secuencial: PRODUCT-0001
UUID: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
Short: m5x7k2abc
Slug: hola-mundo-como-estas

=== DateUtils ===
Formato: 20/12/2024
¿Es hoy?: true
¿Es pasado?: true
¿Es futuro?: true
Días entre: 7
Relativo: hace 1 día

=== ArrayUtils ===
Suma: 26
Promedio: 2.89
Únicos: [1, 2, 3, 4, 5]
Agrupados: { admin: [...], user: [...] }
Chunks: [[1,2,3], [4,5,6], [7]]
Shuffle: [3, 1, 5, 2, 4] (aleatorio)
```

---

## 🎯 Criterios de Evaluación

| Criterio | Puntos |
|----------|--------|
| Clase Validator completa | 25 |
| Clase IdGenerator completa | 25 |
| Clase DateUtils completa | 25 |
| Clase ArrayUtils completa | 25 |
| **Total** | **100** |

---

## 💡 Pistas

1. Para `isEmail`, usa una expresión regular básica
2. Para `isURL`, puedes usar el constructor `URL` con try/catch
3. Para `slug`, normaliza el texto con `normalize('NFD')`
4. Para `groupBy`, usa `reduce` para acumular en un objeto
5. Para `shuffle`, implementa el algoritmo Fisher-Yates

---

## 🔗 Recursos

- [MDN: static](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/static)
- [Algoritmo Fisher-Yates](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)
