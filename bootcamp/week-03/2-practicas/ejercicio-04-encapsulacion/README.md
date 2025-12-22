# 📘 Ejercicio 04: Encapsulación

## 🎯 Objetivos

- Dominar campos privados con `#`
- Implementar getters y setters
- Crear métodos privados
- Aplicar validación y control de acceso

---

## 📋 Descripción

Este es un **ejercicio guiado paso a paso**. Aprenderás encapsulación descomentando código y observando los resultados.

---

## 📝 Práctica Guiada

### Paso 1: Campos Privados con #

Los campos privados usan `#` y solo son accesibles dentro de la clase:

```javascript
class User {
  #password; // Privado

  constructor(username, password) {
    this.username = username; // Público
    this.#password = password; // Privado
  }
}
```

**Abre `starter/index.js`** y descomenta la sección del Paso 1.

---

### Paso 2: Getters para Datos Privados

Los getters permiten acceso controlado y transformado:

```javascript
get accountNumber() {
  return `****${this.#accountNumber.slice(-4)}`;
}
```

---

### Paso 3: Setters con Validación

Los setters validan antes de modificar datos privados:

```javascript
set price(value) {
  if (value < 0) throw new Error('Precio inválido');
  this.#price = value;
}
```

---

### Paso 4: Métodos Privados

Métodos internos que no deben ser llamados desde fuera:

```javascript
#validateAmount(amount) {
  if (amount <= 0) throw new Error('Monto inválido');
}
```

---

### Paso 5: Propiedades Estáticas Privadas

Datos compartidos entre todas las instancias pero no accesibles externamente.

---

### Paso 6: Sistema de Autenticación

Ejemplo completo con PIN, intentos y bloqueo de cuenta.

---

## ▶️ Ejecución

```bash
cd starter
node index.js
```

---

## ⏱️ Tiempo Estimado

45-55 minutos

---

## ✅ Checklist

- [ ] Paso 1: Campos privados descomentado
- [ ] Paso 2: Getters descomentado
- [ ] Paso 3: Setters con validación descomentado
- [ ] Paso 4: Métodos privados descomentado
- [ ] Paso 5: Propiedades estáticas privadas descomentado
- [ ] Paso 6: Sistema de autenticación descomentado

---

## 🔗 Recursos

- [Teoría: Encapsulación](../../1-teoria/04-encapsulacion.md)
- [MDN: Private class features](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields)
