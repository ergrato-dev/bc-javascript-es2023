# Lab 01 — Blob y File

## Objetivo

Crear Blobs desde textos y bytes, leerlos de tres formas, cortarlos con `slice`, crear Files, reconocer un archivo por sus primeros bytes y leer JSON y CSV con marca BOM.

**Tiempo:** 50 min · **Teoría:** [01 - Blob y File](../../1-teoria/01-blob-file.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 6 pasos. En cada uno, descomenta el código del paso (`Ctrl+/` o `Cmd+/`) y ejecuta:

```bash
cd bootcamp/week-22-trabajo_archivos/2-practicas/lab-01-blob-file
node starter/index.js
```

Node 24 trae `Blob`, `File`, `TextEncoder` y `TextDecoder` iguales que los del navegador, así que este lab se ejecuta en la terminal y su código funciona igual en la consola de las DevTools. El archivo usa `await` fuera de funciones: Node lo trata como un módulo ES porque lo detecta solo. Arriba está `hex`, que escribe bytes en hexadecimal (`48 69`). Los pasos van en orden: descomenta del 1 en adelante. Las salidas se obtuvieron con Node 24.19.0.

---

## Paso 1: Crear un Blob

```text
--- Paso 1: Crear un Blob ---
  size: 7 · length del texto: 6
  type: text/plain
  vacío: 0 type: ''
  partes unidas: 22 bytes
```

- `'Cúpula'` tiene 6 caracteres, pero 7 bytes: la `ú` ocupa 2 en UTF-8.
- Sin la opción `type`, el `Blob` no sabe qué contiene: `type` es un texto vacío.
- `mixed` une dos textos y dos bytes sueltos (`79` y `75`): 9 + 11 + 2 = 22 bytes.

## Paso 2: Leer un Blob

```text
--- Paso 2: Leer un Blob ---
  text(): "id,title\nS1,La Luna\nOK"
  bytes(): 43 c3 ba 70 75 6c 61
  arrayBuffer(): 7 bytes · ArrayBuffer
  TextDecoder: Cúpula
  TextEncoder("ú"): c3 ba
```

`JSON.stringify` muestra los saltos de línea como `\n`. Los bytes `79` y `75` eran las letras `O` y `K`. En hexadecimal, `43` es la `C` y `c3 ba` es la `ú`, los mismos dos bytes que da `TextEncoder`.

## Paso 3: Cortar con slice

```text
--- Paso 3: slice ---
  slice(0, 9): "id,title\n" type: ''
  slice(-2): OK
  mixed sigue igual: 22 bytes
  slice(0, 2) de Cúpula: C�
  slice(0, 3) de Cúpula: Cú
```

- El trozo no hereda el `type`: se pasa como tercer argumento si hace falta (`slice(0, 9, 'text/csv')`).
- `slice(0, 2)` corta la `ú` por la mitad; al leerlo, su primer byte suelto se convierte en `�`.

## Paso 4: Un File es un Blob con nombre

```text
--- Paso 4: File ---
  name: sesiones.csv · size: 20 · type: text/csv
  lastModified: 2026-11-02T09:00:00.000Z
  ¿es un Blob? true
  sin type: ''
  extensión de sesiones.CSV: '.csv'
  extensión de foto.final.png: '.png'
  extensión de LEEME: ''
```

`new File` no deduce el `type` de la extensión: `datos.json` sin `type` queda vacío. `extensionOf` corta desde el **último** punto y pasa a minúsculas, así que `foto.final.png` es `.png` y `.CSV` cuenta como `.csv`.

## Paso 5: El contenido manda: los primeros bytes

```text
--- Paso 5: Firmas ---
  cupula.png    dice image/png        es image/png
  programa.pdf  dice application/pdf  es application/pdf
  falsa.png     dice image/png        es desconocido
```

`sniff` lee solo los 4 primeros bytes con `slice(0, 4).bytes()` y los compara con la firma de cada formato. `falsa.png` dice ser una imagen, pero es texto. `match?.type ?? 'desconocido'` usa el encadenamiento opcional y el operador `??` de la [semana 2](../../../week-02-operadores_metodos_modernos_arrays/README.md).

## Paso 6: Texto, JSON y la marca BOM

```text
--- Paso 6: JSON y BOM ---
  JSON: 141 bytes · 2 sesiones · la segunda: Cúpula abierta
  JSON roto: SyntaxError
  con BOM: 12 bytes · primeros: ef bb bf
  text() empieza por BOM: false · length: 9
  ignoreBOM: true lo conserva: true · length: 10

✅ Lab completado.
```

- Un `File` con JSON se lee con `text()` y `JSON.parse`; un JSON roto lanza `SyntaxError`.
- La marca BOM ocupa 3 bytes (`ef bb bf`). `text()` la quita al leer, así que el texto tiene 9 caracteres y no 10. Un `TextDecoder` con `ignoreBOM: true` la conserva: así la verías si un programa leyera el archivo sin quitarla.

---

## Comprobación

1. ¿Cuántos bytes ocupa `new Blob(['🚀'])`? ¿Y `'🚀'.length`? Compruébalo y explica por qué no coinciden con el `'Cúpula'` del paso 1.
2. Añade a `SIGNATURES` la firma de GIF (`47 49 46 38`, las letras `GIF8`) y crea un `File` que la cumpla. ¿Qué devuelve `sniff` para un archivo de 2 bytes?
3. En el paso 6, escribe el CSV con BOM en un archivo con `node:fs` (`writeFileSync('prueba.csv', Buffer.from(await withBom.arrayBuffer()))`) y ábrelo con `readFileSync('prueba.csv', 'utf8')`. ¿Empieza por `﻿`? ¿Qué le pasaría a la primera columna si separas la cabecera por comas?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Índice de labs](../README.md) | [Lab 02 — Leer archivos del usuario](../lab-02-leer-archivos/README.md) → |

[↑ Semana 22](../../README.md)
