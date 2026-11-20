# 📖 Glosario - Semana 10

## Proxies y Reflect

Términos clave de la semana ordenados alfabéticamente.

---

## A

### Apply (trap)
Trap que intercepta llamadas a funciones. Se activa cuando se invoca una función que es target de un Proxy.
```javascript
const handler = {
  apply(target, thisArg, args) {
    return target.apply(thisArg, args);
  }
};
```

---

## C

### Construct (trap)
Trap que intercepta el operador `new`. Debe retornar un objeto.
```javascript
const handler = {
  construct(target, args, newTarget) {
    return new target(...args);
  }
};
```

---

## D

### DeleteProperty (trap)
Trap que intercepta el operador `delete`. Retorna `true` si la eliminación fue exitosa.
```javascript
const handler = {
  deleteProperty(target, prop) {
    return delete target[prop];
  }
};
```

---

## G

### Get (trap)
Trap que intercepta la lectura de propiedades. Puede retornar cualquier valor.
```javascript
const handler = {
  get(target, property, receiver) {
    return target[property];
  }
};
```

---

## H

### Handler
Objeto que contiene los traps de un Proxy. Define qué operaciones se interceptan.
```javascript
const handler = {
  get() { /* ... */ },
  set() { /* ... */ }
};
const proxy = new Proxy(target, handler);
```

### Has (trap)
Trap que intercepta el operador `in`. Retorna `boolean`.
```javascript
const handler = {
  has(target, property) {
    return property in target;
  }
};
```

---

## I

### Intercepción
Acción de capturar una operación antes de que se ejecute sobre el objeto original, permitiendo modificar su comportamiento.

### Invariante
Regla que un Proxy debe respetar. Por ejemplo, no puede reportar una propiedad no-configurable como inexistente.

---

## M

### Metaprogramación
Técnica de programación donde el código puede manipular, generar o modificar otro código en tiempo de ejecución.

---

## O

### Observable
Patrón donde un objeto notifica automáticamente a sus suscriptores cuando cambia su estado.
```javascript
const obs = observable({ count: 0 });
obs.subscribe(console.log);
obs.count = 1; // Notifica automáticamente
```

### Observer (patrón)
Patrón de diseño donde un objeto (subject) mantiene una lista de dependientes (observers) y les notifica cambios de estado.

### OwnKeys (trap)
Trap que intercepta `Object.keys()`, `Object.getOwnPropertyNames()`, etc. Retorna un array.
```javascript
const handler = {
  ownKeys(target) {
    return Object.keys(target);
  }
};
```

---

## P

### Proxy
Objeto que envuelve otro objeto (target) y permite interceptar y redefinir operaciones fundamentales.
```javascript
const proxy = new Proxy(target, handler);
```

### Proxy.revocable()
Método estático que crea un Proxy que puede ser desactivado posteriormente.
```javascript
const { proxy, revoke } = Proxy.revocable(target, handler);
revoke(); // Desactiva el proxy
```

---

## R

### Reactive
Sistema donde los cambios en los datos se propagan automáticamente a todos los dependientes.

### Receiver
Parámetro en traps get/set que representa el objeto que recibió la operación (usualmente el proxy o un objeto que hereda de él).
```javascript
get(target, prop, receiver) {
  return Reflect.get(target, prop, receiver);
}
```

### Reflect
Objeto global con métodos estáticos que corresponden a las operaciones interceptables por Proxy.
```javascript
Reflect.get(obj, 'prop');
Reflect.set(obj, 'prop', value);
Reflect.has(obj, 'prop');
```

### Reflect.apply()
Llama una función con un `this` y argumentos específicos.
```javascript
Reflect.apply(fn, thisArg, [arg1, arg2]);
```

### Reflect.construct()
Crea una instancia de un constructor (equivalente a `new`).
```javascript
Reflect.construct(Class, [arg1, arg2]);
```

