# 📁 Proyecto Semanal: Lector y Procesador de Archivos

> 🎯 ÚNICO ENTREGABLE: Este proyecto es el único entregable obligatorio para aprobar la semana.

## 🎯 Objetivo

Construir una aplicación que permita al usuario:

1. Cargar un archivo de texto (txt, json o csv) desde su sistema
2. Visualizar el contenido en pantalla
3. Procesar o transformar el contenido según el dominio asignado
4. Descargar el resultado procesado

## 📋 Tu Dominio Asignado

**Dominio**: asignado por el instructor al inicio del trimestre.

Debes adaptar el procesamiento de archivos a tu dominio específico.

## ✅ Requisitos Funcionales

1. Implementar carga de archivos con `input[type=file]` y/o zona drag & drop
2. Leer el contenido con `FileReader` (usando async/await)
3. Mostrar el contenido original en pantalla
4. Aplicar al menos una transformación o extracción de datos contextualizada
5. Descargar el resultado con `Blob` + `URL.createObjectURL`
6. Manejo básico de errores (archivo no legible, formato incorrecto)

## 💡 Ejemplos de Adaptación por Dominio

- **Museo**: Leer CSV de obras, mostrar listado, descargar solo las disponibles
- **Planetario**: Leer JSON de cuerpos celestes, filtrar por tipo, exportar el filtro
- **Acuario**: Leer TXT de descripción de especies, contar palabras por sección
- **Archivo histórico**: Leer TXT de documentos, resaltar fechas o nombres clave

## 🧩 Estructura del Proyecto

- `index.html`: interfaz principal
- `styles.css`: estilos básicos
- `starter/script.js`: lógica con TODOs para completar
- `solution/`: referencia para instructores (oculta por .gitignore)

## 🚀 Ejecución

1. Abre `index.html` en el navegador.
2. Implementa los TODOs en `starter/script.js`.
3. Prueba con archivos de tu dominio.

## 🧠 Criterios de Evaluación

- Uso correcto de File API y FileReader
- Lectura asíncrona con async/await
- Procesamiento coherente con el dominio
- Descarga funcional con Blob
- Manejo de errores visible al usuario
- Adaptación clara al dominio asignado
