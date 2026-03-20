# 📘 Ejercicio 02: Métodos Estáticos

## 🎯 Objetivos

- Comprender la diferencia entre métodos de instancia y estáticos
- Crear clases de utilidad con métodos estáticos
- Usar propiedades estáticas privadas
- Implementar el patrón Factory

---

## 📋 Descripción

Este es un **ejercicio guiado paso a paso**. Aprenderás métodos estáticos descomentando código y observando los resultados.

---

## 📝 Práctica Guiada

### Paso 1: Métodos Estáticos Básicos

Los métodos estáticos se llaman en la clase, no en instancias:

```javascript
class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

MathUtils.add(5, 3); // Se llama en la clase
```

**Abre `starter/index.js`** y descomenta la sección del Paso 1.

---

### Paso 2: Clase Validator

Clase de utilidad con validaciones comunes (email, URL, password).

---

### Paso 3: Propiedades Estáticas Privadas

Propiedades privadas compartidas entre todos los usos de la clase:

```javascript
class IdGenerator {
  static #counter = 0; // Privada

  static sequential() {
    IdGenerator.#counter++;
    return IdGenerator.#counter;
  }
}
```

---

### Paso 4: Clase DateUtils

Utilidades para formateo y comparación de fechas.

---

### Paso 5: Contador por Categoría

Map estático para manejar múltiples contadores independientes.

---

### Paso 6: Factory Pattern

Métodos estáticos como factories para crear instancias configuradas:

```javascript
static createAdmin(name, email) {
  return new User(name, email, 'admin', new Date());
}
```

---

## ▶️ Ejecución

```bash
cd starter
node index.js
```

---

## ⏱️ Tiempo Estimado

40-50 minutos

---

## ✅ Checklist

- [ ] Paso 1: Métodos estáticos básicos descomentado
- [ ] Paso 2: Validator descomentado
- [ ] Paso 3: Propiedades estáticas privadas descomentado
- [ ] Paso 4: DateUtils descomentado
- [ ] Paso 5: Contador por categoría descomentado
- [ ] Paso 6: Factory pattern descomentado

---

## 🔗 Recursos

- [Teoría: Métodos Estáticos](../../1-teoria/02-metodos-estaticos.md)
- [MDN: static](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/static)
