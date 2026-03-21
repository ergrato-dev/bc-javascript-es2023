# 📚 Glosario - Semana 22: Trabajo con Archivos

## A

**accept** — Atributo de `<input type="file">` que limita los tipos de archivo permitidos. Ejemplo: `accept=".txt,.json"`.

**ArrayBuffer** — Representación de datos binarios en bruto en memoria. Resultado de `FileReader.readAsArrayBuffer()`.

## B

**Blob** (_Binary Large Object_) — Objeto que representa datos en bruto (texto, binario). Los objetos `File` heredan de `Blob`.

**blob:** — Esquema de URI especial usado para Object URLs temporales generadas con `URL.createObjectURL()`.

## D

**DataTransfer** — Objeto disponible en eventos de drag & drop que contiene los datos transferidos, incluyendo `files`.

**drag & drop** — Técnica de interacción que permite arrastrar elementos (incluyendo archivos) y soltarlos en una zona de destino.

**dragenter** — Evento disparado cuando el cursor entra en una zona de drop.

**dragleave** — Evento disparado cuando el cursor sale de una zona de drop.

**dragover** — Evento disparado repetitivamente mientras el cursor se mueve sobre una zona de drop. Requiere `preventDefault()` para habilitar el drop.

**drop** — Evento disparado cuando el usuario suelta un archivo o elemento en la zona de drop.

## F

**File** — Interfaz del navegador que representa un archivo del sistema. Extiende `Blob` y añade `name`, `lastModified`.

**FileList** — Objeto similar a un array devuelto por `input.files` o `dataTransfer.files`. Convertir con `Array.from()`.

**FileReader** — API del navegador para leer el contenido de archivos de forma asíncrona.

## M

**MIME type** — Tipo de contenido de un archivo, como `text/plain`, `application/json`, `image/png`. Disponible en `file.type`.

## O

**Object URL** — URL temporal (`blob:…`) que apunta a un objeto en memoria. Generada con `URL.createObjectURL()`.

## R

**readAsArrayBuffer()** — Método de `FileReader` que lee un archivo como datos binarios en un `ArrayBuffer`.

**readAsDataURL()** — Método de `FileReader` que lee un archivo como una cadena Base64 con esquema `data:`.

**readAsText()** — Método de `FileReader` que lee un archivo como texto plano con la codificación especificada.

**revokeObjectURL()** — Método que libera la memoria de una Object URL creada con `URL.createObjectURL()`.

## U

**URL.createObjectURL()** — Método estático que crea una URL temporal para un `Blob` o `File`.
