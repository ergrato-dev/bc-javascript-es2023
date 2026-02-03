# 🎁 Práctica 02: Promises Básicas

## 🎯 Objetivo

Aprender a crear y consumir Promises, manejar estados y errores.

---

## 📚 Conceptos a Practicar

- Crear Promises con `new Promise()`
- Estados: pending, fulfilled, rejected
- Consumir con `.then()` y `.catch()`
- Usar `.finally()`
- `Promise.resolve()` y `Promise.reject()`

---

## 🚀 Instrucciones

Abre el archivo `starter/index.js` y sigue los pasos descomentando el código sección por sección.

### Ejecutar el código

```bash
node starter/index.js
```

---

## 📝 Pasos

### Paso 1: Crear tu Primera Promise

Crea una Promise simple que se resuelve después de 1 segundo.

**Descomenta la sección del Paso 1**.

```javascript
const myFirstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('¡Promise cumplida! 🎉');
  }, 1000);
});

myFirstPromise.then(result => {
  console.log(result);
});
```

**Observa**: Después de 1 segundo, aparece el mensaje.

---

### Paso 2: Promise que se Rechaza

Crea una Promise que se rechaza para practicar el manejo de errores.

**Descomenta la sección del Paso 2**.

```javascript
const riskyPromise = new Promise((resolve, reject) => {
  const random = Math.random();

  setTimeout(() => {
    if (random > 0.5) {
      resolve(`Éxito! (${random.toFixed(2)})`);
    } else {
      reject(new Error(`Falló! (${random.toFixed(2)})`));
    }
  }, 1000);
});

riskyPromise
  .then(result => console.log('✅', result))
  .catch(error => console.error('❌', error.message));
```

**Ejecuta varias veces**: Verás resultados diferentes (50% éxito, 50% error).

---

### Paso 3: Usar .finally()

Practica el uso de `.finally()` para código que siempre debe ejecutarse.

**Descomenta la sección del Paso 3**.

```javascript
console.log('⏳ Cargando datos...');

const loadData = new Promise((resolve, reject) => {
  setTimeout(() => {
    Math.random() > 0.5
      ? resolve('Datos cargados')
      : reject(new Error('Error al cargar'));
  }, 1500);
});

loadData
  .then(data => console.log('✅', data))
  .catch(error => console.error('❌', error.message))
  .finally(() => console.log('🏁 Carga finalizada'));
```

**Observa**: `.finally()` se ejecuta siempre, independiente del resultado.

---

### Paso 4: Promise.resolve() y Promise.reject()

Crea Promises ya resueltas o rechazadas.

**Descomenta la sección del Paso 4**.

```javascript
Promise.resolve('Valor inmediato')
  .then(value => console.log('Resolved:', value));

Promise.reject(new Error('Error inmediato'))
  .catch(error => console.error('Rejected:', error.message));
```

**Uso común**: Convertir valores en Promises para mantener consistencia.

---

### Paso 5: Simular una Petición HTTP

Crea una función que simula una petición HTTP con Promises.

**Descomenta la sección del Paso 5**.

```javascript
const fetchUser = userId => {
  return new Promise((resolve, reject) => {
    console.log(`📡 Obteniendo usuario ${userId}...`);

    setTimeout(() => {
      if (userId > 0) {
        resolve({
          id: userId,
          name: 'Ana García',
          email: 'ana@example.com'
        });
      } else {
        reject(new Error('ID de usuario inválido'));
      }
    }, 1000);
  });
};

fetchUser(123)
  .then(user => {
    console.log('Usuario obtenido:', user);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });

fetchUser(-1)
  .then(user => {
    console.log('Usuario obtenido:', user);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
```

---

### Paso 6: Convertir Callbacks a Promises

Practica convertir código basado en callbacks a Promises.

**Descomenta la sección del Paso 6**.

```javascript
// Versión con callback (estilo antiguo)
const readFileCallback = (filename, callback) => {
  setTimeout(() => {
    callback(null, `Contenido de ${filename}`);
  }, 1000);
};

// Versión con Promise (estilo moderno)
const readFilePromise = filename => {
  return new Promise((resolve, reject) => {
    readFileCallback(filename, (error, content) => {
      if (error) {
        reject(error);
      } else {
        resolve(content);
      }
    });
  });
};

readFilePromise('datos.txt')
  .then(content => console.log('Archivo leído:', content))
  .catch(error => console.error('Error:', error.message));
```

---

## ✅ Checklist

- [ ] Sé crear Promises con `new Promise(resolve, reject)`
- [ ] Entiendo cómo usar `resolve()` y `reject()`
- [ ] Puedo consumir Promises con `.then()` y `.catch()`
- [ ] Sé cuándo usar `.finally()`
- [ ] Conozco `Promise.resolve()` y `Promise.reject()`
- [ ] Puedo convertir callbacks a Promises

---

## 🎓 Conceptos Clave

- Una Promise solo se resuelve **una vez**
- Usa `reject(new Error(...))` en lugar de solo `reject('mensaje')`
- `.catch()` captura errores de toda la cadena anterior
- `.finally()` es ideal para cleanup (cerrar spinners, etc.)

---

**Siguiente práctica**: [Práctica 03 - Promise Chaining](../practica-03-promise-chaining/)
