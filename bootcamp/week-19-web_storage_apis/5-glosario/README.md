# 📖 Glosario - Semana 19: Web Storage APIs

Términos clave de esta semana ordenados alfabéticamente.

---

## C

### Caducidad
Momento a partir del cual un dato guardado deja de valer. Web Storage no la gestiona: se guarda junto al dato (`expiresAt`) y se comprueba al leer.

### Cuota
Espacio máximo que el navegador deja usar a un origen. En Web Storage son unos pocos megas; IndexedDB comparte una cuota mucho mayor que depende del disco.

## D

### Deserializar
Reconstruir un valor a partir de su texto, por ejemplo con `JSON.parse`.

## E

### Evento storage
Evento que reciben en `window` las **otras** pestañas del mismo origen cuando una cambia `localStorage`. Trae `key`, `oldValue`, `newValue` y `storageArea`.

## I

### Índice
En IndexedDB, estructura que permite buscar los objetos de un almacén por una propiedad distinta de la clave: `store.index('byTank').getAll('Arrecife')`.

### IndexedDB
Base de datos del navegador que guarda objetos en almacenes, con índices y transacciones. Es asíncrona y tiene mucho más espacio que Web Storage.

## J

### JSON
Formato de texto para datos: textos, números, booleanos, `null`, arrays y objetos simples. `JSON.stringify` lo escribe y `JSON.parse` lo lee.

## K

### keyPath
Opción de `createObjectStore` que indica qué propiedad de cada objeto es su clave: `{ keyPath: 'id' }`.

## L

### localStorage
Almacén de clave y valor de texto, compartido por todas las pestañas del mismo origen, que dura hasta que se borra.

## M

### Migración
Convertir datos guardados con un formato antiguo al formato actual, normalmente según su número de versión.

## O

### Object store (almacén)
En IndexedDB, colección de objetos con una clave única, parecida a una tabla.

### Origen
Combinación de protocolo, dominio y puerto (`http://localhost:3000`). Cada origen tiene su propio almacenamiento.

## Q

### QuotaExceededError
`DOMException` que lanza `setItem` (u otra escritura) cuando no queda espacio. Se reconoce por su `name`.

## R

### Reviver
Función que se pasa como segundo argumento a `JSON.parse`. Recibe cada clave con su valor y devuelve el valor que se guarda en el resultado, por ejemplo para convertir un texto ISO en `Date`.

## S

### Serializar
Convertir un valor en texto para guardarlo o enviarlo, por ejemplo con `JSON.stringify`.

### sessionStorage
Almacén con los mismos métodos que `localStorage`, pero propio de cada pestaña: sobrevive a la recarga y se borra al cerrarla.

### Sobre (envelope)
Objeto que envuelve los datos guardados junto con metadatos como la versión: `{ version: 2, entries: [...] }`.

### structuredClone
Algoritmo (y función global) que copia un valor conservando `Date`, `Map`, `Set` y otros tipos. Es el que usa IndexedDB para guardar.

## T

### Transacción
En IndexedDB, grupo de peticiones que se guardan juntas (`complete`) o no se guarda ninguna (`abort`). Puede ser `readonly` o `readwrite`.

## U

### upgradeneeded
Evento de `indexedDB.open` que llega cuando la base no existe o se abre con una versión mayor. Es el único momento en el que se crean almacenes e índices.

## W

### Web Storage
Nombre común de `localStorage` y `sessionStorage`: almacenes síncronos de clave y valor de texto.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Recursos — web](../4-recursos/webgrafia/README.md) | [🧾 Semana 20: Formularios y Validación](../../week-20-formularios_validacion/README.md) → |

[↑ Semana 19](../README.md)
