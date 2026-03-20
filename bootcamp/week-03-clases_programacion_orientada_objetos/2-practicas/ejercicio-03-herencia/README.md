# 📘 Ejercicio 03: Herencia

## 🎯 Objetivos

- Comprender la herencia de clases con `extends`
- Usar `super()` para llamar al constructor padre
- Sobrescribir métodos (override)
- Entender polimorfismo e `instanceof`

---

## 📋 Descripción

Este es un **ejercicio guiado paso a paso**. Aprenderás herencia de clases descomentando código y observando los resultados.

---

## 📝 Práctica Guiada

### Paso 1: Clase Base (Padre)

La clase base define propiedades y métodos que serán heredados:

```javascript
class Vehicle {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
}
```

**Abre `starter/index.js`** y descomenta la sección del Paso 1.

---

### Paso 2: Herencia Básica con extends

`extends` crea una clase hija, `super()` llama al constructor padre:

```javascript
class Car extends Vehicle {
  constructor(brand, model, year, doors) {
    super(brand, model, year); // Constructor padre
    this.doors = doors; // Propiedad propia
  }
}
```

---

### Paso 3: Sobrescribir Métodos (Override)

La clase hija puede redefinir métodos del padre:

```javascript
getInfo() {
  const baseInfo = super.getInfo(); // Método del padre
  return `${baseInfo} - ${this.doors} puertas`;
}
```

---

### Paso 4: Múltiples Clases Hijas

Una clase padre puede tener varias clases hijas especializadas.

---

### Paso 5: instanceof y Polimorfismo

Verificar tipos y tratar objetos diferentes de forma uniforme.

---

### Paso 6: Cadena de Herencia

Extender clases que ya extienden otras (herencia multinivel).

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

- [ ] Paso 1: Clase base descomentado
- [ ] Paso 2: Herencia con extends descomentado
- [ ] Paso 3: Override de métodos descomentado
- [ ] Paso 4: Múltiples clases hijas descomentado
- [ ] Paso 5: instanceof y polimorfismo descomentado
- [ ] Paso 6: Cadena de herencia descomentado

---

## 🔗 Recursos

- [Teoría: Herencia](../../1-teoria/03-herencia.md)
- [MDN: extends](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/extends)
- [MDN: super](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/super)
