# Iteración y Conversiones

## 🎯 Objetivos
- Recorrer Sets y Maps de forma idiomática.
- Convertir entre arrays, objetos, Sets y Maps sin perder información.

## 📋 Contenido
### Iterar Set
- `for (const value of set) { ... }`
- `set.forEach((value) => ...)` (callback recibe value, value, set).

### Iterar Map
- `for (const [key, value] of map) { ... }`
- `map.forEach((value, key) => ...)`.
- `map.keys()`, `map.values()`, `map.entries()` según necesidad.

### Conversiones comunes
- Array → Set: `new Set(array)`.
- Set → Array: `[...set]` o `Array.from(set)`.
- Array de pares → Map: `new Map(pairs)`.
- Map → Array de pares: `[...map]`.
- Map → Objeto plano: `Object.fromEntries(map)` (solo si claves son string/symbol).
- Objeto → Map: `new Map(Object.entries(obj))`.

### Inmutabilidad y copias
- Clonar Set/Map: `new Set(oldSet)`, `new Map(oldMap)`.
- No hay spread en literal, pero sí: `const copy = new Map([...old])`.

## 🧠 Tips rápidos
- Usa destructuring al iterar Map para legibilidad.
- Para ordenar, convierte a array y aplica `sort`, luego reconstruye Map/Set si necesitas colección ordenada.

## ✅ Checklist
- [ ] Puedes pasar de Array a Set/Map y viceversa.
- [ ] Iteras Map con destructuring `[key, value]` sin crear variables temporales adicionales.
- [ ] Sabes cuándo convertir Map a objeto plano (solo si claves string/symbol).
