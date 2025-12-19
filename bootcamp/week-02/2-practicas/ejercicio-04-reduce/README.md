# 📘 Ejercicio 04: Reduce Complejo

## 🎯 Objetivos

- Dominar reduce() para agregaciones
- Usar reduce para transformar estructuras
- Combinar reduce con otros métodos
- Resolver problemas complejos con reduce
- Aplicar patrones avanzados

---

## 📋 Descripción

El método reduce() es el más poderoso y versátil de los métodos de arrays. Puede transformar un array en cualquier otro tipo de valor: número, string, objeto, array diferente, Map, etc.

---

## 🔧 Tareas

### Parte 1: Agregaciones Básicas

1. Suma, producto, promedio de números
2. Concatenar strings
3. Encontrar valor máximo/mínimo

### Parte 2: Transformaciones Complejas

1. Agrupar elementos por propiedad
2. Contar ocurrencias
3. Indexar array por ID
4. Aplanar arrays anidados

### Parte 3: Casos Avanzados

1. Calcular totales de carrito de compra
2. Crear objeto de estadísticas
3. Pipeline de transformaciones
4. Validación acumulativa

---

## 📝 Instrucciones

1. Abre `starter/index.js`
2. Completa cada función usando reduce()
3. Ejecuta para verificar resultados
4. Compara con `solution/index.js` si necesitas ayuda

---

## ✅ Criterios de Evaluación

- ✅ Usar reduce() correctamente
- ✅ Inicializar accumulator apropiadamente
- ✅ Transformar datos eficientemente
- ✅ Código inmutable y funcional
- ✅ Aplicar patrones avanzados

---

## 🚀 Cómo Ejecutar

```bash
cd bootcamp/week-02/2-practicas/ejercicio-04-reduce
node starter/index.js
```

---

## 💡 Pistas

- `reduce((acc, current) => {...}, initialValue)`
- **Initial value**: Crucial para el tipo de retorno
- Suma → `0`, Producto → `1`, String → `''`, Objeto → `{}`, Array → `[]`
- Siempre retornar el accumulator actualizado
- Reduce puede reemplazar map + filter

---

_Ejercicio 04 - Semana 02 - JavaScript Moderno Bootcamp_
