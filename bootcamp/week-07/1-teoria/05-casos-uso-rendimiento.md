# Casos de Uso y Rendimiento

## 🎯 Objetivos
- Elegir la estructura adecuada según el problema.
- Considerar rendimiento y memoria al usar Sets/Maps y sus variantes débiles.

## 📋 Contenido
### Cuándo usar Set
- Unicidad de valores (IDs, tags, features activos).
- Operaciones de conjunto (unión, intersección, diferencia) de forma expresiva.

### Cuándo usar Map
- Claves no-string (objetos, funciones, NaN).
- Necesidad de orden de inserción estable para reportes.
- Conteo/estadísticas con lookups frecuentes.

### Cuándo usar WeakSet/WeakMap
- Asociar metadatos efímeros a objetos sin controlar su ciclo de vida.
- Evitar fugas en caches: si la clave desaparece, la entrada también.

### Rendimiento
- Set/Map suelen ser O(1) promedio para `has/get/add/set`.
- Arrays/Objects pueden ser suficientes para colecciones pequeñas; mide antes de optimizar.
- Convertir a array para ordenar o paginar; reconstruir luego si hace falta.

### Seguridad y buenas prácticas
- No abuses de WeakMap para todo: solo cuando el ciclo de vida dependa de las referencias.
- Documenta qué tipo de claves espera un Map (primitivos vs objetos) para evitar mezclas confusas.

## 🧠 Tips rápidos
- Para flags por objeto, usa WeakSet; para valores asociados, WeakMap.
- Si necesitas serializar, mantén fuente en objetos/arrays y deriva vistas en Map/Set.

## ✅ Checklist
- [ ] Puedes justificar la elección de Set/Map vs alternativas.
- [ ] Conoces cuándo usar variantes débiles.
- [ ] Consideras orden de inserción y serialización antes de diseñar la colección.
