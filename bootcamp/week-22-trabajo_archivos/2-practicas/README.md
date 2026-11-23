# Prácticas — Semana 22

Cuatro labs guiados. El primero se ejecuta con Node: descomentas paso a paso `starter/index.js`, ejecutas `node starter/index.js` y comparas la salida con la del README. Los otros tres son páginas, porque necesitan que una persona elija, arrastre o descargue archivos: descomentas `starter/main.js`, recargas la página y miras la consola de las DevTools. Antes de ejecutar, intenta predecir qué saldrá. No se entregan; preparan el [proyecto de la semana](../3-proyecto/README.md).

| Lab | Tema | Duración |
|---|---|---|
| [Lab 01](lab-01-blob-file/README.md) | Crear y leer Blobs, `slice`, Files, firmas de archivo, JSON y la marca BOM | 50 min |
| [Lab 02](lab-02-leer-archivos/README.md) | `<input type="file">`, validar antes de leer, `file.text()`, `FileReader` y parsear JSON y CSV | 55 min |
| [Lab 03](lab-03-urls-descargas/README.md) | URLs de objeto, data URLs, `revokeObjectURL` y descargar TXT, CSV y JSON | 55 min |
| [Lab 04](lab-04-arrastrar-soltar/README.md) | Eventos de arrastre, resaltar la zona, `dataTransfer.files`, botón y pegado, y vista previa | 50 min |

**Total:** 3 h 30 min.

## Antes de empezar

Para el lab 01 necesitas Node en la versión de [docs/stack-versions.md](../../../docs/stack-versions.md); para los demás, Chrome, Edge o Firefox actuales con sus DevTools, y saber abrir una carpeta en el explorador de archivos de tu sistema.

Los labs 02 y 04 traen sus archivos de prueba en `starter/muestras/`. Úsalos tal cual para que tu salida coincida con la del README; después, prueba con archivos tuyos.

Las páginas se abren con doble clic, sin servidor: sus scripts son clásicos (`<script defer>`), no módulos. Por eso, en los labs 02 y 03, los pasos asíncronos van dentro de funciones que se guardan en una lista `steps` y se ejecutan en orden.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Teoría — 🖐️ Arrastrar y soltar archivos](../1-teoria/04-arrastrar-soltar.md) | [Lab 01 — Blob y File](lab-01-blob-file/README.md) → |

[↑ Semana 22](../README.md)
