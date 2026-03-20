# Ejercicio 04: WeakMap y Caché

## 🎯 Objetivo

Aplicar WeakMap para implementar datos privados y sistemas de caché sin memory leaks.

## 📋 Conceptos Cubiertos

- Diferencias entre Map y WeakMap
- Referencias débiles y garbage collection
- Datos privados en clases con WeakMap
- Implementación de caché sin memory leaks
- WeakSet para marcar objetos

## 📝 Instrucciones

### Paso 1: Map vs WeakMap

WeakMap solo acepta objetos como claves y no impide la recolección de basura:

```javascript
const weakMap = new WeakMap();
let obj = { id: 1 };
weakMap.set(obj, 'data');
obj = null; // El objeto puede ser recolectado
```

**Abre `starter/index.js`** y descomenta la sección del Paso 1.

### Paso 2: Limitaciones de WeakMap

WeakMap no es iterable y no tiene `size`, `keys()`, `values()`, ni `clear()`:

**Descomenta** la sección del Paso 2.

### Paso 3: Datos Privados con WeakMap

El patrón más común es usar WeakMap para almacenar datos privados de instancias:

```javascript
const privateData = new WeakMap();

class MyClass {
  constructor(secret) {
    privateData.set(this, { secret });
  }
}
```

**Descomenta** la sección del Paso 3.

### Paso 4: Caché sin Memory Leak

WeakMap es ideal para cachear datos asociados a objetos:

**Descomenta** la sección del Paso 4.

### Paso 5: WeakSet para Marcar Objetos

WeakSet es útil para marcar objetos como "visitados" o "procesados":

**Descomenta** la sección del Paso 5.

### Paso 6: Caso Práctico - Sistema Completo

Combina WeakMap y WeakSet en un sistema de tracking de usuarios:

**Descomenta** la sección del Paso 6.

## ✅ Resultado Esperado

```
--- Paso 1: Map vs WeakMap ---
WeakMap creado con éxito
Valor obtenido: datos asociados
Clave debe ser objeto (primitivo falla)

--- Paso 2: Limitaciones de WeakMap ---
WeakMap no tiene: size, keys(), values(), entries(), clear()
Métodos disponibles: set, get, has, delete

--- Paso 3: Datos Privados ---
Cuenta creada para Alice
Balance (con PIN correcto): 1000
Balance (PIN incorrecto): Error - PIN inválido
Propiedades públicas: owner
¿balance es accesible directamente? undefined

--- Paso 4: Caché sin Memory Leak ---
Primera llamada: { processed: true, id: 1 }
Segunda llamada: { processed: true, id: 1 }
Lecturas del caché: 1

--- Paso 5: WeakSet para Marcar Objetos ---
Procesando: node1
Procesando: node2
Procesando: node3
node1 ya fue visitado (evitando ciclo)

--- Paso 6: Sistema Completo ---
Usuario creado: user_abc123
Sesión iniciada para: Alice
Intentando iniciar otra sesión...
Error: Usuario ya tiene sesión activa
Sesión cerrada para: Alice
Nueva sesión iniciada para: Alice
```

## 🚀 Ejecución

```bash
cd starter
node index.js
```

## 📚 Recursos

- [MDN: WeakMap](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)
- [MDN: WeakSet](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)
