# Set y WeakSet

## 🎯 Objetivos
- Dominar operaciones de Set y patrones comunes (deduplicar, unión, intersección, diferencia).
- Entender WeakSet y su rol en gestionar referencias débiles.

## 📋 Contenido
### Set
- Métodos: `add`, `has`, `delete`, `clear`, propiedad `size`.
- Iteración: `for...of`, `values()`, `keys()` (idéntico a values), `entries()` devuelve `[value, value]`.
- Dedupe rápido: `const unique = [...new Set(items)]`.
- Operaciones de conjunto (usando spread y filtros):
  - Unión: `new Set([...a, ...b])`
  - Intersección: `new Set([...a].filter(x => b.has(x)))`
  - Diferencia: `new Set([...a].filter(x => !b.has(x)))`

### WeakSet
- Solo acepta objetos; no es iterable; sin `size`.
- Referencias débiles: si el objeto no se referencia en otro lugar, el GC puede liberarlo.
- Uso típico: marcar objetos ya procesados o evitar doble procesamiento en estructuras circulares.

### Cuidados
- Set compara por referencia en objetos; dos objetos con mismo shape son distintos.
- WeakSet no sirve para deduplicar primitivos.

## 🧠 Tips rápidos
- Para conteo, prefiere Map; Set es solo presencia.
- Usa WeakSet para flags efímeros (p.ej., trackear nodos visitados sin filtrar después).

## ✅ Checklist
- [ ] Sabes crear y recorrer Set.
- [ ] Sabes aplicar unión/intersección/diferencia.
- [ ] Conoces limitaciones y usos de WeakSet.
