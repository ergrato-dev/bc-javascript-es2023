# 🏆 Reto Semanal - Semana 22: Trabajo con Archivos

## 🎯 Reto: Procesador Multi-Formato

Construye una utilidad que pueda leer archivos **txt**, **json** y **csv**, mostrar estadísticas del contenido y exportar un reporte.

---

## 📝 Requisitos del Reto

### Nivel 1 - Básico ⭐

- [ ] Cargar un archivo con `input[type=file]`
- [ ] Mostrar nombre, tipo y tamaño del archivo
- [ ] Leer y mostrar el contenido en un `<pre>` o `<textarea>`

### Nivel 2 - Intermedio ⭐⭐

- [ ] Detectar el tipo de archivo (txt / json / csv) por extensión
- [ ] Para **txt**: contar palabras y líneas
- [ ] Para **json**: parsear y mostrar las claves del objeto raíz
- [ ] Para **csv**: contar filas y columnas

### Nivel 3 - Avanzado ⭐⭐⭐

- [ ] Implementar zona drag & drop además del input
- [ ] Generar un reporte JSON con las estadísticas
- [ ] Ofrecer descarga del reporte usando `Blob` + `URL.createObjectURL`
- [ ] Soportar múltiples archivos en secuencia

---

## 💡 Pistas

```javascript
// Detectar extensión
const getExtension = filename => filename.split('.').at(-1).toLowerCase();

// Leer como texto con Promise
const readFileAsText = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => resolve(e.target.result);
    reader.onerror = () => reject(new Error('Error al leer archivo'));
    reader.readAsText(file, 'UTF-8');
  });

// Descargar blob
const downloadBlob = (content, filename, type = 'application/json') => {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
};
```

---

## 📤 Entrega

Sube tu solución al repositorio del curso en la carpeta `retos/week-22/`.

---

_Reto Semana 22 · Trabajo con Archivos_
