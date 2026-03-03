# 📘 Destructuring de Objetos en JavaScript ES2023

## 🎯 Objetivos

- Extraer propiedades de objetos con destructuring
- Usar alias para renombrar variables
- Aplicar valores por defecto en propiedades
- Manejar destructuring anidado en objetos complejos
- Combinar destructuring con rest en objetos

---

## 🖼️ Diagrama

![Destructuring de Objetos](../0-assets/02-destructuring-objetos.svg)

---

## 📋 Contenido

### 1. Destructuring Básico de Objetos

Extrae propiedades de un objeto en variables con el mismo nombre:

```javascript
// ❌ Sin destructuring
const user = { name: 'Ana', age: 28, city: 'Madrid' };
const name = user.name;
const age = user.age;
const city = user.city;

// ✅ Con destructuring
const user = { name: 'Ana', age: 28, city: 'Madrid' };
const { name, age, city } = user;

console.log(name); // "Ana"
console.log(age);  // 28
console.log(city); // "Madrid"
```

### 2. Orden No Importa

A diferencia de arrays, en objetos el orden es irrelevante:

```javascript
const product = {
  id: 1,
  title: 'Laptop',
  price: 999
};

// El orden no afecta
const { price, id, title } = product;

console.log(id);    // 1
console.log(title); // "Laptop"
console.log(price); // 999

// Extraer solo algunas propiedades
const { title: productTitle } = product;
console.log(productTitle); // "Laptop"
```

### 3. Alias (Renombrar Variables)

Usa `:` para asignar un nombre diferente a la variable:

```javascript
const apiResponse = {
  user_name: 'john_doe',
  user_email: 'john@example.com',
  created_at: '2024-01-15'
};

// Renombrar a camelCase
const {
  user_name: userName,
  user_email: userEmail,
  created_at: createdAt
} = apiResponse;

console.log(userName);  // "john_doe"
console.log(userEmail); // "john@example.com"
console.log(createdAt); // "2024-01-15"

// user_name, user_email, created_at NO existen como variables
// console.log(user_name); // ❌ ReferenceError
```

### 4. Valores por Defecto

Asigna valores cuando la propiedad es `undefined` o no existe:

```javascript
const config = {
  host: 'localhost',
  port: 3000
};

// timeout no existe, usa default
const { host, port, timeout = 5000 } = config;

console.log(host);    // "localhost"
console.log(port);    // 3000
console.log(timeout); // 5000 (default)

// Combinar alias con default
const {
  host: serverHost = '127.0.0.1',
  debug: isDebug = false
} = config;

console.log(serverHost); // "localhost" (existe en config)
console.log(isDebug);    // false (default, no existe)
```

### 5. Propiedades Anidadas

Extrae valores de objetos dentro de objetos:

```javascript
const employee = {
  id: 1,
  name: 'María García',
  department: {
    name: 'Engineering',
    floor: 3,
    manager: {
      name: 'Carlos López',
      email: 'carlos@company.com'
    }
  }
};

// Extraer propiedades anidadas
const {
  name: employeeName,
  department: {
    name: deptName,
    floor,
    manager: {
      name: managerName
    }
  }
} = employee;

console.log(employeeName); // "María García"
console.log(deptName);     // "Engineering"
console.log(floor);        // 3
console.log(managerName);  // "Carlos López"
```

### 6. Rest en Objetos (`...rest`)

Captura las propiedades restantes en un nuevo objeto:

```javascript
const user = {
  id: 1,
  name: 'Ana',
  email: 'ana@email.com',
  age: 28,
  city: 'Barcelona'
};

// Extraer algunas y agrupar el resto
const { id, name, ...details } = user;

console.log(id);      // 1
console.log(name);    // "Ana"
console.log(details); // { email: "ana@email.com", age: 28, city: "Barcelona" }

// Útil para separar propiedades
const { password, ...safeUser } = {
  username: 'john',
  password: 'secret123',
  email: 'john@mail.com'
};

console.log(safeUser); // { username: "john", email: "john@mail.com" }
// password está aislado y no se expone
```

### 7. Destructuring en Parámetros de Funciones

Una de las aplicaciones más poderosas:

```javascript
// ❌ Sin destructuring
const createUser = (options) => {
  const name = options.name;
  const email = options.email;
  const role = options.role || 'user';
  // ...
};

// ✅ Con destructuring en parámetros
const createUser = ({ name, email, role = 'user' }) => {
  console.log(`Creating ${role}: ${name} (${email})`);
  return { name, email, role, createdAt: new Date() };
};

createUser({ name: 'Ana', email: 'ana@mail.com' });
// "Creating user: Ana (ana@mail.com)"

createUser({ name: 'Admin', email: 'admin@mail.com', role: 'admin' });
// "Creating admin: Admin (admin@mail.com)"
```

### 8. Parámetros con Defaults Completos

```javascript
// Función con objeto de opciones y defaults
const fetchData = ({
  url,
  method = 'GET',
  headers = {},
  timeout = 5000,
  retries = 3
} = {}) => {
  console.log(`${method} ${url}`);
  console.log(`Timeout: ${timeout}ms, Retries: ${retries}`);
  return { url, method, headers, timeout, retries };
};

// Llamadas válidas
fetchData({ url: '/api/users' });
fetchData({ url: '/api/posts', method: 'POST', timeout: 10000 });
fetchData(); // Usa el default {} - no lanza error
```

### 9. Destructuring Combinado (Arrays + Objetos)

