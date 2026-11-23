# Lab 03 — URLs de objeto y descargas

## Objetivo

Mostrar una imagen creada en memoria con una URL de objeto, compararla con una data URL, revocar la URL, descargar archivos creados en la página (TXT, CSV y JSON) y volver a abrir el JSON descargado.

**Tiempo:** 55 min · **Teoría:** [03 - URLs de objeto y descargas](../../1-teoria/03-urls-descargas.md)

## Cómo trabajar

Este lab es una página. [`starter/index.html`](starter/index.html) tiene una imagen vacía, tres botones de descarga y un input para abrir un JSON, y [`starter/main.js`](starter/main.js) tiene 6 pasos. Arriba están `SESSIONS`, tres sesiones de un planetario (una con coma y otra con comillas en el título), y `loaded`, que espera al evento `load` o `error` de una imagen.

1. Abre `starter/index.html` en el navegador, por ejemplo con doble clic, y la consola de las DevTools con `F12` (o `Cmd+Option+I` en macOS).
2. En cada paso, descomenta el código del paso (`Ctrl+/` o `Cmd+/`), guarda y recarga con `F5`.

Cada paso añade una función a `steps`, y el final del archivo las ejecuta en orden esperando a cada una, para que la salida no se mezcle. Los pasos van en orden: descomenta del 1 en adelante. Las salidas se obtuvieron en Chromium 156 con la página abierta con doble clic.

---

## Paso 1: Una URL para un Blob

```text
--- Paso 1: URL.createObjectURL ---
  empieza por: blob: · longitud: 46
  ¿otra URL para el mismo Blob? false
  imagen: load 160×90
```

En la página aparece un círculo amarillo sobre fondo oscuro. Ese SVG no existe en ningún archivo: es un texto convertido en `Blob`. La longitud es 46 con la página abierta con doble clic (`blob:null/` y un identificador de 36 caracteres); servida por `http://`, el origen ocupa más. Cada llamada a `createObjectURL` da una URL distinta, así que el paso revoca enseguida la que no usa.

## Paso 2: Una data URL lleva el contenido dentro

```text
--- Paso 2: data URL ---
  empieza por: data:image/svg+xml;base64,
  longitud: 254 · el Blob: 170 bytes
  imagen desde la data URL: load
```

La data URL lleva los 170 bytes del SVG en base64 (228 caracteres, un tercio más) y 26 de cabecera. Con una foto de 5 MB serían casi 7 millones de caracteres; la URL de objeto seguiría ocupando 46.

## Paso 3: Liberar la URL con revokeObjectURL

```text
--- Paso 3: revokeObjectURL ---
  la imagen ya cargada sigue visible: true 160
  una imagen nueva con la URL revocada: error
```

La consola muestra también un aviso del navegador, `Not allowed to load local resource: blob:null/...`, de la imagen que intenta usar la URL revocada. El círculo sigue en la página: ya estaba cargado.

## Paso 4: Descargar un archivo creado en la página

```text
--- Paso 4: Descargar ---
  Pulsa «Descargar plazas.txt»
```

Al pulsar el botón:

```text
  descargado plazas.txt: 101 bytes, text/plain
```

Ábrelo desde la carpeta de descargas:

```text
La Luna de cerca: 80 plazas
Constelaciones, mitos y mapas: 80 plazas
El "Gran Telescopio": 30 plazas
```

Si tu navegador pregunta dónde guardar, el nombre propuesto es `plazas.txt`. Si ya tenías uno, se llamará `plazas (1).txt`.

## Paso 5: Exportar CSV

```text
--- Paso 5: CSV ---
id,title,room,seats
S1,La Luna de cerca,Cúpula,80
S2,"Constelaciones, mitos y mapas",Cúpula,80
S3,"El ""Gran Telescopio""",Terraza,30
  Pulsa «Descargar sesiones.csv»
```

Al pulsar el botón:

```text
  descargado sesiones.csv: 143 bytes, text/csv
```

- `csvCell` pone entre comillas los valores con coma, comillas o salto de línea, y escribe dos veces las comillas de dentro.
- El archivo descargado lleva la marca BOM (3 bytes) y `\r\n` al final de cada línea. Ábrelo con una hoja de cálculo (Excel, LibreOffice Calc, Google Sheets): `Cúpula` sale con tilde y el título con coma ocupa una sola celda.

## Paso 6: Guardar como JSON y volver a abrirlo

```text
--- Paso 6: JSON de ida y vuelta ---
  Pulsa «Descargar sesiones.json» y ábrelo con «Abrir el JSON descargado»
```

Al pulsar el botón y abrir el archivo descargado con el input de la página:

```text
  descargado sesiones.json: 312 bytes, application/json
  abierto sesiones.json: 3 sesiones · la tercera: El "Gran Telescopio"
  ¿igual que SESSIONS? true

✅ Lab completado.
```

Los datos dan la vuelta completa sin perder nada: de objetos a archivo y de archivo a objetos.

---

## Comprobación

1. En el paso 4, cambia el `setTimeout(..., 0)` por `URL.revokeObjectURL(url)` justo después de `link.click()`. ¿Sigue funcionando la descarga en tu navegador? ¿Por qué el `setTimeout` es la opción segura?
2. Abre el `sesiones.csv` descargado con un editor de texto. ¿Ves la marca BOM? Descárgalo otra vez sin `'﻿'` y ábrelo con una hoja de cálculo. ¿Qué cambia?
3. Escribe `downloadJson(data, filename)` que use `download` y compruébalo con `downloadJson({ total: SESSIONS.length }, 'resumen.json')`. Sin abrir el archivo: ¿cuántos bytes debería tener?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 02 — Leer archivos del usuario](../lab-02-leer-archivos/README.md) | [Lab 04 — Arrastrar y soltar archivos](../lab-04-arrastrar-soltar/README.md) → |

[↑ Semana 22](../../README.md)
