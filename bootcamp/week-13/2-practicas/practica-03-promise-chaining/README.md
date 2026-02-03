# ⛓️ Práctica 03: Promise Chaining

## 🎯 Objetivo

Dominar el encadenamiento de Promises para ejecutar operaciones asíncronas secuenciales.

---

## 📚 Conceptos a Practicar

- Encadenar múltiples `.then()`
- Retornar Promises en `.then()`
- Manejo de errores en cadenas
- Transformar datos entre pasos
- Evitar el Callback Hell con Promises

---

## 🚀 Instrucciones

Abre el archivo `starter/index.js` y sigue los pasos descomentando el código sección por sección.

### Ejecutar el código

```bash
node starter/index.js
```

---

## 📝 Pasos

### Paso 1: Cadena Simple de Promises

Encadena transformaciones simples.

**Descomenta la sección del Paso 1**.

```javascript
Promise.resolve(5)
  .then(value => {
    console.log('Valor inicial:', value);
    return value * 2;
  })
  .then(value => {
    console.log('Después de x2:', value);
    return value + 10;
  })
  .then(value => {
    console.log('Después de +10:', value);
    return value / 2;
  })
  .then(finalValue => {
    console.log('Valor final:', finalValue);
  });
```

**Observa**: Cada `.then()` recibe el valor retornado por el anterior.

---

### Paso 2: Encadenar Promises Asíncronas

Encadena operaciones que retornan nuevas Promises.

**Descomenta la sección del Paso 2**.

```javascript
const getUser = userId => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id: userId, name: 'Ana García' });
    }, 1000);
  });
};

const getPosts = userId => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { id: 1, title: 'Post 1', userId },
        { id: 2, title: 'Post 2', userId }
      ]);
    }, 1000);
  });
};

const getComments = postId => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { id: 1, text: 'Great!', postId },
        { id: 2, text: 'Nice!', postId }
      ]);
    }, 1000);
  });
};

getUser(123)
  .then(user => {
    console.log('1. Usuario:', user.name);
    return getPosts(user.id);
  })
  .then(posts => {
    console.log('2. Posts:', posts.length);
    return getComments(posts[0].id);
  })
  .then(comments => {
    console.log('3. Comentarios:', comments.length);
  });
```

**Importante**: Retorna la Promise en cada `.then()` para continuar la cadena.

---

### Paso 3: Manejar Errores en la Cadena

Un solo `.catch()` al final captura todos los errores.

**Descomenta la sección del Paso 3**.

```javascript
const step1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Step 1: OK');
      resolve('Data from step 1');
    }, 500);
  });
};

const step2 = data => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldFail = Math.random() > 0.5;
      if (shouldFail) {
        reject(new Error('Step 2 failed'));
      } else {
        console.log('Step 2: OK');
        resolve(`${data} + Step 2`);
      }
    }, 500);
  });
};

const step3 = data => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Step 3: OK');
      resolve(`${data} + Step 3`);
    }, 500);
  });
};

step1()
  .then(result => step2(result))
  .then(result => step3(result))
  .then(finalResult => {
    console.log('✅ Success:', finalResult);
  })
  .catch(error => {
    console.error('❌ Error en la cadena:', error.message);
  });
```

---

### Paso 4: Pasar Múltiples Valores

Usa objetos o arrays para pasar múltiples valores entre pasos.

**Descomenta la sección del Paso 4**.

```javascript
const authenticate = credentials => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ userId: 123, token: 'abc123' });
    }, 500);
  });
};

const fetchProfile = authData => {
  return new Promise(resolve => {
    setTimeout(() => {
      const profile = { name: 'Ana', email: 'ana@example.com' };
      resolve({ ...authData, profile });
    }, 500);
  });
};

const fetchPreferences = userData => {
  return new Promise(resolve => {
    setTimeout(() => {
      const preferences = { theme: 'dark', language: 'es' };
      resolve({ ...userData, preferences });
    }, 500);
  });
};

authenticate({ username: 'ana', password: '1234' })
  .then(authData => {
    console.log('Autenticado:', authData.token);
    return fetchProfile(authData);
  })
  .then(userData => {
    console.log('Perfil:', userData.profile.name);
    return fetchPreferences(userData);
  })
  .then(completeData => {
    console.log('Datos completos:', completeData);
  });
```

---

### Paso 5: Comparación con Callback Hell

Compara el mismo código con callbacks vs Promises.

**Descomenta la sección del Paso 5**.

```javascript
console.log('--- Con Callbacks (Callback Hell) ---');

// Versión con callbacks (para comparar)
const getUserCb = (userId, callback) => {
  setTimeout(() => callback({ id: userId }), 500);
};

const getPostsCb = (userId, callback) => {
  setTimeout(() => callback([{ id: 1 }]), 500);
};

const getCommentsCb = (postId, callback) => {
  setTimeout(() => callback([{ id: 1 }]), 500);
};

getUserCb(123, user => {
  getPostsCb(user.id, posts => {
    getCommentsCb(posts[0].id, comments => {
      console.log('Callback result:', comments);
    });
  });
});

console.log('--- Con Promises (Código Plano) ---');

// Versión con Promises (mucho más limpia)
const getUserPr = userId => Promise.resolve({ id: userId });
const getPostsPr = userId => Promise.resolve([{ id: 1 }]);
const getCommentsPr = postId => Promise.resolve([{ id: 1 }]);

getUserPr(123)
  .then(user => getPostsPr(user.id))
  .then(posts => getCommentsPr(posts[0].id))
  .then(comments => console.log('Promise result:', comments));
```

---

### Paso 6: Recuperarse de Errores

Usa `.catch()` intermedio para recuperarse de errores.

**Descomenta la sección del Paso 6**.

```javascript
const riskyOperation = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Operación falló'));
    }, 500);
  });
};

const fallbackOperation = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Usando fallback');
    }, 500);
  });
};

riskyOperation()
  .catch(error => {
    console.log('Error detectado, usando fallback...');
    return fallbackOperation();
  })
  .then(result => {
    console.log('Resultado final:', result);
  })
  .catch(error => {
    console.error('Error irrecuperable:', error.message);
  });
```

---

## ✅ Checklist

- [ ] Sé encadenar Promises con `.then()`
- [ ] Entiendo que debo retornar Promises en `.then()`
- [ ] Puedo manejar errores con un solo `.catch()` al final
- [ ] Sé pasar múltiples valores entre pasos (objetos/arrays)
- [ ] Comprendo la ventaja sobre callbacks anidados
- [ ] Puedo recuperarme de errores con `.catch()` intermedio

---

## 🎓 Buenas Prácticas

✅ **Siempre retorna** en `.then()` para continuar la cadena
✅ **Un `.catch()` al final** para manejar todos los errores
✅ **Usa `.finally()`** para cleanup
✅ **Evita anidar** `.then()` dentro de `.then()`
✅ **Nombres descriptivos** en cada paso

---

**Siguiente práctica**: [Práctica 04 - Promise Combinators](../practica-04-promise-combinators/)
