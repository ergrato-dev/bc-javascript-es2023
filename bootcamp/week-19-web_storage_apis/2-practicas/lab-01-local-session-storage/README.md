# Lab 01 — localStorage y sessionStorage

## Objetivo

Guardar, leer y borrar datos en `localStorage`, comprobar que todo vuelve como texto, contar visitas que sobreviven a la recarga, comparar `localStorage` con `sessionStorage` en dos pestañas, borrar solo tus claves y enterarte de los cambios de otra pestaña con el evento `storage`.

**Tiempo:** 55 min · **Teoría:** [01 - localStorage y sessionStorage](../../1-teoria/01-web-storage.md)

## Cómo trabajar

[`starter/index.html`](starter/index.html) muestra dos contadores de visitas. [`starter/main.js`](starter/main.js) tiene 6 pasos.

1. Abre `starter/index.html` en el navegador, por ejemplo con doble clic.
2. Abre la consola de las DevTools con `F12` (o `Cmd+Option+I` en macOS). Abre también la pestaña **Application** → **Local storage** (en Firefox, **Almacenamiento**): ahí ves las claves que se guardan.
3. En cada paso, descomenta el código del paso (`Ctrl+/` o `Cmd+/`), guarda y recarga con `F5`.

Todas las claves empiezan por `lab19:`. En Chromium, las páginas que abres con doble clic comparten un único almacén, y el prefijo evita pisar las de otros archivos. La primera parte de `main.js` borra las claves `lab19:demo:` para que cada recarga empiece igual; las visitas de los pasos 3 y 4 se quedan. Las salidas de este README se obtuvieron en Chromium con todos los pasos descomentados y el almacén vacío: tus contadores pueden ir por otro número.

---

## Paso 1: Guardar, leer y borrar

`setItem(clave, valor)` guarda, `getItem(clave)` lee y `removeItem(clave)` borra. Guardar en una clave que ya existe sustituye el valor. Leer una clave que no existe devuelve `null`, sin error.

```text
--- Paso 1: setItem, getItem y removeItem ---
tank: Arrecife
tank tras sobrescribir: Medusas
language tras removeItem: null
Clave que no existe: null
```

En **Application** aparece `lab19:demo:tank` con el valor `Medusas`. Haz doble clic en el valor, cámbialo y ejecuta `localStorage.getItem('lab19:demo:tank')` en la consola: lees lo que acabas de escribir a mano.

## Paso 2: Solo guarda texto

`setItem` convierte el valor en texto con `String(valor)`. Un número o un booleano vuelven como texto; un array se convierte en sus elementos separados por comas, y un objeto, en `"[object Object]"`, sin sus datos.

```text
--- Paso 2: Todo se convierte en texto ---
price: "12.5" (string)
open: "false" (string)
tanks: "Arrecife,Medusas" (string)
ticket: "[object Object]" (string)
if ("false") entra: true · comparado con 'true': false
```

`JSON.stringify(value)` pone el texto entre comillas para que se vea que es un string. El texto `"false"` no está vacío, así que `Boolean("false")` es `true`: compara con `=== 'true'`. Guardar objetos de verdad es el [lab 02](../lab-02-serializacion/README.md).

## Paso 3: Valores por defecto y un contador que sobrevive

`Number(null)` vale `0`, así que convertir lo que no existe parece funcionar por casualidad. Es más claro dar el valor por defecto con `??`. El contador suma 1 en cada carga y lo guarda.

```text
--- Paso 3: null, valores por defecto y visitas ---
Number(null): 0
Idioma con ?? : es
Visitas (localStorage): 1
```

Recarga varias veces: `Visitas (localStorage)` sube (`2`, `3`...). Cierra el navegador, vuelve a abrir la página y sigue subiendo.

## Paso 4: `sessionStorage` es de la pestaña

`sessionStorage` tiene los mismos métodos, pero lo que guarda dura lo que dura la pestaña: sobrevive a la recarga y desaparece al cerrarla. Además, cada pestaña tiene el suyo. Las claves de `sessionStorage` y `localStorage` no se mezclan.

```text
--- Paso 4: sessionStorage ---
Visitas de esta pestaña (sessionStorage): 1
La misma clave en localStorage: null
```

Recarga: los dos contadores suben. Ahora abre la misma página en **otra pestaña** (copia la dirección). En la nueva, `localStorage` sigue sumando, pero `sessionStorage` empieza en `1`:

```text
Visitas (localStorage): 3
Visitas de esta pestaña (sessionStorage): 1
```

## Paso 5: Recorrer y borrar solo tus claves

`Object.keys(localStorage)` devuelve las claves en un array, que se puede filtrar por prefijo y recorrer mientras se borra. `length` y `key(i)` dan lo mismo de otra forma, pero el orden de `key(i)` no está garantizado: por eso aquí se ordena con `sort()`.

```text
--- Paso 5: Claves con prefijo ---
Claves lab19: lab19:demo:a, lab19:demo:b, lab19:demo:open, lab19:demo:price, lab19:demo:tank, lab19:demo:tanks, lab19:demo:ticket, lab19:visits
Con key(i): lab19:demo:a, lab19:demo:b, lab19:demo:open, lab19:demo:price, lab19:demo:tank, lab19:demo:tanks, lab19:demo:ticket
Tras borrar lab19:demo: lab19:visits
```

`localStorage.clear()` habría borrado también `lab19:visits` y las claves de cualquier otra página abierta desde un archivo. Por eso se borra por prefijo.

## Paso 6: El evento `storage` avisa a las otras pestañas

Cuando una pestaña cambia `localStorage`, las demás pestañas del mismo origen reciben `storage` en `window`, con la clave, el valor anterior y el nuevo. La pestaña que hace el cambio no lo recibe: por eso, al cargar la página, solo sale el aviso.

```text
--- Paso 6: El evento storage ---
Escuchando cambios de otras pestañas. Abre esta página en otra pestaña.

✅ Lab completado.
```

Deja esta pestaña abierta y abre la página en otra. La nueva suma una visita, y en la consola de la **primera** aparece el cambio (los números dependen de tus visitas), y su contador de la página se actualiza sin recargar:

```text
storage: lab19:visits 1 → 2
```

El listener ignora las demás claves con `event.key !== 'lab19:visits'`: la otra pestaña también crea y borra claves `lab19:demo:`, y cada cambio es un evento.

---

## Comprobación

1. En el paso 3, cambia `?? '0'` por `|| '0'`. ¿Cambia algo en este contador? ¿Con qué valor guardado darían resultados distintos `??` y `||`?
2. En el paso 4, duplica la pestaña con el menú del navegador (clic derecho en la pestaña → **Duplicar**) en lugar de abrir una nueva. ¿En cuánto empieza el contador de `sessionStorage`? ¿Qué te dice eso de cómo se crea?
3. En el paso 6, quita la comprobación de `event.key` y abre otra pestaña. ¿Cuántos eventos llegan y de qué claves?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Índice de labs](../README.md) | [Lab 02 — Serialización con JSON](../lab-02-serializacion/README.md) → |

[↑ Semana 19](../../README.md)
