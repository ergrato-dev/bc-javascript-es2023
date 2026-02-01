# 📘 Ejercicio 01: Clases Básicas

## 🎯 Objetivos

- Aprender la sintaxis de clases ES2023
- Crear constructores con parámetros
- Definir métodos de instancia
- Entender composición de clases

---

## 📋 Descripción

Este es un **ejercicio guiado paso a paso**. Aprenderás a crear clases descomentando código y observando los resultados.

---

## 📝 Práctica Guiada

### Paso 1: Clase Básica

Definir una clase con constructor y propiedades:

```javascript
class Product {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }
}
```

**Abre `starter/index.js`** y descomenta la sección del Paso 1.

---

### Paso 2: Métodos de Instancia

Agregar métodos que operan sobre la instancia:

```javascript
getInfo() {
  return `${this.name} - $${this.price}`;
}
```

---

### Paso 3: Métodos que Modifican Estado

Métodos que modifican propiedades y permiten encadenamiento:

```javascript
applyDiscount(percentage) {
  this.price = this.price * (1 - percentage / 100);
  return this; // Para encadenar
}
```

---

### Paso 4: Clase ShoppingCart (Composición)

Una clase que contiene instancias de otras clases.

---

### Paso 5: Métodos de Resumen

Métodos que generan reportes o resúmenes de datos.

---

### Paso 6: Clase Customer

Una clase que crea y usa instancias de otras clases internamente.

---

## ▶️ Ejecución

```bash
cd starter
node index.js
```

---

## ⏱️ Tiempo Estimado

35-45 minutos

---

## ✅ Checklist

- [ ] Paso 1: Clase básica descomentado
- [ ] Paso 2: Métodos de instancia descomentado
- [ ] Paso 3: Métodos que modifican estado descomentado
- [ ] Paso 4: ShoppingCart descomentado
- [ ] Paso 5: Métodos de resumen descomentado
- [ ] Paso 6: Customer descomentado

---

## 🔗 Recursos

- [Teoría: Clases ES2023](../../1-teoria/01-clases-es6.md)
- [MDN: Classes](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes)
