# Rúbrica de Evaluación - Semana 22

## Evidencias y ponderación

| Tipo de evidencia | Ponderación | Descripción |
|---|---:|---|
| Conocimiento | 30% | Blob y File, leer archivos del usuario, URLs de objeto y descargas, arrastrar y soltar |
| Desempeño | 40% | Lab 01 ejecutado con Node y labs 02 a 04 en el navegador |
| Producto | 30% | Importador de colección: `src/logic.js` completo, campos del dominio asignado y sus muestras |

---

## Criterios por evidencia

## 1) Conocimiento (30%)

### Criterios

- Explica qué guarda un `Blob`, por qué `size` cuenta bytes y no caracteres, y qué añade un `File`.
- Lee un `Blob` con `text()`, `bytes()` o `arrayBuffer()` y explica qué hace `slice` sin leer el archivo.
- Explica por qué ni la extensión ni el `type` garantizan el contenido, y cuándo merece la pena mirar la firma.
- Pide archivos con `<input type="file">`, valida extensión y tamaño antes de leer y sabe que `accept` solo filtra el diálogo.
- Explica las reglas de comillas de un CSV, por qué `split(',')` no basta y qué es la marca BOM.
- Distingue una URL `blob:` de una data URL, crea una descarga con `<a download>` y revoca las URLs cuando ya no hacen falta.
- Explica la secuencia de eventos de arrastre, por qué hace falta `preventDefault` en `dragover` y por qué `dataTransfer.files` está vacío hasta `drop`.

### Niveles

- **Alto (27-30):** cada respuesta va con un ejemplo propio que se puede ejecutar con Node o en la consola del navegador.
- **Medio (21-26):** comprende los conceptos con una o dos confusiones menores (por ejemplo, valida con `file.type` en lugar de la extensión, u olvida revocar una URL de objeto).
- **Bajo (<21):** parte los CSV con `split(',')`, lee archivos sin validarlos antes o no sabe por qué `drop` no llega.

---

## 2) Desempeño (40%)

### Criterios

- Lab 01: los 6 pasos descomentados; explica por qué `slice(0, 2)` de `'Cúpula'` da `C�` y por qué `text()` no deja ver la marca BOM.
- Lab 02: los 6 pasos con los cinco archivos de `muestras/`; explica por qué `notas.txt` llega aunque el `accept` no lo admite y por qué la fila `S3` tiene 5 columnas.
- Lab 03: los 6 pasos y las tres descargas; explica por qué la imagen sigue visible después de revocar su URL y por qué el CSV lleva la marca BOM.
- Lab 04: los 6 pasos arrastrando archivos de verdad; explica para qué sirve el contador `depth` y qué pasa si se quita el `preventDefault` de `dragover`.

En todos, la salida coincide con la del README del lab (salvo los `type` que dependen del sistema y el número de `dragover` del lab 04), sin errores.

### Niveles

- **Alto (36-40):** los cuatro labs completos y cada pregunta del apartado «Comprobación» respondida con sus palabras.
- **Medio (28-35):** los cuatro labs completos, con alguna explicación copiada de la teoría o incompleta.
- **Bajo (<28):** labs sin terminar o con errores.

---

## 3) Producto (30%)

### Criterios

- `PROYECTO=... ./scripts/verificar-semana.sh 22` pasa las 14 comprobaciones.
- `APP` y `FIELDS` de `src/data.js` describen fichas creíbles del dominio asignado: las columnas que tendría su hoja de cálculo real, con tipos y obligatoriedad razonables, y una clave que de verdad identifica cada registro. Las muestras usan datos del dominio, no los del ejemplo.
- La página funciona servida con `node server.js`: las pruebas del paso 10 del proyecto dan el resultado descrito con sus muestras, el CSV exportado se vuelve a importar sin errores y la consola no muestra errores.
- Las funciones usan lo de la semana donde corresponde: `checkFile` decide por la extensión y el tamaño sin leer, `parseCsv` sigue las reglas de comillas carácter a carácter, `readRecords` usa `file.text()` y atrapa el `SyntaxError`, `mergeRecords` no cambia los arrays recibidos, `exportFile` devuelve un `File` con su `type`, y ninguna función usa el DOM.

### Niveles

- **Alto (27-30):** 14/14, campos y muestras bien adaptados, página sin errores y funciones claras.
- **Medio (21-26):** 14/14 con campos poco adaptados (columnas genéricas, tipos sin sentido) o alguna prueba de la página que falla.
- **Bajo (<21):** menos de 14 comprobaciones, o los campos y las muestras del ejemplo Planetario sin cambiar.

---

## Calificación

| Evidencia | Peso | Mínimo para aprobar |
|---|---:|---:|
| Conocimiento | 30% | 21 |
| Desempeño | 40% | 28 |
| Producto | 30% | 21 |

La semana se aprueba con un 70% en total y el mínimo de cada evidencia.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Proyecto — Importador de colección](3-proyecto/README.md) | [Recursos — ebooks](4-recursos/ebooks-free/README.md) → |

[↑ Semana 22](README.md)
