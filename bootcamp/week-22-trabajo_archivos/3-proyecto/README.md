# Proyecto Semana 22 — Importador de colección

## Descripción

Las fichas de tu dominio (las sesiones de un planetario, las piezas de un museo...) llegan en hojas de cálculo exportadas a CSV y en archivos JSON de otros equipos. El importador las reúne en una tabla: la persona elige, arrastra o pega los archivos, la página rechaza los que no sirven, lee los demás, avisa de cada fila con errores y une los registros sin repetirlos. Al final, descarga todo en un solo CSV o JSON.

La página, el servidor y `main.js` ya están hechos. Tu trabajo es escribir las funciones de archivos de `src/logic.js`, describir en `src/data.js` los campos de tu dominio y preparar en `muestras/` los archivos para probarlo.

**Tiempo:** 2 h.

## Punto de partida

```bash
mkdir -p ~/js-proyecto-semana-22
cp -r bootcamp/week-22-trabajo_archivos/3-proyecto/starter/. ~/js-proyecto-semana-22/
cd ~/js-proyecto-semana-22
```

Ejecuta el `cp` desde la carpeta del bootcamp. Quedan estos archivos:

| Archivo | Qué contiene | ¿Lo editas? |
|---|---|---|
| `server.js` | Un servidor de archivos: sirve la página por `http://` | No |
| `index.html` | La zona de importar, los informes, los botones y la tabla; carga `src/main.js` | No |
| `styles.css` | Los estilos | Si quieres |
| `src/data.js` | `APP` (título, reglas de los archivos, clave y nombre de exportación) y `FIELDS` (las columnas) | Sí: paso 2 |
| `src/logic.js` | Ocho funciones con `TODO` | Sí: es el proyecto |
| `src/main.js` | Recoge los archivos del botón, del arrastre y del pegado, pinta los informes y la tabla, y exporta | No, pero léelo |
| `muestras/` | `datos.csv`, `datos-extra.json`, `con-errores.csv` y `leeme.txt` del ejemplo Planetario | Sí: paso 2 |

- **Qué:** `logic.js` valida archivos (`formatBytes`, `checkFile`), los convierte en registros (`parseCsv`, `toRecords`, `readRecords`), los une (`mergeRecords`) y prepara la exportación (`toCsv`, `exportFile`). Ninguna función usa el DOM.
- **Para qué:** reciben objetos `File` o texto y devuelven datos, así que se prueban con Node, que también tiene `File` y `Blob` ([teoría 01](../1-teoria/01-blob-file.md)). `main.js` solo conecta la página con ellas.
- **Impacto:** `scripts/verificar-semana.sh` prueba cada función con archivos creados en el momento, y también tus muestras. Más detalles en [docs/autograding.md](../../../docs/autograding.md).

Lee `src/main.js` mientras trabajas, porque aplica la teoría de la semana:

