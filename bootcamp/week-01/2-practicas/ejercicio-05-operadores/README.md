# Ejercicio 05: Operadores Modernos

> **📝 Este ejercicio NO se entrega**. Es material de práctica para prepararte para el [Proyecto Final](../../3-proyecto/README.md), que es el único entregable obligatorio.

## 🎯 Objetivos

- Practicar optional chaining (`?.`)
- Dominar nullish coalescing (`??`)
- Aplicar logical assignment operators (`??=`, `||=`, `&&=`)
- Usar numeric separators para mejor legibilidad

## ⏱️ Duración

45 minutos

## 📋 Instrucciones

Este ejercicio es un **tutorial guiado**. Sigue estos pasos:

1. Abre `starter/index.js`
2. Lee cada sección y descomenta el código indicado
3. Ejecuta con `node index.js` para ver los resultados
4. Compara con `solution/index.js` si tienes dudas

---

## 📝 Contenido del Ejercicio

### Paso 1: Optional Chaining Básico

Aprende a acceder a propiedades anidadas de forma segura.

```javascript
const user = {
  name: 'Ana',
  contact: {
    email: 'ana@email.com'
  }
};

// Acceso seguro - retorna undefined si no existe
const email = user?.contact?.email;      // 'ana@email.com'
const phone = user?.contact?.phone;      // undefined (no error)
const street = user?.address?.street;    // undefined (no error)
```

**Abre `starter/index.js`** y descomenta la sección del Paso 1.

---

### Paso 2: Optional Chaining con Arrays y Funciones

Aplica optional chaining en diferentes contextos.

```javascript
const users = [{ name: 'Ana' }, { name: 'Bob' }];

// Con arrays
const firstName = users?.[0]?.name;     // 'Ana'
const tenthUser = users?.[9]?.name;     // undefined

// Con funciones
const result = obj?.callback?.();        // Ejecuta si existe
```

**Descomenta la sección del Paso 2** en el archivo starter.

---

### Paso 3: Nullish Coalescing vs OR

Entiende la diferencia crucial entre `??` y `||`.

```javascript
// || considera falsy: 0, '', false, null, undefined
const a = 0 || 'default';      // 'default' (0 es falsy)
const b = '' || 'default';     // 'default' ('' es falsy)

// ?? solo considera null y undefined
const c = 0 ?? 'default';      // 0 ✅
const d = '' ?? 'default';     // '' ✅
const e = null ?? 'default';   // 'default' ✅
```

**Descomenta la sección del Paso 3** para ver la diferencia.

---

### Paso 4: Combinando `?.` y `??`

Patrón muy útil: acceso seguro + valor por defecto.

```javascript
const config = {
  settings: {
    theme: 'dark',
    fontSize: 0    // 0 es válido
  }
};

const theme = config?.settings?.theme ?? 'light';      // 'dark'
const fontSize = config?.settings?.fontSize ?? 16;     // 0 (no 16)
const language = config?.settings?.language ?? 'es';   // 'es'
```

**Descomenta la sección del Paso 4.**

---

### Paso 5: Logical Assignment `??=`

Asigna solo si el valor es `null` o `undefined`.

```javascript
const options = {};
options.timeout ??= 3000;    // Asigna porque es undefined
options.retries ??= 3;       // Asigna porque es undefined

const options2 = { timeout: 0 };
options2.timeout ??= 3000;   // NO asigna, 0 no es null/undefined
```

**Descomenta la sección del Paso 5.**

---

### Paso 6: Logical Assignment `||=` y `&&=`

Otros operadores de asignación lógica.

```javascript
// ||= asigna si es falsy
let name = '';
name ||= 'Anonymous';    // 'Anonymous'

// &&= asigna si es truthy
let user = { name: 'Ana' };
user &&= { ...user, active: true };  // Añade active
```

**Descomenta la sección del Paso 6.**

---

### Paso 7: Numeric Separators

Mejora la legibilidad de números grandes.

```javascript
// Sin separadores (difícil de leer)
const billion = 1000000000;

// Con separadores (mismo valor, más claro)
const billion2 = 1_000_000_000;

// Funciona con decimales y otras bases
const price = 1_299.99;
const binary = 0b1010_0001;
const hex = 0xFF_FF_FF;
```

**Descomenta la sección del Paso 7.**

---

### Paso 8: Caso Práctico - API Response

Aplica todo lo aprendido en un escenario real.

```javascript
// Simular respuesta de API con datos incompletos
const apiResponse = {
  user: {
    id: 1,
    profile: {
      name: 'Carlos',
      followers: 0     // 0 es válido
    }
  }
};

// Extraer datos de forma segura
const userName = apiResponse?.user?.profile?.name ?? 'Usuario';
const followers = apiResponse?.user?.profile?.followers ?? 0;
const bio = apiResponse?.user?.profile?.bio ?? 'Sin biografía';
```

**Descomenta la sección del Paso 8.**

---

## ✅ Resultado Esperado

Al ejecutar `node index.js`, deberías ver:

```
--- Paso 1: Optional Chaining Básico ---
Email: ana@email.com
Phone: undefined
Street: undefined

--- Paso 2: Optional Chaining con Arrays/Funciones ---
Primer usuario: Ana
Usuario inexistente: undefined
Método ejecutado: Procesado!

--- Paso 3: Nullish Coalescing vs OR ---
Con || : 0 → default, '' → default
Con ?? : 0 → 0, '' → (vacío)

--- Paso 4: Combinando ?. y ?? ---
Theme: dark
Font Size: 0
Language: es

--- Paso 5: Logical Assignment ??= ---
Options: { timeout: 3000, retries: 3 }
Options2 (timeout era 0): { timeout: 0 }

--- Paso 6: Logical Assignment ||= y &&= ---
Name después de ||=: Anonymous
User después de &&=: { name: 'Ana', active: true }

--- Paso 7: Numeric Separators ---
Billion: 1000000000
Price: 1299.99
Binary: 161
Hex: 16777215

--- Paso 8: Caso Práctico - API Response ---
Nombre: Carlos
Followers: 0
Bio: Sin biografía
Avatar: /default-avatar.png
```

---

## 🔗 Recursos

- [Teoría: Operadores Modernos](../../1-teoria/06-operadores-modernos.md)
- [MDN - Optional Chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [MDN - Nullish Coalescing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
