# 03. Headers, Autenticación y Tokens

## 🎯 Objetivos

- Usar headers esenciales en peticiones REST
- Enviar token de autenticación tipo Bearer
- Separar configuración global de headers

---

## 🧾 Headers más usados

- `Accept`: formato esperado de respuesta
- `Content-Type`: formato del body enviado
- `Authorization`: token o credencial

```javascript
const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': 'Bearer demo-token-123'
};
```

---

## 🔐 Token Bearer

```javascript
const token = localStorage.getItem('access_token');

const response = await fetch('/api/items', {
  headers: {
    'Accept': 'application/json',
    'Authorization': `Bearer ${token}`
  }
});
```

Si no hay token válido, el servidor puede responder `401 Unauthorized`.

---

## 🧩 Cliente API reusable

```javascript
const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

const apiClient = {
  token: null,

  setToken(token) {
    this.token = token;
  },

  async request(endpoint, options = {}) {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        ...(this.token ? { 'Authorization': `Bearer ${this.token}` } : {}),
        ...options.headers
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    return response.status === 204 ? null : response.json();
  }
};
```

---

## ⚠️ Buenas prácticas

- No hardcodear tokens reales en el código.
- Mantener lógica de headers centralizada.
- Evitar logs con información sensible en producción.
