# 🔄 Práctica 04: Iteración Asíncrona

## 🎯 Objetivos

- Utilizar `for await...of` para iterar sobre streams
- Crear generadores asíncronos con `async function*`
- Procesar datos de forma secuencial pero eficiente
- Implementar paginación asíncrona

## 📋 Descripción

Esta práctica explora las capacidades de iteración asíncrona de JavaScript moderno, incluyendo `for await...of` y los generadores asíncronos (`async function*`).

## ⏱️ Duración

30-45 minutos

## 📚 Conceptos Clave

### For Await...Of

```javascript
// Iterar sobre un array de promesas
const promises = [fetch(url1), fetch(url2), fetch(url3)];

for await (const response of promises) {
  const data = await response.json();
  console.log(data);
}
```

### Generadores Asíncronos

```javascript
async function* paginate(url) {
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const response = await fetch(`${url}?page=${page}`);
    const data = await response.json();

    yield data.items;

    hasMore = data.hasMore;
    page++;
  }
}
```

## 📝 Pasos

### Paso 1: For Await Básico

Iteramos sobre un array de promesas de forma secuencial.

### Paso 2: Generador Asíncrono Simple

Creamos nuestro primer generador con `async function*`.

### Paso 3: Paginación con Generadores

Implementamos un patrón de paginación eficiente.

### Paso 4: Yield Delegado con Await

Combinamos `yield*` con generadores asíncronos.

### Paso 5: Control de Flujo

Controlamos cuándo detenemos la iteración con `break` y `return`.

## 🚀 Instrucciones

1. Abre `starter/index.js`
2. Lee cada paso y su explicación
3. Descomenta el código de cada sección
4. Ejecuta con `node starter/index.js`
5. Observa los resultados
6. Compara con `solution/index.js`

## ✅ Verificación

Al completar todos los pasos deberías ver:

- Valores procesados de promesas con delays
- Generadores produciendo valores asíncronos
- Páginas cargándose una a una
- Control de flujo con break funcionando

## 🔗 Recursos

- [MDN: for await...of](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for-await...of)
- [MDN: async function*](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function*)