- `handleFiles` es el camino único del botón, del arrastre y del pegado ([teoría 04](../1-teoria/04-arrastrar-soltar.md#5-un-solo-camino-para-todos)): ordena los archivos, valida cada uno con tu `checkFile`, lo lee con tu `readRecords` y une los registros con tu `mergeRecords`.
- La zona acepta solo arrastres con archivos (`types.includes('Files')`), llama a `preventDefault` en `dragover` y `drop`, y se resalta con un contador. `window` cancela los soltados fuera de la zona.
- El input se vacía después de cada `change` para poder importar otra vez el mismo archivo ([teoría 02](../1-teoria/02-leer-archivos.md#1-input-typefile)).
- Exportar crea una URL de objeto para el `File` de tu `exportFile`, la usa en un enlace `download` y la revoca ([teoría 03](../1-teoria/03-urls-descargas.md#4-descargar-un-archivo)).
- Los informes y la tabla se escriben con `textContent`: un nombre de archivo o una celda con `<script>` se muestran como texto ([semana 17](../../week-17-dom_manipulation_moderna/README.md)).

Las salidas se obtuvieron con Node 24.19.0 y Chromium 156.

---

## Paso 1: arrancar el servidor y ver la página (5 min)

```bash
node server.js
```

```text
🚀 Página en http://localhost:3000 (Ctrl+C para pararlo)
```

**Qué:** `server.js` sirve los archivos de la carpeta. **Para qué:** `index.html` carga `src/main.js` como módulo, y el navegador no carga módulos desde un archivo abierto con doble clic. **Impacto:** abre siempre `http://localhost:3000`, no el archivo.

Con el starter se ven el título, la zona de importar y la tabla vacía con los botones desactivados. Las reglas dicen `de hasta undefined`, porque `formatBytes` todavía devuelve `undefined`. Si eliges `muestras/datos.csv`, la consola de las DevTools muestra `Uncaught (in promise) TypeError: Cannot destructure property 'records' of '(intermediate value)' as it is undefined.`: `readRecords` todavía no devuelve nada.

Deja el servidor abierto y usa otra terminal, en la misma carpeta, para los comandos de los pasos 3 a 9. El servidor lee los archivos en cada petición: basta con recargar la página.

## Paso 2: tus campos y tus muestras (20 min)

Abre `src/data.js`. **`APP`** describe la página y las reglas:

| Propiedad | Qué es | Ejemplo |
|---|---|---|
| `title`, `intro` | El título y la presentación | `'Importador de sesiones del planetario'` |
| `accept` | Las extensiones admitidas: deja `['.csv', '.json']` | `['.csv', '.json']` |
| `maxBytes` | El tamaño máximo de cada archivo, de 1 KB a 5 MB | `50 * 1024` |
| `key` | El `name` del campo que identifica cada registro | `'id'` |
| `exportName` | El nombre de los archivos exportados, sin extensión: minúsculas, números y guiones | `'sesiones-planetario'` |

**`FIELDS`** son las columnas, de 3 a 8, en el orden de la tabla. Cada una tiene `name` (el nombre en el CSV y en el JSON, en `camelCase` inglés), `label` (el título en la tabla), `type` (`'text'` o `'number'`) y `required`. La clave (`key`) tiene que ser un campo obligatorio, y al menos un campo tiene que ser `'number'`.

Cambia el ejemplo Planetario por tu dominio: piensa qué columnas tendría la hoja de cálculo real de esas fichas. Después, rehaz los cuatro archivos de `muestras/` con tus columnas:

| Archivo | Qué debe tener |
|---|---|
| `datos.csv` | 5 o más registros sin errores, con cabecera. Incluye un valor con coma entre comillas y otro con comillas dobles (`""`) |
| `datos-extra.json` | Un array con 2 o más registros sin errores. Al menos uno con la misma clave que alguno de `datos.csv`, para que lo actualice |
| `con-errores.csv` | Algún registro bueno y 2 o más filas con errores: un campo obligatorio vacío, un número que no es un número |
| `leeme.txt` | Cualquier texto: sirve para ver el rechazo por extensión |

Puedes escribir los CSV con un editor de texto o exportarlos desde una hoja de cálculo como «CSV UTF-8». La comprobación `muestras` los lee con tus propias funciones.

## Paso 3: `formatBytes` (5 min)

`formatBytes(bytes)` escribe un tamaño para personas en unidades de 1024: menos de 1024 en bytes sin decimales, y desde ahí en KB, MB o GB con un decimal (`toFixed(1)`). Divide entre 1024 mientras el valor sea 1024 o más y queden unidades.

```bash
node --input-type=module -e "import { formatBytes } from './src/logic.js'; console.log([0, 512, 1024, 1536, 50 * 1024, 1048576, 3 * 1024 ** 3].map(formatBytes).join(' | '));"
```

```text
0 B | 512 B | 1.0 KB | 1.5 KB | 50.0 KB | 1.0 MB | 3.0 GB
```

## Paso 4: `checkFile` (10 min)

`checkFile(file, { accept, maxBytes })` es la validación antes de leer de la [teoría 02](../1-teoria/02-leer-archivos.md#2-validar-antes-de-leer): extensión, vacío y tamaño, en ese orden. Devuelve `null` o un mensaje que empieza por el nombre del archivo. El tamaño se escribe con tu `formatBytes`, y la ayuda `extensionOf` ya está escrita arriba del archivo. `main.js` le pasa `APP` entero, que tiene `accept` y `maxBytes`.

```bash
node --input-type=module -e "import { checkFile } from './src/logic.js'; const rules = { accept: ['.csv', '.json'], maxBytes: 1024 }; for (const [name, size] of [['datos.csv', 300], ['DATOS.JSON', 40], ['notas.txt', 50], ['LEEME', 10], ['vacio.csv', 0], ['grande.csv', 2150]]) console.log(name.padEnd(11), checkFile(new File(['x'.repeat(size)], name), rules));"
```

```text
datos.csv   null
DATOS.JSON  null
notas.txt   notas.txt: el tipo .txt no se admite (usa .csv o .json)
LEEME       LEEME: el tipo (sin extensión) no se admite (usa .csv o .json)
vacio.csv   vacio.csv: está vacío
grande.csv  grande.csv: pesa 2.1 KB y el máximo es 1.0 KB
```

`'x'.repeat(size)` crea un archivo de `size` bytes sin escribirlo en disco. La lista de extensiones del mensaje sale de `accept` con `join(' o ')`.

## Paso 5: `parseCsv` (25 min)

`parseCsv(text)` convierte un CSV en un array de filas, cada una un array de textos, con las reglas de la [teoría 02](../1-teoria/02-leer-archivos.md#5-convertir-el-texto-en-datos). Es la función más larga del proyecto. Recorre el texto carácter a carácter con un `for` y cuatro variables: las filas, la fila actual, la celda actual y si estás dentro de comillas.

- Quita la marca BOM al empezar: `text.replace(/^﻿/, '')`.
- Un `\r` seguido de `\n` es un solo fin de fila: salta el `\n` avanzando el índice.
- Al cerrar una fila, no la guardes si es una línea vacía (una sola celda vacía). Al terminar el texto, cierra la última fila si quedó algo sin cerrar.

```bash
node --input-type=module -e "import { parseCsv } from './src/logic.js'; const text = '﻿id,title,seats\r\nS1,\"Luna, Sol\",80\r\n\r\nS2,\"El \"\"Gran\"\" Telescopio\",\r\nS3,\"dos\nlíneas\",5\r\n'; console.log(parseCsv(text));"
```

```text
[
  [ 'id', 'title', 'seats' ],
  [ 'S1', 'Luna, Sol', '80' ],
  [ 'S2', 'El "Gran" Telescopio', '' ],
  [ 'S3', 'dos\nlíneas', '5' ]
]
```

La línea vacía desaparece, la celda vacía de `S2` se conserva y el salto de línea de `S3` es parte del título. En el comando, `\"` es una comilla dentro de las comillas dobles de la terminal.

## Paso 6: `toRecords` (20 min)

`toRecords(rows, fields)` convierte las filas en registros con la cabecera de la primera fila, y valida cada fila como en la [teoría 02](../1-teoria/02-leer-archivos.md#6-validar-cada-fila). Lee las reglas exactas en el comentario de la función:

- Busca la posición de cada campo en la cabecera con `indexOf` (las columnas pueden venir en cualquier orden, y las que sobran se ignoran). Si falta una, devuelve un solo error en la fila 1.
- Para cada fila, recorta cada valor con `trim()` y compruébalo según su campo: obligatorio vacío, número que no es número. Un `return` dentro del `forEach` pasa a la siguiente fila en cuanto hay un error.
- Los números se convierten con `Number` y se comprueban con `Number.isFinite`. Un número vacío y no obligatorio vale `null`.

```bash
node --input-type=module -e "import { toRecords } from './src/logic.js'; import { FIELDS } from './src/data.js'; const rows = [['title', 'id', 'seats', 'room', 'minutes'], [' La Luna ', 'S1', '80', 'Cúpula', '45'], ['Marte', 'S2', 'muchas', 'Sala 2', ''], ['', 'S3', '40', 'Sala 2', ''], ['Venus', 'S4', '30', 'Terraza', '']]; console.log(toRecords(rows, FIELDS)); console.log(toRecords([['id', 'title']], FIELDS));"
```

```text
{
  records: [
    {
      id: 'S1',
      title: 'La Luna',
      room: 'Cúpula',
      seats: 80,
      minutes: 45
    },
    {
      id: 'S4',
      title: 'Venus',
      room: 'Terraza',
      seats: 30,
      minutes: null
    }
  ],
  errors: [
    { row: 3, message: 'seats no es un número' },
    { row: 4, message: 'falta title' }
  ]
}
{
  records: [],
  errors: [ { row: 1, message: 'falta la columna room' } ]
}
```

Este comando usa los `FIELDS` del ejemplo Planetario; con los tuyos, cambia las filas por las de tu dominio. Los registros salen con las propiedades en el orden de `FIELDS`, no en el de la cabecera.

## Paso 7: `readRecords` (15 min)

`readRecords(file, fields)` es `async`: lee el texto del `File` con `await file.text()` y, según la extensión, lo pasa por `parseCsv` y `toRecords`, o por `JSON.parse`. Para que un JSON siga las mismas reglas que un CSV, conviértelo en filas: una cabecera con los `name` de `fields` y una fila por objeto, con cada valor pasado a texto (`String(item[name] ?? '')`). Atrapa el `SyntaxError` de un JSON roto y comprueba que es un array con `Array.isArray`.

```bash
node --input-type=module -e "import { readFile } from 'node:fs/promises'; import { readRecords } from './src/logic.js'; import { FIELDS } from './src/data.js'; for (const name of ['datos.csv', 'datos-extra.json', 'con-errores.csv']) { const file = new File([await readFile('muestras/' + name)], name); const { records, errors } = await readRecords(file, FIELDS); console.log(name, records.length, 'registros', errors); } console.log(await readRecords(new File(['[{ roto'], 'roto.json'), FIELDS));"
```

```text
datos.csv 6 registros []
datos-extra.json 3 registros []
con-errores.csv 2 registros [
  { row: 3, message: 'falta title' },
  { row: 4, message: 'seats no es un número' }
]
{ records: [], errors: [ { row: 0, message: 'no es JSON válido' } ] }
```

`readFile` de `node:fs/promises` lee el archivo del disco y `new File` lo envuelve como haría el navegador. Con tus muestras, los números serán otros; la comprobación `muestras` pide lo que dice la tabla del paso 2.

## Paso 8: `mergeRecords` (10 min)

`mergeRecords(current, incoming, key)` une los registros de un archivo nuevo con los que ya hay. Empieza con una copia de `current` (`[...current]`) y, por cada registro nuevo, busca su clave con `findIndex`: si existe, lo sustituye en esa posición; si no, lo añade al final. Cuenta cuántos añadió y cuántos sustituyó.

```bash
node --input-type=module -e "import { mergeRecords } from './src/logic.js'; const current = [{ id: 'S1', seats: 80 }, { id: 'S2', seats: 40 }]; const result = mergeRecords(current, [{ id: 'S3', seats: 30 }, { id: 'S2', seats: 45 }], 'id'); console.log(result); console.log(current[1]);"
```

```text
{
  records: [
    { id: 'S1', seats: 80 },
    { id: 'S2', seats: 45 },
    { id: 'S3', seats: 30 }
  ],
  added: 1,
  replaced: 1
}
{ id: 'S2', seats: 40 }
```

`S2` se actualiza en su sitio y `current` no cambia: `main.js` guarda el array nuevo.

## Paso 9: `toCsv` y `exportFile` (10 min)

`toCsv(records, fields)` escribe el CSV con las reglas de la [teoría 03](../1-teoria/03-urls-descargas.md#5-exportar-csv-y-json): la cabecera con los `name`, una línea por registro, `\r\n` al final de **cada** línea, `null` como celda vacía y comillas cuando hacen falta. `exportFile(records, fields, format, baseName)` devuelve un `File` listo para descargar: el CSV con la marca BOM delante o el JSON con sangría de 2 espacios.

```bash
node --input-type=module -e "import { toCsv, exportFile } from './src/logic.js'; import { FIELDS } from './src/data.js'; const records = [{ id: 'S3', title: 'Constelaciones, mitos y mapas', room: 'Cúpula', seats: 80, minutes: null }, { id: 'S6', title: 'Taller \"Haz tu cohete\"', room: 'Sala 2', seats: 25, minutes: 60 }]; console.log(JSON.stringify(toCsv(records, FIELDS))); for (const format of ['csv', 'json']) { const file = exportFile(records, FIELDS, format, 'sesiones-planetario'); console.log(file.name, file.type, file.size, 'bytes'); }"
```

```text
"id,title,room,seats,minutes\r\nS3,\"Constelaciones, mitos y mapas\",Cúpula,80,\r\nS6,\"Taller \"\"Haz tu cohete\"\"\",Sala 2,25,60\r\n"
sesiones-planetario.csv text/csv 124 bytes
sesiones-planetario.json application/json 256 bytes
```

`JSON.stringify` muestra los `\r\n` y escribe cada comilla del CSV como `\"`. El CSV pesa 3 bytes más que su texto por la marca BOM. La comprobación `exportar` también vuelve a leer tu CSV con tu `parseCsv`: lo que exportas se tiene que poder importar.

## Paso 10: probar la página y comprobar (15 min)

Recarga `http://localhost:3000`. Con los datos de ejemplo:

1. Las reglas dicen `Se admiten .csv y .json de hasta 50.0 KB, con las columnas id, title, room, seats, minutes.` Los botones de exportar están desactivados.
2. Pulsa «elígelos desde tu equipo» y elige a la vez `datos.csv` y `leeme.txt` (cambia el filtro del diálogo a «Todos los archivos»). Aparecen dos informes: `datos.csv (273 B): 6 nuevos, 0 actualizados, 0 con errores` en verde y `leeme.txt: el tipo .txt no se admite (usa .csv o .json)` en rojo. La tabla tiene 6 registros; «Constelaciones, mitos y mapas» ocupa una sola celda y el taller lleva sus comillas.
3. Arrastra `datos-extra.json` y `con-errores.csv` hasta la zona: se resalta en azul mientras arrastras. Al soltar, `datos-extra.json (362 B): 2 nuevos, 1 actualizados, 0 con errores` y, en rojo, `con-errores.csv (148 B): 2 nuevos, 0 actualizados, 2 con errores` con `Fila 3: falta title` y `Fila 4: seats no es un número`. La tabla tiene 10 registros, y `S2` tiene ahora 45 plazas.
4. Suelta un archivo fuera de la zona: no pasa nada, la página sigue igual.
5. Pulsa **Exportar CSV**: se descarga `sesiones-planetario.csv` (422 B). Ábrelo con una hoja de cálculo: las tildes y las comas se ven bien. Pulsa **Exportar JSON**: `sesiones-planetario.json`.
6. Pulsa **Vaciar** e importa el CSV que acabas de descargar: `10 nuevos, 0 actualizados, 0 con errores`. Los datos han dado la vuelta completa.
7. Vuelve a elegir el mismo archivo: `0 nuevos, 10 actualizados`. El input se vació, así que el mismo archivo se puede importar otra vez.

La consola de las DevTools no debe mostrar ningún error. Después, haz lo mismo con tus muestras.

Repasa `src/logic.js` antes de entregar: borra los `TODO` que queden y comprueba que no usas `var`. Desde la carpeta del bootcamp:

```bash
PROYECTO=~/js-proyecto-semana-22 ./scripts/verificar-semana.sh 22
# Semana 22 — Trabajo con Archivos
#   ✅ src/data.js, src/logic.js y src/main.js son módulos ES válidos
#   ...
# 14/14 comprobaciones superadas.
```

Cada ❌ trae una pista con el paso que lo arregla.

---

## ✅ Requisitos verificables

Las comprobaciones de [`checks.json`](../checks.json):

| Comprobación | Qué pide |
|---|---|
| `sintaxis` | `src/data.js`, `src/logic.js` y `src/main.js` son módulos ES válidos |
| `sin-todo` | `src/logic.js` no tiene ningún `TODO` |
| `sin-var` | Ningún archivo de `src/` usa `var` |
| `datos-exports` | `data.js` exporta `APP` (`title`, `intro`, `accept` con `.csv` y `.json`, `maxBytes` entero de 1 KB a 5 MB, `key` que es un campo obligatorio y `exportName` sin extensión ni espacios) y de 3 a 8 `FIELDS` con `name` camelCase sin repetir, `label`, `type` `text` o `number` y `required` booleano |
| `datos-dominio` | El título, `exportName` y los campos no son los del ejemplo Planetario |
| `format-bytes` | `formatBytes` escribe bytes, KB, MB y GB en base 1024 con un decimal desde KB |
| `check-file` | `checkFile` acepta las extensiones de la lista sin mirar mayúsculas y rechaza, con el nombre del archivo al principio, otra extensión, un archivo vacío o uno que pasa de `maxBytes` |
| `parse-csv-basico` | `parseCsv` separa filas y columnas con saltos `\n` y `\r\n`, quita la marca BOM, se salta las líneas vacías y conserva los campos vacíos |
| `parse-csv-comillas` | `parseCsv` lee campos entre comillas con comas, comillas dobles (`""`) y saltos de línea dentro |
| `to-records` | `toRecords` usa la cabecera en cualquier orden, recorta los valores, convierte los `number` (vacío y opcional = `null`) y devuelve `{ row, message }` por cada fila con error, que no entra en `records` |
| `read-records` | `readRecords` lee un `File` `.csv` o `.json` (sin mirar mayúsculas) con las reglas de `toRecords`, y avisa en la fila 0 de un JSON roto o que no es una lista |
| `merge-records` | `mergeRecords` sustituye por `key` en la misma posición, añade los nuevos al final, cuenta `added` y `replaced` y no cambia los arrays recibidos |
| `exportar` | `toCsv` escribe la cabecera y los registros con `\r\n`, vacío para `null` y comillas cuando hacen falta (y `parseCsv` lo vuelve a leer igual); `exportFile` crea el `File` `.csv` con BOM o el `.json` con su nombre y `type` |
| `muestras` | Los archivos de `muestras/` son del dominio y pasan por tus funciones: `datos.csv` con 5 o más registros sin errores, `datos-extra.json` con 2 o más registros sin errores y que actualiza alguno de `datos.csv`, `con-errores.csv` con algún registro y 2 o más errores, y `leeme.txt` rechazado por `checkFile` |

Que los datos sean de tu dominio, que la página funcione y que el código se lea bien lo revisa el instructor con la [rúbrica](../rubrica-evaluacion.md).

## Entrega

La carpeta `~/js-proyecto-semana-22` con tus datos en `src/data.js`, tus archivos en `muestras/` y `src/logic.js` completo, por el canal que indique el instructor.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 04 — Arrastrar y soltar archivos](../2-practicas/lab-04-arrastrar-soltar/README.md) | [Rúbrica de evaluación](../rubrica-evaluacion.md) → |

[↑ Semana 22](../README.md)
