# Ejercicio 02: Operaciones de Set

## 🎯 Objetivo

Implementar operaciones matemáticas de conjuntos usando Set: unión, intersección, diferencia y diferencia simétrica.

## 📋 Conceptos Cubiertos

- Unión de conjuntos
- Intersección de conjuntos
- Diferencia de conjuntos
- Diferencia simétrica
- Subconjunto y superconjunto
- Conjuntos disjuntos

## 📝 Instrucciones

### Paso 1: Unión de Sets

La **unión** combina todos los elementos de ambos sets:

```javascript
const union = new Set([...setA, ...setB]);
```

**Abre `starter/index.js`** y descomenta la sección del Paso 1.

### Paso 2: Intersección

La **intersección** contiene solo elementos presentes en ambos sets:

```javascript
const intersection = new Set([...setA].filter(x => setB.has(x)));
```

**Descomenta** la sección del Paso 2.

### Paso 3: Diferencia

La **diferencia A - B** contiene elementos en A que no están en B:

```javascript
const difference = new Set([...setA].filter(x => !setB.has(x)));
```

**Descomenta** la sección del Paso 3.

### Paso 4: Diferencia Simétrica

La **diferencia simétrica** contiene elementos que están en uno u otro, pero no en ambos:

```javascript
const symmetric = new Set(
  [...setA].filter(x => !setB.has(x))
    .concat([...setB].filter(x => !setA.has(x)))
);
```

**Descomenta** la sección del Paso 4.

### Paso 5: Subconjunto y Superconjunto

- **Subconjunto**: A ⊆ B si todos los elementos de A están en B
- **Superconjunto**: A ⊇ B si A contiene todos los elementos de B

**Descomenta** la sección del Paso 5.

### Paso 6: Clase SetOps Reutilizable

Crea una clase con todas las operaciones para reutilizar fácilmente:

**Descomenta** la sección del Paso 6.

## ✅ Resultado Esperado

```
--- Paso 1: Unión de Sets ---
Set A: Set(4) { 1, 2, 3, 4 }
Set B: Set(4) { 3, 4, 5, 6 }
Unión (A ∪ B): Set(6) { 1, 2, 3, 4, 5, 6 }

--- Paso 2: Intersección ---
Intersección (A ∩ B): Set(2) { 3, 4 }

--- Paso 3: Diferencia ---
Diferencia (A - B): Set(2) { 1, 2 }
Diferencia (B - A): Set(2) { 5, 6 }

--- Paso 4: Diferencia Simétrica ---
Diferencia Simétrica (A △ B): Set(4) { 1, 2, 5, 6 }

--- Paso 5: Subconjunto y Superconjunto ---
Set X: Set(2) { 1, 2 }
Set Y: Set(4) { 1, 2, 3, 4 }
¿X es subconjunto de Y? true
¿Y es superconjunto de X? true
¿X y Z son disjuntos? true

--- Paso 6: Clase SetOps ---
Frontend: Set(3) { 'Alice', 'Bob', 'Charlie' }
Backend: Set(3) { 'Bob', 'David', 'Eve' }
Full-stack (unión): Set(5) { 'Alice', 'Bob', 'Charlie', 'David', 'Eve' }
Saben ambos (intersección): Set(1) { 'Bob' }
Solo frontend: Set(2) { 'Alice', 'Charlie' }
Solo backend: Set(2) { 'David', 'Eve' }
```

## 🚀 Ejecución

```bash
cd starter
node index.js
```

## 📚 Recursos

- [MDN: Set](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [Operaciones de conjuntos](https://javascript.info/map-set#set)
