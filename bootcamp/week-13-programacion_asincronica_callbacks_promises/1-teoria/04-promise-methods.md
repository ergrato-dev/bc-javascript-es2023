# 🔀 Métodos de Promise (Combinators)

## 🎯 Objetivos

Al finalizar este tema, comprenderás:

- ✅ Cómo ejecutar múltiples Promises en paralelo
- ✅ `Promise.all()` - Esperar todas las Promises
- ✅ `Promise.race()` - La primera en resolver
- ✅ `Promise.allSettled()` - Esperar todas sin fallar (ES2020)
- ✅ `Promise.any()` - La primera exitosa (ES2021)
- ✅ Cuándo usar cada método

---

## 📋 Contenido

### 1. Introducción a Promise Combinators

Los **combinators** son métodos estáticos que permiten trabajar con **múltiples Promises simultáneamente**.

```javascript
// Sin combinators: ejecutar secuencialmente (lento)
const result1 = await promise1(); // 2 segundos
const result2 = await promise2(); // 2 segundos
const result3 = await promise3(); // 2 segundos
// Total: 6 segundos ⏱️

// Con combinators: ejecutar en paralelo (rápido)
const [result1, result2, result3] = await Promise.all([
  promise1(),
  promise2(),
  promise3()
]);
// Total: 2 segundos ⚡
```

---

### 2. Promise.all() - "Todas o ninguna"

Espera a que **todas** las Promises se cumplan, o rechaza si **alguna** falla.

#### Sintaxis

```javascript
Promise.all([promise1, promise2, promise3])
  .then(results => {
    // results es un array con todos los resultados
  })
  .catch(error => {
    // Si alguna falla, entra aquí
  });
```

#### Ejemplo Básico

```javascript
// ============================================
// PROMISE.ALL() - EJEMPLO BÁSICO
// ============================================

const fetchUser = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id: 1, name: 'Ana' });
    }, 1000);
  });
};

const fetchPosts = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { id: 1, title: 'Post 1' },
        { id: 2, title: 'Post 2' }
      ]);
    }, 1500);
  });
};

const fetchComments = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { id: 1, text: 'Comment 1' },
        { id: 2, text: 'Comment 2' }
      ]);
    }, 800);
  });
};

// Ejecutar todas en paralelo
console.time('Promise.all');

Promise.all([
  fetchUser(),
  fetchPosts(),
  fetchComments()
])
  .then(([user, posts, comments]) => {
    console.log('User:', user);
    console.log('Posts:', posts);
    console.log('Comments:', comments);
    console.timeEnd('Promise.all');
  });

// Output (después de ~1.5 segundos):
// User: { id: 1, name: 'Ana' }
// Posts: [ { id: 1, title: 'Post 1' }, ... ]
// Comments: [ { id: 1, text: 'Comment 1' }, ... ]
// Promise.all: ~1500ms ⚡
```

**Nota**: El tiempo total es el de la Promise **más lenta** (1.5s), no la suma (3.3s).

#### Manejo de Errores

```javascript
// ============================================
// PROMISE.ALL() - MANEJO DE ERRORES
// ============================================

const successPromise = () => Promise.resolve('Success');
const failPromise = () => Promise.reject(new Error('Failed'));
const anotherSuccess = () => Promise.resolve('Another success');

Promise.all([
  successPromise(),
  failPromise(), // Esta falla
  anotherSuccess()
])
  .then(results => {
    console.log('All succeeded:', results);
  })
  .catch(error => {
    console.error('One failed:', error.message);
    // Output: One failed: Failed
  });

// ⚠️ Si una falla, TODAS fallan
// Las que ya se completaron se ignoran
```

#### Casos de Uso

✅ **Cargar datos independientes** en paralelo
✅ **Múltiples peticiones HTTP** simultáneas
✅ **Todas las operaciones son críticas** (necesitas todas o ninguna)

---

### 3. Promise.race() - "La primera gana"

Resuelve o rechaza con el resultado de la **primera** Promise en completarse.

#### Sintaxis

```javascript
Promise.race([promise1, promise2, promise3])
  .then(result => {
    // result es el resultado de la primera en completarse
  });
```

#### Ejemplo Básico

```javascript
// ============================================
// PROMISE.RACE() - EJEMPLO BÁSICO
// ============================================

const fast = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Rápida (1s)');
    }, 1000);
  });
};

const slow = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Lenta (3s)');
    }, 3000);
  });
};

Promise.race([fast(), slow()])
  .then(result => {
    console.log('Winner:', result);
  });

// Output (después de 1 segundo):
// Winner: Rápida (1s)
```

#### Timeout Pattern

Caso de uso común: implementar timeouts:

```javascript
// ============================================
// PROMISE.RACE() - TIMEOUT PATTERN
// ============================================

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

// Limitar la petición a 3 segundos
Promise.race([
  fetchData(),
  timeout(3000)
])
  .then(result => {
    console.log('Éxito:', result);
  })
  .catch(error => {
    console.error('Error:', error.message);
    // Output: Error: Timeout después de 3000ms
  });
```

#### Casos de Uso

