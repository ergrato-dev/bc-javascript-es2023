# Rúbrica de Evaluación - Week 07

## 📊 Peso de evidencias
- Conocimiento 🧠: 30% (quiz, preguntas sobre Sets/Maps/Weak*)
- Desempeño 💪: 40% (4 prácticas)
- Producto 📦: 30% (Proyecto Identity & Access Toolkit)

## ✅ Criterios por evidencia

### Conocimiento (30%)
- Explica diferencias clave entre Set/Map y WeakSet/WeakMap.
- Identifica cuándo usar Map vs Object (claves no string, orden de inserción).
- Describe operaciones de unicidad, iteración y conversión (Array <-> Set/Map).
- Reconoce casos de fugas de memoria y cómo mitigarlas con WeakMap/WeakSet.

### Desempeño (40%)
- Usa Set para deduplicar y mantener orden estable.
- Construye Map para conteo y asociaciones clave/valor con tipos variados.
- Implementa caché con WeakMap sin retener objetos innecesariamente.
- Mantiene colecciones sincronizadas (Set + Map) para registros ordenados.

### Producto (30%)
- Toolkit gestiona usuarios únicos, sesiones y permisos usando Sets/Maps/WeakMaps.
- Soporta operaciones CRUD con reportes consistentes (listados, conteos, búsquedas).
- Evita duplicados y maneja expiración de sesiones sin fugas.
- Código limpio: funciones pequeñas, nombres claros, sin duplicación.

## 🚦 Niveles de logro
- Excelente: Incluye validaciones edge (claves complejas, objetos mutados, expiración de sesión), pruebas con cargas mayores y medición de rendimiento básica.
- Satisfactorio: Cumple requerimientos, cubre casos comunes con colecciones correctas.
- En progreso: Faltan casos borde o hay mal uso de estructuras (p.ej. usa Object donde se necesita Map).

## 🧪 Recomendaciones de prueba
- Probar deduplicación con primitivos y objetos referenciales.
- Validar que WeakMap/WeakSet no retengan referencias tras eliminar objetos.
- Medir operaciones frecuentes (has, get, set) en lotes pequeños para comparar Set/Map vs Arrays/Objects.
