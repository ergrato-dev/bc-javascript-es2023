# 📖 Glosario - Semana 22: Trabajo con Archivos

Términos clave de esta semana ordenados alfabéticamente.

---

## A

### accept
Atributo de `<input type="file">` que filtra el diálogo de elegir archivos: `accept=".csv,.json"` o `accept="image/*"`. Solo es una sugerencia: la persona puede elegir otros archivos, así que la página valida igual.

### ArrayBuffer
Un bloque de memoria con bytes, sin formato. Lo devuelven `blob.arrayBuffer()` y `FileReader.readAsArrayBuffer`. Se lee a través de un `Uint8Array` o se convierte en texto con `TextDecoder`.

## B

### Base64
Una forma de escribir cualquier byte con 64 caracteres de texto seguros (letras, números, `+` y `/`). Lo usan las data URLs; ocupa un tercio más que los bytes originales.

### Blob
Objeto que guarda una secuencia de bytes que no se puede cambiar y un tipo MIME (`type`). Se crea con `new Blob(partes, { type })` y se lee con `text()`, `bytes()` o `arrayBuffer()`. Del inglés *Binary Large OBject*.

### BOM (marca)
Los tres bytes `EF BB BF` (el carácter `﻿`) que algunos programas ponen al principio de un texto en UTF-8. `text()` la quita al leer; un CSV para Excel la lleva para que las tildes se lean bien. Del inglés *Byte Order Mark*.

## C

### CSV
Formato de tabla en texto: una fila por línea, columnas separadas por comas y la primera fila como cabecera. Un valor con coma, comillas o salto de línea va entre comillas, y sus comillas se escriben dos veces (`""`). Del inglés *Comma-Separated Values*.

## D

### Data URL
Una URL que lleva el contenido dentro, en base64: `data:image/svg+xml;base64,PHN2Zy...`. Se crea con `FileReader.readAsDataURL`. Sirve para datos pequeños que tienen que sobrevivir a la página.

### dataTransfer
Propiedad de los eventos de arrastre con lo que se está arrastrando. `types` dice qué es (`'Files'` si son archivos) y `files` tiene los archivos, solo en el evento `drop`.

### download (atributo)
Atributo de `<a>` que hace que el navegador guarde el destino del enlace como archivo en lugar de abrirlo. Su valor es el nombre propuesto: `<a href="blob:..." download="sesiones.csv">`.

### dragenter, dragover, dragleave, drop
Los eventos que recibe una zona mientras se arrastra algo sobre ella: al entrar, mientras está encima (varias veces por segundo), al salir y al soltar. `drop` solo llega si `dragover` llamó a `preventDefault`.

## F

### File
Un `Blob` con nombre (`name`) y fecha de modificación (`lastModified`). Los da el navegador en `input.files`, `dataTransfer.files` y `clipboardData.files`.

### FileList
La lista de objetos `File` de un input o de un evento de arrastre o pegado. Se recorre con `for...of` o se convierte en array con `[...files]`.

### FileReader
La API anterior a `blob.text()` para leer archivos: empieza con `readAsText`, `readAsDataURL` o `readAsArrayBuffer` y avisa con los eventos `loadstart`, `progress`, `load`, `error` y `loadend`. Solo existe en el navegador.

### Firma (magic number)
Los primeros bytes fijos con los que empieza un formato de archivo: `89 50 4E 47` en un PNG, `25 50 44 46` (`%PDF`) en un PDF. Mirarlos con `slice(0, 4)` dice qué es un archivo de verdad, diga lo que diga su nombre.

## P

### Parsear
Convertir un texto en datos con estructura: `JSON.parse` para JSON, `parseCsv` para CSV.

## S

### slice (Blob)
`blob.slice(inicio, fin, type)` devuelve un `Blob` nuevo con un trozo de bytes, sin leer el archivo ni cambiar el original. Puede partir un carácter de varios bytes por la mitad.

## T

### TextDecoder / TextEncoder
Convierten entre bytes y texto en UTF-8: `new TextDecoder().decode(bytes)` da un texto y `new TextEncoder().encode(texto)` da un `Uint8Array`.

### Tipo MIME
La etiqueta estándar del formato de un contenido: `text/csv`, `application/json`, `image/png`. Es el `type` de un `Blob`. En un archivo elegido por la persona, el navegador lo deduce de la extensión.

## U

### Uint8Array
Un array de bytes: cada elemento es un número entero de 0 a 255. Lo devuelve `blob.bytes()`.

### URL de objeto
Una dirección `blob:` creada con `URL.createObjectURL(blob)` que apunta a un `Blob` en la memoria de la pestaña. Vale para `src` y `href` hasta que se revoca con `URL.revokeObjectURL` o se cierra la página.

### UTF-8
La codificación de texto de la web: cada carácter ocupa de 1 a 4 bytes. Las letras sin tilde ocupan 1; la `ú`, 2; un emoji, 4. Por eso el `size` de un `Blob` no coincide con la longitud del texto.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Recursos — web](../4-recursos/webgrafia/README.md) | — |

[↑ Semana 22](../README.md)
