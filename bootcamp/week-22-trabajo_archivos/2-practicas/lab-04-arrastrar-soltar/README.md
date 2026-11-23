# Lab 04 — Arrastrar y soltar archivos

## Objetivo

Proteger la página de los archivos soltados fuera de la zona, registrar los eventos de arrastre, resaltar la zona sin parpadeos, leer los archivos soltados, aceptar también el botón y el pegado con una sola función y mostrar la vista previa de las imágenes.

**Tiempo:** 50 min · **Teoría:** [04 - Arrastrar y soltar archivos](../../1-teoria/04-arrastrar-soltar.md)

## Cómo trabajar

Este lab es una página. [`starter/index.html`](starter/index.html) tiene una zona punteada con un input de archivos dentro, una lista y una galería vacías, y [`starter/main.js`](starter/main.js) tiene 6 pasos. Arriba está `hasFiles(event)`, que dice si un arrastre trae archivos. La carpeta [`starter/muestras/`](starter/muestras/) trae `cupula.svg` (una imagen), `notas.txt` y `sesiones.csv`.

1. Abre `starter/index.html` en el navegador, por ejemplo con doble clic, y la consola de las DevTools con `F12` (o `Cmd+Option+I` en macOS).
2. Abre la carpeta `starter/muestras/` en el explorador de archivos, al lado del navegador.
3. En cada paso, descomenta el código del paso (`Ctrl+/` o `Cmd+/`), guarda y recarga con `F5`.
4. Selecciona los tres archivos de `muestras/` y arrástralos hasta la zona punteada, despacio, pasando por encima del texto de la zona.

Las salidas se obtuvieron en Chromium 156. Los pasos van en orden: descomenta del 1 en adelante. Al recargar, cada paso escribe su título; el resto aparece al arrastrar.

---

## Paso 1: Que el navegador no abra el archivo

Antes de descomentar nada, suelta `notas.txt` en cualquier parte de la página: el navegador abre el archivo y la página desaparece. Vuelve atrás y descomenta el paso.

```text
--- Paso 1: Fuera de la zona ---
  Suelta un archivo fuera de la zona: la página no cambia
```

Suelta `notas.txt` fuera de la zona, por ejemplo sobre el título:

```text
  soltado fuera de la zona: ignorado
```

`dropEffect = 'none'` cambia el cursor a «prohibido» mientras arrastras fuera de la zona. Dentro de la zona el paso no hace nada (`closest('#zone')`): de ella se encargan los siguientes.

## Paso 2: Los eventos de la zona

```text
--- Paso 2: Eventos ---
```

Arrastra los tres archivos, pasa por encima del texto de la zona y suéltalos:

```text
  eventos: dragenter, dragover, dragenter, dragleave, dragover ×2, drop
```

Esta salida es la de un arrastre corto. En uno real, `dragover` llega varias veces por segundo mientras el puntero está encima, y verás `dragover ×N` con N de decenas; la secuencia es la misma.

Con el `preventDefault` de `dragover`, la zona acepta los archivos y llega `drop`. Al pasar de la zona al párrafo de dentro llegan un `dragenter` (del párrafo, que sube hasta la zona) y un `dragleave` de la zona, aunque el puntero no ha salido. Si quitas el paso 2, `drop` no llega y el navegador abre el archivo.

## Paso 3: Resaltar la zona mientras se arrastra

```text
--- Paso 3: Resaltar ---
```

Mientras arrastras, el borde de la zona se vuelve azul y no parpadea al pasar por el texto. Al soltar:

```text
  profundidad al soltar: 1
```

El contador vale 1 al soltar sobre el texto: hubo dos `dragenter` (zona y párrafo) y un `dragleave`. Por eso `drop` lo pone a 0.

## Paso 4: Leer los archivos soltados

```text
--- Paso 4: dataTransfer.files ---
```

Al soltar los tres archivos:

```text
  3 archivos por arrastre: cupula.svg (384 B), notas.txt (50 B), sesiones.csv (128 B)
```

Debajo de la zona aparece un elemento por archivo, como `cupula.svg · image/svg+xml · llegó por arrastre`. Selecciona una palabra de la página y suéltala en la zona:

```text
  soltado algo que no son archivos: text/plain
```

## Paso 5: El botón y pegar también valen

```text
--- Paso 5: Botón y pegar ---
```

Pulsa «elígelos desde tu equipo» y elige los tres archivos, o selecciónalos en el explorador, cópialos (`Ctrl+C`) y pégalos en la página (`Ctrl+V`):

```text
  3 archivos por botón: cupula.svg (384 B), notas.txt (50 B), sesiones.csv (128 B)
  3 archivos por pegado: cupula.svg (384 B), notas.txt (50 B), sesiones.csv (128 B)
```

Los tres caminos acaban en `handleFiles`. Pulsa `Tab` hasta el enlace «elígelos desde tu equipo»: el input está oculto a la vista, pero recibe el foco y se abre con `Enter` o con la barra espaciadora. Pegar archivos copiados en el explorador funciona en unos sistemas y navegadores y en otros no. Si no te llega nada, copia una captura de pantalla al portapapeles y pégala: llega como un archivo de imagen.

## Paso 6: Vista previa de las imágenes

```text
--- Paso 6: Vista previa ---
  Imágenes en la galería al empezar: 0

✅ Lab completado. Arrastra, elige o pega archivos.
```

Al soltar los tres archivos, después de la línea del paso 4:

```text
  vista previa de cupula.svg: 160×90, URL liberada
```

Debajo de la lista aparece la cúpula. Solo `cupula.svg` tiene un `type` que empieza por `image/`, y su URL de objeto se revoca en cuanto la imagen carga.

---

## Comprobación

1. Quita `if (depth === 0)` del paso 3 y arrastra despacio sobre el texto de la zona. ¿Qué le pasa al borde? Explica qué evento lo provoca.
2. ¿Por qué el paso 4 lee `dataTransfer.files` solo en `drop`? Añade un `console.log(event.dataTransfer.files.length)` en el `dragover` del paso 2 y arrastra para comprobarlo.
3. Haz que `handleFiles` rechace los archivos de más de 200 B con un mensaje en la lista y sin vista previa. ¿Qué archivos de `muestras/` quedan fuera? ¿Hace falta cambiar algo en los listeners del arrastre, del botón o del pegado?

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 03 — URLs de objeto y descargas](../lab-03-urls-descargas/README.md) | [Proyecto — Importador de colección](../../3-proyecto/README.md) → |

[↑ Semana 22](../../README.md)