✅ **Implementar timeouts**
✅ **Múltiples fuentes de datos** (usar la más rápida)
✅ **Fallback a caché** si la red es lenta
✅ **Cancelar operaciones lentas**

---

### 4. Promise.allSettled() - "Espera todas, sin fallar" (ES2020)

Espera a que **todas** las Promises terminen (fulfilled o rejected) y devuelve todos los resultados.

#### Sintaxis

```javascript
Promise.allSettled([promise1, promise2, promise3])
  .then(results => {
    // results es un array de objetos { status, value/reason }
  });
```

#### Ejemplo Básico

```javascript
// ============================================
// PROMISE.ALLSETTLED() - EJEMPLO BÁSICO
// ============================================

const promise1 = Promise.resolve('Success 1');
const promise2 = Promise.reject(new Error('Error 2'));
const promise3 = Promise.resolve('Success 3');

Promise.allSettled([promise1, promise2, promise3])
  .then(results => {
    console.log(results);
  });

// Output:
// [
//   { status: 'fulfilled', value: 'Success 1' },
//   { status: 'rejected', reason: Error: Error 2 },
//   { status: 'fulfilled', value: 'Success 3' }
// ]
```

#### Procesando Resultados

```javascript
// ============================================
// PROMISE.ALLSETTLED() - PROCESAR RESULTADOS
// ============================================

const fetchFromAPI1 = () => Promise.resolve({ source: 'API1', data: [1, 2, 3] });
const fetchFromAPI2 = () => Promise.reject(new Error('API2 down'));
const fetchFromAPI3 = () => Promise.resolve({ source: 'API3', data: [4, 5, 6] });

Promise.allSettled([
  fetchFromAPI1(),
  fetchFromAPI2(),
  fetchFromAPI3()
])
  .then(results => {
    // Filtrar solo las exitosas
    const successful = results
      .filter(result => result.status === 'fulfilled')
      .map(result => result.value);

    console.log('Datos exitosos:', successful);
    // [{ source: 'API1', data: [1,2,3] }, { source: 'API3', data: [4,5,6] }]

    // Filtrar solo las fallidas
    const failed = results
      .filter(result => result.status === 'rejected')
      .map(result => result.reason.message);

    console.log('Errores:', failed);
    // ['API2 down']
  });
```

#### Comparación: all() vs allSettled()

```javascript
// ============================================
// COMPARACIÓN: ALL VS ALLSETTLED
// ============================================

const promises = [
  Promise.resolve(1),
  Promise.reject('Error'),
  Promise.resolve(3)
];

// Promise.all() - Falla si alguna falla
Promise.all(promises)
  .then(results => {
    console.log('All:', results);
  })
  .catch(error => {
    console.error('All error:', error); // ← Entra aquí
  });

// Promise.allSettled() - Nunca falla
Promise.allSettled(promises)
  .then(results => {
    console.log('AllSettled:', results); // ← Siempre entra aquí
    // [
    //   { status: 'fulfilled', value: 1 },
    //   { status: 'rejected', reason: 'Error' },
    //   { status: 'fulfilled', value: 3 }
    // ]
  });
```

#### Casos de Uso

✅ **Múltiples APIs** donde algunas pueden fallar
✅ **Batch operations** donde quieres el resultado de todas
✅ **Logging/reporting** de operaciones múltiples
✅ **No quieres que un error detenga todo**

---

### 5. Promise.any() - "La primera exitosa" (ES2021)

Resuelve con la **primera Promise que se cumpla**. Solo rechaza si **todas fallan**.

#### Sintaxis

```javascript
Promise.any([promise1, promise2, promise3])
  .then(result => {
    // result es el valor de la primera Promise exitosa
  })
  .catch(error => {
    // AggregateError si TODAS fallan
  });
```

#### Ejemplo Básico

```javascript
// ============================================
// PROMISE.ANY() - EJEMPLO BÁSICO
// ============================================

const slowButSuccessful = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('Slow success (2s)'), 2000);
  });
};

const fastButFails = () => {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Fast fail (0.5s)')), 500);
  });
};

const mediumSuccess = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('Medium success (1s)'), 1000);
  });
};

Promise.any([
  slowButSuccessful(),
  fastButFails(), // Falla primero
  mediumSuccess() // ✅ Primera exitosa
])
  .then(result => {
    console.log('First success:', result);
    // Output: First success: Medium success (1s)
  });
```

#### Todas Fallan: AggregateError

```javascript
// ============================================
// PROMISE.ANY() - TODAS FALLAN
// ============================================

const fail1 = () => Promise.reject(new Error('Error 1'));
const fail2 = () => Promise.reject(new Error('Error 2'));
const fail3 = () => Promise.reject(new Error('Error 3'));

Promise.any([fail1(), fail2(), fail3()])
  .then(result => {
    console.log('Success:', result);
  })
  .catch(error => {
    console.log('Error type:', error.constructor.name);
    // AggregateError

    console.log('All errors:', error.errors);
    // [Error: Error 1, Error: Error 2, Error: Error 3]
  });
```

#### Casos de Uso

