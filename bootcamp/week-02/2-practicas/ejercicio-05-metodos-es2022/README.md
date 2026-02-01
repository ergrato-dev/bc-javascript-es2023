# 🧪 Ejercicio 05: Métodos ES2022 - at() y Object.hasOwn()

## 🎯 Objetivos

- Practicar el uso de `Array.prototype.at()` con índices negativos
- Aplicar `Object.hasOwn()` para verificar propiedades propias
- Combinar ambos métodos en escenarios prácticos

## ⏱️ Duración

35 minutos

## 📋 Instrucciones

Este es un ejercicio guiado. Sigue cada paso y **descomenta el código** en `starter/index.js` para ver los resultados.

Para ejecutar el código:

```bash
cd ejercicio-05-metodos-es2022/starter
node index.js
```

---

## Paso 1: Introducción a at()

El método `at()` permite acceder a elementos usando índices positivos o negativos.

```javascript
const items = ['a', 'b', 'c', 'd', 'e'];

items.at(0);   // 'a' - primer elemento
items.at(-1);  // 'e' - último elemento
items.at(-2);  // 'd' - penúltimo
```

**Abre `starter/index.js`** y descomenta la sección del Paso 1.

---

## Paso 2: Comparando at() con corchetes

La notación de corchetes no soporta índices negativos:

```javascript
const nums = [10, 20, 30, 40, 50];

nums[-1];      // undefined ❌
nums.at(-1);   // 50 ✅
```

**Descomenta** la sección del Paso 2 para ver la diferencia.

---

## Paso 3: Casos prácticos de at()

`at()` es especialmente útil para:
- Obtener el último elemento
- Navegación en listas
- Acceso a strings

```javascript
// Obtener extensión de archivo
const getExtension = filename => {
  const parts = filename.split('.');
  return parts.at(-1);
};
```

**Descomenta** la sección del Paso 3.

---

## Paso 4: Introducción a Object.hasOwn()

`Object.hasOwn()` verifica si un objeto tiene una propiedad **propia** (no heredada).

```javascript
const user = { name: 'Ana', age: 25 };

Object.hasOwn(user, 'name');      // true
Object.hasOwn(user, 'toString');  // false (heredada)
```

**Descomenta** la sección del Paso 4.

---

## Paso 5: Object.hasOwn() vs hasOwnProperty()

`Object.hasOwn()` es más seguro que `hasOwnProperty()`:

```javascript
// Objeto sin prototype
const config = Object.create(null);
config.debug = true;

// hasOwnProperty no funciona
// config.hasOwnProperty('debug');  // ❌ TypeError

// Object.hasOwn siempre funciona
Object.hasOwn(config, 'debug');  // true ✅
```

**Descomenta** la sección del Paso 5.

---

## Paso 6: Propiedades propias vs heredadas

Es importante distinguir entre propiedades propias y heredadas:

```javascript
const parent = { inherited: true };
const child = Object.create(parent);
child.own = true;

Object.hasOwn(child, 'own');       // true
Object.hasOwn(child, 'inherited'); // false
'inherited' in child;              // true (incluye heredadas)
```

**Descomenta** la sección del Paso 6.

---

## Paso 7: Combinando at() y Object.hasOwn()

Ambos métodos se complementan en escenarios reales:

```javascript
const processLastEntry = (entries, requiredFields) => {
  const last = entries.at(-1);
  if (!last) return null;

  const hasAllFields = requiredFields.every(
    field => Object.hasOwn(last, field)
  );

  return hasAllFields ? last : null;
};
```

**Descomenta** la sección del Paso 7.

---

## Paso 8: Ejercicio integrador

Crea un sistema de historial de navegación usando ambos métodos.

**Descomenta** la sección del Paso 8.

---

## ✅ Verificación

Al completar todos los pasos, deberías ver en la consola:
- Ejemplos de `at()` con índices positivos y negativos
- Comparación entre `at()` y corchetes
- Validación de propiedades con `Object.hasOwn()`
- Sistema de historial funcionando

## 🎯 Resultado Esperado

```
--- Paso 1: Introducción a at() ---
Primer color: rojo
Último color: morado
Penúltimo: azul

--- Paso 2: Comparando at() con corchetes ---
nums[-1] con corchetes: undefined
nums.at(-1) con at(): 50
...
```

## 📚 Recursos

- [MDN: Array.prototype.at()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/at)
- [MDN: Object.hasOwn()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn)