### Reflect.deleteProperty()
Elimina una propiedad de un objeto. Retorna `boolean`.
```javascript
Reflect.deleteProperty(obj, 'prop'); // true/false
```

### Reflect.get()
Obtiene el valor de una propiedad con soporte para receiver.
```javascript
Reflect.get(obj, 'prop', receiver);
```

### Reflect.has()
Verifica si una propiedad existe (operador `in`).
```javascript
Reflect.has(obj, 'prop'); // true/false
```

### Reflect.ownKeys()
Retorna todas las claves propias (strings y symbols).
```javascript
Reflect.ownKeys(obj); // ['prop', Symbol(id)]
```

### Reflect.set()
Asigna un valor a una propiedad. Retorna `boolean`.
```javascript
Reflect.set(obj, 'prop', value, receiver);
```

### Revoke
Función que desactiva un Proxy revocable, haciendo que cualquier operación posterior lance error.

---

## S

### Set (trap)
Trap que intercepta la asignación de propiedades. Debe retornar `true` para indicar éxito.
```javascript
const handler = {
  set(target, property, value, receiver) {
    target[property] = value;
    return true;
  }
};
```

### Subscribe
Método para registrar un listener que será notificado cuando ocurran cambios.
```javascript
observable.subscribe((newVal, oldVal) => {
  console.log('Changed:', newVal);
});
```

---

## T

### Target
El objeto original que es envuelto por un Proxy.
```javascript
const target = { name: 'Alice' };
const proxy = new Proxy(target, handler);
```

### Trap
Método del handler que intercepta una operación específica sobre el proxy. Cada operación tiene su trap correspondiente.

### Traps (lista completa)
| Trap | Operación |
|------|-----------|
| get | Lectura de propiedad |
| set | Escritura de propiedad |
| has | Operador `in` |
| deleteProperty | Operador `delete` |
| ownKeys | Object.keys(), etc. |
| apply | Llamada a función |
| construct | Operador `new` |
| getPrototypeOf | Object.getPrototypeOf() |
| setPrototypeOf | Object.setPrototypeOf() |
| isExtensible | Object.isExtensible() |
| preventExtensions | Object.preventExtensions() |
| getOwnPropertyDescriptor | Object.getOwnPropertyDescriptor() |
| defineProperty | Object.defineProperty() |

---

## U

### Unsubscribe
Función retornada por subscribe que permite dejar de recibir notificaciones.
```javascript
const unsubscribe = observable.subscribe(fn);
unsubscribe(); // Deja de escuchar
```

---

## V

### Validación Reactiva
Técnica donde la validación ocurre automáticamente cuando se asignan valores, usando Proxies para interceptar las asignaciones.

---

## 📊 Resumen Visual

```
┌─────────────────────────────────────────┐
│              PROXY                       │
│  ┌─────────┐      ┌─────────────────┐   │
│  │ TARGET  │ ←──→ │    HANDLER      │   │
│  │ (obj)   │      │ ┌─────────────┐ │   │
│  └─────────┘      │ │ get()       │ │   │
│                   │ │ set()       │ │   │
│                   │ │ has()       │ │   │
│                   │ │ delete...() │ │   │
│                   │ └─────────────┘ │   │
│                   └─────────────────┘   │
└─────────────────────────────────────────┘
            ↓
┌─────────────────────────────────────────┐
│              REFLECT                     │
│  Reflect.get()    Reflect.set()         │
│  Reflect.has()    Reflect.deleteProperty│
│  Reflect.ownKeys()  Reflect.apply()     │
└─────────────────────────────────────────┘
```

---

## 🔗 Referencias

- [MDN: Proxy](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
- [MDN: Reflect](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Reflect)
- [JavaScript.info: Proxy](https://javascript.info/proxy)

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Recursos — web](../4-recursos/webgrafia/README.md) | [📅 Week 11: Manejo de Errores Moderno](../../week-11-manejo_errores_moderno/README.md) → |

[↑ Semana 10](../README.md)
