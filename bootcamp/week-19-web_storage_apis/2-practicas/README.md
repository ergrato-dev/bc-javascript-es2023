# Prácticas — Semana 19

Cuatro labs guiados. Cada lab es una página: abres `starter/index.html` en el navegador, descomentas paso a paso `starter/main.js` y comparas lo que sale en la consola con la salida esperada del README. Antes de recargar, intenta predecir qué saldrá. No se entregan; preparan el [proyecto de la semana](../3-proyecto/README.md).

| Lab | Tema | Duración |
|---|---|---|
| [Lab 01](lab-01-local-session-storage/README.md) | `setItem`, `getItem` y `removeItem`, todo como texto, `null` y valores por defecto, `localStorage` frente a `sessionStorage`, prefijos y el evento `storage` | 55 min |
| [Lab 02](lab-02-serializacion/README.md) | `JSON.stringify` y `JSON.parse`, lo que se pierde, *reviver*, `Map` y `Set`, JSON roto, validar la forma y migrar versiones | 50 min |
| [Lab 03](lab-03-indexeddb/README.md) | `open` y `upgradeneeded`, transacciones, `add`, `put`, `get`, `getAll`, índices, `IDBKeyRange`, transacciones que se deshacen y `versionchange` | 55 min |
| [Lab 04](lab-04-cuotas-y-errores/README.md) | Comprobar si se puede guardar, medir, `QuotaExceededError`, guardar con resultado, caducidad y `navigator.storage` | 50 min |

**Total:** 3 h 30 min.

## Antes de empezar

Necesitas un navegador de escritorio actual (Chrome, Edge, Firefox o Safari) con sus DevTools. No hace falta Node ni servidor: cada `main.js` es un script normal, que el navegador carga también desde un archivo abierto con doble clic. Si en Safari no ves el menú **Desarrollo**, actívalo en **Ajustes → Avanzado → Mostrar funciones para desarrolladores web**.

Ten abierta, junto a la consola, la pestaña **Application** de las DevTools (en Firefox, **Almacenamiento**; en Safari, **Almacenamiento** en el inspector). Ahí ves y editas lo que guarda cada paso.

Los datos de los labs sobreviven a la recarga: es lo que se estudia esta semana. Por eso cada `main.js` borra al empezar las claves de ejemplo del lab (todas empiezan por `lab19:`) o su base de IndexedDB, para que la salida sea siempre la misma. Las salidas se obtuvieron en Chromium; en otros navegadores pueden cambiar los mensajes de error y los límites de espacio.

Si no ves nada en la consola, revisa que has guardado `main.js` antes de recargar y que el filtro de la consola muestra todos los niveles, no solo los errores.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Teoría — 📏 Cuotas, errores y caducidad](../1-teoria/04-cuotas-y-errores.md) | [Lab 01 — localStorage y sessionStorage](lab-01-local-session-storage/README.md) → |

[↑ Semana 19](../README.md)
