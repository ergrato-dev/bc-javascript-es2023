# 🔀 Práctica 04: Promise Combinators

## 🎯 Objetivo

Dominar el uso de `Promise.all()`, `Promise.race()`, `Promise.allSettled()` y `Promise.any()`.

---

## 📚 Conceptos a Practicar

- `Promise.all()` - Todas o ninguna
- `Promise.race()` - La primera en terminar
- `Promise.allSettled()` - Todas, sin fallar
- `Promise.any()` - Primera exitosa
- Casos de uso de cada método

---

## 🚀 Instrucciones

Abre el archivo `starter/index.js` y sigue los pasos descomentando el código sección por sección.

### Ejecutar el código

```bash
node starter/index.js
```

---

## 📝 Pasos

### Paso 1: Promise.all() - Ejecutar en Paralelo

Ejecuta múltiples Promises y espera a que TODAS se completen.

**Descomenta la sección del Paso 1**.

```javascript
const fetchUser = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve({ name: 'Ana' }), 1000);
  });
};

const fetchPosts = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve([{ id: 1 }, { id: 2 }]), 1500);
  });
};

const fetchComments = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve([{ id: 1 }]), 800);
  });
};

console.time('Promise.all');

Promise.all([
  fetchUser(),
  fetchPosts(),
  fetchComments()
])
  .then(([user, posts, comments]) => {
    console.log('User:', user);
    console.log('Posts:', posts.length);
    console.log('Comments:', comments.length);
    console.timeEnd('Promise.all');
  });
```

**Observa**: Tiempo total ~1.5 segundos (la más lenta), no 3.3 segundos (suma).

---

### Paso 2: Promise.all() con Errores

Si UNA falla, TODAS fallan.

**Descomenta la sección del Paso 2**.

```javascript
const success1 = () => Promise.resolve('Success 1');
const fail = () => Promise.reject(new Error('Failed!'));
const success2 = () => Promise.resolve('Success 2');

Promise.all([success1(), fail(), success2()])
  .then(results => {
    console.log('All succeeded:', results);
  })
  .catch(error => {
    console.error('One failed:', error.message);
  });
```

---

### Paso 3: Promise.race() - La Más Rápida Gana

Resuelve con el resultado de la primera en completarse.

**Descomenta la sección del Paso 3**.

```javascript
const slow = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('Slow (2s)'), 2000);
  });
};

const fast = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('Fast (0.5s)'), 500);
  });
};

const medium = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('Medium (1s)'), 1000);
  });
};

Promise.race([slow(), fast(), medium()])
  .then(winner => {
    console.log('Winner:', winner);
  });
```

---

### Paso 4: Promise.race() para Timeout

Implementa un timeout usando `race()`.

**Descomenta la sección del Paso 4**.

```javascript
const fetchData = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Datos obtenidos');
    }, 5000); // Tarda 5 segundos
  });
};

const timeout = ms => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error(`Timeout después de ${ms}ms`));
    }, ms);
  });
};

Promise.race([
  fetchData(),
  timeout(3000) // Timeout de 3 segundos
])
  .then(result => {
    console.log('Success:', result);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
```

---

### Paso 5: Promise.allSettled() - Todas sin Fallar

Espera a que TODAS terminen, exitosas o no.

**Descomenta la sección del Paso 5**.

```javascript
const api1 = () => Promise.resolve({ source: 'API1', data: [1, 2, 3] });
const api2 = () => Promise.reject(new Error('API2 down'));
const api3 = () => Promise.resolve({ source: 'API3', data: [4, 5, 6] });

Promise.allSettled([api1(), api2(), api3()])
  .then(results => {
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        console.log(`API ${index + 1}: ✅`, result.value);
      } else {
        console.log(`API ${index + 1}: ❌`, result.reason.message);
      }
    });
  });
```

---

### Paso 6: Promise.any() - Primera Exitosa

Resuelve con la primera Promise que se cumpla exitosamente.

**Descomenta la sección del Paso 6**.

```javascript
const slowSuccess = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('Slow success (2s)'), 2000);
  });
};

const fastFail = () => {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Fast fail (0.5s)')), 500);
  });
};

const mediumSuccess = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('Medium success (1s)'), 1000);
  });
};

Promise.any([slowSuccess(), fastFail(), mediumSuccess()])
  .then(result => {
    console.log('First success:', result);
  })
  .catch(error => {
    console.error('All failed:', error);
  });
```

---

### Paso 7: Comparación de Métodos

Compara todos los métodos con el mismo set de Promises.

**Descomenta la sección del Paso 7**.

```javascript
const createPromises = () => [
  new Promise(resolve => setTimeout(() => resolve('P1: 1s'), 1000)),
  new Promise((_, reject) => setTimeout(() => reject(new Error('P2: Error')), 500)),
  new Promise(resolve => setTimeout(() => resolve('P3: 2s'), 2000))
];

console.log('--- Promise.all() ---');
Promise.all(createPromises())
  .then(r => console.log('Result:', r))
  .catch(e => console.log('Error:', e.message));

console.log('--- Promise.race() ---');
Promise.race(createPromises())
  .then(r => console.log('Result:', r))
  .catch(e => console.log('Error:', e.message));

console.log('--- Promise.allSettled() ---');
Promise.allSettled(createPromises())
  .then(r => console.log('Results:', r.map(x => x.status)));

console.log('--- Promise.any() ---');
Promise.any(createPromises())
  .then(r => console.log('Result:', r))
  .catch(e => console.log('Error:', e.message));
```

---

## ✅ Checklist

- [ ] Entiendo cuándo usar `Promise.all()` (todas críticas)
- [ ] Sé usar `Promise.race()` para timeouts
- [ ] Comprendo `Promise.allSettled()` (todas sin fallar)
- [ ] Puedo usar `Promise.any()` para fallbacks
- [ ] Sé elegir el método apropiado para cada caso

---

## 🎯 Guía de Decisión

```
¿Necesitas TODAS las respuestas?
├─ Todas son críticas → Promise.all()
└─ Algunas pueden fallar → Promise.allSettled()

¿Solo necesitas UNA respuesta?
├─ La más rápida → Promise.race()
└─ Primera exitosa → Promise.any()
```

---

**¡Excelente trabajo!** Has completado todas las prácticas de Promises.