✅ **Múltiples CDNs** (usar el primero disponible)
✅ **Mirrors/réplicas** de datos
✅ **Fastest server wins**
✅ **Fallback entre servicios**

---

### 6. Tabla Comparativa

| Método | Resuelve cuando | Rechaza cuando | Uso principal |
|--------|----------------|----------------|---------------|
| **all()** | TODAS cumplen | ALGUNA falla | Todas son críticas |
| **race()** | PRIMERA termina | PRIMERA termina | Timeout, fastest wins |
| **allSettled()** | TODAS terminan | Nunca falla | Necesitas todos los resultados |
| **any()** | PRIMERA cumple | TODAS fallan | Fastest success wins |

---

### 7. Ejemplo Práctico Completo

```javascript
// ============================================
// DASHBOARD CON MÚLTIPLES APIS
// ============================================

const fetchUserStats = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ views: 1234, likes: 567 });
    }, 1000);
  });
};

const fetchRecentPosts = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { id: 1, title: 'Post 1' },
        { id: 2, title: 'Post 2' }
      ]);
    }, 1500);
  });
};

const fetchNotifications = () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('Notifications API down'));
    }, 800);
  });
};

const fetchRecommendations = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(['Item 1', 'Item 2', 'Item 3']);
    }, 2000);
  });
};

// Estrategia: Usar allSettled() para no fallar el dashboard
console.log('📊 Cargando dashboard...');

Promise.allSettled([
  fetchUserStats(),
  fetchRecentPosts(),
  fetchNotifications(),
  fetchRecommendations()
])
  .then(results => {
    const [stats, posts, notifications, recommendations] = results;

    // Stats
    if (stats.status === 'fulfilled') {
      console.log('✅ Stats:', stats.value);
    } else {
      console.log('❌ Stats failed:', stats.reason.message);
    }

    // Posts
    if (posts.status === 'fulfilled') {
      console.log('✅ Posts:', posts.value.length, 'posts');
    } else {
      console.log('❌ Posts failed');
    }

    // Notifications
    if (notifications.status === 'fulfilled') {
      console.log('✅ Notifications:', notifications.value);
    } else {
      console.log('⚠️ Notifications failed (mostrar mensaje al usuario)');
    }

    // Recommendations
    if (recommendations.status === 'fulfilled') {
      console.log('✅ Recommendations:', recommendations.value.length);
    } else {
      console.log('❌ Recommendations failed');
    }

    console.log('🏁 Dashboard cargado (con errores parciales)');
  });

// Output (después de ~2 segundos):
// 📊 Cargando dashboard...
// ✅ Stats: { views: 1234, likes: 567 }
// ✅ Posts: 2 posts
// ⚠️ Notifications failed (mostrar mensaje al usuario)
// ✅ Recommendations: 3
// 🏁 Dashboard cargado (con errores parciales)
```

---

### 8. Patrón: Retry con Promise.race()

```javascript
// ============================================
// PATRÓN: RETRY CON TIMEOUT
// ============================================

const fetchWithRetry = (url, maxRetries = 3, timeout = 5000) => {
  const attemptFetch = retriesLeft => {
    return new Promise((resolve, reject) => {
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Timeout')), timeout);
      });

      const fetchPromise = fetch(url).then(res => res.json());

      Promise.race([fetchPromise, timeoutPromise])
        .then(resolve)
        .catch(error => {
          if (retriesLeft === 0) {
            reject(new Error(`Failed after ${maxRetries} retries: ${error.message}`));
          } else {
            console.log(`Retry ${maxRetries - retriesLeft + 1}...`);
            attemptFetch(retriesLeft - 1).then(resolve).catch(reject);
          }
        });
    });
  };

  return attemptFetch(maxRetries);
};

// Uso
fetchWithRetry('https://api.example.com/data', 3, 3000)
  .then(data => console.log('Success:', data))
  .catch(error => console.error('Failed:', error.message));
```

---

## ✅ Checklist de Verificación

Antes de continuar, asegúrate de comprender:

- [ ] Cuándo usar `Promise.all()` (todas críticas)
- [ ] Cuándo usar `Promise.race()` (timeout, fastest)
- [ ] Cuándo usar `Promise.allSettled()` (todas, sin fallar)
- [ ] Cuándo usar `Promise.any()` (primera exitosa)
- [ ] Cómo manejar resultados de `allSettled()`
- [ ] Qué es un `AggregateError`

---

## 🎯 Guía de Decisión

```
¿Necesitas TODAS las respuestas?
├─ Sí, y todas son críticas → Promise.all()
└─ Sí, pero algunas pueden fallar → Promise.allSettled()

¿Solo necesitas UNA respuesta?
├─ La más rápida (exitosa o error) → Promise.race()
└─ La primera exitosa → Promise.any()
```

---

## 📚 Recursos Adicionales

- 📖 [MDN: Promise.all()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
- 📖 [MDN: Promise.race()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race)
- 📖 [MDN: Promise.allSettled()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled)
- 📖 [MDN: Promise.any()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any)

---

**Siguiente paso**: ¡Practica con los ejercicios en [2-practicas](../2-practicas/)!