```javascript
// Array de objetos
const users = [
  { id: 1, name: 'Ana', role: 'admin' },
  { id: 2, name: 'Luis', role: 'user' },
  { id: 3, name: 'María', role: 'user' }
];

// Extraer primer usuario y su nombre
const [{ name: firstName }] = users;
console.log(firstName); // "Ana"

// Desestructurar en loop
for (const { id, name, role } of users) {
  console.log(`${id}: ${name} (${role})`);
}

// Objeto con arrays
const company = {
  name: 'TechCorp',
  employees: ['Ana', 'Luis', 'María'],
  locations: [
    { city: 'Madrid', country: 'Spain' },
    { city: 'Barcelona', country: 'Spain' }
  ]
};

const {
  name: companyName,
  employees: [ceo, ...staff],
  locations: [{ city: hqCity }]
} = company;

console.log(companyName); // "TechCorp"
console.log(ceo);         // "Ana"
console.log(staff);       // ["Luis", "María"]
console.log(hqCity);      // "Madrid"
```

### 10. Destructuring en Retornos

```javascript
// Función que retorna objeto
const getUser = id => ({
  id,
  name: 'User ' + id,
  email: `user${id}@mail.com`,
  preferences: {
    theme: 'dark',
    language: 'es'
  }
});

// Destructuring del retorno
const { name, preferences: { theme } } = getUser(1);
console.log(name);  // "User 1"
console.log(theme); // "dark"

// Con async/await
const fetchUser = async (id) => {
  const response = await fetch(`/api/users/${id}`);
  const { data: { user, token } } = await response.json();
  return { user, token };
};
```

### 11. Casos de Uso Prácticos

#### Props en componentes (estilo React)

```javascript
// Simular props de componente
const Button = ({
  text,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  ...rest
}) => {
  console.log(`Button: ${text}, type: ${type}, disabled: ${disabled}`);
  console.log('Extra props:', rest);
};

Button({
  text: 'Click me',
  onClick: () => {},
  'data-testid': 'main-btn'
});
```

#### Configuración de aplicación

```javascript
const loadConfig = () => ({
  database: {
    host: 'localhost',
    port: 5432,
    name: 'myapp'
  },
  server: {
    port: 3000,
    cors: true
  },
  features: {
    darkMode: true,
    notifications: false
  }
});

const {
  database: { host: dbHost, port: dbPort },
  server: { port: serverPort },
  features: { darkMode }
} = loadConfig();

console.log(`DB: ${dbHost}:${dbPort}`);
console.log(`Server: ${serverPort}`);
console.log(`Dark mode: ${darkMode}`);
```

#### Manejo de respuestas de API

```javascript
const handleApiResponse = ({
  data,
  status,
  error = null,
  meta: {
    total = 0,
    page = 1,
    perPage = 10
  } = {}
}) => {
  if (error) {
    console.error(`Error ${status}: ${error}`);
    return null;
  }

  console.log(`Page ${page}/${Math.ceil(total / perPage)}`);
  console.log(`Showing ${data.length} of ${total} items`);
  return data;
};

// Uso
handleApiResponse({
  data: [{ id: 1 }, { id: 2 }],
  status: 200,
  meta: { total: 100, page: 1, perPage: 10 }
});
```

---

## 💡 Mejores Prácticas

### ✅ Hacer

```javascript
// Usar alias para claridad
const { name: userName, id: oderId } = response;

// Defaults para valores opcionales
const { timeout = 5000, retries = 3 } = config;

// Destructuring en params para mejor API
const createPost = ({ title, body, author }) => { /* ... */ };
```

### ❌ Evitar

```javascript
// Destructuring muy profundo (difícil de leer)
const { a: { b: { c: { d: { e } } } } } = nested; // ❌

// Mejor extraer paso a paso
const { a } = nested;
const { b } = a;
// ...

// No destructurar si solo necesitas una propiedad
const { name } = user; // OK si usas más props
const name = user.name; // Mejor si solo necesitas name
```

---

## 🧪 Ejercicios de Práctica

### Ejercicio 1: Alias y defaults
```javascript
// Extrae name como userName, y age con default 18
const person = { name: 'Ana' };
// Tu código aquí
```

### Ejercicio 2: Anidado
```javascript
// Extrae la ciudad del usuario
const data = {
  user: {
    profile: {
      address: { city: 'Madrid' }
    }
  }
};
// Tu código aquí
```

### Ejercicio 3: Función con destructuring
```javascript
// Crea una función que reciba { x, y, z = 0 } y retorne la suma
// Tu código aquí
```

---

## 📚 Recursos Adicionales

- [MDN - Destructuring Objects](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#desestructuraci%C3%B3n_de_objetos)
- [JavaScript.info - Destructuring](https://javascript.info/destructuring-assignment#object-destructuring)

---

## ✅ Checklist de Aprendizaje

- [ ] Extraer propiedades por nombre
- [ ] Usar alias con `:`
- [ ] Definir valores por defecto
- [ ] Destructuring anidado
- [ ] Rest en objetos (`...rest`)
- [ ] Destructuring en parámetros
- [ ] Combinar arrays y objetos
- [ ] Aplicar en casos reales (APIs, configs)

---

## 🔗 Navegación

| ⬅️ Anterior | 🏠 Índice | ➡️ Siguiente |
|-------------|-----------|--------------|
| [Destructuring Arrays](./01-destructuring-arrays.md) | [Semana 4](../README.md) | [Módulos ES2023](./03-modulos-es6.md) |
