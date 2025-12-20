# Introducción a Sets y Maps

## 🎯 Objetivos
- Entender cuándo usar colecciones Set y Map en lugar de arrays/objetos.
- Conocer propiedades clave: unicidad (Set) y claves arbitrarias (Map).
- Reconocer el orden de inserción y su impacto en iteración.

## 📋 Contenido
### ¿Por qué nuevas colecciones?
- Arrays: ordenados, permiten duplicados, índices numéricos.
- Objects: claves string/symbol, sin garantía de orden de inserción para numéricas.
- Set: colección de valores únicos, preserva orden de inserción.
- Map: pares clave/valor con claves de cualquier tipo, preserva orden de inserción.

### Operaciones base
- Set: `add`, `has`, `delete`, `size`, `clear`.
- Map: `set`, `get`, `has`, `delete`, `size`, `clear`.
- Iterables: funcionan con `for...of`, spread (`...`), `Array.from`.

### Igualdad
- Set/Map usan SameValueZero (como `Object.is` salvo `NaN === NaN`), distinto a `===` en ese caso.

## 🧠 Tips rápidos
- Usa Set para deduplicar manteniendo orden de aparición.
- Usa Map cuando la clave no sea string/symbol o requieras orden estable de inserción.
- Evita mezclar en Map claves primitiva y objeto para el mismo tipo de dato si no es intencional.

## ✅ Checklist
- [ ] Diferencias claras entre Set/Map vs Array/Object.
- [ ] Conocer métodos base y comportamiento de unicidad.
- [ ] Comprender SameValueZero (NaN se considera igual).
