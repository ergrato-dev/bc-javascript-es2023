# Lab 02 — Leer archivos del usuario

## Objetivo

Recibir archivos de un `<input type="file">`, validarlos antes de leerlos, leerlos con `file.text()` y con `FileReader`, convertir su texto en datos y mostrar el resultado en la página.

**Tiempo:** 55 min · **Teoría:** [02 - Leer archivos del usuario](../../1-teoria/02-leer-archivos.md)

## Cómo trabajar

Este lab es una página. [`starter/index.html`](starter/index.html) tiene un `<input type="file" accept=".csv,.json" multiple>` y una lista vacía, y [`starter/main.js`](starter/main.js) tiene 6 pasos. La carpeta [`starter/muestras/`](starter/muestras/) trae cinco archivos para probar:

| Archivo | Tamaño | Qué tiene |
|---|---:|---|
| `catalogo-grande.csv` | 2162 B | 60 sesiones: pasa del máximo de 1024 B |
| `notas.txt` | 50 B | Texto: su extensión no se admite |
| `roto.json` | 38 B | Un JSON sin cerrar |
| `sesiones.csv` | 128 B | 3 sesiones; una lleva una coma en el título |
| `sesiones.json` | 170 B | 2 sesiones |

1. Abre `starter/index.html` en el navegador, por ejemplo con doble clic, y la consola de las DevTools con `F12` (o `Cmd+Option+I` en macOS).
2. En cada paso, descomenta el código del paso (`Ctrl+/` o `Cmd+/`), guarda y recarga con `F5`.
3. Pulsa el botón del input y elige **a la vez** los cinco archivos de `muestras/`. El diálogo solo muestra `.csv` y `.json` por el `accept`: cambia su filtro a «Todos los archivos» para ver también `notas.txt`.

Los pasos 2 a 6 añaden funciones a `steps`, que se ejecutan en orden cada vez que eliges archivos, con los archivos ordenados por nombre. Los pasos van en orden: descomenta del 1 en adelante. Las salidas se obtuvieron en Chromium 156. Los `type` dependen del sistema operativo (en Windows, un `.csv` puede llegar como `application/vnd.ms-excel`); el resto de la salida es igual en todos.

---

## Paso 1: input.files

Al recargar, antes de elegir nada:

```text
--- Paso 1: input.files ---
  accept: .csv,.json · multiple: true
  antes de elegir: 0 archivos en un FileList
```

Al elegir los cinco archivos:

```text
--- Paso 1: Los archivos elegidos ---
  catalogo-grande.csv   2162 B  text/csv
  notas.txt               50 B  text/plain
  roto.json               38 B  application/json
  sesiones.csv           128 B  text/csv
  sesiones.json          170 B  application/json
```

`input.files` es una `FileList`; `[...input.files]` la convierte en array para poder usar `toSorted`.

## Paso 2: Validar antes de leer

```text
--- Paso 2: Validar ---
  ✘ catalogo-grande.csv: pesa 2162 B y el máximo es 1024 B
  ✘ notas.txt: la extensión .txt no se admite
  ✔ roto.json
  ✔ sesiones.csv
  ✔ sesiones.json
```

`notas.txt` llegó aunque el `accept` no lo incluye: `accept` filtra el diálogo, no valida. `roto.json` pasa porque su problema está dentro, y eso solo se ve al leerlo.

## Paso 3: Leer el texto con file.text()

```text
--- Paso 3: file.text() ---
  roto.json: 2 líneas · primera: [
  sesiones.csv: 4 líneas · primera: id,title,room,seats
  sesiones.json: 4 líneas · primera: [
```

Solo se leen los tres archivos válidos. `trimEnd()` quita el salto de línea final para no contar una línea vacía.

## Paso 4: FileReader y sus eventos

```text
--- Paso 4: FileReader ---
  eventos: loadstart → progress 128/128 → load → loadend
  ¿mismo texto que file.text()? true
```

`readWithReader` envuelve `FileReader` en una promesa que se cumple en `loadend`. Con un archivo de 128 bytes llega un solo `progress`, con todo leído; con uno de cientos de megas llegarían muchos, y servirían para una barra de progreso.

## Paso 5: Convertir el texto en datos

```text
--- Paso 5: Parsear ---
  roto.json: SyntaxError, no es JSON válido
  sesiones.csv: 3 registros
    ⚠ S3 tiene 5 columnas en lugar de 4: S3 | "Constelaciones |  mitos y mapas" | Cúpula | 80
  sesiones.json: 2 registros
```

El `try...catch` atrapa el JSON roto sin detener los demás archivos. La fila `S3` es `S3,"Constelaciones, mitos y mapas",Cúpula,80`: `split(',')` corta también la coma que va entre comillas. Para leer CSV de verdad hay que seguir sus reglas de comillas, como harás en el proyecto con `parseCsv`.

## Paso 6: Mostrarlo en la página

```text
--- Paso 6: En la página ---
  Elementos en la lista: 5
  input.files después de vaciarlo: 0

✅ Lab completado.
```

En la página aparece un elemento por archivo, con un borde verde o rojo:

```text
catalogo-grande.csv · 2.1 KB · pesa 2162 B y el máximo es 1024 B
notas.txt · 50 B · la extensión .txt no se admite
roto.json · 38 B · listo para leer
sesiones.csv · 128 B · listo para leer
sesiones.json · 170 B · listo para leer
```

`input.value = ''` vacía el input: si vuelves a elegir los mismos cinco archivos, el evento `change` llega otra vez y la lista se rehace.

---

## Comprobación

1. Quita `input.value = ''` del paso 6 y elige los mismos archivos dos veces. ¿Qué pasa la segunda vez? ¿Por qué?
2. Cambia `MAX_BYTES` a `4 * 1024` y vuelve a elegir los archivos. ¿Qué escribe ahora el paso 5 para `catalogo-grande.csv`? Mira la salida del paso 3: ¿cuántas líneas tiene?
3. Cambia el paso 5 para que un JSON válido que **no** sea un array (por ejemplo `{ "id": "S1" }`) dé un error propio en lugar de «2 registros» o `undefined registros`. Crea el archivo en `muestras/` para probarlo.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 01 — Blob y File](../lab-01-blob-file/README.md) | [Lab 03 — URLs de objeto y descargas](../lab-03-urls-descargas/README.md) → |

[↑ Semana 22](../../README.md)
