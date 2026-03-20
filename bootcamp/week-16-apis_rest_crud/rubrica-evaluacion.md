# 📊 Rúbrica de Evaluación - Semana 16: APIs REST y CRUD

## 📋 Información General

| Aspecto | Detalle |
|---------|---------|
| **Semana** | 16 |
| **Tema** | APIs REST y CRUD |
| **Entregable** | Panel CRUD conectado a API |
| **Fecha límite** | Según calendario del instructor |

---

## 🎯 Criterios de Evaluación

### 1. Conocimiento (30%) 🧠

| Criterio | Excelente (100%) | Bueno (80%) | Suficiente (70%) | Insuficiente (<70%) |
|----------|------------------|-------------|------------------|---------------------|
| **REST y recursos** | Explica recursos, rutas y convenciones REST con claridad | Comprende REST con detalles menores faltantes | Reconoce conceptos básicos | Confunde REST con RPC sin distinguir recursos |
| **CRUD y métodos HTTP** | Mapea correctamente CRUD con GET/POST/PUT/PATCH/DELETE | Mapea bien con una confusión menor | Mapeo parcial | Mapeo incorrecto o inconsistente |
| **Headers y autenticación** | Configura headers y token de forma consistente | Configura headers principales | Configura solo Content-Type | No usa headers correctamente |
| **Estados de interfaz** | Diseña y justifica estados loading/success/error | Implementa estados con detalles menores | Implementa estados básicos | No maneja estados visuales |

---

### 2. Desempeño (40%) 💪

| Criterio | Excelente (100%) | Bueno (80%) | Suficiente (70%) | Insuficiente (<70%) |
|----------|------------------|-------------|------------------|---------------------|
| **GET (lectura)** | Filtra, pagina y renderiza datos correctamente | Lee y renderiza con mínimos errores | Lectura básica funcional | No logra leer recursos |
| **POST (creación)** | Envía payload JSON validado y maneja respuesta | Crea recursos con pequeños detalles pendientes | Crea recursos básicos | No crea recursos |
| **PUT/PATCH (actualización)** | Actualiza correctamente y sincroniza vista | Actualiza con fallos menores de UI | Actualización parcial | No actualiza recursos |
| **DELETE (eliminación)** | Elimina con confirmación y actualiza estado local | Elimina con detalles menores | Eliminación básica | No elimina recursos |
| **Manejo de errores** | Distingue red, HTTP y validación con feedback claro | Maneja errores correctamente | Manejo mínimo con mensajes genéricos | Sin manejo de errores |

---

### 3. Producto (30%) 📦

| Criterio | Excelente (100%) | Bueno (80%) | Suficiente (70%) | Insuficiente (<70%) |
|----------|------------------|-------------|------------------|---------------------|
| **Flujo CRUD completo** | Flujo completo y estable en todos los casos | CRUD funcional con pequeños bugs | CRUD parcial | CRUD no funcional |
| **Cliente API reusable** | Funciones reutilizables y configuración centralizada | Buena separación de responsabilidades | Separación mínima | Código duplicado y acoplado |
| **Adaptación al dominio** | Adaptación creativa y coherente | Adaptación correcta | Adaptación parcial | Sin adaptación al dominio |
| **Calidad de código** | Limpio, legible y consistente | Legible con pequeñas mejoras necesarias | Funcional pero desordenado | Difícil de mantener |
| **UX y feedback** | UI clara, estados y mensajes útiles | UI funcional y comprensible | UI básica | UI confusa o incompleta |

---

## 📝 Checklist de Entrega

- [ ] Implementa las 4 operaciones CRUD
- [ ] Usa `Authorization` y `Content-Type` cuando aplica
- [ ] Verifica `response.ok` y muestra errores al usuario
- [ ] Muestra al menos estados `loading`, `success` y `error`
- [ ] Mantiene nomenclatura técnica en inglés
- [ ] Incluye comentarios y mensajes en español
- [ ] El proyecto está adaptado al dominio asignado

---

## 🔗 Navegación

[⬅️ Volver a Semana 16](README.md)
