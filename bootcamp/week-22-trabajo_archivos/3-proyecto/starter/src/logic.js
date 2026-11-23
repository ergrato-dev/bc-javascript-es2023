// Lógica del importador: valida archivos, los convierte en registros y prepara la exportación.
// Ninguna función usa el DOM: reciben objetos File o texto y devuelven datos, así que se pueden
// probar con Node (scripts/verificar-semana.sh 22), que también tiene File y Blob.
//
// Un campo (field) de FIELDS es un objeto { name, label, type, required }: type es 'text' o
// 'number'. Un registro (record) es un objeto con una propiedad por cada campo.

// Ayuda que puedes usar: la extensión de un nombre de archivo, en minúsculas y con el punto.
// extensionOf('Datos.CSV') → '.csv' · extensionOf('LEEME') → ''
const extensionOf = (name) => (name.includes('.') ? name.slice(name.lastIndexOf('.')).toLowerCase() : '');

// El tamaño en bytes como texto para personas, en unidades de 1024: menos de 1024 en bytes
// sin decimales y, desde ahí, en KB, MB o GB con un decimal.
// Ejemplos: formatBytes(512) → '512 B' · formatBytes(1536) → '1.5 KB' · formatBytes(1048576) → '1.0 MB'
export const formatBytes = (bytes) => {
  // TODO
};

// Comprueba un archivo antes de leerlo con las reglas { accept, maxBytes }: accept es una lista
// de extensiones como ['.csv', '.json']. Devuelve null si vale o un mensaje que empieza por el
// nombre del archivo:
//   'notas.txt: el tipo .txt no se admite (usa .csv o .json)'   (sin extensión: '(sin extensión)')
//   'vacio.csv: está vacío'
//   'grande.csv: pesa 2.1 KB y el máximo es 1.0 KB'              (con formatBytes)
export const checkFile = (file, { accept, maxBytes }) => {
  // TODO
};

// Convierte un texto CSV en un array de filas, cada una un array de textos. Acepta saltos de
// línea \n y \r\n, quita la marca BOM inicial y se salta las líneas vacías. Un campo entre
// comillas puede llevar comas, saltos de línea y comillas escritas dos veces ("").
// Ejemplo: parseCsv('id,title\r\nS1,"Luna, Sol"\r\n') → [['id', 'title'], ['S1', 'Luna, Sol']]
export const parseCsv = (text) => {
  // TODO
};

// Convierte las filas de parseCsv en registros según fields. La primera fila es la cabecera, con
// los name de los campos en cualquier orden (se ignoran las columnas que sobran). Cada valor se
// recorta con trim. Devuelve { records, errors }; un error es { row, message } y row cuenta las
// filas desde 1, con la cabecera como fila 1. Una fila con algún error no entra en records:
//   - sin filas o falta una columna en la cabecera: { row: 1, message: 'falta la columna seats' }
//     (solo la primera que falta) y records vacío
//   - un campo required vacío: { row: 3, message: 'falta title' }
//   - un campo 'number' que no es un número: { row: 4, message: 'seats no es un número' }
// Los campos 'number' vacíos y no obligatorios valen null. Solo se informa el primer error de cada fila.
export const toRecords = (rows, fields) => {
  // TODO
};

// Lee un File .csv o .json (según su extensión, sin mirar mayúsculas) y devuelve la promesa de
// { records, errors } con las mismas reglas que toRecords. Un JSON debe ser un array de objetos:
// cada objeto es una fila, con la cabecera formada por los name de fields.
//   - JSON que no se puede leer: { records: [], errors: [{ row: 0, message: 'no es JSON válido' }] }
//   - JSON que no es un array:   { records: [], errors: [{ row: 0, message: 'el JSON no es una lista' }] }
export const readRecords = async (file, fields) => {
  // TODO
};

// Une los registros importados (incoming) con los que ya había (current) por la propiedad key.
// Un registro con una clave que ya existe sustituye al anterior en su misma posición; uno nuevo
// va al final. No cambia los arrays recibidos. Devuelve { records, added, replaced }.
export const mergeRecords = (current, incoming, key) => {
  // TODO
};

// El texto CSV de los registros: cabecera con los name de fields y una línea por registro, con
// \r\n al final de cada línea (también la última). Un null se escribe vacío. Un valor con coma,
// comillas o salto de línea va entre comillas, con sus comillas escritas dos veces.
// Ejemplo: toCsv([{ id: 'S1', title: 'El "Sol"' }], fields) → 'id,title\r\nS1,"El ""Sol"""\r\n'
export const toCsv = (records, fields) => {
  // TODO
};

// Un File listo para descargar con los registros, en format 'csv' o 'json':
//   - 'csv':  nombre `${baseName}.csv`, type 'text/csv', contenido la marca BOM ('﻿') + toCsv
//   - 'json': nombre `${baseName}.json`, type 'application/json', JSON.stringify(records, null, 2)
export const exportFile = (records, fields, format, baseName) => {
  // TODO
};
